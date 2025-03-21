"use client";
import React, { useState, useRef } from "react";
import { 
  FaStore, 
  FaChartLine, 
  FaShoppingCart, 
  FaMoneyBillWave,
  FaRegHandshake
} from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import HomeNavigation from "@/components/HomeNavigation";

type CardKey = 'tienda' | 'marketingDigital' | 'ecommerce' | 'finanzas' | 'asesoria' | 'ventas';

const cardData: { [key in CardKey]: { title: string; description: string; icon: JSX.Element; gradient: string; link: string } } = {
  tienda: {
    title: "Gestión de Tienda",
    description: "Optimización de procesos para tiendas físicas y virtuales, mejorando la experiencia del cliente.",
    icon: <FaStore className="text-3xl group-hover:rotate-180 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600",
    link: "/contacto?servicio=tienda"
  },
  marketingDigital: {
    title: "Marketing Digital",
    description: "Estrategias de marketing enfocadas en resultados para pequeños negocios.",
    icon: <FaChartLine className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500",
    link: "/contacto?servicio=marketingDigital"
  },
  ecommerce: {
    title: "E-commerce",
    description: "Implementación y optimización de tiendas en línea para maximizar ventas.",
    icon: <FaShoppingCart className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500",
    link: "/contacto?servicio=ecommerce"
  },
  finanzas: {
    title: "Gestión Financiera",
    description: "Asesoría en gestión financiera para mejorar la rentabilidad de tu negocio.",
    icon: <FaMoneyBillWave className="text-3xl group-hover:rotate-12 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-green-500 via-teal-500 to-blue-500",
    link: "/contacto?servicio=finanzas"
  },
  asesoria: {
    title: "Asesoría Comercial",
    description: "Consultoría especializada para mejorar tus procesos de venta y atención al cliente.",
    icon: <FaRegHandshake className="text-3xl group-hover:scale-110 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500",
    link: "/contacto?servicio=asesoria"
  },
  ventas: {
    title: "Estrategias de Venta",
    description: "Desarrollo de estrategias efectivas para aumentar tus ventas y fidelizar clientes.",
    icon: <FaChartLine className="text-3xl group-hover:rotate-180 transition-transform duration-500" />,
    gradient: "bg-gradient-to-br from-red-500 via-pink-500 to-purple-500",
    link: "/contacto?servicio=ventas"
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

const Negocios = () => {
  const [expandedCard, setExpandedCard] = useState<CardKey | null>(null);
  const swiperRef = useRef<SwiperType>();

  // Manejar expansión de tarjeta
  const handleCardClick = (cardKey: CardKey) => {
    setExpandedCard(expandedCard === cardKey ? null : cardKey);
    
    // Control de autoplay basado en expansión de tarjeta
    if (expandedCard === cardKey) {
      // Tarjeta está colapsándose, reanudar autoplay
      swiperRef.current?.autoplay?.start();
    } else {
      // Tarjeta está expandiéndose, pausar autoplay
      swiperRef.current?.autoplay?.stop();
    }
  };

  // Dividir tarjetas en grupos de 3
  const cardKeys = Object.keys(cardData) as CardKey[];
  const cardGroups = [
    cardKeys.slice(0, 3),
    cardKeys.slice(3)
  ];

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      {/* Utilizamos el componente HomeNavigation directamente sin contenedores adicionales */}
      <HomeNavigation />

      <main className="flex-grow flex flex-col justify-start pt-2 items-center p-4 md:p-8">
        <div className="w-full max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9370DB] to-[#6A5ACD]">
              Soluciones para Negocios
            </span>
          </h1>
          
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
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
          background: #9370DB;
          transform: scale(1.2);
          border-color: rgba(147, 112, 219, 0.3);
          box-shadow: 0 0 15px rgba(147, 112, 219, 0.5);
        }

        .text-shadow-glow {
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }

        .shadow-glow {
          box-shadow: 0 0 25px rgba(147, 112, 219, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Negocios;
