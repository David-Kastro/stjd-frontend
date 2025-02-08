import Link from "next/link";
import React from "react";
import CustomImage from "../CustomImage";

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
        <CustomImage
          src={image}
          className="rounded-[0.625rem] h-fit aspect-[2/1] object-cover"
          alt={title}
          width={200}
          height={100}
        />
        <div className="lg:max-w-[29rem] flex flex-col gap-[0.5rem]">
          <h1 className="lg:text-[1.25rem] font-bold leading-[1.5rem] ">
            {title}
          </h1>
          <h2 className="text-[0.875rem] text-secondary">
            {date}
          </h2>
            <p className="leading-[1.6875rem] lg:text-base text-[0.75rem] line-clamp-2">
            {textContent}
            </p>
        </div>
      </div>
    </Link>
  );
}

export default CardNews;
