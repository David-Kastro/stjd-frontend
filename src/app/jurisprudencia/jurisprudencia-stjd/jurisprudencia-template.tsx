'use client'

import CardTopPage from '@/_components/CardTopPage'
import { useEffect, useMemo, useState } from 'react'
import Estatua from '/public/images/lupa-juris.png'
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
import { Input } from '@/_components/ui/input'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import Image from 'next/image'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import BgScalle from '/public/images/bg-card-processo.svg'
import type { Jurisprudencia, JurisprudenciaFilters } from '@/lib/types'
import CardEdital from '@/_components/CardEdital'
import { dateTimeFormat } from '@/lib/utils'
import { DocumentEmptyState } from '@/_components/empty-states/documents'
import PDFViewer from '@/_components/PDFViewer'

type Props = {
  jurisprudencias: Jurisprudencia[]
  filters: JurisprudenciaFilters
}

function JurisprudenciaTemplate({ filters, jurisprudencias }: Props) {
  const hasFilters = Object.values(filters).some((value) => !!value)
  const [isActive, setIsActive] = useState<number | null>(null)

  const selected = useMemo(() => {
    return jurisprudencias.find(
      (jurisprudencia) => jurisprudencia.id === isActive,
    )
  }, [isActive, jurisprudencias])

  useEffect(() => {
    if (jurisprudencias.length > 0) {
      setIsActive(jurisprudencias[0].id)
    }
  }, [jurisprudencias])

  const handleClick = (jurisprudenciaId: number) => {
    setIsActive(jurisprudenciaId)
  }

  const handleResetFilters = () => {
    if (window) {
      window.location.href = '/jurisprudencia/jurisprudencia-stjd#pageFilters'
    }
  }

  return (
    <div>
      <div className="relative lg:mt-[9rem]">
        <div className="absolute -left-20 top-[60rem] z-0 hidden lg:block">
          <Image
            src={BgFundoMembers || '/placeholder.svg'}
            alt="BgFundoMembers"
          />
        </div>
        <div className="relative">
          <CardTopPage
            title="Jurisprudência"
            description="A jurisprudência do Superior Tribunal de Justiça Desportiva (STJD) assegura uniformidade nas decisões relacionadas a infrações, regulamentos e disputas esportivas. Baseada em casos anteriores, ela promove ética, fair play e segurança jurídica, orientando atletas, clubes e dirigentes no cumprimento das regras do desporto nacional."
            image={Estatua}
            imageCustomClass="h-[calc(100%+7rem)]"
            imagePosition="centerRight"
          />
          <div id="pageFilters" className="container">
            <div className="mx-auto max-w-[100rem]">
              <div className="rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
                <div className="flex items-center justify-center gap-[0.56rem] px-[2.19rem] lg:justify-start">
                  <Search />
                  <h1 className="text-[1.25rem] font-bold">
                    Consultar Jurisprudências
                  </h1>
                </div>
                <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
                <form
                  action={`/jurisprudencia/jurisprudencia-stjd#pageFilters`}
                  className="flex w-full flex-col gap-[0.56rem] px-[2.19rem]"
                >
                  <div className="mt-[0.5rem] flex flex-wrap items-end gap-[0.56rem]">
                    <Input
                      placeholder="Pesquisar em todos os campos..."
                      className="h-[3.75rem] w-full rounded-[0.8125rem] lg:w-[22.5625rem]"
                      name="pesquisa"
                      defaultValue={filters.pesquisa}
                    />
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
                    <Button
                      type="submit"
                      className="h-[3.75rem] w-full rounded-[4.625rem] text-[1.25rem] lg:ml-auto lg:w-[15.375rem]"
                    >
                      Pesquisar
                    </Button>
                  </div>
                </form>
              </div>
              {jurisprudencias.length === 0 ? (
                <DocumentEmptyState />
              ) : (
                <div className="flex flex-col-reverse lg:flex-row lg:gap-[5rem]">
                  <div className="w-full max-w-[48.4375rem]">
                    <div className="relative z-10 mt-[1.5rem] flex items-center justify-center lg:mt-[5rem] lg:h-[58rem] lg:pl-[1.69rem]">
                      <div className="absolute right-[5px] z-0 hidden h-full w-[2px] bg-[#BFBFBF] lg:block"></div>

                      <div className="absolute right-10 top-0 z-20 h-20 w-full bg-gradient-to-t from-transparent to-[#d5d5d5]"></div>
                      <div className="absolute bottom-0 right-10 z-20 h-20 w-full bg-gradient-to-b from-transparent to-[#d5d5d5]"></div>

                      <div className="scroll-custom-editais relative flex w-full flex-col gap-[1.31rem] rounded py-16 lg:h-[58rem] lg:gap-6 lg:overflow-y-auto lg:pr-[4rem]">
                        {jurisprudencias.map((jurisprudencia) => (
                          <CardEdital
                            key={`jurisprudencia_${jurisprudencia.id}`}
                            title={
                              jurisprudencia.numero_acordao ||
                              jurisprudencia.titulo
                            }
                            subtitle={jurisprudencia.subtitulo}
                            description={`Data julgamento: ${dateTimeFormat(jurisprudencia.data_julgamento, false)}`}
                            type="function"
                            handleClick={() => handleClick(jurisprudencia.id)}
                            isActive={jurisprudencia.id === isActive}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mr-[4.2px] hidden h-[5rem] border-[#BFBFBF] lg:block lg:border-r-[2px]"></div>
                  </div>
                  <div className="mt-[2rem] w-full max-w-[48.4375rem]">
                    {selected && <PDFViewer doc={selected as unknown as any} />}
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
              src={LogoBlack || '/placeholder.svg'}
              alt="LogoBlack"
              className="mx-auto w-[8.9375rem] lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JurisprudenciaTemplate
