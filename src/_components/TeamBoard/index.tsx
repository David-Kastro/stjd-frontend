import Image from "next/image";
import React from "react";
import ScaleAttorneys from "../ScaleAttorneys";
import BgEditais from "/public/images/bg-card-editais.svg";
import LogoBlack from "/public/images/logo-stjd-black.svg";
import BgFundoMembers from "/public/images/bg-fundo-members.svg";
import CustomImage from "../CustomImage";

type TeamMember = {
  id?: number;
  nome: string;
  orgao: string;
  associacao: string;
  cargo: string;
  bio: string;
  avatar: string;
};

type TeamLeader = {
  id?: number;
  nome: string;
  orgao: string;
  associacao: string;
  cargo: string;
  bio: string;
  avatar: string;
};

export type AttorneysTeam = {
  id?: number;
  nome: string;
  leader: TeamLeader;
  equipes: TeamMember[];
};

function TeamBoard({ teamsData }: { teamsData: AttorneysTeam[] }) {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col gap-y-8">
            {teamsData.map((team) => (
              <div
                key={team.nome}
                className="grid grid-cols-12 gap-0 rounded-lg border border-border"
              >
                <div className="relative col-span-4 border-r border-border">
                  <h3 className="absolute left-8 top-7 text-xl font-semibold text-[#000]">
                    Equipe
                  </h3>
                  <div className="flex h-full w-full flex-col items-center justify-center">
                    <div className="mb-6 h-[165px] w-[167px] overflow-hidden rounded-[0.625rem]">
                      {team.leader?.avatar ? (
                        <CustomImage
                          src={team.leader.avatar}
                          alt={`Retrato de ${team.leader.nome}`}
                          width={167}
                          height={165}
                          className="size-full object-cover object-center"
                        />
                      ) : (
                        <Image
                          src={"/images/profile.jpg"}
                          alt={`Retrato de ${team.leader.nome}`}
                          width={167}
                          height={165}
                          className="size-full object-cover object-center"
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
                <div className="col-span-8 px-20 py-12">
                  <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-16 gap-y-4 md:grid-cols-2 md:justify-items-center lg:grid-cols-3">
                    {team.equipes.map((member) => (
                      <div key={member.id}>
                        <div className="mb-6 h-[165px] w-[167px] overflow-hidden rounded-[0.625rem]">
                          {member?.avatar ? (
                            <CustomImage
                              src={member.avatar}
                              alt={`Retrato de ${member.nome}`}
                              width={167}
                              height={165}
                              className="size-full object-cover object-center"
                            />
                          ) : (
                            <Image
                              src={"/images/profile.jpg"}
                              alt={`Retrato de ${member.nome}`}
                              width={167}
                              height={165}
                              className="size-full object-cover object-center"
                            />
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
            title="Escala de Procuradores 2024"
            subtitle="COMPETIÇÕES PROMOVIDAS PELA CBF"
            height="15.6875rem"
            image={BgEditais}
            textbtn="Saiba Mais"
            href=""
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
  );
}

export default TeamBoard;
