import fetchApi from '@/lib/strapi'
import EditaisTemplate from './editais-template'
import { Edital } from '@/lib/types'
import { BasicFilters, getBasicQuery } from '@/_server-actions/get-basic-query'

async function Editais({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = {
    ...(await searchParams),
  } as BasicFilters

  const query = await getBasicQuery(filters)

  const [editais] = await fetchApi<Edital[]>({
    endpoint: 'notices',
    query: {
      sort: 'id:desc',
      fields: ['id', 'titulo', 'subtitulo', 'tipo', 'data'],
      populate: ['documento'],
      filters: query,
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  return <EditaisTemplate filters={filters} editais={editais} />
}

export default Editais
