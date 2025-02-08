"use client";
import React, { useState } from "react";

import CardTopPage from "@/_components/CardTopPage";
import BalancaJustica from "/public/images/balanca-justica.webp";
import CardLegislacao from "@/_components/CardLegislacao";
import ScaleAttorneys from "@/_components/ScaleAttorneys";
import BgEditais from "/public/images/bg-card-editais.svg";
import Image from "next/image";
import LogoBlack from "/public/images/logo-stjd-black.svg";
import BgFundoMembers from "/public/images/bg-fundo-members.svg";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/_components/ui/dialog";
import { Button } from "@/_components/ui/button";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_components/ui/select";

interface legislacaoType {
  title: string;
  subtitle: string;
  pdf: string;
}

const legislacoes = [
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://conteudo.cbf.com.br/cdn/202409/20240911155731_689.pdf",
  },
];

function Legislacao() {
  const [openDialog, setOpenDialog] = useState(false);
  const [legislacaoActive, setLegislacaoActive] = useState<legislacaoType>(
    {} as legislacaoType
  );

  const handleOpenDialog = (legislacao: legislacaoType) => {
    setLegislacaoActive(legislacao);
    setOpenDialog(true);
  };

  return (
    <div className="mt-[8.4rem]">
      <CardTopPage
        title="Legislação STJD"
        description="A parte de legislação do STJD define e interpreta as normas do esporte no Brasil, focando na justiça e integridade das competições. Baseada no CBJD, essa área regula e aplica punições a infrações esportivas, promovendo julgamentos imparciais e com critérios legais."
        image={BalancaJustica}
        height={"28.875rem"}
        customClassImage="!-top-28 "
      />
      <div className="container">
        <div className="max-w-[100.0625rem] mx-auto pt-[1.44rem] pb-[1.5rem] bg-[#E1E1E1] rounded-[1.375rem]">
          <div className="flex items-center gap-[0.56rem] px-[2.19rem] ">
            <Search />
            <h1 className="text-[1.25rem] font-bold">
              Encontrar Resultados de Julgamentos
            </h1>
          </div>
          <hr className="my-[1.5rem] bg-[#C2C2C2] h-[0.125rem]" />
          <div className="flex px-[2.19rem] gap-[0.69rem] relative ">
            <Select>
              <SelectTrigger className="w-[9.1875rem] rounded-[0.8125rem] h-[3.75rem]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Acordãos">Acordãos</SelectItem>
                <SelectItem value="Decisões">Decisões</SelectItem>
              </SelectContent>
            </Select>
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
            <Select>
              <SelectTrigger className="w-[14.5625rem] rounded-[0.8125rem] h-[3.75rem]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Comissão Disciplinar">
                  Comissão Disciplinar
                </SelectItem>
                <SelectItem value="Tribunal Pleno">Tribunal Pleno</SelectItem>
              </SelectContent>
            </Select>
            <Button className="text-[1.25rem] h-[3.75rem] p rounded-[4.625rem] w-[15.375rem] ml-[4rem]">
              Pesquisar
            </Button>
          </div>
        </div>
      </div>
      <div className="container mt-[15rem] relative z-10">
        <div className="max-w-[90.99738rem] mx-auto flex gap-x-[3.93rem] gap-y-[2.56rem] flex-wrap justify-center">
          {legislacoes.map((legislacao, index) => (
            <button key={index} onClick={() => handleOpenDialog(legislacao)}>
              <CardLegislacao
                title={legislacao.title}
                subtitle={legislacao.subtitle}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="container mt-[6.19rem] z-10 relative">
        <div className="border-r-[2px] border-[#B0B0B0]">
          <ScaleAttorneys
            title="Editais de Julgamentos"
            subtitle="Acesse a tabela de Editais"
            height="15.6875rem"
            image={BgEditais}
            textbtn="Acessar  Editais"
            href=""
          />
        </div>
      </div>

      <div className="container  relative">
        <div className="border-r-[2px] border-[#B0B0B0] pt-[7.81rem]">
          <div className="pb-[7.94rem]">
            <Image src={LogoBlack} alt="LogoBlack" className="mx-auto" />
          </div>
          <div className="absolute -left-20 bottom-0">
            <Image src={BgFundoMembers} alt="BgFundoMembers" />
          </div>
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="py-[3.19rem] bg-[#E1E1E1] max-h-[90vh]">
          <DialogHeader className="flex flex-row items-center gap-[1.37rem] ">
            <DialogTitle className="text-[#2E2E2E] text-[1.64356rem] max-w-[23.75rem] w-full">
              Escala de Procuradores <span className="font-light">2024</span>{" "}
            </DialogTitle>
            <div className="relative w-full">
              <p className="text-end text-[0.79181rem] absolute right-0 -top-5 text-[#2E2E2E] font-light">
                Prévia do documento
              </p>
              <hr className="bg-[#BD995D] border w-full border-[#BD995D]" />
            </div>
          </DialogHeader>
          <div>
            <iframe
              src={legislacaoActive.pdf}
              className="w-full h-[55vh]"
            ></iframe>
          </div>
          <DialogFooter>
            <a
              href={legislacaoActive.pdf}
              className="w-fit mx-auto"
              // download={legislacaoActive.pdf.split("/").pop()}
            >
              <Button className="mx-auto mt-[2rem] h-[3.75rem] rounded-[4.625rem] px-[3.12rem] text-[1.25rem] font-bold">
                Fazer Download
              </Button>
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Legislacao;
