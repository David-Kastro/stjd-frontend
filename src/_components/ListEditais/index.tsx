import { FileText } from "lucide-react";
import React from "react";
import CardEdital from "../CardEdital";
import Arrow from "../Arrow";

function ListEditais() {
  return (
    <div className="mt-[3.81rem] w-full">
      <h1 className="inline-flex items-center gap-[0.56rem] text-[1.25rem] font-bold">
        <FileText />
        Editais
      </h1>
      <div className="mt-[5rem] pl-[1.69rem] h-[50rem] relative flex items-center justify-center">
        <div className="h-full absolute right-1 z-0 w-[2px] bg-[#BFBFBF]"></div>
        <div className="h-[49.5rem] w-full  pr-[4rem]  flex flex-col gap-[2.6rem] scroll-custom-editais">
          <CardEdital />
          <CardEdital />
          <CardEdital />
          <CardEdital />
          <CardEdital />
          <CardEdital />
          <CardEdital />
          <CardEdital />
          <CardEdital />
          <CardEdital />
          <CardEdital />
          <CardEdital />
          <CardEdital />
          <CardEdital />
          <CardEdital />
        </div>
      </div>
      <div className="pt-[1.63rem] pb-[2.88rem] mr-1  border-r-[2px] border-[#BFBFBF]">
        <button className="flex gap-[0.56rem] w-fit ml-auto   mr-[2.88rem] items-center text-[1.25rem] leading-[1.23775rem] font-bold">
          Veja mais{" "}
          <div className="rotate-180">
            <Arrow />
          </div>
        </button>
      </div>
    </div>
  );
}

export default ListEditais;
