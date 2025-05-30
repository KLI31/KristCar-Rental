import { Car } from "@prisma/client";

export type ListCarsProps = {
  cars: Car[];
  mutate: () => void;
  isLoading?: boolean;
};
