'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type Presidente = {
  id: number
  nome: string
  periodoInicio: number
  periodoFim?: number
  foto?: string
}

const presidentes: Presidente[] = [
  {
    id: 1,
    nome: 'LUIZ GALLOTTI',
    periodoInicio: 1946,
    foto: '/images/profile.jpg',
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
    nome: 'ALCINO DARDEU DE CARVALHO',
    periodoInicio: 1981,
    foto: '/images/profile.jpg',
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
  { id: 18, nome: 'CAIO CESAR ROCHA', periodoInicio: 2014, periodoFim: 2016 },
  { id: 19, nome: 'RONALDO PIACENTE', periodoInicio: 2016, periodoFim: 2018 },
  {
    id: 20,
    nome: 'PAULO CESAR SALOMÃO FILHO',
    periodoInicio: 2018,
    periodoFim: 2020,
  },
  { id: 21, nome: 'OTAVIO NORONHA', periodoInicio: 2020, periodoFim: 2023 },
  {
    id: 22,
    nome: 'JOSE PERDIZ DE JESUS',
    periodoInicio: 2023,
    periodoFim: 2024,
  },
  {
    id: 23,
    nome: 'LUIS OTAVIO VERÍSSIMO TEIXEIRA',
    periodoInicio: 2024,
    periodoFim: 2026,
    foto: '/images/profile.jpg',
  },
]

// Agrupar presidentes em linhas para o layout desktop
const agruparPresidentesEmLinhas = (
  presidentes: Presidente[],
): Presidente[][] => {
  const linhas: Presidente[][] = []
  let presidentesRestantes = [...presidentes]

  // Definir quantos presidentes por linha (4 parece ser o ideal baseado na imagem)
  const presidentesPorLinha = 4

  while (presidentesRestantes.length > 0) {
    // Pegar os próximos 4 presidentes
    const proximosPresidentes = presidentesRestantes.slice(
      0,
      presidentesPorLinha,
    )
    presidentesRestantes = presidentesRestantes.slice(presidentesPorLinha)

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
            <span className="mr-2 h-6 w-1 bg-yellow-500"></span>
            Presidentes STJD
          </h1>

          <div className="relative pl-16">
            {/* Linha vertical central contínua */}
            <div className="absolute bottom-0 left-16 top-0 w-px bg-border"></div>

            {presidentes.map((presidente) => (
              <div key={presidente.id} className="relative mb-12">
                {/* Pílula de anos à esquerda */}
                <div className="absolute left-[-60px] top-0 z-10">
                  <div className="rounded-full bg-white px-3 py-1 text-sm shadow-sm">
                    {presidente.periodoInicio}
                    {presidente.periodoFim ? ` - ${presidente.periodoFim}` : ''}
                  </div>
                </div>

                {/* Conteúdo do presidente */}
                <div className="ml-8">
                  <div className="flex">
                    {presidente.foto && (
                      <div className="mr-4">
                        <Image
                          src={presidente.foto || '/images/profile.jpg'}
                          alt={presidente.nome}
                          width={60}
                          height={60}
                          className="rounded-sm"
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-xs text-yellow-600">Presidente</p>
                      <h3 className="text-sm font-medium">{presidente.nome}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Marcador final */}
            <div className="absolute bottom-[-20px] left-16 h-4 w-4 translate-x-[-50%] transform rounded-full bg-yellow-500"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-8 py-10">
        <h1 className="mb-12 flex items-center text-2xl font-bold">
          <span className="mr-2 h-8 w-1 bg-yellow-500"></span>
          Presidentes STJD
        </h1>

        <div className="relative">
          {/* Linhas horizontais e conteúdo */}
          {linhasPresidentes.map((linha, linhaIndex) => (
            <div
              key={linhaIndex}
              className={`relative ${linhaIndex > 0 ? 'mt-32' : ''}`}
            >
              {/* Linha horizontal principal */}
              <div className="absolute left-0 right-0 top-[60px] h-px bg-border"></div>

              {/* Conexão vertical para a próxima linha */}
              {linhaIndex < linhasPresidentes.length - 1 && (
                <div
                  className="absolute w-px bg-border"
                  style={{
                    left: linhaIndex % 2 === 1 ? '0px' : 'auto',
                    right: linhaIndex % 2 === 0 ? '0px' : 'auto',
                    top: '60px',
                    height: '160px',
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
                    top: '-100px',
                    height: '160px',
                  }}
                ></div>
              )}

              <div className="grid grid-cols-4 gap-4">
                {linha.map((presidente, index) => (
                  <div
                    key={index}
                    className={`relative ${!presidente ? 'opacity-0' : ''}`}
                  >
                    {presidente && (
                      <>
                        {/* Pílula de anos */}
                        <div className="mb-4 flex justify-center">
                          <div className="inline-block rounded-full bg-white px-3 py-1 text-sm shadow-sm">
                            {presidente.periodoInicio}
                            {presidente.periodoFim
                              ? ` - ${presidente.periodoFim}`
                              : ''}
                          </div>
                        </div>

                        {/* Linha vertical conectora até a linha horizontal */}
                        <div className="absolute left-[50%] top-[30px] h-[30px] w-px translate-x-[-50%] transform bg-border"></div>

                        {/* Conteúdo do presidente */}
                        <div className="mt-[40px]">
                          <div className="flex items-start">
                            {presidente.foto && (
                              <div className="mr-4">
                                <Image
                                  src={presidente.foto || '/images/profile.jpg'}
                                  alt={presidente.nome}
                                  width={70}
                                  height={70}
                                  className="rounded-sm"
                                />
                              </div>
                            )}
                            <div>
                              <p className="text-xs text-yellow-600">
                                Presidente
                              </p>
                              <h3 className="text-sm font-medium">
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

          {/* Marcador final */}
          <div className="relative mt-8">
            <div
              className="absolute h-4 w-4 rounded-full bg-yellow-500"
              style={{
                left: (linhasPresidentes.length - 1) % 2 === 1 ? '0px' : 'auto',
                right:
                  (linhasPresidentes.length - 1) % 2 === 0 ? '0px' : 'auto',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
