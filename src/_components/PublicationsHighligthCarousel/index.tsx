'use client'
import React, { useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/_components/ui/carousel'
import Image from 'next/image'
import { ChevronLeft, Newspaper } from 'lucide-react'
import { Article } from '@/lib/types'
import { dateTimeFormat } from '@/lib/utils'
import Link from 'next/link'
import { MarkedContent } from '../marked-content'

interface Props {
  publications: Article[]
  title?: 'Publicações' | 'Últimas Notícias'
  type: Article['tipo']
}

function PublicationsHighligthCarousel({
  publications,
  title = 'Publicações',
  type,
}: Props) {
  const [api, setApi] = useState<CarouselApi>()

  const hrefPath = {
    Notícia: '/comunicacao/noticias',
    Publicação: '/publicacao-repositorio',
  }

  const handlePrevious = () => {
    api?.scrollPrev()
  }
  const handleNext = () => {
    api?.scrollNext()
  }

  return (
    <>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {publications.map((publication) => (
            <CarouselItem key={publication.id}>
              <Link href={`${hrefPath[type]}/${publication.slug}`}>
                <div className="flex max-w-[92rem] flex-col items-stretch gap-8 lg:flex-row lg:gap-16">
                  <div className="flex items-center gap-2 lg:hidden">
                    <Newspaper />
                    <h2 className="text-lg font-bold">{title}</h2>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={publication.imagem.url}
                        alt={publication.imagem.name}
                        width="720"
                        height="540"
                        className="aspect-[4/3] object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-4 lg:w-1/2 lg:gap-7">
                    <div className="hidden items-center gap-2 lg:flex">
                      <Newspaper />
                      <h2 className="text-xl font-bold">{title}</h2>
                    </div>
                    <div className="flex h-full flex-col gap-5">
                      <h3 className="relative text-4xl font-bold text-[#000] after:absolute after:-left-6 after:top-[0.375rem] after:ml-auto after:h-7 after:w-1 after:rounded-full after:bg-secondary">
                        {publication.headline}
                      </h3>
                      <p className="text-sm font-normal leading-4 text-[#A1A1A1]">
                        {dateTimeFormat(publication.data_publicacao)} - Por:{' '}
                        {'STJD'}
                      </p>
                      <div className="text-base font-normal leading-[1.7rem] text-[#000]">
                        <MarkedContent content={publication.lead} />
                      </div>
                      <div className="mt-auto flex grow items-end justify-start">
                        <Link
                          href={`/publicacao-repositorio/${publication.slug}`}
                          className="flex items-end justify-start gap-[0.56rem] bg-transparent p-0 text-[0.82363rem] font-bold leading-[1.23775rem] text-black hover:bg-transparent lg:text-[1.25rem]"
                        >
                          Veja mais{' '}
                          <div className="rotate-180">
                            <ChevronLeft />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute right-0 top-7 hidden gap-[0.41rem] pr-[2.5rem] lg:flex">
        <button className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full border-[1.929px] border-solid border-[#A1A1A1] bg-[#E1E1E1]/75 backdrop-blur-md">
          <ChevronLeft color="#A1A1A1" onClick={handlePrevious} />
        </button>
        <button className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full border-[1.929px] border-solid border-[#A1A1A1] bg-[#E1E1E1]/75 backdrop-blur-md">
          <ChevronLeft
            color="#A1A1A1"
            className="rotate-180"
            onClick={handleNext}
          />
        </button>
      </div>
    </>
  )
}

export default PublicationsHighligthCarousel
