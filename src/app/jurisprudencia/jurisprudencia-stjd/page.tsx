'use client'
import CardTopPage from '@/_components/CardTopPage'
import React, { useState } from 'react'
import Estatua from '/public/images/lupa-juris.png'
import { Search, ChevronLeft, CalendarIcon } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/_components/ui/select'
import { Button } from '@/_components/ui/button'
import BgFundoMembers from '/public/images/bg-fundo-members.svg'

import { Input } from '@/_components/ui/input'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import Image from 'next/image'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import BgScalle from '/public/images/bg-card-processo.svg'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/_components/ui/popover'
import { Calendar } from '@/_components/ui/calendar'

function JurisprudenciaStj() {
  const [openAdvanced, setOpenAdvanced] = useState(false)
  return (
    <div>
      <div className="mt-[9rem]">
        <CardTopPage
          title="Jurisprudência"
          description="A jurisprudência do Superior Tribunal de Justiça Desportiva (STJD) assegura uniformidade nas decisões relacionadas a infrações, regulamentos e disputas esportivas. Baseada em casos anteriores, ela promove ética, fair play e segurança jurídica, orientando atletas, clubes e dirigentes no cumprimento das regras do desporto nacional."
          image={Estatua}
          height="lg:h-[28.875rem]"
          customClassImage="!-top-28 right-10"
        />
        <div className="container">
          {!openAdvanced ? (
            <div className="mx-auto max-w-[100rem]">
              <div className="relative z-10 rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
                <div className="flex items-center gap-[0.56rem] px-[2.19rem]">
                  <Search />
                  <h1 className="text-[1.25rem] font-bold">
                    Consultar Jurisprudências
                  </h1>
                </div>
                <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
                <div className="px-[2.19rem]">
                  <div className="mt-[0.5rem] flex items-end gap-[0.56rem]">
                    <Select>
                      <SelectTrigger className="h-[3.75rem] w-[22.5625rem] rounded-[0.8125rem]">
                        <SelectValue placeholder="Pesquise aqui" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="h-[3.75rem] w-[14.5625rem] rounded-[0.8125rem]">
                        <SelectValue placeholder="Escolha o Ano" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button
                      onClick={() => setOpenAdvanced(true)}
                      className="ml-[1.75rem] h-[3.75rem] w-[15.375rem] bg-transparent text-[1.25rem] font-bold text-[#BD995D] hover:bg-transparent"
                    >
                      Pesquisa avançada
                    </Button>
                    <Button className="p ml-auto h-[3.75rem] w-[15.375rem] rounded-[4.625rem] text-[1.25rem]">
                      Pesquisar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-[100rem]">
              <div className="relative z-10 rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
                <div className="flex items-center gap-[0.56rem] px-[2.19rem]">
                  <Button
                    className="bg-transparent p-0 hover:bg-transparent"
                    onClick={() => setOpenAdvanced(false)}
                  >
                    <ChevronLeft className="text-black" />
                  </Button>
                  <h1 className="text-[1.25rem] font-bold">
                    Consultar Jurisprudências
                  </h1>
                </div>
                <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
                <div className="px-[2.19rem]">
                  <h2 className="mb-[1.79rem] text-[1.67094rem] font-bold text-secondary">
                    Pesquisa avançada
                  </h2>
                  <div className="mt-[0.5rem] flex items-end gap-[1.5rem]">
                    <div className="w-full max-w-[23.375rem]">
                      <Input
                        placeholder="Número do acordão"
                        className="h-[3.75rem] w-full rounded-[0.8125rem]"
                      />
                    </div>
                    <div className="w-full max-w-[22.25rem]">
                      <Input
                        placeholder="Número do processo"
                        className="h-[3.75rem] w-full rounded-[0.8125rem]"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="h-[3.75rem] w-[22.5625rem] rounded-[0.8125rem]">
                        <SelectValue placeholder="Órgão" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="h-[3.75rem] w-[22.5625rem] rounded-[0.8125rem]">
                        <SelectValue placeholder="Pesquise aqui" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="h-[3.75rem] w-[23.0625rem] rounded-[0.8125rem]">
                        <SelectValue placeholder="Classe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mt-[1.5rem] flex items-end gap-[1.5rem]">
                    <Select>
                      <SelectTrigger className="h-[3.75rem] w-[14rem] rounded-[0.8125rem]">
                        <SelectValue placeholder="Relator (a)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="h-[3.75rem] w-[14rem] rounded-[0.8125rem]">
                        <SelectValue placeholder="Revisor (a)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="h-[3.75rem] w-[16.6875rem] rounded-[0.8125rem]">
                        <SelectValue placeholder="Relator (a) Designado (a)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="w-full max-w-[22.5625rem]">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={'outline'}
                            className="h-[3.75rem] w-full rounded-[0.8125rem]"
                          >
                            Data de Julgamento
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            disabled={(date) =>
                              date > new Date() || date < new Date('1900-01-01')
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="w-full max-w-[22.5625rem]">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={'outline'}
                            className="h-[3.75rem] w-full rounded-[0.8125rem]"
                          >
                            Data de Publicação
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            disabled={(date) =>
                              date > new Date() || date < new Date('1900-01-01')
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="mt-[4.19rem] flex justify-end">
                    <Button className="p h-[3.75rem] w-[15.375rem] rounded-[4.625rem] text-[1.25rem]">
                      Pesquisar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-[6rem] w-full border"></div>
        <div className="container relative z-10">
          <div className="border-[#BFBFBF] pt-[3.9rem] lg:border-r-[2px]">
            <ScaleAttorneys
              title="Legislação STJD"
              subtitle="Acesse a tabela"
              height="15.6875rem"
              image={BgScalle}
              textbtn="Acessar Legislações"
              href=""
            />
          </div>
        </div>

        <div className="relative bg-[#000] py-[3.87rem] lg:container lg:bg-transparent lg:py-0">
          <div className="border-[#BFBFBF] pt-[6.37rem] lg:border-r-[2px] lg:pb-[7.94rem]">
            <Image
              src={LogoBlack}
              alt="LogoBlack"
              className="mx-auto w-[8.9375rem] lg:w-auto"
            />
          </div>
          <div className="absolute -left-20 -top-[42rem] z-0">
            <Image src={BgFundoMembers} alt="BgFundoMembers" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JurisprudenciaStj
