"use client";
import React, { useState, useRef } from "react";
import { 
  FaChartLine, 
  FaSyncAlt, 
  FaLightbulb, 
  FaSitemap, 
  FaArrowRight,
  FaClipboardCheck,
  FaProjectDiagram,
  FaSearchPlus,
  FaTasks,
  FaRegChartBar
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function AuditoriaOptimizacionPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeProcess, setActiveProcess] = useState(0);
  const [activeTab, setActiveTab] = useState("diagnostico");
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  
  const processImprovements = [
    {
      title: "Reducción de desperdicios",
      description: "Identifico actividades que no agregan valor en tus procesos para eliminarlas o rediseñarlas, reduciendo costos operativos.",
      icon: <FaSyncAlt />,
      metrics: "Promedio 32% de reducción de costes operativos"
    },
    {
      title: "Automatización inteligente",
      description: "Implemento soluciones de automatización para tareas repetitivas, liberando el potencial creativo de tu equipo para actividades estratégicas.",
      icon: <FaProjectDiagram />,
      metrics: "Hasta 65% menos tiempo en procesos administrativos"
    },
    {
      title: "Rediseño de flujos de trabajo",
      description: "Analizo y reestructuro procesos para eliminar cuellos de botella, reducir la fricción y mejorar la colaboración interdepartamental.",
      icon: <FaSitemap />,
      metrics: "Mejora del 47% en velocidad de entrega"
    },
    {
      title: "Optimización de KPIs",
      description: "Desarrollo sistemas de medición precisos que alinean indicadores operativos con estratégicos para una mejora continua.",
      icon: <FaRegChartBar />,
      metrics: "Incremento del 28% en precisión de pronósticos"
    }
  ];

  const methodologySteps = [
    {
      title: "Diagnóstico Profundo",
      description: "Analizo minuciosamente tus procesos actuales para identificar ineficiencias, redundancias y áreas de mejora mediante entrevistas, observación directa y análisis de datos.",
      icon: <FaSearchPlus />,
      features: [
        "Mapeo de procesos end-to-end",
        "Análisis de tiempos y movimientos",
        "Identificación de cuellos de botella",
        "Evaluación de uso de recursos"
      ]
    },
    {
      title: "Diseño de Soluciones",
      description: "Desarrollo propuestas personalizadas de mejora basadas en principios de lean management, six sigma y automatización inteligente adaptadas a tu contexto específico.",
      icon: <FaLightbulb />,
      features: [
        "Rediseño de procesos críticos",
        "Propuestas de automatización",
        "Estandarización de procedimientos",
        "Modelos predictivos para anticipar problemas"
      ]
    },
    {
      title: "Implementación Guiada",
      description: "Acompaño a tu equipo en la implementación de los cambios propuestos, asegurando una transición fluida y minimizando resistencias internas.",
      icon: <FaTasks />,
      features: [
        "Plan de implementación por fases",
        "Capacitación al personal clave",
        "Gestión del cambio organizacional",
        "Ajustes en tiempo real según resultados"
      ]
    },
    {
      title: "Medición y Mejora Continua",
      description: "Establezco sistemas robustos de monitoreo y mejora continua para garantizar que las optimizaciones implementadas se mantengan y evolucionen con tu negocio.",
      icon: <FaClipboardCheck />,
      features: [
        "Tableros de control en tiempo real",
        "Sistema de alertas tempranas",
        "Ciclos de retroalimentación",
        "Cultura de mejora continua"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "La auditoría de procesos fue reveladora. Identificaron ineficiencias que llevábamos años arrastrando sin detectar. Tras implementar sus recomendaciones, nuestro tiempo de respuesta al cliente mejoró un 40% y redujimos costos operativos en un 25%.",
      author: "Luisa Méndez",
      position: "Directora de Operaciones",
      company: "LogisticaExpress"
    },
    {
      quote: "El enfoque meticuloso y personalizado hizo toda la diferencia. No solo optimizaron nuestros procesos, sino que capacitaron a nuestro equipo para mantener la mejora continua. El ROI de este servicio superó todas nuestras expectativas.",
      author: "Roberto Gómez",
      position: "CEO",
      company: "Manufactura Industrial S.A."
    },
    {
      quote: "La transformación de nuestros procesos internos fue sorprendente. Pasamos de luchar contra la ineficiencia a tener operaciones fluidas y medibles. La claridad que ahora tenemos sobre nuestros propios procesos nos permite tomar decisiones mucho más informadas.",
      author: "Carmen Rodríguez",
      position: "COO",
      company: "TechServices"
    }
  ];

  const StatCard = ({ title, value, description }: { title: string; value: string; description: string; }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 border border-indigo-500/10 p-5 rounded-xl"
    >
      <h3 className="text-indigo-400 font-medium text-lg mb-2">{title}</h3>
      <p className="text-4xl font-bold text-white mb-3">{value}</p>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );

  const TabButton = ({ id, label, active, onClick }: { id: string; label: string; active: boolean; onClick: () => void }) => (
    <button 
      onClick={onClick}
      className={`py-2 px-4 rounded-lg transition-all duration-300 ${
        active 
          ? "bg-gradient-to-r from-indigo-600/30 to-purple-600/30 text-white border border-indigo-500/30" 
          : "text-gray-400 hover:text-white hover:bg-indigo-500/10"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-600/5 filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/5 filter blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/5 filter blur-[100px] pointer-events-none"></div>
        
        {/* Hero Section */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 text-sm font-medium mb-4 border border-indigo-500/30">
                  EXCELENCIA OPERATIVA
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Auditoría y <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">Optimización</span> de Procesos
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Transformo procesos ineficientes en flujos de trabajo optimizados que maximizan tu productividad y rentabilidad. Mi enfoque sistemático identifica oportunidades de mejora que otros pasan por alto.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg hover:shadow-glow-indigo transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Optimizar mis procesos</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <a 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
                  >
                    Agendar diagnóstico gratuito
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, scale: isHeaderInView ? 1 : 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="relative h-[400px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl"></div>
                  <Image
                    src="/imagenes/auditoria-procesos.webp"
                    alt="Auditoría y optimización de procesos empresariales"
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-transparent to-transparent opacity-60"></div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <div className="bg-[#1A1A2E]/80 backdrop-blur-sm p-4 rounded-lg border border-indigo-500/20">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white">
                          <FaChartLine />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Procesos optimizados</h3>
                          <p className="text-indigo-300 text-sm">Mayor eficiencia, menor costo</p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-700/30 h-2 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: "0%" }}
                          animate={{ width: "87%" }}
                          transition={{ duration: 1, delay: 1 }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                        />
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-gray-400 text-xs">Antes</span>
                        <span className="text-indigo-300 text-xs">87% más eficiente</span>
                      </div>
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
              <StatCard 
                title="Eficiencia operativa"
                value="+43%"
                description="Incremento promedio en eficiencia tras la optimización"
              />
              <StatCard 
                title="Costos operativos"
                value="-32%"
                description="Reducción media en gastos de operación"
              />
              <StatCard 
                title="Tiempo de ciclo"
                value="-54%"
                description="Reducción en tiempos de proceso end-to-end"
              />
              <StatCard 
                title="ROI garantizado"
                value="5.2×"
                description="Retorno sobre la inversión promedio"
              />
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
        </div>

        {/* Process Improvements Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 text-sm font-medium mb-3">
                BENEFICIOS PARA TU NEGOCIO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformación de procesos con impacto real
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mis intervenciones generan mejoras cuantificables y sostenibles que impactan directamente en tu 
                rentabilidad y competitividad.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {processImprovements.map((improvement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 ${
                    activeProcess === index ? 'ring-2 ring-indigo-500/30' : ''
                  }`}
                  onClick={() => setActiveProcess(index)}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white text-xl mr-4">
                      {improvement.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{improvement.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{improvement.description}</p>
                  
                  <div className="bg-[#0D0C1D]/50 p-3 rounded-lg text-indigo-300 text-sm border border-indigo-500/10">
                    📊 <span className="font-medium">{improvement.metrics}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Methodology Section */}
        <section className="py-12 mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E]/40 to-transparent rounded-xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 text-sm font-medium mb-3">
                MI METODOLOGÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enfoque científico para optimizar procesos
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Utilizo una metodología probada que combina principios de Lean, Six Sigma y gestión del cambio 
                para transformar tus operaciones.
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center mt-8 mb-8">
                <TabButton 
                  id="diagnostico"
                  label="Diagnóstico"
                  active={activeTab === "diagnostico"}
                  onClick={() => setActiveTab("diagnostico")}
                />
                <TabButton 
                  id="diseno"
                  label="Diseño"
                  active={activeTab === "diseno"}
                  onClick={() => setActiveTab("diseno")}
                />
                <TabButton 
                  id="implementacion"
                  label="Implementación"
                  active={activeTab === "implementacion"}
                  onClick={() => setActiveTab("implementacion")}
                />
                <TabButton 
                  id="medicion"
                  label="Mejora continua"
                  active={activeTab === "medicion"}
                  onClick={() => setActiveTab("medicion")}
                />
              </div>
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {methodologySteps.map((step, index) => (
                activeTab === ["diagnostico", "diseno", "implementacion", "medicion"][index] && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-5 gap-8 items-center"
                  >
                    <div className="md:col-span-2 relative">
                      <div className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-xl border border-indigo-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/10 rounded-full filter blur-xl"></div>
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white text-2xl mb-6">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-gray-300 mb-6 z-10 relative">{step.description}</p>
                        
                        <div className="mt-4 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mr-3">
                            {index + 1}
                          </div>
                          <div className="h-1 flex-grow bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-3 grid grid-cols-2 gap-4">
                      {step.features.map((feature, i) => (
                        <div 
                          key={i}
                          className="bg-[#1A1A2E]/60 p-4 rounded-lg border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
                        >
                          <div className="flex items-center mb-2">
                            <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mr-2 flex-shrink-0">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <p className="text-indigo-200 font-medium">{feature}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-xl border border-indigo-500/20"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center text-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">¿Por qué mi metodología es diferente?</h3>
                  </div>
                  <p className="text-gray-300">Mi enfoque integra análisis cuantitativo con diseño centrado en personas. No solo optimizo procesos, sino que creo culturas de mejora continua que perduran mucho después de mi intervención.</p>
                </div>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg hover:shadow-glow-indigo transition-all duration-300 whitespace-nowrap flex items-center gap-2"
                >
                  <span>Consultar mi enfoque</span>
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 text-sm font-medium mb-3">
                CASOS DE ÉXITO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Resultados que hablan por sí mismos
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Empresas que han transformado sus operaciones mediante mi metodología de auditoría y optimización
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl overflow-hidden border border-indigo-500/20 mb-12"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8">
                  <span className="inline-block bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded-md text-sm font-medium mb-4">
                    CASO DESTACADO
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">Transformación logística global</h3>
                  <p className="text-gray-300 mb-6">
                    Una empresa de distribución internacional enfrentaba graves retrasos en sus procesos de despacho.
                    Mi intervención rediseñó por completo su sistema logístico, resultando en:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#0D0C1D]/50 p-4 rounded-lg">
                      <p className="text-xl font-bold text-indigo-400">68%</p>
                      <p className="text-xs text-gray-400">reducción en tiempo de despacho</p>
                    </div>
                    <div className="bg-[#0D0C1D]/50 p-4 rounded-lg">
                      <p className="text-xl font-bold text-indigo-400">$1.2M</p>
                      <p className="text-xs text-gray-400">ahorro anual en costos operativos</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Image 
                        src="/imagenes/client-logo.webp" 
                        alt="Logo del cliente" 
                        width={40} 
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-white font-medium">Global Logistics Inc.</p>
                        <p className="text-gray-400 text-xs">Distribución Internacional</p>
                      </div>
                    </div>
                    <a 
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-sm transition-colors"
                    >
                      <span>Ver detalles</span>
                      <FaArrowRight className="text-xs" />
                    </a>
                  </div>
                </div>
                
                <div className="relative h-[300px] md:h-auto">
                  <Image 
                    src="/imagenes/caso-logistica.webp" 
                    alt="Caso de estudio - Transformación logística" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1A1A2E] opacity-90 md:opacity-0"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 md:flex hidden">
                    <div className="bg-gradient-to-t from-[#0D0C1D] to-transparent h-32 w-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-indigo-500/10 relative"
                >
                  <div className="h-12 flex items-center mb-4">
                    <div className="text-indigo-500 text-4xl opacity-30">"</div>
                  </div>
                  <p className="text-gray-300 italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center text-white text-lg font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-gray-400 text-xs">{testimonial.position}, <span className="text-indigo-400">{testimonial.company}</span></p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 text-indigo-500 text-4xl opacity-30 mb-4 mr-6">"</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 mb-20">
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
                Resuelve tus dudas sobre mi servicio de auditoría y optimización de procesos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Cómo determinas qué procesos necesitan optimización?",
                  answer: "Utilizo un enfoque basado en datos para identificar los procesos con mayor impacto potencial. Primero realizo una evaluación integral que incluye entrevistas con stakeholders clave, análisis de datos operativos y observación directa de los flujos de trabajo. Luego, priorizo las áreas de intervención según tres criterios: impacto en resultados empresariales, recursos necesarios para la optimización y probabilidad de éxito sostenible."
                },
                {
                  question: "¿Cuánto tiempo toma implementar las mejoras de procesos?",
                  answer: "El tiempo varía según la complejidad de los procesos y el tamaño de la organización. Las intervenciones tácticas pueden implementarse en 2-4 semanas con resultados inmediatos, mientras que las transformaciones estratégicas completas típicamente requieren entre 3-6 meses. Trabajo con un enfoque de mejora incremental, generando 'victorias rápidas' mientras construimos cambios estructurales más profundos."
                },
                {
                  question: "¿Qué nivel de disrupción debemos esperar durante la implementación?",
                  answer: "Mi metodología está diseñada para minimizar interrupciones operacionales. Utilizo un enfoque de implementación por fases que permite que el negocio continúe funcionando mientras se realizan las mejoras. Además, involucro activamente a los equipos afectados en el proceso de cambio, lo que reduce la resistencia y acelera la adopción. La mayoría de los clientes reportan disrupciones mínimas o nulas en sus operaciones diarias."
                },
                {
                  question: "¿Cómo garantizas que las mejoras sean sostenibles a largo plazo?",
                  answer: "La sostenibilidad es un componente central de mi metodología. Implemento tres elementos clave: 1) sistemas robustos de medición y monitoreo que permiten detectar desviaciones tempranamente, 2) capacitación intensiva del personal para crear capacidades internas de mejora continua, y 3) documentación exhaustiva de los nuevos procesos y protocolos de gestión. Además, ofrezco sesiones de seguimiento a los 3, 6 y 12 meses para asegurar que los cambios se mantengan y evolucionen."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 p-6 rounded-xl border border-indigo-500/10"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl border border-indigo-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-700/20"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      ¿Listo para transformar tus procesos empresariales?
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Déjame ayudarte a identificar oportunidades de mejora ocultas en tus operaciones y desarrollar 
                      soluciones a medida que impulsen tu eficiencia y rentabilidad.
                    </p>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-6 mb-6">
                      {[
                        "Diagnóstico inicial gratuito",
                        "Propuesta personalizada en 48 horas",
                        "Garantía de resultados cuantificables"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs">
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
                      className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg hover:shadow-glow-indigo transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
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
                      Agendar consulta
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
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-indigo-500/30"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center">
                    <FaChartLine className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Auditoría y Optimización de Procesos</h3>
                <p className="text-gray-300 text-center mb-6">Comparte información sobre los procesos que deseas optimizar</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="process_area" className="block text-sm font-medium text-gray-300 mb-1">
                    Área de procesos a optimizar
                  </label>
                  <select
                    id="process_area"
                    className="w-full p-3 bg-[#0D0C1D] border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="operaciones">Operaciones y Producción</option>
                    <option value="logistica">Logística y Cadena de Suministro</option>
                    <option value="ventas">Ventas y Servicio al Cliente</option>
                    <option value="administrativo">Procesos Administrativos</option>
                    <option value="rrhh">Recursos Humanos</option>
                    <option value="otro">Otro (especificar)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Describe brevemente los procesos y desafíos actuales
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Explica los procesos que quieres optimizar y los principales problemas o ineficiencias..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg hover:shadow-glow-indigo transition-all duration-300"
                  >
                    Solicitar diagnóstico gratuito
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Te contactaré en menos de 24 horas con una propuesta personalizada
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .shadow-glow-indigo {
          box-shadow: 0 0 25px rgba(79, 70, 229, 0.3);
        }
      `}</style>
    </div>
  );
}
