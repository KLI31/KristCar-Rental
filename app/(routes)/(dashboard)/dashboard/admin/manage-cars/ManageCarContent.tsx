"use client";
import { useUserCar } from "@/hooks/useUserCar";
import ListCars from "./components/ListCars/ListCars";
import ButtonAddCar from "./components/ButtonAddCar/ButtonAddCar";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

export const ManageCarContent = () => {
  const { cars, isLoading, mutate } = useUserCar();

  return (
    <div>
      <div className="flex justify-between">
        <SectionTitle
          title="Controla tus vehículos"
          subtitle="Gestiona tu flota de vehículos"
        />
        <ButtonAddCar />
      </div>
      <ListCars cars={cars} mutate={mutate} isLoading={isLoading} />
    </div>
  );
};
