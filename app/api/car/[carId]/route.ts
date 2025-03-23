import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export const DELETE = async (
  req: Request,
  { params }: { params: { carId: string } }
) => {
  const { userId } = await auth();
  const { carId } = params;

  try {
    if (!userId) {
      return new NextResponse("Unathorized", { status: 401 });
    }

    const deletedCar = await db.car.delete({
      where: {
        id: carId,
      },
    });

    return new NextResponse.json(deletedCar);
  } catch (error) {
    console.log("ERROR CAR =>", error);
    return new NextResponse("Internal Error", { status: 401 });
  }
};
