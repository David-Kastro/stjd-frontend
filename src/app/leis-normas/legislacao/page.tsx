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
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/_components/ui/dialog'
import { Button } from '@/_components/ui/button'

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
    <div>
      <CardTopPage
        title="Legislação STJD"
        description="A parte de legislação do STJD define e interpreta as normas do esporte no Brasil, focando na justiça e integridade das competições. Baseada no CBJD, essa área regula e aplica punições a infrações esportivas, promovendo julgamentos imparciais e com critérios legais."
        image={BalancaJustica}
        height={'28.875rem'}
      />
      <div className="container relative z-10 mt-[15rem]">
        <div className="mx-auto flex max-w-[90.99738rem] flex-wrap justify-center gap-x-[3.93rem] gap-y-[2.56rem]">
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
      <div className="container relative z-10 mt-[6.19rem]">
        <div className="border-r-[2px] border-[#B0B0B0]">
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
      <div className="container relative">
        <div className="border-r-[2px] border-[#B0B0B0] pt-[7.81rem]">
          <div className="pb-[7.94rem]">
            <Image src={LogoBlack} alt="LogoBlack" className="mx-auto" />
          </div>
          <div className="absolute -left-20 bottom-0">
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
          <div>
            <iframe
              src={legislacaoActive.pdf}
              className="h-[55vh] w-full"
            ></iframe>
          </div>
          <DialogFooter>
            <a
              href={legislacaoActive.pdf}
              className="mx-auto w-fit"
              // download={legislacaoActive.pdf.split("/").pop()}
            >
              <Button className="mx-auto mt-[2rem] h-[3.75rem] rounded-[4.625rem] px-[3.12rem] text-[1.25rem] font-bold">
                Fazer Download
              </Button>
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Legislacao
