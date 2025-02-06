"use client";
import CardTopPage from "@/_components/CardTopPage";
import React, { useEffect, useState } from "react";
import Pastas from "/public/images/martelo-sumulas.png";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_components/ui/select";
import { Button } from "@/_components/ui/button";
import CardEdital from "@/_components/CardEdital";

import PDFViewer from "@/_components/PDFViewer";
import ScaleAttorneys from "@/_components/ScaleAttorneys";
import BgScalle from "/public/images/bg-card-processo.svg";
import Image from "next/image";
import LogoBlack from "/public/images/logo-stjd-black.svg";
import BgFundoMembers from "/public/images/bg-fundo-members.svg";

export type Edital = {
  id: number;
  titulo: string;
  subTitle: string;
  link: string;
};

const editais = [
  {
    id: 1,
    titulo: "Edital de Citação e Intimação opa",
    subTitle: "3º Comissão Disciplinar",
    link: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    id: 2,
    titulo: "Edital de Citação e Intimação",
    subTitle: "3º Comissão Disciplinar",
    link: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    id: 3,
    titulo: "Edital de Citação e Intimação",
    subTitle: "3º Comissão Disciplinar",
    link: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    id: 4,
    titulo: "Edital de Citação e Intimação",
    subTitle: "3º Comissão Disciplinar",
    link: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    id: 5,
    titulo: "Edital de Citação e Intimação",
    subTitle: "3º Comissão Disciplinar",
    link: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    id: 6,
    titulo: "Edital de Citação e Intimação",
    subTitle: "3º Comissão Disciplinar",
    link: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    id: 5,
    titulo: "Edital de Citação e Intimação",
    subTitle: "3º Comissão Disciplinar",
    link: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    id: 8,
    titulo: "Edital de Citação e Intimação",
    subTitle: "3º Comissão Disciplinar",
    link: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    id: 9,
    titulo: "Edital de Citação e Intimação",
    subTitle: "3º Comissão Disciplinar",
    link: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    id: 10,
    titulo: "Edital de Citação e Intimação",
    subTitle: "3º Comissão Disciplinar",
    link: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
];

function Editais() {
  const [editalActive, setEditalActive] = useState<Edital>({
    id: 0,
    titulo: "",
    subTitle: "",
    link: "",
  });

  useEffect(() => {
    setEditalActive(editais[0]);
  }, []);

  const handleClickEdital = (edital: Edital) => {
    setEditalActive(edital);
  };

  return (
    <div>
      <CardTopPage
        title="Súmulas"
        description="As súmulas do STJD (Superior Tribunal de Justiça Desportiva) são entendimentos ou orientações consolidadas que o tribunal adota para casos específicos no âmbito desportivo, especialmente no futebol. Elas servem como uma espécie de jurisprudência, estabelecendo precedentes que orientam futuras decisões e garantindo maior uniformidade no julgamento de infrações."
        image={Pastas}
        height={"28.875rem"}
        customClassImage="-top-3"
      />
      <div className="container mt-[1.75rem]">
        <div className="max-w-[100.0625rem] mx-auto">
          <div className=" pt-[1.44rem] pb-[1.5rem] bg-[#E1E1E1] rounded-[1.375rem]">
            <div className="flex items-center gap-[0.56rem] px-[2.19rem] ">
              <Search />
              <h1 className="text-[1.25rem] font-bold">
                Encontrar Resultados de Julgamentos
              </h1>
            </div>
            <hr className="my-[1.5rem] bg-[#C2C2C2] h-[0.125rem]" />
            <div className="flex px-[2.19rem] gap-[0.69rem] relative ">
              <Select>
                <SelectTrigger className="w-[15rem] rounded-[0.8125rem] h-[3.75rem]">
                  <SelectValue placeholder="Escolha o Ano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[8.875rem] rounded-[0.8125rem] h-[3.75rem]">
                  <SelectValue placeholder="Mês" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Janeiro">Janeiro</SelectItem>
                  <SelectItem value="Fevereiro">Fevereiro</SelectItem>
                  <SelectItem value="Março">Março</SelectItem>
                  <SelectItem value="Abril">Abril</SelectItem>
                  <SelectItem value="Maio">Maio</SelectItem>
                  <SelectItem value="Junho">Junho</SelectItem>
                  <SelectItem value="Julho">Julho</SelectItem>
                  <SelectItem value="Agosto">Agosto</SelectItem>
                  <SelectItem value="Setembro">Setembro</SelectItem>
                  <SelectItem value="Outubro">Outubro</SelectItem>
                  <SelectItem value="Novembro">Novembro</SelectItem>
                  <SelectItem value="Dezembro">Dezembro</SelectItem>
                </SelectContent>
              </Select>

              <Button className="text-[1.25rem] h-[3.75rem] p rounded-[4.625rem] w-[15.375rem] ml-[4rem]">
                Pesquisar
              </Button>
            </div>
          </div>
          <div className="flex gap-[5rem] ">
            <div className="max-w-[48.4375rem] w-full">
              <div className="lg:mt-[10.94rem] mt-[1.5rem] lg:pl-[1.69rem] lg:h-[58rem] z-10 relative flex items-center justify-center">
                <div className="h-full absolute right-1 z-0 w-[2px] bg-[#BFBFBF] lg:block hidden"></div>
                <div className="lg:h-[58rem] w-full  lg:pr-[4rem] flex flex-col lg:gap-[2.6rem] gap-[1.31rem] scroll-custom-editais lg:overflow-y-auto  relative rounded">
                  {editais.map((edital, index) => (
                    <CardEdital
                      key={index}
                      title={edital.titulo}
                      // description={edital.subTitle}
                      type="function"
                      handleClick={() => handleClickEdital(edital)}
                      isActive={edital.id === editalActive.id}
                    />
                  ))}
                </div>

                {/* <div className="h-[5rem] absolute w-full bottom-0 blur-md bg-gradient-to-t from-[#ccc] to-transparent"></div> */}
              </div>
              <div className="h-[5rem] border-r-[2px] border-[#BFBFBF] mr-[4.2px]"></div>
            </div>
            <div className="max-w-[48.4375rem] w-full mt-[2rem]">
              <PDFViewer editalActive={editalActive} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border"></div>
      <div className="container">
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
        <div className="lg:pb-[7.94rem]  mt-[6.37rem]">
          <Image
            src={LogoBlack}
            alt="LogoBlack"
            className="mx-auto lg:w-auto w-[8.9375rem]"
          />
        </div>
        <div className="absolute -left-20 -top-[48rem] z-0">
          <Image src={BgFundoMembers} alt="BgFundoMembers" />
        </div>
      </div>
    </div>
  );
}

export default Editais;
