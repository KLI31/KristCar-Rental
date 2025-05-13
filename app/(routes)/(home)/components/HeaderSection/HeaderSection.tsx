import Navbar from "@/components/Shared/Navbar/Navbar";
import RevealSection from "@/components/Shared/RevealSection/RevealSection";
import Image from "next/image";

export default function HeaderSection() {
  return (
    <RevealSection
      delay={0.1}
      position="bottom"
      className="relative w-full h-screen"
    >
      <Navbar />

      <section className="relative w-full h-screen">
        <Image
          src="/header.webp"
          alt="imageHeader"
          priority
          width={1920}
          height={1080}
          className="absolute w-full h-full object-cover object-center"
          quality={100}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-white space-y-6 ml-20">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
                Busca, Reserva,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  & Encuentra tu vehículo ideal
                </span>
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl text-gray-200 leading-relaxed">
                Tenemos procesos estandarizados y opciones de seguro, mientras
                que las rentas peer-to-peer ofrecen vehículos únicos y a veces
                tarifas más bajas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}
