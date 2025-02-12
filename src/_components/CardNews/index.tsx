import Link from 'next/link'
import React from 'react'
import CustomImage from '../CustomImage'
import { dateTimeFormat } from '@/lib/utils'

interface Props {
  image: string
  title: string
  date: string
  textContent: string
}

function CardNews({ image, title, date, textContent }: Props) {
  return (
    <Link href={'/noticias'}>
      <div
        className="flex flex-col gap-[1.88rem] lg:flex-row"
        style={{ userSelect: 'none' }}
      >
        <CustomImage
          src={image}
          className="aspect-video h-fit rounded-[0.625rem] object-cover"
          alt={title}
          width={200}
          height={100}
        />
        <div className="flex flex-col gap-[0.5rem] lg:max-w-[29rem]">
          <h1 className="font-bold leading-[1.5rem] lg:text-[1.25rem]">
            {title}
          </h1>
          <h2 className="text-[0.875rem] text-secondary">
            {dateTimeFormat(date)}
          </h2>
          <p className="line-clamp-2 text-[0.75rem] leading-[1.6875rem] lg:text-base">
            {textContent}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CardNews
