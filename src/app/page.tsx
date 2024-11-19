// import MenuTop from "@/_components/MenuTop";
import JudgmentGuidelines from "@/_components/JudgmentGuidelines";
import LatestNews from "@/_components/LatestNews";
import ListEditais from "@/_components/ListEditais";
import Members from "@/_components/Members";
import ScaleAttorneys from "@/_components/ScaleAttorneys";
import React from "react";

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
    </div>
  );
}

export default Home;
