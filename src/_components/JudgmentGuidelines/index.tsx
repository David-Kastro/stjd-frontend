'use client'
import { ArrowDownRight, FileIcon } from 'lucide-react'
import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { ptBR } from 'date-fns/locale'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { format, isSameDay, parseISO } from 'date-fns'
import type { Edital } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

import { Button } from '@/components/ui/button'
import LiveSessionCard from '../LiveSessionCard'
import Link from 'next/link'

type Props = {
  status: 'offline' | 'online' | 'waiting'
  onCountdownComplete?: () => void
  releaseDate?: string
  editais: Edital[]
}

function JudgmentGuidelines({
  status,
  onCountdownComplete,
  releaseDate,
  editais,
}: Props) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  // const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedDayEditais, setSelectedDayEditais] = useState<Edital[]>([])

  // Function to check if a day has editais
  const hasEditaisOnDay = (day: Date) => {
    return editais.some((edital) => {
      const editalDate = parseISO(edital.data)
      return isSameDay(day, editalDate)
    })
  }

  // Function to count editais on a specific day
  const countEditaisOnDay = (day: Date) => {
    return editais.filter((edital) => {
      const editalDate = parseISO(edital.data)
      return isSameDay(day, editalDate)
    }).length
  }

  // Function to get editais for a specific day
  const getEditaisForDay = (day: Date) => {
    return editais
      .filter((edital) => {
        const editalDate = parseISO(edital.data)
        return isSameDay(day, editalDate)
      })
      .sort((a, b) => {
        // Sort by date and time
        return new Date(a.data).getTime() - new Date(b.data).getTime()
      })
  }

  // Handle date selection
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate)
      const dayEditais = getEditaisForDay(selectedDate)

      if (dayEditais.length > 0) {
        setSelectedDayEditais(dayEditais)
        setDialogOpen(true)
      } else {
        setSelectedDayEditais([])
      }
    }
  }

  // Custom day content to show indicators
  const dayContent = (day: Date) => {
    const count = countEditaisOnDay(day)

    return (
      <>
        {day.getDate()}
        {count > 0 && (
          <div className="absolute bottom-1 left-0 right-0 flex justify-center">
            <div className="flex gap-0.5">
              {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
                <div key={i} className="h-1 w-1 rounded-full bg-primary" />
              ))}
              {count > 3 && (
                <div className="h-1 w-1 rounded-full bg-primary opacity-50" />
              )}
            </div>
          </div>
        )}
      </>
    )
  }

  // Get editais for the selected day to display in the panel
  const selectedDayEditaisForPanel = date ? getEditaisForDay(date) : []

  return (
    <div className="w-full">
      <div className="bg-custom-judgment-guidelines h-auto w-full lg:h-auto">
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
                onSelect={handleDateSelect}
                onMonthChange={() => {}}
                className="rounded-md"
                locale={ptBR}
                modifiersClassNames={{
                  selected: 'bg-secondary text-white',
                }}
                components={{
                  DayContent: ({ date }: any) => dayContent(date),
                }}
                modifiers={{
                  hasEditais: (day: any) => hasEditaisOnDay(day),
                }}
                // styles={{
                //   day: (date: any) => dayClassName(date) as any,
                // }}
              />
            </div>
            <div className="relative w-full rounded-xl bg-[#E1E1E1] lg:h-auto lg:min-h-[27.95rem]">
              <div className="p-4">
                <h2 className="text-lg font-semibold">
                  {
                    // if today is selected, show "Pautas do dia" and the date
                    date && isSameDay(date, new Date())
                      ? 'Pautas de hoje'
                      : `Pautas do dia ${date && format(date, "dd 'de' MMMM", { locale: ptBR })}`
                  }
                </h2>
                {selectedDayEditaisForPanel.length > 0 ? (
                  <div className="mt-4 space-y-4">
                    {selectedDayEditaisForPanel.map((edital) => (
                      <div
                        key={edital.id}
                        className="rounded-lg bg-white p-4 shadow-sm"
                      >
                        <div className="flex items-start justify-between">
                          <div className="w-full">
                            <h3 className="font-medium">{edital.titulo}</h3>
                            <p className="text-sm text-gray-600">
                              {edital.subtitulo}
                            </p>
                            <div className="flex w-full items-end justify-between">
                              <div className="mt-2 flex items-center gap-2">
                                <Badge variant="outline">{edital.tipo}</Badge>
                                <span className="text-xs text-gray-500">
                                  {format(parseISO(edital.data), 'HH:mm', {
                                    locale: ptBR,
                                  })}
                                </span>
                              </div>
                              <div>
                                <Link
                                  href={`/editais?documentId=${edital.documentId}`}
                                  className="text-sm font-medium text-primary hover:underline"
                                >
                                  Ver Edital
                                </Link>
                              </div>
                            </div>
                          </div>
                          {edital.documento && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex items-center gap-1"
                              asChild
                            >
                              <a
                                href={edital.documento.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FileIcon className="h-4 w-4" />
                                <span>Ver</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-8 text-center text-gray-500">
                    {
                      // if today is selected, show "Nenhuma pauta para o dia" and the date
                      date && isSameDay(date, new Date())
                        ? 'Nenhuma pauta para hoje'
                        : `Nenhuma pauta para o dia selecionado`
                    }
                  </div>
                )}
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

      {/* Dialog for showing editais on a selected day */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              Pautas de Julgamento -{' '}
              {date && format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
            <div className="space-y-4 p-1">
              {selectedDayEditais.map((edital) => (
                <div
                  key={edital.id}
                  className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="secondary">{edital.tipo}</Badge>
                    <span className="text-sm font-medium text-gray-600">
                      {format(parseISO(edital.data), 'HH:mm', { locale: ptBR })}
                    </span>
                  </div>
                  <div className="flex w-full items-end justify-between">
                    <div>
                      <h3 className="mb-1 text-lg font-medium">
                        {edital.titulo}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {edital.subtitulo}
                      </p>
                    </div>

                    <div>
                      <Link
                        href={`/editais?documentId=${edital.documentId}`}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Ver Edital
                      </Link>
                    </div>
                  </div>

                  {edital.documento && (
                    <div className="mt-4 flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        asChild
                      >
                        <a
                          href={edital.documento.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileIcon className="h-4 w-4" />
                          <span>Visualizar documento</span>
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default JudgmentGuidelines
