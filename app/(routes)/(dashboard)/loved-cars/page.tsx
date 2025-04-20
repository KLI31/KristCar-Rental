import React from "react";
import ListLovedCars from "./components/ListLovedCars";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

const LoveCarsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div>
      <SectionTitle
        title="Tus vehículos favoritos"
        subtitle="Estos son los vehículos que has marcado como favoritos"
      />
      <div className="mx-auto container">
        <ListLovedCars />
      </div>
    </div>
  );
};

export default LoveCarsPage;
