"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "/public/images/logo-stjd.svg";
import BgTop from "/public/images/bg-fundo-menu.png";
import { ChevronRight, Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/_components/ui/sheet";

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
        name: "Auditores",
        pathname: "/institucional/auditores",
      },
      {
        name: "Procuradores",
        pathname: "/institucional/procuradores",
      },
      {
        name: "Histórico",
        pathname: "/institucional/historico",
      },
    ],
  },
  {
    name: "Processos",
    paths: [
      {
        name: "Editais",
        pathname: "/processos/editais",
      },
      {
        name: "Processos",
        pathname: "/processos/processos",
      },
    ],
  },
  {
    name: "Jurisprudência",
    paths: [
      {
        name: "Acordãos e Decisões",
        pathname: "/jurisprudencia/acordaos-decisoes",
      },
      {
        name: "Súmulas",
        pathname: "/jurisprudencia/sumulas",
      },
      {
        name: "Jurisprudência STJD",
        pathname: "/jurisprudencia/jurisprudencia-stjd",
      },
    ],
  },
  {
    name: "Leis e Normas",
    paths: [
      {
        name: "Legislação",
        pathname: "/leis-normas/legislacao",
      },
      {
        name: "Resoluções",
        pathname: "/leis-normas/resolucoes",
      },
    ],
  },
  {
    name: "Publicações e Repositório",
    pathname: "/publicacao-repositorio",
  },
  {
    name: "Comunicação",
    paths: [
      {
        name: "Notícias",
        pathname: "/comunicacao/noticias",
      },
      {
        name: "Galerias",
        pathname: "/comunicacao/galerias",
      },
    ],
  },
  {
    name: "Transparência e Prestação de Contas",
    pathname: "/transparencia-pretacao-contas",
  },
];

function MenuTop() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  function isActive(menu: MenuItem): boolean {
    if (menu.paths) {
      return menu.paths.some((subMenu) => pathname.includes(subMenu.pathname));
    }

    return menu.pathname ? pathname === menu.pathname : false;
  }
  return (
    <div>
      <div className="w-full bg-black lg:block hidden">
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
      <div className="lg:container lg:mt-[1.5rem]">
        <div className="flex justify-between items-center bg-custom-menu px-8 lg:py-5 py-[2.9rem] lg:rounded-[1.375rem] relative lg:overflow-visible overflow-hidden">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Logo"
              draggable={false}
              className="lg:w-auto w-[10.25rem]"
            />
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white py-[0.81rem] px-[0.75rem] rounded-[0.4375rem] bg-[#BABABA]"
          >
            <Menu />
          </button>
          <form className="max-w-[22.0625rem] z-10 w-full relative lg:block hidden">
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
          <div className="absolute lg:right-0 -right-5 top-24 lg:top-1 z-0 ">
            <Image
              src={BgTop}
              alt="BgTop"
              draggable={false}
              className="lg:w-auto w-[15.5625rem]"
            />
          </div>
        </div>
      </div>
      <nav className="container mt-[1.86rem] lg:block hidden">
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
                    <button className="inline-block  py-[0.88rem] px-[1.25rem] text-[#002A3E] group-hover:font-bold text-[0.95769rem] leading-[0.95769rem]">
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
                  <div className="relative z-10">
                    <p className="inline-block py-[0.88rem] px-[1.25rem] text-[#002A3E] text-center group-hover:font-bold text-[0.95769rem] leading-[0.95769rem] w-full">
                      {menu.name}
                    </p>
                    <div className="absolute top-[4.9rem] invisible opacity-0 h-0 group-hover:block group-hover:opacity-100 group-hover:visible group-hover:h-auto transition-[opacity,visibility,height] duration-300 min-w-[10rem] w-max ">
                      <div className="bg-[#fff] rounded-[0.8125rem] py-[0.94rem] px-4 whitespace-nowrap">
                        {menu.paths &&
                          menu.paths.map((path, i) => (
                            <Link
                              key={i}
                              href={path.pathname}
                              className="block border-b-[0.0625rem] border-[#CFCFCF] border-opacity-50 invisible last:border-b-0 py-[0.625rem] hover:!font-bold text-[0.95769rem] leading-[0.95769rem] text-[#000000] opacity-0 h-0 group-hover:visible group-hover:opacity-100 group-hover:h-[100%] transition-[opacity,visibility,height] duration-300"
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
      </nav>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-5">
            {menus.map((menu, index) => (
              <div key={index}>
                {menu.pathname ? (
                  // Se for um link direto
                  <Link
                    href={menu.pathname}
                    className={`block p-2 text-lg font-medium rounded ${
                      pathname === menu.pathname
                        ? "text-[#006A9E] font-bold"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {menu.name}
                  </Link>
                ) : (
                  // Se for um menu com submenus
                  <div>
                    <button
                      className="flex justify-between w-full p-2 text-lg font-medium hover:bg-gray-100 rounded"
                      onClick={() =>
                        setOpenSubmenu(
                          openSubmenu === menu.name ? null : menu.name
                        )
                      }
                    >
                      {menu.name}
                      <ChevronRight
                        className={`h-5 w-5 transition-transform ${
                          openSubmenu === menu.name ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {openSubmenu === menu.name && (
                      <div className="ml-4 flex flex-col ">
                        {menu.paths?.map((submenu, subIndex) => (
                          <Link
                            key={subIndex}
                            href={submenu.pathname}
                            className={`block p-2 text-base font-medium rounded ${
                              pathname === submenu.pathname
                                ? "text-[#006A9E] font-bold"
                                : "hover:bg-gray-100"
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            {submenu.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MenuTop;
