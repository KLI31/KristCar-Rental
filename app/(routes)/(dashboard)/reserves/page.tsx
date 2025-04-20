import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import { Car } from "lucide-react";
import TableReserves from "./Components/TableReserves";

const ReservePage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const orders = await db.order.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="text-center max-w-md mx-auto p-6 ">
          <div className="mb-6 flex justify-center">
            <div className="bg-primary/10 p-4 rounded-full">
              <Car className="h-12 w-12 text-primary" />
            </div>
          </div>
          <SectionTitle
            title="No tienes reservas"
            subtitle="Haz tus pedidos a través de la sección de vehículos disponibles"
          />
          <Link href="/cars">
            <Button size="lg">Explorar Vehículos</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle
        title="Mis reservas"
        subtitle="Mira todas tus reservas de vehículos"
      />
      <div className="">
        <TableReserves orders={orders} />
      </div>
    </div>
  );
};

export default ReservePage;
