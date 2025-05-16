import React from 'react'
import { GaleriaTemplate } from './galeria-template'
import fetchApi from '@/lib/strapi'
import { Galeria } from '@/lib/types'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export const revalidate = 900

export const metadata: Metadata = {
  title: 'Galerias | STJD | Superior Tribunal de Justiça Desportiva',
  description: 'Superior Tribunal de Justiça Deportiva',
  keywords: ['stjd', 'galeria stjd'],
}

async function GaleriaPage({ params }: Props) {
  const { slug } = await params
  const [galerias] = await fetchApi<Galeria[]>({
    endpoint: 'galerias',
    query: {
      sort: 'data:desc',
      fields: ['id', 'titulo', 'data', 'slug', 'lugar'],
      populate: ['imagens'],
      filters: {
        slug,
      },
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  return <GaleriaTemplate filters={{}} galeria={galerias[0]} />
}

export default GaleriaPage
