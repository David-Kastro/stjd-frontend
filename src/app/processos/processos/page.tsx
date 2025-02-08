import CardTopPage from '@/_components/CardTopPage'
import React from 'react'
import Estatua from '/public/images/estatua-processos.svg'
import { Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/_components/ui/select'
import { Button } from '@/_components/ui/button'
import BgFundoMembers from '/public/images/bg-fundo-members.svg'
import { Label } from '@/_components/ui/label'
import { Input } from '@/_components/ui/input'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import Image from 'next/image'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import BgScalle from '/public/images/bg-card-processo.svg'

function Processos() {
  return (
    <div>
      <div className="mt-[9rem]">
        <CardTopPage
          title="Processos STJD"
          description="Os processos do STJD são ações jurídicas para resolver infrações e disputas no esporte, especialmente no futebol, baseadas no Código Brasileiro de Justiça Desportiva (CBJD) e regulamentos da CBF, com atuação independente."
          image={Estatua}
          height={'28.875rem'}
          customClassImage="-top-48 right-10"
        />
        <div className="container">
          <div className="mx-auto max-w-[100rem]">
            <div className="relative z-10 rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
              <div className="flex items-center gap-[0.56rem] px-[2.19rem]">
                <Search />
                <h1 className="text-[1.25rem] font-bold">
                  Encontrar Processos
                </h1>
              </div>
              <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
              <div className="px-[2.19rem]">
                <div className="flex gap-[0.56rem]">
                  <div className="w-full max-w-[27rem]">
                    <Label className="text-[0.95769rem] font-bold">
                      Partes
                    </Label>
                    <Input
                      placeholder="Nome"
                      className="h-[3.75rem] w-full rounded-[0.8125rem]"
                    />
                  </div>
                  <div className="w-full max-w-[9.1875rem]">
                    <Label className="text-[0.95769rem] font-bold">
                      Dispositivo
                    </Label>
                    <Input
                      placeholder="Nº"
                      className="h-[3.75rem] w-full rounded-[0.8125rem]"
                    />
                  </div>
                  <div className="w-full max-w-[27rem]">
                    <Label className="text-[0.95769rem] font-bold">
                      Infração
                    </Label>
                    <Input
                      placeholder="Nº"
                      className="h-[3.75rem] w-full rounded-[0.8125rem]"
                    />
                  </div>
                </div>
                <div className="mt-[0.5rem] flex gap-[0.56rem]">
                  <div className="w-full max-w-[27rem]">
                    <Input
                      placeholder="Nome"
                      className="h-[3.75rem] w-full rounded-[0.8125rem]"
                    />
                  </div>
                  <div className="w-full max-w-[9.1875rem]">
                    <Select>
                      <SelectTrigger className="h-[3.75rem] w-[9.1875rem] rounded-[0.8125rem]">
                        <SelectValue placeholder="Categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pleno">Pleno</SelectItem>
                        <SelectItem value="Comissão">Comissão</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-[0.5rem] flex items-end gap-[0.56rem]">
                  <div className="w-full max-w-[27rem]">
                    <Label className="text-[0.95769rem] font-bold">
                      Relator
                    </Label>
                    <Input
                      placeholder="Nome"
                      className="h-[3.75rem] w-full rounded-[0.8125rem]"
                    />
                  </div>

                  <div className="w-full max-w-[27rem]">
                    <Label className="text-[0.95769rem] font-bold">
                      Procurador
                    </Label>
                    <Input
                      placeholder="Nome"
                      className="h-[3.75rem] w-full rounded-[0.8125rem]"
                    />
                  </div>
                  <Button className="p ml-[1.75rem] h-[3.75rem] w-[15.375rem] rounded-[4.625rem] text-[1.25rem]">
                    Pesquisar
                  </Button>
                </div>
              </div>
            </div>
          </div>
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

export default Processos
