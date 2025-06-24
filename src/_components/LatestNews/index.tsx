'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/_components/ui/carousel'

import CardNews from '../CardNews'

import LiveSessionCard from '../LiveSessionCard'
import { Article, Edital, Session } from '@/lib/types'
import CustomImage from '../CustomImage'
import { dateTimeFormat } from '@/lib/utils'
import JudgmentGuidelines from '../JudgmentGuidelines'
import ListEditais from '../ListEditais'
import { MarkedContent } from '../marked-content'
import Link from 'next/link'

function LatestNews({
  articles,
  editais,
  lastEditais,
  nextSession,
}: {
  articles: Article[]
  editais: Edital[]
  lastEditais: Edital[]
  nextSession?: Session
}) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [dateNow, setDateNow] = useState<Date>(new Date())

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const status = useMemo(() => {
    if (!dateNow || !nextSession) {
      return 'offline'
    }

    if (dateNow >= new Date(nextSession.data)) {
      return 'online'
    }

    // eslint-disable-next-line prettier/prettier
    if (
      new Date(nextSession.data).getTime() - dateNow.getTime() <
      1000 * 60 * 60 * 24
    ) {
      // TODO: Pegar da configuração global
      return 'waiting'
    }

    return 'offline'
  }, [dateNow, nextSession])

  const articlesWithoutHighlight = useMemo(() => articles.slice(1), [articles])

  // Dividindo o array de notícias em grupos de 3
  const groupedArticles = useMemo(() => {
    const result = []
    for (let i = 0; i < articlesWithoutHighlight.length; i += 3) {
      result.push(articlesWithoutHighlight.slice(i, i + 3))
    }
    return result
  }, [articlesWithoutHighlight])

  const articleHightlight = articles[0]

  const handlePrevious = () => {
    api?.scrollPrev()
  }
  const handleNext = () => {
    api?.scrollNext()
  }

  const onCountdownComplete = () => {
    setTimeout(() => {
      setDateNow(new Date())
    }, 500)
  }

  return (
    <div className="container lg:mt-[5rem]">
      <div className="flex flex-col gap-[3rem] border-[#B0B0B0] lg:flex-row lg:border-l-[2px]">
        <div>
          <div className="relative w-full rounded-[1.375rem] pb-[2.19rem] lg:ml-[4.69rem] lg:bg-[#E1E1E1] lg:pt-[2.56rem] xl:max-w-[40.1875rem] 2xl:max-w-[50.1875rem]">
            {status === 'online' && nextSession && (
              <>
                <div className="relative lg:w-[50.1875rem]">
                  <div className="absolute -left-20 top-56 w-[15.65488rem] lg:-left-16 lg:-top-10">
                    <LiveSessionCard
                      status={'online'}
                      onCountdownComplete={onCountdownComplete}
                      releaseDate={nextSession.data}
                    />
                  </div>
                  <iframe
                    className="h-[14.8125rem] w-full lg:mt-[2.56rem] lg:h-[28.75rem]"
                    src={nextSession.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <div className="mt-[3.6rem] px-[2.5rem] lg:mt-[1.44rem]">
                    <p className="text-[0.73369rem] font-bold lg:text-[1.25rem]">
                      {nextSession.titulo}
                    </p>
                    <p className="text-[0.51356rem] text-[#A1A1A1] lg:mt-[0.5rem] lg:text-[0.875rem]">
                      {dateTimeFormat(nextSession.data)}
                    </p>
                  </div>
                </div>
                <div className="mt-[1.6rem] hidden items-center gap-[1.31rem] lg:flex">
                  <hr className="h-[0.125rem] w-full bg-[#C2C2C2]" />
                  <div className="flex gap-[0.41rem] pr-[2.5rem]">
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
                <div className="mt-[0.78rem] rounded-[0.63938rem] bg-[#E1E1E1] px-[1.19rem] py-[1.52rem] lg:mt-[3.1rem] lg:bg-transparent lg:px-[2.5rem] lg:py-0">
                  {/* <div className="flex items-center gap-[0.56rem]">
                    <Newspaper className="w-[1.06088rem] lg:w-auto" />
                    <p className="text-[0.88406rem] font-bold lg:text-[1.25rem]">
                      Últimas notícias
                    </p>
                  </div> */}
                  <Carousel
                    setApi={setApi}
                    className="mt-[1.29rem] w-full lg:mt-[3.69rem]"
                  >
                    <CarouselContent>
                      {articlesWithoutHighlight.map((group, groupIndex) => (
                        <CarouselItem key={groupIndex}>
                          <>
                            <h1 className="w-full max-w-[40.1875rem] text-[1.29613rem] font-bold leading-[1.44013rem] tracking-[0.0225rem] lg:text-[2.25rem] lg:leading-[2.5rem]">
                              {group.headline}
                            </h1>
                            <h2 className="mt-[0.7rem] text-[0.5rem] text-[#A1A1A1] lg:mt-[1.19rem] lg:text-[0.875rem]">
                              {dateTimeFormat(group.data_publicacao)}
                            </h2>
                            <CustomImage
                              src={group.imagem.url}
                              className="mt-[1.14rem] aspect-[2/1] w-full rounded-[1.25rem] object-cover lg:mt-[2.88rem]"
                              alt={group.imagem.name}
                              width={5000}
                              height={100}
                            />
                            {/* <img
                          src={group.imagem.url}
                          className="rounded-[1.25rem] lg:mt-[2.88rem] mt-[1.14rem]"
                          alt="Image"
                        /> */}
                            <div className="mt-[0.9rem] text-[0.75rem] leading-4 lg:mt-[1.94rem] lg:text-base">
                              <MarkedContent content={group.lead} />
                            </div>
                            <Link
                              href={`/comunicacao/noticias/${group.slug}`}
                              className="ml-auto flex w-fit items-center gap-[0.56rem] bg-transparent text-[0.82363rem] font-bold leading-[1.23775rem] text-black hover:bg-transparent lg:hidden"
                            >
                              Veja mais <ChevronRight />
                            </Link>
                          </>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                  <div className="mt-5 flex justify-center gap-2">
                    {articlesWithoutHighlight.map((_, groupIndex) => (
                      <div
                        key={groupIndex}
                        className={`h-[0.4375rem] w-[4rem] rounded-full transition-all ${
                          current === groupIndex + 1
                            ? 'max-w-[3.0625rem] bg-[#797979]'
                            : 'max-w-[0.625rem] bg-secondary'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {articleHightlight && status !== 'online' && (
              <>
                <div className="absolute -left-[2px] top-[6rem] h-[1rem] w-[2px] rounded-full bg-secondary lg:top-[8rem] lg:h-[2rem] lg:w-[5px]"></div>
                <div className="mt-[1.62rem] rounded-[0.63938rem] bg-[#E1E1E1] px-[1.5rem] py-[1.5rem] lg:mt-0 lg:rounded-none lg:bg-transparent lg:px-[2.5rem] lg:py-0">
                  <div className="absolute -right-2 -top-10 z-10 w-[15.65488rem] lg:hidden">
                    <LiveSessionCard status={'offline'} />
                  </div>
                  {/* <div className="flex items-center gap-[0.56rem]">
                    <Newspaper className="w-[1.06088rem] lg:w-auto" />
                    <p className="text-[0.88406rem] font-bold lg:text-[1.25rem]">
                      Últimas notícias
                    </p>
                  </div> */}
                  <h1 className="mt-[1.29rem] w-full max-w-[40.1875rem] text-[1.29613rem] font-bold leading-[1.44013rem] tracking-[0.01294rem] lg:mt-[2.94rem] lg:text-[2.25rem] lg:leading-[2.5rem] lg:tracking-[0.0225rem]">
                    {articleHightlight.headline}
                  </h1>
                  <CustomImage
                    src={articleHightlight.imagem.url}
                    className="mt-[1.4rem] aspect-[2/1] rounded-[1.25rem] object-cover lg:mt-[2.88rem]"
                    alt={articleHightlight.imagem.name}
                    width={720}
                    height={360}
                  />
                  <div className="mt-[0.9rem] text-[0.75rem] leading-[1rem] lg:mt-[1.94rem] lg:text-base lg:leading-[1.6875rem]">
                    <MarkedContent content={articleHightlight.lead} />
                  </div>
                  <Link
                    href={`/comunicacao/noticias/${articleHightlight.slug}`}
                    className="ml-auto mt-[0.6rem] flex w-fit items-center gap-[0.56rem] bg-transparent text-[0.82363rem] font-bold leading-[1.23775rem] text-black hover:bg-transparent lg:mt-[2.5rem] lg:text-[1.25rem]"
                  >
                    Veja mais{' '}
                    <div className="rotate-180">
                      <ChevronLeft />
                    </div>
                  </Link>
                </div>
                <div className="mt-[4rem] hidden items-center gap-[1.31rem] lg:flex">
                  <hr className="h-[0.125rem] w-full bg-[#C2C2C2]" />
                  <div className="flex gap-[0.41rem] pr-[2.5rem]">
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
                <div className="relative">
                  <Carousel
                    setApi={setApi}
                    className="mt-8 p-0 lg:mt-[3.69rem] lg:w-full lg:pl-[2.81rem]"
                  >
                    <CarouselContent>
                      {groupedArticles.map((group, groupIndex) => (
                        <CarouselItem key={groupIndex}>
                          <div className="flex flex-col gap-[2.81rem] lg:p-4">
                            {group.map((item, index) => (
                              <div key={index} className="flex-1">
                                <CardNews
                                  image={item.imagem.url}
                                  title={item.headline}
                                  date={item.data_publicacao}
                                  textContent={item.lead}
                                  href={`/comunicacao/noticias/${item.slug}`}
                                />
                              </div>
                            ))}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>

                <div className="mt-[2rem] flex justify-center gap-2">
                  {groupedArticles.map((_, groupIndex) => (
                    <div
                      key={groupIndex}
                      className={`h-[0.4375rem] w-[4rem] rounded-full transition-all ${
                        current === groupIndex + 1
                          ? 'max-w-[3.0625rem] bg-[#797979]'
                          : 'max-w-[0.625rem] bg-secondary'
                      }`}
                    ></div>
                  ))}
                </div>
              </>
            )}
          </div>
          <Link
            href={`/comunicacao/noticias`}
            className="mb-[2.88rem] ml-auto mt-[1.63rem] hidden w-fit items-center gap-[0.56rem] bg-transparent text-[1.25rem] font-bold leading-[1.23775rem] text-black hover:bg-transparent lg:flex"
          >
            Veja mais{' '}
            <div className="rotate-180">
              <ChevronLeft />
            </div>
          </Link>
        </div>
        <div className="grow">
          <JudgmentGuidelines
            status={status}
            onCountdownComplete={onCountdownComplete}
            releaseDate={nextSession?.data}
            editais={editais}
          />
          <ListEditais editais={lastEditais} />
        </div>
      </div>
    </div>
  )
}
export default LatestNews
