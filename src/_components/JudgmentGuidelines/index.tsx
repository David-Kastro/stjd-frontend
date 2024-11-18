"use client";
import { ArrowDownRight } from "lucide-react";
import React, { useState } from "react";
import { Calendar } from "../ui/calendar";
import { ptBR } from "date-fns/locale";
import Antiqueta from "/public/images/Antique-Bronze.svg";
import Image from "next/image";

function JudgmentGuidelines() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
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
          <div className="relative h-[28.1875rem] w-full">
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
  );
}

export default JudgmentGuidelines;
