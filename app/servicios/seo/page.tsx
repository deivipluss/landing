"use client";
import React, { useState, useRef } from "react";
import { 
  FaSearchDollar, 
  FaChartLine, 
  FaCheck, 
  FaArrowRight,
  FaGlobe,
  FaTags, 
  FaLink, 
  FaMobile,
  FaClock,
  FaCogs,
  FaUserFriends
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function SeoPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const seoServices = [
    {
      title: "SEO On-Page",
      description: "Optimizo todos los elementos internos de tu sitio web para mejorar su visibilidad en buscadores y atraer tráfico de calidad.",
      icon: <FaGlobe />,
      features: [
        "Optimización de meta tags",
        "Estructura de URLs amigable",
        "Mejora de velocidad de carga",
        "Optimización de contenido"
      ]
    },
    {
      title: "SEO Off-Page",
      description: "Desarrollo estrategias externas para aumentar la autoridad de tu sitio web y mejorar su posicionamiento en resultados de búsqueda.",
      icon: <FaLink />,
      features: [
        "Creación de backlinks de calidad",
        "Guest posting estratégico",
        "Citations locales",
        "Digital PR"
      ]
    },
    {
      title: "SEO Técnico",
      description: "Resuelvo problemas técnicos que impiden el correcto indexado de tu sitio y mejoro su rendimiento para usuarios y motores de búsqueda.",
      icon: <FaCogs />,
      features: [
        "Optimización de rastreo",
        "Corrección de errores técnicos",
        "Implementación de Schema markup",
        "Mejora de arquitectura web"
      ]
    },
    {
      title: "SEO Local",
      description: "Optimizo tu presencia en búsquedas locales para atraer clientes de tu zona geográfica y destacar frente a competidores cercanos.",
      icon: <FaUserFriends />,
      features: [
        "Optimización de Google Business Profile",
        "Gestión de reseñas locales",
        "SEO localizado por ciudad/región",
        "Estrategia de búsquedas locales"
      ]
    }
  ];

  const seoFeatures = [
    {
      title: "Investigación Completa de Keywords",
      description: "Analizo a fondo tu mercado para identificar las palabras clave con mayor potencial de conversión y tráfico relevante.",
      icon: <FaTags />
    },
    {
      title: "Auditoría SEO Avanzada",
      description: "Evaluación exhaustiva de todos los factores SEO de tu sitio web para detectar problemas y oportunidades de mejora.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    },
    {
      title: "Optimización de Experiencia de Usuario",
      description: "Mejoro los factores UX que impactan el SEO, como la velocidad, usabilidad móvil y navegación, para reducir la tasa de rebote.",
      icon: <FaMobile />
    },
    {
      title: "Contenido SEO Optimizado",
      description: "Creación y optimización de contenido relevante y valioso que satisface tanto a usuarios como a motores de búsqueda.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    },
    {
      title: "Análisis de Competencia",
      description: "Estudio detallado de tus competidores principales para identificar sus estrategias y encontrar oportunidades para superarlos.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    },
    {
      title: "Monitoreo y Reportes Detallados",
      description: "Seguimiento continuo de posicionamiento, tráfico y conversiones con informes claros que muestran el ROI de tu inversión en SEO.",
      icon: <FaChartLine />
    }
  ];

  const processSteps = [
    {
      title: "Auditoría Inicial",
      description: "Analizo exhaustivamente tu sitio web, presencia online y posicionamiento actual para identificar fortalezas y debilidades.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    },
    {
      title: "Investigación y Estrategia",
      description: "Desarrollo un plan SEO personalizado basado en keywords, competencia y objetivos específicos de tu negocio.",
      icon: <FaTags />
    },
    {
      title: "Optimización On-Page",
      description: "Implemento mejoras técnicas y de contenido directamente en tu sitio web para aumentar su relevancia y autoridad.",
      icon: <FaGlobe />
    },
    {
      title: "Construcción de Autoridad",
      description: "Ejecuto estrategias off-page para conseguir backlinks de calidad y aumentar la autoridad de tu dominio en tu sector.",
      icon: <FaLink />
    },
    {
      title: "Análisis y Optimización",
      description: "Monitoreo constante del rendimiento para ajustar la estrategia, aprovechar nuevas oportunidades y mantener el crecimiento.",
      icon: <FaChartLine />
    }
  ];

  const packages = [
    {
      title: "SEO Básico",
      price: "$590/mes",
      features: [
        "Auditoría SEO inicial",
        "Investigación de 20 keywords",
        "Optimización on-page de 5 páginas",
        "Correcciones SEO técnicas básicas",
        "Monitoreo de posiciones",
        "Informe mensual de rendimiento"
      ],
      color: "teal",
      popular: false
    },
    {
      title: "SEO Profesional",
      price: "$990/mes",
      features: [
        "Auditoría SEO avanzada",
        "Investigación de 50 keywords",
        "Optimización on-page de 15 páginas",
        "Correcciones SEO técnicas completas",
        "Creación de 2 contenidos optimizados",
        "4 backlinks de calidad mensual",
        "Google Business Profile optimizado",
        "Informes quincenales con análisis"
      ],
      color: "emerald",
      popular: true
    },
    {
      title: "SEO Premium",
      price: "$1,890/mes",
      features: [
        "Auditoría SEO exhaustiva",
        "Investigación ilimitada de keywords",
        "Optimización on-page de todo el sitio",
        "Arquitectura web SEO avanzada",
        "4 contenidos optimizados mensuales",
        "10 backlinks de alta autoridad mensual",
        "Optimización de velocidad avanzada",
        "Estrategia de SEO local completa",
        "Informes semanales personalizados",
        "Consultoría SEO mensual"
      ],
      color: "green",
      popular: false
    }
  ];

  // Tab component for service types
  const ServiceTab = ({ service, active, onClick, index }: {
    service: typeof seoServices[0];
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
          ? "bg-gradient-to-r from-teal-600/30 to-green-700/30 border border-teal-500/30 text-white" 
          : "text-gray-400 hover:bg-teal-900/20 hover:text-gray-300"
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-green-500 flex items-center justify-center text-white">
        {service.icon}
      </div>
      <span className="hidden md:block">{service.title}</span>
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
      teal: {
        bg: "from-teal-500 to-emerald-600",
        border: "border-teal-500/30",
        text: "text-teal-400",
      },
      emerald: {
        bg: "from-emerald-500 to-green-600",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
      },
      green: {
        bg: "from-green-500 to-teal-600",
        border: "border-green-500/30",
        text: "text-green-400",
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
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-teal-600/5 filter blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-green-600/5 filter blur-[120px] pointer-events-none"></div>
        
        {/* Hero Section */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-green-500/20 text-teal-300 text-sm font-medium mb-4 border border-teal-500/30">
                  POSICIONAMIENTO WEB
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-500">SEO</span> que genera tráfico cualificado y conversiones
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Implemento estrategias SEO avanzadas y personalizadas que no solo mejoran tu visibilidad en Google, sino que atraen tráfico de calidad que se convierte en clientes. Resultados medibles y sostenibles a largo plazo.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-lg hover:shadow-glow-teal transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Potenciar mi presencia online</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-teal-500 text-teal-400 rounded-lg hover:bg-teal-500/10 transition-all duration-300"
                  >
                    Auditoría SEO gratuita
                  </Link>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
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
                      <div className="text-white font-medium">+70 clientes</div>
                      <div className="text-gray-400 text-xs">posicionados en Google</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-green-600 flex items-center justify-center text-white">
                      <FaClock />
                    </div>
                    <div>
                      <div className="text-white font-medium">10+ años</div>
                      <div className="text-gray-400 text-xs">de experiencia en SEO</div>
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
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-green-500/10 rounded-xl"></div>
                  <Image
                    src="/imagenes/seo-dashboard.webp"
                    alt="Dashboard de análisis SEO mostrando resultados"
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
                    <div className="bg-[#1A1A2E]/80 backdrop-blur-sm p-4 rounded-lg border border-teal-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-teal-500 to-green-600 flex items-center justify-center text-white">
                          <FaSearchDollar />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Resultados de SEO</h3>
                        </div>
                        <span className="ml-auto text-green-400 text-sm flex items-center">
                          +325% <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-teal-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">96%</div>
                          <div className="text-gray-400 text-xs">Más visibilidad</div>
                        </div>
                        <div className="bg-teal-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">+12</div>
                          <div className="text-gray-400 text-xs">Palabras #1 en Google</div>
                        </div>
                        <div className="bg-teal-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">256%</div>
                          <div className="text-gray-400 text-xs">Incremento de tráfico</div>
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
                { value: "+325%", label: "aumento promedio en tráfico orgánico" },
                { value: "TOP 3", label: "posiciones en keywords competitivas" },
                { value: "92%", label: "tasa de retención de clientes" },
                { value: "195%", label: "incremento promedio de conversiones" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 border border-teal-500/10 p-5 rounded-xl"
                >
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500 mb-2">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
        </div>
        
        {/* SEO Services Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-green-500/20 text-teal-300 text-sm font-medium mb-3">
                SERVICIOS SEO ESPECIALIZADOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Estrategias completas de optimización
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Ofrezco servicios SEO integrales y personalizados para cada tipo de sitio web 
                y objetivo de negocio, garantizando resultados sostenibles a largo plazo.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {seoServices.map((service, index) => (
                <ServiceTab
                  key={index}
                  service={service}
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-green-600 flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {seoServices[activeTab].icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{seoServices[activeTab].title}</h3>
                    <p className="text-gray-300 mb-6">{seoServices[activeTab].description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {seoServices[activeTab].features.map((feature, i) => (
                        <div key={i} className="bg-teal-900/20 py-2 px-3 rounded-lg border border-teal-500/10 flex items-center">
                          <div className="w-2 h-2 rounded-full bg-teal-400 mr-2"></div>
                          <span className="text-teal-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-lg hover:shadow-md transition-all duration-300 flex items-center gap-2 flex-shrink-0 mt-4 md:mt-0"
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-green-500/20 text-teal-300 text-sm font-medium mb-3">
                CARACTERÍSTICAS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                SEO de alto rendimiento
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Mi enfoque SEO va más allá del posicionamiento; se centra en atraer tráfico cualificado 
                que se convierte en clientes y genera crecimiento real para tu negocio.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {seoFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-teal-600 to-green-700 flex items-center justify-center text-white text-xl mb-5">
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-green-500/20 text-teal-300 text-sm font-medium mb-3">
                METODOLOGÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proceso de optimización SEO
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mi enfoque sistemático garantiza resultados sostenibles a largo plazo 
                y un crecimiento constante de tráfico orgánico cualificado.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute h-full w-1 bg-gradient-to-b from-teal-500 via-green-600 to-teal-800/40 left-[15px] md:left-1/2 top-0 transform md:-translate-x-1/2 hidden sm:block"></div>
              
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
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-lg border border-teal-500/20 flex-grow">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-teal-900/30 text-teal-400 mr-3">
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-green-500/20 text-teal-300 text-sm font-medium mb-3">
                PLANES DE SERVICIO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Inversión en visibilidad online
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Planes flexibles que se adaptan a las necesidades y presupuesto de tu negocio,
                con un enfoque en maximizar el retorno de tu inversión.
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
              className="mt-10 bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-xl border border-teal-500/20 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-green-600 flex items-center justify-center text-white">
                  <FaSearchDollar className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">¿Tienes un proyecto especial o E-commerce?</h3>
                  <p className="text-gray-300 text-sm">Contacta para un presupuesto a medida según tus necesidades específicas</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-lg hover:shadow-md transition-all duration-300 whitespace-nowrap md:ml-auto"
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-green-500/20 text-teal-300 text-sm font-medium mb-3">
                TESTIMONIOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Lo que dicen mis clientes
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Descubre cómo mis estrategias SEO han transformado el tráfico orgánico y 
                las conversiones para empresas de diversos sectores.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Hemos multiplicado por 5 nuestro tráfico orgánico en solo 6 meses. Lo más impresionante no es solo el aumento de visitas, sino la calidad de los leads que ahora recibimos a través de la web. El ROI ha sido extraordinario.",
                  author: "Fernando Martín",
                  position: "Director de Marketing",
                  company: "TechSolutions Inc.",
                  image: "/imagenes/testimonial-1.webp"
                },
                {
                  quote: "Llegamos a la primera página de Google en keywords ultra competitivas de nuestro sector en menos tiempo del que esperábamos. La transparencia, los informes detallados y la comunicación constante han sido aspectos diferenciales del servicio.",
                  author: "Carmen Rodríguez",
                  position: "CEO",
                  company: "Grupo Innova",
                  image: "/imagenes/testimonial-2.webp"
                },
                {
                  quote: "Antes de trabajar juntos, nuestra presencia en Google era prácticamente inexistente. Ahora lideramos búsquedas locales importantes y hemos incrementado un 170% las solicitudes de contacto desde el sitio web. Ha sido una de las mejores inversiones para nuestro negocio.",
                  author: "Miguel Torres",
                  position: "Fundador",
                  company: "Clínica Dental Torres",
                  image: "/imagenes/testimonial-3.webp"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-teal-500/10 relative"
                >
                  <div className="absolute top-6 left-6 text-teal-500 text-4xl opacity-20">"</div>
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
                      <p className="text-gray-400 text-xs">{testimonial.position}, <span className="text-teal-400">{testimonial.company}</span></p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 text-teal-500 text-4xl opacity-20">"</div>
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
                Resuelve tus dudas sobre mi servicio de SEO
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Cuánto tiempo toma ver resultados con SEO?",
                  answer: "El SEO es una estrategia a medio-largo plazo. Los primeros resultados suelen comenzar a verse entre 2-3 meses, con mejoras incrementales. Para keywords competitivas y resultados más significativos, el horizonte es de 4-6 meses. Sin embargo, implemento estrategias para conseguir algunas 'victorias rápidas' mientras construimos la autoridad de dominio necesaria para posicionamientos sostenibles. El SEO es una inversión que genera retornos crecientes con el tiempo."
                },
                {
                  question: "¿Cómo garantizas resultados en SEO?",
                  answer: "No prometo posiciones específicas en Google (nadie debería hacerlo), pero sí garantizo mejoras medibles en visibilidad, tráfico orgánico y conversiones. Mi metodología está basada en datos y buenas prácticas reconocidas por la industria. Trabajo con total transparencia, proporcionando informes detallados de las acciones realizadas y los resultados obtenidos. Mi tasa de retención de clientes superior al 92% y los casos de éxito demuestran la efectividad de mis servicios."
                },
                {
                  question: "¿En qué se diferencia tu servicio SEO de otros?",
                  answer: "Mi enfoque combina tres factores distintivos: 1) Estrategia personalizada basada en análisis exhaustivo de tu negocio, competencia y objetivos específicos, no aplicando fórmulas genéricas; 2) Visión integral que incluye tanto factores técnicos como de user experience y contenido estratégico; y 3) Orientación a resultados reales para tu negocio, no solo posiciones en buscadores. Además, mantengo comunicación constante y me actualizo permanentemente sobre las últimas tendencias y algoritmos de búsqueda."
                },
                {
                  question: "¿El SEO sigue siendo relevante con la IA y nuevas tecnologías?",
                  answer: "Más que nunca. Con la evolución de la IA y búsquedas de voz, el SEO se ha vuelto más sofisticado. Google sigue siendo la principal fuente de tráfico cualificado para la mayoría de negocios. Lo que ha cambiado es que ahora no basta con optimizaciones básicas—se requiere un enfoque integral que incluye experiencia de usuario, contenido de valor, optimizaciones técnicas avanzadas y factores como la intención de búsqueda. Mi servicio evoluciona constantemente para adaptarse a estos cambios y convertirlos en oportunidades."
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
        
        {/* CTA Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl border border-teal-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-green-700/20"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Mejora tu visibilidad online hoy mismo
                    </h2>
                    <p className="text-gray-300 mb-6">
                      No dejes para mañana el tráfico orgánico que puedes comenzar a construir hoy. 
                      Una estrategia SEO bien ejecutada es una de las inversiones más rentables 
                      para tu negocio a medio y largo plazo.
                    </p>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-6 mb-6">
                      {[
                        "Análisis SEO gratuito",
                        "Estrategia personalizada",
                        "Resultados medibles",
                        "Soporte continuo"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-500 to-green-600 flex items-center justify-center text-white text-xs">
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
                      className="px-8 py-3 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-lg hover:shadow-glow-teal transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>Solicitar presupuesto SEO</span>
                      <FaArrowRight />
                    </button>
                    <Link
                      href="https://calendly.com/deivipluss/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Agendar auditoría SEO gratuita
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-green-600 flex items-center justify-center">
                    <FaSearchDollar className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Servicio SEO</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntame sobre tu proyecto y objetivos de posicionamiento</p>
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
                  <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">
                    Sitio web
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="w-full p-3 bg-[#0D0C1D] border border-teal-500/30 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="https://tudominio.com"
                  />
                </div>
                <div>
                  <label htmlFor="service_type" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué tipo de servicio SEO necesitas?
                  </label>
                  <select
                    id="service_type"
                    className="w-full p-3 bg-[#0D0C1D] border border-teal-500/30 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="onpage">SEO On-Page</option>
                    <option value="offpage">SEO Off-Page</option>
                    <option value="technical">SEO Técnico</option>
                    <option value="local">SEO Local</option>
                    <option value="complete">Estrategia SEO completa</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Cuéntanos sobre tus objetivos
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-teal-500/30 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="¿Qué te gustaría lograr con SEO? ¿Hay keywords específicas que te interesen?"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-lg hover:shadow-glow-teal transition-all duration-300"
                  >
                    Solicitar propuesta personalizada
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Te responderé en menos de 24 horas con una estrategia SEO a medida
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
