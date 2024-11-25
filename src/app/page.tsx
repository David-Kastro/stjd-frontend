// import MenuTop from "@/_components/MenuTop";
import JudgmentGuidelines from "@/_components/JudgmentGuidelines";
import LatestNews from "@/_components/LatestNews";
import ListEditais from "@/_components/ListEditais";
import Members from "@/_components/Members";
import ScaleAttorneys from "@/_components/ScaleAttorneys";
import Image from "next/image";
import React from "react";
import LogoBlack from "/public/images/logo-stjd-black.svg";

function Home() {
  return (
    <div>
      <div className="container mt-[5rem] ">
        <div className="flex gap-[3rem] border-l-[2px] border-[#B0B0B0]">
          <LatestNews />
          <div className="w-full">
            <JudgmentGuidelines />
            <ListEditais />
          </div>
        </div>
      </div>
      <hr className="w-fulll h-[0.125rem] bg-[#B0B0B0]" />
      <ScaleAttorneys />
      <Members />
      <div className="container">
        <div className="pb-[7.94rem]  border-l-[2px] border-[#B0B0B0]">
          <Image src={LogoBlack} alt="LogoBlack" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Home;
