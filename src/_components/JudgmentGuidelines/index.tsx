"use client";
import { ArrowDownRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Calendar } from "../ui/calendar";
import { ptBR } from "date-fns/locale";
import Antiqueta from "/public/images/Antique-Bronze.svg";
import Image from "next/image";

import { useGlobalContext } from "@/contexts/GlobalContext";
import LiveSessionCard from "../LiveSessionCard";

function JudgmentGuidelines() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { status, setSessao, setStatus, sessao, setLoadingSession } =
    useGlobalContext();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingSession(true);
        // mock API
        const response = await fetch(
          "https://679aabd1747b09cdcccf74be.mockapi.io/api/live/lives"
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }
        const data = await response.json();

        if (data.length > 0) {
          const lastItem = data[data.length - 1];
          const dateApi = new Date(lastItem.released);
          const newDate = new Date();
          if (dateApi.getDate() === newDate.getDate()) {
            setSessao(lastItem);
          } else {
            setSessao({
              isCompleted: true,
              linkYoutube: "",
              released: "",
              title: "",
            });
          }
        }
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      } finally {
        setLoadingSession(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isClient) {
      if (sessao.isCompleted) {
        setStatus("offline");
        return;
      }
      const dataSessao = new Date(sessao.released);
      const agora = new Date();

      if (dataSessao > agora) {
        setStatus("wating");
      } else {
        setStatus("online");
      }
    }
  }, [isClient, sessao.isCompleted, sessao.released, setStatus]);

  return (
    <div className="w-full">
      <div className="w-full lg:h-[34.1875rem] h-[34rem] bg-custom-judgment-guidelines">
        <div className="rounded-[1.375rem] w-full relative">
          <div className="lg:block flex justify-center">
            <div className="lg:w-[5.43606rem] w-[3.89519rem] lg:h-[5.43606rem] h-[3.89519rem] bg-secondary rounded-full flex justify-center items-center absolute lg:-top-[1rem] -top-8 lg:-left-[1.5rem]">
              <ArrowDownRight className="lg:rotate-0 rotate-45" />
            </div>
          </div>
          <div className="pt-[2.56rem] lg:pb-[2.13rem]">
            <h1 className="text-[1.25rem] font-bold leading-[1.3125rem] lg:pl-[6.06rem] lg:text-left text-center">
              Pautas de julgamento
            </h1>
          </div>
          <hr className="w-full h-[0.125rem] bg-secondary lg:block hidden " />
          <div className="flex lg:flex-row flex-col">
            <div className=" lg:max-w-[22.5975rem] w-full lg:pl-[1.31rem] mt-[2.25rem] z-10">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md "
                locale={ptBR}
              />
            </div>
            <div className="relative lg:h-[27.95rem] w-full">
              <div className="absolute lg:left-0 lg:bottom-0 -bottom-32 lg:-right-10 right-0">
                <Image
                  src={Antiqueta}
                  alt="Antiqueta"
                  className="z-0 lg:w-[28.8125rem] w-[7.875rem]"
                  draggable={false}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[4.81rem] relative items-center lg:flex hidden">
        <hr className="w-full h-[0.125rem] bg-secondary" />
        <LiveSessionCard status={status === "online" ? "disabled" : status} />
      </div>
    </div>
  );
}

export default JudgmentGuidelines;
