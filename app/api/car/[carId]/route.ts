import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ carId: string }> }
) {
  const { carId } = await params;
  const { userId } = await auth();
  const { isPublish } = await req.json();

  try {
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedCar = await db.car.update({
      where: {
        id: carId,
      },
      data: {
        isPublish,
      },
    });

    return NextResponse.json(updatedCar);
  } catch (error) {
    console.log("ERROR CAR =>", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ carId: string }> }
) {
  const { carId } = await params;

  const { userId } = await auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const deletedCar = await db.car.delete({
      where: { id: carId },
    });
    return NextResponse.json(deletedCar);
  } catch (error) {
    console.error("ERROR DELETE CAR =>", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
