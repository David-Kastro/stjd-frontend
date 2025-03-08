import CardTranparencia from '@/_components/CardTranparencia'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import { Scale } from 'lucide-react'
import BgScalle from '/public/images/bg-card-scale.svg'
import React from 'react'
import Image from 'next/image'
import LogoBlack from '/public/images/logo-stjd-black.svg'

function Transparencia() {
  const acervos = [
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
    {
      valor: '22.449',
      textContent: 'processos em tramitação.',
    },
  ]

  return (
    <div>
      <div className="container mt-[1.13rem] lg:mt-[5.57rem]">
        <div className="lg:border-l-[2px]">
          <div className="mx-auto flex w-full max-w-[100.82681rem] items-center gap-[2.94rem]">
            <div className="bg-painel-transparencia hidden h-[56.625rem] w-full max-w-[21rem] rounded-[1.375rem] lg:block">
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
            <div className="w-full rounded-[1.375rem] bg-[#E1E1E1] py-[2.94rem] lg:bg-transparent lg:px-0 lg:py-0">
              <div className="flex items-center justify-center gap-[0.56rem] lg:hidden">
                <Scale />
                <p className="text-[1.25rem] font-bold leading-[1.23775rem]">
                  Painéis Estáticos
                </p>
              </div>
              <hr className="mt-[2.12rem] h-[0.125rem] border-[#C2C2C2] bg-[#C2C2C2] lg:hidden" />
              <div className="relative mt-[0.6rem] lg:hidden">
                <div className="">
                  <p className="text-center text-[0.95769rem] text-[#393939]">
                    Informações atualizadas diariamente.
                  </p>
                </div>
              </div>
              <div className="mt-[3.26rem] grid w-full grid-cols-1 gap-x-[1.1rem] gap-y-[1.58rem] px-[2.5rem] lg:mt-0 lg:grid-cols-4">
                {acervos.map((acervo, index) => (
                  <CardTranparencia
                    key={index}
                    valor={acervo.valor}
                    textContent={acervo.textContent}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:container">
        <div className="mx-auto mt-[4rem] w-full max-w-[100.82681rem] lg:mt-0">
          <hr className="mb-[4.31rem] mt-[3.15rem] hidden h-[0.125rem] bg-secondary lg:block"></hr>
          <ScaleAttorneys
            title="Escala de Procuradores 2024"
            subtitle="COMPETIÇÕES PROMOVIDAS PELA CBF"
            height="8.125rem"
            image={BgScalle}
            textbtn="Saiba Mais"
            href=""
          />
          <div className="mt-[3.1rem] bg-[#000] py-[3.87rem] lg:container lg:mt-[8rem] lg:bg-transparent lg:py-0">
            <div className="lg:pb-[7.94rem]">
              <Image
                src={LogoBlack}
                alt="LogoBlack"
                className="mx-auto w-[8.9375rem] lg:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transparencia
