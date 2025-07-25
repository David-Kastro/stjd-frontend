import CardContact from '@/_components/CardContact'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import { MapPin, Phone, Clock } from 'lucide-react'
import React from 'react'
import BgScalle from '/public/images/bg-card-scale.svg'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import Image from 'next/image'

function Contato() {
  return (
    <div>
      <div className="container mt-[1.13rem] lg:mt-[5.64rem]">
        <div className="lg:border-l-[2px]">
          <div className="mx-auto w-full max-w-[100.0625rem]">
            <hr className="hidden h-[0.125rem] w-full bg-secondary lg:block" />
            <div className="flex w-full flex-col gap-[4.63rem] lg:mt-[3.56rem] lg:flex-row">
              <div>
                <div className="rounded-[1.375rem] bg-[#E1E1E1] pb-[0.63rem] pt-[2rem] lg:rounded-none lg:bg-transparent lg:px-0 lg:pb-0 lg:pt-0">
                  <div className="flex items-center justify-center gap-[0.56rem] lg:justify-start">
                    <MapPin />
                    <p className="text-[1.25rem] font-bold">Endereço:</p>
                  </div>
                  <hr className="mt-[2.25rem] h-[0.125rem] bg-[#C2C2C2] lg:hidden" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.31189722542035!2d-43.18026925523466!3d-22.90455926423271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5de8805c49%3A0x6774f318cc122301!2sR.%20Uruguaiana%2C%2055%20-%2010%C2%BA%20Andar%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020050-094!5e0!3m2!1spt-PT!2sbr!4v1746028200595!5m2!1spt-PT!2sbr"
                    className="mt-[1.19rem] h-[32.0625rem] w-full rounded-[1.375rem] px-[0.5rem] lg:w-[60.5625rem] lg:px-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="rounded-[0.8125rem] bg-[#EFEFEF] py-[0.9rem] pl-[1.19rem] lg:hidden">
                  <p className="text-[0.95769rem] leading-[0.95769rem]">
                    Rua Uruguaiana, 55 / 10º Andar <br /> Centro - Rio de
                    Janeiro - RJ CEP: 20050-094
                  </p>
                </div>
                <div className="mt-[3.19rem]">
                  <div className="flex items-center gap-[0.56rem]">
                    <Clock />
                    <p className="text-[1.25rem] font-bold">Expediente:</p>
                  </div>
                  <p className="ml-[2rem] mt-[0.75rem] text-[0.95769rem] leading-[0.95769rem]">
                    Segunda a sexta, das 9h às 18h
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-center gap-[0.56rem]">
                  <Phone />
                  <p className="text-[1.25rem] font-bold">Contatos:</p>
                </div>
                <div className="mt-[1.19rem] flex flex-col gap-[0.75rem]">
                  <CardContact
                    number="(21) 3035-6200"
                    title="Geral"
                    type="general"
                  />
                  <CardContact
                    number="(21) 3035-6202"
                    title="Pleno"
                    subtitle=" Aline Pereira - pleno@stjd.org.br"
                    type="study"
                  />
                  <CardContact
                    number="(21) 3035-6214"
                    title="Pleno"
                    subtitle=" Manuela Silva - pleno@stjd.org.br"
                    type="study"
                  />
                  <CardContact
                    number="(21) 3035-6205"
                    title="1ª Comissão"
                    subtitle=" André Barbosa - 1cd@stjd.org.br"
                    type="personal"
                  />
                  <CardContact
                    number="(21) 3035-6208"
                    title="2ª Comissão"
                    subtitle="Anna Alves - 2cd@stjd.org.br"
                    type="personal"
                  />
                  <CardContact
                    number="(21) 3035-6206"
                    title="3ª Comissão"
                    subtitle="Julyane Barros - 3cd@stjd.org.br"
                    type="personal"
                  />
                  <CardContact
                    number="(21) 3035-6207"
                    title="4ª Comissão"
                    subtitle="Gabriela Moreira - 4cd@stjd.org.br"
                    type="personal"
                  />
                  <CardContact
                    number="(21) 3035-6205"
                    title="5ª Comissão"
                    subtitle="André Barbosa - 5cd@stjd.org.br"
                    type="personal"
                  />
                  <CardContact
                    number="(21) 3035-6204"
                    title="6ª Comissão"
                    subtitle="Cláudia Mercuri - 6cd@stjd.org.br"
                    type="personal"
                  />
                  <CardContact
                    number="(21) 3035-6209"
                    title="Imprensa"
                    subtitle="Daniela Pinho - comunicacao@stjd.org.br "
                    type="press"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:container">
        <div className="pt-[3.7rem] lg:border-l-[2px] lg:pt-[6.25rem]">
          <ScaleAttorneys
            title="Estatísticas"
            subtitle="Prestação de Contas"
            height="8.125rem"
            image={BgScalle}
            textbtn="Saiba Mais"
            href="/estatisticas"
          />
          <div className="mt-[3.30rem] bg-[#000] py-[3.87rem] lg:container lg:mt-[8rem] lg:bg-transparent lg:py-0">
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

export default Contato
