import React from 'react'

import { Card, CardContent, CardTitle } from '@/_components/ui/card'
import { FileText } from 'lucide-react'

interface CardLegislacaoProps {
  title: string
  subtitle: string
}

function CardLegislacao({ title, subtitle }: CardLegislacaoProps) {
  return (
    <Card className="bg-card-legislacao group relative h-full w-full rounded-[0.61588rem] bg-cover transition-all hover:shadow-2xl lg:w-[9.62763rem]">
      <div className="absolute -left-[2px] top-6 h-[1.7925rem] w-[4.5px] rounded-full bg-secondary"></div>

      <CardContent className="p-4 pt-0">
        <div className="mx-auto mt-[2.94rem] flex h-[4.09375rem] w-[3.47788rem] items-center justify-center rounded-md rounded-tr-[1.2rem] bg-[#ABABAB] transition-all group-hover:bg-secondary">
          <FileText className="text-white" />
        </div>
        <div className="mt-[1.16rem]">
          <CardTitle>
            <p className="text-center text-[0.7rem] font-normal leading-[1rem] text-[#2E2E2E]">
              <span className="font-bold">{title}</span> <span>{subtitle}</span>
            </p>
          </CardTitle>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardLegislacao
