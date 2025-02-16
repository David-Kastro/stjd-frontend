import PublicationsCarousel from '@/_components/PublicationsCarousel'
import PublicationsHighligthCarousel from '@/_components/PublicationsHighligthCarousel'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import fetchApi from '@/lib/strapi'
import { Article, Member } from '@/lib/types'
import React from 'react'
import BgEditais from '/public/images/bg-card-editais.svg'
import Members from '@/_components/Members'
import Image from 'next/image'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import SearchPublicationSection from '@/_components/SearchPublicationSection'

async function PublicaoRepositorio() {
  const [publicationsData] = await fetchApi<Article[]>({
    endpoint: 'articles',
    query: {
      sort: 'id:desc',
      populate: {
        imagem: {
          fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
        },
      },
      filters: {
        tipo: 'Notícia', // IMPORTANT: Change this to 'Publicação' to get the right data
      },
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  const higlightedPublications = publicationsData.slice(0, 3)

  const publications = publicationsData.slice(3)

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
      <section className="container flex flex-col gap-8 border-l border-border px-16 pb-24">
        <SearchPublicationSection />
        <section className="relative rounded-[1.375rem] bg-[#E1E1E1] p-8">
          <PublicationsHighligthCarousel
            publications={higlightedPublications}
            type="Publicação"
          />
        </section>
        <hr className="w-full border-b border-secondary" />
        <section className="relative rounded-[1.375rem] bg-[#E1E1E1] p-8">
          <PublicationsCarousel articles={publications} type="Publicação" />
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
      <section></section>
    </main>
  )
}

export default PublicaoRepositorio
