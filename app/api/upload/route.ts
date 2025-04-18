import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(request: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const { image } = await request.json();

    const uploadResponse = await cloudinary.uploader.upload(image, {
      upload_preset: "ml_default",
    });

    return NextResponse.json({
      url: uploadResponse.secure_url,
    });
  } catch (error) {
    console.error("ERROR UPLOADING IMAGE:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
