import CardTopPage from "@/_components/CardTopPage";
import React from "react";
import Estatua from "/public/images/estatua-processos.svg";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_components/ui/select";
import { Button } from "@/_components/ui/button";
import BgFundoMembers from "/public/images/bg-fundo-members.svg";
import { Label } from "@/_components/ui/label";
import { Input } from "@/_components/ui/input";
import ScaleAttorneys from "@/_components/ScaleAttorneys";
import Image from "next/image";
import LogoBlack from "/public/images/logo-stjd-black.svg";
import BgScalle from "/public/images/bg-card-processo.svg";

function Processos() {
  return (
    <div>
      <div className="mt-[9rem]">
        <CardTopPage
          title="Processos STJD"
          description="Os processos do STJD são ações jurídicas para resolver infrações e disputas no esporte, especialmente no futebol, baseadas no Código Brasileiro de Justiça Desportiva (CBJD) e regulamentos da CBF, com atuação independente."
          image={Estatua}
          height={"28.875rem"}
          customClassImage="-top-48 right-10"
        />
        <div className="container">
          <div className="max-w-[100rem] mx-auto">
            <div className=" pt-[1.44rem] pb-[1.5rem] bg-[#E1E1E1] rounded-[1.375rem] relative z-10">
              <div className="flex items-center gap-[0.56rem] px-[2.19rem] ">
                <Search />
                <h1 className="text-[1.25rem] font-bold">
                  Encontrar Processos
                </h1>
              </div>
              <hr className="my-[1.5rem] bg-[#C2C2C2] h-[0.125rem]" />
              <div className="px-[2.19rem]">
                <div className="flex gap-[0.56rem]">
                  <div className="max-w-[27rem] w-full">
                    <Label className="font-bold text-[0.95769rem]">
                      Partes
                    </Label>
                    <Input
                      placeholder="Nome"
                      className="w-full h-[3.75rem] rounded-[0.8125rem]"
                    />
                  </div>
                  <div className="max-w-[9.1875rem] w-full">
                    <Label className="font-bold text-[0.95769rem]">
                      Dispositivo
                    </Label>
                    <Input
                      placeholder="Nº"
                      className="w-full h-[3.75rem] rounded-[0.8125rem]"
                    />
                  </div>
                  <div className="max-w-[27rem] w-full">
                    <Label className="font-bold text-[0.95769rem]">
                      Infração
                    </Label>
                    <Input
                      placeholder="Nº"
                      className="w-full h-[3.75rem] rounded-[0.8125rem]"
                    />
                  </div>
                </div>
                <div className="flex gap-[0.56rem] mt-[0.5rem]">
                  <div className="max-w-[27rem] w-full">
                    <Input
                      placeholder="Nome"
                      className="w-full h-[3.75rem] rounded-[0.8125rem]"
                    />
                  </div>
                  <div className="max-w-[9.1875rem] w-full">
                    <Select>
                      <SelectTrigger className="w-[9.1875rem] rounded-[0.8125rem] h-[3.75rem]">
                        <SelectValue placeholder="Categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pleno">Pleno</SelectItem>
                        <SelectItem value="Comissão">Comissão</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-[0.56rem] mt-[0.5rem] items-end">
                  <div className="max-w-[27rem] w-full">
                    <Label className="font-bold text-[0.95769rem]">
                      Relator
                    </Label>
                    <Input
                      placeholder="Nome"
                      className="w-full h-[3.75rem] rounded-[0.8125rem]"
                    />
                  </div>

                  <div className="max-w-[27rem] w-full">
                    <Label className="font-bold text-[0.95769rem]">
                      Procurador
                    </Label>
                    <Input
                      placeholder="Nome"
                      className="w-full h-[3.75rem] rounded-[0.8125rem]"
                    />
                  </div>
                  <Button className="text-[1.25rem] h-[3.75rem] p rounded-[4.625rem] w-[15.375rem] ml-[1.75rem]">
                    Pesquisar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border mt-[6rem]"></div>
        <div className="container z-10 relative">
          <div className="lg:border-r-[2px] border-[#BFBFBF] pt-[3.9rem]">
            <ScaleAttorneys
              title="Legislação STJD"
              subtitle="Acesse a tabela"
              height="15.6875rem"
              image={BgScalle}
              textbtn="Acessar Legislações"
              href=""
            />
          </div>
        </div>

        <div className="lg:container lg:bg-transparent bg-[#000] lg:py-0 py-[3.87rem] relative">
          <div className="lg:pb-[7.94rem]  pt-[6.37rem] lg:border-r-[2px] border-[#BFBFBF]">
            <Image
              src={LogoBlack}
              alt="LogoBlack"
              className="mx-auto lg:w-auto w-[8.9375rem]"
            />
          </div>
          <div className="absolute -left-20 -top-[42rem] z-0">
            <Image src={BgFundoMembers} alt="BgFundoMembers" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Processos;
