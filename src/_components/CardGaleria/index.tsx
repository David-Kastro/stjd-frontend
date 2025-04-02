import { dateTimeFormat } from '@/lib/utils'
import React from 'react'

interface CardGaleriaProps {
  img: string
  title: string
  date: string
}

function CardGaleria({ img, title, date }: CardGaleriaProps) {
  return (
    <div className="bg-card-galeria relative w-full max-w-[20.1875rem] rounded-[0.77106rem] border border-white bg-cover px-[0.9rem] pb-[0.67rem] pt-[1rem] text-left">
      <img
        src={img}
        alt="Image card galeria"
        className="clip-path-custom aspect-video object-cover"
      />
      <div className="absolute -left-[3px] top-8 h-[2.24413rem] w-[6.26px] rounded-full bg-secondary"></div>
      <div className="flex flex-col gap-[0.5rem]">
        <h3 className="mt-[0.87rem] line-clamp-2 min-h-[1.75rem] text-[0.8125rem] font-bold leading-[0.875rem]">
          {title}
        </h3>
        <p className="mt-[0.56rem] text-[0.625rem] font-light leading-[1rem] text-secondary">
          {dateTimeFormat(date, {
            includeTime: true,
            includeYear: true,
          })}
        </p>
      </div>
    </div>
  )
}

export default CardGaleria
