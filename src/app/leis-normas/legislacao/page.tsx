import { BasicFilters, getBasicQuery } from '@/_server-actions/get-basic-query'
import LegislacaoTemplate from './legislacao-template'
import { Doc } from '@/lib/types'
import fetchApi from '@/lib/strapi'

async function Legislacao({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = {
    ...(await searchParams),
  } as BasicFilters

  const query = await getBasicQuery(filters)

  const [docs] = await fetchApi<Doc[]>({
    endpoint: 'legislations',
    query: {
      sort: 'data:desc',
      fields: ['id', 'titulo', 'subtitulo'],
      populate: ['documento'],
      filters: query,
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  return <LegislacaoTemplate filters={filters} docs={docs} />
}

export default Legislacao
