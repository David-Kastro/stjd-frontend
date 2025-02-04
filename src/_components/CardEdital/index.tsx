"use client";
import React from "react";
import { FileText } from "lucide-react";
import Link from "next/link";

interface CardEditalProps {
  title: string;
  description: string;
  type: "link" | "function";
  path?: string;
  handleClick?: () => void;
  isActive?: boolean;
}

function CardEdital({
  title,
  description,
  type,
  path,
  handleClick,
  isActive,
}: CardEditalProps) {
  if (type === "link") {
    return (
      <Link href={path ? path : ""}>
        <div
          className={`max-w-[44.3125rem] w-full bg-[#E1E1E1] hover:bg-[#fff] transition-colors duration-300 ease-in-out px-[1.25rem] py-[0.62rem] rounded-[0.625rem] flex lg:gap-[1.88rem] gap-[1.18rem] items-center `}
        >
          <FileText className="text-[#A2A2A2]" />
          <div className="">
            <h1 className="text-[#2E2E2E]  font-bold lg:text-[1.25rem] text-[0.78806rem]">
              {title}
            </h1>
            <h2 className=" lg:text-[0.8125rem] text-[0.51225rem] text-[#2E2E2E] font-bold">
              {description}
            </h2>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <button onClick={handleClick}>
      <div
        className={`max-w-[44.3125rem] w-full bg-[#E1E1E1] hover:bg-[#fff] transition-colors duration-300 ease-in-out px-[1.25rem] py-[0.62rem] rounded-[0.625rem] flex lg:gap-[1.88rem] gap-[1.18rem] items-center ${
          isActive && "bg-[#fff] border-[2px] border-[#BD995D]"
        }`}
      >
        <FileText className="text-[#A2A2A2]" />
        <div className="">
          <h1 className="text-[#2E2E2E]  font-bold lg:text-[1.25rem] text-[0.78806rem]">
            {title}
          </h1>
          <h2 className=" lg:text-[0.8125rem] text-[0.51225rem] text-[#2E2E2E] font-bold text-left">
            {description}
          </h2>
        </div>
      </div>
    </button>
  );
}

export default CardEdital;
