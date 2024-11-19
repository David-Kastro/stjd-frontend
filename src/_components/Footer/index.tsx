import Image from "next/image";
import Link from "next/link";
import React from "react";
import BgFooter from "/public/images/bg-fundo-footer.svg";
import LogoBlack from "/public/images/logo-stjd-black.svg";
import { Rubik } from "next/font/google";
// If loading a variable font, you don't need to specify the font weight
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

function Footer() {
  return (
    <div>
      <div className="container">
        <div className="pb-[7.94rem]  border-l-[2px] border-[#B0B0B0]">
          <Image src={LogoBlack} alt="LogoBlack" className="mx-auto" />
        </div>
      </div>

      <div className="bg-[#000100]">
        <div className="container relative overflow-hidden">
          <div className="absolute bottom-0 -left-20">
            <Image src={BgFooter} alt="BgFooter" />
          </div>
          <div className="w-full border-l-[2px] border-[#B0B0B0] pt-[4rem] ">
            <div className="max-w-[86.5625rem] w-full mx-auto  relative">
              <div className="flex">
                <div>
                  <Link href={"/"}>
                    <p className="text-[#BD995D] font-bold text-[0.95769rem] leading-[0.95769rem]">
                      Início
                    </p>
                  </Link>
                  <Link href={"/quem-somos"}>
                    <p className="text-[#BD995D] font-bold text-[0.95769rem] leading-[0.95769rem] mt-[1.81rem]">
                      Quem Somos
                    </p>
                  </Link>
                </div>
                <div className="ml-[6.56rem]">
                  <Link href={"/legislacao"}>
                    <p className="text-[#BD995D] font-bold text-[0.95769rem] leading-[0.95769rem]">
                      Legislação
                    </p>
                  </Link>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase mt-[1.3rem] font-[200]">
                    escala de procuradores 2024
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    lei geral do esporte - lei 14597
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    manipulação de competições
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    manual advogados - processo eletrônico
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    escala campeonato brasileiro feminino 2020
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    tabela de emolumentos
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    novo regimento interno do stjd
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    código brasileiro de justiça desportiva
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    cbjd - normas e legislação complementar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    legislação desportiva essencial 2015
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    regulamento antidoping
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    lei nº 9 615/08
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    código de ética stjd
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    regimento procuradoria
                  </p>
                </div>
                <div className="ml-[2.81rem]">
                  <Link href={"/editais"}>
                    <p className="text-[#BD995D] font-bold text-[0.95769rem] leading-[0.95769rem]">
                      Editais
                    </p>
                  </Link>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase mt-[1.3rem] font-[200]">
                    tribunal pleno
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    1 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    2 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    3 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    4 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    5 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    comissão disciplinar feminina
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    comissão disciplinar extraordinária
                  </p>
                  <Link href={"/jurisprudencia"}>
                    <p className="text-[#BD995D] font-bold text-[0.95769rem] leading-[0.95769rem] mt-[3.88rem]">
                      Jurisprudência
                    </p>
                  </Link>
                </div>
                <div className="ml-[4.19rem]">
                  <Link href={"/resultados"}>
                    <p className="text-[#BD995D] font-bold text-[0.95769rem] leading-[0.95769rem]">
                      Resultados
                    </p>
                  </Link>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase mt-[1.3rem] font-[200]">
                    tribunal pleno
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    1 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    2 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    3 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    4 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    5 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    comissão disciplinar feminina
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    comissão disciplinar extraordinária
                  </p>
                  <Link href={"/resolucoes"}>
                    <p className="text-[#BD995D] font-bold text-[0.95769rem] leading-[0.95769rem] mt-[3.88rem]">
                      Resoluções
                    </p>
                  </Link>
                </div>
                <div className="ml-[3.88rem]">
                  <Link href={"/acordaos"}>
                    <p className="text-[#BD995D] font-bold text-[0.95769rem] leading-[0.95769rem]">
                      Acordãos
                    </p>
                  </Link>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase mt-[1.3rem] font-[200]">
                    tribunal pleno
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    1 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    2 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    3 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    4 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    5 comissão disciplinar
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    comissão disciplinar feminina
                  </p>

                  <p className="text-[#fff] text-[0.625rem] tracking-[0.025rem] leading-[1.8125rem] uppercase  font-[200]">
                    comissão disciplinar extraordinária
                  </p>
                  <Link href={"/noticias"}>
                    <p className="text-[#BD995D] font-bold text-[0.95769rem] leading-[0.95769rem] mt-[3.88rem]">
                      Notícias
                    </p>
                  </Link>
                  <Link href={"/galerias"}>
                    <p className="text-[#BD995D] font-bold text-[0.95769rem] leading-[0.95769rem] mt-[1.56rem]">
                      Galerias
                    </p>
                  </Link>
                </div>
                <div className="ml-[1.81rem]">
                  <Link href={"/contato"}>
                    <p className="text-[#BD995D] font-bold text-[0.95769rem] leading-[0.95769rem]">
                      Contato
                    </p>
                  </Link>
                </div>
              </div>
              <hr className="h-[0.0625rem] bg-[#B8B8B8] mt-[2.88rem]" />
              <p
                className={`${rubik.className}  text-center text-[#B8B8B8] text-[0.9375rem] leading-[2.1875rem] mt-[1.63rem] pb-[2rem]`}
              >
                Superior Tribunal de Justiça Deportiva de Futebol © Todos os
                direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
