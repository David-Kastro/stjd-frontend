'use client'
import { MonitorPlay } from 'lucide-react'
import React, { useEffect, useState, useCallback } from 'react'
import { Fira_Sans } from 'next/font/google'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import { useGlobalContext } from '@/contexts/GlobalContext'

const fira = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

interface Props {
  status: 'offline' | 'online' | 'wating' | 'disabled'
}

function LiveSessionCard({ status }: Props) {
  const { setStatus, sessao } = useGlobalContext()
  const [releaseDate, setReleaseDate] = useState<Date | null>(null)

  useEffect(() => {
    if (sessao?.released) {
      const date = new Date(sessao.released)
      if (!isNaN(date.getTime())) {
        setReleaseDate(date)
      } else {
        console.error('Data inválida:', sessao.released)
      }
    }
  }, [sessao?.released])

  const onComplete = useCallback(() => {
    if (status !== 'online') {
      setStatus('online')
    }
  }, [status, setStatus])

  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <span>Ao vivo em: 00:00:00</span>
    } else {
      return (
        <span>
          Ao vivo em: {String(hours).padStart(2, '0')}:
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      )
    }
  }

  return (
    <div
      className="absolute right-0 flex gap-[1.22rem] rounded-[1.375rem] bg-white px-[0.96rem] py-[0.57rem] lg:px-[1.44rem] lg:py-[0.86rem]"
      style={status === 'disabled' ? { display: 'none' } : {}}
    >
      <div
        className={`flex items-center justify-center rounded-full border-[3.447px] p-[0.6rem] lg:p-4 ${
          status === 'offline' && 'border-[#E8E8F6] bg-secondary'
        } ${status === 'online' && 'border-[#E8E8F6] bg-[#D23C3C]'} ${
          status === 'wating' && 'border-[#D23C3C] bg-[#DEDEDE]'
        } `}
      >
        <MonitorPlay
          className={`h-[1rem] w-[1rem] lg:h-auto lg:w-auto ${
            status === 'wating' ? 'text-[#474747]' : ''
          }text-white`}
        />
      </div>
      <div>
        <p
          className={` ${fira.className} text-left text-[0.67031rem] font-bold leading-[1.34063rem] text-[#474747] lg:text-[1.00538rem] lg:leading-[2.01075rem]`}
        >
          Sessão ao vivo
        </p>
        <p className="text-left text-[0.57456rem] leading-[1rem] text-secondary lg:text-[0.86175rem] lg:leading-normal">
          {' '}
          {status === 'offline' && 'offline'}
          {status === 'online' && 'online'}
          {status === 'wating' && releaseDate && (
            <Countdown
              date={releaseDate}
              renderer={renderer}
              onComplete={onComplete}
            />
          )}
        </p>
      </div>
    </div>
  )
}

export default LiveSessionCard
