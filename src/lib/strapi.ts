import * as qs from 'qs'
import env from '@/lib/load-env'

type Props = {
  endpoint: string
  locale: 'pt' | 'en';
  query?: Record<string, any>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

const localeKeys = {
  pt: 'pt-BR',
  en: 'en'
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @example
    const hero = await fetchApi<IHero>({
        endpoint: "heroes",
        wrappedByKey: "data",
        wrappedByList: true,
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
  locale,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  try {

    if (endpoint.startsWith('/')) {
      endpoint = endpoint.slice(1);
    }

    query = query || {};
    query['locale'] = localeKeys[locale];


    const queryString = qs.stringify(query)
    const url = new URL(`${env.apiUrl}/${endpoint}?${queryString}`);

    // console.log("[API LOG] URL: ", endpoint , decodeURI(url.href))
    const res = await fetch(url.toString());
    let data = await res.json();

    if (!data) return data as T;
    if(data.error) throw new Error(data.error);

    const meta = data?.meta
    if (wrappedByKey) {
      if (Array.isArray(data[wrappedByKey])) {
        data = data[wrappedByKey]?.map(item => {
          return { id: item.id, ...item.attributes }
        });
      } else {
        data = { id: data[wrappedByKey].id, ...data[wrappedByKey].attributes }
      }
    }

    if (wrappedByList) {
      data = data[0];
    }

    if (meta)
      data.meta = meta

    return data as T;
  } catch (error) {
    console.error(JSON.stringify(error));
    return [] as T;
  }
}