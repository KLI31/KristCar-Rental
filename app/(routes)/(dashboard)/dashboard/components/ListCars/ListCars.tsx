"use client";

import { ListCarsProps } from "./ListCars.type";
import CardCar from "./CardCar";

const ListCars = ({ cars, isLoading }: ListCarsProps) => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <CardCar key={car.id} car={car} />
      ))}

      {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <h2 className="">Cargando tus automoviles favoritos</h2>
        </div>
      )}
    </div>
  );
};

export default ListCars;
