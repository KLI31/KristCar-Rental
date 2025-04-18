import { ModalReservationProps } from "./modalReservation.types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Car } from "@prisma/client";
import { useState } from "react";
import CalendarSelector from "../CalendarSelector/CalendarSelector";

import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

const ModalAddReservation = ({ car }: ModalReservationProps) => {
  const [dateSelected, setDateSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: new Date(), to: addDays(new Date(), 5) });

  const onReserveCar = async (car: Car, dateSelected: DateRange) => {
    const response = await axios.post(`/api/checkout`, {
      carId: car.id,
      priceDay: car.priceDay,
      startDate: dateSelected.from,
      endDate: dateSelected.to,
      carName: car.name,
      image: car.photo,
    });

    window.location = response.data.url;
    toast({
      title: "Reserva realizada con exito",
      description: `El vehiculo ${car.name} ha sido reservado con exito`,
      variant: "default",
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-[400px]">
          Reservar vehiculo
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Selecciona las fechas en las que quieres alquilar el vehiculo
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>
              <CalendarSelector
                setDateSelected={setDateSelected}
                carPriceDay={car.priceDay}
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => onReserveCar(car, dateSelected)}>
            Reservar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalAddReservation;
