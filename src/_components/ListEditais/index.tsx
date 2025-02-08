import { FileText, ChevronLeft } from 'lucide-react'
import React from 'react'
import CardEdital from '../CardEdital'

import { Button } from '../ui/button'

function ListEditais() {
  return (
    <div className="mt-[3.81rem] w-full">
      <h1 className="inline-flex items-center gap-[0.56rem] text-[1.25rem] font-bold">
        <FileText />
        Editais
      </h1>
      <div className="relative mt-[1.5rem] flex items-center justify-center lg:mt-[5rem] lg:h-[50rem] lg:pl-[1.69rem]">
        <div className="absolute right-1 z-0 hidden h-full w-[2px] bg-[#BFBFBF] lg:block"></div>
        <div className="scroll-custom-editais relative z-[1000] flex w-full flex-col gap-[1.31rem] rounded lg:h-[49.5rem] lg:gap-[2.6rem] lg:overflow-y-auto lg:pr-[4rem]">
          <CardEdital
            title="EDITAL DE CITAÇÃO E INTIMAÇÃO"
            description="3ª Comissão Disciplinar"
            type="link"
            path="/editais"
          />
          <CardEdital
            title="EDITAL DE CITAÇÃO E INTIMAÇÃO"
            description="3ª Comissão Disciplinar"
            type="link"
          />
          <CardEdital
            title="EDITAL DE CITAÇÃO E INTIMAÇÃO"
            description="3ª Comissão Disciplinar"
            type="link"
          />
          <CardEdital
            title="EDITAL DE CITAÇÃO E INTIMAÇÃO"
            description="3ª Comissão Disciplinar"
            type="link"
          />
          <CardEdital
            title="EDITAL DE CITAÇÃO E INTIMAÇÃO"
            description="3ª Comissão Disciplinar"
            type="link"
          />
          <CardEdital
            title="EDITAL DE CITAÇÃO E INTIMAÇÃO"
            description="3ª Comissão Disciplinar"
            type="link"
          />
          <CardEdital
            title="EDITAL DE CITAÇÃO E INTIMAÇÃO"
            description="3ª Comissão Disciplinar"
            type="link"
          />
          <CardEdital
            title="EDITAL DE CITAÇÃO E INTIMAÇÃO"
            description="3ª Comissão Disciplinar"
            type="link"
          />
          <CardEdital
            title="EDITAL DE CITAÇÃO E INTIMAÇÃO"
            description="3ª Comissão Disciplinar"
            type="link"
          />
          <CardEdital
            title="EDITAL DE CITAÇÃO E INTIMAÇÃO"
            description="3ª Comissão Disciplinar"
            type="link"
          />
          <CardEdital
            title="EDITAL DE CITAÇÃO E INTIMAÇÃO"
            description="3ª Comissão Disciplinar"
            type="link"
          />
          <CardEdital
            title="EDITAL DE CITAÇÃO E INTIMAÇÃO"
            description="3ª Comissão Disciplinar"
            type="link"
          />
          <CardEdital
            title="EDITAL DE CITAÇÃO E INTIMAÇÃO"
            description="3ª Comissão Disciplinar"
            type="link"
          />
        </div>
      </div>
      <div className="border-[#BFBFBF] pb-[2.88rem] pt-[1.5rem] lg:mr-1 lg:border-r-[2px] lg:pt-[2.5rem]">
        <Button className="ml-auto flex w-fit items-center gap-[0.56rem] bg-transparent text-[0.82363rem] font-bold leading-[1.23775rem] text-black hover:bg-transparent lg:mr-[2.88rem] lg:text-[1.25rem]">
          Veja mais{' '}
          <div className="rotate-180">
            <ChevronLeft />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default ListEditais
