// Replica exacta de la página de Gerencias, adaptada para Gestión de Contenidos
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CreatorMetricsChart } from '../redes-membresia/CreatorMetricsChart';
import { creatorMetrics, testimonials, platformFeatures, faqData, blogPosts } from '../redes-membresia/data';
import { FaWhatsapp, FaArrowUp, FaBlog, FaUserTie, FaCogs, FaLightbulb } from 'react-icons/fa';
import Link from 'next/link';
import HomeNavigation from '@/components/HomeNavigation';

export default function GestionContenidos() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const { scrollY, scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Referencias para las secciones
  const overviewRef = useRef<HTMLElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return scrollY.onChange(() => {
      setShowScrollTop(scrollY.get() > 100);
      const sections = [
        { ref: overviewRef, id: "overview" },
        { ref: metricsRef, id: "metrics" },
        { ref: testimonialsRef, id: "testimonials" },
        { ref: featuresRef, id: "features" },
        { ref: faqRef, id: "faq" },
        { ref: blogRef, id: "blog" }
      ];
      const currentSection = sections.find(section => {
        if (section.ref.current) {
          const { top, bottom } = section.ref.current.getBoundingClientRect();
          return top <= 100 && bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1A1A2E] flex flex-col overflow-hidden">
      {/* Barra lateral de navegación (solo escritorio) */}
      <div className="hidden md:block fixed left-4 lg:left-10 top-1/2 transform -translate-y-1/2 z-40">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="py-6 px-3 bg-gradient-to-br from-[#22c55e] to-[#14532d] backdrop-blur-md rounded-xl flex flex-col gap-6 border border-[#22c55e]/30"
        >
          {[
            { id: "overview", label: "Visión General", icon: <FaUserTie className="text-[#A259F7] group-hover/icon:text-[#7C3AED] transition-colors" /> },
            { id: "metrics", label: "Métricas", icon: <FaCogs className="text-[#A259F7] group-hover/icon:text-[#7C3AED] transition-colors" /> },
            { id: "features", label: "Plataformas", icon: <FaLightbulb className="text-[#A259F7] group-hover/icon:text-[#7C3AED] transition-colors" /> },
            { id: "blog", label: "Blog", icon: <FaBlog className="text-[#A259F7] group-hover/icon:text-[#7C3AED] transition-colors" /> }
          ].map(item => (
            <div key={item.id} className="relative group">
              <button 
                onClick={() => {
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`p-3 rounded-lg group/icon ${activeSection === item.id ? "bg-[#22c55e] text-white" : "bg-transparent text-[#14532d]"}`}
              >
                <span className={activeSection === item.id ? "text-white" : "text-[#14532d] group-hover/icon:text-[#22c55e] transition-colors"}>
                  {item.icon}
                </span>
              </button>
              <div className="absolute left-full ml-2 px-2 py-1 bg-[#1A1A2E] text-white text-xs whitespace-nowrap rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {item.label}
              </div>
              {activeSection === item.id && (
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-[#22c55e]"></div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        {/* Hero Section */}
        <section ref={overviewRef} id="overview" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#22c55e] to-[#14532d] text-transparent bg-clip-text mb-6"
          >
            Gestión de Contenidos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#22c55e] mb-8"
          >
            Optimiza tu estrategia y presencia digital con nuestro equipo experto en gestión de contenidos
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-[#22c55e] to-[#14532d] text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform"
          >
            Comienza tu Transformación
          </motion.button>
        </div>
      </section>
      {/* ...resto igual que gerencias... */}
      {/* Footer */}
      <footer className="bg-[#14532d]/80 backdrop-blur-lg text-center py-6 sm:py-8 text-[#22c55e] text-xs sm:text-sm mt-12 sm:mt-16 border-t border-[#22c55e]/30">
        © 2025 - @Deivipluss Todos los derechos reservados.
      </footer>
      </div>
    </div>
  );
}
