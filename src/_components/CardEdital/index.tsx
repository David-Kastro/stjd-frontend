'use client'
import React from 'react'
import { FileText } from 'lucide-react'
import Link from 'next/link'

interface CardEditalProps {
  title: string
  subtitle?: string
  description?: string
  type: 'link' | 'function'
  path?: string
  handleClick?: () => void
  isActive?: boolean
}

function CardEdital({
  title,
  subtitle,
  description,
  type,
  path,
  handleClick,
  isActive,
}: CardEditalProps) {
  if (type === 'link') {
    return (
      <Link href={path || ''}>
        <div
          className={`flex w-full max-w-[44.3125rem] items-center gap-[1.18rem] rounded-[0.625rem] bg-[#E1E1E1] px-[1.25rem] py-[0.62rem] shadow-sm transition-colors duration-300 ease-in-out hover:bg-[#fff] lg:gap-[1.88rem]`}
        >
          <FileText className="text-[#A2A2A2]" />
          <div className="">
            <h1 className="line-clamp-1 text-[0.75rem] font-bold text-[#2E2E2E] lg:text-[1.20rem]">
              {title}
              {/* <span className="hidden text-base font-medium lg:block">
                {subtitle && ` - ${subtitle}`}
              </span> */}
            </h1>
            <h2 className="text-[0.51225rem] font-bold text-[#2E2E2E] lg:text-[0.8125rem]">
              <span className="hidden text-base font-normal lg:inline-block">
                {subtitle && `${subtitle} -`}
              </span>{' '}
              {description}
            </h2>
          </div>
        </div>
      </Link>
    )
  }
  return (
    <button onClick={handleClick}>
      <div
        className={`flex w-full max-w-[44.3125rem] items-center gap-[1.18rem] rounded-[0.625rem] bg-[#E1E1E1] px-[1.25rem] py-[0.62rem] text-left shadow-sm transition-colors duration-300 ease-in-out hover:bg-[#fff] lg:gap-[1.88rem] ${
          isActive && 'border-[2px] border-[#BD995D] bg-[#fff]'
        }`}
      >
        <FileText className="text-[#A2A2A2]" />
        <div className="">
          <h1 className="line-clamp-1 text-[0.75rem] font-bold text-[#2E2E2E] lg:text-[1.20rem]">
            {title}
            {/* <span className="hidden text-base font-medium lg:block">
                {subtitle && ` - ${subtitle}`}
              </span> */}
          </h1>
          <h2 className="text-[0.51225rem] font-bold text-[#2E2E2E] lg:text-[0.8125rem]">
            <span className="hidden text-base font-normal lg:inline-block">
              {subtitle && `${subtitle} -`}
            </span>{' '}
            {description}
          </h2>
        </div>
      </div>
    </button>
  )
}

export default CardEdital
