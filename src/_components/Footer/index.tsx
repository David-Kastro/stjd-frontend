import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BgFooter from '/public/images/bg-fundo-footer.svg'

import { Rubik } from 'next/font/google'
import { ArrowUp } from 'lucide-react'
import { Button } from '../ui/button'
import fetchApi from '@/lib/strapi'
import { Doc, Edital } from '@/lib/types'

// If loading a variable font, you don't need to specify the font weight
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
})

async function Footer() {
  const [legislacao] = await fetchApi<Doc[]>({
    endpoint: 'legislations',
    query: {
      sort: 'data:desc',
      fields: ['id', 'titulo', 'subtitulo'],
      populate: ['documento'],
      pagination: {
        pageSize: 14,
        page: 1,
      },
    },
  })
  const [editais] = await fetchApi<Edital[]>({
    endpoint: 'notices',
    query: {
      sort: 'data:desc',
      fields: ['id', 'titulo', 'subtitulo', 'tipo', 'data'],
      populate: ['documento'],

      pagination: {
        pageSize: 9,
        page: 1,
      },
    },
  })
  const [decisions] = await fetchApi<Doc[]>({
    endpoint: 'decisions',
    query: {
      sort: 'data:desc',
      fields: ['id', 'titulo', 'subtitulo', 'tipo', 'categoria'],
      populate: ['documento'],

      pagination: {
        pageSize: 8,
        page: 1,
      },
    },
  })

  return (
    <div>
      <div className="bg-[#005D8A]">
        <div className="border-t-[0.0625rem] border-[#B8B8B8] py-[1.7rem] italic lg:hidden">
          <p className="mx-auto max-w-[19.25rem] text-center text-[0.8125rem] text-[#B8B8B8]">
            Superior Tribunal de Justiça Deportiva de Futebol © Todos os
            direitos reservados
          </p>
        </div>
        <div className="container relative hidden overflow-hidden lg:block">
          <div className="absolute -left-20 bottom-0">
            <Image src={BgFooter} alt="BgFooter" />
          </div>
          <div className="w-full pt-[4rem]">
            <div className="relative mx-auto w-full max-w-[86.5625rem]">
              <div className="flex justify-center">
                <div>
                  <Link href={'/'}>
                    <p className="text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Início
                    </p>
                  </Link>
                  <Link href={'/quem-somos'}>
                    <p className="mt-[1.81rem] text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Quem Somos
                    </p>
                  </Link>
                </div>
                <div className="ml-[6.56rem]">
                  <Link href={'/leis-normas/legislacao'}>
                    <p className="text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Legislação
                    </p>
                  </Link>
                  <div className="mt-[1.5rem]">
                    {legislacao.map((leg) => (
                      <Link
                        href={`/leis-normas/legislacao?documentId=${leg.documentId}`}
                        key={leg.id}
                      >
                        <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                          {leg.titulo}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="ml-[2.81rem]">
                  <Link href={'/processos/editais'}>
                    <p className="text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Editais
                    </p>
                  </Link>

                  <div className="mt-[1.5rem]">
                    {editais.map((leg) => (
                      <Link
                        href={`/processos/editais?documentId=${leg.documentId}`}
                        key={leg.id}
                      >
                        <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                          {leg.subtitulo}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <Link href={'/jurisprudencia/jurisprudencia-stjd'}>
                    <p className="mt-[3.88rem] text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Jurisprudência
                    </p>
                  </Link>
                  <Link href={'/leis-normas/resolucoes'}>
                    <p className="mt-5 text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Resoluções
                    </p>
                  </Link>
                </div>

                <div className="ml-[3.88rem]">
                  <Link href={'/jurisprudencia/acordaos-decisoes'}>
                    <p className="text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Acordãos
                    </p>
                  </Link>

                  <div className="mt-[1.5rem]">
                    {decisions.map((leg) => (
                      <Link
                        href={`/jurisprudencia/acordaos-decisoes?documentId=${leg.documentId}`}
                        key={leg.id}
                      >
                        <p className="text-[0.625rem] font-[200] uppercase leading-[1.8125rem] tracking-[0.025rem] text-[#fff]">
                          {leg.subtitulo}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <Link href={'/comunicacao/noticias'}>
                    <p className="mt-[3.88rem] text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Notícias
                    </p>
                  </Link>
                  <Link href={'/comunicacao/galerias'}>
                    <p className="mt-[1.56rem] text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Galerias
                    </p>
                  </Link>
                </div>
                <div className="ml-[1.81rem]">
                  <Link href={'/contato'}>
                    <p className="text-[0.95769rem] font-bold leading-[0.95769rem] text-secondary">
                      Contato
                    </p>
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-36 right-0 flex flex-col items-center gap-[0.72rem]">
                <a href="#">
                  <Button className="flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-full bg-secondary hover:bg-secondary">
                    <ArrowUp className="text-black" />
                  </Button>
                </a>
                <p className="text-[0.625rem] leading-[0.95769rem] text-white">
                  Voltar ao Topo
                </p>
              </div>
              <hr className="mt-[2.88rem] h-[0.0625rem] bg-[#B8B8B8]" />
              <p
                className={`${rubik.className} mt-[1.63rem] pb-[2rem] text-center text-[0.9375rem] leading-[2.1875rem] text-[#B8B8B8]`}
              >
                Superior Tribunal de Justiça Deportiva de Futebol © Todos os
                direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
