"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Función para verificar la posición del scroll
  const checkScrollPosition = () => {
    // Mostrar el botón cuando hayamos scrolleado más del 50% de la altura de la ventana
    const shouldShow = window.scrollY > window.innerHeight * 0.5;
    setIsVisible(shouldShow);
  };

  // Función para volver arriba suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black shadow-lg transition-all duration-300 hover:bg-gray-800",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-28 opacity-0"
      )}
      aria-label="Volver arriba"
    >
      <ArrowUp className="h-6 w-6 text-white" />
    </button>
  );
};

export default ScrollToTop;
