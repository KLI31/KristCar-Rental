import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ carId: string }> }
) {
  const { carId } = await params;

  const { userId } = await auth();
  const data = await req.json();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const car = await db.car.update({
      where: { id: carId },
      data: { ...data },
    });
    return NextResponse.json(car);
  } catch (error) {
    console.error("ERROR CAR =>", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
