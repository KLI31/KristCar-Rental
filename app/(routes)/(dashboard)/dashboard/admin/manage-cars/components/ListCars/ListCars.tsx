import { CardCar } from "../CardCar";
import type { ListCarsProps } from "./ListCars.types";

const ListCars = ({ cars }: ListCarsProps) => {
  console.log("LISTA DE CARROS => ", cars);

  return (
    <div className="grid grid-cols-2 gap-5 my-4 lg:grid-cols-4">
      {cars.map((car) => (
        <CardCar key={car.id} car={car} />
      ))}
    </div>
  );
};

export default ListCars;
