import React from 'react'

interface Props {
  label: string
  valor: string
  textContent: string
}

function CardTranparencia({ label, valor, textContent }: Props) {
  return (
    <div className="shadow-lg lg:shadow-none">
      <div className="clip-path-custom flex h-[11.42394rem] w-full items-center rounded-[1rem] bg-[#E3E3E3]">
        <div className="ml-[0.75rem] h-[9.875rem] w-[6.26px] bg-[#CBCBCB]"></div>
        <div className="pl-[2.29rem]">
          <p className="text-[0.8125rem] font-bold leading-[0.875rem]">
            {label}
          </p>
          <p className="text-[2rem] font-extrabold leading-[2.94838rem] text-[#A4A4A4]">
            {valor}
          </p>
          <p className="text-[0.625rem] leading-[0.875rem] text-secondary">
            {textContent}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardTranparencia
