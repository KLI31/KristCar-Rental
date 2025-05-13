import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    console.log("Evento recibido:", event.type);
  } catch (error: any) {
    console.error("Error en webhook:", error.message);
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as any;

  if (event.type === "checkout.session.completed") {
    console.log(
      "Sesión completada, actualizando orden:",
      session.metadata.orderId
    );
    try {
      await db.order.update({
        where: {
          id: session.metadata.orderId,
        },
        data: {
          status: "confirmed",
        },
      });
      console.log("Orden actualizada exitosamente");
    } catch (error) {
      console.error("Error al actualizar la orden:", error);
    }
  }

  return new NextResponse(null, { status: 200 });
}
