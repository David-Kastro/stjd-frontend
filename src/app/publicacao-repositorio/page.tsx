import PublicationsCarousel from '@/_components/PublicationsCarousel'
import PublicationsHighligthCarousel from '@/_components/PublicationsHighligthCarousel'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import { Button } from '@/_components/ui/button'
import { Input } from '@/_components/ui/input'
import fetchApi from '@/lib/strapi'
import { Article, Member } from '@/lib/types'
import { Search } from 'lucide-react'
import React from 'react'
import BgEditais from '/public/images/bg-card-editais.svg'
import Members from '@/_components/Members'
import Image from 'next/image'
import LogoBlack from '/public/images/logo-stjd-black.svg'

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
      <article className="container flex flex-col gap-8 border-l border-border px-16 pb-24">
        <section className="mx-auto w-full rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
          <form role="search">
            <div className="flex items-center gap-[0.56rem] px-[2.19rem]">
              <Search aria-hidden="true" />
              <h1 className="text-[1.25rem] font-bold">Pesquisa Geral</h1>
            </div>
            <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
            <div className="relative flex justify-between gap-[0.69rem] px-[2.19rem]">
              <div className="w-full max-w-xl">
                <Input
                  placeholder="Procurar..."
                  className="h-[3.75rem] w-full rounded-[0.8125rem] pl-4 focus-visible:!outline-none focus-visible:!ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button className="p ml-[4rem] h-[3.75rem] w-[15.375rem] rounded-[4.625rem] text-[1.25rem]">
                Pesquisar
              </Button>
            </div>
          </form>
        </section>
        <section className="relative rounded-[1.375rem] bg-[#E1E1E1] p-8">
          <PublicationsHighligthCarousel
            publications={higlightedPublications}
          />
        </section>
        <hr className="w-full border-b border-secondary" />
        <section className="relative rounded-[1.375rem] bg-[#E1E1E1] p-8">
          <PublicationsCarousel articles={publications} />
        </section>
      </article>
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

export default PublicaoRepositorio
