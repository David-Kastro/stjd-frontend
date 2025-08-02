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
import { ChevronLeft, FileSearch2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  articles: Article[]
  itemsPerSlide?: number
  carouselCustomClass?: string
  gridCustomClass?: string
  controlsCustomClass?: string
  type: Article['tipo']
}

function PublicationsCarousel({
  articles,
  itemsPerSlide = 8,
  carouselCustomClass,
  gridCustomClass,
  controlsCustomClass,
  type,
}: Props) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const hrefPath = {
    Notícia: '/comunicacao/noticias',
    Publicação: '/publicacao-repositorio',
  }

  // Dividindo o array de notícias em grupos de X (itemsPerSlide) notícias
  const groupedArticles = useMemo(() => {
    const result = []
    for (let i = 0; i < articles.length; i += itemsPerSlide) {
      result.push(articles.slice(i, i + itemsPerSlide))
    }
    return result
  }, [articles])

  console.log('first groupedArticles', groupedArticles)

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

  if (groupedArticles.length === 0) {
    return (
      <div className="mt-[1.5rem] flex h-[20rem] flex-col items-center justify-center gap-[0.75rem]">
        <FileSearch2 size={76} strokeWidth={1} className="opacity-65" />
        <h1 className="text-[1.25rem] font-medium">
          Nenhuma Notícia por aqui.. 🤔
        </h1>
        <p>Tente novamente com outros filtros ou volte mais tarde.</p>
      </div>
    )
  }

  return (
    <>
      <Carousel
        setApi={setApi}
        className={cn(
          'mt-2 p-0 lg:mt-[3.69rem] lg:w-full lg:pl-[2.81rem]',
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
                      date={item.data_publicacao}
                      textContent={item.corpo}
                      href={`${hrefPath[type]}/${item.slug}`}
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

      <div
        className={cn(
          'absolute right-0 top-7 hidden gap-[0.41rem] pr-[2.5rem] lg:flex',
          controlsCustomClass,
        )}
      >
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
