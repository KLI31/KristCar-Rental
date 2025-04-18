import React from "react";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ArrowLeft, RefreshCcw } from "lucide-react";

const OrderErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">¡Error en la Reserva!</h1>
              <p className="text-gray-100 mt-2">
                Lo sentimos, ha ocurrido un error al procesar tu reserva.
              </p>
            </div>
            <div className="bg-white text-red-800 rounded-full p-3">
              <AlertTriangle className="h-8 w-8" />
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              ¡No hemos podido completar tu solicitud!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-700">
              Por favor, revisa la información ingresada y vuelve a intentarlo.
            </p>
            <p className="text-gray-700">
              Si el problema persiste, contacta con nuestro soporte de
              asistencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/">
                <Button className="bg-red-600 hover:bg-red-700">
                  <ArrowLeft />
                  Volver a ver los productos
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-center">
              ¿Qué puedes hacer?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <RefreshCcw className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Reintentar</h3>
                <p className="text-sm text-gray-600">
                  Vuelve a intentar completar el proceso de reserva.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Verifica tus datos</h3>
                <p className="text-sm text-gray-600">
                  Asegúrate de que toda la información es correcta antes de
                  enviar.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <ArrowLeft className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Contacta Soporte</h3>
                <p className="text-sm text-gray-600">
                  Si el problema continúa, comunícate con nuestro soporte
                  técnico.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderErrorPage;
