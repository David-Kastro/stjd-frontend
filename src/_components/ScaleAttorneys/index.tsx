import Image from "next/image";
import React from "react";
import LogoBlack from "/public/images/stjd-black.svg";

import { Button } from "../ui/button";
import Link from "next/link";

interface ScaleAttorneysProps {
  title: string;
  subtitle: string;
  height: string;
  image: string;
  textbtn: string;
  href: string;
}

function ScaleAttorneys({
  title,
  subtitle,
  height,
  image,
  textbtn,
  href,
}: ScaleAttorneysProps) {
  return (
    <div
      className={`lg:max-w-[99.4375rem] mx-auto bg-custom-scale lg:rounded-[1.375rem] rounded-none lg:py-[1.47rem] py-[1.7rem] lg:px-[1.5rem] px-4 flex lg:flex-row flex-col justify-between items-center relative lg:h-[${height}] h-auto relative`}
      // style={{ height: height }}
    >
      <div className="flex lg:gap-[1.06rem] gap-[0.6rem] items-center z-10 relative">
        <Image
          src={LogoBlack}
          alt="LogoBlack"
          className="lg:w-auto w-[2.8235rem]"
        />
        <div>
          <h1 className="text-[#005D8A] font-bold lg:text-[2.25rem] text-[1.28669rem] tracking-[0.0225rem]">
            {title}
          </h1>
          <h2 className="lg:text-[1.25rem] text-[0.71481rem] font-light text-[#000100]">
            {subtitle}
          </h2>
        </div>
      </div>
      <div className="absolute lg:top-0 lg:left-96 lg:block hidden">
        <Image
          src={image}
          alt="BgScalle"
          className="h-full w-full"
          draggable={false}
        />
      </div>
      <Link href={href} className="">
        <Button className="lg:h-[3.75rem] h-[2.81019rem] px-[3.12rem] rounded-[4.625rem] bg-[#000100] text-[#FFFFFF] max-w-[15.375rem]  w-full lg:py-[0.94rem] py-[0.7rem]  font-bold lg:mt-0 mt-[0.86rem]">
          <p className="lg:text-[1.25rem] text-[0.93675rem] lg:leading-normal leading-[0.92756rem]">
            {textbtn}
          </p>
        </Button>
      </Link>
    </div>
  );
}

export default ScaleAttorneys;
