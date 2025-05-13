import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function PATCH(
  req: Request,
  { params }: { params: { carId: string } }
) {
  const { userId } = await auth();
  const { carId } = params;

  const data = await req.json();

  try {
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
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
    return new NextResponse("Internal Error", { status: 500 });
  }
}
