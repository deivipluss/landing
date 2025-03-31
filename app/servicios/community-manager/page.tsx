"use client";
import React, { useState, useRef } from "react";
import { 
  FaUsers, 
  FaComments, 
  FaHeartbeat, 
  FaRegLightbulb, 
  FaArrowRight,
  FaStar,
  FaCheck,
  FaClock,
  FaUserFriends,
  FaMicrophone,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaLinkedinIn
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function CommunityManagerPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState("instagram");
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const platforms = [
    {
      id: "instagram",
      name: "Instagram",
      icon: <FaInstagram />,
      color: "from-pink-500 to-purple-600",
      features: ["Estrategia de contenido", "Gestión de Stories", "Programación semanal", "Interacción con seguidores"]
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: <FaFacebookF />,
      color: "from-blue-600 to-indigo-600",
      features: ["Gestión de página", "Creación de eventos", "Respuesta a comentarios", "Análisis de métricas"]
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: <FaTwitter />,
      color: "from-sky-400 to-blue-500",
      features: ["Planificación de tweets", "Monitoreo de tendencias", "Gestión de hilos", "Interacción estratégica"]
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: <FaTiktok />,
      color: "from-fuchsia-500 to-rose-600",
      features: ["Estrategia de videos cortos", "Uso de trending sounds", "Participación en challenges", "Análisis de audiencia"]
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      color: "from-blue-700 to-cyan-600",
      features: ["Contenido profesional", "Networking estratégico", "Artículos de valor", "Posicionamiento B2B"]
    }
  ];

  const servicePackages = [
    {
      title: "Manejo Básico",
      price: "$590/mes",
      features: [
        "Manejo de 2 redes sociales",
        "12 publicaciones mensuales",
        "Respuesta a comentarios (L-V)",
        "Informe mensual de resultados",
        "3 Stories/semana por plataforma"
      ],
      description: "Ideal para emprendedores y pequeñas empresas que buscan comenzar a construir presencia digital",
      color: "purple",
      popular: false
    },
    {
      title: "Gestión Premium",
      price: "$990/mes",
      features: [
        "Manejo de 3 redes sociales",
        "20 publicaciones mensuales",
        "Respuesta a comentarios (L-S)",
        "Informes quincenales detallados",
        "5 Stories/semana por plataforma",
        "1 reel o video corto semanal",
        "Gestión de 1 campaña mensual",
        "Estrategia de hashtags personalizada"
      ],
      description: "Perfecto para empresas en crecimiento que necesitan una presencia digital más robusta y estratégica",
      color: "violet",
      popular: true
    },
    {
      title: "Gestión Corporativa",
      price: "$1,690/mes",
      features: [
        "Manejo de 5 redes sociales",
        "30 publicaciones mensuales",
        "Respuesta a comentarios (L-D)",
        "Informes semanales detallados",
        "Stories diarios en cada plataforma",
        "2 reels o videos cortos semanales",
        "Gestión de 2 campañas mensuales",
        "Estrategia de influencers",
        "Análisis de competencia",
        "Reunión estratégica mensual"
      ],
      description: "Para empresas establecidas que buscan maximizar su presencia digital y generar resultados medibles",
      color: "fuchsia",
      popular: false
    }
  ];

  const processSteps = [
    {
      title: "Análisis y Diagnóstico",
      description: "Evalúo a fondo tu marca, audiencia y competencia para entender dónde estás y hacia dónde deberías dirigirte en redes sociales.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    },
    {
      title: "Estrategia de Contenido",
      description: "Desarrollo una estrategia personalizada para cada plataforma, definiendo tono, estética, frecuencia de publicación y KPIs específicos.",
      icon: <FaRegLightbulb />
    },
    {
      title: "Creación y Curación",
      description: "Produzco contenido auténtico y relevante que conecta con tu audiencia, combinando originalidad con tendencias actuales.",
      icon: <FaMicrophone />
    },
    {
      title: "Interacción y Gestión",
      description: "Manejo activamente tus redes sociales, respondiendo rápidamente a comentarios y mensajes, y construyendo relaciones genuinas con tu comunidad.",
      icon: <FaComments />
    },
    {
      title: "Análisis y Optimización",
      description: "Monitoreo continuamente el rendimiento mediante métricas clave, adaptando la estrategia para maximizar engagement y crecimiento.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    }
  ];

  const testimonials = [
    {
      quote: "Mi marca ha crecido un 200% en engagement desde que empezamos a trabajar juntos. Su comprensión de las tendencias y la audiencia es impresionante. Ahora nuestras redes tienen una personalidad única que nuestros seguidores adoran.",
      author: "Elena Martínez",
      position: "CEO",
      company: "Bella Cosméticos",
      image: "/imagenes/testimonial-1.webp"
    },
    {
      quote: "La diferencia es notable. No solo aumentamos seguidores, sino que estos realmente interactúan con nuestro contenido. Las ventas provenientes de redes sociales se han duplicado en solo 3 meses. Su enfoque estratégico ha sido transformador.",
      author: "Daniel Rodríguez",
      position: "Director de Marketing",
      company: "TechSolutions",
      image: "/imagenes/testimonial-2.webp"
    },
    {
      quote: "Lo que más valoro es su capacidad para capturar la voz de nuestra marca perfectamente. Es como si siempre hubiera sido parte de nuestro equipo. La consistencia y creatividad que aporta a nuestras redes sociales ha elevado nuestra imagen profesional.",
      author: "Lucía Hernández",
      position: "Fundadora",
      company: "Eco Living",
      image: "/imagenes/testimonial-3.webp"
    }
  ];

  // Platform tab button component
  const PlatformTab = ({ 
    id, 
    name, 
    icon, 
    isActive, 
    onClick 
  }: { 
    id: string; 
    name: string; 
    icon: JSX.Element; 
    isActive: boolean; 
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors duration-300 ${
        isActive 
          ? "bg-gradient-to-r from-fuchsia-600/30 to-purple-600/30 text-white border border-fuchsia-500/30" 
          : "text-gray-400 hover:bg-fuchsia-900/20 hover:text-gray-200"
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="hidden md:inline">{name}</span>
    </button>
  );

  // Package card component
  const PackageCard = ({ 
    title, 
    price, 
    features, 
    description, 
    popular, 
    color 
  }: { 
    title: string; 
    price: string;
    features: string[]; 
    description: string;
    popular: boolean;
    color: string;
  }) => {
    // Define color variants mapping
    const colorVariants = {
      purple: {
        bg: "from-purple-600 to-indigo-600",
        light: "text-purple-400",
        border: "border-purple-500/30"
      },
      violet: {
        bg: "from-violet-600 to-fuchsia-700",
        light: "text-fuchsia-400",
        border: "border-fuchsia-500/30"
      },
      fuchsia: {
        bg: "from-fuchsia-600 to-pink-600",
        light: "text-pink-400",
        border: "border-pink-500/30"
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
        className={`relative bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl overflow-hidden ${
          popular ? `ring-2 ring-fuchsia-500/30 ${colorClasses.border}` : 'border border-purple-500/20'
        }`}
      >
        {popular && (
          <div className={`absolute top-0 right-0 bg-gradient-to-r ${colorClasses.bg} text-white text-xs font-bold px-3 py-1 rounded-bl-lg`}>
            MÁS POPULAR
          </div>
        )}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colorClasses.bg} mb-2`}>
            {price}
          </div>
          <p className="text-gray-400 text-sm mb-6">{description}</p>
          
          <div className="space-y-3 mb-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start">
                <FaCheck className={`${colorClasses.light} mr-2 mt-1 flex-shrink-0`} />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="px-6 pb-6">
          <button
            onClick={() => setShowContactForm(true)}
            className={`w-full py-3 px-4 bg-gradient-to-r ${colorClasses.bg} text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-fuchsia-600/5 filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/5 filter blur-[100px] pointer-events-none"></div>
        
        {/* Hero section */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 text-fuchsia-300 text-sm font-medium mb-4 border border-fuchsia-500/30">
                  FASE 2: CONSTRUYENDO TU COMUNIDAD
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-500">Community</span> Manager Transformador
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Con una base sólida de contenido establecida, mi rol es transformar tu audiencia en una 
                  comunidad comprometida y valiosa. Me especializo en crear conexiones significativas, 
                  cultivar relaciones auténticas y construir una identidad de marca respaldada por el 
                  reconocimiento genuino de tu comunidad.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-violet-700 text-white rounded-lg hover:shadow-glow-purple transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Potenciar mis redes sociales</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-fuchsia-500 text-fuchsia-400 rounded-lg hover:bg-fuchsia-500/10 transition-all duration-300"
                  >
                    Agendar diagnóstico gratuito
                  </Link>
                </div>
                
                <div className="mt-8 bg-fuchsia-900/20 border border-fuchsia-500/30 rounded-lg p-4">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <Link 
                        href="/servicios/content-manager"
                        className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors flex items-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Anterior: Content Manager
                      </Link>
                      <Link 
                        href="/servicios/social-media-manager"
                        className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors flex items-center gap-2"
                      >
                        Siguiente: Social Media Manager
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                    <div className="text-gray-300 text-sm">
                      <strong className="text-fuchsia-400">¿De dónde venimos?</strong> Tu marca cuenta con contenido estratégico y optimizado que atrae orgánicamente.
                      <br />
                      <strong className="text-fuchsia-400">¿Hacia dónde vamos?</strong> Construiremos una comunidad comprometida que luego amplificaremos con estrategias de Social Media.
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center text-white">
                      <FaHeartbeat />
                    </div>
                    <div className="text-gray-300 text-sm">
                      <span className="text-white font-medium">+40%</span> aumento en engagement
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center text-white">
                      <FaUserFriends />
                    </div>
                    <div className="text-gray-300 text-sm">
                      <span className="text-white font-medium">+120%</span> crecimiento de seguidores
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
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 rounded-xl"></div>
                  <Image
                    src="/imagenes/community-manager.webp"
                    alt="Community Manager profesional trabajando en estrategias sociales"
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
                    <div className="bg-[#1A1A2E]/80 backdrop-blur-sm p-4 rounded-lg border border-fuchsia-500/20">
                      <div className="flex items-start space-x-4 mb-1">
                        <div className="h-10 w-10 rounded-full flex-shrink-0 bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center text-white">
                          <FaUsers />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Social Dashboard</h3>
                          <p className="text-fuchsia-300 text-sm">Resumen de actividad</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-fuchsia-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">2.8K</div>
                          <div className="text-gray-400 text-xs">Nuevos seguidores</div>
                        </div>
                        <div className="bg-fuchsia-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">89%</div>
                          <div className="text-gray-400 text-xs">Tasa respuesta</div>
                        </div>
                        <div className="bg-fuchsia-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">47%</div>
                          <div className="text-gray-400 text-xs">+ engagement</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent"></div>
        </div>
        
        {/* Platforms Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 text-fuchsia-300 text-sm font-medium mb-3">
                PLATAFORMAS QUE DOMINO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Estrategias específicas para cada red social
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Cada plataforma es un mundo diferente, con su propio lenguaje, algoritmo y audiencia. 
                Creo estrategias personalizadas que aprovechan las fortalezas únicas de cada red social.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {platforms.map((platform) => (
                <PlatformTab
                  key={platform.id}
                  id={platform.id}
                  name={platform.name}
                  icon={platform.icon}
                  isActive={activeTab === platform.id}
                  onClick={() => setActiveTab(platform.id)}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {platforms.map((platform) => (
                activeTab === platform.id && (
                  <motion.div
                    key={platform.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl border border-fuchsia-500/20 overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`h-12 w-12 rounded-full bg-gradient-to-r ${platform.color} flex items-center justify-center text-white text-2xl`}>
                            {platform.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                        </div>
                        
                        <p className="text-gray-300 mb-6">
                          Desarrollo estrategias específicas para {platform.name} que conectan con tu audiencia y potencian tu marca, utilizando las funcionalidades únicas de la plataforma para maximizar el impacto y conversión.
                        </p>
                        
                        <div className="space-y-3 mb-6">
                          {platform.features.map((feature, i) => (
                            <div key={i} className="flex items-center">
                              <FaStar className="text-fuchsia-500 mr-2" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <button
                          onClick={() => setShowContactForm(true)}
                          className={`px-6 py-3 bg-gradient-to-r ${platform.color} text-white rounded-lg hover:shadow-md transition-all duration-300 flex items-center gap-2`}
                        >
                          <span>Potenciar mi {platform.name}</span>
                          <FaArrowRight />
                        </button>
                      </div>
                      
                      <div className="relative h-[300px] md:h-auto overflow-hidden">
                        <Image
                          src={`/imagenes/${platform.id}-management.webp`}
                          alt={`Gestión profesional de ${platform.name}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E] via-[#1A1A2E]/60 to-transparent md:bg-gradient-to-l md:from-transparent md:via-[#1A1A2E]/40 md:to-[#1A1A2E]/90"></div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </section>
        
        {/* Benefits Section */}
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 text-fuchsia-300 text-sm font-medium mb-3">
                BENEFICIOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Qué obtienes al trabajar conmigo?
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                No solo gestiono tus redes sociales; transformo tu presencia digital en un activo estratégico
                que genera resultados tangibles para tu negocio.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Estrategia personalizada",
                  description: "Desarrollo un plan a medida basado en tus objetivos específicos, analizando tu audiencia, competencia y oportunidades únicas en cada plataforma.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                },
                {
                  title: "Contenido de alto impacto",
                  description: "Creo contenido que no solo es visualmente atractivo, sino que también resuena con tu audiencia, generando interacción genuina y construyendo una comunidad leal.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                },
                {
                  title: "Gestión constante",
                  description: "Mantengo una presencia activa, respondiendo rápidamente a comentarios, mensajes y tendencias, asegurando que tu marca siempre esté presente y accesible.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                },
                {
                  title: "Análisis e informes detallados",
                  description: "Proporciono reportes periódicos con métricas claras y accionables, para que puedas ver el ROI de tu inversión en redes sociales y tomar decisiones informadas.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                },
                {
                  title: "Crecimiento de audiencia",
                  description: "Implemento estrategias probadas para aumentar tu base de seguidores con personas realmente interesadas en tu marca, no números vacíos o seguidores comprados.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                },
                {
                  title: "Conversión y ROI",
                  description: "Me enfoco en transformar tu presencia social en resultados tangibles, ya sea ventas, leads o cualquier otro objetivo comercial que te propones alcanzar.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl border border-fuchsia-500/10 p-6 hover:border-fuchsia-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-fuchsia-600/20 to-violet-600/20 flex items-center justify-center text-fuchsia-400 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 text-fuchsia-300 text-sm font-medium mb-3">
                MI PROCESO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                De la estrategia a la acción
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mi enfoque estructurado y sistemático garantiza resultados consistentes y
                un crecimiento sostenible para tu presencia en redes sociales.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute h-full w-1 bg-gradient-to-b from-fuchsia-500 via-violet-600 to-fuchsia-800/40 left-[15px] md:left-1/2 top-0 transform md:-translate-x-1/2 hidden sm:block"></div>
              
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
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-bold ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-lg border border-fuchsia-500/20 flex-grow">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-fuchsia-900/30 text-fuchsia-400 mr-3">
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 text-fuchsia-300 text-sm font-medium mb-3">
                PLANES DE SERVICIO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Paquetes adaptados a tus necesidades
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Servicios flexibles que se adaptan al tamaño y objetivos de tu negocio,
                con una excelente relación entre inversión y resultados.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {servicePackages.map((pkg, index) => (
                <PackageCard
                  key={index}
                  title={pkg.title}
                  price={pkg.price}
                  features={pkg.features}
                  description={pkg.description}
                  popular={pkg.popular}
                  color={pkg.color}
                />
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-xl border border-fuchsia-500/20 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-700 flex items-center justify-center text-white">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">¿Necesitas un plan temporal o un proyecto específico?</h3>
                  <p className="text-gray-300 text-sm">Pregúntame sobre mis planes a corto plazo o servicios para campañas puntuales</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-violet-700 text-white rounded-lg hover:shadow-md transition-all duration-300 whitespace-nowrap md:ml-auto"
              >
                Contactar para plan personalizado
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 text-fuchsia-300 text-sm font-medium mb-3">
                TESTIMONIOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Lo que dicen mis clientes
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Descubre cómo he ayudado a otras marcas a transformar su presencia en redes sociales
                y alcanzar sus objetivos de negocio
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
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-fuchsia-500/10 relative"
                >
                  <div className="absolute top-6 left-6 text-fuchsia-500 text-4xl opacity-20">"</div>
                  <div className="relative">
                    <p className="text-gray-300 mb-6 relative z-10">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-600 to-violet-700 rounded-full flex items-center justify-center text-white text-lg font-bold overflow-hidden relative">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-gray-400 text-xs">{testimonial.position}, <span className="text-fuchsia-400">{testimonial.company}</span></p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 text-fuchsia-500 text-4xl opacity-20">"</div>
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
                Resuelve tus dudas sobre mi servicio de Community Manager
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Necesito estar presente en todas las redes sociales?",
                  answer: "No, y de hecho, no lo recomiendo. El enfoque más efectivo es centrarse en las plataformas donde realmente está tu audiencia objetivo. Parte de mi estrategia es identificar cuáles redes sociales tienen mayor potencial para tu negocio específico, en lugar de dispersar esfuerzos. Es mejor tener presencia excelente en 2-3 plataformas que una mediocre en todas. Evaluaremos juntos dónde invertir tu tiempo y recursos para maximizar resultados."
                },
                {
                  question: "¿Cuánto tiempo se necesita para ver resultados?",
                  answer: "Los primeros resultados como mayor engagement e interacción suelen verse en las primeras 2-4 semanas. Para crecimiento significativo de seguidores y conversiones, el horizonte es de 2-3 meses con una estrategia consistente. Las redes sociales requieren construir relaciones auténticas, lo que lleva tiempo. Sin embargo, implemento técnicas para acelerar este proceso y conseguir algunas 'victorias rápidas' que nos permitan ganar impulso mientras construimos la estrategia a largo plazo."
                },
                {
                  question: "¿Cómo trabajaremos juntos en el contenido?",
                  answer: "Mi proceso es colaborativo pero eficiente para no ocupar demasiado de tu tiempo. Al inicio, realizamos una inmersión profunda para entender tu marca, tono y objetivos. Después, creo un calendario editorial mensual para tu aprobación. Una vez establecido el flujo, las revisiones son más rápidas y solo requieren tu input para contenido estratégico o campañas especiales. Mantenemos reuniones periódicas para analizar resultados y ajustar la estrategia, pero me encargo de toda la implementación día a día."
                },
                {
                  question: "¿Qué me diferencia de otras opciones de community management?",
                  answer: "Mi enfoque va más allá de simplemente publicar contenido bonito. Me centro en los resultados de negocio y en construir una comunidad que se convierta en una fuente real de clientes. Además, combino mi experiencia en marketing digital con análisis de datos para tomar decisiones basadas en resultados, no en intuición. Por último, no tercerizo el trabajo: cuando me contratas, trabajas directamente conmigo, asegurando consistencia, calidad y una verdadera comprensión de tu marca."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 p-6 rounded-xl border border-fuchsia-500/10"
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
              className="relative overflow-hidden rounded-2xl border border-fuchsia-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 to-violet-700/20"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Construye una comunidad que impulse tu marca
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Una comunidad comprometida es el activo más valioso para tu marca. 
                      Comienza a construir relaciones significativas que transformarán 
                      seguidores en embajadores leales y defensores de tu marca.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      {[
                        "Calendarios de contenido optimizados",
                        "Estrategias específicas por plataforma",
                        "Crecimiento de comunidad genuino",
                        "Más conversiones, no solo likes"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 flex items-center justify-center text-white text-xs">
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
                      className="px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-violet-700 text-white rounded-lg hover:shadow-glow-purple transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>Empezar ahora</span>
                      <FaArrowRight />
                    </button>
                    <Link
                      href="https://calendly.com/deivipluss/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Agendar diagnóstico gratuito
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
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-fuchsia-500/30"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-700 flex items-center justify-center">
                    <FaUsers className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Community Manager</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntame sobre tu marca y objetivos en redes sociales</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-fuchsia-500/30 rounded-lg text-white focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-fuchsia-500/30 rounded-lg text-white focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Marca/Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full p-3 bg-[#0D0C1D] border border-fuchsia-500/30 rounded-lg text-white focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                    placeholder="Nombre de tu marca"
                  />
                </div>
                <div>
                  <label htmlFor="platforms" className="block text-sm font-medium text-gray-300 mb-1">
                    Redes sociales que te interesan
                  </label>
                  <select
                    id="platforms"
                    className="w-full p-3 bg-[#0D0C1D] border border-fuchsia-500/30 rounded-lg text-white focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                    multiple
                  >
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="twitter">Twitter/X</option>
                    <option value="tiktok">TikTok</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="youtube">YouTube</option>
                  </select>
                  <p className="text-xs text-gray-400 mt-1">Ctrl+click (o Command+click) para seleccionar múltiples opciones</p>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Cuéntame sobre tus objetivos
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-fuchsia-500/30 rounded-lg text-white focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                    placeholder="¿Qué te gustaría lograr con tus redes sociales? ¿Tienes desafíos específicos?"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-fuchsia-600 to-violet-700 text-white rounded-lg hover:shadow-glow-purple transition-all duration-300"
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
        .shadow-glow-purple {
          box-shadow: 0 0 25px rgba(147, 51, 234, 0.3);
        }
      `}</style>
    </div>
  );
}
