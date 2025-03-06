import React from 'react'

import Image, { StaticImageData } from 'next/image'
import { ArrowDown, Scale } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CardTopPageProps {
  title: string
  description: string
  image: StaticImageData
  height: string
  scrollTo?: string
  customClassImage?: string
}

function CardTopPage({
  title,
  description,
  image,
  height,
  scrollTo,
  customClassImage,
}: CardTopPageProps) {
  return (
    <div className="container mt-5 lg:mt-[5.64rem]">
      <div
        className={cn(
          `bg-custom-judgment-guidelines relative mx-auto mb-10 max-w-[100.0625rem] rounded-[1.375rem]`,
          height,
        )}
      >
        <div className="absolute -left-[2px] top-[13rem] h-[2rem] w-[5px] rounded-full bg-secondary"></div>
        <div className="flex items-center gap-[0.56rem] px-4 py-5 lg:px-[2.25rem] lg:py-[2.12rem]">
          <Scale />
          <h1 className="text-[0.85rem] font-bold lg:text-[1.25rem]">
            Superior Tribunal de Justiça <br className="lg:hidden" /> Desportiva
            do Futebol
          </h1>
        </div>
        <hr className="h-[0.125rem] w-full bg-secondary" />
        <div
          className={cn('-right-36 -top-8 z-0 lg:absolute', customClassImage)}
        >
          <Image src={image} alt="" />
        </div>
        <div className="max-w-[44.125rem] px-[1.5rem] lg:mt-0 lg:px-0 lg:pl-[2.25rem] lg:pt-[5.5rem]">
          <h1 className="text-[2.2rem] font-bold leading-[2.1875rem] tracking-[0.03rem] lg:text-[3rem] lg:leading-normal">
            {title}
          </h1>
          <h2 className="mt-[0.81rem] text-[0.75rem] leading-[1.3125rem] lg:text-base lg:leading-[1.6875rem]">
            {description}
          </h2>
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
