import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import TableReservesAdmin from "./components/TableReservesAdmin";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

const AllReservationsPage = async () => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    return redirect("/sign-in");
  }

  console.log(user);

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <SectionTitle
        title="Reservas"
        subtitle="Maneje las reservas de los clientes"
      />
      <TableReservesAdmin orders={orders} user={user} />
    </div>
  );
};

export default AllReservationsPage;
