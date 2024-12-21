"use client";
import Image from "next/image";
import React from "react";
import Logo from "/public/images/logo-stjd.svg";
import BgTop from "/public/images/bg-fundo-menu.png";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface MenuItem {
  name: string;
  pathname?: string;
  paths?: { name: string; pathname: string }[]; // Submenus opcionais
}

const menus: MenuItem[] = [
  {
    name: "Início",
    pathname: "/",
  },
  {
    name: "Institucional",
    paths: [
      {
        name: "Quem Somos",
        pathname: "/institucional/quem-somos",
      },
      {
        name: "Histórico",
        pathname: "/institucional/historico",
      },
    ],
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
  console.log("pathname", pathname);
  function isActive(menu: MenuItem): boolean {
    console.log("first", menu);
    if (menu.paths) {
      console.log(
        "menu.paths",
        menu.paths.some((subMenu) => pathname.includes(subMenu.pathname))
      );
      // Verifica se o pathname da página está dentro de algum submenu
      return menu.paths.some((subMenu) => pathname.includes(subMenu.pathname));
    }
    // Caso não haja submenu, verifica se o pathname corresponde ao item principal
    return menu.pathname ? pathname === menu.pathname : false;
  }
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
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" draggable={false} />
          </Link>
          <form className="max-w-[22.0625rem] z-10 w-full relative">
            <input
              type="text"
              name=""
              id=""
              className="w-full px-[1.25rem] py-[0.88rem] rounded-[9.375rem] text-[#000000] placeholder:text-[#000000]"
              placeholder="Procurar..."
              required
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
      <div className="container mt-[1.86rem]">
        <div className="max-w-[99.3125rem] mx-auto w-full flex justify-between px-[1.64rem]">
          {menus.map((menu, index) => (
            <div key={index}>
              {menu.pathname ? (
                <Link href={menu.pathname}>
                  <div
                    className="pb-[1.86rem] hover:border-b-[0.125rem] hover:border-[#006A9E] group"
                    style={{
                      borderBottom: isActive(menu)
                        ? "0.125rem solid #006A9E"
                        : "",
                      fontWeight: isActive(menu) ? "700" : "",
                    }}
                  >
                    <button className="inline-block py-[0.88rem] px-[1.25rem] text-[#002A3E] group-hover:font-bold text-[0.95769rem] leading-[0.95769rem]">
                      {menu.name}
                    </button>
                  </div>
                </Link>
              ) : (
                <div
                  className="pb-[1.86rem] hover:border-b-[0.125rem] hover:border-[#006A9E] group w-[9.9375rem]"
                  style={{
                    borderBottom: isActive(menu)
                      ? "0.125rem solid #006A9E"
                      : "",
                    fontWeight: isActive(menu) ? "700" : "",
                  }}
                >
                  <div className=" relative z-10">
                    <p className="inline-block py-[0.88rem] px-[1.25rem] text-[#002A3E] text-center group-hover:font-bold text-[0.95769rem] leading-[0.95769rem] w-full ">
                      {menu.name}
                    </p>
                    <div className="absolute top-[4.6rem] w-full hidden group-hover:block">
                      <div className="bg-[#fff] w-[100%] rounded-[0.8125rem] py-[0.94rem] h-[5.625rem]">
                        {menu.paths &&
                          menu.paths.map((path, i) => (
                            <Link
                              key={i}
                              href={path.pathname}
                              className="block px-[1.25rem] py-[0.625rem] hover:bg-[#006A9E] hover:text-[#fff] text-[0.95769rem] leading-[0.95769rem] text-[#000000] "
                              style={{
                                fontWeight: pathname.includes(path.pathname)
                                  ? "700"
                                  : "400",
                              }}
                            >
                              {path.name}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <hr className="h-[0.125rem] bg-[#fff] -mt-[2px]" />
      </div>
    </div>
  );
}

export default MenuTop;
