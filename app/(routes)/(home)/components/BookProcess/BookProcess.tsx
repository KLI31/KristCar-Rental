"use client";
import Image from "next/image";

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: "find",
    number: "01",
    title: "Encuentra tu carro",
    description:
      "Explora nuestra flota de vehículos nuevos y usados, compara precios para encontrar tu carro ideal",
  },
  {
    id: "book",
    number: "02",
    title: "Reserva tu alquiler",
    description:
      "Selecciona las fechas y completa el proceso de reserva de manera rápida y segura",
  },
  {
    id: "pay",
    number: "03",
    title: "Completa el pago",
    description:
      "Realiza el pago de forma segura con nuestras múltiples opciones de pago disponibles",
  },
  {
    id: "confirm",
    number: "04",
    title: "Reserva confirmada",
    description:
      "Recibe la confirmación instantánea de tu reserva y los detalles de la recogida",
  },
];

const ProcessStep = ({ step }: { step: Step }) => {
  return (
    <div className="bg-white p-8 rounded-2xl">
      <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </div>
  );
};

const BookProcess = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="w-[90%] max-w-[1600px] mx-auto bg-[#F2F0EF] rounded-3xl overflow-hidden">
        <div className="p-12 md:p-20">
          {/* Encabezado */}
          <div className="max-w-3xl">
            <p className="text-blue-600 font-medium mb-4">Cómo Funciona</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proceso para Reservar un Carro en Krist Cars
            </h2>
            <p className="text-gray-600 text-lg">
              Una gran empresa internacional de alquiler con una amplia gama de
              vehículos, incluyendo opciones de lujo y ecológicas.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step) => (
                <ProcessStep key={step.id} step={step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookProcess;
