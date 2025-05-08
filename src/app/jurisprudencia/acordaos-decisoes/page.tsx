import { BasicFilters, getBasicQuery } from '@/_server-actions/get-basic-query'
import AcordoesDecisoesTemplate from './acordaos-decisoes-template'
import { Doc } from '@/lib/types'
import fetchApi from '@/lib/strapi'

async function AcordoesDecisoes({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = {
    ...(await searchParams),
  } as BasicFilters

  const query = await getBasicQuery(filters)

  const [docs] = await fetchApi<Doc[]>({
    endpoint: 'decisions',
    query: {
      sort: 'data:desc',
      fields: ['id', 'titulo', 'subtitulo', 'tipo', 'categoria'],
      populate: ['documento'],
      filters: query,
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  return <AcordoesDecisoesTemplate filters={filters} docs={docs} />
}

export default AcordoesDecisoes
