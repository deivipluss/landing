"use client";
import React, { useState, useRef } from "react";
import { 
  FaDesktop, 
  FaMobileAlt, 
  FaRocket, 
  FaRegLightbulb, 
  FaArrowRight,
  FaCheck,
  FaChartLine,
  FaCode,
  FaRegEye,
  FaSpinner,
  FaThumbsUp
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function LandingPagesPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const landingPageTypes = [
    {
      title: "Captura de Leads",
      description: "Diseñadas para maximizar la conversión de visitantes en leads cualificados, con formularios optimizados y ofertas irresistibles.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>,
      features: ["Formularios optimizados", "A/B testing", "Integraciones con CRM", "Seguimiento de conversiones"]
    },
    {
      title: "Ventas de Productos",
      description: "Páginas enfocadas en presentar un producto específico y guiar al visitante hacia la compra con copywriting persuasivo y elementos de confianza.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>,
      features: ["Testimonios", "Garantías", "Prueba social", "CTAs estratégicos"]
    },
    {
      title: "Servicios Profesionales",
      description: "Creadas para establecer autoridad y credibilidad en tu sector, destacando tus servicios premium y generando solicitudes de consulta.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>,
      features: ["Portfolio de trabajos", "Credenciales", "Sistema de citas", "Testimonios en video"]
    },
    {
      title: "Eventos y Webinars",
      description: "Optimizadas para maximizar registros a eventos, con cuenta regresiva, agenda detallada y elementos de urgencia para impulsar la acción.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>,
      features: ["Cuenta regresiva", "Agenda del evento", "Biografías de ponentes", "Preguntas frecuentes"]
    }
  ];

  const landingPageFeatures = [
    {
      title: "Responsive Design",
      description: "Diseño adaptable que garantiza una experiencia perfecta en todos los dispositivos, desde móviles hasta pantallas de escritorio.",
      icon: <FaMobileAlt className="text-xl" />
    },
    {
      title: "Alto Rendimiento",
      description: "Optimizadas para cargar rápidamente, con imágenes comprimidas y código limpio que mejora la experiencia del usuario y el SEO.",
      icon: <FaRocket className="text-xl" />
    },
    {
      title: "Diseño Persuasivo",
      description: "Estructura y elementos visuales cuidadosamente diseñados para guiar al visitante hacia la acción deseada.",
      icon: <FaRegEye className="text-xl" />
    },
    {
      title: "Copywriting Efectivo",
      description: "Textos persuasivos orientados a la conversión que conectan con el público objetivo y destacan los beneficios clave.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    },
    {
      title: "Pruebas A/B",
      description: "Implementación de variantes para probar diferentes elementos y optimizar continuamente la tasa de conversión.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    },
    {
      title: "Analítica Integrada",
      description: "Configuración de seguimiento detallado para medir y analizar el comportamiento de los visitantes y optimizar la conversión.",
      icon: <FaChartLine className="text-xl" />
    }
  ];

  const processSteps = [
    {
      title: "Análisis y Estrategia",
      description: "Estudio a fondo tu negocio, competencia y audiencia para definir los objetivos específicos, mensajes clave y estrategia de conversión de tu landing page.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    },
    {
      title: "Wireframing",
      description: "Desarrollo de una estructura y jerarquía visual optimizada para conversión, donde cada elemento tiene un propósito específico dentro del recorrido del usuario.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    },
    {
      title: "Diseño Visual",
      description: "Creación de un diseño atractivo y profesional alineado con tu marca, con elementos visuales persuasivos que refuerzan tu mensaje y generan confianza.",
      icon: <FaRegLightbulb />
    },
    {
      title: "Copywriting",
      description: "Redacción de textos persuasivos enfocados en beneficios, con titulares impactantes y llamadas a la acción claras que impulsan al visitante hacia la conversión.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    },
    {
      title: "Desarrollo",
      description: "Programación de la landing page con código optimizado, veloz y responsive que garantiza una experiencia perfecta en todos los dispositivos y navegadores.",
      icon: <FaCode />
    },
    {
      title: "Pruebas y Optimización",
      description: "Realización de pruebas exhaustivas de usabilidad, velocidad y compatibilidad, seguido de análisis continuo para optimizar la tasa de conversión.",
      icon: <FaSpinner />
    }
  ];

  const packages = [
    {
      title: "Esencial",
      price: "$697",
      features: [
        "Diseño responsive profesional",
        "1 página optimizada para conversión",
        "Copywriting persuasivo",
        "Formulario de contacto/captura",
        "Optimización de velocidad básica",
        "Integración con Google Analytics",
        "1 ronda de revisiones"
      ],
      color: "cyan",
      popular: false
    },
    {
      title: "Profesional",
      price: "$1,297",
      features: [
        "Diseño premium personalizado",
        "Hasta 3 secciones adicionales",
        "Copywriting avanzado con investigación",
        "Formularios optimizados",
        "Integración con CRM/Email marketing",
        "Optimización de velocidad avanzada",
        "Configuración de píxeles de seguimiento",
        "2 rondas de revisiones",
        "30 días de soporte post-lanzamiento"
      ],
      color: "sky",
      popular: true
    },
    {
      title: "Empresarial",
      price: "$2,497",
      features: [
        "Diseño premium a medida",
        "Landing page completa con múltiples secciones",
        "Copywriting estratégico con investigación de mercado",
        "Múltiples formularios optimizados",
        "Integración avanzada con cualquier plataforma",
        "Optimización de conversión continua",
        "Configuración de pruebas A/B",
        "Revisiones ilimitadas",
        "Mantenimiento por 3 meses",
        "Dashboard de análisis personalizado"
      ],
      color: "blue",
      popular: false
    }
  ];

  // Tab component for landing page types
  const TypeTab = ({ type, active, onClick, index }: {
    type: typeof landingPageTypes[0];
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
          ? "bg-gradient-to-r from-cyan-600/30 to-sky-700/30 border border-cyan-500/30 text-white" 
          : "text-gray-400 hover:bg-cyan-900/20 hover:text-gray-300"
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 flex items-center justify-center text-white">
        {type.icon}
      </div>
      <span className="hidden md:block">{type.title}</span>
    </motion.button>
  );

  // Package card component
  const PackageCard = ({ 
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
      cyan: {
        bg: "from-cyan-500 to-sky-600",
        border: "border-cyan-500/30",
        text: "text-cyan-400",
      },
      sky: {
        bg: "from-sky-500 to-blue-600",
        border: "border-sky-500/30",
        text: "text-sky-400",
      },
      blue: {
        bg: "from-blue-600 to-indigo-600",
        border: "border-blue-500/30",
        text: "text-blue-400",
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
          popular ? `ring-2 ring-${color}-500/30 ${colorClasses.border}` : 'border border-cyan-500/20'
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
            <span>Seleccionar plan</span>
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
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-cyan-600/5 filter blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-sky-600/5 filter blur-[120px] pointer-events-none"></div>
        
        {/* Hero Section */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-sky-500/20 text-cyan-300 text-sm font-medium mb-4 border border-cyan-500/30">
                  LANDING PAGES
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Páginas de <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-500">aterrizaje</span> que convierten visitantes en clientes
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Diseño y desarrollo landing pages altamente efectivas, optimizadas para la conversión, que transforman el tráfico en leads cualificados y ventas. Cada elemento está estratégicamente creado para impulsar la acción.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-600 text-white rounded-lg hover:shadow-glow-cyan transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Crear mi landing page</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Ver portfolio
                  </Link>
                </div>
                
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex items-center">
                    <div className="flex -space-x-4">
                      <div className="w-10 h-10 rounded-full border-2 border-[#0D0C1D] overflow-hidden">
                        <Image src="/imagenes/testimonial-1.webp" alt="Cliente satisfecho" width={40} height={40} className="h-full object-cover" />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-[#0D0C1D] overflow-hidden">
                        <Image src="/imagenes/testimonial-2.webp" alt="Cliente satisfecho" width={40} height={40} className="h-full object-cover" />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-[#0D0C1D] overflow-hidden">
                        <Image src="/imagenes/testimonial-3.webp" alt="Cliente satisfecho" width={40} height={40} className="h-full object-cover" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaThumbsUp key={star} className="text-cyan-400 text-sm mr-1" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm">+150 clientes satisfechos</p>
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
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-sky-500/10 rounded-xl"></div>
                  <Image
                    src="/imagenes/landing-page-hero.webp"
                    alt="Diseño profesional de landing pages"
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-transparent to-transparent opacity-60"></div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <div className="bg-[#1A1A2E]/80 backdrop-blur-sm p-4 rounded-lg border border-cyan-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 flex items-center justify-center text-white">
                          <FaChartLine />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Métricas de conversión</h3>
                        </div>
                        <span className="ml-auto text-green-400 text-sm flex items-center">
                          +156% <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-cyan-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">12.5%</div>
                          <div className="text-gray-400 text-xs">Tasa conversión</div>
                        </div>
                        <div className="bg-cyan-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">1.8s</div>
                          <div className="text-gray-400 text-xs">Tiempo de carga</div>
                        </div>
                        <div className="bg-cyan-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">89%</div>
                          <div className="text-gray-400 text-xs">Mobile-friendly</div>
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
              {[
                { value: "+287%", label: "aumento promedio en conversiones" },
                { value: "1.8s", label: "tiempo de carga promedio" },
                { value: "12.5%", label: "tasa de conversión media" },
                { value: "100%", label: "responsive y adaptadas a móvil" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 border border-cyan-500/10 p-5 rounded-xl"
                >
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500 mb-2">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        </div>
        
        {/* Landing Page Types Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-sky-500/20 text-cyan-300 text-sm font-medium mb-3">
                TIPOS DE LANDING PAGES
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Soluciones adaptadas a tus objetivos
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Diseño landing pages específicas para cada objetivo de marketing, 
                optimizadas para maximizar los resultados según tus necesidades particulares.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {landingPageTypes.map((type, index) => (
                <TypeTab
                  key={index}
                  type={type}
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
                className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-8 border border-cyan-500/20"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {landingPageTypes[activeTab].icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{landingPageTypes[activeTab].title}</h3>
                    <p className="text-gray-300 mb-6">{landingPageTypes[activeTab].description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {landingPageTypes[activeTab].features.map((feature, i) => (
                        <div key={i} className="bg-cyan-900/20 py-2 px-3 rounded-lg border border-cyan-500/10 flex items-center">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                          <span className="text-cyan-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-600 text-white rounded-lg hover:shadow-md transition-all duration-300 flex items-center gap-2 flex-shrink-0 mt-4 md:mt-0"
                  >
                    <span>Solicitar presupuesto</span>
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-sky-500/20 text-cyan-300 text-sm font-medium mb-3">
                CARACTERÍSTICAS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Landing pages de alto rendimiento
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Cada landing page está diseñada con características clave que garantizan 
                máxima efectividad y tasas de conversión superiores al promedio.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {landingPageFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-600 to-sky-700 flex items-center justify-center text-white text-xl mb-5">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-sky-500/20 text-cyan-300 text-sm font-medium mb-3">
                METODOLOGÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proceso de creación orientado a resultados
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mi enfoque sistemático garantiza landing pages que no solo se ven bien, 
                sino que están estratégicamente diseñadas para maximizar conversiones.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute h-full w-1 bg-gradient-to-b from-cyan-500 via-sky-600 to-cyan-800/40 left-[15px] md:left-1/2 top-0 transform md:-translate-x-1/2 hidden sm:block"></div>
              
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start gap-8 mb-12 relative ${
                    index % 2 === 0 ? 'md:mr-[50%]' : 'md:ml-[50%] md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-bold ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-lg border border-cyan-500/20 flex-grow">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-900/30 text-cyan-400 mr-3">
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
        
        {/* Pricing Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-sky-500/20 text-cyan-300 text-sm font-medium mb-3">
                PLANES DE SERVICIO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Inversión en conversiones
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Planes flexibles que se adaptan a las necesidades de tu negocio,
                desde startups hasta grandes corporaciones.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <PackageCard
                  key={index}
                  title={pkg.title}
                  price={pkg.price}
                  features={pkg.features}
                  color={pkg.color}
                  popular={pkg.popular}
                />
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-xl border border-cyan-500/20 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 flex items-center justify-center text-white">
                  <FaDesktop className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">¿Necesitas una solución personalizada?</h3>
                  <p className="text-gray-300 text-sm">Contacta para un presupuesto a medida según tus necesidades específicas</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-600 text-white rounded-lg hover:shadow-md transition-all duration-300 whitespace-nowrap md:ml-auto"
              >
                Solicitar presupuesto personalizado
              </button>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-sky-500/20 text-cyan-300 text-sm font-medium mb-3">
                TESTIMONIOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Lo que dicen mis clientes
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Descubre cómo mis landing pages han impulsado el crecimiento y las conversiones
                para empresas de diversos sectores.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Nuestra tasa de conversión se triplicó en solo dos semanas después de implementar la landing page. El diseño es impecable y cada elemento está estratégicamente colocado para guiar a los visitantes hacia la acción.",
                  author: "Sara Martínez",
                  position: "CEO",
                  company: "GrowthMakers",
                  image: "/imagenes/testimonial-1.webp"
                },
                {
                  quote: "La landing page no solo tiene un diseño atractivo, sino que está construida con una estrategia clara. El copywriting es persuasivo y los resultados han superado nuestras expectativas. Hemos aumentado las conversiones en un 156%.",
                  author: "Miguel Sánchez",
                  position: "Director de Marketing",
                  company: "TechSolutions",
                  image: "/imagenes/testimonial-2.webp"
                },
                {
                  quote: "Lo que más me impresionó fue el enfoque orientado a resultados. Cada aspecto de la landing page fue diseñado con un propósito claro, y el seguimiento detallado nos ha permitido optimizar continuamente para mejorar las conversiones.",
                  author: "Claudia Pérez",
                  position: "CMO",
                  company: "Innovate Inc",
                  image: "/imagenes/testimonial-3.webp"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-cyan-500/10 relative"
                >
                  <div className="absolute top-6 left-6 text-cyan-500 text-4xl opacity-20">"</div>
                  <div className="relative z-10">
                    <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        width={48} 
                        height={48} 
                        className="object-cover" 
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-gray-400 text-xs">{testimonial.position}, <span className="text-cyan-400">{testimonial.company}</span></p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 text-cyan-500 text-4xl opacity-20">"</div>
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
                Resuelve tus dudas sobre mi servicio de Landing Pages
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿En cuánto tiempo estará lista mi landing page?",
                  answer: "El tiempo de desarrollo depende de la complejidad del proyecto, pero generalmente entrego landing pages básicas en 7-10 días y proyectos más complejos en 2-3 semanas. Al iniciar el proyecto, estableceré un cronograma claro con fechas específicas para cada etapa, desde la conceptualización hasta el lanzamiento final."
                },
                {
                  question: "¿Puedo hacer cambios después de que la landing page esté publicada?",
                  answer: "¡Absolutamente! Todos los paquetes incluyen revisiones post-lanzamiento. Además, ofrezco un periodo de mantenimiento durante el cual puedes solicitar ajustes basados en el rendimiento inicial. Para necesidades continuas, dispongo de planes de mantenimiento mensual que incluyen actualizaciones regulares, análisis de rendimiento y optimizaciones basadas en datos."
                },
                {
                  question: "¿Cómo medimos el éxito de la landing page?",
                  answer: "Implemento herramientas de analytics completas que rastrean métricas clave como tasa de conversión, tiempo en página, tasa de rebote y valor por visitante. Al inicio del proyecto, definimos KPIs específicos alineados con tus objetivos de negocio. Proporciono informes periódicos detallados que no solo muestran datos, sino insights accionables para optimización continua."
                },
                {
                  question: "¿Las landing pages funcionan bien en dispositivos móviles?",
                  answer: "Todas mis landing pages son completamente responsivas y están optimizadas para ofrecer una experiencia perfecta en cualquier dispositivo. Dado que más del 60% del tráfico web proviene de móviles, diseño con un enfoque 'mobile-first', asegurando que cada elemento funcione fluidamente tanto en smartphones y tablets como en escritorio, con tiempos de carga optimizados para conexiones móviles."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 p-6 rounded-xl border border-cyan-500/10"
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
              className="relative overflow-hidden rounded-2xl border border-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-sky-700/20"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Convierte más visitantes en clientes
                    </h2>
                    <p className="text-gray-300 mb-6">
                      No pierdas más oportunidades con páginas web genéricas. Una landing page 
                      estratégicamente diseñada puede transformar tu tasa de conversión
                      y maximizar el retorno de tus campañas de marketing.
                    </p>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-6 mb-6">
                      {[
                        "Diseño optimizado para conversión",
                        "Copywriting persuasivo",
                        "Análisis de resultados",
                        "Soporte post-lanzamiento"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 flex items-center justify-center text-white text-xs">
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
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-sky-600 text-white rounded-lg hover:shadow-glow-cyan transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>Crear mi landing page</span>
                      <FaArrowRight />
                    </button>
                    <Link
                      href="https://calendly.com/deivipluss/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Agendar consulta estratégica
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
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-cyan-500/30"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 flex items-center justify-center">
                    <FaDesktop className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Landing Pages</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntame sobre el proyecto que tienes en mente</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-cyan-500/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-cyan-500/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-cyan-500/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="landing_type" className="block text-sm font-medium text-gray-300 mb-1">
                    Tipo de landing page
                  </label>
                  <select
                    id="landing_type"
                    className="w-full p-3 bg-[#0D0C1D] border border-cyan-500/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="lead">Captura de leads</option>
                    <option value="sales">Ventas de productos</option>
                    <option value="services">Servicios profesionales</option>
                    <option value="event">Eventos y webinars</option>
                    <option value="other">Otro (especificar en mensaje)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Detalles del proyecto
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-cyan-500/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Describe los objetivos de tu landing page, público objetivo y cualquier detalle relevante..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-sky-600 text-white rounded-lg hover:shadow-glow-cyan transition-all duration-300"
                  >
                    Solicitar presupuesto
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Te responderé en menos de 24 horas con una propuesta personalizada
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .shadow-glow-cyan {
          box-shadow: 0 0 25px rgba(6, 182, 212, 0.4);
        }
      `}</style>
    </div>
  );
}
