'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '/public/images/logo-stjd.svg'
import BgTop from '/public/images/bg-fundo-menu.png'
import { ChevronRight, Menu, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/_components/ui/sheet'

interface MenuItem {
  name: string
  pathname?: string
  paths?: { name: string; pathname: string }[] // Submenus opcionais
}

const menus: MenuItem[] = [
  {
    name: 'Início',
    pathname: '/',
  },
  {
    name: 'Institucional',
    paths: [
      {
        name: 'Auditores',
        pathname: '/institucional/auditores',
      },
      {
        name: 'Procuradores',
        pathname: '/institucional/procuradores',
      },
      {
        name: 'Histórico',
        pathname: '/institucional/historico',
      },
    ],
  },
  {
    name: 'Processos',
    paths: [
      {
        name: 'Editais',
        pathname: '/processos/editais',
      },
      {
        name: 'Processos',
        pathname: '/processos/processos',
      },
    ],
  },
  {
    name: 'Jurisprudência',
    paths: [
      {
        name: 'Acordãos e Decisões',
        pathname: '/jurisprudencia/acordaos-decisoes',
      },
      {
        name: 'Súmulas',
        pathname: '/jurisprudencia/sumulas',
      },
      {
        name: 'Jurisprudência STJD',
        pathname: '/jurisprudencia/jurisprudencia-stjd',
      },
    ],
  },
  {
    name: 'Leis e Normas',
    paths: [
      {
        name: 'Legislação',
        pathname: '/leis-normas/legislacao',
      },
      {
        name: 'Resoluções',
        pathname: '/leis-normas/resolucoes',
      },
    ],
  },
  {
    name: 'Publicações e Repositório',
    pathname: '/publicacao-repositorio',
  },
  {
    name: 'Comunicação',
    paths: [
      {
        name: 'Notícias',
        pathname: '/comunicacao/noticias',
      },
      {
        name: 'Galerias',
        pathname: '/comunicacao/galerias',
      },
    ],
  },
  {
    name: 'Transparência e Prestação de Contas',
    pathname: '/transparencia-pretacao-contas',
  },
]

function MenuTop() {
  const [open, setOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  function isActive(menu: MenuItem): boolean {
    if (menu.paths) {
      return menu.paths.some((subMenu) => pathname.includes(subMenu.pathname))
    }

    return menu.pathname ? pathname === menu.pathname : false
  }
  return (
    <div className="relative z-10">
      <div className="hidden w-full bg-black lg:block">
        <div className="container flex items-center justify-end gap-[1.25rem] py-[0.78rem] pr-[2.56rem] text-[0.95769rem] leading-[0.95769rem] text-[#fff]">
          <a href="#" className="border-r border-[#fff] pr-[1.25rem]">
            CBF
          </a>
          <a
            href="https://transparencia.stf.jus.br/extensions/corte_aberta/corte_aberta.html"
            className="border-r border-[#fff] pr-[1.25rem]"
          >
            Ouvidoria
          </a>
          <Link href="/contato">contato</Link>
        </div>
      </div>
      <div className="lg:container lg:mt-[1.5rem]">
        <div className="bg-custom-menu relative flex items-center justify-between overflow-hidden px-8 py-[2.9rem] lg:overflow-visible lg:rounded-[1.375rem] lg:py-5">
          <Link href={'/'}>
            <Image
              src={Logo}
              alt="Logo"
              draggable={false}
              className="w-[10.25rem] lg:w-auto"
            />
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="rounded-[0.4375rem] bg-[#BABABA] px-[0.75rem] py-[0.81rem] text-white lg:hidden"
          >
            <Menu />
          </button>
          <form className="relative z-10 hidden w-full max-w-[22.0625rem] lg:block">
            <input
              type="text"
              name=""
              id=""
              className="w-full rounded-[9.375rem] px-[1.25rem] py-[0.88rem] text-[#000000] placeholder:text-[#000000]"
              placeholder="Procurar..."
              required
            />
            <button className="absolute bottom-0 right-[1.5rem] top-0">
              <Search />
            </button>
          </form>
          <div className="absolute -right-5 top-24 z-0 lg:right-0 lg:top-1">
            <Image
              src={BgTop}
              alt="BgTop"
              draggable={false}
              className="w-[15.5625rem] lg:w-auto"
            />
          </div>
        </div>
      </div>
      <nav className="container mt-[1.86rem] hidden lg:block">
        <div className="mx-auto flex w-full max-w-[99.3125rem] justify-between px-[1.64rem]">
          {menus.map((menu, index) => (
            <div key={index}>
              {menu.pathname ? (
                <Link href={menu.pathname}>
                  <div
                    className="group pb-[1.86rem] hover:border-b-[0.125rem] hover:border-[#006A9E]"
                    style={{
                      borderBottom: isActive(menu)
                        ? '0.125rem solid #006A9E'
                        : '',
                      fontWeight: isActive(menu) ? '700' : '',
                    }}
                  >
                    <button className="inline-block px-[1.25rem] py-[0.88rem] text-[0.95769rem] leading-[0.95769rem] text-[#002A3E] group-hover:font-bold">
                      {menu.name}
                    </button>
                  </div>
                </Link>
              ) : (
                <div
                  className="group w-[9.9375rem] pb-[1.86rem] hover:border-b-[0.125rem] hover:border-[#006A9E]"
                  style={{
                    borderBottom: isActive(menu)
                      ? '0.125rem solid #006A9E'
                      : '',
                    fontWeight: isActive(menu) ? '700' : '',
                  }}
                >
                  <div className="relative z-50">
                    <p className="inline-block w-full px-[1.25rem] py-[0.88rem] text-center text-[0.95769rem] leading-[0.95769rem] text-[#002A3E] group-hover:font-bold">
                      {menu.name}
                    </p>
                    <div className="invisible absolute top-[4.9rem] h-0 w-max min-w-[10rem] opacity-0 transition-[opacity,visibility,height] duration-300 group-hover:visible group-hover:block group-hover:h-auto group-hover:opacity-100">
                      <div className="relative z-50 whitespace-nowrap rounded-[0.8125rem] bg-[#fff] px-4 py-[0.94rem]">
                        {menu.paths &&
                          menu.paths.map((path, i) => (
                            <Link
                              key={i}
                              href={path.pathname}
                              className="invisible block h-0 border-b-[0.0625rem] border-[#CFCFCF] border-opacity-50 py-[0.625rem] text-[0.95769rem] leading-[0.95769rem] text-[#000000] opacity-0 transition-[opacity,visibility,height] duration-300 last:border-b-0 hover:!font-bold group-hover:visible group-hover:h-[100%] group-hover:opacity-100"
                              style={{
                                fontWeight: pathname.includes(path.pathname)
                                  ? '700'
                                  : '400',
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
        <hr className="-mt-[2px] h-[0.125rem] bg-[#fff]" />
      </nav>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-5 flex flex-col gap-4">
            {menus.map((menu, index) => (
              <div key={index}>
                {menu.pathname ? (
                  // Se for um link direto
                  <Link
                    href={menu.pathname}
                    className={`block rounded p-2 text-lg font-medium ${
                      pathname === menu.pathname
                        ? 'font-bold text-[#006A9E]'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {menu.name}
                  </Link>
                ) : (
                  // Se for um menu com submenus
                  <div>
                    <button
                      className="flex w-full justify-between rounded p-2 text-lg font-medium hover:bg-gray-100"
                      onClick={() =>
                        setOpenSubmenu(
                          openSubmenu === menu.name ? null : menu.name,
                        )
                      }
                    >
                      {menu.name}
                      <ChevronRight
                        className={`h-5 w-5 transition-transform ${
                          openSubmenu === menu.name ? 'rotate-90' : ''
                        }`}
                      />
                    </button>

                    {openSubmenu === menu.name && (
                      <div className="ml-4 flex flex-col">
                        {menu.paths?.map((submenu, subIndex) => (
                          <Link
                            key={subIndex}
                            href={submenu.pathname}
                            className={`block rounded p-2 text-base font-medium ${
                              pathname === submenu.pathname
                                ? 'font-bold text-[#006A9E]'
                                : 'hover:bg-gray-100'
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
  )
}

export default MenuTop
