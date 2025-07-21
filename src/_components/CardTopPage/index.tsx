import React from 'react'

import Image, { StaticImageData } from 'next/image'
import { ArrowDown, Scale } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CardTopPageProps {
  title: string
  description: string
  image: StaticImageData
  scrollTo?: string
  imagePosition?:
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'center'
    | 'centerLeft'
    | 'centerRight'
    | 'centerTop'
    | 'centerBottom'
  imageCustomClass?: string
}

function CardTopPage({
  title,
  description,
  image,
  scrollTo,
  imagePosition = 'center',
  imageCustomClass,
}: CardTopPageProps) {
  const setImagePosition = {
    topLeft: 'left-0 top-0 justify-start items-start',
    topRight: '-right-4 top-0 justify-end items-start',
    bottomLeft: 'left-0 bottom-0 justify-start items-end',
    bottomRight: '-right-4 bottom-0 justify-end items-end',
    center:
      'left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center',
    centerLeft:
      'left-0 top-1/2 transform -translate-y-1/2 justify-start items-center',
    centerRight:
      '-right-4 top-1/2 transform -translate-y-1/2 justify-end items-center',
    centerTop:
      'left-1/2 top-0 transform -translate-x-1/2 justify-center items-start',
    centerBottom:
      'left-1/2 bottom-0 transform -translate-x-1/2 justify-center items-end',
  }

  return (
    <div className="container relative mt-5 lg:mt-[5.64rem]">
      <div
        className={cn(
          `bg-custom-judgment-guidelines relative mx-auto mb-10 max-w-[100.0625rem] rounded-[1.375rem]`,
        )}
      >
        <div className="absolute -left-[2px] top-[13rem] h-[2rem] w-[5px] rounded-full bg-secondary"></div>
        <div className="flex flex-col items-stretch justify-center lg:flex-row">
          <div className="w-full pb-12 lg:w-1/2">
            <div className="relative flex items-center gap-[0.56rem] px-4 py-5 before:absolute before:inset-x-0 before:bottom-0 before:z-0 before:w-full before:border-b-[0.125rem] before:border-secondary lg:py-[2.12rem] lg:before:w-[calc(200%)] xl:px-[2.25rem]">
              <Scale />
              <h1 className="font-bold ~text-[0.85rem]/[1.25rem]">
                Superior Tribunal de Justiça <br className="lg:hidden" />{' '}
                Desportiva do Futebol
              </h1>
            </div>
            <div className="mt-2 flex w-full items-center justify-center lg:hidden">
              <Image
                src={image}
                alt=""
                className="relative max-h-[15rem] w-auto object-contain"
              />
            </div>
            <div className="max-w-[44.125rem] px-[1.5rem] ~mt-6/0 lg:mt-0 lg:px-0 lg:pl-[2.25rem] lg:pt-[5.5rem]">
              <h1 className="font-bold tracking-[0.03rem] ~text-[2.25rem]/[3rem] ~leading-[2.1875rem]/[3.2rem]">
                {title}
              </h1>
              <h2 className="mt-[0.81rem] ~text-[0.75rem]/[1rem] ~leading-[1.3125rem]/[1.6875rem]">
                {description}
              </h2>
            </div>
          </div>
          <div className={cn('relative flex w-full lg:w-1/2')}>
            <div
              className={cn(
                'absolute hidden h-[calc(100%+8rem)] w-[calc(100%+1rem)] lg:flex',
                setImagePosition[imagePosition],
                imageCustomClass,
              )}
            >
              <Image
                src={image}
                alt=""
                className="relative z-0 h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {scrollTo && (
          <Link
            href={scrollTo}
            className="absolute inset-x-0 -bottom-[1.5rem] mx-auto flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-full bg-secondary px-4 py-2 hover:bg-secondary"
          >
            <ArrowDown className="text-black" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default CardTopPage
