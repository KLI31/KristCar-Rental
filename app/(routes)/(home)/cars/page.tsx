import Navbar from "@/components/Shared/Navbar/Navbar";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import { db } from "@/lib/db";
import FilterAndListCars from "./components/FilterAndListCars/FilterAndListCars";
const CarsPage = async () => {
  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl pt-24">
        <SectionTitle title="Elige tu próximo vehículo" />
        <div>
          <FilterAndListCars cars={cars} />
        </div>
      </div>
    </>
  );
};

export default CarsPage;
