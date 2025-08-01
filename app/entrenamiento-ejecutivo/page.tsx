"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeNavigation from "@/components/HomeNavigation";
import SidebarNavigation from "@/components/SidebarNavigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { FaChalkboardTeacher, FaUsersCog, FaLightbulb, FaHandsHelping, FaChartLine, FaChartBar, FaClipboardList, FaArrowUp } from "react-icons/fa";
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
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const heroRef = useRef<HTMLDivElement>(null);
  const retosRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const persuasionRef = useRef<HTMLDivElement>(null);
  const leadMagnetRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const scrollToSection = (id: string) => { setActiveSection(id); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block:'start' }); };

  useEffect(() => {
    const sections = [
      { id: 'hero', ref: heroRef },
      { id: 'retos', ref: retosRef },
      { id: 'services', ref: servicesRef },
      { id: 'impact', ref: impactRef },
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
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const sidebarMenu = [
    { id:'hero', label:'Inicio', icon:<FaChalkboardTeacher size={20}/> },
    { id:'retos', label:'Retos', icon:<FaLightbulb size={20}/> },
    { id:'services', label:'Servicios', icon:<FaUsersCog size={20}/> },
    { id:'impact', label:'Impacto', icon:<FaChartLine size={20}/> },
    { id:'roadmap', label:'Roadmap', icon:<FaChartBar size={20}/> },
    { id:'trust', label:'Confianza', icon:<FaHandsHelping size={20}/> },
    { id:'persuasion', label:'Persuasión', icon:<FaLightbulb size={20}/> },
    { id:'leadMagnet', label:'Lead Magnet', icon:<FaClipboardList size={20}/> },
    { id:'faq', label:'FAQ', icon:<FiHelpCircle size={20}/> },
    { id:'final', label:'Contacto', icon:<FaArrowUp size={20}/> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] overflow-hidden">
      <SidebarNavigation menu={sidebarMenu} activeSection={activeSection} setActiveSection={scrollToSection} />
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative md:ml-28 lg:ml-40">
        <HomeNavigation />
        {/* 1. Hero / Portada Inicial */}
        <section id="hero" ref={heroRef} className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.h1 style={{opacity, scale}} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Entrenamiento Ejecutivo de Alto Impacto
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
            Transforma tu liderazgo con resultados medibles y maximiza tu influencia estratégica.
          </p>
          <button onClick={() => scrollToSection('retos')} className="px-6 py-3 bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] text-white rounded-full hover:opacity-90 transition">
            Reserva tu sesión gratuita
          </button>
        </section>
        {/* 2. Retos del Ejecutivo + Propuesta de Valor */}
        <section id="retos" ref={retosRef} className="py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Retos del Ejecutivo</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300 mb-8">
              <div>👥 Liderazgo débil</div>
              <div>⚠️ Baja toma de decisiones</div>
              <div>🛠️ Gestión de equipos ineficiente</div>
              <div>🎯 Falta de dirección estratégica</div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Lo que conseguirás</h3>
            <div className="grid md:grid-cols-4 gap-6 text-gray-300">
              <div className="p-4 bg-gray-800 rounded">Mayor influencia</div>
              <div className="p-4 bg-gray-800 rounded">Claridad estratégica</div>
              <div className="p-4 bg-gray-800 rounded">Productividad del equipo</div>
              <div className="p-4 bg-gray-800 rounded">ROI en gestión</div>
            </div>
          </div>
        </section>
        {/* 3. Servicios dentro del Funnel */}
        <section id="services" ref={servicesRef} className="py-16 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Servicios del Programa</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300">
              <div className="p-6 bg-gray-700 rounded">✅ Evaluación 360° de liderazgo</div>
              <div className="p-6 bg-gray-700 rounded">🎓 Coaching individual intensivo</div>
              <div className="p-6 bg-gray-700 rounded">📚 Talleres ejecutivos personalizados</div>
              <div className="p-6 bg-gray-700 rounded">📊 Seguimiento con KPIs</div>
              <div className="p-6 bg-gray-700 rounded">🔄 Soporte trimestral</div>
            </div>
          </div>
        </section>
        {/* 4. Impacto y Métricas Tangibles */}
        <section id="impact" ref={impactRef} className="py-16">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-300">
            <h2 className="text-3xl font-bold text-white mb-8">Impacto y Métricas</h2>
            {/* Animated counters placeholder */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>+30% Efectividad</div>
              <div>-20% Conflictos internos</div>
              <div>+50% Satisfacción</div>
            </div>
            {/* Mini caso real placeholder */}
            <blockquote className="italic bg-gray-800 p-4 rounded">"Después del programa, nuestra tasa de éxito subió un 40%"</blockquote>
          </div>
        </section>
        {/* 5. Roadmap de Transformación */}
        <section id="roadmap" ref={roadmapRef} className="py-16 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 text-gray-300">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Roadmap de Transformación</h2>
            {/* Timeline placeholder */}
            <ol className="list-decimal list-inside space-y-4">
              <li>Diagnóstico estratégico</li>
              <li>Coaching + acción</li>
              <li>Seguimiento y refinamiento</li>
              <li>Revisión y escala</li>
            </ol>
          </div>
        </section>
        {/* 6. Prueba Social y Confianza */}
        <section id="trust" ref={trustRef} className="py-16">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-300">
            <h2 className="text-3xl font-bold text-white mb-8">Prueba Social</h2>
            {/* Testimonials/logos placeholder */}
            <div>Testimonio de CEO, Empresa XYZ</div>
          </div>
        </section>
        {/* 7. Elementos Persuasivos Adicionales */}
        <section id="persuasion" ref={persuasionRef} className="py-16 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-300">
            <h2 className="text-3xl font-bold text-white mb-8">Persuasión</h2>
            {/* Video testimonial placeholder */}
            <div>Video testimonial</div>
          </div>
        </section>
        {/* 8. Lead Magnet / Oferta de Valor */}
        <section id="leadMagnet" ref={leadMagnetRef} className="py-16">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-300">
            <h2 className="text-3xl font-bold text-white mb-8">Oferta Gratuita</h2>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full">Descarga tu checklist</button>
          </div>
        </section>
        {/* 9. FAQ */}
        <section id="faq" ref={faqRef} className="py-16 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-300">
            <h2 className="text-3xl font-bold text-white mb-8">Preguntas Frecuentes</h2>
            {/* FAQ items */}
          </div>
        </section>
        {/* 10. CTA Final + Formulario de Conversión */}
        <section id="final" ref={finalRef} className="py-20 bg-gradient-to-br from-[#FFB75E] to-[#ED8F03]">
          <div className="max-w-6xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Solicita tu evaluación ejecutiva gratuita</h2>
            {/* Minimal form placeholder */}
          </div>
        </section>
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}
