"use client";
import React, { useState, useRef } from "react";
import { 
  FaPencilRuler, 
  FaEye, 
  FaLightbulb, 
  FaRocket, 
  FaArrowRight,
  FaPalette,
  FaCheckCircle,
  FaRegLightbulb,
  FaCrown
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function LogoPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activePortfolio, setActivePortfolio] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  
  const logoPackages = [
    {
      title: "Identidad Esencial",
      description: "Diseño de logo moderno y distintivo para establecer tu presencia en el mercado",
      price: "$297",
      features: [
        "Logo principal en alta resolución",
        "3 conceptos iniciales",
        "2 rondas de revisiones",
        "Archivos editables (AI, EPS, PDF)",
        "Versiones para web y redes sociales",
        "Guía de colores básica"
      ],
      highlight: false,
      color: "amber"
    },
    {
      title: "Identidad Completa",
      description: "Sistema de identidad visual versátil para crear una marca coherente y memorable",
      price: "$547",
      features: [
        "Logo principal y variaciones",
        "5 conceptos iniciales",
        "3 rondas de revisiones",
        "Todos los archivos editables",
        "Sistema completo de colores",
        "Tipografía personalizada",
        "Mockups de aplicación real",
        "Manual de marca básico"
      ],
      highlight: true,
      color: "rose"
    },
    {
      title: "Identidad Premium",
      description: "Sistema de branding completo para posicionar tu marca en el mercado de forma profesional",
      price: "$897",
      features: [
        "Logo principal y sistema de símbolos",
        "7 conceptos iniciales",
        "Revisiones ilimitadas",
        "Biblioteca completa de archivos",
        "Sistema de colores expandido",
        "Kit completo de papelería",
        "Elementos gráficos secundarios",
        "Manual de marca avanzado",
        "Consultoría de implementación"
      ],
      highlight: false,
      color: "blue"
    }
  ];
  
  const designProcess = [
    {
      title: "Descubrimiento",
      description: "Realizo una inmersión profunda en tu negocio, valores, público objetivo y competencia para entender la esencia que debe transmitir tu marca.",
      icon: <FaRegLightbulb className="text-2xl" />
    },
    {
      title: "Conceptualización",
      description: "Desarrollo múltiples conceptos visuales basados en mi investigación, explorando diferentes estilos, símbolos y tipografías que cuentan tu historia.",
      icon: <FaPencilRuler className="text-2xl" />
    },
    {
      title: "Refinamiento",
      description: "Perfecciono los conceptos más prometedores, ajustando proporciones, espaciado y paletas de color para lograr un diseño visualmente equilibrado y memorable.",
      icon: <FaPalette className="text-2xl" />
    },
    {
      title: "Presentación",
      description: "Te muestro los conceptos finalizados con mockups realistas para que puedas visualizar cómo se verá tu logo en diferentes aplicaciones y contextos.",
      icon: <FaEye className="text-2xl" />
    },
    {
      title: "Entrega",
      description: "Proporciono todos los archivos necesarios en múltiples formatos, junto con un manual de uso que garantiza una implementación correcta de tu nueva identidad.",
      icon: <FaRocket className="text-2xl" />
    }
  ];
  
  const portfolioItems = [
    { 
      name: "NatureBloom",
      type: "Tienda de Plantas",
      image: "/imagenes/logo-portfolio-1.webp",
      colors: ["#2E7D32", "#81C784", "#FFEB3B"]
    },
    { 
      name: "TechWave",
      type: "Startup Tecnológica",
      image: "/imagenes/logo-portfolio-2.webp",
      colors: ["#1976D2", "#64B5F6", "#FF4081"]
    },
    { 
      name: "UrbanTaste",
      type: "Restaurante Gourmet",
      image: "/imagenes/logo-portfolio-3.webp",
      colors: ["#D32F2F", "#FF8A65", "#FFC107"]
    },
    { 
      name: "ZenFitness",
      type: "Centro de Yoga",
      image: "/imagenes/logo-portfolio-4.webp",
      colors: ["#7B1FA2", "#BA68C8", "#4FC3F7"]
    }
  ];

  // Custom package card component
  const PackageCard = ({ 
    title, 
    description, 
    price, 
    features, 
    highlight, 
    color 
  }: { 
    title: string; 
    description: string; 
    price: string; 
    features: string[]; 
    highlight: boolean;
    color: string;
  }) => {
    // Define color classes mapping
    const colorVariants = {
      amber: {
        bg: "from-amber-500 to-orange-500",
        border: "border-amber-500/20",
        highlight: "ring-amber-500/30",
        shadow: "shadow-amber-500/30",
        check: "text-amber-500"
      },
      rose: {
        bg: "from-rose-500 to-pink-600",
        border: "border-rose-500/20",
        highlight: "ring-rose-500/30",
        shadow: "shadow-rose-500/30",
        check: "text-rose-500"
      },
      blue: {
        bg: "from-blue-600 to-indigo-600",
        border: "border-blue-500/20",
        highlight: "ring-blue-500/30",
        shadow: "shadow-blue-500/30",
        check: "text-blue-500"
      }
    };
    
    // Get the correct set of classes based on the color prop
    const colorClasses = colorVariants[color as keyof typeof colorVariants];
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl overflow-hidden ${colorClasses.border} ${
          highlight ? `ring-2 ${colorClasses.highlight}` : ''
        } transition-all duration-300 hover:shadow-lg hover:${colorClasses.shadow} relative`}
      >
        {highlight && (
          <div className={`absolute top-0 right-0 bg-gradient-to-r ${colorClasses.bg} text-white text-xs font-bold px-3 py-1 rounded-bl-lg`}>
            MÁS POPULAR
          </div>
        )}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colorClasses.bg} mb-5`}>
            {price}
          </div>
          <div className="space-y-2">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start">
                <FaCheckCircle className={`${colorClasses.check} mr-2 mt-1 flex-shrink-0`} />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 bg-[#0D0C1D]/30 flex justify-center">
          <button
            onClick={() => setShowContactForm(true)}
            className={`px-5 py-2 bg-gradient-to-r ${colorClasses.bg} text-white rounded-lg hover:shadow-md transition-all duration-300 flex items-center gap-2 text-sm`}
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-600/5 filter blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full bg-rose-600/5 filter blur-[120px] pointer-events-none"></div>
        
        {/* Hero section */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 text-amber-300 text-sm font-medium mb-4 border border-amber-500/30">
                  DISEÑO DE MARCA
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Creo <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500">logos</span> que conectan con tu audiencia
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Diseño identidades visuales memorables que capturan la esencia de tu negocio y te diferencian en un mercado saturado. Mi enfoque estratégico combina psicología del color, tipografía personalizada y simbolismo potente.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-lg hover:shadow-glow-amber transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Crear mi logo</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="#portfolio"
                    className="px-6 py-3 bg-transparent border border-amber-500 text-amber-400 rounded-lg hover:bg-amber-500/10 transition-all duration-300"
                  >
                    Ver portfolio
                  </Link>
                </div>
                
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(num => (
                      <div key={num} className="w-8 h-8 rounded-full border-2 border-[#0D0C1D] bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold">
                        {String.fromCharCode(64 + num)}
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-300 text-sm">
                    <span className="text-white font-medium">+250</span> empresas confían en mis diseños
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, scale: isHeaderInView ? 1 : 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C1D] via-transparent to-[#0D0C1D] opacity-80 z-10"></div>
                  <Image 
                    src="/imagenes/logo-design-hero.webp" 
                    alt="Proceso de diseño de logo creativo"
                    fill
                    className="object-cover"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-64 h-64 flex items-center justify-center">
                      <motion.div
                        animate={{ 
                          rotate: 360,
                        }}
                        transition={{ 
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute w-full h-full border-2 border-dashed border-amber-500/40 rounded-full"
                      ></motion.div>
                      
                      <motion.div
                        animate={{ 
                          rotate: -360,
                        }}
                        transition={{ 
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute w-3/4 h-3/4 border-2 border-dashed border-rose-500/40 rounded-full"
                      ></motion.div>
                      
                      <div className="bg-gradient-to-br from-amber-500 to-rose-500 w-32 h-32 rounded-xl rotate-45 flex items-center justify-center">
                        <div className="rotate-[-45deg] text-white font-bold text-3xl">
                          LOGO
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        </div>
        
        {/* Why choose me section */}
        <section className="py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 text-amber-300 text-sm font-medium mb-3">
                ¿POR QUÉ ELEGIRME?
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Logos diseñados con propósito y estrategia
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Mi enfoque va más allá de la estética. Creo identidades visuales respaldadas por
                investigación de mercado y psicología del consumidor para maximizar tu impacto.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Enfoque Estratégico",
                  description: "Cada diseño que creo está fundamentado en una comprensión profunda de tu mercado, competencia y público objetivo. No diseño solo para impresionar, sino para comunicar y conectar.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                },
                {
                  title: "Diseño Atemporal",
                  description: "Mis logos están creados para perdurar. Evito tendencias pasajeras y me centro en principios de diseño clásicos que mantendrán tu marca relevante y fresca por años, evitando costosos rediseños.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                },
                {
                  title: "Versatilidad Garantizada",
                  description: "Diseño pensando en todas las aplicaciones posibles de tu logo, desde tarjetas de presentación hasta vallas publicitarias. Tu identidad visual funcionará perfectamente en cualquier formato y plataforma.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl border border-amber-500/10 p-6 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500/20 to-rose-500/20 flex items-center justify-center text-amber-400 mb-4">
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
        <section className="py-12 md:py-16 mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E]/40 to-transparent rounded-xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 text-amber-300 text-sm font-medium mb-3">
                MI PROCESO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cómo creo tu identidad de marca
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mi método de trabajo estructurado garantiza resultados excepcionales, manteniendo
                una comunicación transparente durante todo el proceso creativo.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute h-full w-1 bg-gradient-to-b from-amber-500 via-rose-500 to-amber-500/40 left-[15px] md:left-1/2 top-0 transform md:-translate-x-1/2 hidden sm:block"></div>
              
              {designProcess.map((step, index) => (
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
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-lg border border-amber-500/20 flex-grow">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-900/30 text-amber-400 mr-3">
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
        
        {/* Portfolio Section */}
        <section id="portfolio" className="py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 text-amber-300 text-sm font-medium mb-3">
                PORTFOLIO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Marcas que he transformado
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Cada proyecto es una oportunidad para crear una identidad visual que comunique
                la esencia de una marca y conecte con su audiencia ideal.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap md:flex-nowrap gap-4 mb-8 justify-center">
              {portfolioItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActivePortfolio(index)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activePortfolio === index
                      ? "bg-gradient-to-r from-amber-500/20 to-rose-500/20 text-white border border-amber-500/30"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activePortfolio}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl border border-amber-500/20 overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-[300px] md:h-auto">
                    <Image 
                      src={portfolioItems[activePortfolio].image} 
                      alt={portfolioItems[activePortfolio].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{portfolioItems[activePortfolio].name}</h3>
                    <p className="text-amber-400 mb-6">{portfolioItems[activePortfolio].type}</p>
                    
                    <div className="mb-8">
                      <p className="text-gray-300">
                        Desarrollé una identidad de marca distintiva que captura la esencia y personalidad de {portfolioItems[activePortfolio].name}, 
                        permitiéndoles destacar en un mercado competitivo y conectar emocionalmente con su audiencia objetiva.
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm text-gray-400 mb-2">Paleta de colores:</p>
                      <div className="flex gap-3">
                        {portfolioItems[activePortfolio].colors.map((color, i) => (
                          <div key={i} className="w-10 h-10 rounded-full" style={{backgroundColor: color}}></div>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="px-5 py-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-lg hover:shadow-md transition-all duration-300 flex items-center gap-2 text-sm"
                    >
                      <span>Quiero algo similar</span>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 text-amber-300 text-sm font-medium mb-3">
                INVERSIÓN
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Paquetes de diseño de logo
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Soluciones de identidad visual para cada etapa de tu negocio, con opciones
                que se adaptan a diferentes necesidades y presupuestos.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {logoPackages.map((pkg, index) => (
                <PackageCard
                  key={index}
                  title={pkg.title}
                  description={pkg.description}
                  price={pkg.price}
                  features={pkg.features}
                  highlight={pkg.highlight}
                  color={pkg.color}
                />
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 p-6 bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl border border-amber-500/20 flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 flex items-center justify-center text-white">
                  <FaCrown className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">¿Necesitas algo personalizado?</h3>
                  <p className="text-gray-300 text-sm">Diseño soluciones a medida para proyectos con requisitos específicos</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-lg hover:shadow-md transition-all duration-300 whitespace-nowrap md:ml-auto"
              >
                Contactar para proyecto personalizado
              </button>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials Section */}
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
                Lo que dicen mis clientes
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                El impacto positivo que han tenido mis diseños en los negocios que confían en mí
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "El logo que diseñó para mi startup ha sido clave para nuestra imagen de marca. Captó perfectamente nuestra visión y nos ha ayudado a destacar en un mercado competitivo. Definitivamente volveré a trabajar con este profesional.",
                  author: "Carlos Mendoza",
                  position: "CEO",
                  company: "TechWave"
                },
                {
                  quote: "El proceso fue sorprendentemente sencillo. Entendió lo que necesitaba incluso mejor que yo mismo. El logo resultante no solo es visualmente atractivo, sino que comunica perfectamente los valores de mi marca.",
                  author: "María González",
                  position: "Fundadora",
                  company: "NatureBloom"
                },
                {
                  quote: "La inversión en mi logo fue una de las mejores decisiones que he tomado para mi negocio. Ahora tengo una identidad que mis clientes reconocen y asocian con calidad. El retorno de inversión ha sido impresionante.",
                  author: "Javier Rodríguez",
                  position: "Director",
                  company: "UrbanTaste"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-amber-500/10 relative"
                >
                  <svg className="h-8 w-8 text-amber-500/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-2.2 0-4 1.8-4 4v10h10V12h-6c0-1.1.9-2 2-2h2V8h-4zm12 0c-2.2 0-4 1.8-4 4v10h10V12h-6c0-1.1.9-2 2-2h2V8h-4z" />
                  </svg>
                  <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-gray-400 text-xs">{testimonial.position}, <span className="text-amber-400">{testimonial.company}</span></p>
                    </div>
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
                Resuelve tus dudas sobre mi servicio de diseño de logo
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Cuánto tiempo toma diseñar un logo?",
                  answer: "El proceso completo generalmente toma entre 1-3 semanas, dependiendo de la complejidad del proyecto y la rapidez de tus comentarios. Este tiempo incluye la investigación inicial, desarrollo de conceptos, revisiones y finalización. Para proyectos urgentes, ofrezco servicios acelerados con un costo adicional."
                },
                {
                  question: "¿Qué archivos recibiré con mi logo?",
                  answer: "Recibirás un paquete completo con todos los archivos necesarios para usar tu logo en cualquier medio, incluyendo: archivos vectoriales editables (AI, EPS), archivos PDF de alta resolución, versiones PNG con fondo transparente, versiones JPG con fondos blanco y negro, y versiones optimizadas para web y redes sociales. Además, incluyo un mini-manual con recomendaciones de uso."
                },
                {
                  question: "¿Cómo es el proceso de revisiones?",
                  answer: "El proceso de revisiones está estructurado para garantizar tu completa satisfacción. Dependiendo del paquete seleccionado, tienes entre 2-3 rondas de revisiones. En cada ronda, puedes solicitar ajustes en colores, tipografía, proporciones o detalles específicos. Mi objetivo es lograr un diseño con el que estés 100% conforme, por lo que soy flexible cuando se trata de perfeccionar tu logo."
                },
                {
                  question: "¿Qué información necesitas para empezar?",
                  answer: "Para crear un logo efectivo, necesito comprender a fondo tu negocio. Te enviaré un cuestionario detallado que cubre aspectos como: valores y personalidad de tu marca, público objetivo, competencia, preferencias estéticas, aplicaciones previstas del logo, y cualquier elemento específico que desees incluir o evitar. Cuanta más información detallada proporciones, más alineado estará el resultado final con tu visión."
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
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-rose-600/30"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/60 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      ¿Listo para transformar tu marca?
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Un logo excepcional es mucho más que un simple gráfico: es el rostro de tu empresa, 
                      la primera impresión que causas y una poderosa herramienta de comunicación.
                      No pierdas la oportunidad de diferenciarte con una identidad visual profesional.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      {[
                        "Diseños únicos y personalizados",
                        "Archivos listos para cualquier aplicación",
                        "Satisfacción garantizada"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 flex items-center justify-center text-white text-xs">
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
                      className="px-8 py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-lg hover:shadow-glow-amber transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>Diseñar mi logo</span>
                      <FaArrowRight />
                    </button>
                    <Link
                      href="https://calendly.com/deivipluss/30min"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Agendar llamada consultiva
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 flex items-center justify-center">
                    <FaPencilRuler className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Diseño de Logo</h3>
                <p className="text-gray-300 text-center mb-6">Comparte información sobre tu proyecto</p>
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
                    Nombre de la empresa/marca
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full p-3 bg-[#0D0C1D] border border-amber-500/30 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa o marca"
                  />
                </div>
                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-gray-300 mb-1">
                    Paquete de interés
                  </label>
                  <select
                    id="package"
                    className="w-full p-3 bg-[#0D0C1D] border border-amber-500/30 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un paquete</option>
                    <option value="esencial">Identidad Esencial</option>
                    <option value="completa">Identidad Completa</option>
                    <option value="premium">Identidad Premium</option>
                    <option value="personalizado">Proyecto personalizado</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Cuéntame sobre tu negocio y necesidades
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-amber-500/30 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Describe tu negocio, valores, público objetivo y cualquier idea que tengas para tu logo..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-lg hover:shadow-glow-amber transition-all duration-300"
                  >
                    Solicitar propuesta de diseño
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Te responderé en menos de 24 horas con todos los detalles
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .shadow-glow-amber {
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.3);
        }
      `}</style>
    </div>
  );
}
