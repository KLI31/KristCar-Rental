"use client";
import { useLoveCars } from "@/hooks/useLoveCars";
import LovedCarCard from "./LovedCarCard";

const ListLovedCars = () => {
  const { loveCars } = useLoveCars();

  if (!loveCars.length) {
    return <div className="text-center">No tienes coches favoritos aun</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      <div className="mt-6">
        {loveCars.map((car) => (
          <LovedCarCard cars={car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default ListLovedCars;
