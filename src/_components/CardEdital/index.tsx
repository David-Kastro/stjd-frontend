import React from "react";
import { FileText } from "lucide-react";
import Link from "next/link";

function CardEdital() {
  return (
    <Link href={"/editais"}>
      <div className="max-w-[44.3125rem] w-full bg-[#E1E1E1] hover:bg-[#fff] transition-colors duration-300 ease-in-out px-[1.25rem] py-[0.62rem] rounded-[0.625rem] flex lg:gap-[1.88rem] gap-[1.18rem] items-center">
        <FileText className="text-[#A2A2A2]" />
        <div className="">
          <h1 className="text-[#2E2E2E]  font-bold lg:text-[1.25rem] text-[0.78806rem]">
            EDITAL DE CITAÇÃO E INTIMAÇÃO
          </h1>
          <h2 className=" lg:text-[0.8125rem] text-[0.51225rem] text-[#2E2E2E] font-bold">
            3ª Comissão Disciplinar
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default CardEdital;
