"use client";

import ListCars from "../../../components/ListCars/ListCars";
import { useCars } from "@/hooks/use-cars";

const DasboardContent = () => {
  const { cars, isLoading } = useCars();

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Nuestra Lista de Carros</h2>
      </div>
      <ListCars cars={cars} isLoading={isLoading} />
    </div>
  );
};

export default DasboardContent;
