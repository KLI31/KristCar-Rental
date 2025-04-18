import { Fuel, Gem, Heart, User, Gauge, Wrench } from "lucide-react";
import Image from "next/image";
import ModalAddReservation from "@/components/Shared/ModalAddReservation/ModalAddReservation";
import { Car } from "@prisma/client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLoveCars } from "@/hooks/useLoveCars";
interface LovedCarCardProps {
  cars: Car;
}

const LovedCarCard = ({ cars }: LovedCarCardProps) => {
  const { removeCar } = useLoveCars();
  const { priceDay, cv, engine, people, photo, name, transmission, type, id } =
    cars;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <Image
          src={photo}
          alt={name}
          width={400}
          priority={false}
          height={300}
          className="object-cover transition-transform duration-500 hover:scale-105 w-full h-60"
          unoptimized
        />
        <Badge className="absolute right-3 top-3 bg-primary/90 text-primary-foreground">
          {type.toUpperCase()}
        </Badge>
      </div>

      <CardHeader className="pb-2 pt-4">
        <div className="flex items-start justify-between">
          <h3 className="font-medium line-clamp-2 text-lg">{name}</h3>
          <div className="ml-2 text-lg font-bold text-primary">
            ${priceDay}
            <span className="text-sm font-normal text-muted-foreground">
              /día
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Wrench
              className="h-4 w-4 text-muted-foreground"
              strokeWidth={1.5}
            />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
            <span>{people} personas</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge
              className="h-4 w-4 text-muted-foreground"
              strokeWidth={1.5}
            />
            <span>{cv} CV</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
            <span>{engine}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-2 gap-2">
        <ModalAddReservation car={cars} />
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 rounded-full p-3"
          onClick={() => removeCar(id)}
        >
          <Heart
            className={`cursor-pointer  fill-red-500 border-none
            text-red-500`}
          />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LovedCarCard;
