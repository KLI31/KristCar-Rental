"use client";
import { CardCarProps } from "./ListCars.type";
import Image from "next/image";
import { Wrench, User, Gauge, Fuel, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ModalAddReservation from "@/components/Shared/ModalAddReservation/ModalAddReservation";
import { useLoveCars } from "@/hooks/useLoveCars";
import { Car } from "@prisma/client";
import { memo, useCallback } from "react";

const CardCar = memo(({ car }: CardCarProps) => {
  const { priceDay, cv, engine, people, photo, name, transmission, type, id } =
    car;
  const { addLoveCar, removeCar, loveCars } = useLoveCars();

  const handleAddLoveCar = useCallback(
    (car: Car) => {
      addLoveCar(car);
    },
    [addLoveCar]
  );

  const handleRemoveCar = useCallback(
    (id: string) => {
      removeCar(id);
    },
    [removeCar]
  );

  const likedCar = loveCars.some((item) => item.id === car.id);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] h-full flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={photo}
          alt={name}
          fill
          priority={false}
          className="object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder-car.jpg";
          }}
          quality={75}
        />
        <Badge className="absolute right-3 top-3 bg-primary/90 text-primary-foreground">
          {type.toUpperCase()}
        </Badge>
      </div>

      <CardHeader className="pb-2 pt-4 flex-shrink-0">
        <div className="flex items-start justify-between">
          <h3 className="font-medium line-clamp-2 text-lg">{name}</h3>
          <div className="ml-2 text-lg font-bold text-primary whitespace-nowrap">
            ${priceDay}
            <span className="text-sm font-normal text-muted-foreground">
              /día
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-2 flex-shrink-0">
        <div className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Wrench
              className="h-4 w-4 text-muted-foreground flex-shrink-0"
              strokeWidth={1.5}
            />
            <span className="truncate">{transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <User
              className="h-4 w-4 text-muted-foreground flex-shrink-0"
              strokeWidth={1.5}
            />
            <span className="truncate">{people} personas</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge
              className="h-4 w-4 text-muted-foreground flex-shrink-0"
              strokeWidth={1.5}
            />
            <span className="truncate">{cv} CV</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel
              className="h-4 w-4 text-muted-foreground flex-shrink-0"
              strokeWidth={1.5}
            />
            <span className="truncate">{engine}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-2 gap-2 mt-auto">
        <ModalAddReservation car={car} />
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 rounded-full p-3"
          onClick={
            likedCar
              ? () => handleRemoveCar(car.id)
              : () => handleAddLoveCar(car)
          }
        >
          <Heart
            stroke={likedCar ? "none" : "black"}
            className={`cursor-pointer ${
              likedCar ? "fill-red-500 border-none" : ""
            }`}
          />
        </Button>
      </CardFooter>
    </Card>
  );
});

CardCar.displayName = "CardCar";

export default CardCar;
