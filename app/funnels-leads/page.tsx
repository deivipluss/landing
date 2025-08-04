"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeNavigation from "@/components/HomeNavigation";
import SidebarNavigation from "@/components/SidebarNavigation";
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { FaDownload, FaRocket, FaFunnelDollar, FaChartLine, FaClipboard, FaWpforms, FaSync, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

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
    { id: 'final', label: 'Contacto', icon: <FaDownload /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] overflow-hidden">
      <SidebarNavigation menu={sidebarMenu} activeSection={activeSection} setActiveSection={scrollToSection} />
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative md:ml-28 lg:ml-40">
        <HomeNavigation />

        {/* 1. Hero */}
        <section id="hero" ref={heroRef} className="relative min-h-[80vh] flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C9A7]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-[#4A90E2]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
            <motion.h1 
              style={{ opacity, scale }} 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Funnels estratégicos para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">convertir visitantes</span> en leads
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Captura, segmenta y automatiza tus leads con eficiencia y resultados medibles.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button 
                onClick={() => scrollToSection('leadMagnet')} 
                className="px-8 py-4 bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] text-white rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <FaDownload className="text-xl" /> Descarga tu plantilla de funnel
              </button>
              <button 
                onClick={() => scrollToSection('problems')} 
                className="px-8 py-4 border border-[#00C9A7]/30 text-white rounded-full hover:bg-[#00C9A7]/10 transition-all duration-300"
              >
                Explorar soluciones
              </button>
            </motion.div>
          </div>
        </section>

        {/* 2. Retos y Valor */}
        <section id="problems" ref={problemsRef} className="py-20 relative overflow-hidden">
          <div className="absolute left-0 top-1/4 w-64 h-64 bg-[#00C9A7]/10 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Retos Comunes</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Identificamos y resolvemos los principales problemas que enfrentan las estrategias de generación de leads.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-[#00C9A7]/20 hover:border-[#00C9A7]/40 transition-all duration-300"
              >
                <h3 className="text-[#00C9A7] text-xl font-semibold mb-4 flex items-center">
                  <span className="inline-block p-2 bg-[#00C9A7]/10 rounded-full mr-3">📉</span>
                  Bajo ratio de captación
                </h3>
                <p className="text-gray-300">Formularios que no convierten y estrategias de captura poco efectivas reducen drásticamente tu potencial de negocio.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-[#00C9A7]/20 hover:border-[#00C9A7]/40 transition-all duration-300"
              >
                <h3 className="text-[#00C9A7] text-xl font-semibold mb-4 flex items-center">
                  <span className="inline-block p-2 bg-[#00C9A7]/10 rounded-full mr-3">🚪</span>
                  Abandono en formularios
                </h3>
                <p className="text-gray-300">Hasta el 70% de los usuarios abandonan los formularios por su complejidad, extensión o falta de incentivos claros.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-[#00C9A7]/20 hover:border-[#00C9A7]/40 transition-all duration-300"
              >
                <h3 className="text-[#00C9A7] text-xl font-semibold mb-4 flex items-center">
                  <span className="inline-block p-2 bg-[#00C9A7]/10 rounded-full mr-3">🔄</span>
                  Falta de nutrición de leads
                </h3>
                <p className="text-gray-300">Leads capturados pero olvidados pierden interés y temperatura, transformando oportunidades en contactos fríos.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-[#00C9A7]/20 hover:border-[#00C9A7]/40 transition-all duration-300"
              >
                <h3 className="text-[#00C9A7] text-xl font-semibold mb-4 flex items-center">
                  <span className="inline-block p-2 bg-[#00C9A7]/10 rounded-full mr-3">📊</span>
                  Análisis insuficiente
                </h3>
                <p className="text-gray-300">Sin métricas claras ni seguimiento sistemático, resulta imposible optimizar y escalar tus estrategias de captación.</p>
              </motion.div>
            </div>

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-white text-center mb-8"
            >
              Nuestra solución
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl text-white border-t border-[#00C9A7]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-[#00C9A7]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FaSync className="text-[#00C9A7]" size={20} />
                </div>
                <h4 className="font-semibold mb-2 text-center">Proceso automatizado</h4>
                <p className="text-sm text-gray-300 text-center">Flujos de nurturing que mantienen el interés y convierten eficientemente.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl text-white border-t border-[#00C9A7]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-[#00C9A7]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FaWpforms className="text-[#00C9A7]" size={20} />
                </div>
                <h4 className="font-semibold mb-2 text-center">Segmentación inteligente</h4>
                <p className="text-sm text-gray-300 text-center">Comunicación personalizada según intereses y etapa del ciclo de compra.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl text-white border-t border-[#00C9A7]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-[#00C9A7]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FaChartLine className="text-[#00C9A7]" size={20} />
                </div>
                <h4 className="font-semibold mb-2 text-center">Seguimiento medible</h4>
                <p className="text-sm text-gray-300 text-center">Analítica detallada para optimizar cada elemento del embudo de conversión.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Servicios */}
        <section id="services" ref={servicesRef} className="py-20 bg-gradient-to-b from-[#0D0C1D]/80 to-[#1A1A2E] relative">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#4A90E2]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-[#00C9A7] font-medium">SERVICIOS INTEGRALES</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                Servicios del <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">Embudo de Conversión</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Cada fase está diseñada para maximizar la captación, nutrición y conversión de tus leads en clientes.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900 rounded-xl shadow-xl p-6 border-t border-[#00C9A7]/20 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#4A90E2] to-[#00C9A7]/40 rounded-lg flex items-center justify-center mb-4">
                  <FaRocket className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Atracción y Tráfico</h3>
                <p className="text-gray-300 mb-4">Estrategias para llevar visitantes cualificados a tu embudo mediante SEO, SEM y redes sociales.</p>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Campañas multi-plataforma</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Copywriting persuasivo</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Segmentación avanzada</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900 rounded-xl shadow-xl p-6 border-t border-[#00C9A7]/20 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#4A90E2] to-[#00C9A7]/40 rounded-lg flex items-center justify-center mb-4">
                  <FaDownload className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lead Magnet</h3>
                <p className="text-gray-300 mb-4">Recursos valiosos que incentivan al visitante a compartir sus datos de contacto.</p>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Guías y ebooks exclusivos</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Webinars y capacitaciones</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Templates y recursos</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900 rounded-xl shadow-xl p-6 border-t border-[#00C9A7]/20 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#4A90E2] to-[#00C9A7]/40 rounded-lg flex items-center justify-center mb-4">
                  <FaFunnelDollar className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Formularios Persuasivos</h3>
                <p className="text-gray-300 mb-4">Diseño optimizado para maximizar conversiones con mínima fricción.</p>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Minimización de campos</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Multi-step para reducir abandono</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> A/B testing continuo</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900 rounded-xl shadow-xl p-6 border-t border-[#00C9A7]/20 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#4A90E2] to-[#00C9A7]/40 rounded-lg flex items-center justify-center mb-4">
                  <FaClipboard className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Nurturing Automatizado</h3>
                <p className="text-gray-300 mb-4">Secuencias automatizadas que educan y guían al lead en su recorrido de compra.</p>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Email marketing secuencial</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> SMS y chatbots inteligentes</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Personalización por comportamiento</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900 rounded-xl shadow-xl p-6 border-t border-[#00C9A7]/20 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#4A90E2] to-[#00C9A7]/40 rounded-lg flex items-center justify-center mb-4">
                  <FaChartLine className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Reportes y Optimización</h3>
                <p className="text-gray-300 mb-4">Analíticas detalladas y mejora continua del proceso de conversión.</p>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Dashboard personalizado</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> KPIs críticos en tiempo real</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Optimización basada en datos</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900 rounded-xl shadow-xl p-6 border-t border-[#00C9A7]/20 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#4A90E2] to-[#00C9A7]/40 rounded-lg flex items-center justify-center mb-4">
                  <FaSync className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Integración con CRM</h3>
                <p className="text-gray-300 mb-4">Conectamos tu embudo con cualquier CRM para un seguimiento comercial efectivo.</p>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> APIs y webhooks personalizados</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Transferencia de datos sin pérdidas</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00C9A7] mr-2" size={12} /> Calificación automática de leads</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Métricas */}
        <section id="metrics" ref={metricsRef} className="py-20 bg-gradient-to-b from-[#1A1A2E] to-[#0D0C1D] relative">
          <div className="absolute inset-0 bg-[url('/imagenes/grid.svg')] bg-center opacity-5"></div>
          <div className="absolute left-0 top-20 w-64 h-64 bg-[#00C9A7]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute right-0 bottom-20 w-96 h-96 bg-[#4A90E2]/10 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-[#00C9A7] font-medium">RESULTADOS MEDIBLES</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                Métricas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">Clave</span> de Rendimiento
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Analiza y optimiza el rendimiento de tus embudos con indicadores precisos y accionables.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Tasa de Apertura</h3>
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">48%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[48%] bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] rounded-full"></div>
                </div>
                <p className="mt-4 text-gray-300">
                  Porcentaje de destinatarios que abren tus emails de nurturing automatizado.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">CTR en Formularios</h3>
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">32%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[32%] bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] rounded-full"></div>
                </div>
                <p className="mt-4 text-gray-300">
                  Ratio de clics en los botones de acción de tus formularios multi-etapa.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Conversión por Segmento</h3>
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">17%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[17%] bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] rounded-full"></div>
                </div>
                <p className="mt-4 text-gray-300">
                  Porcentaje de leads que avanzan a la siguiente etapa del embudo según su segmento.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Tiempo de Conversión</h3>
                  <div className="text-right">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">14</span>
                    <span className="text-gray-400 text-sm ml-1">días</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] rounded-full"></div>
                </div>
                <p className="mt-4 text-gray-300">
                  Tiempo promedio desde la entrada del lead hasta la conversión final.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">ROI de Campañas</h3>
                  <div className="text-right">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">380</span>
                    <span className="text-gray-400 text-sm ml-1">%</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] rounded-full"></div>
                </div>
                <p className="mt-4 text-gray-300">
                  Retorno sobre inversión promedio de los embudos implementados.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Costo por Lead</h3>
                  <div className="text-right">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">-42</span>
                    <span className="text-gray-400 text-sm ml-1">%</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[42%] bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] rounded-full"></div>
                </div>
                <p className="mt-4 text-gray-300">
                  Reducción del costo de adquisición por lead cualificado tras la optimización.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Roadmap */}
        <section id="roadmap" ref={roadmapRef} className="py-20 bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] relative">
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#00C9A7]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4A90E2]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-[#00C9A7] font-medium">IMPLEMENTACIÓN ESTRUCTURADA</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                Tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">Roadmap</span> hacia el Éxito
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Un proceso estructurado de 5 fases para implementar tu sistema de generación y nutrición de leads.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Timeline center line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00C9A7] to-[#4A90E2] rounded-full"></div>
              
              {/* Phase 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative mb-16"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#00C9A7] to-[#4A90E2] rounded-full flex items-center justify-center border-4 border-[#0D0C1D] z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12 order-2 md:order-1">
                    <h3 className="text-2xl font-semibold text-[#00C9A7] mb-3">Auditoría y Análisis Inicial</h3>
                    <p className="text-gray-300">
                      Evaluación exhaustiva de tus procesos de captación actuales, puntos débiles y oportunidades. 
                      Identificamos tu cliente ideal, creamos buyer personas detallados y analizamos tu competencia.
                    </p>
                    <p className="text-gray-400 mt-4"><span className="text-[#00C9A7] font-medium">Duración:</span> 1-2 semanas</p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-xl border border-gray-700/50 h-full">
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Auditoría de procesos actuales</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Análisis de la competencia</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Definición de buyer personas</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Identificación de objetivos KPI</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Phase 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative mb-16"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#00C9A7] to-[#4A90E2] rounded-full flex items-center justify-center border-4 border-[#0D0C1D] z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2">
                    <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-xl border border-gray-700/50 h-full">
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Arquitectura de embudos</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Diseño de lead magnets</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Copywriting persuasivo</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Selección de plataformas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:pl-12">
                    <h3 className="text-2xl font-semibold text-[#00C9A7] mb-3">Diseño y Configuración de Embudos</h3>
                    <p className="text-gray-300">
                      Diseñamos la arquitectura completa de tus embudos, desde las páginas de captura hasta el proceso 
                      de nutrición. Creamos los lead magnets y diseñamos formularios que maximizan conversiones.
                    </p>
                    <p className="text-gray-400 mt-4"><span className="text-[#00C9A7] font-medium">Duración:</span> 2-3 semanas</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Phase 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative mb-16"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#00C9A7] to-[#4A90E2] rounded-full flex items-center justify-center border-4 border-[#0D0C1D] z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12 order-2 md:order-1">
                    <h3 className="text-2xl font-semibold text-[#00C9A7] mb-3">Implementación de Automatizaciones</h3>
                    <p className="text-gray-300">
                      Configuramos todas las automatizaciones para captura, segmentación y nurturing de leads. Integramos 
                      con CRMs y plataformas de marketing existentes para un flujo de datos perfecto.
                    </p>
                    <p className="text-gray-400 mt-4"><span className="text-[#00C9A7] font-medium">Duración:</span> 2-4 semanas</p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-xl border border-gray-700/50 h-full">
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Secuencias de emails</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Integración con CRM</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Segmentación automática</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Notificaciones al equipo</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Phase 4 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative mb-16"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#00C9A7] to-[#4A90E2] rounded-full flex items-center justify-center border-4 border-[#0D0C1D] z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2">
                    <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-xl border border-gray-700/50 h-full">
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Sesiones de capacitación</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Manuales de usuario</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Documentación técnica</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Acceso a recursos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:pl-12">
                    <h3 className="text-2xl font-semibold text-[#00C9A7] mb-3">Capacitación y Documentación</h3>
                    <p className="text-gray-300">
                      Entrenamos a tu equipo en el uso y gestión del sistema completo. Proporcionamos documentación 
                      detallada, manuales y recursos para garantizar la autonomía y control total.
                    </p>
                    <p className="text-gray-400 mt-4"><span className="text-[#00C9A7] font-medium">Duración:</span> 1 semana</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Phase 5 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#00C9A7] to-[#4A90E2] rounded-full flex items-center justify-center border-4 border-[#0D0C1D] z-10">
                    <span className="text-white font-bold">5</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12 order-2 md:order-1">
                    <h3 className="text-2xl font-semibold text-[#00C9A7] mb-3">Soporte y Optimización Continua</h3>
                    <p className="text-gray-300">
                      Ofrecemos soporte continuo y optimizamos constantemente el sistema basándonos en datos reales. 
                      Refinamos estrategias, realizamos tests A/B y adaptamos según resultados.
                    </p>
                    <p className="text-gray-400 mt-4"><span className="text-[#00C9A7] font-medium">Duración:</span> Continua (3-6 meses inicial)</p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-xl border border-gray-700/50 h-full">
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Análisis de resultados</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Testing A/B continuo</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Optimización de conversiones</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-[#00C9A7] mr-2" size={14} />
                          <span>Ajustes basados en datos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. Confianza */}
        <section id="trust" ref={trustRef} className="py-20 bg-gradient-to-b from-[#1A1A2E] to-[#0D0C1D] relative">
          <div className="absolute inset-0 bg-[url('/imagenes/grid.svg')] bg-center opacity-5"></div>
          <div className="absolute right-0 top-0 w-72 h-72 bg-[#00C9A7]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#4A90E2]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-[#00C9A7] font-medium">CASOS DE ÉXITO</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">Confianza</span> Respaldada por Resultados
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Nuestros clientes han experimentado mejoras significativas en sus tasas de conversión y calidad de leads.
              </p>
            </motion.div>
            
            {/* Testimonios */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 relative border border-gray-700/50"
              >
                <div className="absolute -top-3 -left-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20H5.5C4.96957 20 4.46086 19.7893 4.08579 19.4142C3.71071 19.0391 3.5 18.5304 3.5 18V12.5C3.5 11.9696 3.71071 11.4609 4.08579 11.0858C4.46086 10.7107 4.96957 10.5 5.5 10.5H11C11.5304 10.5 12.0391 10.7107 12.4142 11.0858C12.7893 11.4609 13 11.9696 13 12.5V28" stroke="url(#paint0_linear_301_189)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M27 20H20.5C19.9696 20 19.4609 19.7893 19.0858 19.4142C18.7107 19.0391 18.5 18.5304 18.5 18V12.5C18.5 11.9696 18.7107 11.4609 19.0858 11.0858C19.4609 10.7107 19.9696 10.5 20.5 10.5H26C26.5304 10.5 27.0391 10.7107 27.4142 11.0858C27.7893 11.4609 28 11.9696 28 12.5V28" stroke="url(#paint1_linear_301_189)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="paint0_linear_301_189" x1="3.5" y1="19.25" x2="13" y2="19.25" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C9A7"/>
                        <stop offset="1" stopColor="#4A90E2"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_301_189" x1="18.5" y1="19.25" x2="28" y2="19.25" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C9A7"/>
                        <stop offset="1" stopColor="#4A90E2"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="text-gray-300 mb-6 mt-4 italic">
                  "Implementamos el sistema de embudos y nuestras conversiones aumentaron un 73% en los primeros dos meses. El nivel de calificación de los leads mejoró significativamente."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Mariana Córdova</h4>
                    <p className="text-sm text-gray-400">CMO, Grupo Impulsa</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 relative border border-gray-700/50"
              >
                <div className="absolute -top-3 -left-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20H5.5C4.96957 20 4.46086 19.7893 4.08579 19.4142C3.71071 19.0391 3.5 18.5304 3.5 18V12.5C3.5 11.9696 3.71071 11.4609 4.08579 11.0858C4.46086 10.7107 4.96957 10.5 5.5 10.5H11C11.5304 10.5 12.0391 10.7107 12.4142 11.0858C12.7893 11.4609 13 11.9696 13 12.5V28" stroke="url(#paint0_linear_301_189)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M27 20H20.5C19.9696 20 19.4609 19.7893 19.0858 19.4142C18.7107 19.0391 18.5 18.5304 18.5 18V12.5C18.5 11.9696 18.7107 11.4609 19.0858 11.0858C19.4609 10.7107 19.9696 10.5 20.5 10.5H26C26.5304 10.5 27.0391 10.7107 27.4142 11.0858C27.7893 11.4609 28 11.9696 28 12.5V28" stroke="url(#paint1_linear_301_189)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="paint0_linear_301_189" x1="3.5" y1="19.25" x2="13" y2="19.25" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C9A7"/>
                        <stop offset="1" stopColor="#4A90E2"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_301_189" x1="18.5" y1="19.25" x2="28" y2="19.25" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C9A7"/>
                        <stop offset="1" stopColor="#4A90E2"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="text-gray-300 mb-6 mt-4 italic">
                  "Las automatizaciones redujeron nuestro tiempo de seguimiento en un 80% y aumentaron la tasa de cierre un 45%. El equipo comercial ahora se enfoca solo en leads calificados."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] flex items-center justify-center text-white font-bold">
                    JR
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Javier Rodríguez</h4>
                    <p className="text-sm text-gray-400">Director de Ventas, TechSolve</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 relative border border-gray-700/50"
              >
                <div className="absolute -top-3 -left-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20H5.5C4.96957 20 4.46086 19.7893 4.08579 19.4142C3.71071 19.0391 3.5 18.5304 3.5 18V12.5C3.5 11.9696 3.71071 11.4609 4.08579 11.0858C4.46086 10.7107 4.96957 10.5 5.5 10.5H11C11.5304 10.5 12.0391 10.7107 12.4142 11.0858C12.7893 11.4609 13 11.9696 13 12.5V28" stroke="url(#paint0_linear_301_189)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M27 20H20.5C19.9696 20 19.4609 19.7893 19.0858 19.4142C18.7107 19.0391 18.5 18.5304 18.5 18V12.5C18.5 11.9696 18.7107 11.4609 19.0858 11.0858C19.4609 10.7107 19.9696 10.5 20.5 10.5H26C26.5304 10.5 27.0391 10.7107 27.4142 11.0858C27.7893 11.4609 28 11.9696 28 12.5V28" stroke="url(#paint1_linear_301_189)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="paint0_linear_301_189" x1="3.5" y1="19.25" x2="13" y2="19.25" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C9A7"/>
                        <stop offset="1" stopColor="#4A90E2"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_301_189" x1="18.5" y1="19.25" x2="28" y2="19.25" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C9A7"/>
                        <stop offset="1" stopColor="#4A90E2"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="text-gray-300 mb-6 mt-4 italic">
                  "Pasamos de recopilar leads de baja calidad a un sistema que califica automáticamente y solo entrega prospectos con alta probabilidad de cierre. ROI del 320% en 6 meses."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] flex items-center justify-center text-white font-bold">
                    LM
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Laura Méndez</h4>
                    <p className="text-sm text-gray-400">CEO, Innova Digital</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Certificaciones y Garantías */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700/30 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C9A7]/20 to-[#4A90E2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#cert-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="cert-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C9A7"/>
                        <stop offset="1" stopColor="#4A90E2"/>
                      </linearGradient>
                    </defs>
                    <path d="M5.8 11.3 2 22l4-1 4 1-3.8-10.7C4.4 9.5 2 9.5 2 9.5s2.4 0 3.8 1.8z"/>
                    <path d="M22 12v6c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-6"/>
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Certificaciones</h3>
                <p className="text-gray-300 mb-3">Equipo certificado en las principales plataformas de automatización.</p>
                <div className="flex justify-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">HB</div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">SF</div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">AM</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700/30 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C9A7]/20 to-[#4A90E2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#lock-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="lock-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C9A7"/>
                        <stop offset="1" stopColor="#4A90E2"/>
                      </linearGradient>
                    </defs>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Protección de Datos</h3>
                <p className="text-gray-300 mb-3">Cumplimos con RGPD/GDPR y normativas internacionales de protección de datos.</p>
                <div className="w-24 h-8 mx-auto bg-gray-700/50 rounded-md flex items-center justify-center text-xs text-gray-300">
                  GDPR Compliant
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700/30 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C9A7]/20 to-[#4A90E2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#shield-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="shield-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C9A7"/>
                        <stop offset="1" stopColor="#4A90E2"/>
                      </linearGradient>
                    </defs>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Garantía de Resultados</h3>
                <p className="text-gray-300 mb-3">Ofrecemos garantía de resultados medibles en los primeros 90 días.</p>
                <div className="flex justify-center">
                  <div className="px-3 py-1 bg-gradient-to-r from-[#00C9A7]/20 to-[#4A90E2]/20 rounded-full text-sm text-white">
                    90 días de garantía
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 7. Persuasión */}
        <section id="persuasion" ref={persuasionRef} className="py-20 bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] relative">
          <div className="absolute inset-0 bg-[url('/imagenes/grid.svg')] bg-center opacity-5"></div>
          <div className="absolute left-0 top-0 w-96 h-96 bg-[#00C9A7]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#4A90E2]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-[#00C9A7] font-medium">ESTRATEGIAS EFECTIVAS</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                Técnicas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">Persuasión</span> Avanzadas
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Implementamos principios psicológicos comprobados para aumentar las conversiones en cada etapa del embudo.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] opacity-20 blur-lg rounded-2xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700/50">
                    <h3 className="text-2xl font-bold text-white mb-6">Copywriting Persuasivo</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#00C9A7]/20 to-[#4A90E2]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#copy-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <defs>
                              <linearGradient id="copy-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C9A7"/>
                                <stop offset="1" stopColor="#4A90E2"/>
                              </linearGradient>
                            </defs>
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <line x1="10" y1="9" x2="8" y2="9"></line>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-[#00C9A7] font-medium mb-1">Enfoque en Beneficios</h4>
                          <p className="text-gray-300 text-sm">Comunicamos claramente cómo tu producto resuelve problemas específicos del cliente, enfocándonos en beneficios, no características.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#00C9A7]/20 to-[#4A90E2]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#pain-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <defs>
                              <linearGradient id="pain-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C9A7"/>
                                <stop offset="1" stopColor="#4A90E2"/>
                              </linearGradient>
                            </defs>
                            <path d="M2 12h5"></path>
                            <path d="M17 12h5"></path>
                            <path d="M12 2v5"></path>
                            <path d="M12 17v5"></path>
                            <path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-[#00C9A7] font-medium mb-1">Pain Points</h4>
                          <p className="text-gray-300 text-sm">Identificamos y abordamos los puntos de dolor específicos de cada segmento para crear mensajes que resuenen emocionalmente.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#00C9A7]/20 to-[#4A90E2]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#story-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <defs>
                              <linearGradient id="story-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C9A7"/>
                                <stop offset="1" stopColor="#4A90E2"/>
                              </linearGradient>
                            </defs>
                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                            <line x1="4" y1="22" x2="4" y2="15"></line>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-[#00C9A7] font-medium mb-1">Storytelling</h4>
                          <p className="text-gray-300 text-sm">Utilizamos narrativas emocionales que conectan con el cliente y lo hacen protagonista de su propia historia de transformación.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#00C9A7] opacity-20 blur-lg rounded-2xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700/50">
                    <h3 className="text-2xl font-bold text-white mb-6">Gatillos Psicológicos</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#00C9A7]/20 to-[#4A90E2]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#scarcity-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <defs>
                              <linearGradient id="scarcity-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C9A7"/>
                                <stop offset="1" stopColor="#4A90E2"/>
                              </linearGradient>
                            </defs>
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-[#00C9A7] font-medium mb-1">Urgencia y Escasez</h4>
                          <p className="text-gray-300 text-sm">Implementamos elementos de tiempo limitado y disponibilidad restringida para motivar acciones inmediatas y reducir la procrastinación.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#00C9A7]/20 to-[#4A90E2]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#social-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <defs>
                              <linearGradient id="social-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C9A7"/>
                                <stop offset="1" stopColor="#4A90E2"/>
                              </linearGradient>
                            </defs>
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-[#00C9A7] font-medium mb-1">Prueba Social</h4>
                          <p className="text-gray-300 text-sm">Incorporamos testimonios, casos de éxito y estadísticas para validar la efectividad de la solución y generar confianza.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#00C9A7]/20 to-[#4A90E2]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#authority-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <defs>
                              <linearGradient id="authority-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C9A7"/>
                                <stop offset="1" stopColor="#4A90E2"/>
                              </linearGradient>
                            </defs>
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-[#00C9A7] font-medium mb-1">Autoridad</h4>
                          <p className="text-gray-300 text-sm">Destacamos credenciales, reconocimientos y expertise para posicionar la oferta como la elección más confiable.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Estadísticas de conversión */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#00C9A7]/10 to-[#4A90E2]/10 rounded-2xl p-8 border border-gray-700/30"
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-0">
                  Aumento promedio en tasas de conversión <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">usando nuestras estrategias</span>
                </h3>
                <div className="flex items-center">
                  <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">+127%</span>
                </div>
              </div>
              
              <div className="h-2 bg-gray-700 rounded-full mt-8 overflow-hidden">
                <div className="h-full w-[75%] bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] rounded-full"></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>Estándar del mercado</span>
                <span>Nuestros resultados</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 8. Lead Magnet */}
        <section id="leadMagnet" ref={leadMagnetRef} className="py-20 bg-gradient-to-b from-[#1A1A2E] to-[#0D0C1D] relative">
          <div className="absolute inset-0 bg-[url('/imagenes/grid.svg')] bg-center opacity-5"></div>
          <div className="absolute right-0 top-0 w-72 h-72 bg-[#00C9A7]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#4A90E2]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-[#00C9A7] font-medium">RECURSOS VALIOSOS</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#4A90E2]">Lead Magnets</span> Irresistibles
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Creamos contenido de alto valor que atrae a tu audiencia ideal y convierte visitantes en leads calificados.
              </p>
            </motion.div>
            
            {/* Lead Magnet Showcase */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Left side: Image/Preview */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] opacity-20 blur-xl rounded-2xl"></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 rounded-2xl border border-gray-700/50 shadow-xl">
                  <div className="bg-gray-900 rounded-xl overflow-hidden">
                    <div className="h-8 bg-gray-800 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="h-10 w-3/4 bg-gray-800 rounded mb-4"></div>
                      <div className="h-4 w-full bg-gray-800 rounded mb-2"></div>
                      <div className="h-4 w-11/12 bg-gray-800 rounded mb-2"></div>
                      <div className="h-4 w-10/12 bg-gray-800 rounded mb-4"></div>
                      
                      <div className="bg-gradient-to-r from-[#00C9A7]/20 to-[#4A90E2]/20 p-3 rounded-lg mb-4">
                        <div className="h-4 w-full bg-gray-800 rounded mb-2"></div>
                        <div className="h-4 w-11/12 bg-gray-800 rounded"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-16 bg-gray-800 rounded-lg"></div>
                        <div className="h-16 bg-gray-800 rounded-lg"></div>
                        <div className="h-16 bg-gray-800 rounded-lg"></div>
                        <div className="h-16 bg-gray-800 rounded-lg"></div>
                      </div>
                      
                      <div className="flex justify-center mt-6">
                        <div className="h-10 w-40 bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] rounded-lg py-2 px-4 text-sm text-white font-medium shadow-lg">
                    Plantilla de Embudo
                  </div>
                </div>
              </motion.div>
              
              {/* Right side: Description */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Plantilla de Embudo de Ventas</h3>
                  <p className="text-gray-300 mb-6">
                    Descarga nuestra plantilla lista para implementar con todos los elementos esenciales para 
                    construir un embudo de conversión efectivo. Incluye guías, ejemplos y mejores prácticas.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <FaCheckCircle className="text-[#00C9A7] mr-3" size={16} />
                      <span className="text-gray-300">Arquitectura completa de embudo</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheckCircle className="text-[#00C9A7] mr-3" size={16} />
                      <span className="text-gray-300">Ejemplos de copy persuasivo</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheckCircle className="text-[#00C9A7] mr-3" size={16} />
                      <span className="text-gray-300">Checklist de optimización</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheckCircle className="text-[#00C9A7] mr-3" size={16} />
                      <span className="text-gray-300">Dashboard de métricas clave</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-gradient-to-r from-[#00C9A7] to-[#4A90E2] text-white rounded-full hover:shadow-glow transition-all duration-300 flex items-center gap-2">
                      <FaDownload />
                      <span>Descargar Ahora</span>
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-[#00C9A7]/30 text-white rounded-full hover:border-[#00C9A7] transition-all duration-300">
                      Ver Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Other Lead Magnets */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30"
              >
                <div className="h-14 w-14 bg-gradient-to-br from-[#00C9A7]/20 to-[#4A90E2]/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#ebook-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="ebook-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C9A7"/>
                        <stop offset="1" stopColor="#4A90E2"/>
                      </linearGradient>
                    </defs>
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Ebooks y Guías</h3>
                <p className="text-gray-300 mb-4">Contenido educativo especializado que posiciona tu marca como autoridad y proporciona soluciones prácticas.</p>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-[#00C9A7] mr-2" size={12} />
                    <span>Guías paso a paso</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-[#00C9A7] mr-2" size={12} />
                    <span>Estrategias avanzadas</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-[#00C9A7] mr-2" size={12} />
                    <span>Diseño profesional</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30"
              >
                <div className="h-14 w-14 bg-gradient-to-br from-[#00C9A7]/20 to-[#4A90E2]/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#webinar-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="webinar-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C9A7"/>
                        <stop offset="1" stopColor="#4A90E2"/>
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                    <line x1="10" y1="15" x2="10" y2="9"></line>
                    <line x1="14" y1="15" x2="14" y2="9"></line>
                    <line x1="7" y1="12" x2="17" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Webinars y Talleres</h3>
                <p className="text-gray-300 mb-4">Sesiones interactivas en vivo o grabadas que educan a tu audiencia y demuestran tu expertise en acción.</p>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-[#00C9A7] mr-2" size={12} />
                    <span>Contenido interactivo</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-[#00C9A7] mr-2" size={12} />
                    <span>Consultas en vivo</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-[#00C9A7] mr-2" size={12} />
                    <span>Certificados de asistencia</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30"
              >
                <div className="h-14 w-14 bg-gradient-to-br from-[#00C9A7]/20 to-[#4A90E2]/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#calculator-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="calculator-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C9A7"/>
                        <stop offset="1" stopColor="#4A90E2"/>
                      </linearGradient>
                    </defs>
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="10" x2="16" y2="10"></line>
                    <line x1="12" y1="14" x2="16" y2="14"></line>
                    <line x1="12" y1="18" x2="16" y2="18"></line>
                    <line x1="8" y1="10" x2="8" y2="10"></line>
                    <line x1="8" y1="14" x2="8" y2="14"></line>
                    <line x1="8" y1="18" x2="8" y2="18"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Herramientas y Calculadoras</h3>
                <p className="text-gray-300 mb-4">Aplicaciones interactivas que resuelven problemas específicos y demuestran el valor de tu servicio completo.</p>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-[#00C9A7] mr-2" size={12} />
                    <span>Calculadoras de ROI</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-[#00C9A7] mr-2" size={12} />
                    <span>Evaluadores de embudo</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-[#00C9A7] mr-2" size={12} />
                    <span>Generadores de copy</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <ScrollToTopButton />
      </div>
    </div>
  );
}
