import { FileText } from "lucide-react";
import React from "react";
import CardEdital from "../CardEdital";

import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";

function ListEditais() {
  return (
    <div className="mt-[3.81rem] w-full">
      <h1 className="inline-flex items-center gap-[0.56rem] text-[1.25rem] font-bold">
        <FileText />
        Editais
      </h1>
      <div className="lg:mt-[5rem] mt-[1.5rem] lg:pl-[1.69rem] lg:h-[50rem] relative flex items-center justify-center">
        <div className="h-full absolute right-1 z-0 w-[2px] bg-[#BFBFBF] lg:block hidden"></div>
        <div className="lg:h-[49.5rem] w-full  lg:pr-[4rem]  flex flex-col lg:gap-[2.6rem] gap-[1.31rem] scroll-custom-editais lg:overflow-y-auto z-[1000] relative rounded">
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
      <div className="lg:pt-[2.5rem] pt-[1.5rem] pb-[2.88rem] lg:mr-1  lg:border-r-[2px] border-[#BFBFBF]">
        <Button className="bg-transparent text-black hover:bg-transparent flex gap-[0.56rem] w-fit ml-auto  lg:mr-[2.88rem] items-center lg:text-[1.25rem] text-[0.82363rem] leading-[1.23775rem] font-bold">
          Veja mais{" "}
          <div className="rotate-180">
            <ChevronLeft />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default ListEditais;
