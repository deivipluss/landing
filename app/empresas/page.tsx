"use client";
import React, { useState, useRef, useEffect } from "react";
import { 
  FaRocket, // Nuevo ícono para Transformación Digital más creativo
  FaCogs, 
  FaUserTie, 
  FaShareAlt,
  FaShieldAlt, // Nuevo icono para Ciberseguridad
  FaNetworkWired, // Nuevo icono para Auditoría Tecnológica
  FaChartLine, // Nuevo icono para Optimización de Procesos
  FaUsers, // Nuevo icono para Recursos Humanos
  FaBriefcase, // Nuevo icono para Gerentes
  FaBuilding,
  FaTrophy, // Faltaba este icono
  FaBrain, // Añadido FaBrain que faltaba en los imports
  FaArrowUp // Añadido FaArrowUp para el botón de volver arriba
} from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import HomeNavigation from "@/components/HomeNavigation";

// Actualización de los tipos de tarjetas
type CardKey = 'transformacionDigital' | 'branding' | 'relacionesPublicas' | 'entrenamientoGerentes' | 'entrenamientoRH' | 'auditoriaTecnologica' | 'auditoriaOptimizacion' | 'ciberseguridad';

interface NavItem {
  href: string;
  icon: JSX.Element;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", icon: <FaCogs className="transition-transform duration-300 group-hover:rotate-180" />, label: "Home" },
  { href: "/soluciones", icon: <FaBrain className="transition-transform duration-300 group-hover:scale-110" />, label: "Soluciones" },
  { href: "/blog", icon: <FaTrophy className="transition-transform duration-300 group-hover:scale-110" />, label: "Blog" },
  { href: "/contacto", icon: <FaShareAlt className="transition-transform duration-300 group-hover:rotate-12" />, label: "Contacto" },
];

const cardData: { [key in CardKey]: { title: string; description: string; icon: JSX.Element; gradient: string; link: string; featured?: boolean } } = {
  transformacionDigital: {
    title: "Transformación Digital",
    description: "Reinventa tu empresa con tecnologías disruptivas. Optimiza procesos, mejora la experiencia del cliente y aumenta la competitividad en el mercado actual.",
    icon: <FaRocket className="text-3xl group-hover:scale-125 transition-transform duration-500" />, // Cambiado el ícono a FaRocket
    gradient: "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600",
    link: "/servicios/transformacion-digital",
    featured: true // Marcado como destacado
  },
  branding: {
    title: "Branding Empresarial",
    description: "Creamos una identidad sólida y coherente para tu empresa. Mejoramos la percepción de tu marca, generando confianza y fidelidad en tus clientes.",
    icon: <FaBuilding className="text-3xl group-hover:rotate-180 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600",
    link: "/servicios/branding-empresarial"
  },
  relacionesPublicas: {
    title: "Relaciones Públicas Digitales",
    description: "Gestión estratégica de la comunicación entre tu empresa y sus públicos clave en el entorno digital para construir una reputación sólida.",
    icon: <FaShareAlt className="text-3xl group-hover:rotate-12 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-purple-500 via-pink-500 to-red-500",
    link: "/servicios/relaciones-publicas"
  },
  entrenamientoGerentes: {
    title: "Entrenamiento para Gerentes",
    description: "Capacitación especializada en competencias digitales y liderazgo tecnológico para directivos y gerentes.",
    icon: <FaBriefcase className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-amber-500 via-orange-500 to-red-500",
    link: "/servicios/entrenamiento-gerentes"
  },
  entrenamientoRH: {
    title: "Entrenamiento para Recursos Humanos",
    description: "Formación específica para equipos de RRHH en herramientas digitales, gestión de talento y cultura digital corporativa.",
    icon: <FaUsers className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-green-500 via-teal-500 to-blue-500",
    link: "/servicios/entrenamiento-rh"
  },
  auditoriaTecnologica: {
    title: "Auditoría Tecnológica",
    description: "Evaluación exhaustiva de la infraestructura tecnológica para identificar oportunidades de mejora y optimización de recursos.",
    icon: <FaNetworkWired className="text-3xl group-hover:rotate-180 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500",
    link: "/servicios/auditoria-tecnologica"
  },
  auditoriaOptimizacion: {
    title: "Auditoría y Optimización de Procesos",
    description: "Análisis y mejora de procesos empresariales para aumentar eficiencia, reducir costos y mejorar la calidad del servicio.",
    icon: <FaChartLine className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
    link: "/servicios/auditoria-procesos"
  },
  ciberseguridad: {
    title: "Ciberseguridad Empresarial",
    description: "Auditoría, implementación y gestión de soluciones de seguridad para proteger los activos digitales de tu empresa contra ciberamenazas.",
    icon: <FaShieldAlt className="text-3xl group-hover:pulse transition-all duration-500" />,
    gradient: "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900",
    link: "/servicios/ciberseguridad"
  }
};

const SolutionCard: React.FC<{
  cardKey: CardKey;
  isExpanded: boolean;
  onClick: () => void;
}> = ({ cardKey, isExpanded, onClick }) => {
  const card = cardData[cardKey];
  const isFeatured = card.featured;

  return (
    <motion.div
      layout
      onClick={onClick}
      initial={false}
      animate={isExpanded ? "expanded" : "collapsed"}
      transition={{ 
        type: "spring", 
        damping: 30, 
        stiffness: 200,
        duration: 0.3
      }} // Ajuste de la animación para hacerla más suave
      className={`
        group relative overflow-hidden rounded-xl
        ${card.gradient}
        ${isFeatured ? 'ring-2 ring-blue-300 ring-opacity-60 shadow-lg shadow-blue-400/20' : 'shadow-lg'} 
        hover:shadow-2xl
        transition-all duration-500 ease-in-out
        cursor-pointer
        ${isExpanded ? 'h-auto' : 'h-32 md:h-40'} /* Eliminado el límite de altura en md para expandido */
        w-full
      `}
    >
      {/* Efecto de partículas para la tarjeta destacada */}
      {isFeatured && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-2 h-2 rounded-full bg-blue-300 opacity-60 top-1/4 left-1/4 animate-ping-slow"></div>
          <div className="absolute w-1 h-1 rounded-full bg-white opacity-40 top-3/4 left-1/3 animate-ping-slow animation-delay-300"></div>
          <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-200 opacity-50 bottom-1/4 right-1/4 animate-ping-slow animation-delay-500"></div>
          <div className="absolute w-1 h-1 rounded-full bg-cyan-300 opacity-40 top-1/3 right-1/3 animate-ping-slow animation-delay-700"></div>
        </div>
      )}

      <motion.div 
        className={`
          absolute inset-0 bg-black/10
          backdrop-blur-sm transition-opacity duration-300
          ${isExpanded ? 'opacity-80' : 'opacity-0 group-hover:opacity-40'}
        `}
      />

      {/* Badge para destacar */}
      {isFeatured && !isExpanded && (
        <div className="absolute top-2 right-2 py-1 px-2 bg-blue-500/80 rounded-full text-[10px] text-white font-semibold backdrop-blur-sm z-10">
          Destacado
        </div>
      )}
      
      <motion.div className="relative h-full p-6 flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center flex-grow">
          <motion.div 
            layout="position"
            className={`text-white mb-2 transition-transform duration-300 ${isFeatured && !isExpanded ? 'text-shadow-blue' : ''} group-hover:scale-110`}
          >
            {card.icon}
          </motion.div>
          
          <motion.h3 
            layout="position"
            className={`text-white text-lg font-bold text-center mb-2 
                       transition-all duration-300 ${isFeatured ? 'text-shadow-blue-strong group-hover:text-shadow-blue-stronger' : 'group-hover:text-shadow-glow'}`}
          >
            {card.title}
          </motion.h3>
        </div>
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              delay: 0.1 // Pequeño retraso para mejorar la transición
            }}
            className="text-white/90 text-center text-sm flex flex-col justify-between"
          >
            <p className="mb-4">{card.description}</p>
            <div className="flex justify-center">
              <Link 
                href={card.link}
                className={`
                  inline-block px-6 py-2 
                  ${isFeatured ? 'bg-white/30 hover:bg-white/40 border-blue-300/50' : 'bg-white/20 hover:bg-white/30 border-white/30'}
                  backdrop-blur-md rounded-full
                  text-white text-sm font-medium
                  transition-all duration-300
                  hover:scale-105 hover:shadow-glow
                  border
                `}
                onClick={(e) => e.stopPropagation()}
              >
                Descubrir más
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Soluciones = () => {
  const [activeSection] = useState<string>("soluciones");
  const [expandedCard, setExpandedCard] = useState<CardKey | null>(null);
  const swiperRef = useRef<SwiperType>();
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Añadir efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle card expansion
  const handleCardClick = (cardKey: CardKey) => {
    setExpandedCard(expandedCard === cardKey ? null : cardKey);
    
    // Control autoplay based on card expansion
    if (expandedCard === cardKey) {
      // Card is being collapsed, resume autoplay
      swiperRef.current?.autoplay?.start();
    } else {
      // Card is being expanded, pause autoplay
      swiperRef.current?.autoplay?.stop();
    }
  };

  // Split cards into groups of 4
  const cardKeys = Object.keys(cardData) as CardKey[];
  const cardGroups = [
    cardKeys.slice(0, 4),
    cardKeys.slice(4)
  ];

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      {/* Aumentar padding-top para alinearlo con la página principal */}
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4">
        <HomeNavigation />

        <main className="flex-grow flex flex-col justify-start items-center p-2 md:p-8">
          <div className="w-full max-w-6xl">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-bullet',
                bulletActiveClass: 'swiper-bullet-active',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="solutions-swiper"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {cardGroups.map((group, groupIndex) => (
                <SwiperSlide key={groupIndex} className="h-auto"> {/* Añadido h-auto aquí */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-2 sm:p-4">
                    {group.map((cardKey) => (
                      <SolutionCard
                        key={cardKey}
                        cardKey={cardKey}
                        isExpanded={expandedCard === cardKey}
                        onClick={() => handleCardClick(cardKey)}
                      />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </main>
      </div>

      {/* Eliminar el botón Home y añadir flecha flotante para volver arriba */}
      {showBackToTop && (
        <motion.button
          className="fixed bottom-16 sm:bottom-24 right-4 sm:right-8 bg-[#4A90E2] text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 z-50"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={handleBackToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FaArrowUp className="text-lg sm:text-xl" />
        </motion.button>
      )}

      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. ¡Todos los derechos reservados!
      </footer>

      <style jsx global>{`
        .solutions-swiper {
          width: 100%;
          padding-top: 10px;
          padding-bottom: 20px;
          padding-left: 0;
          padding-right: 0;
          height: auto;
          min-height: 300px; /* Altura mínima para asegurar visibilidad */
        }

        /* Asegurar que las tarjetas se muestren completas */
        .swiper-wrapper {
          align-items: center;
          height: auto;
        }

        .swiper-slide {
          opacity: 1 !important;
          transform: none !important;
          height: auto !important;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .solutions-swiper {
            padding-top: 5px;
          }
          
          .swiper-bullet {
            width: 6px;
            height: 6px;
            margin: 0 3px;
          }
        }

        .swiper-slide {
          opacity: 1 !important;
          transform: none !important;
        }

        .swiper-bullet {
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 9999px;
          background: rgba(255, 92, 92, 0.3);
          margin: 0 6px; /* Aumentado el margen de 4px a 6px */
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .swiper-bullet-active {
          background: #4A90E2;
          transform: scale(1.2);
          border-color: rgba(74, 144, 226, 0.3);
          box-shadow: 0 0 15px rgba(74, 144, 226, 0.5);
        }

        .swiper-pagination {
          bottom: 20px !important; /* Aumentar la distancia desde abajo para separar más los dots */
          padding-top: 10px;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          position: relative; /* Asegurarse de que la posición sea relativa */
          margin-top: 15px; /* Añadir margen superior para separar más los dots de las tarjetas */
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .swiper-bullet {
            margin: 0 5px; /* Ajustado para móviles */
          }
          
          .swiper-pagination {
            bottom: 15px !important;
            margin-top: 10px;
          }
        }

        .text-shadow-glow {
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }
        
        .text-shadow-blue {
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
        
        .text-shadow-blue-strong {
          text-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
        }
        
        .text-shadow-blue-stronger {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
        }

        .shadow-glow {
          box-shadow: 0 0 25px rgba(74, 144, 226, 0.3);
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.2;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.8;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Soluciones;
