import React from 'react'
import fetchApi from '@/lib/strapi'
import { Process, ProcessFilters } from '@/lib/types'
import ProcessosTemplate from './processos-template'

export const revalidate = 10

async function Processos({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = (await searchParams) as ProcessFilters

  const query = {
    ...(filters.tipo ? { tipo: filters.tipo } : {}),
    ...(filters.dispositivo
      ? { titulo: { $contains: filters.dispositivo } }
      : {}),
    ...(filters.infracao ? { infracao: filters.infracao } : {}),
    ...(filters.relator ? { relator: filters.relator } : {}),
    ...(filters.procurador ? { procurador: filters.procurador } : {}),
    ...(filters.data ? { data: filters.data } : {}),
    ...(filters.name1 || filters.name2
      ? {
          partes: {
            $or: [
              { nome: { $eq: filters.name1 } },
              { nome: { $eq: filters.name2 } },
            ],
          },
        }
      : {}),
  }

  const [processos] = await fetchApi<Process[]>({
    endpoint: 'processes',
    query: {
      sort: 'data:desc',
      fields: [
        'id',
        'tipo',
        'data',
        'relator',
        'procurador',
        'titulo',
        'subtitulo',
      ],
      populate: ['documento', 'partes'],
      filters: query,
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  return <ProcessosTemplate processos={processos} filters={filters} />
}

export default Processos
