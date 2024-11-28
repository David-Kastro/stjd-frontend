import React from "react";

import CardTopPage from "@/_components/CardTopPage";
import BalancaJustica from "/public/images/balanca-justica.webp";
import CardLegislacao from "@/_components/CardLegislacao";
import ScaleAttorneys from "@/_components/ScaleAttorneys";
import BgEditais from "/public/images/bg-card-editais.svg";
import Image from "next/image";
import LogoBlack from "/public/images/logo-stjd-black.svg";
import BgFundoMembers from "/public/images/bg-fundo-members.svg";

const legislacoes = [
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
  {
    title: "Escala de Procuradores",
    subtitle: "2024",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
  {
    title: "CBJD - Normas e ",
    subtitle: "Legislação Complementar",
    pdf: "https://www.stjd.com.br/wp-content/uploads/2023/08/Escala-de-Procuradores-2024.pdf",
  },
];

function Legislacao() {
  return (
    <div>
      <CardTopPage
        title="Legislação STJD"
        description="A parte de legislação do STJD define e interpreta as normas do esporte no Brasil, focando na justiça e integridade das competições. Baseada no CBJD, essa área regula e aplica punições a infrações esportivas, promovendo julgamentos imparciais e com critérios legais."
        image={BalancaJustica}
        height={"28.875rem"}
      />
      <div className="container mt-[15rem] relative z-10">
        <div className="max-w-[90.99738rem] mx-auto flex gap-x-[3.93rem] gap-y-[2.56rem] flex-wrap justify-center">
          {legislacoes.map((legislacao, index) => (
            <button key={index}>
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
    </div>
  );
}

export default Legislacao;
