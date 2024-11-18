// import MenuTop from "@/_components/MenuTop";
import JudgmentGuidelines from "@/_components/JudgmentGuidelines";
import LatestNews from "@/_components/LatestNews";
import React from "react";

function Home() {
  return (
    <div className="container mt-[5rem] ">
      <div className="flex gap-[3rem] border-l border-[#B0B0B0]">
        <LatestNews />
        <JudgmentGuidelines />
      </div>
    </div>
  );
}

export default Home;
