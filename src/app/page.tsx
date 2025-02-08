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
import { Article } from '@/lib/types'

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

  return (
    <div>
      <div className="container lg:mt-[5rem]">
        <div className="flex flex-col gap-[3rem] border-[#B0B0B0] lg:flex-row lg:border-l-[2px]">
          <LatestNews articles={articles} />
          <div className="grow">
            <JudgmentGuidelines />
            <ListEditais />
          </div>
        </div>
      </div>
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
      <Members />
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
