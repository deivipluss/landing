// SidebarNavigation.tsx
"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { FaUserTie, FaCogs, FaLightbulb, FaBlog } from "react-icons/fa";
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

const SidebarNavigation = ({ activeSection, setActiveSection }) => {
  const pathname = usePathname();
  const colors = serviceColors[
    Object.keys(serviceColors).find((route) => pathname.startsWith(route)) || "default"
  ];

  return (
    <div className={`py-6 px-3 bg-gradient-to-br ${colors.bg} backdrop-blur-md rounded-xl flex flex-col gap-6 border`} style={{ borderColor: colors.border }}>
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className="relative group">
            <button
              onClick={() => setActiveSection(item.id)}
              className={`p-3 rounded-lg group/icon ${activeSection === item.id ? `bg-[${colors.icon}] text-white` : `bg-transparent text-[${colors.text}]`}`}
            >
              <span className={activeSection === item.id ? "text-white" : `text-[${colors.icon}] group-hover/icon:text-[${colors.iconHover}] transition-colors`}>
                <Icon />
              </span>
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-[#1A1A2E] text-white text-xs whitespace-nowrap rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {item.label}
            </div>
            {activeSection === item.id && (
              <div className={`absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5`} style={{ background: colors.icon }}></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarNavigation;
