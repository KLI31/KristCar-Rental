import Image from "next/image";
import { Check } from "lucide-react";

const AppSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="w-[90%] max-w-[1600px] mx-auto bg-[#F2F0EF] rounded-3xl overflow-hidden">
        <div className="p-12 md:p-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[600px] md:h-[700px]">
              <Image
                src="/rental-app.png"
                alt="App Móvil RentRide"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Contenido */}
            <div className="space-y-8">
              <p className="text-blue-600 font-medium">Obtén la App</p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Regístrate en la App y<br />
                Obtén Descuentos
              </h2>

              <p className="text-gray-600 text-lg">
                KristCar es la plataforma más grande de servicios de alquiler de
                autos. Puedes rentar un auto directamente desde la App.
              </p>

              <div className="space-y-4">
                <div className="flex  gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-600">
                    Notificaciones en tiempo real para nuevas ofertas
                  </p>
                </div>

                <div className="flex  gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-600">
                    Realiza todos los pagos fácilmente a través de la app
                  </p>
                </div>

                <div className="flex  gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-600">
                    Alquilar un auto usando la app te ayuda a verificar la
                    ubicación y hoteles cercanos
                  </p>
                </div>
              </div>

              <div className="">
                <a href="#" className="transition-transform hover:scale-105">
                  <Image
                    src="/google-play.webp"
                    alt="Descargar en Google Play"
                    width={135}
                    height={40}
                    className="h-[40px] w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
