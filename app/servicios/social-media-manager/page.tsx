"use client";
import React, { useState, useRef } from "react";
import { 
  FaChartLine, 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaTiktok, 
  FaLinkedinIn,
  FaArrowRight,
  FaBullseye,
  FaBullhorn,
  FaUsers,
  FaRegLightbulb,
  FaCheck,
  FaRegChartBar
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function SocialMediaManagerPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const socialMediaStrategies = [
    {
      title: "Estrategia Orgánica",
      description: "Desarrollo un plan efectivo para construir audiencia de calidad y maximizar el engagement sin invertir en publicidad pagada.",
      icon: <FaUsers className="text-xl" />,
      benefits: ["Mayor engagement", "Comunidad leal", "Contenido de valor", "Crecimiento sostenible"]
    },
    {
      title: "Social Ads",
      description: "Diseño e implemento campañas publicitarias de alto rendimiento en redes sociales para amplificar tu alcance y generar resultados.",
      icon: <FaBullhorn className="text-xl" />,
      benefits: ["Segmentación precisa", "ROI optimizado", "Escalabilidad", "Testeo A/B"]
    },
    {
      title: "Estrategia de Contenido",
      description: "Creo calendarios editoriales y contenido persuasivo adaptado a cada plataforma para mantener a tu audiencia enganchada.",
      icon: <FaRegLightbulb className="text-xl" />,
      benefits: ["Consistencia de marca", "Contenido viral", "Storytelling", "Optimización constante"]
    },
    {
      title: "Análisis y Optimización",
      description: "Monitoreo y analizo constantemente el rendimiento para optimizar la estrategia y maximizar los resultados de tus redes sociales.",
      icon: <FaRegChartBar className="text-xl" />,
      benefits: ["KPIs personalizados", "Informes detallados", "Mejora continua", "Decisiones basadas en datos"]
    }
  ];

  const platforms = [
    {
      name: "Instagram",
      icon: <FaInstagram className="text-2xl" />,
      description: "Estrategias visuales y de narrativa que convierten tu perfil en un imán de seguidores y clientes potenciales.",
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-2xl" />,
      description: "Gestión completa de comunidad, contenido y publicidad para la plataforma social más grande del mundo.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Twitter/X",
      icon: <FaTwitter className="text-2xl" />,
      description: "Posicionamiento de marca y conexión en tiempo real con tu audiencia a través de contenido conciso y relevante.",
      color: "from-blue-400 to-sky-600"
    },
    {
      name: "TikTok",
      icon: <FaTiktok className="text-2xl" />,
      description: "Creación de contenido viral y tendencias para conectar con las nuevas generaciones de consumidores.",
      color: "from-pink-500 to-fuchsia-600"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="text-2xl" />,
      description: "Estrategias B2B para posicionarte como referente en tu industria y generar leads de alta calidad.",
      color: "from-blue-700 to-cyan-600"
    }
  ];

  const processSteps = [
    {
      title: "Auditoría inicial",
      description: "Analizo a fondo tu presencia actual en redes sociales, tu competencia y tu audiencia objetivo para identificar oportunidades de mejora.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    },
    {
      title: "Planificación estratégica",
      description: "Desarrollo una estrategia a medida para cada plataforma relevante a tu negocio, con objetivos claros y KPIs definidos.",
      icon: <FaBullseye />
    },
    {
      title: "Creación de contenido",
      description: "Diseño y produzco contenido de alto valor adaptado específicamente a cada plataforma y alineado con tus objetivos de negocio.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    },
    {
      title: "Implementación",
      description: "Publico, gestiono y optimizo tu presencia en todas las plataformas seleccionadas, incluyendo interacción con tu comunidad.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    },
    {
      title: "Análisis y optimización",
      description: "Monitoreo constante de resultados para ajustar la estrategia, maximizar el ROI y garantizar el cumplimiento de objetivos.",
      icon: <FaChartLine />
    }
  ];

  const packages = [
    {
      title: "Básico",
      price: "$790/mes",
      features: [
        "Gestión de 2 plataformas",
        "16 publicaciones mensuales",
        "Interacción básica con la comunidad",
        "Informe mensual de resultados",
        "Optimización de perfil"
      ],
      color: "blue",
      popular: false
    },
    {
      title: "Profesional",
      price: "$1,290/mes",
      features: [
        "Gestión de 3 plataformas",
        "24 publicaciones mensuales",
        "Interacción avanzada con la comunidad",
        "Informes quincenales con análisis",
        "Estrategia de contenido avanzada",
        "1 campaña de anuncios básica",
        "Monitoreo de competencia"
      ],
      color: "indigo",
      popular: true
    },
    {
      title: "Premium",
      price: "$1,990/mes",
      features: [
        "Gestión de 4 plataformas",
        "40 publicaciones mensuales",
        "Community management completo",
        "Informes semanales detallados",
        "Estrategia de contenido integral",
        "2 campañas de anuncios optimizadas",
        "Análisis competitivo avanzado",
        "Estrategia de crecimiento acelerado",
        "Reuniones estratégicas mensuales"
      ],
      color: "sky",
      popular: false
    }
  ];

  // Tab component for platforms
  const PlatformTab = ({ platform, active, onClick, index }: {
    platform: typeof platforms[0];
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
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 w-full ${
        active
          ? `bg-gradient-to-r ${platform.color}/20 border border-blue-500/30 text-white`
          : "text-gray-400 hover:bg-blue-900/20 hover:text-gray-300"
      }`}
    >
      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${platform.color} flex items-center justify-center text-white`}>
        {platform.icon}
      </div>
      <span>{platform.name}</span>
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
      blue: {
        bg: "from-blue-600 to-cyan-600",
        border: "border-blue-500/30",
        text: "text-blue-400",
      },
      indigo: {
        bg: "from-indigo-600 to-purple-600",
        border: "border-indigo-500/30",
        text: "text-indigo-400",
      },
      sky: {
        bg: "from-sky-500 to-blue-600",
        border: "border-sky-500/30",
        text: "text-sky-400",
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
          popular ? `ring-2 ring-${color}-500/30 ${colorClasses.border}` : 'border border-blue-500/20'
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
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-600/5 filter blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-indigo-600/5 filter blur-[120px] pointer-events-none"></div>
        
        {/* Hero Section */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 text-sm font-medium mb-4 border border-blue-500/30">
                  GESTIÓN DE REDES SOCIALES
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Social <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Media</span> Manager Estratégico
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Transformo tus redes sociales en poderosas herramientas de negocio que generan engagement real, potencian tu marca y te conectan con clientes ideales. No solo gestiono perfiles, construyo activos digitales que impulsan resultados medibles.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-glow-blue transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Potenciar mis redes sociales</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                  >
                    Agendar diagnóstico gratuito
                  </Link>
                </div>
                
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(num => (
                      <div key={num} className="w-8 h-8 rounded-full border-2 border-[#0D0C1D] bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                        {String.fromCharCode(64 + num)}
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-300 text-sm">
                    <span className="text-white font-medium">+200</span> empresas han mejorado sus resultados
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl"></div>
                  <Image
                    src="/imagenes/social-media-manager.webp"
                    alt="Social Media Manager trabajando en estrategias digitales"
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
                    <div className="bg-[#1A1A2E]/80 backdrop-blur-sm p-4 rounded-lg border border-blue-500/20">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                            <FaChartLine />
                          </div>
                          <div>
                            <h3 className="text-white font-medium">Dashboard Social</h3>
                            <p className="text-blue-300 text-sm">Rendimiento en tiempo real</p>
                          </div>
                        </div>
                        <span className="text-green-400 text-sm flex items-center">
                          +32% <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-blue-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">3.4K</div>
                          <div className="text-gray-400 text-xs">Seguidores</div>
                        </div>
                        <div className="bg-blue-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">756</div>
                          <div className="text-gray-400 text-xs">Interacciones</div>
                        </div>
                        <div className="bg-blue-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">$4.2K</div>
                          <div className="text-gray-400 text-xs">Ventas generadas</div>
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
                { value: "+180%", label: "aumento promedio en engagement" },
                { value: "3x", label: "crecimiento de comunidad" },
                { value: "65%", label: "incremento en tráfico web" },
                { value: "42%", label: "aumento en conversiones" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 border border-blue-500/10 p-5 rounded-xl"
                >
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-2">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        </div>
        
        {/* Platforms Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 text-sm font-medium mb-3">
                PLATAFORMAS QUE DOMINO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gestión integral para cada red social
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Cada plataforma requiere un enfoque único. Desarrollo estrategias específicas 
                que aprovechan al máximo las características de cada red social.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {platforms.map((platform, index) => (
                <PlatformTab
                  key={index}
                  platform={platform}
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
                className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-8 border border-blue-500/20"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${platforms[activeTab].color} flex items-center justify-center text-white text-3xl flex-shrink-0`}>
                    {platforms[activeTab].icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{platforms[activeTab].name}</h3>
                    <p className="text-gray-300">{platforms[activeTab].description}</p>
                    
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Estrategia', 'Contenido', 'Comunidad', 'Análisis'].map((feature, i) => (
                        <div key={i} className="bg-blue-900/20 py-2 px-3 rounded-lg border border-blue-500/10 text-center">
                          <span className="text-blue-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowContactForm(true)}
                    className={`px-6 py-3 bg-gradient-to-r ${platforms[activeTab].color} text-white rounded-lg hover:shadow-md transition-all duration-300 flex items-center gap-2 flex-shrink-0`}
                  >
                    <span>Potenciar mi {platforms[activeTab].name}</span>
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 text-sm font-medium mb-3">
                MIS SERVICIOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Soluciones completas para redes sociales
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Ofrezco servicios integrales que abarcan todos los aspectos de la gestión de 
                redes sociales, desde estrategia hasta implementación y análisis.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {socialMediaStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl mb-5">
                    {strategy.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{strategy.title}</h3>
                  
                  <p className="text-gray-300 mb-5">{strategy.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {strategy.benefits.map((benefit, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-900/20 border border-blue-600/30 rounded-full text-blue-300 text-xs">
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 text-sm font-medium mb-3">
                MI METODOLOGÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Un enfoque estructurado y efectivo
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mi proceso de trabajo garantiza resultados consistentes y 
                estrategias sociales que realmente impulsan el crecimiento de tu negocio.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute h-full w-1 bg-gradient-to-b from-blue-500 via-indigo-600 to-blue-800/40 left-[15px] md:left-1/2 top-0 transform md:-translate-x-1/2 hidden sm:block"></div>
              
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
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-lg border border-blue-500/20 flex-grow">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-900/30 text-blue-400 mr-3">
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 text-sm font-medium mb-3">
                INVERSIÓN
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Paquetes diseñados para resultados
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Planes flexibles que se adaptan a tus necesidades específicas
                y objetivos de negocio, con excelente relación valor-precio.
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
              className="mt-10 bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-xl border border-blue-500/20 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">¿Necesitas una solución personalizada?</h3>
                  <p className="text-gray-300 text-sm">Diseño planes a medida adaptados a tus necesidades específicas</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-md transition-all duration-300 whitespace-nowrap md:ml-auto"
              >
                Solicitar plan personalizado
              </button>
            </motion.div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 text-sm font-medium mb-3">
                TESTIMONIOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Resultados que hablan por sí mismos
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Descubre cómo he transformado la presencia digital de empresas como la tuya
                con estrategias sociales efectivas y medibles.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Nuestra presencia en redes sociales ha dado un giro completo. No solo aumentamos seguidores, sino que ahora tenemos una comunidad activa que realmente interactúa con nuestra marca y se convierte en clientes fieles.",
                  author: "Carlos Mendoza",
                  position: "Director de Marketing",
                  company: "TechSolutions Inc."
                },
                {
                  quote: "El ROI de nuestra inversión en redes sociales se ha triplicado desde que comenzamos a trabajar juntos. Los informes detallados nos permiten ver exactamente qué estrategias están funcionando y por qué.",
                  author: "Laura Gutiérrez",
                  position: "CEO",
                  company: "Innova Group"
                },
                {
                  quote: "Lo que más valoro es su enfoque estratégico. No se trata solo de publicar contenido, sino de crear una presencia digital que realmente impulsa nuestros objetivos de negocio. Los resultados han superado todas nuestras expectativas.",
                  author: "Miguel Sánchez",
                  position: "Fundador",
                  company: "Creativa Design"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-blue-500/10 relative"
                >
                  <div className="absolute top-6 left-6 text-blue-500 text-4xl opacity-20">"</div>
                  <div className="relative z-10">
                    <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-gray-400 text-xs">{testimonial.position}, <span className="text-blue-400">{testimonial.company}</span></p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 text-blue-500 text-4xl opacity-20">"</div>
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
                Resuelve tus dudas sobre mi servicio de Social Media Manager
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿En qué se diferencia tu servicio de otros social media managers?",
                  answer: "Mi enfoque está basado en resultados de negocio, no solo en métricas de vanidad como likes o seguidores. Desarrollo estrategias personalizadas basadas en data, entendiendo profundamente tu industria, competencia y público objetivo. Además, combino gestión de comunidad con estrategia de contenido y optimización publicitaria para un enfoque verdaderamente integral. Cada acción en redes sociales está alineada con tus objetivos comerciales específicos."
                },
                {
                  question: "¿Cómo mides el éxito de las estrategias en redes sociales?",
                  answer: "Establezco KPIs personalizados alineados con tus objetivos de negocio. Más allá de engagement y crecimiento de audiencia, monitoreo conversiones, tráfico web, generación de leads, y ROI cuando aplica publicidad pagada. Proporciono informes detallados con análisis de tendencias, competencia y recomendaciones estratégicas. Lo más importante: vinculo directamente las actividades en redes sociales con resultados comerciales tangibles."
                },
                {
                  question: "¿Cuánto tiempo toma ver resultados significativos?",
                  answer: "Los primeros resultados en métricas de engagement y alcance suelen verse en 30-60 días. Para crecimiento sustancial de comunidad y conversiones, el horizonte es 2-3 meses de trabajo consistente. Mi estrategia balanceada combina 'victorias rápidas' para mostrar progreso inmediato junto con acciones a largo plazo para construir presencia digital sólida. Cada estrategia incluye un cronograma detallado con expectativas claras de resultados por etapa."
                },
                {
                  question: "¿Cuántas redes sociales debería manejar mi negocio?",
                  answer: "La calidad siempre supera a la cantidad. Recomiendo centrarse en 2-3 plataformas donde realmente está tu audiencia objetivo, en lugar de dispersar esfuerzos. Parte de mi proceso inicial es analizar dónde tiene mayor potencial tu marca específica y tu sector. Una estrategia enfocada en las plataformas correctas generará mejores resultados que una presencia mediocre en todas las redes. Evaluaremos juntos cuáles son las plataformas óptimas para tu caso particular."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 p-6 rounded-xl border border-blue-500/10"
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
              className="relative overflow-hidden rounded-2xl border border-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Eleva tu presencia digital al siguiente nivel
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Las redes sociales bien gestionadas pueden convertirse en uno de los canales
                      más rentables para tu negocio. Convierte tus redes sociales en verdaderos
                      activos que generan resultados medibles.
                    </p>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-6 mb-6">
                      {[
                        "Diagnóstico gratuito",
                        "Planes a medida",
                        "Resultados garantizados"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs">
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
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-glow-blue transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>Potenciar mis redes sociales</span>
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
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-blue-500/30"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                    <FaChartLine className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Social Media Manager</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntame sobre tus objetivos en redes sociales</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="platforms" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué plataformas te interesan?
                  </label>
                  <select
                    id="platforms"
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    multiple
                  >
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="twitter">Twitter/X</option>
                    <option value="tiktok">TikTok</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="youtube">YouTube</option>
                  </select>
                  <p className="text-xs text-gray-400 mt-1">Ctrl+click para seleccionar múltiples opciones</p>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Cuéntame sobre tus objetivos
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="¿Qué te gustaría lograr con tus redes sociales? ¿Tienes desafíos específicos?"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-glow-blue transition-all duration-300"
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
        .shadow-glow-blue {
          box-shadow: 0 0 25px rgba(37, 99, 235, 0.3);
        }
      `}</style>
    </div>
  );
}
