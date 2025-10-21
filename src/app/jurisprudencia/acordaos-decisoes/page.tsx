import AcordoesDecisoesTemplate from './acordaos-decisoes-template'
import { Doc } from '@/lib/types'
import fetchApi from '@/lib/strapi'

export const revalidate = 10

type AcordoesFilters = {
  pesquisa?: string
  categoria?: string
  ano?: string
  mes?: string
}

async function AcordoesDecisoes({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = {
    ...(await searchParams),
  } as AcordoesFilters

  // Construct Strapi-compatible filters
  const query: Record<string, any> = {}

  // Handle single text search across titulo and subtitulo fields
  if (filters.pesquisa) {
    query.$or = [
      { titulo: { $containsi: filters.pesquisa } },
      { subtitulo: { $containsi: filters.pesquisa } },
    ]
  }

  // Handle categoria filter
  if (filters.categoria) {
    query.categoria = { $eq: filters.categoria }
  }

  // Handle year and month filters
  const filterYear = filters.ano && filters.ano !== 'todos' ? filters.ano : null
  const filterMonth = filters.mes && filters.mes !== 'todos' ? filters.mes : null

  let start = filterYear ? `${filterYear}-01-01` : null
  let end = filterYear ? `${Number(filterYear) + 1}-01-01` : null

  if (filterMonth) {
    const monthPlusOne = Number(filterMonth) + 1
    const nextMonth = monthPlusOne > 12 ? 1 : monthPlusOne
    const necessaryZero = nextMonth < 10 ? '0' : ''
    const year = Number(filterYear)
    const nextYear = monthPlusOne > 12 ? year + 1 : year

    start = `${year}-${filterMonth}-01`
    end = `${nextYear}-${necessaryZero}${nextMonth}-01`
  }

  if (start && end) {
    query.data = { $gte: start, $lt: end }
  }

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
