import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

interface FiltersCarsProps {
  setFilters: (filters: string, value: string) => void;
  clearFilters: () => void;
  filters: {
    people: string;
    engine: string;
    transmission: string;
    type: string;
  };
}

const FiltersCars = ({
  setFilters,
  clearFilters,
  filters,
}: FiltersCarsProps) => {
  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };

  return (
    <div className="mt-5 mb-8 gap-x-4 flex flex-wrap">
      <Select
        onValueChange={(value) => handleFilter("people", value)}
        value={filters.people}
      >
        <SelectTrigger className="w-[240px]">
          <SelectValue placeholder="Selecione un numero de personas" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="7">7</SelectItem>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) => handleFilter("engine", value)}
        value={filters.engine}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Selecione un tipo de motor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="gasoil">Gasoil</SelectItem>
          <SelectItem value="diesel">Diesel</SelectItem>
          <SelectItem value="electric">Electrico</SelectItem>
          <SelectItem value="hybrid">Hibrido</SelectItem>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) => handleFilter("transmission", value)}
        value={filters.transmission}
      >
        <SelectTrigger className="w-[240px]">
          <SelectValue placeholder="Selecione un tipo de transmisión" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="automatic">Automatico</SelectItem>
          <SelectItem value="manual">Manual</SelectItem>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("type", value)}
        value={filters.type}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Selecione un tipo de vehículo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sedan">Sedan</SelectItem>
          <SelectItem value="suv">SUV</SelectItem>
          <SelectItem value="familiar">Familiar</SelectItem>
          <SelectItem value="luxe">Lujo</SelectItem>
        </SelectContent>
      </Select>

      <Button onClick={clearFilters}>
        <Trash className="w-4 h-4" />
        Limpiar filtros
      </Button>
    </div>
  );
};

export default FiltersCars;
