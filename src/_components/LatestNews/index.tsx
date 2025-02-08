"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Newspaper } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/_components/ui/carousel";
import { ChevronLeft } from "lucide-react";
import CardNews from "../CardNews";
import { Button } from "../ui/button";
import { useGlobalContext } from "@/contexts/GlobalContext";

import LiveSessionCard from "../LiveSessionCard";
import { Skeleton } from "../ui/skeleton";
import { Article } from "@/lib/types";
import { marked } from "marked";
import CustomImage from "../CustomImage";

function LatestNews({ articles }: { articles: Article[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { status, sessao, loadingSession } = useGlobalContext();
  const [dateFinal, setDateFinal] = useState<Date>(new Date());

  const handlePrevious = () => {
    api?.scrollPrev();
  };
  const handleNext = () => {
    api?.scrollNext();
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Dividindo o array de notícias em grupos de 3
  const groupedArticles = useMemo(() => {
    const result = [];
    for (let i = 0; i < articles.length; i += 3) {
      result.push(articles.slice(i, i + 3));
    }
    return result;
  }, []);

  const articleHightlight = articles[0];

  useEffect(() => {
    if (status === "online") {
      const dataString = new Date(sessao.released);
      setDateFinal(dataString);
    }
  }, [status, sessao]);

  function getPeriodo(horas: number) {
    if (horas >= 6 && horas < 12) {
      return "manhã";
    } else if (horas >= 12 && horas < 18) {
      return "tarde";
    } else {
      return "noite";
    }
  }
  const formatDate = (date: Date | string | null): string => {
    if (!date) return "Data inválida";

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return "Data inválida";

    const day = String(parsedDate.getDate()).padStart(2, "0");
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
    const year = parsedDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  if (loadingSession) {
    return (
      <div className="2xl:max-w-[50.1875rem] xl:max-w-[40.1875rem] w-full bg-[#E1E1E1] rounded-[1.375rem] pt-[2.56rem] pb-[2.19rem] relative lg:ml-[4.69rem] lg:mt-0 mt-5">
        <div className="relative lg:w-[50.1875rem] lg:px-[2.5rem] px-4">
          <Skeleton className="h-[1.5rem] w-[11.875rem] rounded-lg bg-[#ccc]" />
          <Skeleton className="h-[4.25rem] lg:w-[40.1875rem] w-full rounded-lg bg-[#ccc] mt-[2.94rem]" />
          <Skeleton className="h-[1rem] w-[8.6875rem] rounded-lg bg-[#ccc] mt-[1.9rem]" />
          <Skeleton className="h-[20.9375rem] lg:w-[45.25rem] w-full rounded-lg bg-[#ccc] mt-[2.8rem]" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="2xl:max-w-[50.1875rem] xl:max-w-[40.1875rem] w-full lg:bg-[#E1E1E1] rounded-[1.375rem] lg:pt-[2.56rem] pb-[2.19rem] relative lg:ml-[4.69rem]">
        {status === "online" && (
          <>
            <div className="relative lg:w-[50.1875rem]">
              <div className="absolute lg:-top-10 top-56 lg:-left-16 -left-20 w-[15.65488rem]">
                <LiveSessionCard status={"online"} />
              </div>
              <iframe
                className="w-full lg:h-[28.75rem] h-[14.8125rem] lg:mt-[2.56rem]"
                src="https://www.youtube.com/embed/xCyOiq4lMJ4?si=FRGSMfH8VmqCGXVL"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="px-[2.5rem] lg:mt-[1.44rem] mt-[3.6rem]">
                <p className="lg:text-[1.25rem] text-[0.73369rem] font-bold">
                  {sessao.title}
                </p>
                <p className="text-[#A1A1A1] lg:text-[0.875rem] text-[0.51356rem] lg:mt-[0.5rem]">
                  {formatDate(dateFinal)} {getPeriodo(dateFinal.getHours())}
                </p>
              </div>
            </div>
            <div className="mt-[1.6rem] hidden gap-[1.31rem] items-center lg:flex">
              <hr className="w-full h-[0.125rem] bg-[#C2C2C2]" />
              <div className="flex gap-[0.41rem] pr-[2.5rem]">
                <button
                  onClick={handlePrevious}
                  className="h-[2.25rem] w-[2.25rem] border-[1.929px] border-solid border-[#A1A1A1] rounded-full flex items-center justify-center"
                >
                  <ChevronLeft color="#A1A1A1" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-[2.25rem] w-[2.25rem] border-[1.929px] border-solid border-[#A1A1A1] rounded-full flex items-center justify-center"
                >
                  <ChevronLeft color="#A1A1A1" className="rotate-180" />
                </button>
              </div>
            </div>
            <div className="lg:px-[2.5rem] px-[1.19rem] lg:mt-[3.1rem] mt-[0.78rem] lg:bg-transparent bg-[#E1E1E1] lg:py-0 py-[1.52rem] rounded-[0.63938rem]">
              <div className="flex gap-[0.56rem] items-center">
                <Newspaper className="lg:w-auto w-[1.06088rem]" />
                <p className="font-bold lg:text-[1.25rem] text-[0.88406rem]">
                  Últimas notícias
                </p>
              </div>
              <Carousel
                setApi={setApi}
                className="w-full lg:mt-[3.69rem] mt-[1.29rem]"
              >
                <CarouselContent>
                  {articles.map((group, groupIndex) => (
                    <CarouselItem key={groupIndex}>
                      <>
                        <h1 className="lg:text-[2.25rem] text-[1.29613rem] lg:leading-[2.5rem] leading-[1.44013rem] tracking-[0.0225rem] font-bold max-w-[40.1875rem] w-full">
                          {group.headline}
                        </h1>
                        <h2 className="lg:mt-[1.19rem] mt-[0.7rem] lg:text-[0.875rem] text-[0.5rem] text-[#A1A1A1]">
                          {group.createdAt}
                        </h2>
                        <CustomImage
                          src={group.imagem.url}
                          className="rounded-[1.25rem] lg:mt-[2.88rem] mt-[1.14rem] aspect-[2/1] object-cover"
                          alt={group.imagem.name}
                          width={200}
                          height={100}
                        />
                        {/* <img
                          src={group.imagem.url}
                          className="rounded-[1.25rem] lg:mt-[2.88rem] mt-[1.14rem]"
                          alt="Image"
                        /> */}
                        <p className="lg:mt-[1.94rem] mt-[0.9rem] lg:text-base text-[0.75rem] leading-4">
                          {marked.parse(group.corpo)}
                        </p>
                        <Button className="bg-transparent text-black hover:bg-transparent flex gap-[0.56rem] w-fit ml-auto items-center text-[0.82363rem] leading-[1.23775rem] font-bold lg:hidden">
                          Veja mais{" "}
                          <div className="rotate-180">
                            <ChevronLeft />
                          </div>
                        </Button>
                      </>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="flex justify-center gap-2 mt-5">
                {articles.map((_, groupIndex) => (
                  <div
                    key={groupIndex}
                    className={` rounded-full h-[0.4375rem] ${
                      current === groupIndex + 1
                        ? "bg-[#797979] w-[3.0625rem]"
                        : "bg-secondary w-[0.625rem]"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </>
        )}

        {status !== "online" && (
          <>
            <div className="absolute lg:top-[8rem] top-[6rem] -left-[2px] lg:h-[2rem] h-[1rem] lg:w-[5px] w-[2px] rounded-full bg-secondary"></div>
            <div className="lg:px-[2.5rem] px-[1.5rem] lg:bg-transparent bg-[#E1E1E1] lg:py-0 py-[1.5rem] rounded-[0.63938rem] lg:rounded-none lg:mt-0 mt-[1.62rem]">
              <div className="absolute lg:hidden -top-4  right-0 w-[15.65488rem]">
                <LiveSessionCard status={"offline"} />
              </div>
              <div className="flex gap-[0.56rem] items-center">
                <Newspaper className="lg:w-auto w-[1.06088rem]" />
                <p className="font-bold lg:text-[1.25rem] text-[0.88406rem]">
                  Últimas notícias
                </p>
              </div>
              <h1 className="tracking-[0.01294rem] lg:text-[2.25rem] text-[1.29613rem] lg:leading-[2.5rem] leading-[1.44013rem] lg:tracking-[0.0225rem] font-bold max-w-[40.1875rem] w-full lg:mt-[2.94rem] mt-[1.29rem]">
                {articleHightlight.headline}
              </h1>
              <CustomImage
                src={
                  articleHightlight.imagem.url
                }
                className="rounded-[1.25rem] lg:mt-[2.88rem] mt-[1.4rem] aspect-[2/1] object-cover"
                alt={articleHightlight.imagem.name}
                width={720}
                height={360}
              />
              <p className="lg:mt-[1.94rem] mt-[0.9rem] lg:leading-[1.6875rem] leading-[1rem] lg:text-base text-[0.75rem]">
                {articleHightlight.corpo}
              </p>
              <Button className="bg-transparent text-black hover:bg-transparent flex gap-[0.56rem] w-fit ml-auto lg:mt-[2.5rem] mt-[0.6rem] items-center lg:text-[1.25rem] text-[0.82363rem] leading-[1.23775rem] font-bold">
                Veja mais{" "}
                <div className="rotate-180">
                  <ChevronLeft />
                </div>
              </Button>
            </div>
            <div className="mt-[4rem] gap-[1.31rem] items-center lg:flex hidden">
              <hr className="w-full h-[0.125rem] bg-[#C2C2C2]" />
              <div className="flex gap-[0.41rem] pr-[2.5rem]">
                <button
                  onClick={handlePrevious}
                  className="h-[2.25rem] w-[2.25rem] border-[1.929px] border-solid border-[#A1A1A1] rounded-full flex items-center justify-center"
                >
                  <ChevronLeft color="#A1A1A1" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-[2.25rem] w-[2.25rem] border-[1.929px] border-solid border-[#A1A1A1] rounded-full flex items-center justify-center"
                >
                  <ChevronLeft color="#A1A1A1" className="rotate-180" />
                </button>
              </div>
            </div>
            <div className="relative">
              <Carousel
                setApi={setApi}
                className="lg:w-full  lg:pl-[2.81rem] mt-[3.69rem] p-0"
              >
                <CarouselContent>
                  {groupedArticles.map((group, groupIndex) => (
                    <CarouselItem key={groupIndex}>
                      <div className="flex flex-col gap-[2.81rem] lg:p-4">
                        {group.map((item, index) => (
                          <div key={index} className="flex-1">
                            <CardNews
                              image={item.imagem.url}
                              title={item.headline}
                              date={item.createdAt}
                              textContent={item.corpo}
                            />
                          </div>
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <div className="flex justify-center gap-2 mt-[2rem]">
              {groupedArticles.map((_, groupIndex) => (
                <div
                  key={groupIndex}
                  className={` rounded-full h-[0.4375rem] ${
                    current === groupIndex + 1
                      ? "bg-[#797979] w-[3.0625rem]"
                      : "bg-secondary w-[0.625rem]"
                  }`}
                ></div>
              ))}
            </div>
          </>
        )}
      </div>
      <Button className="bg-transparent text-black hover:bg-transparent gap-[0.56rem] w-fit ml-auto mt-[1.63rem] mb-[2.88rem] items-center text-[1.25rem] leading-[1.23775rem] font-bold lg:flex hidden">
        Veja mais{" "}
        <div className="rotate-180">
          <ChevronLeft />
        </div>
      </Button>
    </div>
  );
}
export default LatestNews;
