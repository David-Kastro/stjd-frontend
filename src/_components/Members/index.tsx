import React from "react";
import { Users } from "lucide-react";
import Arrow from "../Arrow";
import Image from "next/image";
import BgFundoMembers from "/public/images/bg-fundo-members.svg";
const members = [
  {
    cargo: "Presidente",
    nome: "Luís Otávio Veríssimo Teixeira",
    foto: "/images/luis-otavio.svg",
  },
  {
    cargo: "Vice Presidente",
    nome: "Maxwell Borges de Moura Vieira",
    foto: "/images/max-borges.svg",
  },
  {
    cargo: "Vice Presidente Administrativo",
    nome: "Rodrigo Aiache",
    foto: "/images/max-borges.svg",
  },
  {
    cargo: "Diretor da ENAJD",
    nome: "Luiz Felipe Bulus Alves Ferreira",
    foto: "/images/max-borges.svg",
  },
];
function Members() {
  return (
    <section className="container relative">
      <div className="pt-[4.94rem] border-l-[2px] border-[#B0B0B0] pb-[7.81rem] relative z-20">
        <div className="max-w-[80.0625rem] mx-auto bg-[#E1E1E1] rounded-[1.375rem] pt-[3.38rem]">
          <div className="pl-[5rem] flex gap-[1.5rem] items-center">
            <h1 className="flex items-center gap-[0.56rem] text-[1.25rem] font-bold">
              <Users />
              Membros
            </h1>
            <hr className="w-full h-[0.125rem] bg-[#BD995D]" />
          </div>
          <div className="px-[6.31rem] mt-[3.75rem] flex justify-between">
            {members.map((member, index) => (
              <div key={index} className="max-w-[10.4375rem]">
                <div className="w-full">
                  <img src={member.foto} alt={member.nome} className="w-full" />
                  <p className="text-[#BD995D] font-bold mt-[1.5rem] leading-[1.03rem]">
                    {member.cargo}
                  </p>
                  <h2 className="uppercase font-bold text-[#3A3A3C] leading-[1.21rem] mt-[0.31rem]">
                    {member.nome}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end pr-[2.81rem] pb-[3.06rem]">
            <button className="flex gap-[0.56rem] w-fit ml-auto mt-[2.5rem] items-center text-[1.25rem] leading-[1.23775rem] font-bold">
              Veja mais{" "}
              <div className="rotate-180">
                <Arrow />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -left-20 -bottom-[12.4rem]">
        <Image src={BgFundoMembers} alt="BgFundoMembers" />
      </div>
    </section>
  );
}

export default Members;
