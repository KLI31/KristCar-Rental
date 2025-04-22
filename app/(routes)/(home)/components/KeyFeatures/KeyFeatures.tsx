import React from "react";
import { Clock, Leaf, Car, CreditCard } from "lucide-react";

const KeyFeatures = () => {
  const features = [
    {
      icon: Clock,
      title: "Disponible 24/7",
      description:
        "Auto Experts y vehículos disponibles para asegurar soporte técnico de emergencia y alquiler",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description:
        "Todos los vehículos están diseñados para tener poco o ningún efecto negativo en el medio ambiente",
    },
    {
      icon: Car,
      title: "Vehículos bien mantenidos",
      description:
        "Un vehículo bien mantenido es aquel que está en buen estado de funcionamiento y no pone en riesgo al conductor ni a los pasajeros",
    },
    {
      icon: CreditCard,
      title: "Pago Seguro",
      description:
        "Utiliza esta aplicación para ayudarte a determinar el pago mensual del préstamo para tu vehículo",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center py-24">
      <section className="w-[90%] max-w-[1600px] bg-[#0F1117] text-white rounded-[40px] p-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-blue-500 text-lg font-medium mb-6 block">
            Características Principales
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.2]">
              Siéntete Seguro & La Mejor Experiencia con Krist Cars
            </h2>
            <p className="text-gray-400 self-end text-lg">
              Los servicios de alquiler de vehículos permiten a las personas
              usar temporalmente un vehículo para necesidades personales o de
              negocios sin tener que comprarlo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-[#1A1D24] rounded-full p-5 w-20 h-20 flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyFeatures;
