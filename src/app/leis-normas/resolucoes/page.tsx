import { BasicFilters, getBasicQuery } from '@/_server-actions/get-basic-query'
import ResolucoesTemplate from './resolucoes-template'
import { Doc } from '@/lib/types'
import fetchApi, { cacheModeFor } from '@/lib/strapi'

export const revalidate = 10

async function Resolucoes({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams
  const filters = {
    ...resolvedSearchParams,
  } as BasicFilters

  const query = await getBasicQuery(filters)

  const [docs] = await fetchApi<Doc[]>({
    endpoint: 'resolutions',
    cache: cacheModeFor(resolvedSearchParams),
    query: {
      sort: 'data:desc',
      fields: ['id', 'titulo', 'subtitulo', 'numero_resolucao', 'data'],
      populate: ['documento'],
      filters: query,
      pagination: {
        pageSize: 42,
        page: 1,
      },
    },
  })

  return <ResolucoesTemplate filters={filters} docs={docs} />
}

export default Resolucoes
