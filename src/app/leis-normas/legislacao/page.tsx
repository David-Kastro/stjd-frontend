'use client'
import React, { useState } from 'react'

import CardTopPage from '@/_components/CardTopPage'
import BalancaJustica from '/public/images/balanca-justica.webp'
import CardLegislacao from '@/_components/CardLegislacao'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import BgEditais from '/public/images/bg-card-editais.svg'
import Image from 'next/image'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import BgFundoMembers from '/public/images/bg-fundo-members.svg'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/_components/ui/dialog'
import { Button } from '@/_components/ui/button'
import { Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/_components/ui/select'
import { Input } from '@/_components/ui/input'
import PDFViewerScroll from '@/_components/PDFViewerScroll'

interface legislacaoType {
  title: string
  subtitle: string
  pdf: string
}

const legislacoes = [
  {
    title: 'Escala de Procuradores',
    subtitle: '2024',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'Escala de Procuradores',
    subtitle: '2024',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'Escala de Procuradores',
    subtitle: '2024',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'Escala de Procuradores',
    subtitle: '2024',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'Escala de Procuradores',
    subtitle: '2024',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'Escala de Procuradores',
    subtitle: '2024',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'Escala de Procuradores',
    subtitle: '2024',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
  {
    title: 'CBJD - Normas e ',
    subtitle: 'Legislação Complementar',
    pdf: 'https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf',
  },
]

function Legislacao() {
  const [openDialog, setOpenDialog] = useState(false)
  const [legislacaoActive, setLegislacaoActive] = useState<legislacaoType>(
    {} as legislacaoType,
  )

  const handleOpenDialog = (legislacao: legislacaoType) => {
    setLegislacaoActive(legislacao)
    setOpenDialog(true)
  }

  return (
    <div className="lg:mt-[8.4rem]">
      <CardTopPage
        title="Legislação STJD"
        description="A parte de legislação do STJD define e interpreta as normas do esporte no Brasil, focando na justiça e integridade das competições. Baseada no CBJD, essa área regula e aplica punições a infrações esportivas, promovendo julgamentos imparciais e com critérios legais."
        image={BalancaJustica}
        height="lg:h-[28.875rem] lg:pb-0 pb-[2.25rem]"
        customClassImage="!-top-28 ml-10 lg:ml-0"
      />
      <div className="container">
        <div className="mx-auto max-w-[100.0625rem] rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
          <div className="flex items-center gap-[0.56rem] px-[2.19rem]">
            <Search />
            <h1 className="text-[1.25rem] font-bold">
              Encontrar Resultados de Julgamentos
            </h1>
          </div>
          <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
          <div className="relative flex flex-wrap gap-[0.69rem] px-[2.19rem]">
            <Select>
              <SelectTrigger className="h-[3.75rem] rounded-[0.8125rem] lg:w-[10.375rem]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Legislação">Legislação</SelectItem>
                <SelectItem value="Resoluções">Resoluções</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-[3.75rem] rounded-[0.8125rem] lg:w-[14.5625rem]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Portaria">Portaria</SelectItem>
                <SelectItem value="Resolução">Resolução</SelectItem>
                <SelectItem value="PG">PG</SelectItem>
              </SelectContent>
            </Select>
            <div className="w-full lg:max-w-[14.875rem]">
              <Input
                placeholder="Número da Resolução"
                className="h-[3.75rem] w-full rounded-[0.8125rem]"
              />
            </div>

            <Select>
              <SelectTrigger className="h-[3.75rem] rounded-[0.8125rem] lg:w-[14.5625rem]">
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
            <Button className="mt-[2.6rem] h-[3.75rem] w-full rounded-[4.625rem] text-[1.25rem] lg:ml-[4rem] lg:mt-0 lg:w-[15.375rem]">
              Pesquisar
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="relative z-10 mt-[2.69rem] lg:mt-[10rem]">
          <div className="absolute right-0 z-0 hidden h-full w-[2px] bg-[#BFBFBF] lg:block"></div>
          <div className="scroll-custom-editais relative mx-auto -mr-[5px] flex h-[32rem] flex-wrap justify-center gap-x-[2rem] gap-y-[2rem] overflow-y-auto pb-14 lg:h-[28rem] lg:gap-x-[3.93rem] lg:gap-y-[2.56rem]">
            {legislacoes.map((legislacao, index) => (
              <button key={index} onClick={() => handleOpenDialog(legislacao)}>
                <CardLegislacao
                  title={legislacao.title}
                  subtitle={legislacao.subtitle}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 lg:container">
        <div className="border-[#BFBFBF] pt-[6.19rem] lg:border-r-[2px]">
          <ScaleAttorneys
            title="Editais de Julgamentos"
            subtitle="Acesse a tabela de Editais"
            height="15.6875rem"
            image={BgEditais}
            textbtn="Acessar  Editais"
            href=""
          />
        </div>
      </div>

      <div className="container relative mt-[3rem] bg-black lg:mt-0 lg:bg-transparent">
        <div className="border-[#BFBFBF] pt-[3rem] lg:border-r-[2px] lg:pt-[7.81rem]">
          <div className="pb-[3rem] lg:pb-[7.94rem]">
            <Image
              src={LogoBlack}
              alt="LogoBlack"
              className="mx-auto w-[8.9375rem] lg:w-auto"
            />
          </div>
          <div className="absolute -left-20 bottom-0 hidden lg:block">
            <Image src={BgFundoMembers} alt="BgFundoMembers" />
          </div>
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-h-[90vh] bg-[#E1E1E1] py-[3.19rem]">
          <DialogHeader className="flex flex-row items-center gap-[1.37rem]">
            <DialogTitle className="w-full max-w-[23.75rem] text-[1.64356rem] text-[#2E2E2E]">
              Escala de Procuradores <span className="font-light">2024</span>{' '}
            </DialogTitle>
            <div className="relative w-full">
              <p className="absolute -top-5 right-0 text-end text-[0.79181rem] font-light text-[#2E2E2E]">
                Prévia do documento
              </p>
              <hr className="w-full border border-[#BD995D] bg-[#BD995D]" />
            </div>
          </DialogHeader>
          <PDFViewerScroll linkPdf={legislacaoActive.pdf} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Legislacao
