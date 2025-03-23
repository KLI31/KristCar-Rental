import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export const POST = async (req: Request) => {
  const { userId } = await auth();
  const data = await req.json();

  try {
    if (!userId) {
      return new NextResponse("Unathorized", { status: 401 });
    }

    const car = await db.car.create({
      data: {
        userId,
        ...data,
      },
    });
    return NextResponse.json(car);
  } catch (error) {
    console.log("ERROR CAR =>", error);
    return new NextResponse("Internal Error", { status: 401 });
  }
};
