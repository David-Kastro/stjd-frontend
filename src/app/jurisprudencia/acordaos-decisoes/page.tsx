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
    categoria: 'Acordãos',
  } as BasicFilters

  const query = await getBasicQuery(filters)

  const [docs] = await fetchApi<Doc[]>({
    endpoint: 'docs',
    query: {
      sort: 'id:desc',
      fields: ['id', 'titulo', 'subtitulo', 'tipo'],
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
