"use client";

import { Car } from "@prisma/client";
import Image from "next/image";
import { Fuel, Gauge, Gem, Trash2, Upload, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ButtonEditCar from "./ButtonEditCar/ButtonEditCar";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

type CardCarProps = {
  car: Car;
  mutate: () => void;
};

export const CardCar = ({ car, mutate }: CardCarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleDeleteCar = async (carId: string) => {
    try {
      await axios.delete(`/api/car/${carId}`);
      toast({
        title: "Vehiculo eliminado ✖️",
        description: "El vehiculo se ha eliminado correctamente",
      });
      mutate();
    } catch (error) {
      console.log("ERROR DELETE CAR =>", error);
      toast({
        title: "Error al eliminar el vehiculo",
        description: "Ocurrio un error al eliminar el carro",
        variant: "destructive",
      });
    }
  };

  const handlePublishCar = async (publish: boolean) => {
    try {
      await axios.patch(`/api/car/${car.id}`, {
        isPublish: publish,
      });
      toast({
        title: publish ? "Vehiculo publicado 🚀" : "Vehiculo despublicado 🚀",
        description: publish
          ? "El vehiculo se ha publicado correctamente"
          : "El vehiculo se ha despublicado correctamente",
      });
      mutate();
    } catch (error) {
      console.log("ERROR PUBLISH CAR =>", error);
      toast({
        title: "Error al publicar el vehiculo",
        description: "Ocurrio un error al publicar el carro",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      className="relative bg-white rounded-xl shadow-md transition-all duration-300 overflow-hidden"
      style={{
        boxShadow: isHovered
          ? "0 10px 25px rgba(0,0,0,0.1)"
          : "0 4px 12px rgba(0,0,0,0.05)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Image
          src={car.photo || "/placeholder.svg"}
          alt={car.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div
          className={cn(
            "absolute top-3 left-3 py-1 px-3 rounded-full text-white text-xs font-medium",
            car.isPublish ? "bg-emerald-600" : "bg-red-400"
          )}
        >
          {car.isPublish ? "Publicado" : "No publicado"}
        </div>
      </div>

      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-800 line-clamp-2 min-h-[1.5rem]">
            {car.name}
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-xl font-semibold text-gray-900">
              {car.priceDay}$
            </span>
            <span className="text-gray-500 ml-1">/día</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-2 gap-x-4 my-4">
          <div className="flex items-center text-gray-700">
            <Gem className="h-4 w-4 mr-2 text-gray-500" strokeWidth={1.5} />
            <span className="text-sm">{car.type}</span>
          </div>

          <div className="flex items-center text-gray-700">
            <Wrench className="h-4 w-4 mr-2 text-gray-500" strokeWidth={1.5} />
            <span className="text-sm">{car.transmission}</span>
          </div>

          <div className="flex items-center text-gray-700">
            <Users className="h-4 w-4 mr-2 text-gray-500" strokeWidth={1.5} />
            <span className="text-sm">{car.people}</span>
          </div>

          <div className="flex items-center text-gray-700">
            <Fuel className="h-4 w-4 mr-2 text-gray-500" strokeWidth={1.5} />
            <span className="text-sm">{car.engine}</span>
          </div>

          <div className="flex items-center text-gray-700">
            <Gauge className="h-4 w-4 mr-2 text-gray-500" strokeWidth={1.5} />
            <span className="text-sm">{car.cv} CV</span>
          </div>
        </div>

        <div className="flex justify-between gap-x-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleDeleteCar(car.id)}
            className="text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            <Trash2 className="h-4 w-4 mr-2" strokeWidth={1.5} />
            Eliminar
          </Button>

          <ButtonEditCar carData={car} />
        </div>

        {car.isPublish ? (
          <Button
            className="mt-3 w-full transition-colors"
            variant={"outline"}
            onClick={() => handlePublishCar(false)}
          >
            Despublicar
            <Upload className="h-4 w-4 ml-2" strokeWidth={1.5} />
          </Button>
        ) : (
          <Button
            className="mt-3 w-full transition-colors"
            onClick={() => handlePublishCar(true)}
          >
            Publicar
            <Upload className="h-4 w-4 ml-2" strokeWidth={1.5} />
          </Button>
        )}
      </div>
    </div>
  );
};
