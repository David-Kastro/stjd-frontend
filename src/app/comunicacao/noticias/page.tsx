import React from 'react'
import { NoticiasTemplate } from './noticias-template'
import { BasicFilters, getBasicQuery } from '@/_server-actions/get-basic-query'
import fetchApi from '@/lib/strapi'
import { News } from '@/lib/types'
import { Metadata } from 'next'

export const revalidate = 10

export const metadata: Metadata = {
  title: 'Noticias | STJD | Superior Tribunal de Justiça Desportiva',
  description: 'Noticias do Superior Tribunal de Justiça Deportiva',
  keywords: ['stjd', 'Noticia stjd', 'galeria stjd'],
}

async function Noticias({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParamsResolved = await searchParams

  const filters = {
    ...searchParamsResolved,
  } as BasicFilters

  const query = await getBasicQuery(filters)

  const finalFilters = {
    ...query,
    tipo: 'Notícia',
    data_publicacao: {
      $lte: new Date().toISOString(),
    },
  }

  const [newsData] = await fetchApi<News[]>({
    endpoint: 'articles',
    query: {
      sort: 'data_publicacao:desc',
      populate: {
        imagem: {
          fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
        },
      },
      filters: finalFilters,
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  return <NoticiasTemplate filters={filters} newsData={newsData} />
}

export default Noticias
