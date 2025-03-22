"use client";
import React, { useState, useRef } from "react";
import { 
  FaPencilAlt, 
  FaRegFileAlt, 
  FaChartLine, 
  FaRegCalendarAlt, 
  FaArrowRight,
  FaRegLightbulb,
  FaCheck,
  FaBullseye,
  FaTrophy
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function ContentManagerPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const contentStrategies = [
    {
      title: "Blog y Contenido Editorial",
      description: "Creo artículos, guías y recursos informativos que posicionan tu marca como referente en tu industria y atraen tráfico orgánico de valor.",
      icon: <FaRegFileAlt className="text-xl" />,
      benefits: ["Mejora del SEO", "Autoridad de marca", "Tráfico orgánico", "Leads cualificados"]
    },
    {
      title: "Contenido para Redes Sociales",
      description: "Desarrollo calendarios editoriales y piezas de contenido adaptadas a cada plataforma para generar engagement y construir comunidad.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>,
      benefits: ["Mayor engagement", "Presencia constante", "Conexión emocional", "Aumento de seguidores"]
    },
    {
      title: "Marketing de Contenidos",
      description: "Implemento estrategias de contenido para cada etapa del embudo de conversión, desde la captación de leads hasta el cierre de ventas.",
      icon: <FaChartLine className="text-xl" />,
      benefits: ["Más conversiones", "Contenido segmentado", "Recorrido del cliente", "Aumento de ROI"]
    },
    {
      title: "Email Marketing",
      description: "Diseño secuencias de emails estratégicos que nutren a tus leads y los convierten en clientes fieles a través de contenido de valor.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>,
      benefits: ["Nutrición de leads", "Automatización", "Personalización", "Fidelización"]
    }
  ];

  const contentProcess = [
    {
      title: "Investigación",
      description: "Analizo tu marca, competencia y audiencia para identificar oportunidades de contenido con alto potencial de impacto.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    },
    {
      title: "Estrategia",
      description: "Desarrollo un plan editorial alineado con tus objetivos de negocio y optimizado para conectar con tu audiencia específica.",
      icon: <FaBullseye />
    },
    {
      title: "Creación",
      description: "Produzco contenido de alta calidad, persuasivo y orientado a resultados, con un tono adaptado a tu marca y audiencia.",
      icon: <FaPencilAlt />
    },
    {
      title: "Distribución",
      description: "Publico y promuevo tu contenido en los canales más efectivos para maximizar su alcance e impacto.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    },
    {
      title: "Análisis",
      description: "Monitoreo el rendimiento, extraigo insights y optimizo continuamente la estrategia para mejorar los resultados.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    }
  ];

  const contentPackages = [
    {
      title: "Esencial",
      price: "$790/mes",
      features: [
        "8 publicaciones de blog (1000 palabras)",
        "12 posts para redes sociales",
        "1 newsletter mensual",
        "Informe mensual de resultados"
      ],
      description: "Ideal para pequeñas empresas que buscan establecer presencia online",
      popular: false
    },
    {
      title: "Profesional",
      price: "$1,490/mes",
      features: [
        "12 publicaciones de blog (1500 palabras)",
        "20 posts para redes sociales",
        "2 newsletters mensuales",
        "2 infografías o recursos descargables",
        "Optimización SEO avanzada",
        "Informes quincenales con recomendaciones"
      ],
      description: "Perfecto para empresas en crecimiento que necesitan escalar su estrategia de contenidos",
      popular: true
    },
    {
      title: "Empresarial",
      price: "$2,490/mes",
      features: [
        "16 publicaciones de blog (2000+ palabras)",
        "30 posts para redes sociales",
        "4 newsletters mensuales",
        "4 recursos premium (whitepapers, e-books)",
        "Estrategia de guest posting",
        "SEO avanzado y linkbuilding",
        "Consultoría de contenidos semanal",
        "Informes semanales detallados"
      ],
      description: "Para empresas establecidas que buscan dominar su industria con contenido de alta calidad",
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "La estrategia de contenidos que diseñó para nosotros transformó por completo nuestra presencia digital. En sólo 4 meses, duplicamos nuestro tráfico orgánico y aumentamos un 45% las conversiones desde el blog.",
      author: "Ana Martínez",
      position: "CMO",
      company: "TechSolutions Inc."
    },
    {
      quote: "Su enfoque estratégico al contenido generó un cambio radical en nuestro engagement. Las tasas de apertura de email pasaron del 12% al 28%, y nuestras publicaciones en LinkedIn están recibiendo 3 veces más interacciones.",
      author: "Carlos Ruiz",
      position: "Director de Marketing",
      company: "Innovex Group"
    },
    {
      quote: "Más allá de crear contenido, nos ayudó a construir una voz de marca única y consistente. Ahora somos reconocidos como referentes en nuestra industria y recibimos solicitudes constantes para colaboraciones.",
      author: "Sofía Hernández",
      position: "Fundadora",
      company: "GrowthLab"
    }
  ];

  // Tab component for content strategies
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
      className={`p-4 rounded-lg text-left flex items-start gap-3 transition-all duration-300 ${
        active 
          ? "bg-gradient-to-r from-emerald-700/30 to-green-800/30 border border-green-500/30 text-white" 
          : "text-gray-400 hover:bg-emerald-900/20 hover:text-gray-300"
      }`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-green-600/5 filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full bg-emerald-600/5 filter blur-[100px] pointer-events-none"></div>
        
        {/* Hero Section */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 text-sm font-medium mb-4 border border-emerald-500/30">
                  ESTRATEGIA DE CONTENIDOS
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Content <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">Manager</span> para tu Negocio
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Creo y gestiono contenido estratégico que conecta con tu audiencia, construye autoridad y genera conversiones. Transforma tu presencia digital con contenido de alto impacto que realmente impulsa resultados.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-lg hover:shadow-glow-green transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Potenciar mi contenido</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-emerald-500 text-emerald-400 rounded-lg hover:bg-emerald-500/10 transition-all duration-300"
                  >
                    Agendar consulta gratuita
                  </Link>
                </div>

                <div className="mt-8 flex items-center">
                  <div className="flex -space-x-2 mr-4">
                    {[1, 2, 3, 4].map(num => (
                      <div key={num} className="w-8 h-8 rounded-full border-2 border-[#0D0C1D] bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white text-xs font-bold">
                        {String.fromCharCode(64 + num)}
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-300 text-sm">
                    <span className="text-white font-medium">+180</span> marcas confían en mi estrategia de contenidos
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
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-xl"></div>
                  <Image
                    src="/imagenes/content-manager.webp"
                    alt="Estrategia de contenido y gestión profesional"
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
                    <div className="bg-[#1A1A2E]/80 backdrop-blur-sm p-4 rounded-lg border border-emerald-500/20">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white">
                          <FaRegCalendarAlt />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Calendario Editorial</h3>
                          <p className="text-emerald-300 text-sm">Publicaciones planificadas</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {[...Array(14)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-full aspect-square rounded ${
                              [2, 5, 7, 11].includes(i) 
                                ? 'bg-emerald-500/80' 
                                : 'bg-emerald-900/30'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-gray-400 text-xs">Marzo 2024</span>
                        <span className="text-emerald-300 text-xs">4 publicaciones programadas</span>
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
                { value: "+65%", label: "aumento promedio en engagement" },
                { value: "3.5×", label: "incremento en tráfico orgánico" },
                { value: "+45%", label: "mejora en tasas de conversión" },
                { value: "87%", label: "de clientes renuevan mensualmente" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 border border-emerald-500/10 p-5 rounded-xl"
                >
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 mb-2">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
        </div>
        
        {/* Content Strategies Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 text-sm font-medium mb-3">
                SOLUCIONES DE CONTENIDO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Estrategias adaptadas a tus objetivos
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Creo contenido estratégico que complementa tus objetivos de marketing, genera 
                autoridad y convierte visitantes en clientes leales.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {contentStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center text-white text-xl mb-5">
                    {strategy.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{strategy.title}</h3>
                  
                  <p className="text-gray-300 mb-5">{strategy.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {strategy.benefits.map((benefit, i) => (
                      <span key={i} className="px-3 py-1 bg-emerald-900/20 border border-emerald-600/30 rounded-full text-emerald-300 text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 text-sm font-medium mb-3">
                MI METODOLOGÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cómo gestiono tu contenido
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Sigo un proceso estructurado que garantiza contenido de calidad, 
                orientado a resultados y perfectamente alineado con tu marca.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute h-full w-1 bg-gradient-to-b from-emerald-500 via-green-600 to-emerald-800/40 left-[15px] md:left-1/2 top-0 transform md:-translate-x-1/2 hidden sm:block"></div>
              
              {contentProcess.map((step, index) => (
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
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-lg border border-emerald-500/20 flex-grow">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-900/30 text-emerald-400 mr-3">
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
        
        {/* Content Packages Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 text-sm font-medium mb-3">
                PAQUETES DE SERVICIO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Soluciones adaptadas a tu negocio
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Ofrezco planes flexibles que se adaptan a las necesidades de tu empresa,
                desde startups hasta grandes corporaciones.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {contentPackages.map((pack, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl overflow-hidden border ${
                    pack.popular ? 'border-emerald-500/40 ring-2 ring-emerald-500/30' : 'border-emerald-500/20'
                  } transition-all duration-300`}
                >
                  {pack.popular && (
                    <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-center py-2">
                      <p className="text-white text-sm font-medium">MÁS POPULAR</p>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pack.title}</h3>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 mb-2">
                      {pack.price}
                    </div>
                    <p className="text-gray-400 text-sm mb-6">{pack.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {pack.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <FaCheck className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6">
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-lg hover:shadow-glow-green transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Seleccionar plan</span>
                      <FaArrowRight />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-xl border border-emerald-500/20 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-green-700 flex items-center justify-center text-white">
                  <FaRegLightbulb className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">¿Necesitas una solución personalizada?</h3>
                  <p className="text-gray-300 text-sm">Diseño planes a medida para necesidades específicas</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-lg hover:shadow-md transition-all duration-300 whitespace-nowrap md:ml-auto"
              >
                Contactar para plan custom
              </button>
            </motion.div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-12 mb-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 text-sm font-medium mb-3">
                BENEFICIOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Por qué contratar mis servicios?
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mi enfoque estratégico al contenido aporta múltiples ventajas competitivas
                a tu negocio en el exigente entorno digital actual.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Contenido con propósito",
                  description: "No creo contenido por crear. Cada pieza está planificada estratégicamente para lograr objetivos específicos, ya sea generar leads, educar a tu audiencia o impulsar conversiones.",
                  icon: <FaBullseye />
                },
                {
                  title: "Experiencia multisectorial",
                  description: "He trabajado con empresas de diversas industrias, lo que me permite aplicar las mejores prácticas y estrategias probadas adaptadas específicamente a tu sector.",
                  icon: <FaTrophy />
                },
                {
                  title: "Resultados medibles",
                  description: "Me enfoco en KPIs concretos y te proporciono informes detallados que demuestran el ROI de tu inversión en contenido, con métricas relevantes para tu negocio.",
                  icon: <FaChartLine />
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl border border-emerald-500/10 p-6 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-600/20 to-green-600/20 flex items-center justify-center text-emerald-400 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 text-sm font-medium mb-3">
                TESTIMONIOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Lo que dicen mis clientes
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Resultados reales para empresas que confiaron en mi estrategia de contenidos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-emerald-500/10 relative"
                >
                  <div className="h-12 flex items-center mb-4">
                    <div className="text-emerald-500 text-4xl opacity-30">"</div>
                  </div>
                  <p className="text-gray-300 italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full flex items-center justify-center text-white text-lg font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-gray-400 text-xs">{testimonial.position}, <span className="text-emerald-400">{testimonial.company}</span></p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 text-emerald-500 text-4xl opacity-30 mb-4 mr-6">"</div>
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
                Resuelve tus dudas sobre mi servicio de Content Manager
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Cómo te familiarizas con mi industria para crear contenido relevante?",
                  answer: "Realizo una inmersión profunda en tu sector mediante investigación exhaustiva: estudio publicaciones especializadas, analizo competidores líderes, entrevisto a tu equipo y clientes, e identifico tendencias emergentes. Además, implemento un proceso de retroalimentación continua para refinar mi comprensión de tu industria con el tiempo. Mi objetivo es convertirme en una extensión de tu equipo que conoce a fondo las complejidades y oportunidades de tu sector."
                },
                {
                  question: "¿Con qué frecuencia debo publicar nuevo contenido?",
                  answer: "La frecuencia óptima depende de tus objetivos, recursos y audiencia. Para blogs corporativos, generalmente recomiendo 2-4 publicaciones semanales para construir autoridad y mejorar SEO. Para redes sociales, la frecuencia varía según la plataforma, desde 1-2 publicaciones diarias en Twitter hasta 2-3 semanales en LinkedIn. Más importante que la cantidad es la consistencia y calidad. Desarrollaré un calendario editorial personalizado basado en tus necesidades específicas y capacidades de marketing."
                },
                {
                  question: "¿Cómo mides el éxito de una estrategia de contenidos?",
                  answer: "Establezco KPIs específicos alineados con tus objetivos de negocio. Para tráfico orgánico, monitorizamos visitas, palabras clave posicionadas y tiempo en página. Para conversiones, seguimos tasas de conversión, generación de leads y atribución de ventas. Para engagement, analizamos interacciones, compartidos y crecimiento de audiencia. Proporciono informes periódicos con análisis de tendencias y recomendaciones para optimización continua, siempre conectando los resultados del contenido con impacto real en tu negocio."
                },
                {
                  question: "¿Cuánto tiempo lleva ver resultados con el marketing de contenidos?",
                  answer: "El marketing de contenidos es una estrategia a medio-largo plazo, aunque verás distintos resultados en diferentes marcos temporales. En 1-3 meses, notarás mejoras en engagement y posicionamiento inicial de contenido. En 3-6 meses, comenzarás a ver crecimiento sustancial en tráfico orgánico y generación de leads. Entre 6-12 meses, experimentarás el establecimiento de autoridad de marca y resultados consistentes en conversiones. Mi enfoque busca equilibrar 'victorias rápidas' con construcción de activos digitales duraderos que generan valor creciente con el tiempo."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 p-6 rounded-xl border border-emerald-500/10"
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
              className="relative overflow-hidden rounded-2xl border border-emerald-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-700/20"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      ¿Listo para transformar tu estrategia de contenidos?
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Permite que mi experiencia impulse tu presencia digital con contenido estratégico 
                      que realmente conecta con tu audiencia y genera resultados tangibles.
                    </p>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-6 mb-6">
                      {[
                        "Análisis inicial gratuito",
                        "Propuesta personalizada en 48 horas",
                        "Sin contratos de permanencia"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center text-white text-xs">
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
                      className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-lg hover:shadow-glow-green transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>Mejorar mi contenido</span>
                      <FaArrowRight />
                    </button>
                    <a
                      href="https://calendly.com/deivipluss/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Agendar llamada estratégica
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
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-emerald-500/30"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-green-700 flex items-center justify-center">
                    <FaPencilAlt className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Content Manager</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntame sobre tus objetivos de contenido</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-emerald-500/30 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-emerald-500/30 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-emerald-500/30 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="content_needs" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué tipo de contenido necesitas?
                  </label>
                  <select
                    id="content_needs"
                    className="w-full p-3 bg-[#0D0C1D] border border-emerald-500/30 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="blog">Blog y Artículos</option>
                    <option value="social">Contenido para Redes Sociales</option>
                    <option value="email">Email Marketing</option>
                    <option value="strategy">Estrategia de Contenidos</option>
                    <option value="all">Todo lo anterior</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Cuéntame sobre tus objetivos de contenido
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-emerald-500/30 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Explica tus objetivos, audiencia target y cualquier detalle relevante sobre tu proyecto de contenido..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-lg hover:shadow-glow-green transition-all duration-300"
                  >
                    Solicitar propuesta personalizada
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Te responderé en menos de 24 horas con una estrategia a medida
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .shadow-glow-green {
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.3);
        }
      `}</style>
    </div>
  );
}
