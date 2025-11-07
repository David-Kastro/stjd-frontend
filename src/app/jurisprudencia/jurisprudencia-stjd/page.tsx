import fetchApi from '@/lib/strapi'
import type { Jurisprudencia, JurisprudenciaFilters } from '@/lib/types'
import JurisprudenciaTemplate from './jurisprudencia-template'

export const revalidate = 10

async function JurisprudenciaStj({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = (await searchParams) as JurisprudenciaFilters

  // Construct Strapi-compatible filters
  const query: Record<string, any> = {}

  // Handle single text search across all fields
  if (filters.pesquisa) {
    query.$or = [
      { titulo: { $containsi: filters.pesquisa } },
      { subtitulo: { $containsi: filters.pesquisa } },
      { numero_acordao: { $containsi: filters.pesquisa } },
      { numero_processo: { $containsi: filters.pesquisa } },
      { relator: { nome: { $containsi: filters.pesquisa } } },
      { revisor: { nome: { $containsi: filters.pesquisa } } },
      { relator_designado: { nome: { $containsi: filters.pesquisa } } },
    ]
  }

  if (filters.documentId) {
    query.documentId = { $eq: filters.documentId }
  }

  // Handle year filter
  if (filters.ano) {
    // Assuming ano is a field or we can filter by year part of a date
    query.data_julgamento = {
      ...(query.data_julgamento || {}),
      $between: [`${filters.ano}-01-01`, `${filters.ano}-12-31`],
    }
  }

  const [jurisprudencias] = await fetchApi<Jurisprudencia[]>({
    endpoint: 'jurisprudences',
    query: {
      sort: 'data_julgamento:desc',
      fields: [
        'id',
        'orgao',
        'titulo',
        'subtitulo',
        'data_julgamento',
        'data_publicacao',
        'numero_acordao',
        'numero_processo',
      ],
      populate: ['documento', 'relator', 'revisor', 'relator_designado'],
      filters: query,
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  console.log('jurisprudencias', jurisprudencias)

  return (
    <JurisprudenciaTemplate
      jurisprudencias={jurisprudencias}
      filters={filters}
    />
  )
}

export default JurisprudenciaStj
