"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const VehicleFleet = () => {
  const [activeFilter, setActiveFilter] = useState("Todos los modelos");

  const filters = [
    "Todos los modelos",
    "Premium",
    "Carro deportivo",
    "Limusina",
    "Cabriolet",
    "Electrico",
  ];

  const vehicles = [
    {
      id: 1,
      name: "Mercedes-Benz AMG GT",
      type: ["Premium", "Carro deportivo"],
      image: "/car1.webp",
      className: "col-span-2",
    },
    {
      id: 2,
      name: "Porsche Cayman",
      type: ["Premium", "Carro deportivo"],
      image: "/car2.webp",
      className: "col-span-2",
    },
    {
      id: 3,
      name: "Volkswagen Passat",
      type: ["Premium"],
      image: "/car3.webp",
      className: "col-span-1",
    },
    {
      id: 4,
      name: "BMW M4",
      type: ["Premium", "Carro deportivo"],
      image: "/car4.webp",
      className: "col-span-1",
    },
    {
      id: 5,
      name: "Porsche 911 GT3",
      type: ["Premium", "Carro deportivo"],
      image: "/car5.webp",
      className: "col-span-1",
    },
    {
      id: 6,
      name: "Smart ForTwo",
      type: ["Electrico"],
      image: "/car6.webp",
      className: "col-span-1",
    },
  ];

  const filteredVehicles =
    activeFilter === "Todos los modelos"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.type.includes(activeFilter));

  return (
    <section className="w-full py-24">
      <div className="container mx-auto px-4">
        <span className="text-blue-500 text-lg font-medium mb-4 block text-center">
          Nuestra Flota
        </span>
        <h2 className="text-5xl font-bold text-center mb-4">
          Nuestra Flota de Vehículos
        </h2>
        <p className="text-gray-600 text-center text-lg mb-12 max-w-3xl mx-auto">
          Una gran empresa internacional de alquiler con una amplia gama de
          vehículos, incluyendo opciones de lujo y ecológicas.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`${vehicle.className} group relative overflow-hidden rounded-[20px] bg-gray-100 cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/25 to-black/60 transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white">
                    {vehicle.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.type.map((type) => (
                      <span
                        key={type}
                        className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium transition-all duration-300 group-hover:bg-blue-500/50"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full gap-2 text-base hover:bg-black hover:text-white transition-all duration-300"
          >
            Ver Todos los Modelos
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VehicleFleet;
