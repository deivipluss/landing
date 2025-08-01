"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeNavigation from "@/components/HomeNavigation";
import SidebarNavigation from "@/components/SidebarNavigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { FaPaintBrush, FaPencilRuler, FaDesktop, FaServer } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import Link from "next/link";

// Preguntas frecuentes para UI/UX
const faqUI = [
  {
    question: "¿Qué metodología usan para UX?",
    answer: "Aplicamos Design Thinking y Lean UX para entender al usuario y validar ideas rápidamente.",
  },
  {
    question: "¿Entregan prototipos interactivos?",
    answer: "Sí, creamos prototipos de alta fidelidad en Figma o en herramientas interactivas que conectan con stakeholders.",
  },
  {
    question: "¿Integran accesibilidad?",
    answer: "Diseñamos con buenas prácticas de accesibilidad WCAG 2.1 para garantizar experiencias inclusivas.",
  },
];

export default function UxDesarrolloPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const { scrollY } = useScroll();
  const overviewRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Actualizar sección activa según scroll
  useEffect(() => {
    return scrollY.onChange(() => {
      const sections = [
        { ref: overviewRef, id: "overview" },
        { ref: designRef, id: "design" },
        { ref: frontendRef, id: "frontend" },
        { ref: backendRef, id: "backend" },
        { ref: faqRef, id: "faq" },
      ];
      const current = sections.find((sec) => {
        if (sec.ref.current) {
          const { top, bottom } = sec.ref.current.getBoundingClientRect();
          return top <= 100 && bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current.id);
    });
  }, [scrollY]);

  // Función para scroll suave
  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Menú lateral personalizado
  const sidebarMenu = [
    { id: "overview", label: "Visión General", icon: <FaPaintBrush size={20} /> },
    { id: "design", label: "Diseño", icon: <FaPencilRuler size={20} /> },
    { id: "frontend", label: "Frontend", icon: <FaDesktop size={20} /> },
    { id: "backend", label: "Backend", icon: <FaServer size={20} /> },
    { id: "faq", label: "FAQ", icon: <FiHelpCircle size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <SidebarNavigation
        menu={sidebarMenu}
        activeSection={activeSection}
        setActiveSection={scrollToSection}
      />
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative md:ml-28 lg:ml-40">
        <HomeNavigation />

        {/* Sección Hero */}
        <section
          id="overview"
          ref={overviewRef}
          className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-16 text-center bg-gradient-to-br from-[#3498DB] via-[#2980B9] to-[#1A1A2E]"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#00F5D4] to-[#3498DB] text-transparent bg-clip-text"
            style={{ opacity: 1, scale: 1 }}
          >
            UX/UI & Desarrollo
          </motion.h1>
          <p className="text-lg md:text-2xl max-w-3xl mb-8 text-gray-200">
            Creamos experiencias digitales intuitivas y potentes.
          </p>
          <Link
            href="#design"
            onClick={() => scrollToSection("design")}
            className="px-6 py-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300"
          >
            Explorar Servicios
          </Link>
        </section>

        {/* Diseño */}
        <section id="design" ref={designRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#3498DB]">
            Servicios de Diseño
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="p-6 border border-[#3498DB] rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-[#3498DB]">
                Investigación y Arquitectura
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Research de usuarios y análisis de métricas</li>
                <li>Wireframes y flujos de usuario</li>
                <li>Mapas de experiencia y journey mapping</li>
              </ul>
            </div>
            <div className="p-6 border border-[#3498DB] rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-[#3498DB]">
                Diseño de Interfaces
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>UI visual y guías de estilo</li>
                <li>Prototipos interactivos en Figma</li>
                <li>Diseño responsivo y accesible</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Frontend */}
        <section id="frontend" ref={frontendRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#3498DB]">
            Desarrollo Frontend
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-2xl mx-auto">
            <li>React, Next.js y Tailwind CSS</li>
            <li>Componentización y reuse</li>
            <li>Optimización de rendimiento y SEO</li>
          </ul>
        </section>

        {/* Backend */}
        <section id="backend" ref={backendRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#3498DB]">
            Desarrollo Backend
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-2xl mx-auto">
            <li>Node.js, Express y API REST</li>
            <li>Bases de datos SQL y NoSQL</li>
            <li>Autenticación y seguridad</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" ref={faqRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#3498DB]">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqUI.map((faq, idx) => (
              <div key={idx} className="border-b border-[#3498DB] pb-4">
                <h4 className="text-lg font-semibold mb-2 text-[#3498DB]">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}
