'use client'
import React, { useEffect, useMemo, useState } from 'react'

import CardTopPage from '@/_components/CardTopPage'
import BalancaJustica from '/public/images/balanca-justica.png'
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
import { Search, X } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/_components/ui/select'
import PDFViewerScroll from '@/_components/PDFViewerScroll'
import { BasicFilters } from '@/_server-actions/get-basic-query'
import { Doc } from '@/lib/types'

type Props = {
  filters: BasicFilters
  docs: Doc[]
}

function Legislacao({ filters, docs }: Props) {
  const [openDialog, setOpenDialog] = useState(false)
  const [docActive, setDocActive] = useState<number | null>(null)

  const hasFilters = Object.values(filters).some((value) => !!value)

  const selectedDoc = useMemo(() => {
    return docs.find((doc) => doc.id === docActive)
  }, [docActive, docs])

  useEffect(() => {
    if (docs.length > 0) {
      setDocActive(docs[0].id)
    }
  }, [docs])

  const handleOpenDialog = (legislacao: Doc) => {
    setDocActive(legislacao.id)
    setOpenDialog(true)
  }

  const handleResetFilters = () => {
    if (window) {
      window.location.href = '/leis-normas/legislacao#pageFilters'
    }
  }

  return (
    <div className="lg:mt-[8.4rem]">
      <CardTopPage
        title="Legislação STJD"
        description="A parte de legislação do STJD define e interpreta as normas do esporte no Brasil, focando na justiça e integridade das competições. Baseada no CBJD, essa área regula e aplica punições a infrações esportivas, promovendo julgamentos imparciais e com critérios legais."
        image={BalancaJustica}
        imagePosition="centerRight"
        imageCustomClass="h-[calc(100%+12rem)]"
      />
      <div id="pageFilters" className="container">
        <div className="mx-auto max-w-[100.0625rem] rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
          <div className="flex items-center gap-[0.56rem] px-[2.19rem]">
            <Search />
            <h1 className="text-[1.25rem] font-bold">
              Encontrar Resultados de Julgamentos
            </h1>
          </div>
          <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
          <form
            action={`#pageFilters`}
            className="relative flex flex-wrap items-center gap-[0.69rem] px-[2.19rem] lg:flex-nowrap"
          >
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
            <Button className="mt-[2.6rem] h-[3.75rem] w-full rounded-[4.625rem] text-[1.25rem] lg:ml-[4rem] lg:mt-0 lg:w-[15.375rem]">
              Pesquisar
            </Button>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="relative z-10 mt-[2.69rem] lg:mt-[10rem]">
          <div className="absolute right-0 z-0 hidden h-full w-[2px] bg-[#BFBFBF] lg:block"></div>
          <div className="scroll-custom-editais relative mx-auto -mr-[5px] flex h-[32rem] flex-wrap justify-center gap-x-[2rem] gap-y-[2rem] overflow-y-auto pb-14 lg:h-[28rem] lg:gap-x-[3.93rem] lg:gap-y-[2.56rem]">
            {docs.map((doc, index) => (
              <button
                className="w-[9rem] lg:w-auto"
                key={index}
                onClick={() => handleOpenDialog(doc)}
              >
                <CardLegislacao title={doc.titulo} subtitle={doc.subtitulo} />
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
        <DialogContent className="max-w-[23rem] bg-[#E1E1E1] lg:max-h-[90vh] lg:max-w-[60rem] lg:py-[3.19rem]">
          <DialogHeader className="flex flex-col items-center gap-[1.37rem] lg:flex-row">
            <DialogTitle className="whitespace-nowrap text-[#2E2E2E] lg:text-[1.64356rem]">
              {selectedDoc?.titulo}
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

export default Legislacao
