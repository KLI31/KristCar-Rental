import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";

const SafetyAndQuality = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="w-[90%] max-w-[1600px] mx-auto bg-[#0B0F17] rounded-3xl overflow-hidden">
        <div className="p-12 md:p-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-blue-500">Nuestro Compromiso</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Tu Seguridad es
                <br />
                Nuestra Prioridad
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-white">
                    GPS ayuda a evitar distracciones proporcionando indicaciones
                    claras y manos libres.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-white">
                    Cubre los costos médicos para ti y tus pasajeros en caso de
                    accidente.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-white">
                    Confirmamos que las características esenciales como airbags,
                    cinturones de seguridad y herramientas de emergencia estén
                    en su lugar.
                  </p>
                </div>
              </div>

              <Button variant="secondary" className="gap-2">
                Ver Nuestro Compromiso de Seguridad
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/car6.webp"
                alt="Vehículo de Emergencia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 p-8 md:p-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/car3.webp"
                alt="Vehículo de Lujo"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-blue-500">Detalles Sobre los Vehículos</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Control de
                <br />
                Calidad Superior
              </h2>

              <p className="text-gray-300">
                El control de calidad en la industria automotriz es un proceso
                vital que asegura que los vehículos cumplan con los estándares y
                sean de alta calidad. Puede mejorar la satisfacción del cliente,
                la seguridad del producto y la fiabilidad, además de reducir la
                necesidad de mantenimiento.
              </p>

              <Button variant="secondary">Obtener una Demo Gratuita</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyAndQuality;
