'use client'

import CardTopPage from '@/_components/CardTopPage'
import React, { useEffect, useMemo, useState } from 'react'
import Estatua from '/public/images/estatua-processos.svg'
import { Search, X } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/_components/ui/select'
import { Button } from '@/_components/ui/button'
import BgFundoMembers from '/public/images/bg-fundo-members.svg'
import { Label } from '@/_components/ui/label'
import { Input } from '@/_components/ui/input'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import Image from 'next/image'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import BgScalle from '/public/images/bg-card-processo.svg'
import { Doc, Process, ProcessFilters } from '@/lib/types'
import CardEdital from '@/_components/CardEdital'
import { dateTimeFormat } from '@/lib/utils'
import { DocumentEmptyState } from '@/_components/empty-states/documents'
import PDFViewer from '@/_components/PDFViewer'

type Props = {
  processos: Process[]
  filters: ProcessFilters
}

function ProcessosTemplate({ filters, processos }: Props) {
  const hasFilters = Object.values(filters).some((value) => !!value)
  const [isActive, setIsActive] = useState<number | null>(null)

  const selected = useMemo(() => {
    return processos.find((edital) => edital.id === isActive)
  }, [isActive, processos])

  useEffect(() => {
    if (processos.length > 0) {
      setIsActive(processos[0].id)
    }
  }, [processos])

  const handleClick = (editalId: number) => {
    setIsActive(editalId)
  }

  const handleResetFilters = () => {
    if (window) {
      window.location.href = '/processos/processos#pageFilters'
    }
  }

  return (
    <div>
      <div className="relative lg:mt-[9rem]">
        <div className="absolute -left-20 bottom-0 hidden lg:block">
          <Image src={BgFundoMembers} alt="BgFundoMembers" />
        </div>
        <div className="relative">
          <CardTopPage
            title="Processos STJD"
            description="Os processos do STJD são ações jurídicas para resolver infrações e disputas no esporte, especialmente no futebol, baseadas no Código Brasileiro de Justiça Desportiva (CBJD) e regulamentos da CBF, com atuação independente."
            image={Estatua}
            imagePosition="centerRight"
            imageCustomClass="h-[calc(100%+12rem)] mr-12"
          />
          <div id="pageFilters" className="container">
            <div className="mx-auto max-w-[100rem]">
              <div className="rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
                <div className="flex items-center justify-center gap-[0.56rem] px-[2.19rem] lg:justify-start">
                  <Search />
                  <h1 className="text-[1.25rem] font-bold">
                    Encontrar Processos
                  </h1>
                </div>
                <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
                <form
                  action={`/processos/processos#pageFilters`}
                  className="flex w-full flex-col gap-[0.56rem] px-[2.19rem] lg:flex-row"
                >
                  <div className="flex w-full flex-col flex-wrap gap-[0.56rem] lg:max-w-[27rem] lg:flex-nowrap">
                    <div className="w-full lg:max-w-[27rem]">
                      <Label className="text-[0.95769rem] font-bold">
                        Partes
                      </Label>
                      <Input
                        placeholder={'Autor ou Réu'}
                        className="h-[3.75rem] w-full rounded-[0.8125rem]"
                        defaultValue={filters.name1}
                        name="name1"
                      />
                    </div>
                    <div className="w-full lg:max-w-[27rem]">
                      <Input
                        placeholder="Autor ou Réu"
                        className="h-[3.75rem] w-full rounded-[0.8125rem]"
                        defaultValue={filters.name2}
                        name="name2"
                      />
                    </div>
                    <div className="mt-5 w-full lg:mt-0 lg:max-w-[27rem]">
                      <Label className="text-[0.95769rem] font-bold">
                        Relator
                      </Label>
                      <Input
                        placeholder="Relator"
                        className="h-[3.75rem] w-full rounded-[0.8125rem]"
                        defaultValue={filters.relator}
                        name="relator"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col flex-wrap gap-[0.56rem] lg:max-w-[9.1875rem] lg:flex-nowrap">
                    <div className="mt-5 w-full lg:mt-0 lg:max-w-[9.1875rem]">
                      <Label className="text-[0.95769rem] font-bold">
                        Dispositivo
                      </Label>
                      <Input
                        placeholder="Nº"
                        className="h-[3.75rem] w-full rounded-[0.8125rem]"
                        name="dispositivo"
                        defaultValue={filters.dispositivo}
                      />
                    </div>
                    <div className="w-full lg:max-w-[9.1875rem]">
                      <Select
                        defaultValue={filters.tipo || undefined}
                        name="tipo"
                      >
                        <SelectTrigger className="h-[3.75rem] rounded-[0.8125rem] lg:w-[9.1875rem]">
                          <SelectValue placeholder="Categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Tribunal Pleno">
                            Tribunal Pleno
                          </SelectItem>
                          <SelectItem value="Comissão Disciplinar">
                            Comissão Disciplinar
                          </SelectItem>
                          <SelectItem value="Procuradoria">
                            Procuradoria
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mt-[0.5rem] flex w-full max-w-[27rem] flex-col flex-wrap justify-between gap-[0.56rem] lg:flex-nowrap">
                    <div className="mt-5 w-full max-w-[27rem] lg:mt-0">
                      <Label className="text-[0.95769rem] font-bold">
                        Infração
                      </Label>
                      <Input
                        placeholder="Nº"
                        className="h-[3.75rem] w-full rounded-[0.8125rem]"
                      />
                    </div>
                    <div className="mt-5 w-full max-w-[27rem] lg:mt-0">
                      <Label className="text-[0.95769rem] font-bold">
                        Procurador
                      </Label>
                      <Input
                        placeholder="Nome"
                        className="h-[3.75rem] w-full rounded-[0.8125rem]"
                      />
                    </div>
                  </div>
                  <div className="mt-[0.5rem] flex flex-wrap items-end gap-[0.56rem] pb-[3.5rem] lg:flex-nowrap lg:pb-0">
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
                      className="h-[3.75rem] w-full rounded-[4.625rem] text-[1.25rem] lg:ml-[1.75rem] lg:w-[15.375rem]"
                    >
                      Pesquisar
                    </Button>
                  </div>
                </form>
              </div>
              {processos.length === 0 ? (
                <DocumentEmptyState />
              ) : (
                <div className="flex flex-col-reverse lg:flex-row lg:gap-[5rem]">
                  <div className="w-full max-w-[48.4375rem]">
                    <div className="relative z-10 mt-[1.5rem] flex items-center justify-center lg:mt-[5rem] lg:h-[58rem] lg:pl-[1.69rem]">
                      <div className="absolute right-[5px] z-0 hidden h-full w-[2px] bg-[#BFBFBF] lg:block"></div>

                      <div className="absolute right-10 top-0 z-20 h-20 w-full bg-gradient-to-t from-transparent to-[#d5d5d5]"></div>
                      <div className="absolute bottom-0 right-10 z-20 h-20 w-full bg-gradient-to-b from-transparent to-[#d5d5d5]"></div>

                      <div className="scroll-custom-editais relative flex w-full flex-col gap-[1.31rem] rounded py-16 lg:h-[58rem] lg:gap-6 lg:overflow-y-auto lg:pr-[4rem]">
                        {processos.map((processo) => (
                          <CardEdital
                            key={`processo_${processo.id}`}
                            title={processo.titulo}
                            subtitle={processo.subtitulo}
                            description={`Data julgamento: ${dateTimeFormat(processo.data, false)}`}
                            type="function"
                            handleClick={() => handleClick(processo.id)}
                            isActive={processo.id === isActive}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mr-[4.2px] hidden h-[5rem] border-[#BFBFBF] lg:block lg:border-r-[2px]"></div>
                  </div>
                  <div className="mt-[2rem] w-full max-w-[48.4375rem]">
                    {selected && <PDFViewer doc={selected as unknown as Doc} />}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-[6rem] hidden w-full border lg:block"></div>
        <div className="relative z-10 lg:container">
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
        </div>
      </div>
    </div>
  )
}

export default ProcessosTemplate
