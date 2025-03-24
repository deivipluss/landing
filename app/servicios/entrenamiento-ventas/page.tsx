"use client";
import React, { useState, useRef } from "react";
import { 
  FaUserTie, 
  FaChartLine, 
  FaUsers, 
  FaArrowRight,
  FaCheck,
  FaGraduationCap,
  FaComment,
  FaHandshake,
  FaBrain,
  FaTrophy,
  FaRegLightbulb,
  FaMicrophoneAlt
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function EntrenamientoVentasPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Programas de entrenamiento en venta
  const programasEntrenamiento = [
    {
      title: "Técnicas de Venta Avanzadas",
      description: "Entrenamiento intensivo en metodologías de venta modernas para incrementar significativamente la tasa de conversión y el ticket promedio.",
      icon: <FaUserTie className="text-xl" />,
      features: [
        "Psicología de la persuasión",
        "Lenguaje corporal efectivo",
        "Técnicas de negociación",
        "Cierre de ventas complejas"
      ]
    },
    {
      title: "Manejo de Objeciones",
      description: "Capacitación específica para convertir las objeciones del cliente en oportunidades de venta mediante respuestas estratégicas y persuasivas.",
      icon: <FaComment className="text-xl" />,
      features: [
        "Clasificación de objeciones",
        "Respuestas estructuradas",
        "Role-play práctico",
        "Objeciones de precio"
      ]
    },
    {
      title: "Ventas Consultivas",
      description: "Formación para transformar vendedores tradicionales en asesores de confianza que resuelven problemas complejos de los clientes.",
      icon: <FaHandshake className="text-xl" />,
      features: [
        "Diagnóstico de necesidades",
        "Escucha activa avanzada",
        "Preguntas estratégicas",
        "Propuestas de valor"
      ]
    },
    {
      title: "Liderazgo Comercial",
      description: "Desarrollo de habilidades para directores y gerentes de ventas que buscan potenciar el rendimiento de sus equipos comerciales.",
      icon: <FaUsers className="text-xl" />,
      features: [
        "Gestión de KPIs",
        "Coaching comercial",
        "Reuniones efectivas",
        "Sistemas de incentivos"
      ]
    }
  ];

  // Metodologías de entrenamiento
  const metodologiasEntrenamiento = [
    {
      title: "Role-Playing Avanzado",
      description: "Simulaciones realistas de situaciones de venta grabadas en video y analizadas para identificar oportunidades de mejora específicas.",
      icon: <FaUsers className="text-xl" />
    },
    {
      title: "Micro-Aprendizaje",
      description: "Sesiones breves y recurrentes que facilitan la asimilación de conceptos y evitan la sobrecarga cognitiva del equipo comercial.",
      icon: <FaBrain className="text-xl" />
    },
    {
      title: "Retroalimentación 360°",
      description: "Sistema integral de feedback que combina autoevaluación, evaluación de pares y evaluación de clientes para un desarrollo completo.",
      icon: <FaChartLine className="text-xl" />
    },
    {
      title: "Gamificación Comercial",
      description: "Implementación de mecánicas de juego para aumentar la motivación, compromiso y rendimiento del equipo de ventas.",
      icon: <FaTrophy className="text-xl" />
    },
    {
      title: "Coaching Individual",
      description: "Sesiones personalizadas que abordan las necesidades específicas de desarrollo de cada integrante del equipo comercial.",
      icon: <FaUserTie className="text-xl" />
    },
    {
      title: "Programación Neurolingüística",
      description: "Aplicación de PNL específica para ventas que permite crear conexiones más profundas con los clientes y entender sus motivaciones.",
      icon: <FaRegLightbulb className="text-xl" />
    }
  ];

  // Proceso de implementación
  const procesosImplementacion = [
    {
      title: "Diagnóstico de Habilidades",
      description: "Evalúo a fondo las competencias actuales del equipo comercial para identificar fortalezas y áreas de mejora específicas.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    },
    {
      title: "Diseño del Programa",
      description: "Creo un programa de entrenamiento personalizado que aborda precisamente las necesidades detectadas en tu equipo comercial.",
      icon: <FaGraduationCap />
    },
    {
      title: "Sesiones de Formación",
      description: "Imparto talleres dinámicos combinando teoría, práctica y casos reales para maximizar la retención del aprendizaje.",
      icon: <FaUsers />
    },
    {
      title: "Práctica en Campo",
      description: "Acompaño a tu equipo en situaciones reales de venta para reforzar lo aprendido y hacer ajustes sobre el terreno.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    },
    {
      title: "Medición y Seguimiento",
      description: "Establezco métricas claras para evaluar el impacto del entrenamiento y realizar las adaptaciones necesarias para maximizar resultados.",
      icon: <FaChartLine />
    }
  ];

  // Resultados que consiguen los clientes
  const resultados = [
    {
      metric: "+64%",
      description: "Aumento en tasa de conversión",
    },
    {
      metric: "2.5X",
      description: "Incremento en ventas por asesor",
    },
    {
      metric: "-48%",
      description: "Reducción en ciclo de venta",
    },
    {
      metric: "+78%",
      description: "Mejora en retención de clientes",
    }
  ];

  // Paquetes de servicio
  const paquetes = [
    {
      title: "Taller Intensivo",
      price: "Desde $1,490",
      features: [
        "1 jornada completa (8 horas)",
        "Hasta 15 participantes",
        "Material didáctico digital",
        "Casos prácticos personalizados",
        "Evaluación inicial y final",
        "Certificado de participación",
        "1 sesión de seguimiento (30 días)"
      ],
      color: "amber",
      popular: false
    },
    {
      title: "Programa Completo",
      price: "Desde $3,490",
      features: [
        "3 jornadas (24 horas totales)",
        "Hasta 15 participantes",
        "Material didáctico completo",
        "Grabación de role-plays",
        "Ejercicios de campo",
        "Evaluación de progreso semanal",
        "Informes personalizados",
        "3 sesiones de seguimiento",
        "Acceso a plataforma e-learning"
      ],
      color: "orange",
      popular: true
    },
    {
      title: "Transformación de Equipo",
      price: "Desde $7,990",
      features: [
        "Programa de 3 meses",
        "Entrenamientos semanales",
        "Coaching individual (2h/vendedor)",
        "Acompañamiento en ventas reales",
        "Creación de playbooks",
        "Scripts personalizados",
        "Dashboard de seguimiento",
        "Formación para líderes",
        "Consultoría de procesos",
        "Soporte continuo"
      ],
      color: "red",
      popular: false
    }
  ];

  // Componente de Tab para Programas
  const ProgramaTab = ({ programa, active, onClick, index }: {
    programa: typeof programasEntrenamiento[0];
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
          ? "bg-gradient-to-r from-amber-600/30 to-orange-700/30 border border-amber-500/30 text-white" 
          : "text-gray-400 hover:bg-amber-900/20 hover:text-gray-300"
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white">
        {programa.icon}
      </div>
      <span className="hidden md:block">{programa.title}</span>
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
      amber: {
        bg: "from-amber-500 to-amber-700",
        border: "border-amber-500/30",
        text: "text-amber-400",
      },
      orange: {
        bg: "from-orange-500 to-amber-600",
        border: "border-orange-500/30",
        text: "text-orange-400",
      },
      red: {
        bg: "from-red-500 to-orange-600",
        border: "border-red-500/30",
        text: "text-red-400",
      }
    };
    
    // Get the correct variant based on the color prop
    const colorClasses = colorVariants[color as keyof typeof colorVariants] || colorVariants.amber;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl overflow-hidden ${
          popular ? `ring-2 ring-${color}-500/30 ${colorClasses.border}` : 'border border-amber-500/20'
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
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-amber-600/5 filter blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-orange-600/5 filter blur-[120px] pointer-events-none"></div>
        
        {/* Sección Hero */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 text-sm font-medium mb-4 border border-amber-500/30">
                  ENTRENAMIENTO EN VENTAS
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Convierto <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">vendedores ordinarios</span> en extraordinarios
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Transformo habilidades comerciales mediante programas de entrenamiento intensivos, prácticos y personalizados que generan resultados inmediatos y duraderos.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:shadow-glow-amber transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Potencia tu equipo ahora</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-amber-500 text-amber-400 rounded-lg hover:bg-amber-500/10 transition-all duration-300"
                  >
                    Agendar consulta de capacitación
                  </Link>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-y-4 gap-x-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white">
                      <FaUsers />
                    </div>
                    <div>
                      <div className="text-white font-medium">+1,250</div>
                      <div className="text-gray-400 text-xs">vendedores entrenados</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white">
                      <FaChartLine />
                    </div>
                    <div>
                      <div className="text-white font-medium">+187%</div>
                      <div className="text-gray-400 text-xs">incremento medio en ventas</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Imagen de entrenamiento en ventas */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, scale: isHeaderInView ? 1 : 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="relative h-[400px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl"></div>
                  <Image
                    src="/imagenes/entrenamiento-ventas-hero.webp"
                    alt="Entrenamiento en ventas profesional"
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Panel de estadísticas flotante */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <div className="bg-[#1A1A2E]/80 backdrop-blur-sm p-4 rounded-lg border border-amber-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white">
                          <FaTrophy />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Mejora de rendimiento</h3>
                        </div>
                        <span className="ml-auto text-green-400 text-sm flex items-center">
                          +134% <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-amber-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">94%</div>
                          <div className="text-gray-400 text-xs">Satisfacción alumnos</div>
                        </div>
                        <div className="bg-amber-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">+83%</div>
                          <div className="text-gray-400 text-xs">Confianza comercial</div>
                        </div>
                        <div className="bg-amber-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">78%</div>
                          <div className="text-gray-400 text-xs">ROI del programa</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Tarjetas de resultados */}
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
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 border border-amber-500/10 p-5 rounded-xl"
                >
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2">{resultado.metric}</p>
                  <p className="text-gray-400 text-sm">{resultado.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        </div>
        
        {/* Sección de Programas de Entrenamiento */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 text-sm font-medium mb-3">
                PROGRAMAS DE FORMACIÓN
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Entrenamiento comercial especializado
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Programas de capacitación diseñados para potenciar habilidades específicas 
                y transformar a tu equipo en una fuerza de ventas de alto rendimiento.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {programasEntrenamiento.map((programa, index) => (
                <ProgramaTab
                  key={index}
                  programa={programa}
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
                className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-8 border border-amber-500/20"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {programasEntrenamiento[activeTab].icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{programasEntrenamiento[activeTab].title}</h3>
                    <p className="text-gray-300 mb-6">{programasEntrenamiento[activeTab].description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {programasEntrenamiento[activeTab].features.map((feature, i) => (
                        <div key={i} className="bg-amber-900/20 py-2 px-3 rounded-lg border border-amber-500/10 flex items-center">
                          <div className="w-2 h-2 rounded-full bg-amber-400 mr-2"></div>
                          <span className="text-amber-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:shadow-md transition-all duration-300 flex items-center gap-2 flex-shrink-0 mt-4 md:mt-0"
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 text-sm font-medium mb-3">
                METODOLOGÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enfoque de aprendizaje práctico
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Combino técnicas pedagógicas de alto impacto para lograr un aprendizaje acelerado, 
                memorable y directamente aplicable a situaciones reales de venta.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {metodologiasEntrenamiento.map((metodologia, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center text-white text-xl mb-5">
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 text-sm font-medium mb-3">
                IMPLEMENTACIÓN
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proceso de entrenamiento efectivo
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mi enfoque sistemático garantiza la asimilación efectiva de conocimientos
                y su aplicación inmediata para generar resultados medibles en ventas.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Línea central del timeline con gradiente */}
              <div className="absolute h-full w-1 bg-gradient-to-b from-amber-500 via-orange-600 to-amber-800/40 left-[15px] md:left-1/2 top-0 transform md:-translate-x-1/2 hidden sm:block"></div>
              
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
                    bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold shadow-md shadow-amber-500/30 ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}>
                    {index + 1}
                    <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-pulse"></div>
                  </div>
                  
                  {/* Caja de contenido del paso con gradiente mejorado */}
                  <div className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-5 md:p-6 rounded-lg border border-amber-500/20 flex-grow hover:border-amber-500/40 transition-all duration-300 group shadow-lg shadow-amber-900/10">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-900/30 text-amber-400 mr-3 group-hover:bg-amber-800/40 transition-colors duration-300">
                        {proceso.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{proceso.title}</h3>
                    </div>
                    <p className="text-gray-300">{proceso.description}</p>
                    
                    {/* Línea de conexión al timeline (solo visible en pantallas grandes) */}
                    <div className={`absolute top-[20px] w-4 h-1 bg-gradient-to-r from-amber-500 to-orange-600 hidden md:block
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 text-sm font-medium mb-3">
                PLANES DE ENTRENAMIENTO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Inversión en desarrollo comercial
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Programas de formación adaptados a diferentes necesidades y tamaños de equipo,
                todos con enfoque práctico y orientados a resultados inmediatos.
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
              className="mt-10 bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-xl border border-amber-500/20 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white">
                  <FaMicrophoneAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">¿Buscas una capacitación específica?</h3>
                  <p className="text-gray-300 text-sm">Desarrollamos programas a medida para las necesidades puntuales de tu equipo comercial</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:shadow-md transition-all duration-300 whitespace-nowrap md:ml-auto"
              >
                Consultar programa a medida
              </button>
            </motion.div>
          </div>
        </section>
        
        {/* Sección de Testimonios */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 text-sm font-medium mb-3">
                TESTIMONIOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Lo que dicen los participantes
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Empresas y equipos comerciales que han experimentado una transformación
                significativa tras participar en nuestros programas de entrenamiento.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "El entrenamiento cambió completamente nuestra forma de vender. Pasamos de un enfoque transaccional a uno consultivo, y nuestros clientes ahora nos ven como asesores. El impacto en las ventas ha sido inmediato y sostenido.",
                  author: "Carlos Rodríguez",
                  position: "Director Comercial",
                  company: "Servicios Financieros XYZ",
                  image: "/imagenes/testimonio-1.webp"
                },
                {
                  quote: "Las técnicas de manejo de objeciones y cierre que aprendimos son oro puro. Todo el equipo coincide en que nunca habíamos tenido una capacitación tan práctica y aplicable. Los role-plays personalizados hicieron toda la diferencia.",
                  author: "María Sánchez",
                  position: "Gerente de Ventas",
                  company: "TechSolutions Corp",
                  image: "/imagenes/testimonio-2.webp"
                },
                {
                  quote: "Soy vendedor desde hace 12 años y pensé que lo había visto todo, pero este entrenamiento me abrió los ojos a nuevas posibilidades. Mi confianza aumentó significativamente y ahora manejo conversaciones difíciles con una efectividad sorprendente.",
                  author: "Juan Martínez",
                  position: "Key Account Manager",
                  company: "Industrias Globales",
                  image: "/imagenes/testimonio-3.webp"
                }
              ].map((testimonio, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-amber-500/10 relative"
                >
                  <div className="absolute top-6 left-6 text-amber-500 text-4xl opacity-20">"</div>
                  <div className="relative z-10">
                    <p className="text-gray-300 mb-6">{testimonio.quote}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image 
                        src={testimonio.image} 
                        alt={testimonio.author}
                        width={48} 
                        height={48} 
                        className="object-cover" 
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium">{testimonio.author}</p>
                      <p className="text-gray-400 text-xs">{testimonio.position}, <span className="text-amber-400">{testimonio.company}</span></p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 text-amber-500 text-4xl opacity-20">"</div>
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
                Resuelve tus dudas sobre nuestros programas de entrenamiento en ventas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Cuál es la duración ideal de un entrenamiento en ventas?",
                  answer: "La duración óptima depende de los objetivos y el nivel de transformación deseado. Los talleres intensivos de 1-2 días son ideales para reforzar habilidades específicas, mientras que los programas de 1-3 meses generan cambios profundos y sostenibles en la cultura comercial. Nuestro enfoque combina sesiones intensivas con práctica espaciada para maximizar la retención y aplicación del aprendizaje."
                },
                {
                  question: "¿Los entrenamientos son presenciales o virtuales?",
                  answer: "Ofrezco ambas modalidades con excelentes resultados. Los entrenamientos presenciales maximizan la interacción y son ideales para desarrollar habilidades de comunicación no verbal. Los programas virtuales, por su parte, permiten mayor flexibilidad, grabación de sesiones y participación de equipos distribuidos. En muchos casos, implemento formatos híbridos que combinan lo mejor de ambos mundos."
                },
                {
                  question: "¿Cómo se mide el ROI del entrenamiento en ventas?",
                  answer: "Establecemos KPIs específicos antes de iniciar la capacitación, que pueden incluir tasa de conversión, ticket promedio, ciclo de venta y satisfacción del cliente. Implemento evaluaciones pre y post entrenamiento para medir la evolución de habilidades, y hacemos seguimiento de métricas comerciales durante 3-6 meses. Esto permite cuantificar el retorno de la inversión, que típicamente oscila entre 300% y 700% en los primeros seis meses."
                },
                {
                  question: "¿Cómo personalizas el entrenamiento para nuestra industria específica?",
                  answer: "El proceso comienza con un diagnóstico profundo de tu industria, competencia, ciclo de compra y perfil de cliente. Realizo entrevistas con tu equipo comercial y analizo grabaciones de ventas reales. Con esta información, desarrollo casos prácticos, scripts y role-plays específicos para tu sector. Además, adapto el vocabulario, objeciones y estrategias de cierre a las particularidades de tu mercado para maximizar la relevancia y aplicabilidad."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 p-6 rounded-xl border border-amber-500/10"
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
              className="relative overflow-hidden rounded-2xl border border-amber-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-700/20"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Potencia el verdadero potencial de tu equipo de ventas
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Un equipo bien entrenado es tu activo más valioso. Invierte en desarrollar 
                      las habilidades de tus vendedores y observa cómo tus resultados comerciales 
                      se multiplican de forma sostenible.
                    </p>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-6 mb-6">
                      {[
                        "Diagnóstico gratuito",
                        "Programas personalizados",
                        "Resultados medibles",
                        "Soporte post-formación"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white text-xs">
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
                      className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:shadow-glow-amber transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>Formar a mi equipo ahora</span>
                      <FaArrowRight />
                    </button>
                    <Link
                      href="https://calendly.com/deivipluss/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Agendar consulta de formación
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
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-amber-500/30"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center">
                    <FaUserTie className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Entrenamiento en Ventas</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntame sobre tu equipo y tus necesidades de capacitación</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-amber-500/30 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-amber-500/30 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-amber-500/30 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="team_size" className="block text-sm font-medium text-gray-300 mb-1">
                    Tamaño del equipo a capacitar
                  </label>
                  <select
                    id="team_size"
                    className="w-full p-3 bg-[#0D0C1D] border border-amber-500/30 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="1-5">1-5 personas</option>
                    <option value="6-15">6-15 personas</option>
                    <option value="16-30">16-30 personas</option>
                    <option value="31+">Más de 30 personas</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué habilidades necesitas desarrollar en tu equipo?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-amber-500/30 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Describe las principales necesidades de formación de tu equipo comercial, objetivos específicos y cualquier detalle relevante..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:shadow-glow-amber transition-all duration-300"
                  >
                    Solicitar programa de entrenamiento
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
        .shadow-glow-amber {
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.4);
        }
      `}</style>
    </div>
  );
}
