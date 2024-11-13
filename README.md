
# Superior Tribunal de Justiça Desportiva (STJD)

Este repositório contém o código-fonte do site oficial do Superior Tribunal de Justiça Desportiva (STJD), desenvolvido utilizando [Next.js](https://nextjs.org/).

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre o Projeto

O site do STJD fornece informações sobre o tribunal, incluindo notícias, resultados de julgamentos, legislações e outros recursos relacionados à justiça desportiva no futebol brasileiro. O objetivo é oferecer uma plataforma acessível e informativa para atletas, clubes, advogados e o público em geral.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React para desenvolvimento de aplicações web.
- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript que adiciona tipagem estática ao código.
- [Styled Components](https://styled-components.com/) - Biblioteca para estilização de componentes em React.
- [Axios](https://axios-http.com/) - Cliente HTTP para realizar requisições à API.

## Instalação e Configuração

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/stjd-site.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd stjd-site
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env.local` na raiz do projeto e defina as variáveis necessárias, como URLs de APIs, chaves de acesso, etc. Consulte o arquivo `.env.example` para referência.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- **`npm run dev`** ou **`yarn dev`**: Inicia o servidor de desenvolvimento em modo hot-reload. Acesse [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

- **`npm run build`** ou **`yarn build`**: Cria a versão de produção da aplicação.

- **`npm run start`** ou **`yarn start`**: Inicia o servidor com a versão de produção.

- **`npm run lint`** ou **`yarn lint`**: Executa o linter para verificar problemas no código.

## Estrutura do Projeto

A estrutura principal do projeto é a seguinte:

```
stjd-site/
├── public/             # Arquivos estáticos (imagens, fontes, etc.)
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── styles/         # Estilos globais e temas
│   ├── utils/          # Funções utilitárias
│   └── services/       # Configurações de APIs e serviços externos
├── .env.example        # Exemplo de variáveis de ambiente
├── next.config.js      # Configurações do Next.js
└── package.json        # Dependências e scripts
```

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção de bug: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Adiciona minha nova feature'`.
4. Faça o push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
