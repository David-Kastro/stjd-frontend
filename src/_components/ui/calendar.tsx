"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, CaptionProps } from "react-day-picker";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/_components/ui/button";
import { useNavigation } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

// Componente customizado de legenda (Caption) para separar mês e ano e manter botões de navegação
function CustomCaption({ displayMonth, className }: CaptionProps) {
  const { goToMonth, previousMonth, nextMonth } = useNavigation();

  const handlePrevClick = () => {
    if (previousMonth) {
      goToMonth(previousMonth);
    }
  };

  const handleNextClick = () => {
    if (nextMonth) {
      goToMonth(nextMonth);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between text-sm font-medium",
        className
      )}
    >
      <button
        type="button"
        onClick={handlePrevClick}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "h-[2.125rem] w-[2.125rem] rounded-[0.625rem] bg-transparent border-[2px] border-secondary hover:bg-transparent"
        )}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <div className="flex flex-col items-center gap-[0.31rem]">
        <span className="text-[1.25rem] font-bold leading-[1rem]">
          {format(displayMonth, "MMMM", { locale: ptBR })}
        </span>
        <span className="text-[0.75rem] leading-[1rem] text-[#A1A1A1] font-light">
          {format(displayMonth, "yyyy", { locale: ptBR })}
        </span>
      </div>
      <button
        type="button"
        onClick={handleNextClick}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "h-[2.125rem] w-[2.125rem] rounded-[0.625rem] bg-transparent border-[2px] border-secondary hover:bg-transparent"
        )}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months:
          "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
        month: "space-y-4 w-full capitalize",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-[1.25rem] font-bold",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 hover:bg-transparent"
        ),
        nav_button_previous:
          "absolute left-1 border-[2px] border-solid border-secondary",
        nav_button_next:
          "border-[2px] border-solid border-secondary absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex justify-between",
        head_cell: "text-[#A1A1A1] rounded-md w-9 font-normal text-[0.8125rem]",
        row: "flex w-full mt-2 justify-between",
        cell: "h-9 w-9 text-center text-[0.9375rem] p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-secondary !rounded-[0.625rem] text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-secondary focus:text-[#fff]",
        day_today: "",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="h-4 w-4" {...props} />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className="h-4 w-4" {...props} />
        ),
        Caption: CustomCaption, // Usando o componente de legenda customizado
      }}
      locale={ptBR} // Definindo o locale para português
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
