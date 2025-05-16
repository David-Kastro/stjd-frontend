import { BasicFilters, getBasicQuery } from '@/_server-actions/get-basic-query'
import { Doc } from '@/lib/types'
import fetchApi from '@/lib/strapi'
import SumulasTemplate from './sumulas-template'

export const revalidate = 10

async function Sumulas({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = (await searchParams) as BasicFilters

  const query = await getBasicQuery(filters, { categoria: 'Súmulas' })

  const [docs] = await fetchApi<Doc[]>({
    endpoint: 'summaries',
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
