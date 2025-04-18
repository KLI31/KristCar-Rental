import { Car } from "@prisma/client";

export type ListCarsProps = {
  cars: Car[];
  isLoading?: boolean;
};

export type CardCarProps = {
  car: Car;
};
