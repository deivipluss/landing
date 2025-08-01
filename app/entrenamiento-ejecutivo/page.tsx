"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import HomeNavigation from "@/components/HomeNavigation";
import SidebarNavigation from "@/components/SidebarNavigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { FaChalkboardTeacher, FaUsersCog, FaLightbulb, FaHandsHelping } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import Link from "next/link";

// Preguntas frecuentes para Entrenamiento Ejecutivo
const faqTrain = [
  {
    question: "¿Qué temas cubren?",
    answer: "Liderazgo, toma de decisiones, comunicación efectiva y gestión de equipos.",
  },
  {
    question: "¿Modalidad de capacitación?",
    answer: "Online, presencial o mixto, según tus necesidades.",
  },
  {
    question: "¿Incluye certificación?",
    answer: "Sí, entregamos certificado con aval académico.",
  },
];

export default function EntrenamientoEjecutivoPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const { scrollY } = useScroll();
  const overviewRef = useRef<HTMLDivElement>(null);
  const topicsRef = useRef<HTMLDivElement>(null);
  const formatRef = useRef<HTMLDivElement>(null);
  const perksRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return scrollY.onChange(() => {
      const sections = [
        { ref: overviewRef, id: "overview" },
        { ref: topicsRef, id: "topics" },
        { ref: formatRef, id: "format" },
        { ref: perksRef, id: "perks" },
        { ref: faqRef, id: "faq" },
      ];
      const current = sections.find(sec => {
        if (sec.ref.current) {
          const { top, bottom } = sec.ref.current.getBoundingClientRect();
          return top <= 100 && bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current.id);
    });
  }, [scrollY]);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sidebarMenu = [
    { id: "overview", label: "Visión General", icon: <FaChalkboardTeacher size={20} /> },
    { id: "topics", label: "Temas", icon: <FaLightbulb size={20} /> },
    { id: "format", label: "Modalidad", icon: <FaUsersCog size={20} /> },
    { id: "perks", label: "Beneficios", icon: <FaHandsHelping size={20} /> },
    { id: "faq", label: "FAQ", icon: <FiHelpCircle size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <SidebarNavigation menu={sidebarMenu} activeSection={activeSection} setActiveSection={scrollToSection} />
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative md:ml-28 lg:ml-40">
        <HomeNavigation />
        {/* Hero Section */}
        <section id="overview" ref={overviewRef} className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#FFB75E] via-[#ED8F03] to-[#1A1A2E] px-6 md:px-12 py-16">
          <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] text-transparent bg-clip-text">
            Entrenamiento Ejecutivo
          </motion.h1>
          <p className="text-lg md:text-2xl max-w-3xl mb-8 text-gray-200">
            Desarrolla las competencias clave para liderar con impacto.
          </p>
          <Link href="#topics" onClick={() => scrollToSection("topics")} className="px-6 py-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300">
            Ver Temas
          </Link>
        </section>
        {/* Temas Principales */}
        <section id="topics" ref={topicsRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#FFB75E]">Temas Principales</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-2xl mx-auto">
            <li>Liderazgo Estratégico</li>
            <li>Comunicación Eficaz</li>
            <li>Toma de Decisiones</li>
          </ul>
        </section>
        {/* Modalidad */}
        <section id="format" ref={formatRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#FFB75E]">Modalidad de Capacitación</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-2xl mx-auto">
            <li>Online, presencial o mixto</li>
            <li>Materiales interactivos y casos prácticos</li>
            <li>Soporte y seguimiento post-capacitación</li>
          </ul>
        </section>
        {/* Beneficios */}
        <section id="perks" ref={perksRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#FFB75E]">Beneficios</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-2xl mx-auto">
            <li>Certificación reconocida</li>
            <li>Networking con líderes</li>
            <li>Acceso a recursos exclusivos</li>
          </ul>
        </section>
        {/* FAQ */}
        <section id="faq" ref={faqRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#FFB75E]">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqTrain.map((faq, idx) => (
              <div key={idx} className="border-b border-[#FFB75E] pb-4">
                <h4 className="text-lg font-semibold mb-2 text-[#FFB75E]">{faq.question}</h4>
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
