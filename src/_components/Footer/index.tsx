import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BgFooter from '/public/images/bg-fundo-footer.svg'

import { Rubik } from 'next/font/google'
import { ArrowUp } from 'lucide-react'
import { Button } from '../ui/button'

// If loading a variable font, you don't need to specify the font weight
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
})

function Footer() {
  return (
    <div>
      <div className="bg-[#005D8A]">
        <div className="border-t-[0.0625rem] border-[#B8B8B8] py-[1.7rem] italic lg:hidden">
          <p className="mx-auto max-w-[19.25rem] text-center text-[0.8125rem] text-[#B8B8B8]">
            Superior Tribunal de Justiça Deportiva de Futebol © Todos os
            direitos reservados
          </p>
        </div>
        <div className="container relative hidden overflow-hidden lg:block">
          <div className="absolute -left-20 bottom-0">
            <Image src={BgFooter} alt="BgFooter" />
          </div>
          <div className="w-full pt-[4rem]">
            <div className="relative mx-auto w-full max-w-[86.5625rem]">
              <div className="flex">
                <div>
                  <Link href={'/'}>
                    <p className="text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Início
                    </p>
                  </Link>
                  <Link href={'/quem-somos'}>
                    <p className="mt-[1.81rem] text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Quem Somos
                    </p>
                  </Link>
                </div>
                <div className="ml-[6.56rem]">
                  <Link href={'/leis-normas/legislacao'}>
                    <p className="text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Legislação
                    </p>
                  </Link>

                  <p className="mt-[1.3rem] text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    escala de procuradores 2024
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    lei geral do esporte - lei 14597
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    manipulação de competições
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    manual advogados - processo eletrônico
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    escala campeonato brasileiro feminino 2020
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    tabela de emolumentos
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    novo regimento interno do stjd
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    código brasileiro de justiça desportiva
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    cbjd - normas e legislação complementar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    legislação desportiva essencial 2015
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    regulamento antidoping
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    lei nº 9 615/08
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    código de ética stjd
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    regimento procuradoria
                  </p>
                </div>
                <div className="ml-[2.81rem]">
                  <Link href={'/processos/editais'}>
                    <p className="text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Editais
                    </p>
                  </Link>

                  <p className="mt-[1.3rem] text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    tribunal pleno
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    1 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    2 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    3 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    4 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    5 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    comissão disciplinar feminina
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    comissão disciplinar extraordinária
                  </p>
                  <Link href={'/jurisprudencia/jurisprudencia-stjd'}>
                    <p className="mt-[3.88rem] text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Jurisprudência
                    </p>
                  </Link>
                </div>
                <div className="ml-[4.19rem]">
                  <Link href={'/leis-normas/resolucoes'}>
                    <p className="text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Resultados
                    </p>
                  </Link>

                  <p className="mt-[1.3rem] text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    tribunal pleno
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    1 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    2 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    3 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    4 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    5 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    comissão disciplinar feminina
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    comissão disciplinar extraordinária
                  </p>
                  <Link href={'/resolucoes'}>
                    <p className="mt-[3.88rem] text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Resoluções
                    </p>
                  </Link>
                </div>
                <div className="ml-[3.88rem]">
                  <Link href={'/jurisprudencia/acordaos-decisoes'}>
                    <p className="text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Acordãos
                    </p>
                  </Link>

                  <p className="mt-[1.3rem] text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    tribunal pleno
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    1 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    2 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    3 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    4 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    5 comissão disciplinar
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    comissão disciplinar feminina
                  </p>

                  <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                    comissão disciplinar extraordinária
                  </p>
                  <Link href={'/comunicacao/noticias'}>
                    <p className="mt-[3.88rem] text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Notícias
                    </p>
                  </Link>
                  <Link href={'/comunicacao/galerias'}>
                    <p className="mt-[1.56rem] text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Galerias
                    </p>
                  </Link>
                </div>
                <div className="ml-[1.81rem]">
                  <Link href={'/contato'}>
                    <p className="text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Contato
                    </p>
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-36 right-0 flex flex-col items-center gap-[0.72rem]">
                <a href="#">
                  <Button className="flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-full bg-secondary hover:bg-secondary">
                    <ArrowUp className="text-black" />
                  </Button>
                </a>
                <p className="text-[0.625rem] leading-[0.95769rem] text-white">
                  Voltar ao Topo
                </p>
              </div>
              <hr className="mt-[2.88rem] h-[0.0625rem] bg-[#B8B8B8]" />
              <p
                className={`${rubik.className} mt-[1.63rem] pb-[2rem] text-center text-[0.9375rem] leading-[2.1875rem] text-[#B8B8B8]`}
              >
                Superior Tribunal de Justiça Deportiva de Futebol © Todos os
                direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
