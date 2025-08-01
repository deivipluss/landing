"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import HomeNavigation from "@/components/HomeNavigation";
import SidebarNavigation from "@/components/SidebarNavigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { FaFunnelDollar, FaChartLine, FaRobot, FaLink } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import Link from "next/link";

// Preguntas frecuentes para Funnels & Leads IA
const faqFunnels = [
  {
    question: "¿Cómo optimizan los embudos de venta?",
    answer: "Analizamos el comportamiento de usuarios y ajustamos continuamente para maximizar conversiones.",
  },
  {
    question: "¿Qué tipo de automatizaciones implementan?",
    answer: "Workflows de email, chatbots y triggers personalizados según la etapa del lead.",
  },
  {
    question: "¿Se integra con CRM?",
    answer: "Sí, conectamos con tu CRM y sistemas de analítica para un flujo de datos unificado.",
  },
];

export default function FunnelsLeadsPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const { scrollY } = useScroll();
  const overviewRef = useRef<HTMLDivElement>(null);
  const funnelsRef = useRef<HTMLDivElement>(null);
  const automationRef = useRef<HTMLDivElement>(null);
  const integrationRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return scrollY.onChange(() => {
      const sections = [
        { ref: overviewRef, id: "overview" },
        { ref: funnelsRef, id: "funnels" },
        { ref: automationRef, id: "automation" },
        { ref: integrationRef, id: "integrations" },
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
    { id: "overview", label: "Visión General", icon: <FaFunnelDollar size={20} /> },
    { id: "funnels", label: "Embudos", icon: <FaChartLine size={20} /> },
    { id: "automation", label: "Automatización", icon: <FaRobot size={20} /> },
    { id: "integrations", label: "Integraciones IA", icon: <FaLink size={20} /> },
    { id: "faq", label: "FAQ", icon: <FiHelpCircle size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <SidebarNavigation menu={sidebarMenu} activeSection={activeSection} setActiveSection={scrollToSection} />
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative md:ml-28 lg:ml-40">
        <HomeNavigation />
        {/* Hero Section */}
        <section id="overview" ref={overviewRef} className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#00C9A7] via-[#4A90E2] to-[#1A1A2E] px-6 md:px-12 py-16">
          <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] text-transparent bg-clip-text">
            Funnels & Leads IA
          </motion.h1>
          <p className="text-lg md:text-2xl max-w-3xl mb-8 text-gray-200">
            Optimiza tu embudo de ventas con automatización e inteligencia artificial para captar y convertir más clientes.
          </p>
          <Link href="#funnels" onClick={() => scrollToSection("funnels")} className="px-6 py-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300">
            Descubrir servicios
          </Link>
        </section>
        {/* Embudos */}
        <section id="funnels" ref={funnelsRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#00C9A7]">Diseño de Embudos</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-2xl mx-auto">
            <li>Embudo personalizado para tu negocio</li>
            <li>Segmentación y nurturing de leads</li>
            <li>Optimización continua basada en métricas</li>
          </ul>
        </section>
        {/* Automatización */}
        <section id="automation" ref={automationRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#00C9A7]">Automatización Inteligente</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-2xl mx-auto">
            <li>Workflows de email y notificaciones</li>
            <li>Chatbots y respuestas automáticas</li>
            <li>Triggers basados en comportamiento</li>
          </ul>
        </section>
        {/* Integraciones IA */}
        <section id="integrations" ref={integrationRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#00C9A7]">Integraciones y IA</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-2xl mx-auto">
            <li>Conexión con CRM y herramientas de analítica</li>
            <li>Scoring de leads con IA</li>
            <li>APIs flexibles y seguras</li>
          </ul>
        </section>
        {/* FAQ */}
        <section id="faq" ref={faqRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#00C9A7]">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqFunnels.map((faq, idx) => (
              <div key={idx} className="border-b border-[#00C9A7] pb-4">
                <h4 className="text-lg font-semibold mb-2 text-[#00C9A7]">{faq.question}</h4>
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
