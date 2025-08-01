"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeNavigation from "@/components/HomeNavigation";
import SidebarNavigation from "@/components/SidebarNavigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { FaDownload, FaRocket, FaFunnelDollar, FaChartLine, FaClipboard, FaWpforms, FaSync } from "react-icons/fa";
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

export default function Page() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.2]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Section refs
  const heroRef = useRef<HTMLDivElement>(null);
  const problemsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const persuasionRef = useRef<HTMLDivElement>(null);
  const leadMagnetRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>("hero");
  const scrollToSection = (id: string) => { setActiveSection(id); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  useEffect(() => {
    const sections = [
      { id: 'hero', ref: heroRef },
      { id: 'problems', ref: problemsRef },
      { id: 'services', ref: servicesRef },
      { id: 'metrics', ref: metricsRef },
      { id: 'roadmap', ref: roadmapRef },
      { id: 'trust', ref: trustRef },
      { id: 'persuasion', ref: persuasionRef },
      { id: 'leadMagnet', ref: leadMagnetRef },
      { id: 'faq', ref: faqRef },
      { id: 'final', ref: finalRef },
    ];
    const handle = () => {
      for (let s of sections) {
        if (s.ref.current) {
          const rect = s.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { setActiveSection(s.id); break; }
        }
      }
    };
    window.addEventListener('scroll', handle); return () => window.removeEventListener('scroll', handle);
  }, []);

  const sidebarMenu = [
    { id: 'hero', label: 'Inicio', icon: <FaFunnelDollar /> },
    { id: 'problems', label: 'Retos', icon: <FaClipboard size={20} /> },
    { id: 'services', label: 'Servicios', icon: <FaWpforms size={20} /> },
    { id: 'metrics', label: 'Métricas', icon: <FaChartLine /> },
    { id: 'roadmap', label: 'Roadmap', icon: <FaRocket /> },
    { id: 'trust', label: 'Confianza', icon: <FaChartLine /> },
    { id: 'persuasion', label: 'Persuasión', icon: <FaSync size={20} /> },
    { id: 'leadMagnet', label: 'Lead Magnet', icon: <FaDownload /> },
    { id: 'faq', label: 'FAQ', icon: <FaClipboard size={20} /> },
    { id: 'final', label: 'Contacto', icon: <FaRocket /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-800 to-gray-900">
      <SidebarNavigation menu={sidebarMenu} activeSection={activeSection} setActiveSection={scrollToSection} />
      <div className="container mx-auto pt-16 relative md:ml-28 px-4">
        <HomeNavigation />

        {/* 1. Hero */}
        <section id="hero" ref={heroRef} className="py-20 text-center">
          <motion.h1 style={{ opacity, scale }} className="text-5xl font-bold text-white mb-4">
            Funnels estratégicos para convertir visitantes en leads
          </motion.h1>
          <p className="text-lg text-gray-300 mb-8">
            Captura, segmenta y automatiza tus leads con eficiencia y resultados medibles.
          </p>
          <button onClick={() => scrollToSection('leadMagnet')} className="px-6 py-3 bg-blue-500 text-white rounded-full">
            Descarga tu plantilla de funnel
          </button>
        </section>

        {/* 2. Retos y Valor */}
        <section id="problems" ref={problemsRef} className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-white text-center mb-8">Retos Comunes</h2>
            <ul className="max-w-2xl mx-auto text-gray-300 space-y-2 list-disc list-inside">
              <li>Bajo ratio de captación</li>
              <li>Abandono en formularios</li>
              <li>Falta de nutrición de leads</li>
            </ul>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-gray-700 rounded-lg text-white">Proceso automatizado</div>
              <div className="p-6 bg-gray-700 rounded-lg text-white">Segmentación inteligente</div>
              <div className="p-6 bg-gray-700 rounded-lg text-white">Seguimiento medible</div>
            </div>
          </div>
        </section>

        {/* 3. Servicios */}
        <section id="services" ref={servicesRef} className="py-16 bg-gray-800">
          <h2 className="text-3xl text-white text-center mb-8">Servicios del Embudo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Attraction */}
            <div className="p-6 bg-gray-700 rounded-lg text-white"><FaRocket /> Atracción y tráfico</div>
            <div className="p-6 bg-gray-700 rounded-lg text-white"><FaDownload /> Lead Magnet</div>
            <div className="p-6 bg-gray-700 rounded-lg text-white"><FaFunnelDollar /> Formularios persuasivos</div>
            <div className="p-6 bg-gray-700 rounded-lg text-white"><FaClipboard /> Nurturing automatizado</div>
            <div className="p-6 bg-gray-700 rounded-lg text-white"><FaChartLine /> Reportes y optimización</div>
          </div>
        </section>

        {/* 4. Métricas */}
        <section id="metrics" ref={metricsRef} className="py-16">
          <h2 className="text-3xl text-white text-center mb-8">Métricas Clave</h2>
          <div className="max-w-4xl mx-auto text-gray-300">
            <p className="mb-4">Monitorea el rendimiento de tus embudos con métricas como:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Tasa de apertura de emails</li>
              <li>CTR en formularios</li>
              <li>Conversión por segmento</li>
            </ul>
          </div>
        </section>

        {/* 5. Roadmap */}
        <section id="roadmap" ref={roadmapRef} className="py-16 bg-gray-800">
          <h2 className="text-3xl text-white text-center mb-8">Nuestro Roadmap</h2>
          <div className="max-w-3xl mx-auto text-gray-300">
            <p className="mb-4">Fases de implementación:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Auditoría y análisis inicial</li>
              <li>Diseño y configuración de embudos</li>
              <li>Implementación de automatizaciones</li>
              <li>Capacitación y entrega de documentación</li>
              <li>Soporte y optimización continua</li>
            </ol>
          </div>
        </section>

        {/* 6. Confianza */}
        <section id="trust" ref={trustRef} className="py-16">
          <h2 className="text-3xl text-white text-center mb-8">Construyendo Confianza</h2>
          <div className="max-w-2xl mx-auto text-gray-300">
            <p className="mb-4">Estrategias para aumentar la confianza del cliente:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Testimonios y casos de éxito</li>
              <li>Certificaciones y sellos de confianza</li>
              <li>Políticas claras de privacidad y seguridad</li>
            </ul>
          </div>
        </section>

        {/* 7. Persuasión */}
        <section id="persuasion" ref={persuasionRef} className="py-16 bg-gray-800">
          <h2 className="text-3xl text-white text-center mb-8">Técnicas de Persuasión</h2>
          <div className="max-w-2xl mx-auto text-gray-300">
            <p className="mb-4">Elementos persuasivos para tus embudos:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Copywriting enfocado en beneficios</li>
              <li>Urgencia y escasez</li>
              <li>Pruebas sociales y testimonios</li>
            </ul>
          </div>
        </section>

        {/* 8. Lead Magnet */}
        <section id="leadMagnet" ref={leadMagnetRef} className="py-16">
          <h2 className="text-3xl text-white text-center mb-8">Tu Lead Magnet</h2>
          <div className="max-w-2xl mx-auto text-gray-300">
            <p className="mb-4">Ofrece un imán de leads irresistible:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Plantillas gratuitas</li>
              <li>Ebooks y guías</li>
              <li>Webinars y cursos introductorios</li>
            </ul>
          </div>
        </section>

        {/* 9. FAQ */}
        <section id="faq" ref={faqRef} className="py-16 bg-gray-800">
          <h2 className="text-3xl text-white text-center mb-8">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqFunnels.map((faq, idx) => (
              <div key={idx} className="border-b border-[#00C9A7] pb-4">
                <h4 className="text-lg font-semibold mb-2 text-[#00C9A7]">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Final CTA */}
        <section id="final" ref={finalRef} className="py-20 text-center bg-gradient-to-br from-[#00C9A7] to-[#4A90E2]">
          <h2 className="text-4xl font-bold text-white mb-4">Listo para transformar tu negocio?</h2>
          <p className="text-lg text-white mb-8">
            Contáctanos y descubre cómo nuestros embudos de venta pueden llevar tu negocio al siguiente nivel.
          </p>
          <Link href="/contacto" className="px-8 py-4 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-all duration-300">
            Habla con un experto
          </Link>
        </section>

        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}
