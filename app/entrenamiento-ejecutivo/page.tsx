"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeNavigation from "@/components/HomeNavigation";
import SidebarNavigation from "@/components/SidebarNavigation";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { FaChalkboardTeacher, FaUsersCog, FaLightbulb, FaChartLine, FaChartBar, FaArrowUp } from "react-icons/fa";
import Link from "next/link";

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
    { id:'final', label:'Contacto', icon:<FaArrowUp size={20}/> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] overflow-hidden">
      <SidebarNavigation menu={sidebarMenu} activeSection={activeSection} setActiveSection={scrollToSection} />
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative md:ml-28 lg:ml-40">
        <HomeNavigation />
        {/* 1. Hero / Portada Inicial */}
        <section id="hero" ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
          {/* Efectos de fondo */}
          <div className="absolute top-20 right-20 w-80 h-80 bg-[#FFB75E]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ED8F03]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/imagenes/grid.svg')] bg-center opacity-5"></div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-5xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-[#FFB75E] font-medium mb-3 block"
            >
              POTENCIA TU CARRERA DIRECTIVA
            </motion.span>
            
            <motion.h1 
              style={{opacity, scale}} 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Entrenamiento Ejecutivo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03]">Alto Impacto</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            >
              Transforma tu liderazgo con resultados medibles, maximiza tu influencia estratégica
              y alcanza nuevos niveles de efectividad en la dirección ejecutiva.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={() => scrollToSection('retos')} 
                className="px-8 py-4 bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] text-white rounded-full hover:shadow-glow-orange transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaChalkboardTeacher className="text-xl" /> Reserva tu sesión gratuita
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="px-8 py-4 bg-transparent border-2 border-[#FFB75E]/30 text-white rounded-full hover:border-[#FFB75E] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaUsersCog className="text-xl" /> Ver servicios
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03]">97%</span>
                <span className="text-gray-400 text-sm">Satisfacción</span>
              </div>
              <div className="h-10 w-px bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03]">500+</span>
                <span className="text-gray-400 text-sm">Ejecutivos</span>
              </div>
              <div className="h-10 w-px bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03]">15+</span>
                <span className="text-gray-400 text-sm">Años Exp.</span>
              </div>
            </motion.div>
          </motion.div>
        </section>
        {/* 2. Retos del Ejecutivo + Propuesta de Valor */}
        <section id="retos" ref={retosRef} className="py-20 bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] relative">
          <div className="absolute inset-0 bg-[url('/imagenes/grid.svg')] bg-center opacity-5"></div>
          <div className="absolute left-0 top-0 w-64 h-64 bg-[#FFB75E]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#ED8F03]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-[#FFB75E] font-medium">DESAFÍOS EJECUTIVOS</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                Retos que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03]">Enfrentas</span> como Líder
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Identificamos y abordamos los principales obstáculos que limitan el desempeño ejecutivo en la era digital.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl p-6 border border-gray-700/30 hover:border-[#FFB75E]/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#leadership-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <defs>
                        <linearGradient id="leadership-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFB75E"/>
                          <stop offset="1" stopColor="#ED8F03"/>
                        </linearGradient>
                      </defs>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#FFB75E] mb-2">Liderazgo Inconsistente</h3>
                    <p className="text-gray-300">Dificultad para mantener un estilo de liderazgo efectivo ante diferentes situaciones y equipos diversos, generando pérdida de credibilidad e influencia.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl p-6 border border-gray-700/30 hover:border-[#FFB75E]/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#decision-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <defs>
                        <linearGradient id="decision-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFB75E"/>
                          <stop offset="1" stopColor="#ED8F03"/>
                        </linearGradient>
                      </defs>
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#FFB75E] mb-2">Parálisis en la Toma de Decisiones</h3>
                    <p className="text-gray-300">Exceso de análisis o temor al riesgo que retrasa decisiones críticas, ocasionando pérdida de oportunidades y ventanas estratégicas.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl p-6 border border-gray-700/30 hover:border-[#FFB75E]/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#team-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <defs>
                        <linearGradient id="team-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFB75E"/>
                          <stop offset="1" stopColor="#ED8F03"/>
                        </linearGradient>
                      </defs>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#FFB75E] mb-2">Gestión Ineficiente de Equipos</h3>
                    <p className="text-gray-300">Dificultad para motivar, delegar y optimizar el rendimiento de tu equipo, resultando en baja productividad y rotación de talento clave.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl p-6 border border-gray-700/30 hover:border-[#FFB75E]/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#strategy-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <defs>
                        <linearGradient id="strategy-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFB75E"/>
                          <stop offset="1" stopColor="#ED8F03"/>
                        </linearGradient>
                      </defs>
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#FFB75E] mb-2">Falta de Dirección Estratégica</h3>
                    <p className="text-gray-300">Ausencia de visión clara y metas concretas que resulta en dispersión de esfuerzos, recursos mal utilizados y falta de alineación organizacional.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-[#FFB75E] font-medium">RESULTADOS TANGIBLES</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-6">
                Lo que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03]">Conseguirás</span>
              </h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 text-center border border-gray-700/30 hover:border-[#FFB75E]/30 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#influence-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="influence-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFB75E"/>
                        <stop offset="1" stopColor="#ED8F03"/>
                      </linearGradient>
                    </defs>
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m16 12-4 4-4-4"></path>
                    <path d="M12 8v8"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Mayor Influencia</h4>
                <p className="text-gray-300 text-sm">Incrementa tu capacidad para persuadir e inspirar a equipos y stakeholders clave.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 text-center border border-gray-700/30 hover:border-[#FFB75E]/30 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#clarity-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="clarity-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFB75E"/>
                        <stop offset="1" stopColor="#ED8F03"/>
                      </linearGradient>
                    </defs>
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Claridad Estratégica</h4>
                <p className="text-gray-300 text-sm">Desarrolla visión clara y habilidad para traducirla en planes de acción concretos.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 text-center border border-gray-700/30 hover:border-[#FFB75E]/30 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#productivity-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="productivity-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFB75E"/>
                        <stop offset="1" stopColor="#ED8F03"/>
                      </linearGradient>
                    </defs>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Productividad del Equipo</h4>
                <p className="text-gray-300 text-sm">Potencia el rendimiento de tu equipo mediante técnicas de delegación y motivación efectiva.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 text-center border border-gray-700/30 hover:border-[#FFB75E]/30 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#roi-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="roi-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFB75E"/>
                        <stop offset="1" stopColor="#ED8F03"/>
                      </linearGradient>
                    </defs>
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">ROI en Gestión</h4>
                <p className="text-gray-300 text-sm">Maximiza el retorno sobre cada hora invertida en actividades de gestión y dirección.</p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* 3. Servicios dentro del Funnel */}
        <section id="services" ref={servicesRef} className="py-20 bg-gradient-to-b from-[#1A1A2E] to-[#0D0C1D] relative">
          <div className="absolute inset-0 bg-[url('/imagenes/grid.svg')] bg-center opacity-5"></div>
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#FFB75E]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#ED8F03]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-[#FFB75E] font-medium">METODOLOGÍA COMPROBADA</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                Servicios del <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03]">Programa Ejecutivo</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Un sistema integral de desarrollo directivo diseñado para transformar tu liderazgo y maximizar resultados.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl shadow-xl p-6 border-t border-[#FFB75E]/20 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFB75E] to-[#ED8F03]/40 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Evaluación 360° de Liderazgo</h3>
                <p className="text-gray-300 mb-4">Diagnóstico completo de tus capacidades directivas desde la perspectiva de todo tu entorno profesional.</p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Análisis DISC avanzado
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Feedback estructurado
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Mapa de competencias
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl shadow-xl p-6 border-t border-[#FFB75E]/20 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFB75E] to-[#ED8F03]/40 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Coaching Individual Intensivo</h3>
                <p className="text-gray-300 mb-4">Sesiones personalizadas enfocadas en desbloquear tu potencial de liderazgo y superar limitaciones específicas.</p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    12 sesiones estratégicas
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Plan de acción personalizado
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Soporte entre sesiones
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl shadow-xl p-6 border-t border-[#FFB75E]/20 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFB75E] to-[#ED8F03]/40 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Talleres Ejecutivos Personalizados</h3>
                <p className="text-gray-300 mb-4">Formaciones específicas en las áreas clave que impactan directamente en tu desempeño como líder.</p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Módulos especializados
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Metodología práctica
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Casos reales aplicados
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl shadow-xl p-6 border-t border-[#FFB75E]/20 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFB75E] to-[#ED8F03]/40 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Seguimiento con KPIs</h3>
                <p className="text-gray-300 mb-4">Sistema de medición objetiva para evaluar y validar tu progreso en habilidades de liderazgo y resultados.</p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Dashboard personalizado
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Seguimiento mensual
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Reporte de mejora continua
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl shadow-xl p-6 border-t border-[#FFB75E]/20 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFB75E] to-[#ED8F03]/40 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Soporte Trimestral</h3>
                <p className="text-gray-300 mb-4">Acompañamiento continuo para asegurar la implementación exitosa de los aprendizajes y estrategias.</p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Sesiones de refuerzo
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Ajustes de estrategia
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Acceso prioritario
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl shadow-xl p-6 border-t border-[#FFB75E]/20 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFB75E] to-[#ED8F03]/40 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Biblioteca de Recursos</h3>
                <p className="text-gray-300 mb-4">Acceso exclusivo a materiales complementarios para profundizar en tu desarrollo ejecutivo.</p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    E-books especializados
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Video-tutoriales
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Plantillas de gestión
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <div className="mt-12 text-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection('final')}
                className="px-8 py-4 bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] text-white rounded-full hover:shadow-glow-orange transition-all duration-300"
              >
                Solicitar consulta gratuita
              </motion.button>
            </div>
          </div>
        </section>
        {/* 4. Impacto y Métricas Tangibles */}
        <section id="impact" ref={impactRef} className="py-24 bg-gradient-to-b from-[#0D0C1D] to-[#161525] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/imagenes/dots.svg')] bg-repeat opacity-5"></div>
          <div className="absolute left-0 top-1/2 w-96 h-96 bg-[#FFB75E]/5 rounded-full filter blur-3xl transform -translate-y-1/2"></div>
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#ED8F03]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-[#FFB75E] font-medium">RESULTADOS COMPROBADOS</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                Impacto en tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03]">Organización</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                El entrenamiento ejecutivo transforma no solo a los líderes sino a toda la organización, generando resultados medibles y duraderos.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl shadow-xl p-6 border border-[#FFB75E]/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFB75E]/5 to-[#ED8F03]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <svg className="w-16 h-16 text-[#FFB75E]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-white mb-2 flex items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      +30<span className="text-[#FFB75E]">%</span>
                    </motion.span>
                  </div>
                  <p className="text-gray-300 text-center">Aumento en efectividad del liderazgo</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl shadow-xl p-6 border border-[#FFB75E]/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFB75E]/5 to-[#ED8F03]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <svg className="w-16 h-16 text-[#FFB75E]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                      <line x1="12" y1="22" x2="12" y2="15.5"></line>
                      <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                      <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                      <line x1="12" y1="2" x2="12" y2="8.5"></line>
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-white mb-2 flex items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      -20<span className="text-[#FFB75E]">%</span>
                    </motion.span>
                  </div>
                  <p className="text-gray-300 text-center">Reducción en conflictos internos</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl shadow-xl p-6 border border-[#FFB75E]/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFB75E]/5 to-[#ED8F03]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <svg className="w-16 h-16 text-[#FFB75E]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-white mb-2 flex items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      +50<span className="text-[#FFB75E]">%</span>
                    </motion.span>
                  </div>
                  <p className="text-gray-300 text-center">Incremento en satisfacción laboral</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl shadow-xl p-6 border border-[#FFB75E]/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFB75E]/5 to-[#ED8F03]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <svg className="w-16 h-16 text-[#FFB75E]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-white mb-2 flex items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      +40<span className="text-[#FFB75E]">%</span>
                    </motion.span>
                  </div>
                  <p className="text-gray-300 text-center">Aumento en tasa de éxito</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 p-8 bg-gradient-to-r from-[#1A1A2E]/50 to-[#16141F]/50 rounded-xl border border-[#FFB75E]/10"
            >
              <blockquote className="relative">
                <div className="absolute -top-6 -left-2 text-6xl text-[#FFB75E]/20">"</div>
                <div className="relative z-10">
                  <p className="text-gray-200 text-lg italic mb-6">
                    Después de implementar el programa de entrenamiento ejecutivo, nuestra tasa de éxito en proyectos estratégicos subió un 40%, los conflictos internos se redujeron drásticamente y el clima organizacional mejoró notablemente. La inversión en el desarrollo de nuestros líderes ha sido uno de los mayores aciertos estratégicos de nuestra compañía.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB75E] to-[#ED8F03]/40 flex items-center justify-center text-white font-bold mr-4">
                      JM
                    </div>
                    <div>
                      <p className="font-medium text-white">Juan Martínez</p>
                      <p className="text-sm text-[#FFB75E]">CEO, Tecnología Avanzada S.A.</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-2 text-6xl text-[#FFB75E]/20 rotate-180">"</div>
              </blockquote>
            </motion.div>
          </div>
        </section>
        {/* 5. Roadmap de Transformación */}
        <section id="roadmap" ref={roadmapRef} className="py-24 bg-gradient-to-b from-[#161525] to-[#0D0C1D] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/imagenes/grid.svg')] bg-center opacity-5"></div>
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#FFB75E]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#ED8F03]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-[#FFB75E] font-medium">PROCESO ESTRUCTURADO</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                Roadmap de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03]">Transformación</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Un proceso probado y sistemático para desarrollar tu liderazgo y transformar tu organización.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Línea conectora vertical */}
              <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFB75E] via-[#ED8F03] to-[#FFB75E]/30 hidden md:block"></div>
              
              {/* Paso 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative mb-16 md:mb-24"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-white mb-3">1. Diagnóstico Estratégico</h3>
                    <p className="text-gray-300">
                      Comenzamos con una evaluación 360° que analiza tus habilidades de liderazgo desde múltiples perspectivas, identificando fortalezas y áreas de mejora críticas.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-gray-400 text-sm">Evaluación DISC avanzada</span>
                        <span className="w-5 h-5 rounded-full bg-[#FFB75E] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-gray-400 text-sm">Feedback de stakeholders</span>
                        <span className="w-5 h-5 rounded-full bg-[#FFB75E] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-[60px] relative order-1 md:order-2 mb-6 md:mb-0 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB75E] to-[#ED8F03] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#FFB75E]/20 z-10">
                      1
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-5 rounded-lg border border-[#FFB75E]/10">
                      <h4 className="text-[#FFB75E] font-medium mb-2">Entregables</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#FFB75E] mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Informe de competencias con fortalezas y áreas de mejora
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#FFB75E] mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Plan personalizado de desarrollo
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Paso 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-16 md:mb-24"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 order-2">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-5 rounded-lg border border-[#FFB75E]/10">
                      <h4 className="text-[#FFB75E] font-medium mb-2">Actividades</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#FFB75E] mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          12 sesiones de coaching individual intensivo
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#FFB75E] mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Talleres prácticos en áreas críticas identificadas
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-[60px] relative order-1 md:order-2 mb-6 md:mb-0 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB75E] to-[#ED8F03] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#FFB75E]/20 z-10">
                      2
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                    <h3 className="text-2xl font-bold text-white mb-3">2. Coaching + Acción</h3>
                    <p className="text-gray-300">
                      Implementamos un programa de coaching intensivo combinado con talleres especializados enfocados en fortalecer tus habilidades de liderazgo y resolver los desafíos específicos identificados.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#FFB75E] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span className="text-gray-400 text-sm">Aprendizaje experiencial</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#FFB75E] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span className="text-gray-400 text-sm">Aplicación inmediata de conceptos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Paso 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative mb-16 md:mb-24"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-white mb-3">3. Seguimiento y Refinamiento</h3>
                    <p className="text-gray-300">
                      Implementamos un sistema de medición y seguimiento con KPIs específicos para evaluar el progreso y realizar los ajustes necesarios para maximizar los resultados.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-gray-400 text-sm">Dashboard personalizado de progreso</span>
                        <span className="w-5 h-5 rounded-full bg-[#FFB75E] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-gray-400 text-sm">Sesiones de ajuste estratégico</span>
                        <span className="w-5 h-5 rounded-full bg-[#FFB75E] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-[60px] relative order-1 md:order-2 mb-6 md:mb-0 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB75E] to-[#ED8F03] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#FFB75E]/20 z-10">
                      3
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-5 rounded-lg border border-[#FFB75E]/10">
                      <h4 className="text-[#FFB75E] font-medium mb-2">Herramientas</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#FFB75E] mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Sistema de KPIs de liderazgo
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#FFB75E] mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Reportes de progreso mensuales
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Paso 4 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 order-2">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-5 rounded-lg border border-[#FFB75E]/10">
                      <h4 className="text-[#FFB75E] font-medium mb-2">Resultados</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#FFB75E] mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Liderazgo transformacional consolidado
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#FFB75E] mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Mejoras organizacionales medibles
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-[60px] relative order-1 md:order-2 mb-6 md:mb-0 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB75E] to-[#ED8F03] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#FFB75E]/20 z-10">
                      4
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                    <h3 className="text-2xl font-bold text-white mb-3">4. Revisión y Escala</h3>
                    <p className="text-gray-300">
                      Evaluamos los resultados obtenidos, consolidamos los aprendizajes y desarrollamos un plan para escalar el impacto positivo en toda la organización.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#FFB75E] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span className="text-gray-400 text-sm">ROI del programa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#FFB75E] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span className="text-gray-400 text-sm">Plan de expansión organizacional</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-20 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => scrollToSection('final')}
                className="px-10 py-4 bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] text-white text-lg font-medium rounded-full hover:shadow-glow-orange transition-all duration-300"
              >
                Transforma tu liderazgo ahora
              </motion.button>
              <p className="text-gray-400 mt-4">
                *Programa adaptado a las necesidades específicas de cada ejecutivo y organización
              </p>
            </motion.div>
          </div>
        </section>
        {/* 6. Prueba Social y Confianza */}
        <section id="trust" ref={trustRef} className="py-24 bg-gradient-to-b from-[#0D0C1D] to-[#161525] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/imagenes/dots.svg')] bg-repeat opacity-5"></div>
          <div className="absolute right-0 top-1/3 w-96 h-96 bg-[#FFB75E]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#ED8F03]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-[#FFB75E] font-medium">EXPERIENCIAS REALES</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                Lo que dicen nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03]">Clientes</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Líderes y organizaciones que han transformado su desempeño gracias a nuestros programas de entrenamiento ejecutivo.
              </p>
            </motion.div>
            
            {/* Testimonios */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-[#FFB75E]/10 relative"
              >
                <div className="absolute -top-4 left-6 text-[#FFB75E]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3 2.8C9.6 3.7 8.3 5 7.3 6.4 6.3 7.8 5.9 9.6 5.9 11.6 5.9 13.8 6.5 15.5 7.7 16.9 9 18.2 10.5 18.9 12.2 18.9 13.8 18.9 15.1 18.4 16.2 17.4 17.3 16.3 17.8 14.9 17.8 13.3 17.8 11.9 17.3 10.7 16.4 9.8 15.5 8.9 14.4 8.5 13 8.5 12.7 8.5 12.4 8.5 12.1 8.6 12.2 8.1 12.6 7.5 13.2 6.9 13.9 6.2 14.5 5.8 15 5.6L15.1 5.4C15.3 5 15.5 4.6 15.5 4.4 15.6 4.2 15.6 4 15.6 3.9 13.9 3.9 12.5 4.2 11.3 4.9L11.2 4.7V2.8Z" />
                  </svg>
                </div>
                <div className="pt-8">
                  <p className="text-gray-300 mb-6 italic">
                    "El programa de entrenamiento ejecutivo ha sido transformador para mi liderazgo. He mejorado mi capacidad para tomar decisiones estratégicas y mi equipo está más cohesionado y productivo que nunca."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 flex items-center justify-center text-white font-semibold mr-3">
                      LR
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-white">Laura Rodríguez</p>
                      <p className="text-[#FFB75E] text-sm">Directora General, InnoTech</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-[#FFB75E]/10 relative"
              >
                <div className="absolute -top-4 left-6 text-[#FFB75E]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3 2.8C9.6 3.7 8.3 5 7.3 6.4 6.3 7.8 5.9 9.6 5.9 11.6 5.9 13.8 6.5 15.5 7.7 16.9 9 18.2 10.5 18.9 12.2 18.9 13.8 18.9 15.1 18.4 16.2 17.4 17.3 16.3 17.8 14.9 17.8 13.3 17.8 11.9 17.3 10.7 16.4 9.8 15.5 8.9 14.4 8.5 13 8.5 12.7 8.5 12.4 8.5 12.1 8.6 12.2 8.1 12.6 7.5 13.2 6.9 13.9 6.2 14.5 5.8 15 5.6L15.1 5.4C15.3 5 15.5 4.6 15.5 4.4 15.6 4.2 15.6 4 15.6 3.9 13.9 3.9 12.5 4.2 11.3 4.9L11.2 4.7V2.8Z" />
                  </svg>
                </div>
                <div className="pt-8">
                  <p className="text-gray-300 mb-6 italic">
                    "La inversión en el desarrollo de nuestro equipo directivo ha sido la mejor decisión que hemos tomado. Los resultados se reflejan en la cultura organizacional y en nuestros indicadores financieros."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 flex items-center justify-center text-white font-semibold mr-3">
                      CM
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-white">Carlos Méndez</p>
                      <p className="text-[#FFB75E] text-sm">CEO, Grupo Financiero Global</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-[#FFB75E]/10 relative"
              >
                <div className="absolute -top-4 left-6 text-[#FFB75E]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3 2.8C9.6 3.7 8.3 5 7.3 6.4 6.3 7.8 5.9 9.6 5.9 11.6 5.9 13.8 6.5 15.5 7.7 16.9 9 18.2 10.5 18.9 12.2 18.9 13.8 18.9 15.1 18.4 16.2 17.4 17.3 16.3 17.8 14.9 17.8 13.3 17.8 11.9 17.3 10.7 16.4 9.8 15.5 8.9 14.4 8.5 13 8.5 12.7 8.5 12.4 8.5 12.1 8.6 12.2 8.1 12.6 7.5 13.2 6.9 13.9 6.2 14.5 5.8 15 5.6L15.1 5.4C15.3 5 15.5 4.6 15.5 4.4 15.6 4.2 15.6 4 15.6 3.9 13.9 3.9 12.5 4.2 11.3 4.9L11.2 4.7V2.8Z" />
                  </svg>
                </div>
                <div className="pt-8">
                  <p className="text-gray-300 mb-6 italic">
                    "El enfoque personalizado del programa me permitió identificar mis puntos ciegos como líder y transformar mi estilo de gestión. Los cambios positivos fueron inmediatos y sostenibles."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 flex items-center justify-center text-white font-semibold mr-3">
                      AG
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-white">Ana Gómez</p>
                      <p className="text-[#FFB75E] text-sm">Directora de Operaciones, TechSolutions</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Logotipos de empresas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <h3 className="text-center text-xl font-medium text-white mb-8">Empresas que confían en nosotros</h3>
              
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {/* Estos son placeholders para logos. En una implementación real usarías imágenes reales */}
                <div className="w-32 h-16 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-500/40 group-hover:text-gray-300/60 transition-colors duration-300">ACME</div>
                </div>
                <div className="w-32 h-16 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-500/40 group-hover:text-gray-300/60 transition-colors duration-300">GLOBEX</div>
                </div>
                <div className="w-32 h-16 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-500/40 group-hover:text-gray-300/60 transition-colors duration-300">STARK</div>
                </div>
                <div className="w-32 h-16 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-500/40 group-hover:text-gray-300/60 transition-colors duration-300">WAYNE</div>
                </div>
                <div className="w-32 h-16 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-500/40 group-hover:text-gray-300/60 transition-colors duration-300">INITECH</div>
                </div>
              </div>
            </motion.div>
            
            {/* Estadísticas de satisfacción */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 grid md:grid-cols-4 gap-8 text-center"
            >
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] mb-2">97%</div>
                <p className="text-gray-300">Tasa de satisfacción de clientes</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] mb-2">500+</div>
                <p className="text-gray-300">Ejecutivos entrenados</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] mb-2">15+</div>
                <p className="text-gray-300">Años de experiencia</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] mb-2">89%</div>
                <p className="text-gray-300">Mejora en indicadores clave</p>
              </div>
            </motion.div>
            
            <div className="mt-16 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => scrollToSection('final')}
                className="px-10 py-4 bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] text-white text-lg font-medium rounded-full hover:shadow-glow-orange transition-all duration-300"
              >
                Únete a las empresas líderes
              </motion.button>
            </div>
          </div>
        </section>
        {/* 7. Elementos Persuasivos Adicionales */}
        <section id="persuasion" ref={persuasionRef} className="py-24 bg-gradient-to-b from-[#161525] to-[#0D0C1D] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/imagenes/grid.svg')] bg-center opacity-5"></div>
          <div className="absolute left-0 top-0 w-96 h-96 bg-[#FFB75E]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#ED8F03]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-[#FFB75E] font-medium">POR QUÉ ELEGIRNOS</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                La <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB75E] to-[#ED8F03]">Diferencia</span> Que Nos Define
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Metodología probada, resultados medibles y acompañamiento personalizado para cada líder y organización.
              </p>
            </motion.div>
            
            {/* Video testimonial (placeholder) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl overflow-hidden shadow-xl shadow-[#FFB75E]/5 border border-[#FFB75E]/10 aspect-video relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="text-white text-lg">Video testimonial - Click para reproducir</div>
              </div>
            </motion.div>
            
            {/* Beneficios del programa */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 border border-[#FFB75E]/10 hover:border-[#FFB75E]/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 mb-6 bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Metodología Científica</h3>
                <p className="text-gray-300">
                  Programa basado en investigación conductual y neurociencia aplicada al desarrollo de liderazgo.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 border border-[#FFB75E]/10 hover:border-[#FFB75E]/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 mb-6 bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Resultados Garantizados</h3>
                <p className="text-gray-300">
                  Si no ves mejoras medibles en 90 días, te devolvemos el 100% de tu inversión sin preguntas.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 border border-[#FFB75E]/10 hover:border-[#FFB75E]/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 mb-6 bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tecnología de Punta</h3>
                <p className="text-gray-300">
                  Plataforma digital para seguimiento en tiempo real del progreso y resultados del programa.
                </p>
              </motion.div>
            </div>
            
            {/* Elemento persuasivo principal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-[#1A1A2E] to-[#16141F] rounded-2xl shadow-xl overflow-hidden border border-[#FFB75E]/10"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    "El liderazgo no es solo lo que haces, es <span className="text-[#FFB75E]">quién eres</span>"
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Nuestro programa no solo mejora tus habilidades ejecutivas, transforma tu identidad como líder para que puedas inspirar y guiar a tu organización hacia un nuevo nivel de excelencia.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <div className="w-full h-full bg-gradient-to-br from-[#FFB75E] to-[#ED8F03] flex items-center justify-center text-white font-bold">
                        JD
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Dr. Javier Delgado</p>
                      <p className="text-[#FFB75E] text-sm">Director del Programa</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-[#FFB75E]/10 to-[#ED8F03]/10 p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl text-white font-medium mb-6">Agenda una consulta estratégica gratuita</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      onClick={() => scrollToSection('final')}
                      className="px-8 py-4 bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] text-white rounded-full hover:shadow-glow-orange transition-all duration-300 font-medium"
                    >
                      Reservar mi lugar ahora
                    </motion.button>
                    <p className="text-gray-400 text-sm mt-4">Plazas limitadas - Solo 5 empresas por mes</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* 8. Lead Magnet / Oferta de Valor */}
        <section id="leadMagnet" ref={leadMagnetRef} className="py-24 bg-gradient-to-b from-[#0D0C1D] to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/imagenes/dots.svg')] bg-repeat opacity-5"></div>
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#FFB75E]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#ED8F03]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-8 md:p-12 border border-[#FFB75E]/20 shadow-xl"
            >
              <div className="md:w-3/5">
                <span className="text-[#FFB75E] font-medium">DESCARGA GRATUITA</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  Checklist de Autodiagnóstico de Liderazgo Ejecutivo
                </h2>
                <p className="text-gray-300 mb-6">
                  Evalúa tus habilidades directivas con esta herramienta exclusiva utilizada por CEOs de empresas Fortune 500. Identifica tus fortalezas y áreas de mejora antes de iniciar cualquier programa de desarrollo.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FFB75E] mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">20 indicadores clave de liderazgo efectivo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FFB75E] mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Guía de interpretación y recomendaciones</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FFB75E] mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Acceso a webinar exclusivo de 30 minutos</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] text-white rounded-full hover:shadow-glow-orange transition-all duration-300 font-medium"
                  >
                    Descargar ahora
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={() => scrollToSection('final')}
                    className="px-8 py-4 bg-transparent border border-[#FFB75E] text-white rounded-full hover:bg-[#FFB75E]/10 transition-all duration-300 font-medium"
                  >
                    Consulta gratuita
                  </motion.button>
                </div>
              </div>
              
              <div className="md:w-2/5">
                <div className="bg-gradient-to-br from-[#FFB75E]/20 to-[#ED8F03]/20 p-1 rounded-lg shadow-xl">
                  <div className="bg-gradient-to-br from-[#1A1A2E] to-[#16141F] p-4 rounded-lg">
                    <div className="aspect-[3/4] bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-md flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="w-16 h-16 mx-auto mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Checklist de Autodiagnóstico</h3>
                        <p className="text-gray-400 mb-6 text-sm">Formato PDF - Acceso inmediato</p>
                        <div className="px-6 py-2 bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] text-white rounded-full inline-block font-medium">
                          GRATIS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </section>
        <ScrollToTopButton />
      </div>
    </div>
  );
}
