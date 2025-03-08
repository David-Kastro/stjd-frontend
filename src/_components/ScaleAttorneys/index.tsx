'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import LogoBlack from '/public/images/stjd-black.svg'

import { Button } from '../ui/button'
import Link from 'next/link'

interface ScaleAttorneysProps {
  title: string
  subtitle: string
  height: string
  image: string
  textbtn: string
  href: string
}

function ScaleAttorneys({
  title,
  subtitle,
  height,
  image,
  textbtn,
  href,
}: ScaleAttorneysProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Define o breakpoint que você considera como mobile (ex.: 1024px para lg)
    const checkIsMobile = () => setIsMobile(window.innerWidth < 1024)

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <div
      className={`bg-custom-scale relative mx-auto flex flex-col items-center justify-between rounded-none py-[1.7rem] lg:max-w-[99.4375rem] lg:flex-row lg:rounded-[1.375rem] lg:px-4 lg:px-[1.5rem] lg:py-[1.47rem]`}
      style={{ height: isMobile ? 'auto' : height }}
    >
      <div className="relative z-10 flex items-center gap-[0.6rem] lg:gap-[1.06rem]">
        <Image
          src={LogoBlack}
          alt="LogoBlack"
          className="w-[2.8235rem] lg:w-auto"
        />
        <div>
          <h1 className="text-[1.28669rem] font-bold leading-[1.42963rem] tracking-[0.0225rem] text-[#005D8A] lg:text-[2.25rem] lg:leading-normal">
            {title}
          </h1>
          <h2 className="text-[0.71481rem] font-light text-[#000100] lg:text-[1.25rem]">
            {subtitle}
          </h2>
        </div>
      </div>
      <div className="absolute hidden lg:left-96 lg:top-0 lg:block">
        <Image
          src={image}
          alt="BgScalle"
          className="h-full w-full"
          draggable={false}
        />
      </div>
      <Link href={href} className="">
        <Button className="mt-[0.86rem] h-[2.81019rem] w-full max-w-[15.375rem] rounded-[4.625rem] bg-[#000100] px-[3.12rem] py-[0.7rem] font-bold text-[#FFFFFF] lg:mt-0 lg:h-[3.75rem] lg:py-[0.94rem]">
          <p className="text-[0.93675rem] leading-[0.92756rem] lg:text-[1.25rem] lg:leading-normal">
            {textbtn}
          </p>
        </Button>
      </Link>
    </div>
  )
}

export default ScaleAttorneys
