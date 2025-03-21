"use client";
import React, { useState, useRef } from "react";
import { 
  FaCogs, 
  FaBrain, 
  FaUserTie, 
  FaShareAlt,
  FaTrophy
} from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import HomeNavigation from "@/components/HomeNavigation";

type CardKey = 'branding' | 'marcaPersonal' | 'entrenamiento' | 'communityManager' | 'contenidoDigital' | 'ecommerce' | 'iaNegocios' | 'onlyfans';

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

const cardData: { [key in CardKey]: { title: string; description: string; icon: JSX.Element; gradient: string; link: string } } = {
  branding: {
    title: "Branding Empresarial",
    description: "Creamos una identidad sólida y coherente para tu empresa. Mejoramos la percepción de tu marca, generando confianza y fidelidad en tus clientes.",
    icon: <FaCogs className="text-3xl group-hover:rotate-180 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600",
    link: "/contacto?servicio=branding"
  },
  marcaPersonal: {
    title: "Marca Personal",
    description: "Desarrollamos tu imagen personal, proyectando autenticidad y profesionalismo. Te ayudamos a posicionarte como líder en tu industria.",
    icon: <FaUserTie className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-red-500 via-pink-500 to-purple-500",
    link: "/contacto?servicio=marcaPersonal"
  },
  entrenamiento: {
    title: "Entrenamiento Digital",
    description: "Capacitación personalizada para dominar las herramientas digitales esenciales en tu negocio.",
    icon: <FaBrain className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-green-500 via-teal-500 to-blue-500",
    link: "/contacto?servicio=entrenamiento"
  },
  communityManager: {
    title: "Community Management",
    description: "Gestión profesional de tus redes sociales para aumentar engagement y alcance.",
    icon: <FaShareAlt className="text-3xl group-hover:rotate-12 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500",
    link: "/contacto?servicio=communityManager"
  },
  contenidoDigital: {
    title: "Contenido Digital",
    description: "Creación de contenido estratégico que conecta con tu audiencia y genera resultados.",
    icon: <FaTrophy className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500",
    link: "/contacto?servicio=contenidoDigital"
  },
  ecommerce: {
    title: "E-commerce",
    description: "Desarrollo y optimización de tu tienda online para maximizar ventas.",
    icon: <FaCogs className="text-3xl group-hover:rotate-180 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500",
    link: "/contacto?servicio=ecommerce"
  },
  iaNegocios: {
    title: "IA para Negocios",
    description: "Implementación de soluciones de inteligencia artificial para optimizar procesos.",
    icon: <FaBrain className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
    link: "/contacto?servicio=iaNegocios"
  },
  onlyfans: {
    title: "OnlyFans Management",
    description: "Gestión profesional y estratégica de tu cuenta de OnlyFans.",
    icon: <FaUserTie className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-pink-500 via-rose-500 to-red-500",
    link: "/contacto?servicio=onlyfans"
  }
};

const SolutionCard: React.FC<{
  cardKey: CardKey;
  isExpanded: boolean;
  onClick: () => void;
}> = ({ cardKey, isExpanded, onClick }) => {
  const card = cardData[cardKey];

  return (
    <motion.div
      layout
      onClick={onClick}
      initial={false}
      animate={isExpanded ? "expanded" : "collapsed"}
      className={`
        group relative overflow-hidden rounded-xl
        ${card.gradient}
        shadow-lg hover:shadow-2xl
        transition-all duration-500 ease-in-out
        cursor-pointer
        ${isExpanded ? 'h-auto md:h-64' : 'h-32 md:h-40'}
        w-full
      `}
    >
      <motion.div 
        className={`
          absolute inset-0 bg-black/10
          backdrop-blur-sm transition-opacity duration-300
          ${isExpanded ? 'opacity-80' : 'opacity-0 group-hover:opacity-40'}
        `}
      />
      
      <motion.div className="relative h-full p-6 flex flex-col">
        <div className="flex flex-col items-center justify-center flex-grow">
          <motion.div 
            layout="position"
            className="text-white mb-2 transition-transform duration-300 group-hover:scale-110"
          >
            {card.icon}
          </motion.div>
          
          <motion.h3 
            layout="position"
            className="text-white text-lg font-bold text-center mb-2 
                       transition-all duration-300 group-hover:text-shadow-glow"
          >
            {card.title}
          </motion.h3>
        </div>
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white/90 text-center text-sm flex flex-col justify-between"
          >
            <p className="mb-4">{card.description}</p>
            <div className="flex justify-center">
              <Link 
                href={card.link}
                className="
                  inline-block px-6 py-2 
                  bg-white/20 hover:bg-white/30
                  backdrop-blur-md rounded-full
                  text-white text-sm font-medium
                  transition-all duration-300
                  hover:scale-105 hover:shadow-glow
                  border border-white/30
                "
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
      {/* Utilizamos el componente HomeNavigation directamente sin contenedores adicionales */}
      <HomeNavigation />

      <main className="flex-grow flex flex-col justify-start pt-2 items-center p-4 md:p-8">
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
              <SwiperSlide key={groupIndex}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
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

      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. ¡Todos los derechos reservados!
      </footer>

      <style jsx global>{`
        .solutions-swiper {
          width: 100%;
          padding: 20px 0;
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
          margin: 0 4px;
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

        .text-shadow-glow {
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }

        .shadow-glow {
          box-shadow: 0 0 25px rgba(74, 144, 226, 0.3);
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
