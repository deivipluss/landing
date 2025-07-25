import Footer from "@/components/Footer";
// Replica exacta de la página de Gerencias, adaptada para Gestión de Contenidos
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CreatorMetricsChart } from '../redes-membresia/CreatorMetricsChart';
import { creatorMetrics, testimonials, platformFeatures, faqData, blogPosts } from '../redes-membresia/data';
import { FaWhatsapp, FaArrowUp, FaBlog, FaUserTie, FaCogs, FaLightbulb } from 'react-icons/fa';
import Link from 'next/link';
import HomeNavigation from '@/components/HomeNavigation';
import SidebarNavigation from '@/components/SidebarNavigation';

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
        <SidebarNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
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
      <Footer />
      </div>
    </div>
  );
}
