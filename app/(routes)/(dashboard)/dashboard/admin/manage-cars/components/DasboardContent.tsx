"use client";

import ListCars from "../../../components/ListCars/ListCars";
import { useCars } from "@/hooks/use-cars";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

const DasboardContent = () => {
  const { cars, isLoading } = useCars();

  return (
    <>
      <SectionTitle
        title="Nuestra Lista de Carros"
        subtitle="Explora nuestra selección de vehículos disponibles"
      />
      <Suspense
        fallback={
          <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-[400px]">
                <Skeleton className="w-full h-full rounded-lg" />
              </div>
            ))}
          </div>
        }
      >
        <ListCars cars={cars} isLoading={isLoading} />
      </Suspense>
    </>
  );
};

export default DasboardContent;
