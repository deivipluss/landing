"use client";
import React, { useState, useRef } from "react";
import { 
  FaRocket, 
  FaChartLine, 
  FaUsers, 
  FaArrowRight,
  FaCheck,
  FaSearchDollar,
  FaBullhorn,
  FaHandshake,
  FaPuzzlePiece,
  FaTrophy,
  FaLightbulb,
  FaRegLightbulb
} from "react-icons/fa";
import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function EstrategiasVentaPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Servicios principales de estrategias de venta
  const estrategiasDeVenta = [
    {
      title: "Plan de Ventas",
      description: "Desarrollo de estrategias personalizadas para alcanzar objetivos comerciales a corto y largo plazo, con KPIs claros y medibles.",
      icon: <FaRocket className="text-xl" />,
      features: [
        "Análisis de situación actual",
        "Definición de objetivos SMART",
        "Estrategias de penetración",
        "Plan de acción detallado"
      ]
    },
    {
      title: "Procesos Comerciales",
      description: "Optimización del embudo de ventas, desde la captación de leads hasta el cierre y fidelización, maximizando la eficiencia de cada etapa.",
      icon: <FaChartLine className="text-xl" />,
      features: [
        "Embudo de conversión",
        "Scripts de venta efectivos",
        "Procesos de seguimiento",
        "Sistema de CRM personalizado"
      ]
    },
    {
      title: "Capacitación de Equipo",
      description: "Entrenamiento intensivo para tu equipo comercial, dotándolos de habilidades y técnicas modernas para cerrar más ventas.",
      icon: <FaUsers className="text-xl" />,
      features: [
        "Técnicas de negociación",
        "Manejo de objeciones",
        "Psicología del cliente",
        "Cierre efectivo"
      ]
    },
    {
      title: "Estrategia Omnicanal",
      description: "Integración efectiva de canales online y offline para crear una experiencia de compra fluida y coherente para tus clientes.",
      icon: <FaPuzzlePiece className="text-xl" />,
      features: [
        "Integración de canales",
        "Customer Journey Map",
        "Puntos de contacto clave",
        "Métricas cross-channel"
      ]
    }
  ];

  // Metodologías aplicadas
  const metodologias = [
    {
      title: "Value Selling",
      description: "Enfoque centrado en el valor que aporta tu producto o servicio al cliente, más allá del precio o características técnicas.",
      icon: <FaHandshake className="text-xl" />
    },
    {
      title: "Growth Hacking",
      description: "Estrategias de crecimiento rápido basadas en experimentos validados y optimización continua del embudo de ventas.",
      icon: <FaRocket className="text-xl" />
    },
    {
      title: "Social Selling",
      description: "Aprovechamiento estratégico de las redes sociales para construir relaciones significativas con potenciales clientes.",
      icon: <FaUsers className="text-xl" />
    },
    {
      title: "Consultative Selling",
      description: "Técnicas de venta consultiva donde te posicionas como asesor experto que resuelve problemas complejos.",
      icon: <FaRegLightbulb className="text-xl" />
    },
    {
      title: "Inbound Sales",
      description: "Atracción de clientes potenciales mediante contenido de valor y acompañamiento durante su proceso de compra.",
      icon: <FaBullhorn className="text-xl" />
    },
    {
      title: "Account-Based Marketing",
      description: "Estrategia orientada a grandes cuentas, con comunicación personalizada y enfoque en decisores clave.",
      icon: <FaSearchDollar className="text-xl" />
    }
  ];

  // Proceso de implementación
  const procesosImplementacion = [
    {
      title: "Diagnóstico Comercial",
      description: "Analizo a fondo tu situación actual, identificando fortalezas, debilidades y oportunidades ocultas en tu proceso de ventas.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    },
    {
      title: "Diseño Estratégico",
      description: "Creo un plan de acción personalizado con objetivos claros, estrategias precisas y tácticas específicas para tu contexto de negocio.",
      icon: <FaLightbulb />
    },
    {
      title: "Implementación Guiada",
      description: "Te acompaño en la puesta en marcha de cada elemento del plan, asegurando la correcta ejecución y adaptación a tu equipo.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    },
    {
      title: "Capacitación y Desarrollo",
      description: "Entreno a tu equipo con las habilidades necesarias para ejecutar el nuevo enfoque comercial con confianza y efectividad.",
      icon: <FaUsers />
    },
    {
      title: "Seguimiento y Optimización",
      description: "Monitoreamos los KPIs clave, iterando y optimizando la estrategia basándonos en resultados reales y feedback del mercado.",
      icon: <FaChartLine />
    }
  ];

  // Resultados que consiguen los clientes
  const resultados = [
    {
      metric: "+45%",
      description: "Incremento promedio en tasa de conversión",
    },
    {
      metric: "-35%",
      description: "Reducción del ciclo de ventas",
    },
    {
      metric: "+130%",
      description: "Aumento en valor de ticket promedio",
    },
    {
      metric: "3X",
      description: "Multiplicación de leads cualificados",
    }
  ];

  // Paquetes de servicio
  const paquetes = [
    {
      title: "Diagnóstico Express",
      price: "Desde $990",
      features: [
        "Análisis de proceso de venta actual",
        "Identificación de cuellos de botella",
        "Benchmarking competitivo",
        "Reporte de oportunidades clave",
        "1 sesión estratégica de 2h",
        "Recomendaciones prioritarias"
      ],
      color: "emerald",
      popular: false
    },
    {
      title: "Plan Estratégico Completo",
      price: "Desde $2,990",
      features: [
        "Diagnóstico comercial profundo",
        "Diseño de estrategia personalizada",
        "Plan de acción detallado por etapas",
        "Capacitación básica del equipo (4h)",
        "Implementación de CRM básico",
        "Scripts y plantillas comerciales",
        "Seguimiento por 30 días",
        "Métricas y KPIs personalizados"
      ],
      color: "teal",
      popular: true
    },
    {
      title: "Transformación Comercial",
      price: "Desde $5,990",
      features: [
        "Todo lo del Plan Estratégico",
        "Capacitación avanzada (16h)",
        "Acompañamiento en implementación",
        "Coaching individual a líderes",
        "Auditorías de llamadas y reuniones",
        "Integración de estrategia omnicanal",
        "Creación de playbooks de venta",
        "Seguimiento por 90 días",
        "Optimización continua del proceso"
      ],
      color: "cyan",
      popular: false
    }
  ];

  // Componente de Tab para Estrategias
  const EstrategiaTab = ({ estrategia, active, onClick, index }: {
    estrategia: typeof estrategiasDeVenta[0];
    active: boolean;
    onClick: () => void;
    index: number;
  }) => (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-300 w-full ${
        active
          ? "bg-gradient-to-r from-teal-600/30 to-emerald-700/30 border border-teal-500/30 text-white" 
          : "text-gray-400 hover:bg-teal-900/20 hover:text-gray-300"
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white">
        {estrategia.icon}
      </div>
      <span className="hidden md:block">{estrategia.title}</span>
    </motion.button>
  );

  // Componente de tarjeta para paquetes
  const PaqueteCard = ({ 
    title, 
    price, 
    features, 
    color, 
    popular 
  }: { 
    title: string;
    price: string; 
    features: string[]; 
    color: string;
    popular: boolean;
  }) => {
    // Define color classes mapping
    const colorVariants = {
      emerald: {
        bg: "from-emerald-500 to-emerald-700",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
      },
      teal: {
        bg: "from-teal-500 to-emerald-600",
        border: "border-teal-500/30",
        text: "text-teal-400",
      },
      cyan: {
        bg: "from-cyan-500 to-teal-600",
        border: "border-cyan-500/30",
        text: "text-cyan-400",
      }
    };
    
    // Get the correct variant based on the color prop
    const colorClasses = colorVariants[color as keyof typeof colorVariants];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl overflow-hidden ${
          popular ? `ring-2 ring-${color}-500/30 ${colorClasses.border}` : 'border border-teal-500/20'
        }`}
      >
        {popular && (
          <div className={`bg-gradient-to-r ${colorClasses.bg} text-center py-2`}>
            <p className="text-white text-sm font-medium">MÁS POPULAR</p>
          </div>
        )}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colorClasses.bg} mb-4`}>
            {price}
          </div>
          
          <div className="space-y-3 mb-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start">
                <FaCheck className={`${colorClasses.text} mr-2 mt-1 flex-shrink-0`} />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="px-6 pb-6">
          <button
            onClick={() => setShowContactForm(true)}
            className={`w-full py-3 bg-gradient-to-r ${colorClasses.bg} text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
          >
            <span>Solicitar presupuesto</span>
            <FaArrowRight />
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-teal-600/5 filter blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-emerald-600/5 filter blur-[120px] pointer-events-none"></div>
        
        {/* Sección Hero */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-300 text-sm font-medium mb-4 border border-teal-500/30">
                  ESTRATEGIAS DE VENTA
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Transformo equipos en <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">máquinas de venta</span>
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Diseño estrategias comerciales que maximizan resultados, optimizan procesos de venta y capacitan a tu equipo para superar constantemente sus objetivos.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg hover:shadow-glow-teal transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Potencia tus ventas ahora</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-teal-500 text-teal-400 rounded-lg hover:bg-teal-500/10 transition-all duration-300"
                  >
                    Agendar llamada de diagnóstico
                  </Link>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-y-4 gap-x-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white">
                      <FaTrophy />
                    </div>
                    <div>
                      <div className="text-white font-medium">+63</div>
                      <div className="text-gray-400 text-xs">equipos transformados</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white">
                      <FaChartLine />
                    </div>
                    <div>
                      <div className="text-white font-medium">+243%</div>
                      <div className="text-gray-400 text-xs">aumento promedio en ventas</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, scale: isHeaderInView ? 1 : 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="relative h-[400px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-xl"></div>
                  <Image
                    src="/imagenes/estrategias-venta-hero.webp"
                    alt="Estrategias de venta efectivas"
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Dashboard de ventas flotante */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <div className="bg-[#1A1A2E]/80 backdrop-blur-sm p-4 rounded-lg border border-teal-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white">
                          <FaChartLine />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Rendimiento de ventas</h3>
                        </div>
                        <span className="ml-auto text-emerald-400 text-sm flex items-center">
                          +147% <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-teal-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">89%</div>
                          <div className="text-gray-400 text-xs">Tasa de cierre</div>
                        </div>
                        <div className="bg-teal-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">-27%</div>
                          <div className="text-gray-400 text-xs">Ciclo de venta</div>
                        </div>
                        <div className="bg-teal-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">3.8X</div>
                          <div className="text-gray-400 text-xs">ROI medio</div>
                        </div>
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
              {resultados.map((resultado, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 border border-teal-500/10 p-5 rounded-xl"
                >
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500 mb-2">{resultado.metric}</p>
                  <p className="text-gray-400 text-sm">{resultado.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
        </div>
        
        {/* Sección de Servicios de Estrategias */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-300 text-sm font-medium mb-3">
                SOLUCIONES COMERCIALES
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Servicios de estrategia comercial
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Desarrollo planes personalizados para potenciar tu área comercial, 
                optimizar la conversión y aumentar drásticamente la efectividad de tu equipo de ventas.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {estrategiasDeVenta.map((estrategia, index) => (
                <EstrategiaTab
                  key={index}
                  estrategia={estrategia}
                  active={activeTab === index}
                  onClick={() => setActiveTab(index)}
                  index={index}
                />
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-8 border border-teal-500/20"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {estrategiasDeVenta[activeTab].icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{estrategiasDeVenta[activeTab].title}</h3>
                    <p className="text-gray-300 mb-6">{estrategiasDeVenta[activeTab].description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {estrategiasDeVenta[activeTab].features.map((feature, i) => (
                        <div key={i} className="bg-teal-900/20 py-2 px-3 rounded-lg border border-teal-500/10 flex items-center">
                          <div className="w-2 h-2 rounded-full bg-teal-400 mr-2"></div>
                          <span className="text-teal-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg hover:shadow-md transition-all duration-300 flex items-center gap-2 flex-shrink-0 mt-4 md:mt-0"
                  >
                    <span>Solicitar presupuesto</span>
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        
        {/* Sección de Metodologías */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-300 text-sm font-medium mb-3">
                ENFOQUE
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Metodologías probadas que funcionan
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Combino técnicas modernas y validadas para crear estrategias comerciales 
                efectivas que se adaptan perfectamente a tu sector y público objetivo.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {metodologias.map((metodologia, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-teal-600 to-emerald-700 flex items-center justify-center text-white text-xl mb-5">
                    {metodologia.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{metodologia.title}</h3>
                  
                  <p className="text-gray-300">{metodologia.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sección de Proceso */}
        <section className="py-12 mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E]/40 to-transparent rounded-xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-300 text-sm font-medium mb-3">
                IMPLEMENTACIÓN
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mi enfoque para potenciar tus ventas
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Te guío paso a paso, desde el diagnóstico inicial hasta la implementación completa, 
                garantizando resultados medibles y sostenibles en el tiempo.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Línea central del timeline con gradiente */}
              <div className="absolute h-full w-1 bg-gradient-to-b from-teal-500 via-emerald-600 to-teal-800/40 left-[15px] md:left-1/2 top-0 transform md:-translate-x-1/2 hidden sm:block"></div>
              
              {procesosImplementacion.map((proceso, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start gap-4 md:gap-8 mb-12 relative ${
                    index % 2 === 0 ? 'md:mr-[50%]' : 'md:ml-[50%] md:flex-row-reverse'
                  }`}
                >
                  {/* Indicador de número de paso con efecto de brillo */}
                  <div className={`relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 
                    bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold shadow-md shadow-teal-500/30 ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}>
                    {index + 1}
                    <div className="absolute inset-0 rounded-full bg-teal-500/20 animate-pulse"></div>
                  </div>
                  
                  {/* Caja de contenido del paso con gradiente mejorado */}
                  <div className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-5 md:p-6 rounded-lg border border-teal-500/20 
                    flex-grow hover:border-teal-500/40 transition-all duration-300 group shadow-lg shadow-teal-900/10">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-teal-900/30 text-teal-400 mr-3 
                        group-hover:bg-teal-800/40 transition-colors duration-300">
                        {proceso.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{proceso.title}</h3>
                    </div>
                    <p className="text-gray-300">{proceso.description}</p>
                    
                    {/* Línea de conexión al timeline (solo visible en pantallas grandes) */}
                    <div className={`absolute top-[20px] w-4 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 hidden md:block
                      ${index % 2 === 0 ? 'right-0 translate-x-[calc(100%+1rem)]' : 'left-0 -translate-x-[calc(100%+1rem)]'}`}>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sección de Precios */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-300 text-sm font-medium mb-3">
                PLANES DE SERVICIO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Inversión en tu estrategia comercial
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Planes diseñados para diferentes niveles de necesidad, 
                desde consultoría puntual hasta transformación comercial completa.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {paquetes.map((paquete, index) => (
                <PaqueteCard
                  key={index}
                  title={paquete.title}
                  price={paquete.price}
                  features={paquete.features}
                  color={paquete.color}
                  popular={paquete.popular}
                />
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-xl border border-teal-500/20 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white">
                  <FaHandshake className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">¿Necesitas una solución personalizada?</h3>
                  <p className="text-gray-300 text-sm">Contacta para un plan a medida adaptado a tu industria y objetivos específicos</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg hover:shadow-md transition-all duration-300 whitespace-nowrap md:ml-auto"
              >
                Solicitar consultoría estratégica
              </button>
            </motion.div>
          </div>
        </section>
        
        {/* Sección de Casos de Éxito */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-300 text-sm font-medium mb-3">
                RESULTADOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Casos de éxito recientes
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Empresas que han transformado sus resultados comerciales 
                implementando mis estrategias y metodologías.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Empresa de SaaS B2B",
                  description: "Implementamos un proceso de social selling y venta consultiva que aumentó la tasa de conversión de demos en un 43% y redujo el ciclo de ventas de 45 a 29 días.",
                  metrics: [
                    { value: "+137%", label: "Incremento en ventas" },
                    { value: "+43%", label: "Tasa de conversión" },
                    { value: "-35%", label: "Reducción ciclo de ventas" }
                  ],
                  image: "/imagenes/caso-exito-saas.webp"
                },
                {
                  title: "Retail Omnicanal",
                  description: "Desarrollamos una estrategia de capacitación para vendedores y un sistema de incentivos que logró aumentar el ticket medio en tienda física y mejorar la integración con canal online.",
                  metrics: [
                    { value: "+28%", label: "Aumento en ticket promedio" },
                    { value: "+64%", label: "Ventas cruzadas" },
                    { value: "92%", label: "Satisfacción de clientes" }
                  ],
                  image: "/imagenes/caso-exito-retail.webp"
                }
              ].map((caso, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl overflow-hidden border border-teal-500/20"
                >
                  <div className="h-52 relative">
                    <Image
                      src={caso.image}
                      alt={caso.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-[#1A1A2E]/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{caso.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-300 mb-6">{caso.description}</p>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {caso.metrics.map((metric, i) => (
                        <div key={i} className="bg-teal-900/20 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">{metric.value}</div>
                          <div className="text-gray-400 text-xs">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sección FAQ */}
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
                Resuelve tus dudas sobre mis servicios de estrategia comercial
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿En cuánto tiempo puedo esperar ver resultados?",
                  answer: "Los primeros resultados suelen verse entre 4-8 semanas tras implementar las estrategias, con mejoras en métricas de actividad comercial desde las primeras semanas. Para transformaciones profundas, el impacto completo se consolida en 3-6 meses, dependiendo de la complejidad de tu ciclo de venta y la adopción de nuevos procesos por parte del equipo."
                },
                {
                  question: "¿Trabajas con cualquier tipo de empresa o sector?",
                  answer: "Me especializo en B2B, SaaS, servicios profesionales y retail con componente consultivo. Si bien los principios comerciales efectivos son universales, prefiero concentrarme en estos sectores para aportar mayor valor. Cada industria tiene particularidades, por eso adapto las estrategias a tu contexto específico, basándome en mi experiencia previa en sectores similares."
                },
                {
                  question: "¿Cómo desarrollas la implementación con equipos remotos?",
                  answer: "He diseñado una metodología específica para equipos distribuidos que incluye herramientas digitales de seguimiento, sesiones interactivas online, role-plays virtuales y sistemas de accountability digital. Esto permite que la distancia no sea un impedimento para transformar procesos comerciales, incluso en equipos completamente remotos o híbridos."
                },
                {
                  question: "¿Qué ocurre si ya tenemos procesos de venta establecidos?",
                  answer: "Mi enfoque no es reemplazar sino optimizar lo que funciona. Primero analizamos los procesos actuales, identificamos fortalezas y áreas de mejora, para luego refinar estratégicamente sin interrumpir la operación. La mayoría de mis clientes ya tienen sistemas establecidos; mi valor está en potenciarlos con elementos estratégicos que maximizan su efectividad y resultados."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 p-6 rounded-xl border border-teal-500/10"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sección CTA */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl border border-teal-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-emerald-700/20"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Transforma tu equipo de ventas en un motor de crecimiento
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Las estrategias adecuadas marcan la diferencia entre equipos de ventas promedio 
                      y excepcionales. Implementemos juntos un sistema que multiplique tus resultados 
                      y cree una cultura comercial ganadora.
                    </p>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-6 mb-6">
                      {[
                        "Diagnóstico comercial gratuito",
                        "Planes personalizados",
                        "Implementación guiada",
                        "Resultados garantizados"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white text-xs">
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
                      className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg hover:shadow-glow-teal transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>Potenciar mis ventas ahora</span>
                      <FaArrowRight />
                    </button>
                    <Link
                      href="https://calendly.com/deivipluss/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Agendar consultoría estratégica
                    </Link>
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
    
      {/* Formulario de contacto modal */}
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
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-teal-500/30"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center">
                    <FaChartLine className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Estrategia de Ventas</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntame sobre tu equipo comercial y tus objetivos</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-teal-500/30 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-teal-500/30 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-teal-500/30 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="team_size" className="block text-sm font-medium text-gray-300 mb-1">
                    Tamaño del equipo de ventas
                  </label>
                  <select
                    id="team_size"
                    className="w-full p-3 bg-[#0D0C1D] border border-teal-500/30 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="1-5">1-5 vendedores</option>
                    <option value="6-15">6-15 vendedores</option>
                    <option value="16-30">16-30 vendedores</option>
                    <option value="31+">Más de 30 vendedores</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Cuál es tu principal desafío comercial?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-teal-500/30 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Describe los retos que enfrenta tu equipo comercial, objetivos que quieres alcanzar y cualquier detalle relevante..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg hover:shadow-glow-teal transition-all duration-300"
                  >
                    Solicitar estrategia personalizada
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Te responderé en menos de 24 horas con una propuesta adaptada a tus necesidades
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .shadow-glow-teal {
          box-shadow: 0 0 25px rgba(20, 184, 166, 0.4);
        }
      `}</style>
    </div>
  );
}
