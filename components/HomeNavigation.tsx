"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaCogs, 
  FaBrain, 
  FaRocket,
  FaWhatsapp
} from "react-icons/fa";

const HomeNavigation = () => {
  const pathname = usePathname();

  // Colores por servicio
  const serviceColors: Record<string, { border: string; icon: string; iconHover: string; text: string; textHover: string }> = {
    "/gerencias": {
      border: "#4A90E2", icon: "#4A90E2", iconHover: "#00F5D4", text: "#4A90E2", textHover: "#00F5D4"
    },
    "/redes-membresia": {
      border: "#FF69B4", icon: "#FF69B4", iconHover: "#DB7093", text: "#FF69B4", textHover: "#DB7093"
    },
    "/gestion-contenidos": {
      border: "#22c55e", icon: "#22c55e", iconHover: "#14532d", text: "#22c55e", textHover: "#14532d"
    },
    "/ux-desarrollo": {
      border: "#3498DB", icon: "#3498DB", iconHover: "#2980B9", text: "#3498DB", textHover: "#2980B9"
    },
    "/funnels-leads": {
      border: "#00C9A7", icon: "#00C9A7", iconHover: "#4A90E2", text: "#00C9A7", textHover: "#4A90E2"
    },
    "/entrenamiento-ejecutivo": {
      border: "#FFB75E", icon: "#FFB75E", iconHover: "#ED8F03", text: "#FFB75E", textHover: "#ED8F03"
    },
    "default": {
      border: "#A259F7", icon: "#A259F7", iconHover: "#7C3AED", text: "#A259F7", textHover: "#7C3AED"
    }
  };

  // Detectar servicio activo por ruta
  const activeService = Object.keys(serviceColors).find((route) => pathname.startsWith(route)) || "default";
  const colors = serviceColors[activeService];

  const navItems = [
    { 
      href: "/", 
      icon: <FaCogs className={`transition-transform duration-300 group-hover:rotate-180 text-[${colors.icon}] group-hover:text-[${colors.iconHover}]`} />, 
      label: "Home" 
    },
    { 
      href: "/#solutions", 
      icon: <FaBrain className={`transition-transform duration-300 group-hover:scale-110 text-[${colors.icon}] group-hover:text-[${colors.iconHover}]`} />, 
      label: "Soluciones" 
    },
    { 
      href: "/novedades-tech", 
      icon: <FaRocket className={`transition-transform duration-300 group-hover:scale-110 text-[${colors.icon}] group-hover:text-[${colors.iconHover}]`} />, 
      label: "Tech News" 
    },
    { 
      href: "/contacto", 
      icon: <FaWhatsapp className={`transition-transform duration-300 group-hover:rotate-12 text-[${colors.icon}] group-hover:text-[${colors.iconHover}]`} />, 
      label: "Contacto" 
    },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/#solutions') {
      return pathname === '/' && typeof window !== 'undefined' && window.location.hash === '#solutions';
    }
    return pathname && href && href !== '/' && href !== '/#solutions' && pathname.startsWith(href.split('#')[0]);
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`flex justify-center py-3 sm:py-4 mb-4 sm:mb-6 md:mb-8 lg:mb-10 space-x-3 sm:space-x-4 bg-transparent rounded-full w-[90%] max-w-3xl mx-auto border shadow-glow`} style={{ borderColor: colors.border }}>
      {navItems.map((item) => (
        <Link 
          key={item.href}
          href={item.href}
          onClick={(e) => item.href.includes('#') && handleNavClick(item.href, e)}
          className="group flex flex-col items-center cursor-pointer"
        >
          <div
            className="text-xl sm:text-2xl mx-2 sm:mx-3 transition-all duration-300"
            style={{ color: colors.border }}
          >
            {item.icon}
          </div>
          <span
            className="text-[10px] sm:text-xs transition-colors duration-300"
            style={{ color: colors.border }}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </header>
  );
};

export default HomeNavigation;
