"use client";

import { CalendarSelectorProps } from "./calendarSelector.types";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";
import { useEffect, useState } from "react";
import { addDays, format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const CalendarSelector = ({
  setDateSelected,
  className,
  carPriceDay,
}: CalendarSelectorProps) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  useEffect(() => {
    setDateSelected({
      from: date?.from,
      to: date?.to,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const calculateDayBetween = (from: Date, to: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    const diffInTime = to.getTime() - from.getTime(); // difference in milliseconds
    return Math.round(diffInTime / oneDay); // convert to days
  };

  const daysBetween =
    date?.from && date?.to ? calculateDayBetween(date.from, date.to) : 0;

  return (
    <>
      <div className={cn("grid gap-2", className)}>
        {date?.from && date?.to && (
          <div>
            <div className="mt-4 text-lg text-black">
              Dias totales {daysBetween}
            </div>
            <div>
              Precio total: {daysBetween * Number(carPriceDay)}$ (Imp.incluidos)
            </div>
          </div>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn(
                "justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <span>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </span>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span className="text-muted-foreground">
                  Selecciona las fechas
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              defaultMonth={date?.from}
              mode="range"
              selected={date}
              onSelect={(newDate) => {
                setDate(newDate);
              }}
              initialFocus
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default CalendarSelector;
