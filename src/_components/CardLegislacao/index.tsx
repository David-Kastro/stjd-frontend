import React from "react";

import { Card, CardContent, CardTitle } from "@/_components/ui/card";
import { FileText } from "lucide-react";

interface CardLegislacaoProps {
  title: string;
  subtitle: string;
}

function CardLegislacao({ title, subtitle }: CardLegislacaoProps) {
  return (
    <Card className="group h-full  w-[9.62763rem] rounded-[0.61588rem] hover:shadow-2xl bg-card-legislacao bg-cover relative ">
      <div className="absolute top-6 -left-[2px] w-[4.5px] rounded-full bg-secondary h-[1.7925rem]"></div>

      <CardContent className="p-4 pt-0">
        <div className="h-[4.09375rem] w-[3.47788rem] flex items-center justify-center bg-[#ABABAB] group-hover:bg-secondary rounded-md rounded-tr-[1.2rem] mt-[2.94rem] mx-auto">
          <FileText className="text-white" />
        </div>
        <div className="mt-[1.16rem]">
          <CardTitle>
            <p className="text-[0.7rem] leading-[1rem] font-normal text-[#2E2E2E] text-center">
              <span className="font-bold">{title}</span> <span>{subtitle}</span>
            </p>
          </CardTitle>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardLegislacao;
