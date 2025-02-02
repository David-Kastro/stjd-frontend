"use client";
import { MonitorPlay } from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";
import { Fira_Sans } from "next/font/google";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { useGlobalContext } from "@/contexts/GlobalContext";

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface Props {
  status: "offline" | "online" | "wating" | "disabled";
}

function LiveSessionCard({ status }: Props) {
  const { setStatus, sessao } = useGlobalContext();
  const [releaseDate, setReleaseDate] = useState<Date | null>(null);

  useEffect(() => {
    if (sessao?.released) {
      const date = new Date(sessao.released);
      if (!isNaN(date.getTime())) {
        setReleaseDate(date);
      } else {
        console.error("Data inválida:", sessao.released);
      }
    }
  }, [sessao?.released]);

  const onComplete = useCallback(() => {
    if (status !== "online") {
      setStatus("online");
    }
  }, [status, setStatus]);

  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <span>Ao vivo em: 00:00:00</span>;
    } else {
      return (
        <span>
          Ao vivo em: {String(hours).padStart(2, "0")}:
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      );
    }
  };

  return (
    <div
      className="absolute right-0 lg:px-[1.44rem] px-[0.96rem] lg:py-[0.86rem] py-[0.57rem] bg-white rounded-[1.375rem] flex gap-[1.22rem]"
      style={status === "disabled" ? { display: "none" } : {}}
    >
      <div
        className={`lg:p-4 p-[0.6rem] rounded-full  border-[3.447px] flex justify-center items-center ${
          status === "offline" && "bg-secondary border-[#E8E8F6]"
        } ${status === "online" && "bg-[#D23C3C] border-[#E8E8F6]"} ${
          status === "wating" && "bg-[#DEDEDE] border-[#D23C3C]"
        } `}
      >
        <MonitorPlay
          className={`lg:w-auto lg:h-auto w-[1rem] h-[1rem] ${
            status === "wating" ? "text-[#474747]" : ""
          }text-white`}
        />
      </div>
      <div>
        <p
          className={` ${fira.className}  lg:text-[1.00538rem] text-[0.67031rem] lg:leading-[2.01075rem] leading-[1.34063rem] text-left font-bold text-[#474747]`}
        >
          Sessão ao vivo
        </p>
        <p className="text-secondary  lg:text-[0.86175rem] text-[0.57456rem] text-left lg:leading-normal leading-[1rem]">
          {" "}
          {status === "offline" && "offline"}
          {status === "online" && "online"}
          {status === "wating" && releaseDate && (
            <Countdown
              date={releaseDate}
              renderer={renderer}
              onComplete={onComplete}
            />
          )}
        </p>
      </div>
    </div>
  );
}

export default LiveSessionCard;
