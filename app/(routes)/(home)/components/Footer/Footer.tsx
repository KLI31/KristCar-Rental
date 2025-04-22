"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const footerSections: FooterSection[] = [
  {
    title: "Catálogo",
    links: [
      { label: "Alquiler de Autos", href: "/rent-car" },
      { label: "Autos Nuevos", href: "/new-cars" },
      { label: "Autos Usados", href: "/used-cars" },
      { label: "Vende tu Auto", href: "/sell-car" },
    ],
  },
  {
    title: "Sobre KristCar",
    links: [
      { label: "Nosotros", href: "/about" },
      { label: "Cómo Funciona", href: "/how-it-works" },
      { label: "Testimonios", href: "/testimony" },
      { label: "Trabaja con Nosotros", href: "/career" },
      { label: "Servicios", href: "/services" },
    ],
  },
  {
    title: "Centro de Ayuda",
    links: [
      { label: "Preguntas Frecuentes", href: "/faq" },
      { label: "Contáctanos", href: "/contact" },
      { label: "Ubicación de Oficinas", href: "/location" },
      { label: "Política de Privacidad", href: "/privacy" },
      { label: "Términos y Condiciones", href: "/terms" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr,1fr] gap-8 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image
                src="/logo.svg"
                alt="Logo de KristCar"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-black text-2xl font-bold">KristCar</span>
            </Link>
            <p className="text-gray-600 max-w-sm">
              KristCar es la solución perfecta de alquiler para mi familia en
              vacaciones.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
