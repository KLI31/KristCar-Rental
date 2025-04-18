import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const cars = await db.car.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(cars);
  } catch (error) {
    console.error("ERROR GET USER CARS:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
