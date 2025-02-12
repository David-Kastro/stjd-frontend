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
      sort: 'prioridade:desc',
      pagination: {
        pageSize: 4,
        page: 1,
      },
    },
  })

  return (
    <main className="mt-24">
      <section className="container flex flex-col gap-8 border-l border-border px-16">
        <section className="relative rounded-[1.375rem] bg-[#E1E1E1] p-8">
          <PublicationsHighligthCarousel
            title="Últimas Notícias"
            publications={highlightedNews}
            type="Notícia"
          />
        </section>
        <SearchNewsSection />
        <hr className="w-full border-b border-secondary" />
        <section className="flex items-start gap-12">
          <div className="relative w-1/2 rounded-[1.375rem] bg-[#E1E1E1] px-10 py-10">
            <PublicationsCarousel
              articles={news}
              itemsPerSlide={4}
              gridCustomClass="grid-cols-1"
              controlsCustomClass="right-2 top-8"
              type="Notícia"
            />
          </div>
          <div className="w-1/2">
            <ListEditais editais={editais} />
          </div>
        </section>
      </section>
      <hr className="h-px w-full bg-border" />
      <section>
        <div className="container relative border-l border-border pt-[6.19rem]">
          <ScaleAttorneys
            title="Escala de Procuradores 2024"
            subtitle="COMPETIÇÕES PROMOVIDAS PELA CBF"
            height="15.6875rem"
            image={BgEditais}
            textbtn="Saiba Mais"
            href=""
          />
        </div>
        <Members members={members} thinBorder />
        <div className="pb-[7.94rem]">
          <Image src={LogoBlack} alt="LogoBlack" className="mx-auto" />
        </div>
      </section>
    </main>
  )
}

export default Noticias
