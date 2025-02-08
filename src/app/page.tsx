// import MenuTop from "@/_components/MenuTop";
import JudgmentGuidelines from "@/_components/JudgmentGuidelines";
import LatestNews from "@/_components/LatestNews";
import ListEditais from "@/_components/ListEditais";
import Members from "@/_components/Members";
import ScaleAttorneys from "@/_components/ScaleAttorneys";
import Image from "next/image";
import React from "react";
import LogoBlack from "/public/images/logo-stjd-black.svg";
import BgScalle from "/public/images/bg-card-scale.svg";

function Home() {
  return (
    <div>
      <div className="container lg:mt-[5rem]">
        <div className="flex lg:flex-row flex-col gap-[3rem] lg:border-l-[2px] border-[#B0B0B0]">
          <LatestNews />
          <div className="w-full">
            <JudgmentGuidelines />
            <ListEditais />
          </div>
        </div>
      </div>
      <hr className="w-fulll h-[0.125rem] bg-[#B0B0B0] lg:block hidden" />
      <div className="lg:container">
        <div className="lg:pt-[4.94rem] lg:border-l-[2px] border-[#B0B0B0]">
          <ScaleAttorneys
            title="Escala de Procuradores 2024"
            subtitle="COMPETIÇÕES PROMOVIDAS PELA CBF"
            height="8.125rem"
            image={BgScalle}
            textbtn="Saiba Mais"
            href=""
          />
        </div>
      </div>
      <Members />
      <div className="lg:container lg:bg-transparent bg-[#000] lg:py-0 py-[3.87rem]">
        <div className="lg:pb-[7.94rem]  lg:border-l-[2px] border-[#B0B0B0]">
          <Image
            src={LogoBlack}
            alt="LogoBlack"
            className="mx-auto lg:w-auto w-[8.9375rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
