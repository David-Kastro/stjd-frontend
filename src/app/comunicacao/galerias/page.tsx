import React from 'react'
import { GaleriasTemplate } from './galerias-template'
import { BasicFilters, getBasicQuery } from '@/_server-actions/get-basic-query'
import fetchApi from '@/lib/strapi'
import { Galeria } from '@/lib/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galerias | STJD | Superior Tribunal de Justiça Desportiva',
  description: 'Galerias do Superior Tribunal de Justiça Deportiva',
  keywords: ['stjd', 'galerias stjd', 'galeria stjd'],
}

async function Galerias({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = {
    ...(await searchParams),
  } as BasicFilters

  const query = await getBasicQuery(filters)

  console.log(query)

  const [galerias] = await fetchApi<Galeria[]>({
    endpoint: 'galerias',
    query: {
      sort: 'id:desc',
      fields: ['id', 'titulo', 'data', 'slug', 'lugar'],
      populate: ['imagens'],
      filters: query,
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  return <GaleriasTemplate filters={filters} galerias={galerias} />
}

export default Galerias
