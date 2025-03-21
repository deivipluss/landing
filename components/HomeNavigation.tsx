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

  const navItems = [
    { 
      href: "/", 
      icon: <FaCogs className="transition-transform duration-300 group-hover:rotate-180" />, 
      label: "Home" 
    },
    { 
      href: "/#solutions", 
      icon: <FaBrain className="transition-transform duration-300 group-hover:scale-110" />, 
      label: "Soluciones" 
    },
    { 
      href: "/novedades-tech", 
      icon: <FaRocket className="transition-transform duration-300 group-hover:scale-110" />, 
      label: "Tech News" 
    },
    { 
      href: "/contacto", 
      icon: <FaWhatsapp className="transition-transform duration-300 group-hover:rotate-12" />, 
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
    <div className="container mx-auto px-4 pt-4 sm:pt-6 md:pt-8">
      <header className="flex justify-center py-3 sm:py-4 mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12 space-x-3 sm:space-x-4 bg-[#1A1A2E]/80 backdrop-blur-lg shadow-glow rounded-full w-[90%] max-w-3xl mx-auto border border-[#4A90E2]/20">
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href}
            onClick={(e) => item.href.includes('#') && handleNavClick(item.href, e)}
            className="group flex flex-col items-center cursor-pointer"
          >
            <div className={`
              text-xl sm:text-2xl mx-2 sm:mx-3
              ${isActive(item.href) ? 'text-[#4A90E2]' : 'text-[#FF5C5C]'}
              group-hover:text-[#4A90E2] transition-all duration-300
            `}>
              {item.icon}
            </div>
            <span className="text-[10px] sm:text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors duration-300">
              {item.label}
            </span>
          </Link>
        ))}
      </header>
    </div>
  );
};

export default HomeNavigation;
