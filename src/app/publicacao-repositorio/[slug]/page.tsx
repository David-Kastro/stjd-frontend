import fetchApi from '@/lib/strapi'
import { Edital, Publication } from '@/lib/types'
import React from 'react'
import Article from '@/_components/Article'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  const [[data]] = await fetchApi<Publication[]>({
    endpoint: 'articles',
    query: {
      sort: 'id:desc',
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

async function Publicacao({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const [[data]] = await fetchApi<Publication[]>({
    endpoint: 'articles',
    query: {
      sort: 'id:desc',
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

  const [newsData] = await fetchApi<Publication[]>({
    endpoint: 'articles',
    query: {
      sort: 'id:desc',
      populate: {
        imagem: {
          fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
        },
      },
      filters: {
        tipo: 'Publicação',
      },
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  const [editais] = await fetchApi<Edital[]>({
    endpoint: 'docs',
    query: {
      sort: 'id:desc',
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

export default Publicacao
