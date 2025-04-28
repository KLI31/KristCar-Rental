"use client";
import { Car } from "@prisma/client";
import { useState, useEffect } from "react";
import ListCars from "../ListCars/ListCars";
import FiltersCars from "../Filters/FiltersCars";
interface FilterAndListCarsProps {
  cars: Car[];
}

const FilterAndListCars = ({ cars }: FilterAndListCarsProps) => {
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState({
    people: "",
    engine: "",
    transmission: "",
    type: "",
  });

  useEffect(() => {
    let filtered = cars;

    if (filters.people) {
      filtered = filtered.filter((car) =>
        car.people.toLowerCase().includes(filters.people.toLowerCase())
      );
    }

    if (filters.engine) {
      filtered = filtered.filter((car) =>
        car.engine.toLowerCase().includes(filters.engine.toLowerCase())
      );
    }

    if (filters.transmission) {
      filtered = filtered.filter((car) =>
        car.transmission
          .toLowerCase()
          .includes(filters.transmission.toLowerCase())
      );
    }

    if (filters.type) {
      filtered = filtered.filter((car) =>
        car.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }

    setFilteredCars(filtered);
  }, [filters, cars]);

  const handleFilterChange = (filter: string, value: string) => {
    setFilters((prev) => ({ ...prev, [filter]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      people: "",
      engine: "",
      transmission: "",
      type: "",
    });
  };

  return (
    <div>
      <FiltersCars
        filters={filters}
        setFilters={handleFilterChange}
        clearFilters={handleClearFilters}
      />
      <ListCars cars={filteredCars} />
    </div>
  );
};

export default FilterAndListCars;
