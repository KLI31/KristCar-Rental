import React from "react";

const InfoSection = () => {
  const stats = [
    {
      number: "2+",
      title: "Años",
      description:
        "En el mercado de coches premium de alquiler de todo el mundo",
    },
    {
      number: "50+",
      description:
        "Vehiculos disponibles en todo el mundo que te permiten alquilar un coche premium en cualquier parte del mundo",
    },
    {
      number: "50+Mil",
      description: "De alquiler visibles en Europa, USA y todo el mundo",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {stats.map((stat, index) => (
            <div key={index} className="relative p-10 flex flex-col">
              <h3 className="text-6xl font-bold text-black mb-2">
                {stat.number}
                <span className="text-2xl font-bold text-gray-800 mb-1">
                  {stat.title}
                </span>
              </h3>
              <p className="text-gray-600">{stat.description}</p>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 rounded-lg w-[3px] h-32 bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
