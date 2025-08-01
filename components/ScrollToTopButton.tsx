"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { serviceColors } from "./SidebarNavigation";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  // Obtener ruta actual con fallback a "/"
  const pathname = usePathname() || "/";
  // Determinar la clave de color basada en la ruta (usar "/contacto" para home)
  const routeKey = pathname === "/"
    ? "/contacto"
    : Object.keys(serviceColors).find((route) => pathname.startsWith(route)) || "default";
  // Obtener colores con fallback a 'default' si no se encuentra la clave
  const colors = serviceColors[routeKey as keyof typeof serviceColors] ?? serviceColors.default;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Ir arriba"
      className={
        `fixed right-4 text-white rounded-full shadow-lg z-50
        bg-gradient-to-r ${colors.bg}
        top-1/2 transform -translate-y-1/2
        md:bottom-8 md:top-auto md:transform-none p-3`
      }
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
