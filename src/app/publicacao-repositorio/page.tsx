import NewsCarousel from '@/_components/NewsCarousel'
import PublicationsCarousel from '@/_components/PublicationsCarousel'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import { Button } from '@/_components/ui/button'
import { Input } from '@/_components/ui/input'
import fetchApi from '@/lib/strapi'
import { Article } from '@/lib/types'
import { Search } from 'lucide-react'
import React from 'react'
import BgEditais from '/public/images/bg-card-editais.svg'
import Members from '@/_components/Members'
import Image from 'next/image'
import LogoBlack from '/public/images/logo-stjd-black.svg'

async function PublicaoRepositorio() {
  const [articles] = await fetchApi<Article[]>({
    endpoint: 'articles',
    query: {
      sort: 'id:desc',
      populate: {
        imagem: {
          fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
        },
      },
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  const publications = [
    {
      title: 'Título da publicação',
      date: '05/11/2024 às 12h00',
      author: 'Fulano de Tal',
      image: '/images/publicacao-image.jpg',
      imageDescription: 'Imagem de uma publicação',
      description:
        'O Superior Tribunal de Justiça Desportiva reitera seu compromisso com a imparcialidade e a transparência no julgamento de processos que envolvem o desporto brasileiro. Na sessão plenária desta semana, foi aprovado um importante entendimento consolidado, que resultou na Súmula 123/2025. Esta súmula estabelece parâmetros mais claros para casos de condutas antidesportivas envolvendo atletas e membros de comissão técnica durante competições oficiais.',
    },
    {
      title: 'Nova Súmula Aprovada',
      date: '10/11/2024 às 14h00',
      author: 'Fulano de Tal',
      image: '/images/publicacao-image.jpg',
      imageDescription: 'Imagem de uma publicação',
      description:
        'A nova súmula aprovada pelo STJD visa melhorar a clareza nos julgamentos de casos de doping. A súmula 124/2025 estabelece novos parâmetros para a análise de substâncias proibidas e suas consequências para os atletas.',
    },
    {
      title: 'Reunião Extraordinária',
      date: '15/11/2024 às 09h00',
      author: 'Fulano de Tal',
      image: '/images/publicacao-image.jpg',
      description:
        'Na reunião extraordinária realizada nesta semana, foram discutidas novas diretrizes para a arbitragem no futebol brasileiro. As mudanças visam aumentar a transparência e a eficiência nas decisões tomadas durante as partidas.',
    },
    {
      title: 'Parceria Internacional',
      date: '20/11/2024 às 16h00',
      author: 'Fulano de Tal',
      image: '/images/publicacao-image.jpg',
      description:
        'O STJD firmou uma nova parceria com a Federação Internacional de Futebol para promover o intercâmbio de conhecimentos e práticas judiciais no esporte. Esta parceria busca fortalecer a cooperação internacional e aprimorar os processos judiciais desportivos.',
    },
  ]

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
          <PublicationsCarousel publications={publications} />
        </section>
        <hr className="w-full border-b border-secondary" />
        <section className="relative rounded-[1.375rem] bg-[#E1E1E1] p-8">
          <NewsCarousel articles={articles} />
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
        <Members thinBorder />
        <div className="pb-[7.94rem]">
          <Image src={LogoBlack} alt="LogoBlack" className="mx-auto" />
        </div>
      </section>
    </main>
  )
}

export default PublicaoRepositorio
