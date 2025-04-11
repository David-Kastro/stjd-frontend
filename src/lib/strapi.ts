import * as qs from 'qs'

type Props = {
  endpoint: string
  query?: Record<string, any>
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
}: Props): Promise<[T, any]> {
  try {
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.slice(1)
    }

    query = query || {}

    const queryString = qs.stringify(query)
    const url = new URL(`${process.env.API_URL}/${endpoint}?${queryString}`)
    console.log('[API LOG] URL: ', url.toString())

    const res = await fetch(url.toString(), {
      next: {
        revalidate: 3600,
        tags: ['articles'],
      },
    })
    const data = await res.json()

    const meta = data.meta
    const items = data.data as T

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
}: {
  search: string
}): Promise<T | null> {
  try {
    const url = new URL(
      `https://app.stjd.com.br/api/fuzzy-search/search?query=${search}`,
    )

    const res = await fetch(url.toString(), {
      next: {
        revalidate: 900, // 15 minutes
      },
    })
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
