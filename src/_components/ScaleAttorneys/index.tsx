import Image from "next/image";
import React from "react";
import LogoBlack from "/public/images/stjd-black.svg";
import BgScalle from "/public/images/bg-card-scale.svg";
import { Button } from "../ui/button";
function ScaleAttorneys() {
  return (
    <section className="container">
      <div className="pt-[4.87rem] border-l-[2px] border-[#B0B0B0]">
        <div className="max-w-[99.4375rem] mx-auto bg-custom-scale py-[1.47rem] px-[1.5rem] flex justify-between items-center relative">
          <div className="flex gap-[1.06rem] items-center z-10 relative">
            <Image src={LogoBlack} alt="LogoBlack" />
            <div>
              <h1 className="text-[#005D8A] font-bold text-[2.25rem] tracking-[0.0225rem]">
                Escala de Procuradores 2024{" "}
              </h1>
              <h2 className="text-[1.25rem] font-light text-[#000100]">
                COMPETIÇÕES PROMOVIDAS PELA CBF
              </h2>
            </div>
          </div>
          <div className="absolute top-0 left-96">
            <Image src={BgScalle} alt="BgScalle" draggable={false} />
          </div>
          <Button className="h-[3.75rem] rounded-[4.625rem] bg-[#000100] text-[#FFFFFF] max-w-[15.375rem] w-full py-[0.94rem] text-[1.25rem] font-bold">
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ScaleAttorneys;
