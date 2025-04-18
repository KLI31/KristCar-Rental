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
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="bg-gradient-to-r from-gray-800 to-black rounded-lg p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">¡Reserva Confirmada!</h1>
              <p className="text-gray-100 mt-2">
                Tu reserva ha sido procesada exitosamente
              </p>
            </div>
            <div className="bg-white text-black rounded-full p-3">
              <Check className="h-8 w-8" />
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              ¡Muchas gracias por confiar en nosotros!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-700">
              En breves momentos recibirás toda la información relacionada a tu
              pedido a través de tu correo electrónico registrado.
            </p>
            <p className="text-gray-700">
              Puedes visualizar todas tus reservas en tu área de cliente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/">
                <Button className="bg-black hover:bg-gray-800">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a ver todos los vehículos
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-100"
                >
                  <Car className="mr-2 h-4 w-4" />
                  Ir a mi área de cliente
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-center">¿Qué sigue?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="font-semibold mb-2">Correo de confirmación</h3>
                <p className="text-sm text-gray-600">
                  Recibirás un correo con todos los detalles de tu reserva
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Car className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="font-semibold mb-2">Preparación del vehículo</h3>
                <p className="text-sm text-gray-600">
                  Prepararemos tu vehículo para que esté listo en la fecha
                  acordada
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="font-semibold mb-2">¡Disfruta tu viaje!</h3>
                <p className="text-sm text-gray-600">
                  Todo está listo para que disfrutes de tu experiencia con
                  nosotros
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderComprobationPage;
