'use client'
import CardGaleria from '@/_components/CardGaleria'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import { Button } from '@/_components/ui/button'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/_components/ui/carousel'
import { Input } from '@/_components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/_components/ui/select'
import BgScalle from '/public/images/bg-card-scale.svg'

import { ChevronLeft, Search, X } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import { Galeria } from '@/lib/types'
import { BasicFilters } from '@/_server-actions/get-basic-query'
import Link from 'next/link'

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize))
  }
  return chunks
}
export function GaleriasTemplate({
  galerias,
  filters,
}: {
  galerias: Galeria[]
  filters: BasicFilters
}) {
  const grupoGaleria = chunkArray(galerias, 10)
  const [api, setApi] = useState<CarouselApi>()

  const hasFilters = Object.values(filters).some((value) => !!value)

  const handlePrevious = () => {
    api?.scrollPrev()
  }
  const handleNext = () => {
    api?.scrollNext()
  }

  const handleResetFilters = () => {
    if (window) {
      window.location.href = '/comunicacao/galerias#pageFilters'
    }
  }

  return (
    <div>
      <div className="container mt-4 lg:mt-[7.95rem]">
        <div className="border-[#B0B0B0] lg:border-l-[2px]">
          <div className="mx-auto max-w-[100.0625rem] rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
            <div className="flex items-center gap-[0.56rem] px-[2.19rem]">
              <Search />
              <h1 className="text-[1.25rem] font-bold">Filtrar Galeria</h1>
            </div>
            <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
            <form
              action={`/comunicacao/galerias#pageFilters`}
              className="relative flex flex-wrap items-center gap-[0.69rem] px-[2.19rem]"
            >
              <Select defaultValue={filters.ano} name="ano">
                <SelectTrigger className="h-[3.75rem] w-[15rem] rounded-[0.8125rem]">
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
              <Select defaultValue={filters.mes} name="mes">
                <SelectTrigger className="h-[3.75rem] w-[8.875rem] rounded-[0.8125rem]">
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

              <div className="w-full max-w-[22.375rem]">
                <Input
                  name="titulo"
                  defaultValue={filters.titulo}
                  placeholder="Pesquisar por nome"
                  className="h-[3.75rem] w-full rounded-[0.8125rem]"
                />
              </div>

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

          {/* Carousel com grupos de 14 itens */}

          <div className="container">
            <div className="relative z-10 mx-auto mt-[2.56rem] max-w-[100.0625rem]">
              <Carousel setApi={setApi}>
                <CarouselContent>
                  {grupoGaleria.map((group, groupIndex) => (
                    <CarouselItem key={`group-${groupIndex}`}>
                      <div className="grid grid-cols-1 gap-[1rem] md:grid-cols-3 lg:grid-cols-5">
                        {group.map((galeria, index) => (
                          <Link
                            key={`leg-${groupIndex}-${index}`}
                            href={`/comunicacao/galerias/${galeria.slug}`}
                          >
                            <CardGaleria
                              title={galeria.titulo}
                              img={galeria.imagens[0].url}
                              date={galeria.data}
                            />
                          </Link>
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="mt-[2.5rem] flex flex-col items-center justify-center gap-[0.41rem]">
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
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[100rem]">
            <hr className="my-[4.31rem] h-[0.125rem] bg-secondary" />
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
      </div>
      <div className="mt-[] bg-[#000] py-[3.87rem] lg:container lg:bg-transparent lg:py-0">
        <div className="border-[#B0B0B0] pt-[8rem] lg:border-l-[2px] lg:pb-[7.94rem]">
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
