import React from "react";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Mail, Car, ArrowLeft } from "lucide-react";

const OrderComprobationPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-start md:items-center justify-center min-h-screen px-2 py-4 md:pt-16">
        <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl py-8 sm:px-4 md:px-8">
          <div className="bg-gradient-to-r from-green-300  to-green-200 rounded-lg p-6 mb-8 text-black">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">¡Reserva Confirmada!</h1>
                <p className="mt-2">
                  Tu reserva ha sido procesada exitosamente
                </p>
              </div>
              <div className="bg-white text-green-400 rounded-full p-3 shadow">
                <Check className="h-8 w-8" />
              </div>
            </div>
          </div>

          <Card className="mb-8 bg-white border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-center text-black">
                ¡Muchas gracias por confiar en nosotros!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p>
                En breves momentos recibirás toda la información relacionada a
                tu pedido a través de tu correo electrónico registrado.
              </p>
              <p>Puedes visualizar todas tus reservas en tu área de cliente.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Link href="/">
                  <Button className="bg-green-300 hover:bg-green-300 text-black">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a ver todos los vehículos
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    className="border-green-300 text-black hover:bg-green-100"
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Ir a mi área de cliente
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-center text-black">
                ¿Qué sigue?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 border border-green-100 rounded-lg bg-green-50">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow">
                    <Mail className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black">
                    Correo de confirmación
                  </h3>
                  <p className="text-sm text-black">
                    Recibirás un correo con todos los detalles de tu reserva
                  </p>
                </div>

                <div className="p-4 border border-blue-100 rounded-lg bg-blue-50">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow">
                    <Car className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black">
                    Preparación del vehículo
                  </h3>
                  <p className="text-sm text-black">
                    Prepararemos tu vehículo para que esté listo en la fecha
                    acordada
                  </p>
                </div>

                <div className="p-4 border border-yellow-100 rounded-lg bg-yellow-50">
                  <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow">
                    <Check className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black">
                    ¡Disfruta tu viaje!
                  </h3>
                  <p className="text-sm text-black">
                    Todo está listo para que disfrutes de tu experiencia con
                    nosotros
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderComprobationPage;
