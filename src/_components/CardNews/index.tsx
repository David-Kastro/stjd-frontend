import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  title: string;
  date: string;
  textContent: string;
}

function CardNews({ image, title, date, textContent }: Props) {
  return (
    <Link href={"/noticias"}>
      <div
        className="flex lg:flex-row flex-col gap-[1.88rem]"
        style={{ userSelect: "none" }}
      >
        <img
          src={image}
          alt="title"
          className="lg:max-w-[12.6875rem] lg:h-[7.1875rem] rounded-[0.625rem]"
        />
        <div className="lg:max-w-[29rem]">
          <h1 className="lg:text-[1.25rem] font-bold leading-[1.3125rem] ">
            {title}
          </h1>
          <h2 className="text-[0.875rem] mt-[0.75rem] text-secondary">
            {date}
          </h2>
          <p className="leading-[1.6875rem] mt-[0.88rem] lg:text-base text-[0.75rem]">
            {" "}
            {textContent}{" "}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CardNews;
