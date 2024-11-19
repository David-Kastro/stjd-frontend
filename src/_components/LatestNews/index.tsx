"use client";
import React from "react";
import { Newspaper, Menu } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/_components/ui/carousel";
import Arrow from "@/_components/Arrow";
import CardNews from "../CardNews";

const news = [
  {
    title: "Pleno confirma pauta com oito recursos",
    date: "05/11/2024 às 10h11",
    image:
      "https://conteudo.cbf.com.br/cdn/thumbs/974x546/202411/20241114145709_755.jpeg",
    textContent:
      "Auditores da última instância nacional do futebol se reunirão nesta quinta, 7, a partir das 10h.",
  },
  {
    title: "CRB x Atlético/MG: Clubes multados e Formiga punido por agressão",
    date: "05/11/2024 às 10h11",
    image:
      "https://conteudo.cbf.com.br/cdn/thumbs/974x546/202411/20241114145709_755.jpeg",
    textContent:
      "Infrações na partida da Copa do Brasil foram julgadas pela Primeira Comissão do STJD do Futebol",
  },
  {
    title: "Relator concede efeito suspensivo a Willian Formiga",
    date: "12/10/2024 às 12h10",
    image:
      "https://conteudo.cbf.com.br/cdn/thumbs/974x546/202411/20241114145709_755.jpeg",
    textContent:
      "Auditor Rodrigo Aiache deferiu pedido do CRB e lateral poderá atuar até o julgamento do recurso no Pleno do STJD.",
  },
  {
    title: "Pleno confirma pauta com oito recursos",
    date: "05/11/2024 às 10h11",
    image:
      "https://conteudo.cbf.com.br/cdn/thumbs/974x546/202411/20241114145709_755.jpeg",
    textContent:
      "Auditores da última instância nacional do futebol se reunirão nesta quinta, 7, a partir das 10h.",
  },
  {
    title: "CRB x Atlético/MG: Clubes multados e Formiga punido por agressão",
    date: "05/11/2024 às 10h11",
    image:
      "https://conteudo.cbf.com.br/cdn/thumbs/974x546/202411/20241114145709_755.jpeg",
    textContent:
      "Infrações na partida da Copa do Brasil foram julgadas pela Primeira Comissão do STJD do Futebol",
  },
  {
    title: "Relator concede efeito suspensivo a Willian Formiga",
    date: "12/10/2024 às 12h10",
    image:
      "https://conteudo.cbf.com.br/cdn/thumbs/974x546/202411/20241114145709_755.jpeg",
    textContent:
      "Auditor Rodrigo Aiache deferiu pedido do CRB e lateral poderá atuar até o julgamento do recurso no Pleno do STJD.",
  },
  {
    title: "Pleno confirma pauta com oito recursos",
    date: "05/11/2024 às 10h11",
    image:
      "https://conteudo.cbf.com.br/cdn/thumbs/974x546/202411/20241114145709_755.jpeg",
    textContent:
      "Auditores da última instância nacional do futebol se reunirão nesta quinta, 7, a partir das 10h.",
  },
  {
    title: "CRB x Atlético/MG: Clubes multados e Formiga punido por agressão",
    date: "05/11/2024 às 10h11",
    image:
      "https://conteudo.cbf.com.br/cdn/thumbs/974x546/202411/20241114145709_755.jpeg",
    textContent:
      "Infrações na partida da Copa do Brasil foram julgadas pela Primeira Comissão do STJD do Futebol",
  },
  {
    title: "Relator concede efeito suspensivo a Willian Formiga",
    date: "12/10/2024 às 12h10",
    image:
      "https://conteudo.cbf.com.br/cdn/thumbs/974x546/202411/20241114145709_755.jpeg",
    textContent:
      "Auditor Rodrigo Aiache deferiu pedido do CRB e lateral poderá atuar até o julgamento do recurso no Pleno do STJD.",
  },
];

function LatestNews() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const handlePrevious = () => {
    api?.scrollPrev();
  };
  const handleNext = () => {
    api?.scrollNext();
  };

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Dividindo o array de notícias em grupos de 3
  const groupedNews = [];
  for (let i = 0; i < news.length; i += 3) {
    groupedNews.push(news.slice(i, i + 3));
  }

  return (
    <div>
      <div className="2xl:max-w-[50.1875rem] xl:max-w-[40.1875rem] w-full bg-[#E1E1E1] rounded-[1.375rem] pt-[2.56rem] pb-[2.19rem] relative ml-[4.69rem]">
        <div className="absolute top-[2.12rem] right-[2.25rem]">
          <button>
            <Menu className="text-[#9C9C9C]" />
          </button>
        </div>
        <div className="absolute top-[8rem] -left-[2px] h-[2rem] w-[5px] rounded-full bg-[#BD995D]"></div>

        <div className="px-[2.5rem]">
          <div className="flex gap-[0.56rem] items-center">
            <Newspaper />
            <p className="font-bold text-[1.25rem]">Últimas notícias</p>
          </div>
          <h1 className="text-[2.25rem] leading-[2.5rem] tracking-[0.0225rem] font-bold max-w-[40.1875rem] w-full mt-[2.94rem]">
            Zagueiro do Cruzeiro absolvido em primeira instância
          </h1>
          <h2 className="mt-[1.19rem] text-[0.875rem] text-[#A1A1A1]">
            05/11/2024 às 12h00
          </h2>
          <img
            src={
              "https://conteudo.cbf.com.br/cdn/thumbs/974x546/202411/20241114145709_755.jpeg"
            }
            className="rounded-[1.25rem] mt-[2.88rem]"
            alt="Image"
          />
          <p className="mt-[1.94rem] leading-[1.6875rem]">
            Expulso contra o Cuiabá, João Marcelo foi denunciado e julgado por
            praticar ato desleal ou hostil ao impedir uma oportunidade clara de
            gol.
          </p>
          <button className="flex gap-[0.56rem] w-fit ml-auto mt-[2.5rem] items-center text-[1.25rem] leading-[1.23775rem] font-bold">
            Veja mais{" "}
            <div className="rotate-180">
              <Arrow />
            </div>
          </button>
        </div>
        <div className="mt-[4rem] flex gap-[1.31rem] items-center">
          <hr className="w-full h-[0.125rem] bg-[#C2C2C2]" />
          <div className="flex gap-[0.41rem] pr-[2.5rem]">
            <button
              onClick={handlePrevious}
              className="h-[2.25rem] w-[2.25rem] border-[1.929px] border-solid border-[#A1A1A1] rounded-full flex items-center justify-center"
            >
              <Arrow color="#A1A1A1" />
            </button>
            <button
              onClick={handleNext}
              className="h-[2.25rem] w-[2.25rem] border-[1.929px] border-solid border-[#A1A1A1] rounded-full flex items-center justify-center"
            >
              <Arrow color="#A1A1A1" className="rotate-180" />
            </button>
          </div>
        </div>
        <Carousel setApi={setApi} className="w-full pl-[2.81rem] mt-[3.69rem]">
          <CarouselContent>
            {groupedNews.map((group, groupIndex) => (
              <CarouselItem key={groupIndex}>
                <div className="flex flex-col gap-[2.81rem] p-4">
                  {group.map((item, index) => (
                    <div key={index} className="flex-1">
                      <CardNews
                        image={item.image}
                        title={item.title}
                        date={item.date}
                        textContent={item.textContent}
                      />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Indicadores do Status do Carousel */}
        <div className="flex justify-center gap-2 mt-[2rem]">
          {groupedNews.map((_, groupIndex) => (
            <div
              key={groupIndex}
              className={` rounded-full h-[0.4375rem] ${
                current === groupIndex + 1
                  ? "bg-[#797979] w-[3.0625rem]"
                  : "bg-[#BD995D] w-[0.625rem]"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <button className="flex gap-[0.56rem] w-fit ml-auto mt-[1.63rem] mb-[2.88rem] items-center text-[1.25rem] leading-[1.23775rem] font-bold">
        Veja mais{" "}
        <div className="rotate-180">
          <Arrow />
        </div>
      </button>
    </div>
  );
}

export default LatestNews;
