import * as qs from 'qs'

/**
 * Modo de cache do fetch no Next.js (Data Cache em disco, `.next/cache/fetch-cache`).
 *
 * - `'revalidate'` (padrão): resposta gravada em disco e reaproveitada por 10 s.
 *   Use apenas quando a URL é fixa (ou tem poucas variações), pois o Next
 *   nunca apaga entradas antigas do Data Cache — cada URL distinta vira um
 *   arquivo permanente no disco.
 * - `'no-store'`: nada é gravado em disco. Use quando a query depende de
 *   `searchParams` (texto livre, filtros, página) ou de valores que mudam a
 *   cada render, pois isso geraria chaves ilimitadas no cache.
 */
export type FetchCacheMode = 'revalidate' | 'no-store'

const REVALIDATE_SECONDS = 10

type Props = {
  endpoint: string
  query?: Record<string, any>
  cache?: FetchCacheMode
}

/**
 * Decide o modo de cache a partir dos `searchParams` de uma página.
 * Com qualquer parâmetro definido (filtro, pesquisa, página) a URL do Strapi
 * varia com a entrada do usuário e não deve ir para o cache em disco; sem
 * parâmetros a URL é fixa e pode ser cacheada normalmente.
 */
export function cacheModeFor(
  searchParams: Record<string, string | string[] | undefined>,
): FetchCacheMode {
  const hasParams = Object.values(searchParams).some(
    (value) => value !== undefined && value !== '',
  )

  return hasParams ? 'no-store' : 'revalidate'
}

/**
 * Data/hora atual em ISO truncada ao minuto (segundos e ms zerados).
 * Para filtros do tipo `$lte: agora` em páginas cacheadas: com
 * `new Date().toISOString()` cada render gerava uma URL (e um arquivo de
 * cache) nova; truncando ao minuto a URL se repete dentro do mesmo minuto.
 */
export function nowTruncatedToMinute(): string {
  const now = new Date()
  now.setUTCSeconds(0, 0)

  return now.toISOString()
}

function fetchOptions(cache: FetchCacheMode): RequestInit {
  if (cache === 'no-store') {
    return { cache: 'no-store' }
  }

  return { next: { revalidate: REVALIDATE_SECONDS } }
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @example
    const hero = await fetchApi<IHero>({
        endpoint: "heroes",
        locale: lang,
        query: {
            filters: {
                location: Locations.Hero.Osesp,
            },
            populate: {
                audio: {
                    fields: ["name", "url", "width", "height", "size", "mime"],
                },
                video: {
                    fields: ["name", "url", "width", "height", "size", "mime"],
                },
                image: {
                    fields: ["name", "url", "width", "height", "size", "mime"],
                },
            },
        },
    })
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  cache = 'revalidate',
}: Props): Promise<[T, any]> {
  try {
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.slice(1)
    }

    query = query || {}

    const queryString = qs.stringify(query)
    const url = new URL(`${process.env.API_URL}/${endpoint}?${queryString}`)

    const res = await fetch(url.toString(), fetchOptions(cache))
    const data = await res.json()

    const meta = data.meta
    const items = data.data as T

    console.log(data.error)

    if (data.error) {
      throw new Error(JSON.stringify(data.error))
    }

    return [items as T, meta]
  } catch (error) {
    console.error(error)
    console.error(JSON.stringify(error))
    return [[] as T, null]
  }
}

export async function searchApi<T>({
  search,
  filters,
}: {
  search: string
  filters?: {
    contentType: string[]
  }
}): Promise<T | null> {
  try {
    const url = new URL(
      `https://app.stjd.com.br/api/fuzzy-search/search?query=${search}${filters?.contentType ? `&filters[contentTypes]=${filters?.contentType.join(',')}` : ''}`,
    )

    // Busca com texto livre do usuário: cada termo seria uma entrada nova e
    // permanente no Data Cache em disco, por isso nunca é cacheada.
    const res = await fetch(url.toString(), { cache: 'no-store' })
    const data = await res.json()

    if (data.error) {
      throw new Error(JSON.stringify(data.error))
    }

    return data as T
  } catch (error) {
    console.error(error)
    console.error(JSON.stringify(error))
    return null
  }
}
