"use client";
import React, { useState, useRef, useEffect } from "react";
import { 
  FaStore, 
  FaChartLine, 
  FaShoppingCart, 
  FaMoneyBillWave,
  FaRegHandshake,
  FaBrain,
  FaFileContract,
  FaUsers,
  FaPencilAlt,
  FaSearchDollar,
  FaCog,
  FaDesktop,
  FaArrowUp,
  FaSyncAlt,
  FaUserTie,
  FaHandshake,
  FaArrowRight
} from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import HomeNavigation from "@/components/HomeNavigation";

type CardKey = 'logo' | 'contentManager' | 'communityManager' | 'socialMediaManager' | 'landingPages' | 'seo' | 'desarrolloProductos' | 'ecommerce' | 'estrategiaVentas' | 'entrenamientoVentas' | 'asesoriaComercial' | 'gestionFinanciera';

const cardData: { [key in CardKey]: { title: string; description: string; icon: JSX.Element; gradient: string; link: string; parent?: string } } = {
  logo: {
    title: "Logo",
    description: "Creamos una identidad visual poderosa para tu negocio que conecta con tus clientes ideales y te diferencia de la competencia.",
    icon: <FaStore className="text-3xl group-hover:rotate-180 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-amber-500 via-orange-600 to-red-600", // Nuevo gradiente naranja-rojo
    link: "/servicios/logo"
  },
  contentManager: {
    title: "Content Manager",
    description: "Creación y gestión de contenido relevante y valioso para tu audiencia, con enfoque en conversión y engagement.",
    icon: <FaPencilAlt className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-green-400 via-teal-500 to-emerald-600", // Nuevo gradiente verde-esmeralda
    link: "/servicios/content-manager"
  },
  communityManager: {
    title: "Community Manager",
    description: "Gestión profesional de la comunicación con tu comunidad digital para aumentar la fidelización y el engagement.",
    icon: <FaUsers className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500",
    link: "/servicios/community-manager"
  },
  socialMediaManager: {
    title: "Social Media Manager",
    description: "Estrategia, planificación y gestión integral de tus redes sociales con enfoque en resultados tangibles.",
    icon: <FaChartLine className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600", // Mantener este gradiente
    link: "/servicios/social-media-manager"
  },
  landingPages: {
    title: "Landing Pages",
    description: "Diseño de páginas de aterrizaje optimizadas para convertir visitantes en leads y clientes.",
    icon: <FaDesktop className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600", // Nuevo gradiente azul-cielo
    link: "/servicios/landing-pages"
  },
  seo: {
    title: "SEO",
    description: "Optimización para motores de búsqueda que mejora tu visibilidad online y atrae tráfico orgánico de calidad.",
    icon: <FaSearchDollar className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-teal-500 via-green-500 to-emerald-600",
    link: "/servicios/seo"
  },
  desarrolloProductos: {
    title: "Desarrollo de Productos",
    description: "Creación y planificación estratégica de productos digitales y físicos con alto valor agregado para tu mercado objetivo.",
    icon: <FaCog className="text-3xl group-hover:rotate-180 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500",
    link: "/servicios/desarrollo-productos"
  },
  ecommerce: {
    title: "E-commerce",
    description: "Implementación y optimización de tiendas en línea para maximizar ventas y mejorar la experiencia del cliente.",
    icon: <FaShoppingCart className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500",
    link: "/servicios/ecommerce"
  },
  estrategiaVentas: {
    title: "Estrategia de Ventas",
    description: "Desarrollo de planes de venta efectivos adaptados a tu modelo de negocio para aumentar conversiones.",
    icon: <FaSyncAlt className="text-3xl group-hover:rotate-180 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-purple-500 to-indigo-600", // Actualizado para coincidir con serviciosVentas
    link: "/servicios/estrategia-ventas"
  },
  entrenamientoVentas: {
    title: "Entrenamiento en Ventas",
    description: "Capacitación personalizada para equipos comerciales y de atención al cliente para maximizar resultados.",
    icon: <FaUserTie className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-amber-500 to-orange-600", // Actualizado para coincidir con serviciosVentas
    link: "/servicios/entrenamiento-ventas"
  },
  asesoriaComercial: {
    title: "Asesoría Comercial",
    description: "Consultoría especializada para optimizar tus procesos comerciales y estrategias de crecimiento.",
    icon: <FaHandshake className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600", // Actualizado para coincidir con serviciosVentas
    link: "/servicios/asesoria-comercial"
  },
  gestionFinanciera: {
    title: "Gestión Financiera",
    description: "Asesoría en gestión financiera para optimizar recursos, mejorar la rentabilidad y tomar decisiones basadas en datos.",
    icon: <FaMoneyBillWave className="text-3xl group-hover:rotate-12 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500",
    link: "/servicios/gestion-financiera"
  }
};

// Modificamos la definición de servicios de ventas para usar diferentes gradientes
const serviciosVentas = [
  {
    icon: <FaSyncAlt className="text-xl" />,
    title: "Estrategia de Ventas",
    description: "Desarrollo planes estratégicos para optimizar el proceso comercial y maximizar resultados.",
    link: "/servicios/estrategia-ventas",
    color: "from-purple-500 to-indigo-600", // Mantenemos el violeta-índigo para estrategia
    bgOpacity: "from-purple-500/10 to-indigo-500/10",
    textOpacity: "from-purple-500/20 to-indigo-500/20",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-300",
  },
  {
    icon: <FaUserTie className="text-xl" />,
    title: "Entrenamiento en Ventas",
    description: "Capacito equipos comerciales con habilidades prácticas para cerrar más ventas.",
    link: "/servicios/entrenamiento-ventas",
    color: "from-amber-500 to-orange-600", // Nuevo: Degradado cálido para entrenamiento
    bgOpacity: "from-amber-500/10 to-orange-500/10",
    textOpacity: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-300",
  },
  {
    icon: <FaHandshake className="text-xl" />,
    title: "Asesoría Comercial",
    description: "Acompaño líderes y gerentes en la toma de decisiones comerciales estratégicas.",
    link: "/servicios/asesoria-comercial",
    color: "from-emerald-500 to-teal-600", // Nuevo: Degradado verde para asesoría
    bgOpacity: "from-emerald-500/10 to-teal-500/10",
    textOpacity: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-300",
  },
];

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
      transition={{ 
        type: "spring",
        damping: 30, 
        stiffness: 200,
        duration: 0.3
      }}
      className={`
        group relative overflow-hidden rounded-xl
        ${card.gradient}
        shadow-lg hover:shadow-2xl
        transition-all duration-500 ease-in-out
        cursor-pointer
        ${isExpanded ? 'h-auto' : 'h-32 md:h-40'}
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
      
      <motion.div className="relative h-full p-6 flex flex-col justify-between">
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

const Negocios = () => {
  const [expandedCard, setExpandedCard] = useState<CardKey | null>(null);
  const swiperRef = useRef<SwiperType>();
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  const handleCardClick = (cardKey: CardKey) => {
    setExpandedCard(expandedCard === cardKey ? null : cardKey);

    if (expandedCard === cardKey) {
      swiperRef.current?.autoplay?.start();
    } else {
      swiperRef.current?.autoplay?.stop();
    }
  };

  const cardKeys = Object.keys(cardData) as CardKey[];
  const cardGroups = [
    cardKeys.slice(0, 4), // Primer grupo de 4 tarjetas
    cardKeys.slice(4, 8), // Segundo grupo de 4 tarjetas
    cardKeys.slice(8),    // Tercer grupo (restantes)
  ];

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1">
        <HomeNavigation />

        {showBackToTop && (
          <motion.button
            className="fixed bottom-16 sm:bottom-24 right-4 sm:right-8 bg-[#9370DB] text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-purple-600 transition-all duration-300 z-50"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={handleBackToTop}
          >
            <FaArrowUp className="text-lg sm:text-xl" />
          </motion.button>
        )}

        <main className="flex-grow flex flex-col justify-start items-center p-2 md:p-4">
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
                <SwiperSlide key={groupIndex} className="h-auto py-4">
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

      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. ¡Todos los derechos reservados!
      </footer>

      <style jsx global>{`
        .solutions-swiper {
          width: 100%;
          padding-top: 10px;
          padding-bottom: 30px;
          padding-left: 0;
          padding-right: 0;
          height: auto;
          min-height: 300px;
          overflow: hidden;
        }

        .swiper-wrapper {
          align-items: center;
          height: auto;
        }

        .swiper-slide {
          opacity: 1 !important;
          transform: none !important;
          height: auto !important;
        }

        .swiper-bullet {
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 9999px;
          background: rgba(255, 92, 92, 0.3);
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .swiper-bullet-active {
          background: #9370DB;
          transform: scale(1.2);
          border-color: rgba(147, 112, 219, 0.3);
          box-shadow: 0 0 15px rgba(147, 112, 219, 0.5);
        }

        .swiper-pagination {
          bottom: 20px !important;
          padding-top: 10px;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          position: relative;
          margin-top: 15px;
        }

        /* Ajuste específico para alinear con empresas y personas */
        @media (min-width: 768px) {
          .md\\:p-4 {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Negocios;