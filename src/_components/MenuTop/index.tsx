import Image from "next/image";
import React from "react";
import Logo from "@/public/images/logo-stjd.svg";
import BgTop from "@/public/images/bg-fundo-menu.png";
import { Search } from "lucide-react";

function MenuTop() {
  return (
    <div className="container mt-[1.5rem]">
      <div className="flex justify-between items-center bg-custom-menu px-8 py-5 rounded-[1.375rem] relative">
        <Image src={Logo} alt="Logo" />
        <form className="max-w-[22.0625rem] z-10 w-full relative">
          <input
            type="text"
            name=""
            id=""
            className="w-full px-[1.25rem] py-[0.88rem] rounded-[9.375rem] text-[#000000] placeholder:text-[#000000]"
            placeholder="Procurar..."
          />
          <button className="absolute right-[1.5rem] top-0 bottom-0">
            <Search />
          </button>
        </form>
        <div className="absolute right-0 top-1 z-0 ">
          <Image src={BgTop} alt="BgTop" />
        </div>
      </div>
    </div>
  );
}

export default MenuTop;
