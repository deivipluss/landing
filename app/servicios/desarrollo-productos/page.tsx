"use client";
import React, { useState, useRef } from "react";
import { 
  FaCog, 
  FaRocket, 
  FaChartLine, 
  FaTools, 
  FaLightbulb, 
  FaArrowRight,
  FaSearch,
  FaUsers,
  FaCode,
  FaCheck
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function DesarrolloProductosPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const productTypes = [
    {
      title: "Productos Digitales",
      description: "Desarrollo de software, apps, plataformas web y otros productos tecnológicos adaptados a las necesidades específicas de tu mercado objetivo.",
      icon: <FaCode />,
      features: [
        "Apps móviles",
        "SaaS (Software as a Service)",
        "Plataformas web",
        "APIs y extensiones"
      ]
    },
    {
      title: "Productos Físicos",
      description: "Diseño y producción de productos tangibles con un enfoque en innovación, usabilidad y diferenciación en el mercado.",
      icon: <FaTools />,
      features: [
        "Prototipos funcionales",
        "Diseño industrial",
        "Gadgets tecnológicos",
        "Productos de consumo"
      ]
    },
    {
      title: "Servicios Innovadores",
      description: "Conceptualización y estructuración de servicios disruptivos que resuelven problemas reales y generan experiencias memorables.",
      icon: <FaLightbulb />,
      features: [
        "Modelos de suscripción",
        "Servicios híbridos",
        "Experiencias únicas",
        "Soluciones B2B"
      ]
    },
    {
      title: "Expansión de Línea",
      description: "Ampliación estratégica de tu cartera de productos existente para maximizar el valor de tu marca y alcanzar nuevos segmentos.",
      icon: <FaRocket />,
      features: [
        "Análisis de portfolio",
        "Extensiones de marca",
        "Nuevos segmentos",
        "Cross-selling"
      ]
    }
  ];

  const developmentServices = [
    {
      title: "Investigación de Mercado",
      description: "Analizo profundamente tu sector para identificar oportunidades, tendencias emergentes y necesidades no cubiertas que tu producto puede resolver.",
      icon: <FaSearch className="text-xl" />
    },
    {
      title: "Diseño de Producto",
      description: "Creo conceptos innovadores y funcionales que combinan estética, usabilidad y viabilidad técnica, apuntando a una experiencia de usuario excepcional.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    },
    {
      title: "Prototipado y Validación",
      description: "Desarrollo prototipos funcionales para validar conceptos con usuarios reales, iterar rápidamente y minimizar el riesgo antes del lanzamiento completo.",
      icon: <FaTools className="text-xl" />
    },
    {
      title: "Desarrollo Técnico",
      description: "Implemento soluciones tecnológicas escalables y robustas, utilizando las metodologías y herramientas más adecuadas para cada proyecto específico.",
      icon: <FaCode className="text-xl" />
    },
    {
      title: "Estrategia Go-to-Market",
      description: "Diseño planes de lanzamiento efectivos que maximizan la visibilidad, adopción y retención de usuarios desde el primer día en el mercado.",
      icon: <FaRocket className="text-xl" />
    },
    {
      title: "Optimización y Crecimiento",
      description: "Analizo el rendimiento post-lanzamiento para implementar mejoras continuas basadas en datos y feedback real, impulsando el crecimiento sostenible.",
      icon: <FaChartLine className="text-xl" />
    }
  ];

  const processSteps = [
    {
      title: "Descubrimiento e Ideación",
      description: "Exploramos oportunidades, analizamos el mercado y definimos el problema a resolver, generando conceptos innovadores alineados con tu visión.",
      icon: <FaLightbulb />
    },
    {
      title: "Validación de Concepto",
      description: "Probamos las ideas con usuarios potenciales para validar su viabilidad y refinar el concepto antes de invertir en su desarrollo completo.",
      icon: <FaUsers />
    },
    {
      title: "Diseño y Arquitectura",
      description: "Creamos los planos detallados del producto, definiendo funcionalidades, experiencia de usuario y especificaciones técnicas.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    },
    {
      title: "Desarrollo e Implementación",
      description: "Construimos el producto utilizando metodologías ágiles que permiten adaptación rápida y entrega incremental de valor.",
      icon: <FaTools />
    },
    {
      title: "Pruebas y Refinamiento",
      description: "Realizamos pruebas exhaustivas para asegurar la calidad, usabilidad y rendimiento del producto antes de su lanzamiento.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    },
    {
      title: "Lanzamiento y Crecimiento",
      description: "Ejecutamos la estrategia go-to-market y establecemos métricas de éxito para monitorear y optimizar el rendimiento continuamente.",
      icon: <FaRocket />
    }
  ];

  const packages = [
    {
      title: "Consultoría de Producto",
      price: "Desde $2,500",
      features: [
        "Auditoría de idea o producto existente",
        "Análisis de mercado y competencia",
        "Identificación de oportunidades",
        "Recomendaciones estratégicas",
        "Hoja de ruta de desarrollo",
        "2 sesiones de consultoría"
      ],
      color: "violet",
      popular: false
    },
    {
      title: "Desarrollo MVP",
      price: "Desde $8,500",
      features: [
        "Validación de concepto",
        "Diseño de producto básico",
        "Desarrollo de prototipo funcional",
        "Pruebas con usuarios reales",
        "Implementación de feedback inicial",
        "Plan de lanzamiento",
        "Soporte técnico por 1 mes"
      ],
      color: "fuchsia",
      popular: true
    },
    {
      title: "Producto Completo",
      price: "Desde $24,500",
      features: [
        "Investigación de mercado profunda",
        "Diseño de producto avanzado",
        "Desarrollo completo end-to-end",
        "Testing exhaustivo y optimización",
        "Estrategia de lanzamiento detallada",
        "Análisis de métricas post-lanzamiento",
        "Optimizaciones basadas en datos",
        "Soporte técnico por 3 meses"
      ],
      color: "purple",
      popular: false
    }
  ];

  // Tab component for product types
  const TypeTab = ({ type, active, onClick, index }: {
    type: typeof productTypes[0];
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
          ? "bg-gradient-to-r from-purple-600/30 to-fuchsia-700/30 border border-purple-500/30 text-white" 
          : "text-gray-400 hover:bg-purple-900/20 hover:text-gray-300"
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center justify-center text-white">
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
      violet: {
        bg: "from-violet-500 to-purple-600",
        border: "border-violet-500/30",
        text: "text-violet-400",
      },
      fuchsia: {
        bg: "from-fuchsia-500 to-pink-600",
        border: "border-fuchsia-500/30",
        text: "text-fuchsia-400",
      },
      purple: {
        bg: "from-purple-500 to-indigo-600",
        border: "border-purple-500/30",
        text: "text-purple-400",
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
          popular ? `ring-2 ring-${color}-500/30 ${colorClasses.border}` : 'border border-purple-500/20'
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
            <span>Solicitar propuesta</span>
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
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-purple-600/5 filter blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-fuchsia-600/5 filter blur-[120px] pointer-events-none"></div>
        
        {/* Hero Section */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-purple-300 text-sm font-medium mb-4 border border-purple-500/30">
                  DESARROLLO DE PRODUCTOS
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Transformo <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">ideas</span> en productos exitosos
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Diseño y desarrollo productos digitales y físicos innovadores que resuelven problemas reales, generan experiencias excepcionales y crean ventajas competitivas sostenibles para tu negocio.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-lg hover:shadow-glow-purple transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Desarrollar mi producto</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                  >
                    Consulta estratégica gratuita
                  </Link>
                </div>
                
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(num => (
                      <div key={num} className="w-8 h-8 rounded-full border-2 border-[#0D0C1D] bg-gradient-to-br from-purple-400 to-fuchsia-600 flex items-center justify-center text-white text-xs font-bold">
                        {String.fromCharCode(64 + num)}
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-300 text-sm">
                    <span className="text-white font-medium">+85</span> productos exitosos lanzados al mercado
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
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-xl"></div>
                  <Image
                    src="/imagenes/product-development.webp"
                    alt="Desarrollo de productos innovadores"
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
                    <div className="bg-[#1A1A2E]/80 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600 flex items-center justify-center text-white">
                            <FaRocket />
                          </div>
                          <div>
                            <h3 className="text-white font-medium">Métricas de Éxito</h3>
                            <p className="text-purple-300 text-sm">Rendimiento de producto</p>
                          </div>
                        </div>
                        <span className="text-green-400 text-sm flex items-center">
                          +94% <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-purple-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">8/10</div>
                          <div className="text-gray-400 text-xs">Product-market fit</div>
                        </div>
                        <div className="bg-purple-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">67%</div>
                          <div className="text-gray-400 text-xs">Tasa de adopción</div>
                        </div>
                        <div className="bg-purple-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">3.2x</div>
                          <div className="text-gray-400 text-xs">ROI promedio</div>
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
                { value: "85%", label: "de éxito en los lanzamientos" },
                { value: "3.2x", label: "retorno sobre inversión promedio" },
                { value: "67%", label: "tasa de adopción de usuarios" },
                { value: "-40%", label: "reducción de time-to-market" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 border border-purple-500/10 p-5 rounded-xl"
                >
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500 mb-2">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        </div>
        
        {/* Product Types Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-purple-300 text-sm font-medium mb-3">
                TIPOS DE PRODUCTOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Soluciones adaptadas a tu visión
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Desarrollo diferentes tipos de productos innovadores, cada uno diseñado
                estratégicamente para resolver problemas específicos y crear valor para tus usuarios.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {productTypes.map((type, index) => (
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
                className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-8 border border-purple-500/20"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600 flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {productTypes[activeTab].icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{productTypes[activeTab].title}</h3>
                    <p className="text-gray-300 mb-6">{productTypes[activeTab].description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {productTypes[activeTab].features.map((feature, i) => (
                        <div key={i} className="bg-purple-900/20 py-2 px-3 rounded-lg border border-purple-500/10 flex items-center">
                          <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                          <span className="text-purple-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white rounded-lg hover:shadow-md transition-all duration-300 flex items-center gap-2 flex-shrink-0 mt-4 md:mt-0"
                  >
                    <span>Explorar oportunidades</span>
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-purple-300 text-sm font-medium mb-3">
                SERVICIOS DE DESARROLLO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Creación integral de productos
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Ofrezco un enfoque completo para transformar ideas en productos exitosos,
                desde la conceptualización hasta el lanzamiento y la optimización continua.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {developmentServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center text-white text-xl mb-5">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  
                  <p className="text-gray-300">{service.description}</p>
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-purple-300 text-sm font-medium mb-3">
                METODOLOGÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proceso de desarrollo de producto
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mi metodología de producto combina innovación con practicidad, 
                para crear soluciones que los usuarios aman y generan resultados de negocio.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute h-full w-1 bg-gradient-to-b from-purple-500 via-fuchsia-600 to-purple-800/40 left-[15px] md:left-1/2 top-0 transform md:-translate-x-1/2 hidden sm:block"></div>
              
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
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-bold ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-lg border border-purple-500/20 flex-grow">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-900/30 text-purple-400 mr-3">
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-purple-300 text-sm font-medium mb-3">
                PLANES DE SERVICIO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Inversión en tu producto
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Planes flexibles para diferentes etapas de desarrollo, desde la validación
                de concepto hasta el lanzamiento completo y la optimización continua.
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
              className="mt-10 bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-xl border border-purple-500/20 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600 flex items-center justify-center text-white">
                  <FaLightbulb className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">¿Tienes un proyecto complejo o especializado?</h3>
                  <p className="text-gray-300 text-sm">Cada producto es único. Solicita un presupuesto personalizado adaptado a tus necesidades específicas.</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white rounded-lg hover:shadow-md transition-all duration-300 whitespace-nowrap md:ml-auto"
              >
                Solicitar propuesta personalizada
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-purple-300 text-sm font-medium mb-3">
                TESTIMONIOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Productos que transforman negocios
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Descubre cómo he ayudado a empresas a crear productos excepcionales
                que generan valor real para usuarios y resultados para el negocio.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Logramos transformar una idea abstracta en un producto SaaS con product-market fit en tiempo récord. El enfoque metodológico y la capacidad para combinar visión estratégica con ejecución técnica fueron fundamentales para nuestro éxito.",
                  author: "Daniel Moreno",
                  position: "Fundador & CEO",
                  company: "FinTech Solutions",
                  image: "/imagenes/testimonial-1.webp"
                },
                {
                  quote: "El proceso de desarrollo fue increíblemente eficiente. Pasamos de concepto a MVP en menos de 3 meses, lo que nos permitió validar rápidamente nuestras hipótesis con usuarios reales y pivotar donde era necesario. Los resultados superaron todas nuestras expectativas.",
                  author: "María González",
                  position: "CPO",
                  company: "HealthTech Inc.",
                  image: "/imagenes/testimonial-2.webp"
                },
                {
                  quote: "La diferencia entre un buen producto y uno excepcional está en los detalles. El nivel de atención en cada aspecto del desarrollo, desde la experiencia de usuario hasta la arquitectura técnica, resultó en un producto que nuestros clientes realmente aman usar.",
                  author: "Javier Rodríguez",
                  position: "Director de Innovación",
                  company: "Global Retail Group",
                  image: "/imagenes/testimonial-3.webp"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-purple-500/10 relative"
                >
                  <div className="absolute top-6 left-6 text-purple-500 text-4xl opacity-20">"</div>
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
                      <p className="text-gray-400 text-xs">{testimonial.position}, <span className="text-purple-400">{testimonial.company}</span></p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 text-purple-500 text-4xl opacity-20">"</div>
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
                Resuelve tus dudas sobre mi servicio de Desarrollo de Productos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Cuánto tiempo toma desarrollar un producto digital desde cero?",
                  answer: "El tiempo de desarrollo varía según la complejidad y alcance del producto. Para MVPs funcionales, normalmente requiero entre 2-3 meses. Para productos completos con funcionalidades avanzadas, el plazo puede extenderse a 4-6 meses. Mi enfoque ágil permite lanzar versiones incrementales, obteniendo feedback real y validación temprana mientras continuamos desarrollando nuevas características."
                },
                {
                  question: "¿Cuáles son las características de un MVP exitoso?",
                  answer: "Un MVP exitoso se caracteriza por: 1) Resolver un problema real y específico para un segmento definido de usuarios; 2) Incluir solo las funcionalidades esenciales que aportan el valor principal; 3) Ser lo suficientemente bueno para atraer early adopters y generar feedback valioso; 4) Implementar mecanismos de medición para validar hipótesis clave; y 5) Ser escalable y flexible para evolucionar rápidamente. El objetivo es maximizar el aprendizaje con la mínima inversión."
                },
                {
                  question: "¿Qué tecnologías utilizas para el desarrollo de productos digitales?",
                  answer: "Selecciono las tecnologías más adecuadas según los requerimientos específicos de cada producto. Para aplicaciones web, trabajo con React, Next.js y Vue.js para frontends modernos; Node.js, Python y tecnologías serverless para backends escalables. Para aplicaciones móviles, utilizo React Native y Flutter para desarrollo multiplataforma, o Swift/Kotlin para aplicaciones nativas. Siempre priorizo tecnologías probadas que ofrecen el mejor equilibrio entre velocidad de desarrollo, rendimiento y escalabilidad."
                },
                {
                  question: "¿Cómo manejas la propiedad intelectual y la confidencialidad?",
                  answer: "La protección de tu propiedad intelectual es fundamental. Firmo acuerdos de confidencialidad (NDA) antes de iniciar discusiones detalladas sobre tu idea. Todos los derechos de propiedad intelectual del producto desarrollado se transfieren completamente a ti una vez completado el proyecto y realizados los pagos acordados. El código fuente, diseños y documentación técnica te pertenecen exclusivamente, y mi equipo no puede utilizarlos en otros proyectos."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 p-6 rounded-xl border border-purple-500/10"
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
              className="relative overflow-hidden rounded-2xl border border-purple-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-700/20"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Hagamos realidad tu producto
                    </h2>
                    <p className="text-gray-300 mb-6">
                      La diferencia entre una gran idea y un producto exitoso está en la ejecución.
                      Permíteme ayudarte a transformar tu visión en realidad con un enfoque
                      estratégico, ágil y orientado a resultados.
                    </p>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-6 mb-6">
                      {[
                        "Consulta inicial gratuita",
                        "Enfoque estratégico personalizado",
                        "Metodología ágil y transparente",
                        "Resultados medibles"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600 flex items-center justify-center text-white text-xs">
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
                      className="px-8 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white rounded-lg hover:shadow-glow-purple transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>Convertir mi idea en producto</span>
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
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-purple-500/30"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600 flex items-center justify-center">
                    <FaCog className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Desarrollo de Productos</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntame sobre el producto que quieres desarrollar</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-purple-500/30 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-purple-500/30 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-purple-500/30 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="product_type" className="block text-sm font-medium text-gray-300 mb-1">
                    Tipo de producto
                  </label>
                  <select
                    id="product_type"
                    className="w-full p-3 bg-[#0D0C1D] border border-purple-500/30 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="digital">Producto digital</option>
                    <option value="physical">Producto físico</option>
                    <option value="service">Servicio innovador</option>
                    <option value="extension">Expansión de línea</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Describe tu idea de producto
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-purple-500/30 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="¿Qué producto quieres desarrollar? ¿Cuál es el problema que resuelve? ¿Quiénes son los usuarios objetivo?"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white rounded-lg hover:shadow-glow-purple transition-all duration-300"
                  >
                    Solicitar consulta inicial
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Te responderé en menos de 24 horas con mis ideas iniciales
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .shadow-glow-purple {
          box-shadow: 0 0 25px rgba(168, 85, 247, 0.4);
        }
      `}</style>
    </div>
  );
}
