import { CardCar } from "../CardCar";
import type { ListCarsProps } from "./ListCars.types";

const ListCars = ({ cars, mutate, isLoading }: ListCarsProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2>Cargando tus automoviles favoritos</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-5 my-4 lg:grid-cols-4">
      {cars.map((car) => (
        <CardCar key={car.id} car={car} mutate={mutate} />
      ))}
    </div>
  );
};

export default ListCars;
