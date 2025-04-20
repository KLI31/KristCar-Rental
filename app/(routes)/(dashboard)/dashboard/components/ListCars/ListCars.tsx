"use client";

import { ListCarsProps } from "./ListCars.type";
import CardCar from "./CardCar";
import CardCarSkeleton from "./CardCarSkeleton";

const ListCars = ({ cars, isLoading }: ListCarsProps) => {
  if (isLoading) {
    return (
      <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <CardCarSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div className="container mx-auto flex items-center justify-center h-40">
        <h2 className="text-lg text-muted-foreground">
          No hay carros disponibles
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <CardCar key={car.id} car={car} />
      ))}
    </div>
  );
};

export default ListCars;
