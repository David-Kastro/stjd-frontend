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
  console.log('🔍 searchParams recebidos:', searchParamsResolved)

  const filters = {
    ...searchParamsResolved,
  } as BasicFilters

  console.log('🎯 filters processados:', filters)

  const query = await getBasicQuery(filters)

  console.log('⚙️ query do getBasicQuery:', query)

  const finalFilters = {
    ...query,
    tipo: 'Notícia',
    data_publicacao: {
      $lte: new Date().toISOString(),
    },
  }

  console.log('🚀 filtros finais enviados para API:', finalFilters)

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

  console.log('📊 dados retornados:', newsData)

  return <NoticiasTemplate filters={filters} newsData={newsData} />
}

export default Noticias
