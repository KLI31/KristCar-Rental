import React from "react";
import ListLovedCars from "./components/ListLovedCars";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoveCarsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div>
      <h1 className="text-2xl">Tus vehiculos favoritos</h1>
      <p>Estos son los vehiculos que has marcado como favoritos</p>
      <ListLovedCars />
    </div>
  );
};

export default LoveCarsPage;
