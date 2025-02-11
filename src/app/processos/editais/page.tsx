import fetchApi from '@/lib/strapi'
import EditaisTemplate from './editais-template'
import { Edital } from '@/lib/types'

export type EditaisFilters = {
  ano?: string
  mes?: string
  tipo?: string
}

async function Editais({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = (await searchParams) as EditaisFilters

  let start = ''
  let end = ''

  if (filters.ano) {
    start = `${filters.ano}-01-01`
    end = `${Number(filters.ano) + 1}-01-01`
  }

  if (filters.mes) {
    const monthPlusOne = Number(filters.mes) + 1
    const nextMonth = monthPlusOne > 12 ? 1 : monthPlusOne
    const necessaryZero = nextMonth < 10 ? '0' : ''
    const year = nextMonth > 12 ? Number(filters.ano) + 1 : Number(filters.ano)

    start = `${year}-${filters.mes}-01`
    end = `${year}-${necessaryZero}${nextMonth}-01`
  }

  console.log(start, end)

  const queryFilters = {
    categoria: 'Editais',
    ...(filters.tipo ? { tipo: filters.tipo } : {}),
    ...(start && end ? { data: { $gte: start, $lt: end } } : {}),
  }

  console.log(queryFilters)

  const [editais] = await fetchApi<Edital[]>({
    endpoint: 'docs',
    query: {
      sort: 'id:desc',
      fields: ['id', 'titulo', 'subtitulo', 'tipo'],
      populate: ['documento'],
      filters: queryFilters,
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  return <EditaisTemplate filters={filters} editais={editais} />
}

export default Editais
