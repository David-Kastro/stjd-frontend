import React from 'react'
import PublicationsHighligthCarousel from '@/_components/PublicationsHighligthCarousel'
import fetchApi from '@/lib/strapi'
import { Edital, Member, News } from '@/lib/types'
import BgEditais from '/public/images/bg-card-editais.svg'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import Members from '@/_components/Members'
import Image from 'next/image'
import PublicationsCarousel from '@/_components/PublicationsCarousel'
import ListEditais from '@/_components/ListEditais'
import SearchNewsSection from '@/_components/SearchNewsSection'

async function Noticias() {
  const [newsData] = await fetchApi<News[]>({
    endpoint: 'articles',
    query: {
      sort: 'id:desc',
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
      sort: 'id:desc',
      fields: ['id', 'titulo', 'subtitulo', 'tipo', 'data'],
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  const highlightedNews = newsData.slice(0, 3)

  const news = newsData.slice(3)

  const [members] = await fetchApi<Member[]>({
    endpoint: 'members',
    query: {
      populate: {
        avatar: {
          fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
        },
      },
      sort: 'createdAt:asc',
      pagination: {
        pageSize: 4,
        page: 1,
      },
    },
  })

  return (
    <main className="mt-8 lg:mt-24">
      <section className="container flex flex-col gap-8 border-l border-border px-4 lg:px-16">
        <section className="relative rounded-[1.375rem] bg-[#E1E1E1] p-4 lg:p-8">
          <PublicationsHighligthCarousel
            title="Últimas Notícias"
            publications={highlightedNews}
            type="Notícia"
          />
        </section>
        <SearchNewsSection />
        <hr className="w-full border-b border-secondary" />
        <section className="flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-12">
          <div className="relative w-full rounded-[1.375rem] bg-[#E1E1E1] p-4 lg:w-1/2 lg:p-10">
            <PublicationsCarousel
              articles={news}
              itemsPerSlide={4}
              gridCustomClass="grid-cols-1"
              controlsCustomClass="right-2 top-8"
              type="Notícia"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <ListEditais editais={editais} />
          </div>
        </section>
      </section>
      <hr className="h-px w-full bg-border" />
      <section>
        <div className="container relative border-l border-border pt-8 lg:pt-[6.19rem]">
          <ScaleAttorneys
            title="Estatísticas"
            subtitle="Prestação de Contas"
            height="15.6875rem"
            image={BgEditais}
            textbtn="Saiba Mais"
            href="/estatisticas"
          />
        </div>
        <Members members={members} thinBorder />
        <div className="pb-8 lg:pb-[7.94rem]">
          <Image src={LogoBlack} alt="LogoBlack" className="mx-auto" />
        </div>
      </section>
    </main>
  )
}

export default Noticias
