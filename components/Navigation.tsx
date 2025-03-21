"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCogs, FaBrain, FaRocket, FaWhatsapp } from "react-icons/fa";

export const navItems = [
  { href: "/", icon: <FaCogs />, label: "Home" },
  { href: "/#solutions", icon: <FaBrain />, label: "Soluciones" },
  { href: "/novedades-tech", icon: <FaRocket />, label: "Tech News" },
  { href: "/contacto", icon: <FaWhatsapp />, label: "Contacto" },
];

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const pathname = usePathname();

  return (
    <header className={`flex justify-center py-6 mt-8 space-x-6 bg-[#1A1A2E]/80 shadow-glow rounded-full w-[90%] max-w-3xl mx-auto ${className}`}>
      {navItems.map((item) => {
        const isActive = pathname === item.href || 
                         (item.href === "/#solutions" && pathname === "/" && window?.location?.hash === "#solutions");
        
        return (
          <Link 
            key={item.href} 
            href={item.href} 
            className={`group transition-all duration-300 ${isActive ? "scale-125" : ""}`}
          >
            <div className={`text-2xl ${isActive ? "text-white" : "text-[#FF5C5C]"} hover:text-white`}>
              {item.icon}
              <span className="sr-only">{item.label}</span>
            </div>
          </Link>
        );
      })}
    </header>
  );
};

export default Navigation;
