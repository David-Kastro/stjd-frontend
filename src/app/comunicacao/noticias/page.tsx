import React from 'react'
import PublicationsHighligthCarousel from '@/_components/PublicationsHighligthCarousel'
import { Button } from '@/_components/ui/button'
import { Input } from '@/_components/ui/input'
import fetchApi from '@/lib/strapi'
import { Member, News } from '@/lib/types'
import { Search } from 'lucide-react'
import BgEditais from '/public/images/bg-card-editais.svg'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/_components/ui/select'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import Members from '@/_components/Members'
import Image from 'next/image'

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

  const highlightedNews = newsData.slice(0, 3)

  // const news = newsData.slice(3)

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
        <section className="relative rounded-[1.375rem] bg-[#E1E1E1] p-8">
          <PublicationsHighligthCarousel
            title="Últimas Notícias"
            publications={highlightedNews}
          />
        </section>
        <section className="mx-auto w-full rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
          <form role="search">
            <div className="flex items-center gap-[0.56rem] px-[2.19rem]">
              <Search aria-hidden="true" />
              <h1 className="text-[1.25rem] font-bold">Pesquisar Notícias</h1>
            </div>
            <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
            <div className="relative flex gap-[0.69rem] px-[2.19rem]">
              <Select>
                <SelectTrigger className="h-[3.75rem] w-[15rem] rounded-[0.8125rem]">
                  <SelectValue placeholder="Escolha o Ano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-[3.75rem] w-[8.875rem] rounded-[0.8125rem]">
                  <SelectValue placeholder="Mês" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Janeiro">Janeiro</SelectItem>
                  <SelectItem value="Fevereiro">Fevereiro</SelectItem>
                  <SelectItem value="Março">Março</SelectItem>
                  <SelectItem value="Abril">Abril</SelectItem>
                  <SelectItem value="Maio">Maio</SelectItem>
                  <SelectItem value="Junho">Junho</SelectItem>
                  <SelectItem value="Julho">Julho</SelectItem>
                  <SelectItem value="Agosto">Agosto</SelectItem>
                  <SelectItem value="Setembro">Setembro</SelectItem>
                  <SelectItem value="Outubro">Outubro</SelectItem>
                  <SelectItem value="Novembro">Novembro</SelectItem>
                  <SelectItem value="Dezembro">Dezembro</SelectItem>
                </SelectContent>
              </Select>

              <div className="w-full max-w-[22.375rem]">
                <Input
                  placeholder="Pesquisar por nome"
                  className="h-[3.75rem] w-full rounded-[0.8125rem]"
                />
              </div>

              <Button className="p ml-auto h-[3.75rem] w-[15.375rem] rounded-[4.625rem] text-[1.25rem]">
                Pesquisar
              </Button>
            </div>
          </form>
        </section>
        <hr className="w-full border-b border-secondary" />
        {/* <section className="relative rounded-[1.375rem] bg-[#E1E1E1] p-8">
          <NewsCarousel articles={publications} />
        </section> */}
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

export default Noticias
