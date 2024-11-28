import React from "react";

import Image, { StaticImageData } from "next/image";
import { Scale } from "lucide-react";

interface CardTopPageProps {
  title: string;
  description: string;
  image: StaticImageData;
  height: string;
}

function CardTopPage({ title, description, image, height }: CardTopPageProps) {
  return (
    <div className="container mt-[5.64rem]">
      <div
        className="max-w-[100.0625rem] mx-auto rounded-[1.375rem] bg-custom-judgment-guidelines relative mb-10"
        style={{ height: height }}
      >
        <div className="absolute top-[13rem] -left-[2px] h-[2rem] w-[5px] rounded-full bg-secondary"></div>
        <div className="flex gap-[0.56rem] px-[2.25rem] py-[2.12rem] items-center">
          <Scale />
          <h1 className="text-[1.25rem] font-bold">
            Superior Tribunal de Justiça Desportiva do Futebol
          </h1>
        </div>
        <hr className="w-full h-[0.125rem] bg-secondary" />
        <div className="pl-[2.25rem] pt-[5.5rem] max-w-[44.125rem]">
          <h1 className="text-[3rem] font-bold tracking-[0.03rem]">{title}</h1>
          <h2 className="mt-[0.81rem] leading-[1.6875rem]">{description}</h2>
        </div>

        <div className="absolute -top-8 -right-36 z-0">
          <Image src={image} alt="Martelo" />
        </div>
      </div>
    </div>
  );
}

export default CardTopPage;
