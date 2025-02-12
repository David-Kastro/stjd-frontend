'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/_components/ui/carousel'
import { Article } from '@/lib/types'
import React, { useEffect, useMemo, useState } from 'react'
import CardNews from '../CardNews'
import { ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  articles: Article[]
  itemsPerSlide?: number
  carouselCustomClass?: string
  gridCustomClass?: string
}

function PublicationsCarousel({
  articles,
  itemsPerSlide = 8,
  carouselCustomClass,
  gridCustomClass,
}: Props) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  // Dividindo o array de notícias em grupos de 8
  const groupedArticles = useMemo(() => {
    const result = []
    for (let i = 0; i < articles.length; i += itemsPerSlide) {
      result.push(articles.slice(i, i + itemsPerSlide))
    }
    return result
  }, [articles])

  const handlePrevious = () => {
    api?.scrollPrev()
  }
  const handleNext = () => {
    api?.scrollNext()
  }

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
      <Carousel
        setApi={setApi}
        className={cn(
          'mt-[3.69rem] p-0 lg:w-full lg:pl-[2.81rem]',
          carouselCustomClass,
        )}
      >
        <CarouselContent>
          {groupedArticles.map((group, groupIndex) => (
            <CarouselItem key={groupIndex}>
              <div
                className={cn(
                  'grid grid-cols-2 gap-x-24 gap-y-9',
                  gridCustomClass,
                )}
              >
                {group.map((item, index) => (
                  <div key={index} className="flex-1">
                    <CardNews
                      image={item.imagem.url}
                      title={item.headline}
                      date={item.createdAt}
                      textContent={item.corpo}
                    />
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-5 flex justify-center gap-2">
        {groupedArticles.map((_, groupIndex) => (
          <div
            key={groupIndex}
            className={`h-[0.4375rem] rounded-full ${
              current === groupIndex + 1
                ? 'w-[3.0625rem] bg-[#797979]'
                : 'w-[0.625rem] bg-secondary'
            }`}
          ></div>
        ))}
      </div>

      <div className="absolute right-0 top-7 flex gap-[0.41rem] pr-[2.5rem]">
        <button
          onClick={handlePrevious}
          className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full border-[1.929px] border-solid border-[#A1A1A1] bg-[#E1E1E1]/75 backdrop-blur-md"
        >
          <ChevronLeft color="#A1A1A1" />
        </button>
        <button
          onClick={handleNext}
          className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full border-[1.929px] border-solid border-[#A1A1A1] bg-[#E1E1E1]/75 backdrop-blur-md"
        >
          <ChevronLeft color="#A1A1A1" className="rotate-180" />
        </button>
      </div>
    </>
  )
}

export default PublicationsCarousel
