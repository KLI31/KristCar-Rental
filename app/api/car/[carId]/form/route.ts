import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export const PATCH = async (
  req: Request,
  { params }: { params: { cardId: string } }
) => {
  const { userId } = await auth();
  const { carId } = params;
  const data = await req.json();

  try {
    if (!userId) {
      return new NextResponse("Unathorized", { status: 401 });
    }

    const car = await db.car.update({
      where: {
        id: carId,
      },
      data: {
        ...data,
      },
    });

    return NextResponse.json(car);
  } catch (error) {
    console.log("ERROR CAR =>", error);
    return new NextResponse("Internal Error", { status: 401 });
  }
};
