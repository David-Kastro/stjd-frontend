import { GraduationCap, Home, User, MicVocal } from 'lucide-react'
import React from 'react'

interface CardContactProps {
  type: 'general' | 'personal' | 'study' | 'press'
  number: string
  title: string
  subtitle?: string
}

function CardContact({ type, number, title, subtitle }: CardContactProps) {
  return (
    <div className="w-full max-w-[27.375rem] rounded-[0.8125rem] bg-[#E0E0E0]">
      <div className="flex items-center py-[0.56rem] pl-[0.5rem] lg:px-[0.5rem]">
        <div className="flex items-center gap-[0.63rem]">
          <div className="flex h-[2.6875rem] w-[2.6875rem] items-center justify-center rounded-full bg-[#D6D6D6]">
            {type === 'general' && <Home />}
            {type === 'personal' && <User />}
            {type === 'study' && <GraduationCap />}
            {type === 'press' && <MicVocal />}
          </div>
          <p className="text-[0.75rem] lg:text-[0.9rem]">{number}</p>
        </div>
        <div className="mx-[0.5rem] h-[2.625rem] w-[0.0625rem] bg-secondary lg:mx-[1.12rem]"></div>
        <div>
          <p className="text-[0.9rem] font-bold leading-[0.95769rem] lg:text-[0.95769rem]">
            {title}
          </p>
          {subtitle && (
            <p className="text-[0.6rem] leading-[0.95769rem] lg:text-[0.6875rem]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardContact
