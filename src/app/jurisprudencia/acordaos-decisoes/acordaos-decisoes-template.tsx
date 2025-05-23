'use client'
import CardTopPage from '@/_components/CardTopPage'
import React, { useEffect, useMemo, useState } from 'react'
import Pastas from '/public/images/pasta-acordoes.png'
import { Search, X } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/_components/ui/select'
import { Button } from '@/_components/ui/button'
import CardEdital from '@/_components/CardEdital'

import PDFViewer from '@/_components/PDFViewer'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import BgScalle from '/public/images/bg-card-processo.svg'
import Image from 'next/image'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import BgFundoMembers from '/public/images/bg-fundo-members.svg'
import { Doc } from '@/lib/types'
import { BasicFilters } from '@/_server-actions/get-basic-query'
import { DocumentEmptyState } from '@/_components/empty-states/documents'

type Props = {
  filters: BasicFilters
  docs: Doc[]
}

function AcordoesDecisoesTemplate({ filters, docs }: Props) {
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

  const handleClickEdital = (editalId: number) => {
    setDocActive(editalId)
  }

  const handleResetFilters = () => {
    if (window) {
      window.location.href = '/jurisprudencia/acordaos-decisoes#pageFilters'
    }
  }

  return (
    <div>
      <CardTopPage
        title="Acordãos e Decisões"
        description="Um acórdão é a decisão colegiada emitida por um tribunal, formada pela análise conjunta de um grupo de magistrados (juízes ou desembargadores). Ele representa o resultado do julgamento de um processo e contém o entendimento majoritário do tribunal sobre as questões debatidas."
        image={Pastas}
        imagePosition="topRight"
      />
      <div id="pageFilters" className="container mt-[1.75rem]">
        <div className="mx-auto max-w-[100.0625rem]">
          <div className="rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
            <div className="flex items-center gap-[0.56rem] pl-[0.28rem] lg:px-[2.19rem] lg:pl-0">
              <Search />
              <h1 className="text-[1.13263rem] font-bold lg:text-[1.25rem]">
                Encontrar Resultados de Julgamentos
              </h1>
            </div>
            <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
            <form
              action={`#pageFilters`}
              className="relative flex flex-wrap items-center gap-[0.69rem] px-[2.19rem] lg:flex-nowrap"
            >
              <Select
                defaultValue={filters.categoria || undefined}
                name="categoria"
              >
                <SelectTrigger className="h-[3.75rem] rounded-[0.8125rem] lg:w-[9.1875rem]">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Acordãos">Acordãos</SelectItem>
                  <SelectItem value="Decisões">Decisões</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue={filters.ano || undefined} name="ano">
                <SelectTrigger className="h-[3.75rem] rounded-[0.8125rem] lg:w-[15rem]">
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
              <Select defaultValue={filters.mes || undefined} name="mes">
                <SelectTrigger className="h-[3.75rem] rounded-[0.8125rem] lg:w-[8.875rem]">
                  <SelectValue placeholder="Mês" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01">Janeiro</SelectItem>
                  <SelectItem value="02">Fevereiro</SelectItem>
                  <SelectItem value="03">Março</SelectItem>
                  <SelectItem value="04">Abril</SelectItem>
                  <SelectItem value="05">Maio</SelectItem>
                  <SelectItem value="06">Junho</SelectItem>
                  <SelectItem value="07">Julho</SelectItem>
                  <SelectItem value="08">Agosto</SelectItem>
                  <SelectItem value="09">Setembro</SelectItem>
                  <SelectItem value="10">Outubro</SelectItem>
                  <SelectItem value="11">Novembro</SelectItem>
                  <SelectItem value="12">Dezembro</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue={filters.tipo || undefined} name="tipo">
                <SelectTrigger className="h-[3.75rem] rounded-[0.8125rem] lg:w-[14.5625rem]">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Comissão Disciplinar">
                    Comissão Disciplinar
                  </SelectItem>
                  <SelectItem value="Tribunal Pleno">Tribunal Pleno</SelectItem>
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
              <Button
                type="submit"
                className="h-[3.75rem] w-full rounded-[4.625rem] text-[1.25rem] lg:ml-[2rem] lg:w-[15.375rem]"
              >
                Pesquisar
              </Button>
            </form>
          </div>
          {docs.length === 0 ? (
            <DocumentEmptyState />
          ) : (
            <div className="flex flex-col-reverse lg:flex-row lg:gap-[5rem]">
              <div className="w-full max-w-[48.4375rem]">
                <div className="relative z-10 mt-[1.5rem] flex items-center justify-center lg:mt-[5rem] lg:h-[58rem] lg:pl-[1.69rem]">
                  <div className="absolute right-[5px] z-0 hidden h-full w-[2px] bg-[#BFBFBF] lg:block"></div>
                  {/* gradientes efeito fade em cima e embaixo */}
                  <div className="absolute right-10 top-0 z-20 h-20 w-full bg-gradient-to-t from-transparent to-[#d5d5d5]"></div>
                  <div className="absolute bottom-0 right-10 z-20 h-20 w-full bg-gradient-to-b from-transparent to-[#d5d5d5]"></div>
                  {/* ----------------------------------------- */}
                  <div className="scroll-custom-editais relative flex w-full flex-col gap-[1.31rem] rounded py-16 lg:h-[58rem] lg:gap-6 lg:overflow-y-auto lg:pr-[4rem]">
                    {docs.map((doc) => (
                      <CardEdital
                        key={`doc_${doc.documentId}_${doc.id}`}
                        title={doc.titulo}
                        subtitle={doc.subtitulo}
                        description={doc.tipo}
                        type="function"
                        handleClick={() => handleClickEdital(doc.id)}
                        isActive={doc.id === docActive}
                      />
                    ))}
                  </div>

                  {/* <div className="h-[5rem] absolute w-full bottom-0 blur-md bg-gradient-to-t from-[#ccc] to-transparent"></div> */}
                </div>
                <div className="mr-[4.2px] hidden h-[5rem] border-r-[2px] border-[#BFBFBF] lg:block"></div>
              </div>
              <div className="mt-[2rem] w-full max-w-[48.4375rem]">
                {selectedDoc && <PDFViewer doc={selectedDoc} />}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="hidden w-full border lg:block"></div>
      <div className="lg:container">
        <div className="border-[#BFBFBF] pt-[3.9rem] lg:border-r-[2px]">
          <ScaleAttorneys
            title="Legislação STJD"
            subtitle="Acesse a tabela"
            height="15.6875rem"
            image={BgScalle}
            textbtn="Acessar Legislações"
            href="/leis-normas/legislacao"
          />
        </div>
      </div>
      <div className="relative mt-20 bg-[#000] py-[3.87rem] lg:container lg:mt-0 lg:bg-transparent lg:py-0">
        <div className="lg:mt-[6.37rem] lg:pb-[7.94rem]">
          <Image
            src={LogoBlack}
            alt="LogoBlack"
            className="mx-auto w-[8.9375rem] lg:w-auto"
          />
        </div>
        <div className="absolute -left-20 -top-[48rem] z-0 hidden lg:block">
          <Image src={BgFundoMembers} alt="BgFundoMembers" />
        </div>
      </div>
    </div>
  )
}

export default AcordoesDecisoesTemplate
