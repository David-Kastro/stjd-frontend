import fetchApi from '@/lib/strapi'
import { Presidente } from '@/lib/types'
import HistoricoView from './historico-view'

export const revalidate = 10

export default async function Historico() {
  const [presidentes] = await fetchApi<Presidente[]>({
    endpoint: 'presidentes',
    query: {
      populate: {
        foto: {
          fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
        },
      },
      sort: ['ordem:asc', 'periodoInicio:asc'],
      pagination: {
        page: 1,
        pageSize: 200,
      },
    },
  })

  return <HistoricoView presidentes={presidentes ?? []} />
}
