'use client'
import React, { useState } from 'react'
import { Button } from '@/_components/ui/button'
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

interface Props {
  publications: Article[]
  title?: 'Publicações' | 'Últimas Notícias'
}

function PublicationsHighligthCarousel({
  publications,
  title = 'Publicações',
}: Props) {
  const [api, setApi] = useState<CarouselApi>()

  const handlePrevious = () => {
    api?.scrollPrev()
  }
  const handleNext = () => {
    api?.scrollNext()
  }

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          watchDrag: false,
        }}
      >
        <CarouselContent>
          {publications.map((publication) => (
            <CarouselItem key={publication.headline}>
              <div className="flex max-w-[92rem] items-stretch gap-16">
                <div className="relative w-1/2 after:absolute after:inset-0 after:-right-1 after:top-14 after:ml-auto after:h-7 after:w-1 after:rounded-full after:bg-secondary">
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
                <div className="flex w-1/2 flex-col gap-7">
                  <div className="flex items-center gap-2">
                    <Newspaper />
                    <h2 className="text-xl font-bold leading-5">{title}</h2>
                  </div>
                  <div className="flex h-full flex-col gap-5">
                    <h3 className="text-4xl font-bold text-[#000]">
                      {publication.headline}
                    </h3>
                    <p className="text-sm font-normal leading-4 text-[#A1A1A1]">
                      {dateTimeFormat(publication.publishedAt)} - Por:{' '}
                      {'publication.author'}
                    </p>
                    <p className="text-base font-normal leading-[1.7rem] text-[#000]">
                      {publication.lead}
                    </p>
                    <div className="mt-auto flex grow items-end justify-start">
                      <Button className="flex items-end justify-start gap-[0.56rem] bg-transparent p-0 text-[0.82363rem] font-bold leading-[1.23775rem] text-black hover:bg-transparent lg:text-[1.25rem]">
                        Veja mais{' '}
                        <div className="rotate-180">
                          <ChevronLeft />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="h-fu absolute right-0 top-7 flex gap-[0.41rem] pr-[2.5rem]">
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
