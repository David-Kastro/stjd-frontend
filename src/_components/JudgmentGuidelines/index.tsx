"use client";
import { ArrowDownRight } from "lucide-react";
import React, { useState } from "react";
import { Calendar } from "../ui/calendar";
import { ptBR } from "date-fns/locale";
import Antiqueta from "/public/images/Antique-Bronze.svg";
import Image from "next/image";
import { MonitorPlay } from "lucide-react";
import { Fira_Sans } from "next/font/google";
const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function JudgmentGuidelines() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="w-full">
      <div className="w-full h-[34.1875rem] bg-custom-judgment-guidelines">
        <div className="rounded-[1.375rem] w-full relative">
          <div className="w-[5.43606rem] h-[5.43606rem] bg-[#BD995D] rounded-full flex justify-center items-center absolute -top-[1rem] -left-[1.5rem]">
            <ArrowDownRight />
          </div>
          <div className="pt-[2.56rem] pb-[2.13rem]">
            <h1 className="text-[1.25rem] font-bold leading-[1.3125rem] pl-[6.06rem]">
              Pautas de julgamento
            </h1>
          </div>
          <hr className="w-full h-[0.125rem] bg-[#BD995D]" />
          <div className="flex">
            <div className=" max-w-[22.5975rem] w-full pl-[1.31rem] mt-[2.25rem] z-10">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md "
                locale={ptBR}
              />
            </div>
            <div className="relative h-[27.95rem] w-full">
              <div className="absolute left-0 bottom-0 -right-10">
                <Image
                  src={Antiqueta}
                  alt="Antiqueta"
                  className="z-0 w-[28.8125rem]"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[4.81rem] relative flex items-center">
        <hr className="w-full h-[0.125rem] bg-[#BD995D]" />
        <button className="absolute right-0 px-[1.44rem] py-[0.86rem] bg-white rounded-[1.375rem] flex gap-[1.22rem]">
          <div className="p-4 rounded-full bg-[#BD995D]">
            <MonitorPlay className="text-white" />
          </div>
          <div>
            <p
              className={` ${fira.className}  text-[1.00538rem] leading-[2.01075rem] font-bold text-[#474747]`}
            >
              Sessão ao vivo
            </p>
            <p className="text-[#BD995D]  text-[0.86175rem] text-left">
              offline
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default JudgmentGuidelines;
