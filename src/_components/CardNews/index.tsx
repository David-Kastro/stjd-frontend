import Link from 'next/link'
import React from 'react'
import CustomImage from '../CustomImage'
import { dateTimeFormat } from '@/lib/utils'
import { marked } from 'marked'

interface Props {
  image: string
  title: string
  date: string
  textContent: string
  href: string
}

function CardNews({ image, title, date, textContent, href }: Props) {
  return (
    <Link href={href}>
      <div
        className="flex flex-col gap-4 md:gap-[1.88rem] lg:flex-row"
        style={{ userSelect: 'none' }}
      >
        <CustomImage
          src={image}
          className="hidden aspect-video h-fit rounded-[0.625rem] object-cover md:block"
          alt={title}
          width={200}
          height={100}
        />
        <CustomImage
          src={image}
          className="h-fit w-full rounded-[0.625rem] object-cover md:hidden"
          alt={title}
          width={400}
          height={200}
        />
        <div className="flex flex-col gap-[0.5rem] lg:max-w-[29rem]">
          <h1 className="text-[1.25rem] font-bold leading-[1.5rem]">{title}</h1>
          <h2 className="text-[0.875rem] text-secondary">
            {dateTimeFormat(date)}
          </h2>
          <p
            className="line-clamp-3 text-[0.8125rem] lg:line-clamp-2 lg:text-base lg:leading-[1.6875rem]"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: marked.parse(textContent) }}
          />
        </div>
      </div>
    </Link>
  )
}

export default CardNews
