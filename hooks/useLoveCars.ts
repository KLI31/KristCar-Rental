import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Car } from "@prisma/client";
import { toast } from "./use-toast";

export interface UseLoveCarsStore {
  loveCars: Car[];
  addLoveCar: (car: Car) => void;
  removeCar: (carId: string) => void;
}

export const useLoveCars = create<UseLoveCarsStore>()(
  persist(
    (set, get) => ({
      loveCars: [] as Car[],

      addLoveCar: (car: Car) => {
        const getCars = get().loveCars;
        const existingCar = getCars.find(
          (existingCar) => existingCar.id === car.id
        );

        if (existingCar) {
          return toast({
            title: "Error",
            description: "El coche ya está en tu lista de favoritos 💔",
            variant: "destructive",
          });
        }

        set({ loveCars: [...get().loveCars, car] });

        toast({
          title: "Éxito",
          description: "Coche añadido a tu lista de favoritos ❤️",
          duration: 2000,
        });
      },

      removeCar(carId: string) {
        set({ loveCars: get().loveCars.filter((car) => car.id !== carId) });
        toast({
          title: "Éxito",
          description: "Coche eliminado de tu lista de favoritos",
          duration: 2000,
        });
      },
    }),
    {
      name: "love-cars-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
