import { BasicFilters, getBasicQuery } from '@/_server-actions/get-basic-query'
import ResolucoesTemplate from './resolucoes-template'
import { Doc } from '@/lib/types'
import fetchApi from '@/lib/strapi'

export const revalidate = 10

async function Resolucoes({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = {
    ...(await searchParams),
  } as BasicFilters

  const query = await getBasicQuery(filters)

  const [docs] = await fetchApi<Doc[]>({
    endpoint: 'resolutions',
    query: {
      sort: 'data:desc',
      fields: ['id', 'titulo', 'subtitulo', 'numero_resolucao'],
      populate: ['documento'],
      filters: query,
      pagination: {
        pageSize: 200,
        page: 1,
      },
    },
  })

  return <ResolucoesTemplate filters={filters} docs={docs} />
}

export default Resolucoes
