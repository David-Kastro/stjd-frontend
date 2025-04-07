import Image from 'next/image'
import React from 'react'
import ScaleAttorneys from '../ScaleAttorneys'
import BgEditais from '/public/images/bg-card-editais.svg'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import BgFundoMembers from '/public/images/bg-fundo-members.svg'
import CustomImage from '../CustomImage'
import { Member } from '@/lib/types'
import { PresidentePlaceholder } from '../TeamGrid'

export type AttorneysTeam = {
  id?: number
  nome: string
  leader: Member
  equipes: Member[]
}

function TeamBoard({ teamsData }: { teamsData: AttorneysTeam[] }) {
  return (
    <>
      <section>
        <div>
          <div className="flex flex-col gap-y-8">
            {teamsData.map((team) => (
              <div
                key={team.nome}
                className="grid grid-cols-12 gap-0 rounded-lg border border-border"
              >
                <div className="relative col-span-12 border-b border-border pb-12 lg:col-span-4 lg:border-b-0 lg:border-r lg:pb-0">
                  <h3 className="left-8 top-7 p-4 text-xl font-semibold text-[#000] lg:absolute lg:p-0">
                    Equipe
                  </h3>
                  <div className="flex h-full w-full flex-col items-center justify-center">
                    <div className="mb-6 h-[165px] w-[167px] overflow-hidden rounded-[0.625rem]">
                      {team.leader?.avatar ? (
                        <CustomImage
                          src={team.leader.avatar?.url || ''}
                          alt={`Retrato de ${team.leader.nome}`}
                          width={167}
                          height={165}
                          className="size-full object-cover object-top"
                        />
                      ) : (
                        <Image
                          src={'/images/profile.jpg'}
                          alt={`Retrato de ${team.leader.nome}`}
                          width={167}
                          height={165}
                          className="size-full object-cover object-top"
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-base font-bold text-secondary">
                        {team.leader.cargo}
                      </p>
                      <h4 className="max-w-44 text-lg font-bold uppercase leading-[121%] text-[#3A3A3C]">
                        {team.leader.nome}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 px-4 py-12 lg:col-span-8 lg:px-20">
                  <div className="mx-auto grid max-w-3xl grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 md:justify-items-center lg:grid-cols-3 lg:gap-x-16 lg:gap-y-4">
                    {team.equipes.map((member) => (
                      <div className="w-full" key={member.id}>
                        <div className="mb-4 h-[140px] w-[140px] overflow-hidden rounded-[0.625rem] lg:mb-6 lg:h-[165px] lg:w-[165px]">
                          {member?.avatar ? (
                            <CustomImage
                              src={member.avatar?.url || ''}
                              alt={`Retrato de ${member.nome}`}
                              width={165}
                              height={165}
                              className="size-full object-cover object-top shadow-xl"
                            />
                          ) : (
                            <PresidentePlaceholder nome={member.nome} />
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="max-w-48 text-base font-bold uppercase leading-[121%] text-[#3A3A3C]">
                            {member.nome}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container relative mt-[6.19rem]">
          <ScaleAttorneys
            title="Transparência"
            subtitle="Prestação de Contas"
            height="15.6875rem"
            image={BgEditais}
            textbtn="Saiba Mais"
            href="/transparencia-pretacao-contas"
          />
        </div>
        <div className="container relative -z-[1] pt-[7.81rem]">
          <div className="pb-[7.94rem]">
            <Image src={LogoBlack} alt="LogoBlack" className="mx-auto" />
          </div>
          <div className="absolute -left-20 bottom-0">
            <Image src={BgFundoMembers} alt="BgFundoMembers" />
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamBoard
