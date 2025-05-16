import fetchApi from '@/lib/strapi'
import { Edital, News } from '@/lib/types'
import React from 'react'
import Article from '@/_components/Article'

type Props = {
  params: Promise<{ slug: string }>
}

export const revalidate = 10

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const [[data]] = await fetchApi<News[]>({
    endpoint: 'articles',
    query: {
      sort: 'data_publicacao:desc',
      populate: {
        imagem: {
          fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
        },
      },
      filters: {
        slug,
      },
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  return {
    title: `STJD | ${data.headline}`,
    description: data.lead,
    openGraph: {
      title: `STJD | ${data.headline}`,
      description: data.lead,
      images: [data.imagem.url],
    },
    twitter: {
      title: data.headline,
      description: data.lead,
      images: [data.imagem.url],
    },
  }
}

async function Noticia({ params }: Props) {
  const { slug } = await params
  const [[data]] = await fetchApi<News[]>({
    endpoint: 'articles',
    query: {
      sort: 'data_publicacao:desc',
      populate: {
        imagem: {
          fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
        },
      },
      filters: {
        slug,
      },
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  const [newsData] = await fetchApi<News[]>({
    endpoint: 'articles',
    query: {
      sort: 'data_publicacao:desc',
      populate: {
        imagem: {
          fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
        },
      },
      filters: {
        tipo: 'Notícia',
      },
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  const [editais] = await fetchApi<Edital[]>({
    endpoint: 'notices',
    query: {
      sort: 'data:desc',
      fields: ['id', 'titulo', 'subtitulo', 'tipo'],
      filters: {
        categoria: 'Editais',
      },
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  return (
    <Article articleData={data} editais={editais} readMoreData={newsData} />
  )
}

export default Noticia
