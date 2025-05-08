'use client'
import React, { useEffect, useMemo, useState } from 'react'

import CardTopPage from '@/_components/CardTopPage'
import BalancaJustica from '/public/images/balanca-justica-prata.png'
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
import { ChevronLeft, Search, X } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/_components/ui/select'
import { Input } from '@/_components/ui/input'
import PDFViewerScroll from '@/_components/PDFViewerScroll'
import {
  Carousel,
  CarouselContent,
  CarouselApi,
  CarouselItem,
} from '@/components/ui/carousel'
import { BasicFilters } from '@/_server-actions/get-basic-query'
import { Doc } from '@/lib/types'

type Props = {
  filters: BasicFilters
  docs: Doc[]
}

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize))
  }
  return chunks
}

function Resolucoes({ filters, docs }: Props) {
  const groupedLegislacoes = chunkArray(docs, 14)
  const groupedLegislacoesMob = chunkArray(docs, 6)
  const [openDialog, setOpenDialog] = useState(false)
  const [docActive, setDocActive] = useState<number | null>(null)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(1)

  const hasFilters = Object.values(filters).some((value) => !!value)

  const selectedDoc = useMemo(() => {
    return docs.find((doc) => doc.id === docActive)
  }, [docActive, docs])

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    if (docs.length > 0) {
      setDocActive(docs[0].id)
    }
  }, [docs])

  const handleOpenDialog = (doc: Doc) => {
    setDocActive(doc.id)
    setOpenDialog(true)
  }
  const handlePrevious = () => {
    api?.scrollPrev()
  }
  const handleNext = () => {
    api?.scrollNext()
  }

  const handleResetFilters = () => {
    if (window) {
      window.location.href = '/leis-normas/resolucoes#pageFilters'
    }
  }

  return (
    <div className="lg:mt-[8.4rem]">
      <CardTopPage
        title="Resoluções STJD"
        description="A parte de legislação do STJD define e interpreta as normas do esporte no Brasil, focando na justiça e integridade das competições. Baseada no CBJD, essa área regula e aplica punições a infrações esportivas, promovendo julgamentos imparciais e com critérios legais."
        image={BalancaJustica}
        imagePosition="topRight"
        imageCustomClass="h-[calc(100%+12rem)] -top-8"
      />
      <div id="pageFilters" className="container">
        <div className="mx-auto max-w-[100.0625rem] rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
          <div className="flex items-center gap-[0.56rem] px-[2.19rem]">
            <Search />
            <h1 className="text-[1.25rem] font-bold">
              Pesquisar Jurisprudências
            </h1>
          </div>
          <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
          <form
            action={`#pageFilters`}
            className="relative flex flex-wrap items-center gap-[0.69rem] px-[2.19rem] lg:flex-nowrap"
          >
            <Select defaultValue={filters.tipo || undefined} name="tipo">
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
                name="numero_resolucao"
                defaultValue={filters.numero_resolucao || undefined}
                placeholder="Número da Resolução"
                className="h-[3.75rem] w-full rounded-[0.8125rem]"
              />
            </div>

            <Select defaultValue={filters.ano || undefined} name="ano">
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
            {hasFilters && (
              <Button
                type="button"
                variant="ghost"
                onClick={handleResetFilters}
              >
                <X />
                Limpar Filtros
              </Button>
            )}
            <Button className="mt-[2rem] h-[3.75rem] w-full rounded-[4.625rem] text-[1.25rem] lg:ml-[4rem] lg:mt-0 lg:w-[15.375rem]">
              Pesquisar
            </Button>
          </form>
        </div>
      </div>
      {/* Carousel com grupos de 14 itens */}
      <div className="container">
        <div className="relative z-10 mx-auto mt-[2.6rem] max-w-[100.0625rem] lg:mt-[10rem]">
          <div className="hidden lg:block">
            <Carousel setApi={setApi}>
              <CarouselContent className="pb-14">
                {groupedLegislacoes.map((group, groupIndex) => (
                  <CarouselItem key={`group-${groupIndex}`}>
                    <div className="grid grid-cols-7 gap-x-[3.93rem] gap-y-[2.56rem]">
                      {group.map((doc, index) => (
                        <button
                          key={`leg-${groupIndex}-${index}`}
                          onClick={() => handleOpenDialog(doc)}
                        >
                          <CardLegislacao
                            title={doc.titulo}
                            number={(doc as any).numero_resolucao as string}
                            subtitle={doc.subtitulo}
                          />
                        </button>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="lg:hidden">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {groupedLegislacoesMob.map((group, groupIndex) => (
                  <CarouselItem key={`group-${groupIndex}`}>
                    <div className="grid grid-cols-2 justify-center gap-x-[2rem] gap-y-[2rem] lg:grid-cols-7 lg:gap-x-[3.93rem] lg:gap-y-[2.56rem]">
                      {group.map((doc, index) => (
                        <button
                          key={`leg-${groupIndex}-${index}`}
                          onClick={() => handleOpenDialog(doc)}
                        >
                          <CardLegislacao
                            title={doc.titulo}
                            subtitle={doc.subtitulo}
                          />
                        </button>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="mt-[2.5rem] flex flex-col items-center justify-center gap-[0.41rem] lg:pr-[2.5rem]">
            <div className="flex justify-center gap-[0.41rem]">
              <button
                onClick={handlePrevious}
                className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full border-[1.929px] border-solid border-[#A1A1A1]"
              >
                <ChevronLeft color="#A1A1A1" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full border-[1.929px] border-solid border-[#A1A1A1]"
              >
                <ChevronLeft color="#A1A1A1" className="rotate-180" />
              </button>
            </div>
            <p className="hidden text-center text-[0.9375rem] font-light leading-[1.23775rem] lg:block">
              {current} / {groupedLegislacoes.length}
            </p>
            <p className="block text-center text-[0.9375rem] font-light leading-[1.23775rem] lg:hidden">
              {current} / {groupedLegislacoesMob.length}
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 lg:container">
        <div className="pt-[6.19rem]">
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
        <DialogContent className="max-w-[23rem] bg-[#E1E1E1] lg:max-h-[90vh] lg:max-w-[60rem] lg:py-[3.19rem]">
          <DialogHeader className="flex flex-col items-center gap-[1.37rem] lg:flex-row">
            <DialogTitle className="w-full max-w-[23.75rem] text-[#2E2E2E] lg:text-[1.64356rem]">
              {selectedDoc?.titulo} <span className="font-light">2024</span>{' '}
            </DialogTitle>
            <div className="relative w-full">
              <p className="absolute -top-2 right-0 text-end text-[0.79181rem] font-light text-[#2E2E2E] lg:-top-5">
                Prévia do documento
              </p>
              <hr className="mt-5 w-full border border-[#BD995D] bg-[#BD995D] lg:mt-0" />
            </div>
          </DialogHeader>
          {selectedDoc?.documento.url && (
            <PDFViewerScroll linkPdf={selectedDoc.documento.url} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Resolucoes
