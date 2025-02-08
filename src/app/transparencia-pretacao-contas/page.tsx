import { Scale } from 'lucide-react'
import React from 'react'

function Transparencia() {
  return (
    <div className="container mt-[5.57rem] border-l">
      <div className="mx-auto w-full max-w-[100.82681rem]">
        <div className="bg-painel-transparencia h-[56.625rem] w-full max-w-[21rem] rounded-[1.375rem]">
          <div className="flex items-center gap-[0.56rem] pl-[2.19rem] pt-[2rem]">
            <Scale />
            <p className="text-[1.25rem] font-bold leading-[1.23775rem]">
              Painéis Estáticos
            </p>
          </div>
          <hr className="mt-[2.12rem] h-[0.125rem] border-[#BD995D] bg-[#BD995D]" />
          <div className="relative mt-[3.43rem]">
            <div className="absolute -left-[2px] h-[1.7925rem] w-[5px] rounded-full bg-[#BD995D]"></div>
            <div className="m pl-[1.72rem]">
              <p className="text-[0.95769rem] text-[#393939]">
                Informações atualizadas diariamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transparencia
