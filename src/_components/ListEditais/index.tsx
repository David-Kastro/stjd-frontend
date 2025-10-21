import { FileText, ChevronLeft } from 'lucide-react'
import React from 'react'
import CardEdital from '../CardEdital'

import { Edital, Jurisprudencia } from '@/lib/types'
import Link from 'next/link'
import { dateTimeFormat } from '@/lib/utils'

function ListEditais({ editais }: { editais: Edital[] | Jurisprudencia[] }) {
  return (
    <div className="mt-[3.81rem] w-full">
      <h1 className="inline-flex items-center gap-[0.56rem] text-[1.25rem] font-bold">
        <FileText />
        {editais.length > 0 && 'numero_acordao' in editais[0] ? 'Jurisprudência' : 'Editais'}
      </h1>
      <div className="relative flex items-center justify-center lg:max-h-[50rem] lg:pl-[1.69rem]">
        <div className="absolute right-[4px] z-0 hidden h-full w-[2px] bg-[#BFBFBF] lg:block"></div>

        {/* gradientes efeito fade em cima e embaixo */}
        <div className="absolute right-10 top-0 z-20 hidden h-20 w-full bg-gradient-to-t from-transparent to-[#d5d5d5] md:block"></div>
        <div className="absolute bottom-0 right-10 z-20 hidden h-20 w-full bg-gradient-to-b from-transparent to-[#d5d5d5] md:block"></div>
        {/* ----------------------------------------- */}

        <div className="scroll-custom-editais relative z-10 flex w-full flex-col gap-[1.31rem] rounded py-6 lg:max-h-[49.5rem] lg:gap-6 lg:overflow-y-auto lg:py-16 lg:pr-[4rem]">
          {editais.map((item) => {
            const isJurisprudencia = 'numero_acordao' in item
            return (
              <CardEdital
                key={isJurisprudencia ? `jurisprudencia_${item.id}` : `edital_${(item as Edital).documentId}_${item.id}`}
                title={isJurisprudencia ? (item as Jurisprudencia).numero_acordao || (item as Jurisprudencia).titulo : (item as Edital).titulo}
                subtitle={item.subtitulo}
                description={`Data julgamento: ${dateTimeFormat(isJurisprudencia ? (item as Jurisprudencia).data_julgamento : (item as Edital).data, false)}`}
                type="link"
                path={isJurisprudencia ? `/jurisprudencia/jurisprudencia-stjd?documentId=${item.documentId}` : `/processos/editais?documentId=${(item as Edital).documentId}`}
              />
            )
          })}
        </div>
      </div>
      <div className="border-[#BFBFBF] pb-[2.88rem] pt-[1.5rem] lg:mr-1 lg:border-r-[2px]">
        <Link
          href={editais.length > 0 && 'numero_acordao' in editais[0] ? `/jurisprudencia/jurisprudencia-stjd` : `/processos/editais`}
          className="ml-auto flex w-fit items-center gap-[0.56rem] bg-transparent text-[0.82363rem] font-bold leading-[1.23775rem] text-black hover:bg-transparent lg:mr-[2.88rem] lg:text-[1.25rem]"
        >
          Veja mais{' '}
          <div className="rotate-180">
            <ChevronLeft />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ListEditais
