'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/_components/ui/carousel'
import { Article } from '@/lib/types'
import React, { useMemo, useState } from 'react'
import CardNews from '../CardNews'
import { ChevronLeft } from 'lucide-react'

function NewsCarousel({ articles }: { articles: Article[] }) {
  const [api, setApi] = useState<CarouselApi>()

  // Dividindo o array de notícias em grupos de 8
  const groupedArticles = useMemo(() => {
    const result = []
    for (let i = 0; i < articles.length; i += 8) {
      result.push(articles.slice(i, i + 8))
    }
    return result
  }, [articles])

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
        className="mt-[3.69rem] p-0 lg:w-full lg:pl-[2.81rem]"
      >
        <CarouselContent>
          {groupedArticles.map((group, groupIndex) => (
            <CarouselItem key={groupIndex}>
              <div className={'grid grid-cols-2 gap-x-24 gap-y-9'}>
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

export default NewsCarousel
