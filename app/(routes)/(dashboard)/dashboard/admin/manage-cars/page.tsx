import React from "react";
import ButtonAddCar from "./components/ButtonAddCar/ButtonAddCar";
import ListCars from "./components/ListCars/ListCars";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

const ManageCarsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const car = await db.car.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Manage your cars</h2>
        <ButtonAddCar />
      </div>
      <ListCars cars={car} />
    </div>
  );
};

export default ManageCarsPage;
