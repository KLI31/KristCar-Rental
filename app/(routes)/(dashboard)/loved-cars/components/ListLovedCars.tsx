"use client";
import { useLoveCars } from "@/hooks/useLoveCars";
import LovedCarCard from "./LovedCarCard";

const ListLovedCars = () => {
  const { loveCars } = useLoveCars();

  if (!loveCars.length) {
    return <div className="text-center">No tienes coches favoritos aun</div>;
  }

  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <>
        {loveCars.map((car) => (
          <LovedCarCard cars={car} key={car.id} />
        ))}
      </>
    </div>
  );
};

export default ListLovedCars;
