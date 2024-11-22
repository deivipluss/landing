"use client";
import React, { useState, useRef } from "react";
import { 
  FaCogs, 
  FaBrain, 
  FaUserTie, 
  FaShareAlt, 
  FaLaptop, 
  FaChartLine, 
  FaRegLightbulb, 
  FaTrophy,
  FaChevronLeft,
  FaChevronRight 
} from "react-icons/fa";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type CardKey = 'branding' | 'marcaPersonal' | 'entrenamiento' | 'communityManager' | 'contenidoDigital' | 'ecommerce' | 'iaNegocios' | 'onlyfans';

interface NavItem {
  href: string;
  icon: JSX.Element;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", icon: <FaCogs />, label: "Home" },
  { href: "/soluciones", icon: <FaBrain />, label: "Soluciones" },
  { href: "/blog", icon: <FaTrophy />, label: "Blog" },
  { href: "/contacto", icon: <FaShareAlt />, label: "Contacto" },
];

const cardData: { [key in CardKey]: { title: string; description: string; icon: JSX.Element; color: string; link: string } } = {
  branding: {
    title: "Branding Empresarial",
    description: "Creamos una identidad sólida y coherente para tu empresa. Mejoramos la percepción de tu marca, generando confianza y fidelidad en tus clientes.",
    icon: <FaCogs className="text-3xl" />,
    color: "bg-blue-500",
    link: "/servicios/branding"
  },
  marcaPersonal: {
    title: "Marca Personal",
    description: "Desarrollamos tu imagen personal, proyectando autenticidad y profesionalismo. Te ayudamos a posicionarte como líder en tu industria.",
    icon: <FaUserTie className="text-3xl" />,
    color: "bg-purple-500",
    link: "/servicios/marca-personal"
  },
  entrenamiento: {
    title: "Entrenamiento",
    description: "Ofrecemos capacitaciones y entrenamientos especializados para líderes, equipos de trabajo y emprendedores, impulsando su rendimiento y crecimiento.",
    icon: <FaTrophy className="text-3xl" />,
    color: "bg-yellow-500",
    link: "/servicios/entrenamiento"
  },
  communityManager: {
    title: "Community Manager",
    description: "Gestionamos tus redes sociales para mejorar la interacción con tu audiencia. Creamos contenido atractivo y gestionamos tu comunidad online.",
    icon: <FaShareAlt className="text-3xl" />,
    color: "bg-green-500",
    link: "/servicios/community-manager"
  },
  contenidoDigital: {
    title: "Contenido Digital",
    description: "Creamos contenido digital de alta calidad que conecta con tu público objetivo. Desarrollamos estrategias efectivas para aumentar tu visibilidad online.",
    icon: <FaLaptop className="text-3xl" />,
    color: "bg-indigo-500",
    link: "/servicios/contenido-digital"
  },
  ecommerce: {
    title: "E-commerce",
    description: "Desarrollamos tiendas online y optimizamos procesos de ventas, para maximizar tus ingresos. Te ayudamos a ofrecer una experiencia de compra excepcional.",
    icon: <FaChartLine className="text-3xl" />,
    color: "bg-red-500",
    link: "/servicios/ecommerce"
  },
  iaNegocios: {
    title: "IA para Negocios",
    description: "Aplicamos inteligencia artificial para automatizar procesos, mejorar la toma de decisiones y optimizar el rendimiento de tu negocio.",
    icon: <FaBrain className="text-3xl" />,
    color: "bg-cyan-500",
    link: "/servicios/ia-negocios"
  },
  onlyfans: {
    title: "OnlyFans Management",
    description: "Te ayudamos a gestionar y monetizar tu presencia en OnlyFans. Ofrecemos estrategias personalizadas para crecer y maximizar tus ingresos en esta plataforma.",
    icon: <FaRegLightbulb className="text-3xl" />,
    color: "bg-pink-500",
    link: "/servicios/onlyfans"
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
      className={`
        ${isExpanded ? 'bg-white' : card.color} rounded-lg p-6 cursor-pointer
        ${isExpanded ? 'text-gray-800' : 'text-white'}
        transition-all duration-300 ease-in-out
        hover:shadow-xl h-full
        ${isExpanded ? 'z-10' : 'z-0'}
      `}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div layout className="flex flex-col items-center h-full">
        <motion.div layout className="mb-4">
          {card.icon}
        </motion.div>
        <motion.h3 layout className="text-xl font-semibold mb-2 text-center">
          {card.title}
        </motion.h3>
        <AnimatePresence>
          {isExpanded && (
            <>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-gray-600 mt-4 text-center"
              >
                {card.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-6 w-full flex justify-center"
              >
                <Link 
                  href={card.link}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="
                    px-6 py-2 bg-blue-500 text-white rounded-full
                    hover:bg-blue-600 transition-colors duration-300
                    transform hover:scale-105
                    shadow-md hover:shadow-lg
                    flex items-center justify-center
                    text-sm md:text-base
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                  "
                >
                  Más info
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const NavigationButton: React.FC<{
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
}> = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      flex items-center justify-center
      w-12 h-12 rounded-full
      ${disabled ? 'bg-gray-600/30 cursor-not-allowed' : 'bg-gray-800/50 hover:bg-gray-700/50'}
      backdrop-blur-sm
      text-white
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-blue-400
      ${direction === 'prev' ? 'mr-2' : 'ml-2'}
    `}
  >
    {direction === 'prev' ? (
      <FaChevronLeft className="text-xl" />
    ) : (
      <FaChevronRight className="text-xl" />
    )}
  </button>
);

const Soluciones = () => {
  const [activeSection] = useState<string>("soluciones");
  const [expandedCard, setExpandedCard] = useState<CardKey | null>(null);
  const swiperRef = useRef<SwiperType>();
  const autoplayRef = useRef<{ start: () => void; stop: () => void } | null>(null);

  const [cardGroups] = useState(() => {
    const allCards = Object.keys(cardData) as CardKey[];
    return [
      allCards.slice(0, 4),
      allCards.slice(4)
    ];
  });

  const toggleCard = (cardKey: CardKey) => {
    if (expandedCard === cardKey) {
      setExpandedCard(null);
      // Reanudar autoplay cuando se cierra la tarjeta
      autoplayRef.current?.start();
    } else {
      setExpandedCard(cardKey);
      // Detener autoplay cuando se expande una tarjeta
      autoplayRef.current?.stop();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <header className="flex justify-center py-6 mt-8 space-x-6 bg-gray-800/50 backdrop-blur-sm shadow-lg rounded-full w-[90%] max-w-3xl mx-auto">
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className="flex flex-col items-center group"
          >
            <div className={`
              text-2xl mx-3 transition-colors duration-300
              ${activeSection === item.label.toLowerCase() ? 'text-blue-400' : 'text-red-400'}
              group-hover:text-blue-400
            `}>
              {item.icon}
            </div>
            <span className="text-xs text-red-400 group-hover:text-blue-400 transition-colors duration-300">
              {item.label}
            </span>
          </Link>
        ))}
      </header>

      <main className="p-4 md:p-8 flex flex-col justify-center items-center min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-6xl">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet !bg-red-400 !opacity-50',
              bulletActiveClass: '!bg-blue-400 !opacity-100'
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mb-8"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              autoplayRef.current = swiper.autoplay;
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
                      onClick={() => toggleCard(cardKey)}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-8 mt-4">
            <div className="swiper-button-prev !hidden"></div>
            <div className="swiper-button-next !hidden"></div>
            <div className="flex items-center">
              <NavigationButton 
                direction="prev" 
                onClick={() => {
                  const prevButton = document.querySelector('.swiper-button-prev');
                  if (prevButton) {
                    (prevButton as HTMLElement).click();
                  }
                }}
                disabled={expandedCard !== null}
              />
              <div className="swiper-pagination !position-relative !bottom-0 !mx-4 !w-auto"></div>
              <NavigationButton 
                direction="next" 
                onClick={() => {
                  const nextButton = document.querySelector('.swiper-button-next');
                  if (nextButton) {
                    (nextButton as HTMLElement).click();
                  }
                }}
                disabled={expandedCard !== null}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800/50 backdrop-blur-sm text-center py-6 text-gray-400 text-sm mt-8">
        © 2024 - Deivipluss. ¡Todos los derechos reservados!
      </footer>
    </div>
  );
};

export default Soluciones;