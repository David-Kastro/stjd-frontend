import React from "react";
import { ArrowDown, Scale } from "lucide-react";
import Image from "next/image";
import Martelo from "/public/images/martelo.webp";
import { Button } from "@/_components/ui/button";
function QuemSomos() {
  return (
    <div className="mt-[5.64rem]">
      <div className="container">
        <div className="max-w-[100.0625rem] h-[33.6875rem] mx-auto rounded-[1.375rem] bg-custom-judgment-guidelines relative mb-10">
          <div className="absolute top-[13rem] -left-[2px] h-[2rem] w-[5px] rounded-full bg-secondary"></div>
          <div className="flex gap-[0.56rem] px-[2.25rem] py-[2.12rem] items-center">
            <Scale />
            <h1 className="text-[1.25rem] font-bold">
              Superior Tribunal de Justiça Desportiva do Futebol
            </h1>
          </div>
          <hr className="w-full h-[0.125rem] bg-secondary" />
          <div className="pl-[2.25rem] pt-[5.5rem] max-w-[44.125rem]">
            <h1 className="text-[3rem] font-bold tracking-[0.03rem]">
              Conheça o STJD
            </h1>
            <h2 className="mt-[0.81rem] leading-[1.6875rem]">
              O Superior Tribunal de Justiça Desportiva do Futebol (STJD) é o
              órgão autônomo, previsto no Código Brasileiro de Justiça
              Desportiva, custeado pela Confederação Brasileira de Futebol
              (CBF), que discute as legalidades do futebol no Brasil e julga os
              acontecimentos do esporte.
            </h2>
          </div>
          <div className="flex absolute -bottom-5 justify-center w-full z-10">
            <a href="#">
              <Button className="rounded-full bg-secondary hover:bg-secondary w-[3.125rem] h-[3.125rem] flex items-center justify-center">
                <ArrowDown className="text-black" />
              </Button>
            </a>
          </div>
          <div className="absolute -top-5 -right-36 z-0">
            <Image src={Martelo} alt="Martelo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuemSomos;
