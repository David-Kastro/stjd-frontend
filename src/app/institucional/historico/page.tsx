'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, User } from 'lucide-react'

type Presidente = {
  id: number
  nome: string
  periodoInicio: number
  periodoFim?: number
  foto?: string
}

const PRESIDENTES_PER_LINHA = 4 // Número de presidentes por linha para o layout desktop

const presidentes: Presidente[] = [
  {
    id: 1,
    nome: 'LUIZ GALLOTTI',
    periodoInicio: 1946,
    foto: '/images/luiz-gallotti.png',
  },
  { id: 2, nome: 'JOÃO COELHO BRANCO', periodoInicio: 1946, periodoFim: 1947 },
  { id: 3, nome: 'JURANDIR LODI', periodoInicio: 1947, periodoFim: 1954 },
  { id: 4, nome: 'MAX GOMES DE PAIVA', periodoInicio: 1955, periodoFim: 1969 },
  {
    id: 5,
    nome: 'MOACYR FERREIRA DA SILVA',
    periodoInicio: 1969,
    periodoFim: 1978,
  },
  { id: 6, nome: 'ROBERTO MACHADO DE BUSTAMANTE', periodoInicio: 1979 },
  {
    id: 7,
    nome: 'ALCÍRIO DARDEU DE CARVALHO ',
    periodoInicio: 1981,
    foto: '/images/alcirio-dardeu.png',
  },
  {
    id: 8,
    nome: 'CARLOS HENRIQUE DE CARVALHO SARAIVA',
    periodoInicio: 1981,
    periodoFim: 1983,
  },
  { id: 9, nome: 'MOACYR FERREIRA DA SILVA', periodoInicio: 1984 },
  {
    id: 10,
    nome: 'CARLOS HENRIQUE DE CARVALHO SARAIVA',
    periodoInicio: 1985,
    periodoFim: 1986,
  },
  {
    id: 11,
    nome: 'MAURICIO NEY MACHADO MONTEIRO PALMEIRO',
    periodoInicio: 1987,
  },
  { id: 12, nome: 'CARLOS HENRIQUE DE CARVALHO SARAIVA', periodoInicio: 1988 },
  { id: 13, nome: 'JOÃO CARLOS GOMES FERREIRA', periodoInicio: 1989 },
  {
    id: 14,
    nome: 'MOACYR FERREIRA DA SILVA',
    periodoInicio: 1990,
    periodoFim: 1994,
  },
  { id: 15, nome: 'LUIZ ZVEITER', periodoInicio: 1995, periodoFim: 2005 },
  { id: 16, nome: 'RUBENS APPROBATO', periodoInicio: 2005, periodoFim: 2012 },
  { id: 17, nome: 'FLAVIO ZVEITER', periodoInicio: 2012, periodoFim: 2014 },
  { id: 18, nome: 'CAIO CÉSAR ROCHA ', periodoInicio: 2014, periodoFim: 2016 },
  { id: 19, nome: 'RONALDO PIACENTE', periodoInicio: 2016, periodoFim: 2018 },
  {
    id: 20,
    nome: 'PAULO CÉSAR SALOMÃO FILHO',
    periodoInicio: 2018,
    periodoFim: 2020,
  },
  { id: 21, nome: 'OTÁVIO NORONHA', periodoInicio: 2020, periodoFim: 2023 },
  {
    id: 22,
    nome: 'JOSÉ PERDIZ DE JESUS ',
    periodoInicio: 2023,
    periodoFim: 2024,
  },
  {
    id: 23,
    nome: 'LUÍS OTÁVIO VERÍSSIMO TEIXEIRA ',
    periodoInicio: 2024,
    periodoFim: 2026,
    foto: '/images/luis-verissimo.png',
  },
]

// Agrupar presidentes em linhas para o layout desktop
const agruparPresidentesEmLinhas = (
  presidentes: Presidente[],
): Presidente[][] => {
  const linhas: Presidente[][] = []
  let presidentesRestantes = [...presidentes]

  // Definir quantos presidentes por linha (4 parece ser o ideal baseado na imagem)
  const presidentesPorLinha = PRESIDENTES_PER_LINHA

  while (presidentesRestantes.length > 0) {
    // Pegar os próximos 4 presidentes
    const proximosPresidentes = presidentesRestantes.slice(
      0,
      presidentesPorLinha,
    )
    presidentesRestantes = presidentesRestantes.slice(presidentesPorLinha)

    // Se proximos Presidentes for menor que 4, preencher com null
    if (proximosPresidentes.length < presidentesPorLinha) {
      const faltando = presidentesPorLinha - proximosPresidentes.length
      for (let i = 0; i < faltando; i++) {
        proximosPresidentes.push(null as any)
      }
    }

    // Se for uma linha de índice ímpar (segunda, quarta, etc.), inverter a ordem
    if (linhas.length % 2 === 1) {
      proximosPresidentes.reverse()
    }

    // Se a linha não estiver completa, preencher com null
    while (proximosPresidentes.length < presidentesPorLinha) {
      proximosPresidentes.push(null as any)
    }

    linhas.push(proximosPresidentes)
  }

  return linhas
}

export default function Histórico() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const linhasPresidentes = agruparPresidentesEmLinhas(presidentes)

  if (isMobile) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-6">
          <h1 className="mb-8 flex items-center text-xl font-bold">
            <span className="mr-2 h-6 w-1 bg-[#BD995D]"></span>
            Presidentes STJD
          </h1>

          <div className="relative">
            {/* Linha vertical central contínua */}
            <div className="absolute bottom-0 left-[116px] top-0 w-px bg-[#BD995D]"></div>

            {presidentes.map((presidente) => (
              <div key={presidente.id} className="relative mb-12 flex gap-8">
                {/* Pílula de anos à esquerda */}
                <div className="flex w-[100px] min-w-[100px] justify-end">
                  <div className="text-fira flex h-fit w-fit items-center gap-1 rounded-md bg-white px-2 py-1 text-sm font-bold shadow-sm">
                    {presidente.periodoInicio}
                    {presidente.periodoFim && (
                      <>
                        <ArrowRight className="h-4 w-4 text-[#BD995D]" />
                        {presidente.periodoFim}
                      </>
                    )}
                  </div>
                </div>

                {/* Conteúdo do presidente */}
                <div>
                  <div className="flex flex-col gap-4">
                    <div>
                      {presidente.foto ? (
                        <Image
                          src={presidente.foto}
                          alt={presidente.nome}
                          width={90}
                          height={90}
                          className="aspect-square h-16 w-16 rounded-sm object-cover object-top shadow-lg"
                        />
                      ) : (
                        <PresidentePlaceholder nome={presidente.nome} />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#BD995D]">
                        Presidente
                      </p>
                      <h3 className="text-sm font-semibold">
                        {presidente.nome}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-8 py-10">
        <h1 className="mb-24 flex items-center text-2xl font-bold">
          <span className="mr-2 h-8 w-1 bg-[#BD995D]"></span>
          Presidentes STJD
        </h1>

        <div className="relative px-8">
          {/* Linhas horizontais e conteúdo */}
          {linhasPresidentes.map((linha, linhaIndex) => (
            <div
              key={linhaIndex}
              className={`relative ${linhaIndex > 0 ? 'mt-[7.5rem]' : ''}`}
            >
              {/* Linha horizontal principal */}
              <div
                className="absolute bottom-0 h-px bg-border"
                style={{
                  width: `${(linha.filter(Boolean).length / PRESIDENTES_PER_LINHA) * 100}%`,
                  left: linhaIndex % 2 === 0 ? '0px' : 'auto',
                  right: linhaIndex % 2 === 1 ? '0px' : 'auto',
                }}
              ></div>

              {/* Conexão vertical para a próxima linha */}
              {linhaIndex < linhasPresidentes.length - 1 && (
                <div
                  className="absolute w-px bg-border"
                  style={{
                    left: linhaIndex % 2 === 1 ? '0px' : 'auto',
                    right: linhaIndex % 2 === 0 ? '0px' : 'auto',
                    bottom: '-200px',
                    height: '200px',
                  }}
                ></div>
              )}

              {/* Conexão vertical da linha anterior */}
              {linhaIndex > 0 && (
                <div
                  className="absolute w-px bg-border"
                  style={{
                    left: linhaIndex % 2 === 0 ? '0px' : 'auto',
                    right: linhaIndex % 2 === 1 ? '0px' : 'auto',
                    bottom: '0',
                    height: '200px',
                  }}
                ></div>
              )}

              <div className="grid grid-cols-4 gap-4">
                {linha.map((presidente, index) => (
                  <div
                    key={index}
                    className={`relative flex h-[232px] gap-4 ${!presidente ? 'opacity-0' : ''}`}
                  >
                    {presidente && (
                      <>
                        {/* Pílula de anos */}
                        <div className="z-10 mb-4 flex w-24 justify-center">
                          <div className="text-fira -ml-[calc(50%+50%)] flex h-fit items-center gap-1 rounded-md bg-white px-3 py-1 text-base font-bold shadow-sm">
                            {presidente.periodoInicio}
                            {presidente.periodoFim && (
                              <>
                                <ArrowRight className="h-4 w-4 text-[#BD995D]" />
                                {presidente.periodoFim}
                              </>
                            )}
                          </div>
                        </div>

                        {/* Linha vertical conectora até a linha horizontal */}
                        {index !== 0 &&
                          ((linha[index - 1] && linha[index + 1]) ||
                            index === PRESIDENTES_PER_LINHA - 1) && (
                            <div className="absolute bottom-0 h-[200px] w-px transform bg-border">
                              <div className="absolute -bottom-[0.2rem] -left-[0.2rem] h-2 w-2 rounded-full bg-border"></div>
                            </div>
                          )}

                        {presidente.id === presidentes[0].id && (
                          <div className="absolute bottom-0 h-[280px] w-px transform bg-border">
                            <div className="absolute -left-[0.66rem] -top-[0.2rem] h-2 w-6 rounded-full bg-[#BD995D]"></div>
                            <div className="absolute -bottom-[0.2rem] -left-[0.2rem] h-2 w-2 rounded-full bg-border"></div>
                          </div>
                        )}

                        {presidente.id ===
                          presidentes[presidentes.length - 1].id && (
                          <div className="absolute bottom-0 h-[200px] w-px transform bg-border">
                            <div className="absolute -bottom-[0.2rem] -left-[0.66rem] h-2 w-6 rounded-full bg-[#BD995D]"></div>
                          </div>
                        )}

                        {/* Conteúdo do presidente */}
                        <div className="-mt-[32px]">
                          <div className="flex flex-col justify-end gap-4">
                            <div className="mr-4">
                              {presidente.foto ? (
                                <Image
                                  src={presidente.foto}
                                  alt={presidente.nome}
                                  width={120}
                                  height={120}
                                  className="aspect-square h-20 w-20 rounded-sm object-cover object-top shadow-xl"
                                />
                              ) : (
                                <PresidentePlaceholder nome={presidente.nome} />
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-[#BD995D]">
                                Presidente
                              </p>
                              <h3 className="max-w-52 text-base font-bold">
                                {presidente.nome}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const PresidentePlaceholder = ({ nome }: { nome: string }) => {
  // Obter as iniciais do nome
  const iniciais = nome
    .split(' ')
    .map((n) => n.charAt(0))
    .join('')
    .substring(0, 2)

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-[#C4C4C4] shadow-xl lg:h-20 lg:w-20">
      {iniciais ? (
        <span className="text-lg font-semibold text-gray-600 lg:text-xl">
          {iniciais}
        </span>
      ) : (
        <User className="h-6 w-6 text-gray-500 lg:h-8 lg:w-8" />
      )}
    </div>
  )
}
