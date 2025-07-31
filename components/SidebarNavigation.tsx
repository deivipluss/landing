// SidebarNavigation.tsx
"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { FaUserTie, FaCogs, FaLightbulb, FaBlog } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const sidebarItems = [
  { id: "overview", label: "Visión General", icon: FaUserTie },
  { id: "metrics", label: "Métricas", icon: FaCogs },
  { id: "features", label: "Plataformas", icon: FaLightbulb },
  { id: "blog", label: "Blog", icon: FaBlog }
];

const serviceColors = {
  "/gerencias": {
    border: "#4A90E2", bg: "from-[#4A90E2] to-[#00F5D4]", icon: "#4A90E2", iconHover: "#00F5D4", text: "#4A90E2", textHover: "#00F5D4"
  },
  "/redes-membresia": {
    border: "#FF69B4", bg: "from-[#FF69B4] to-[#DB7093]", icon: "#FF69B4", iconHover: "#DB7093", text: "#FF69B4", textHover: "#DB7093"
  },
  "/gestion-contenidos": {
    border: "#22c55e", bg: "from-[#22c55e] to-[#14532d]", icon: "#22c55e", iconHover: "#14532d", text: "#22c55e", textHover: "#14532d"
  },
  "/ux-desarrollo": {
    border: "#3498DB", bg: "from-[#3498DB] to-[#2980B9]", icon: "#3498DB", iconHover: "#2980B9", text: "#3498DB", textHover: "#2980B9"
  },
  "/funnels-leads": {
    border: "#00C9A7", bg: "from-[#00C9A7] to-[#4A90E2]", icon: "#00C9A7", iconHover: "#4A90E2", text: "#00C9A7", textHover: "#4A90E2"
  },
  "/entrenamiento-ejecutivo": {
    border: "#FFB75E", bg: "from-[#FFB75E] to-[#ED8F03]", icon: "#FFB75E", iconHover: "#ED8F03", text: "#FFB75E", textHover: "#ED8F03"
  },
  default: {
    border: "#A259F7", bg: "from-[#A259F7] to-[#7C3AED]", icon: "#A259F7", iconHover: "#7C3AED", text: "#A259F7", textHover: "#7C3AED"
  }
};

// Mensajes de WhatsApp personalizados por ruta
const whatsappMessages: Record<string, string> = {
  "/gerencias": "Quiero contratar servicios de Gerencias",
  "/redes-membresia": "Quiero contratar Redes y Membresía",
  "/gestion-contenidos": "Quiero contratar Gestión de Contenidos",
  default: "Quiero más información"
};

interface SidebarNavigationProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  menu?: Array<{
    id: string;
    label: string;
    icon: React.ReactNode;
  }>;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ activeSection, setActiveSection, menu }) => {
  const pathname = usePathname();
  const routeKey = Object.keys(serviceColors).find((route) => pathname.startsWith(route)) || "default";
  const colors = serviceColors[routeKey as keyof typeof serviceColors];
  const message = whatsappMessages[routeKey as keyof typeof whatsappMessages] || whatsappMessages.default;
  const whatsappLink = `https://wa.me/51989843709?text=${encodeURIComponent(message)}`;
  const items = menu ?? sidebarItems;

  // Detectar tamaño de pantalla (mobile vs desktop)
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animación de entrada
  const sidebarMotion = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay: 0.5 }
  };
  const bottomBarMotion = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 0.7 }
  };

  // Render mobile bottom bar
  if (isMobile) {
    return (
      <motion.div
        {...bottomBarMotion}
        className="fixed bottom-4 left-0 right-0 z-50 flex justify-center md:hidden"
      >
        <div className="px-4 py-3 bg-[#1A1A2E]/90 backdrop-blur-lg rounded-full flex gap-3 border border-blue-500/20 shadow-lg items-center">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`p-2 rounded-full ${isActive ? "bg-[#4A90E2] text-white" : "text-gray-400 hover:text-white"}`}
                style={isActive ? { background: colors.icon, color: '#fff' } : { color: colors.text }}
                aria-label={item.label}
              >
                {React.isValidElement(Icon)
                  ? Icon
                  : typeof Icon === "function"
                  ? <Icon />
                  : null}
              </button>
            );
          })}
          {/* Botón Contratar Ahora */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-green-400 text-green-400 flex items-center justify-center animate-[heartbeat_1.5s_infinite] shadow-none hover:bg-green-50/10 transition-all"
            style={{ boxShadow: '0 0 0 0.1rem #25D36640' }}
            aria-label="Contactar por WhatsApp"
          >
            <FiMessageCircle size={22} />
          </a>
          <style>{`
            @keyframes heartbeat {
              0%, 100% { transform: scale(1); }
              10%, 30% { transform: scale(1.12); }
              20%, 40% { transform: scale(0.95); }
              50% { transform: scale(1.08); }
              60% { transform: scale(1); }
            }
          `}</style>
        </div>
      </motion.div>
    );
  }

  // Render desktop sidebar (centrado vertical y borde visible)
  return (
    <div className="hidden md:block fixed left-4 lg:left-10 top-1/2 transform -translate-y-1/2 z-40">
      <motion.div
        {...sidebarMotion}
        className="py-6 px-3 bg-[#1A1A2E]/60 backdrop-blur-md rounded-xl flex flex-col gap-6 border border-solid"
        style={{ borderColor: colors.border }}
      >
        {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <div key={item.id} className="relative group">
            <button
              onClick={() => setActiveSection(item.id)}
              className={`p-3 rounded-lg group/icon ${isActive ? "text-white" : "bg-transparent"}`}
              style={isActive ? { background: colors.icon, color: '#fff' } : { color: colors.text }}
              aria-label={item.label}
            >
              <span
                className={isActive ? "text-white" : "transition-colors"}
                style={!isActive ? { color: colors.icon } : { color: '#fff' }}
              >
                {React.isValidElement(Icon)
                  ? Icon
                  : typeof Icon === "function"
                  ? <Icon />
                  : null}
              </span>
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-[#1A1A2E] text-white text-xs whitespace-nowrap rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {item.label}
            </div>
            {isActive && (
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5" style={{ background: colors.icon }}></div>
            )}
          </div>
        );
      })}
      {/* Botón de WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-lg border border-green-400 text-green-400 flex items-center justify-center animate-[heartbeat_1.5s_infinite] shadow-none hover:bg-green-50/10 transition-all mt-4"
        style={{ boxShadow: '0 0 0 0.1rem #25D36640' }}
        aria-label="Contactar por WhatsApp"
      >
        <FiMessageCircle size={24} />
      </a>
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10%, 30% { transform: scale(1.12); }
          20%, 40% { transform: scale(0.95); }
          50% { transform: scale(1.08); }
          60% { transform: scale(1); }
        }
      `}</style>
    </motion.div>
  </div>
  );
};

export default SidebarNavigation;
