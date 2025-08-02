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

  // Handle basic text filters with case-insensitive contains
  if (filters.acordao) {
    query.numero_acordao = { $containsi: filters.acordao }
  }

  if (filters.processo) {
    query.numero_processo = { $containsi: filters.processo }
  }

  if (filters.orgao) {
    query.orgao = { $eq: filters.orgao }
  }

  if (filters.classe) {
    query.classe = { $eq: filters.classe }
  }

  // Handle related entities
  if (filters.relator) {
    query.relator = {
      nome: { $containsi: filters.relator },
    }
  }

  if (filters.revisor) {
    query.revisor = {
      nome: { $containsi: filters.revisor },
    }
  }

  if (filters.relatorDesignado) {
    query.relator_designado = {
      nome: { $containsi: filters.relatorDesignado },
    }
  }

  // Handle date filters
  if (filters.dataJulgamento) {
    query.data_julgamento = { $eq: filters.dataJulgamento }
  }

  if (filters.dataPublicacao) {
    query.data_publicacao = { $eq: filters.dataPublicacao }
  }

  // Handle content search
  if (filters.pesquisa) {
    // Search in multiple fields
    query.$or = [
      { titulo: { $containsi: filters.pesquisa } },
      { subtitulo: { $containsi: filters.pesquisa } },
      { numero_acordao: { $containsi: filters.pesquisa } },
    ]
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
