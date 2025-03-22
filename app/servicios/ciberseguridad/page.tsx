"use client";
import React, { useState, useRef } from "react";
import { 
  FaShieldAlt, 
  FaLock, 
  FaSearch, 
  FaNetworkWired, 
  FaArrowRight,
  FaServer,
  FaUserShield,
  FaExclamationTriangle,
  FaDatabase,
  FaDesktop,
  FaLaptopCode
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function CiberseguridadEmpresarialPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  
  const securityServices = [
    {
      title: "Auditoría de Seguridad",
      description: "Evalúo tu infraestructura tecnológica para identificar vulnerabilidades críticas antes de que sean explotadas por ciberdelincuentes.",
      icon: <FaSearch />,
      benefits: [
        "Identificación completa de vulnerabilidades",
        "Detección de configuraciones inseguras",
        "Evaluación de riesgos priorizada",
        "Plan de remediación detallado"
      ]
    },
    {
      title: "Protección contra Amenazas",
      description: "Implemento sistemas de defensa multicapa que protegen tus activos digitales contra malware, ransomware y otras amenazas avanzadas.",
      icon: <FaLock />,
      benefits: [
        "Protección de endpoints en tiempo real",
        "Detección avanzada de malware",
        "Sistemas anti-ransomware",
        "Respuesta automática a incidentes"
      ]
    },
    {
      title: "Gestión de Incidentes",
      description: "Establezco protocolos de respuesta rápida ante brechas de seguridad para minimizar el impacto y restaurar la normalidad operativa.",
      icon: <FaExclamationTriangle />,
      benefits: [
        "Respuesta inmediata 24/7",
        "Contención y erradicación de amenazas",
        "Análisis forense digital",
        "Plan de recuperación acelerada"
      ]
    },
    {
      title: "Formación en Ciberseguridad",
      description: "Capacito a tu equipo para reconocer y prevenir amenazas, convirtiendo a tus colaboradores en la primera línea de defensa.",
      icon: <FaUserShield />,
      benefits: [
        "Simulaciones de phishing personalizadas",
        "Talleres interactivos de concientización",
        "Capacitación específica por roles",
        "Evaluaciones continuas de conocimientos"
      ]
    }
  ];

  const threatStats = [
    { value: "82%", label: "de las brechas involucran el factor humano" },
    { value: "$4.35M", label: "costo promedio de una brecha de datos" },
    { value: "287", label: "días promedio para detectar una intrusión" },
    { value: "76%", label: "aumento en ataques de ransomware" }
  ];

  const securityLevels = [
    {
      title: "Protección de Infraestructura",
      description: "Aseguro todos los componentes físicos y virtuales que sostienen tus operaciones digitales.",
      icon: <FaServer />,
      items: ["Servidores", "Red corporativa", "Cloud", "Sistemas operativos"]
    },
    {
      title: "Seguridad de Datos",
      description: "Implemento medidas técnicas y organizativas para proteger tu activo más valioso: la información.",
      icon: <FaDatabase />,
      items: ["Cifrado", "Clasificación", "Control de acceso", "Prevención de fugas"]
    },
    {
      title: "Protección de Endpoints",
      description: "Defiendo cada punto de acceso a tu red contra amenazas sofisticadas y en constante evolución.",
      icon: <FaDesktop />,
      items: ["PCs y laptops", "Móviles", "IoT", "Servidores"]
    },
    {
      title: "Seguridad de Aplicaciones",
      description: "Analizo y fortifico tus aplicaciones empresariales contra vulnerabilidades y ataques específicos.",
      icon: <FaLaptopCode />,
      items: ["Web apps", "API", "Microservicios", "Código fuente"]
    }
  ];

  // Custom component for security level tab 
  const TabButton = ({ active, onClick, children, index }: { 
    active: boolean, 
    onClick: () => void, 
    children: React.ReactNode,
    index: number
  }) => (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`px-4 py-3 rounded-lg text-left flex items-center gap-3 transition-all duration-300 ${
        active 
          ? "bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-500/30 text-white" 
          : "text-gray-400 hover:bg-slate-800/30 hover:text-gray-300"
      }`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

  // Custom Stat component
  const StatCard = ({ value, description }: { value: string, description: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-5 border border-slate-600/20 hover:border-slate-500/30 transition-all duration-300"
    >
      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">{value}</p>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-slate-700/5 filter blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-blue-900/5 filter blur-[120px] pointer-events-none"></div>
        
        {/* Hero section */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
                className="order-2 md:order-1"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-slate-600/20 to-cyan-800/20 text-cyan-300 text-sm font-medium mb-4 border border-slate-500/30">
                  PROTECCIÓN AVANZADA
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Ciberseguridad <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">Empresarial</span>
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Protejo tus activos digitales con soluciones de seguridad robustas y adaptadas a tu negocio. Mi enfoque proactivo detecta y neutraliza amenazas antes de que afecten tus operaciones.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-slate-700 to-blue-900 text-white rounded-lg hover:shadow-glow-blue transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Proteger mi empresa</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800/20 transition-all duration-300"
                  >
                    Agendar diagnóstico gratuito
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, scale: isHeaderInView ? 1 : 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="order-1 md:order-2 relative hidden md:block"
              >
                <div className="relative h-[400px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 to-blue-900/10 rounded-xl"></div>
                  <Image
                    src="/imagenes/ciberseguridad-hero.webp"
                    alt="Ciberseguridad empresarial avanzada"
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-[#0D0C1D]/20 to-transparent opacity-70"></div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <div className="flex gap-3 mb-3">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className={`h-2.5 w-2.5 rounded-full ${
                            i === 0 
                              ? 'bg-red-500 animate-pulse' 
                              : i === 1 
                                ? 'bg-yellow-500 animate-pulse animation-delay-500' 
                                : 'bg-green-500 animate-pulse animation-delay-1000'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="bg-slate-900/60 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 text-sm">
                      <p className="text-cyan-300 font-mono mb-1">// Monitoreo en tiempo real</p>
                      <p className="text-slate-300 font-mono">
                        Detección de amenazas: <span className="text-green-400">ACTIVA</span> <span className="animate-blink">_</span>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
            >
              {threatStats.map((stat, index) => (
                <StatCard 
                  key={index}
                  value={stat.value}
                  description={stat.label}
                />
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600/30 to-transparent"></div>
        </div>
        
        {/* Services section */}
        <section className="py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-slate-600/20 to-blue-900/20 text-cyan-300 text-sm font-medium mb-3">
                SERVICIOS ESPECIALIZADOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Protección integral para tu negocio
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Ofrezco un enfoque de seguridad multicapa que protege cada aspecto de tu infraestructura digital, 
                desde tus servidores hasta el correo electrónico de tus empleados.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {securityServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-xl overflow-hidden border border-slate-700/20 hover:border-slate-600/30 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-blue-900 flex items-center justify-center text-white text-xl mb-5">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-5">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start">
                          <div className="text-cyan-400 mr-2">✓</div>
                          <p className="text-gray-400 text-sm">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Security Levels section */}
        <section className="py-12 md:py-16 mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-slate-600/20 to-blue-900/20 text-cyan-300 text-sm font-medium mb-3">
                NIVELES DE PROTECCIÓN
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Defensa en profundidad para tu empresa
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Mi estrategia de ciberseguridad implementa múltiples capas de protección para minimizar el riesgo
                y proporcionar una seguridad robusta a cada nivel de tu organización.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-4 mb-10">
              {securityLevels.map((level, index) => (
                <TabButton 
                  key={index}
                  active={activeTab === index}
                  onClick={() => setActiveTab(index)}
                  index={index}
                >
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 flex-shrink-0 flex items-center justify-center text-cyan-400">
                    {level.icon}
                  </div>
                  <span>{level.title}</span>
                </TabButton>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-xl border border-slate-700/30 p-6 relative min-h-[300px]"
              >
                <div className="absolute top-0 right-0 w-60 h-60 bg-blue-900/10 rounded-full filter blur-3xl"></div>
                
                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{securityLevels[activeTab].title}</h3>
                    <p className="text-gray-300 mb-6">{securityLevels[activeTab].description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {securityLevels[activeTab].items.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-700/30 border border-slate-600/30 rounded-full text-cyan-300 text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative h-[200px] md:h-auto overflow-hidden rounded-lg">
                    <Image
                      src={`/imagenes/ciberseguridad-${activeTab + 1}.webp`}
                      alt={securityLevels[activeTab].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        
        {/* Why Choose Me section */}
        <section className="py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-slate-600/20 to-blue-900/20 text-cyan-300 text-sm font-medium mb-3">
                ¿POR QUÉ ELEGIRME?
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ciberseguridad con enfoque de negocio
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Entiendo que la ciberseguridad debe potenciar tu negocio, no obstaculizarlo. 
                Mi enfoque equilibra protección robusta con experiencia de usuario fluida.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Experiencia certificada",
                  description: "Cuento con más de 10 años de experiencia y certificaciones líderes en la industria (CISSP, CEH, OSCP), habiendo protegido a empresas de diversos sectores.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                },
                {
                  title: "Soluciones personalizadas",
                  description: "No creo en soluciones genéricas. Desarrollo estrategias de seguridad adaptadas precisamente a tus necesidades específicas, tamaño de empresa y sector.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                },
                {
                  title: "Enfoque proactivo",
                  description: "No espero a que ocurran incidentes. Implemento monitoreo continuo y detección temprana para identificar y neutralizar amenazas antes de que causen daño.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-xl border border-slate-700/20 p-6 hover:border-slate-600/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center text-cyan-400 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-slate-600/20 to-blue-900/20 text-cyan-300 text-sm font-medium mb-3">
                METODOLOGÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mi proceso de trabajo
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Sigo un proceso estructurado para diagnosticar, implementar y mantener 
                una postura de seguridad robusta para tu empresa.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-slate-700 hidden sm:block"></div>
              
              {[
                {
                  title: "Evaluación de Riesgos",
                  description: "Realizo un diagnóstico exhaustivo para identificar vulnerabilidades en tu infraestructura, aplicaciones y procesos actuales.",
                  icon: <FaSearch />
                },
                {
                  title: "Diseño de Estrategia",
                  description: "Desarrollo un plan de ciberseguridad personalizado según los riesgos detectados y los objetivos específicos de tu negocio.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg> />
                },
                {
                  title: "Implementación",
                  description: "Despliego soluciones de seguridad de última generación con mínima interrupción a tus operaciones diarias.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg> />
                },
                {
                  title: "Capacitación",
                  description: "Entreno a tu equipo para reconocer amenazas y seguir mejores prácticas de seguridad, creando una cultura de seguridad proactiva.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg> />
                },
                {
                  title: "Monitoreo Continuo",
                  description: "Vigilo constantemente tu entorno para detectar y responder a amenazas emergentes en tiempo real, ofreciendo protección constante.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg> />
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start gap-6 mb-12 relative ${
                    index % 2 === 0 ? 'md:mr-[50%]' : 'md:ml-[50%] md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-slate-700 to-blue-900 text-white ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-lg border border-slate-700/30 flex-grow">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-700/30 text-cyan-400 mr-3">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Preguntas frecuentes
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Resuelvo tus dudas sobre mis servicios de ciberseguridad empresarial
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Qué tamaño de empresa puede beneficiarse de tus servicios?",
                  answer: "Trabajo con empresas de todos los tamaños, desde startups hasta grandes corporaciones. Mi enfoque es altamente personalizable y escalo mis servicios según tus necesidades específicas. Para pequeñas empresas, ofrezco paquetes esenciales que cubren las principales vulnerabilidades, mientras que para organizaciones más grandes, desarrollo estrategias de seguridad integrales multi-capa. Independientemente del tamaño, toda empresa con presencia digital necesita protección."
                },
                {
                  question: "¿Cómo minimizas el impacto en nuestras operaciones diarias?",
                  answer: "Diseño mis implementaciones para causar la menor interrupción posible. Utilizo un enfoque gradual, realizando la mayoría de los cambios fuera de horario comercial y por fases. Además, antes de cada implementación, desarrollo un plan detallado con cronogramas claros y puntos de control. Mi objetivo es que la transición sea fluida y que tus empleados apenas noten los cambios, excepto por la mayor seguridad y, en muchos casos, mejor rendimiento de los sistemas."
                },
                {
                  question: "¿Qué sucede si detectas una amenaza o vulnerabilidad crítica?",
                  answer: "Implemento un protocolo de respuesta inmediata. Primero, contengo la amenaza para evitar su propagación. Luego, evalúo el alcance del problema y su potencial impacto. Te comunico la situación con total transparencia, explicando la vulnerabilidad en términos comprensibles y presentando opciones de mitigación. Finalmente, implemento la solución acordada y refuerzo los sistemas para prevenir incidentes similares en el futuro. Todo este proceso está documentado en informes detallados."
                },
                {
                  question: "¿Cómo garantizas la confidencialidad de nuestra información?",
                  answer: "La confidencialidad es fundamental en mi trabajo. Firmo acuerdos de confidencialidad robustos antes de iniciar cualquier proyecto. Utilizo comunicaciones cifradas y almacenamiento seguro para toda la información relacionada con tu empresa. Además, implemento el principio de mínimo privilegio, limitando el acceso a la información sensible solo al personal estrictamente necesario. Todos los informes y documentación se manejan con protocolos de seguridad avanzados y son entregados únicamente a los contactos autorizados."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 rounded-xl border border-slate-700/30"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/30 to-blue-900/30"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-700/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Protege tu negocio de amenazas digitales
                    </h2>
                    <p className="text-gray-300 mb-6">
                      No esperes a ser víctima de un ciberataque para actuar. Implementa una estrategia 
                      de ciberseguridad robusta y protege tus activos más valiosos: tus datos y la confianza 
                      de tus clientes.
                    </p>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6">
                      {[
                        "Auditoría de seguridad completa",
                        "Plan personalizado de protección",
                        "Soporte y monitoreo 24/7"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-r from-slate-600 to-cyan-600 flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="px-8 py-3 bg-gradient-to-r from-slate-700 to-blue-900 text-white rounded-lg hover:shadow-glow-blue transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>Solicitar diagnóstico</span>
                      <FaArrowRight />
                    </button>
                    <a
                      href="https://calendly.com/deivipluss/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Agendar llamada consultiva
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. ¡Todos los derechos reservados!
      </footer>
    
      {/* Contact form modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-slate-600/30"
            >
              <button 
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-slate-700 to-blue-900 flex items-center justify-center">
                    <FaShieldAlt className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Ciberseguridad Empresarial</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntame sobre tu empresa y tus necesidades de seguridad</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-slate-700/50 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-[#0D0C1D] border border-slate-700/50 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full p-3 bg-[#0D0C1D] border border-slate-700/50 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="company_size" className="block text-sm font-medium text-gray-300 mb-1">
                    Tamaño de empresa
                  </label>
                  <select
                    id="company_size"
                    className="w-full p-3 bg-[#0D0C1D] border border-slate-700/50 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="1-10">1-10 empleados</option>
                    <option value="11-50">11-50 empleados</option>
                    <option value="51-200">51-200 empleados</option>
                    <option value="201+">Más de 200 empleados</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué necesidades específicas de ciberseguridad tienes?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-slate-700/50 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Describe tus preocupaciones o necesidades de seguridad..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-slate-700 to-blue-900 text-white rounded-lg hover:shadow-glow-blue transition-all duration-300"
                  >
                    Solicitar diagnóstico de seguridad gratuito
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Te contactaré en menos de 24 horas con información detallada
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .shadow-glow-blue {
          box-shadow: 0 0 25px rgba(37, 99, 235, 0.2);
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
