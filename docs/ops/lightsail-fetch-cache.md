# Cache de dados do Next.js no Lightsail (`.next/cache/fetch-cache`)

## O problema

Em 2026-11-23 o disco da instância `stjd-site-ssr` chegou a 100%: o diretório
`/var/www/stjd/.next/cache/fetch-cache` tinha 52 GB e 641 mil arquivos
acumulados desde 2026-06-30 (~5 mil por dia).

Causa: todo `fetch` feito por `src/lib/strapi.ts` usava `next: { revalidate: 10 }`.
Com isso o Next grava a resposta de **cada URL distinta** no Data Cache em disco
e nunca apaga entradas antigas (`next build` também preserva `.next/cache`).
Três fontes geravam URLs novas sem parar:

1. Filtros `$lte: new Date().toISOString()` (home, listagem de notícias,
   publicações): a URL mudava a cada render, ou seja, a cada 10 s.
2. Páginas de listagem que montam a query a partir de `searchParams`
   (pesquisa por texto livre, filtros, página).
3. `searchApi` (busca fuzzy com o texto digitado pelo usuário).

## O que mudou no código (branch `fix/fetch-cache-growth`)

- `src/lib/strapi.ts`
  - `fetchApi` aceita `cache: 'revalidate' | 'no-store'` (padrão `'revalidate'`,
    10 s, igual ao comportamento anterior). Com `'no-store'` nada é gravado em
    disco.
  - `cacheModeFor(searchParams)`: devolve `'no-store'` quando há qualquer
    parâmetro de busca definido e `'revalidate'` quando não há. Assim a visita
    "sem filtros" de cada listagem (a mais comum) continua cacheada por 10 s e
    só as variações vindas do usuário deixam de ir para o disco.
  - `nowTruncatedToMinute()`: data atual em ISO com segundos/ms zerados, para
    filtros `$lte: agora`. A URL passa a se repetir dentro do mesmo minuto
    (no máximo 1.440 entradas/dia em vez de 8.640).
  - `searchApi` usa `cache: 'no-store'`.
- Páginas ajustadas para passar `cache: cacheModeFor(...)`:
  `comunicacao/noticias`, `comunicacao/noticias/[slug]` (lista "leia mais"),
  `comunicacao/galerias`, `jurisprudencia/acordaos-decisoes`,
  `jurisprudencia/jurisprudencia-stjd`, `jurisprudencia/sumulas`,
  `leis-normas/legislacao`, `leis-normas/resolucoes`, `processos/editais`,
  `processos/processos`.
- Páginas com `$lte` trocado por `nowTruncatedToMinute()`: `/` (home),
  `comunicacao/noticias`, `publicacao-repositorio`.

Decisão: a opção (a) da análise (deixar o chamador escolher `no-store`) cobre
todos os casos e não exige um `cacheHandler` customizado em `next.config.ts`.
Um `cacheHandler` com limite seria mais invasivo (substitui o cache de páginas
ISR também) e não resolveria a raiz, que é gerar chaves infinitas.

Observação: essas listagens já eram renderizadas sob demanda (`ƒ` no `next
build`) porque leem `searchParams`; o `export const revalidate = 10` delas
nunca cacheou a página inteira, só o `fetch`. Portanto, o único efeito
prático do `no-store` é que uma busca filtrada sempre consulta o Strapi
(uma query paginada de 10 itens), o que é o esperado.

## Complemento operacional (aplicar no servidor com o usuário)

### 1. Cron diário expurgando entradas com mais de 1 dia

Mesmo com a correção, URLs legítimas (ex.: um minuto diferente, uma página de
notícia nova) continuam criando entradas que o Next nunca remove. O cron mantém
o diretório pequeno. Rodar como `root` no Lightsail:

```sh
sudo tee /etc/cron.daily/stjd-fetch-cache >/dev/null <<'EOF'
#!/bin/sh
# Expurga entradas do Data Cache do Next.js (stjd.org.br) com mais de 1 dia.
# O Next recria qualquer entrada que precisar; tags-manifest.json é preservado.
CACHE_DIR=/var/www/stjd/.next/cache/fetch-cache
[ -d "$CACHE_DIR" ] || exit 0
find "$CACHE_DIR" -type f -mtime +1 -not -name tags-manifest.json -delete
EOF
sudo chmod +x /etc/cron.daily/stjd-fetch-cache
```

Teste imediato (sem esperar o cron): `sudo run-parts --test /etc/cron.daily`
deve listar `stjd-fetch-cache`; depois `sudo /etc/cron.daily/stjd-fetch-cache`
e `du -sh /var/www/stjd/.next/cache/fetch-cache`.

Se preferir crontab em vez de `cron.daily`:

```
0 3 * * * find /var/www/stjd/.next/cache/fetch-cache -type f -mtime +1 -not -name tags-manifest.json -delete
```

### 2. Swapfile permanente de 2 GB (opcional, recomendado)

A instância tem 1,9 GB de RAM e `next build` precisa de ~870 MB de swap. Com o
swap permanente o `deploy.sh` passa a funcionar sem preparo manual:

```sh
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-stjd-swappiness.conf
sudo sysctl --system >/dev/null
free -h
```

`vm.swappiness=10` faz o swap ser usado só sob pressão (no build), sem
prejudicar o pm2 em operação normal.

## Deploy desta correção

Se o swap permanente **já** estiver ativo:

```sh
/var/www/stjd/deploy.sh
```

Se **não** houver swap (estado atual), criar swap temporário antes do build e
remover depois:

```sh
sudo fallocate -l 2G /swapfile.build && sudo chmod 600 /swapfile.build \
  && sudo mkswap /swapfile.build && sudo swapon /swapfile.build
cd /var/www/stjd && git fetch && git checkout fix/fetch-cache-growth && git pull
NODE_OPTIONS=--max-old-space-size=1536 /var/www/stjd/deploy.sh
sudo swapoff /swapfile.build && sudo rm /swapfile.build
```

(Depois do merge em `main`, basta `/var/www/stjd/deploy.sh` com o swap, pois ele
já faz `git pull`, `npm ci --legacy-peer-deps`, `npm run build` e
`pm2 reload stjd-site`.)

Conferência após o deploy:

```sh
df -h /
du -sh /var/www/stjd/.next/cache/fetch-cache
find /var/www/stjd/.next/cache/fetch-cache -type f | wc -l   # repetir no dia seguinte
```

O número de arquivos deve estabilizar em poucos milhares (cron) em vez de
crescer ~5 mil por dia.
