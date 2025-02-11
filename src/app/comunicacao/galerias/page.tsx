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

import { ChevronLeft, Search } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'
import LogoBlack from '/public/images/logo-stjd-black.svg'

const galerias = [
  {
    title:
      '1º Encontro Nacional dos Tribunais de Justiça Desportiva do Futebol',
    imgs: [
      '/images/second-image.png',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
    ],
    date: '13/12/2024 20h24 | STJD',
  },
  {
    title:
      '1º Encontro Nacional dos Tribunais de Justiça Desportiva do Futebol',
    imgs: [
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
    ],
    date: '13/12/2024 20h24 | STJD',
  },
  {
    title:
      '1º Encontro Nacional dos Tribunais de Justiça Desportiva do Futebol',
    imgs: [
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
    ],
    date: '13/12/2024 20h24 | STJD',
  },
  {
    title:
      '1º Encontro Nacional dos Tribunais de Justiça Desportiva do Futebol',
    imgs: [
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
    ],
    date: '13/12/2024 20h24 | STJD',
  },
  {
    title:
      '1º Encontro Nacional dos Tribunais de Justiça Desportiva do Futebol',
    imgs: [
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
    ],
    date: '13/12/2024 20h24 | STJD',
  },
  {
    title:
      '1º Encontro Nacional dos Tribunais de Justiça Desportiva do Futebol',
    imgs: [
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
    ],
    date: '13/12/2024 20h24 | STJD',
  },
  {
    title:
      '1º Encontro Nacional dos Tribunais de Justiça Desportiva do Futebol',
    imgs: [
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
    ],
    date: '13/12/2024 20h24 | STJD',
  },
  {
    title:
      '1º Encontro Nacional dos Tribunais de Justiça Desportiva do Futebol',
    imgs: [
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
    ],
    date: '13/12/2024 20h24 | STJD',
  },
  {
    title:
      '1º Encontro Nacional dos Tribunais de Justiça Desportiva do Futebol',
    imgs: [
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
    ],
    date: '13/12/2024 20h24 | STJD',
  },
  {
    title:
      '1º Encontro Nacional dos Tribunais de Justiça Desportiva do Futebol',
    imgs: [
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
    ],
    date: '13/12/2024 20h24 | STJD',
  },
  {
    title:
      '1º Encontro Nacional dos Tribunais de Justiça Desportiva do Futebol',
    imgs: [
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
      '/images/galeria.webp',
    ],
    date: '13/12/2024 20h24 | STJD',
  },
]

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize))
  }
  return chunks
}
function Galerias() {
  const grupoGaleria = chunkArray(galerias, 10)
  const [api, setApi] = useState<CarouselApi>()
  const [galeriaActive, setGaleriaActive] = useState<any>()

  const handlePrevious = () => {
    api?.scrollPrev()
  }
  const handleNext = () => {
    api?.scrollNext()
  }

  return (
    <div>
      <div className="container mt-[7.95rem]">
        <div className="border-[#B0B0B0] lg:border-l-[2px]">
          <div className="mx-auto max-w-[100.0625rem] rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
            <div className="flex items-center gap-[0.56rem] px-[2.19rem]">
              <Search />
              <h1 className="text-[1.25rem] font-bold">Filtrar Galeria</h1>
            </div>
            <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
            <div className="relative flex gap-[0.69rem] px-[2.19rem]">
              <Select>
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
              <Select>
                <SelectTrigger className="h-[3.75rem] w-[8.875rem] rounded-[0.8125rem]">
                  <SelectValue placeholder="Mês" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Janeiro">Janeiro</SelectItem>
                  <SelectItem value="Fevereiro">Fevereiro</SelectItem>
                  <SelectItem value="Março">Março</SelectItem>
                  <SelectItem value="Abril">Abril</SelectItem>
                  <SelectItem value="Maio">Maio</SelectItem>
                  <SelectItem value="Junho">Junho</SelectItem>
                  <SelectItem value="Julho">Julho</SelectItem>
                  <SelectItem value="Agosto">Agosto</SelectItem>
                  <SelectItem value="Setembro">Setembro</SelectItem>
                  <SelectItem value="Outubro">Outubro</SelectItem>
                  <SelectItem value="Novembro">Novembro</SelectItem>
                  <SelectItem value="Dezembro">Dezembro</SelectItem>
                </SelectContent>
              </Select>

              <div className="w-full max-w-[22.375rem]">
                <Input
                  placeholder="Pesquisar por nome"
                  className="h-[3.75rem] w-full rounded-[0.8125rem]"
                />
              </div>

              <Button className="p ml-auto h-[3.75rem] w-[15.375rem] rounded-[4.625rem] text-[1.25rem]">
                Pesquisar
              </Button>
            </div>
          </div>

          {/* Carousel com grupos de 14 itens */}
          {!galeriaActive ? (
            <div className="container">
              <div className="relative z-10 mx-auto mt-[2.56rem] max-w-[100.0625rem]">
                <Carousel setApi={setApi}>
                  <CarouselContent>
                    {grupoGaleria.map((group, groupIndex) => (
                      <CarouselItem key={`group-${groupIndex}`}>
                        <div className="grid grid-cols-5 gap-[1rem]">
                          {group.map((galeria, index) => (
                            <button
                              key={`leg-${groupIndex}-${index}`}
                              onClick={() => setGaleriaActive(galeria)}
                            >
                              <CardGaleria
                                title={galeria.title}
                                img={galeria.imgs[0]}
                                date={galeria.date}
                              />
                            </button>
                          ))}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="mt-[2.5rem] flex flex-col items-center justify-center gap-[0.41rem] pr-[2.5rem]">
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
          ) : (
            <div className="container">
              <div className="relative z-10 mx-auto mt-[2.56rem] max-w-[100.0625rem]">
                <Button
                  variant={'ghost'}
                  className="relative flex items-center text-[1.25rem] font-bold leading-[1.23775rem] hover:bg-transparent"
                  onClick={() => setGaleriaActive(null)}
                >
                  <div className="absolute left-0 h-[2.55663rem] w-[6px] rounded-full bg-secondary"></div>
                  <ChevronLeft className="w-10" />
                  Voltar
                </Button>
                <div className="mt-[4.16rem] flex items-center justify-center gap-[0.56rem]">
                  <Carousel
                    setApi={setApi}
                    className="mx-auto w-full max-w-[77.75rem]"
                  >
                    <CarouselContent>
                      {galeriaActive.imgs.map((img: string, index: number) => (
                        <CarouselItem key={`img-${index}`}>
                          <img
                            src={img}
                            alt="Imagem da galeria"
                            className="w-full max-w-[77.75rem]"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
                <div className="mx-auto mt-[1.34rem] w-full max-w-[77.75rem]">
                  <h3 className="text-[1.35638rem] font-bold leading-[1.46069rem]">
                    {galeriaActive.title}
                  </h3>
                  <p className="text-[1.02594rem] leading-[1.6415rem] text-secondary">
                    13/12/2024 20h24 | STJD
                  </p>
                </div>
                <div className="mt-[2.5rem] flex flex-col items-center justify-center gap-[0.41rem] pr-[2.5rem]">
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
          )}
          <div className="mx-auto max-w-[100rem]">
            <hr className="my-[4.31rem] h-[0.125rem] bg-secondary" />
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

export default Galerias
