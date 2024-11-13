"use client";
import Image from "next/image";
import React from "react";
import Logo from "/public/images/logo-stjd.svg";
import BgTop from "/public/images/bg-fundo-menu.png";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menus = [
  {
    name: "Início",
    pathname: "/",
  },
  {
    name: "Quem Somos",
    pathname: "/quem-somos",
  },
  {
    name: "Legislação",
    pathname: "/legislacao",
  },
  {
    name: "Editais",
    pathname: "/editais",
  },
  {
    name: "Resultados",
    pathname: "/resultados",
  },
  {
    name: "Acordãos",
    pathname: "/acordaos",
  },
  {
    name: "Jurisprudência",
    pathname: "/jurisprudencia",
  },
  {
    name: "Resoluções",
    pathname: "/resolucoes",
  },
  {
    name: "Notícias",
    pathname: "/noticias",
  },
  {
    name: "Galerias",
    pathname: "/galerias",
  },
  {
    name: "Contato",
    pathname: "/contato",
  },
];

function MenuTop() {
  const pathname = usePathname();

  return (
    <div>
      <div className="w-full bg-black">
        <div className="container py-[0.78rem] flex justify-end items-center gap-[1.25rem] text-[#fff] text-[0.95769rem] leading-[0.95769rem] pr-[2.56rem]">
          <a href="#" className="border-r border-[#fff] pr-[1.25rem]">
            CBF
          </a>
          <a href="#" className="border-r border-[#fff] pr-[1.25rem]">
            Ouvidoria
          </a>
          <a href="#">Transparência e Prestação de Contas</a>
        </div>
      </div>
      <div className="container mt-[1.5rem]">
        <div className="flex justify-between items-center bg-custom-menu px-8 py-5 rounded-[1.375rem] relative">
          <Image src={Logo} alt="Logo" draggable={false} />
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
            <Image src={BgTop} alt="BgTop" draggable={false} />
          </div>
        </div>
      </div>
      <div className="container mt-[1.86rem] ">
        <div className="max-w-[99.3125rem] mx-auto w-full flex justify-between px-[1.64rem]">
          {menus.map((menu, index) => (
            <div
              key={index}
              className="pb-[1.86rem] hover:border-b-[0.125rem] hover:border-[#006A9E]"
              style={{
                borderBottom:
                  pathname === menu.pathname ? "0.125rem solid #006A9E" : "",
                fontWeight: pathname === menu.pathname ? "700" : "",
              }}
            >
              <Link href={menu.pathname}>
                <button className="inline-block py-[0.88rem] px-[1.25rem] text-[#002A3E] hover:font-bold text-[0.95769rem] leading-[0.95769rem]">
                  {menu.name}
                </button>
              </Link>
            </div>
          ))}
        </div>
        <hr className="h-[0.125rem] bg-[#fff] -mt-[2px]" />
      </div>
    </div>
  );
}

export default MenuTop;
