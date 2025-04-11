'use client'
import { ArrowDownRight } from 'lucide-react'
import React, { useState } from 'react'
import { Calendar } from '../ui/calendar'
import { ptBR } from 'date-fns/locale'

import LiveSessionCard from '../LiveSessionCard'

type Props = {
  status: 'offline' | 'online' | 'waiting'
  onCountdownComplete?: () => void
  releaseDate?: string
}

function JudgmentGuidelines({
  status,
  onCountdownComplete,
  releaseDate,
}: Props) {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="w-full">
      <div className="bg-custom-judgment-guidelines h-[34rem] w-full lg:h-[34.1875rem]">
        <div className="relative w-full rounded-[1.375rem]">
          <div className="flex justify-center lg:block">
            <div className="absolute -top-8 flex h-[3.89519rem] w-[3.89519rem] items-center justify-center rounded-full bg-secondary lg:-left-[1.5rem] lg:-top-[1rem] lg:h-[5.43606rem] lg:w-[5.43606rem]">
              <ArrowDownRight className="rotate-45 lg:rotate-0" />
            </div>
          </div>
          <div className="pt-[2.56rem] lg:pb-[2.13rem]">
            <h1 className="text-center text-[1.25rem] font-bold leading-[1.3125rem] lg:pl-[6.06rem] lg:text-left">
              Pautas de julgamento
            </h1>
          </div>
          <hr className="hidden h-[0.125rem] w-full bg-secondary lg:block" />
          <div className="flex flex-col lg:flex-row">
            <div className="mt-[2.25rem] w-full lg:max-w-[22.5975rem] lg:pl-[1.31rem]">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
                locale={ptBR}
              />
            </div>
            <div className="relative w-full rounded-xl bg-[#E1E1E1] lg:h-[27.95rem]">
              <div className="p-4">
                <h2 className="text-lg font-semibold">Pautas do Dia</h2>
                <div className="">Nenhuma pauta para o dia selecionado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-[4.81rem] hidden items-center lg:flex">
        <hr className="h-[0.125rem] w-full bg-secondary" />
        {status !== 'online' && (
          <LiveSessionCard
            status={status}
            releaseDate={releaseDate}
            onCountdownComplete={onCountdownComplete}
          />
        )}
      </div>
    </div>
  )
}

export default JudgmentGuidelines
