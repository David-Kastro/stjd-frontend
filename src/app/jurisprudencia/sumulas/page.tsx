import { BasicFilters, getBasicQuery } from '@/_server-actions/get-basic-query'
import { Doc } from '@/lib/types'
import fetchApi, { cacheModeFor } from '@/lib/strapi'
import SumulasTemplate from './sumulas-template'

export const revalidate = 10

async function Sumulas({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams
  const filters = resolvedSearchParams as BasicFilters

  const query = await getBasicQuery(filters)

  const [docs] = await fetchApi<Doc[]>({
    endpoint: 'summaries',
    cache: cacheModeFor(resolvedSearchParams),
    query: {
      sort: 'data:desc',
      fields: ['id', 'titulo', 'subtitulo', 'tipo'],
      populate: ['documento'],
      filters: query,
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  return <SumulasTemplate filters={filters} docs={docs} />
}

export default Sumulas
