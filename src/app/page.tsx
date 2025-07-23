import LatestNews from '@/_components/LatestNews'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import Image from 'next/image'
import React from 'react'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import BgScalle from '/public/images/bg-card-scale.svg'
import fetchApi from '@/lib/strapi'
import { Article, Edital, Session } from '@/lib/types'
import { startOfMonth, endOfMonth, format } from 'date-fns'

export const revalidate = 10

async function Home() {
  const [articles] = await fetchApi<Article[]>({
    endpoint: 'articles',
    query: {
      sort: 'data_publicacao:desc',
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

  const currentDate = new Date()
  const startDate = startOfMonth(currentDate)
  const endDate = endOfMonth(currentDate)

  // Format dates for Strapi query
  const formattedStartDate = format(startDate, 'yyyy-MM-dd')
  const formattedEndDate = format(endDate, 'yyyy-MM-dd')

  const [editais] = await fetchApi<Edital[]>({
    endpoint: 'notices',
    query: {
      sort: 'data:desc',
      fields: ['id', 'titulo', 'subtitulo', 'tipo', 'data'],
      filters: {
        data: {
          $between: [formattedStartDate, formattedEndDate],
        },
      },
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  const [lastEditais] = await fetchApi<Edital[]>({
    endpoint: 'notices',
    query: {
      sort: 'data:desc',
      fields: ['id', 'titulo', 'subtitulo', 'tipo', 'data'],
      pagination: {
        pageSize: 10,
        page: 1,
      },
    },
  })

  const [todaySessions] = await fetchApi<Session[]>({
    endpoint: 'sessions',
    query: {
      filters: {
        // filtra sessoes de hoje
        data: {
          $startsWith: new Date().toISOString().split('T')[0],
        },
      },
    },
  })

  const nextSessions = todaySessions.filter((session) => {
    const sessionDuration = session.duracao || '04:00:00.000'
    const duracao = sessionDuration.replace(/^(.*)\d{2}\.\d+$/, '$1')
    const duracaoMinutes =
      parseInt(duracao.split(':')[0]) * 60 + parseInt(duracao.split(':')[1])

    // verifica se a sessao ainda nao acabou
    const sessionEnd = new Date(session.data)
    sessionEnd.setMinutes(sessionEnd.getMinutes() + duracaoMinutes)

    return sessionEnd > new Date()
  })

  return (
    <div>
      <LatestNews
        articles={articles}
        nextSessions={nextSessions}
        editais={editais}
        lastEditais={lastEditais}
      />
      <hr className="w-fulll hidden h-[0.125rem] bg-[#B0B0B0] lg:block" />
      <div className="lg:container">
        <div className="border-[#B0B0B0] lg:border-l-[2px] lg:pt-[4.94rem]">
          <ScaleAttorneys
            title="Estatísticas"
            subtitle="Prestação de Contas"
            height="8.125rem"
            image={BgScalle}
            textbtn="Saiba Mais"
            href="/estatisticas"
          />
        </div>
      </div>
      <div
        className="my-8"
        dangerouslySetInnerHTML={{
          __html: `
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
          <div class="elfsight-app-001bf463-f895-468b-b7bd-9e726f8abe70" data-elfsight-app-lazy></div>
        `,
        }}
      ></div>
      <div className="bg-[#000] py-[3.87rem] lg:container lg:bg-transparent lg:py-0">
        <div className="border-[#B0B0B0] lg:border-l-[2px] lg:pb-[7.94rem]">
          <Image
            src={LogoBlack}
            alt="LogoBlack"
            className="mx-auto w-[8.9375rem] lg:w-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
