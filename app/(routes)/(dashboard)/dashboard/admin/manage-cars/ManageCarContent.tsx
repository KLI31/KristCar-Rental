"use client";
import { useUserCar } from "@/hooks/useUserCar";
import ListCars from "./components/ListCars/ListCars";
import ButtonAddCar from "./components/ButtonAddCar/ButtonAddCar";

export const ManageCarContent = () => {
  const { cars, isLoading, mutate } = useUserCar();

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Controla tus vehiculos</h2>
        <ButtonAddCar />
      </div>
      <ListCars cars={cars} mutate={mutate} isLoading={isLoading} />
    </div>
  );
};
