// import MenuTop from "@/_components/MenuTop";
import JudgmentGuidelines from '@/_components/JudgmentGuidelines'
import LatestNews from '@/_components/LatestNews'
import ListEditais from '@/_components/ListEditais'
import Members from '@/_components/Members'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import Image from 'next/image'
import React from 'react'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import BgScalle from '/public/images/bg-card-scale.svg'
import fetchApi from '@/lib/strapi'
import { Article, Edital, Member, Session } from '@/lib/types'

async function Home() {
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

  const [todaySessions] = await fetchApi<Session[]>({
    endpoint: 'sessions',
    query: {
      filters: {
        // filtra sessoes de hoje
        data: {
          $startsWith: new Date().toISOString().split('T')[0],
        },
      },
      pagination: {
        pageSize: 1,
        page: 1,
      },
    },
  })

  const nextSessions = todaySessions.filter((session) => {
    const duracao = session.duracao.replace(/^(.*)\d{2}\.\d+$/, '$1')
    const duracaoMinutes =
      parseInt(duracao.split(':')[0]) * 60 + parseInt(duracao.split(':')[1])

    // verifica se a sessao ainda nao acabou
    const sessionEnd = new Date(session.data)
    sessionEnd.setMinutes(sessionEnd.getMinutes() + duracaoMinutes)

    console.log(new Date(session.data), sessionEnd, new Date())

    return sessionEnd > new Date()
  })

  return (
    <div>
      <LatestNews
        articles={articles}
        nextSession={nextSessions[0]}
        editais={editais}
      />
      <hr className="w-fulll hidden h-[0.125rem] bg-[#B0B0B0] lg:block" />
      <div className="lg:container">
        <div className="border-[#B0B0B0] lg:border-l-[2px] lg:pt-[4.94rem]">
          <ScaleAttorneys
            title="Escala de Procuradores 2024"
            subtitle="COMPETIÇÕES PROMOVIDAS PELA CBF"
            height="8.125rem"
            image={BgScalle}
            textbtn="Saiba Mais"
            href=""
          />
        </div>
      </div>
      <Members members={members} />
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
