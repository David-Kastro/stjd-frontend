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
      className="max-w-[99.4375rem] mx-auto bg-custom-scale py-[1.47rem] px-[1.5rem] flex justify-between items-center relative"
      style={{ height: height }}
    >
      <div className="flex gap-[1.06rem] items-center z-10 relative">
        <Image src={LogoBlack} alt="LogoBlack" />
        <div>
          <h1 className="text-[#005D8A] font-bold text-[2.25rem] tracking-[0.0225rem]">
            {title}
          </h1>
          <h2 className="text-[1.25rem] font-light text-[#000100]">
            {subtitle}
          </h2>
        </div>
      </div>
      <div className="absolute top-0 left-96">
        <Image src={image} alt="BgScalle" draggable={false} />
      </div>
      <Link href={href} className="">
        <Button className="h-[3.75rem] px-[3.12rem] rounded-[4.625rem] bg-[#000100] text-[#FFFFFF] max-w-[15.375rem] w-full py-[0.94rem] text-[1.25rem] font-bold">
          {textbtn}
        </Button>
      </Link>
    </div>
  );
}

export default ScaleAttorneys;
