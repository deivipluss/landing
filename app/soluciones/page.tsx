"use client";
import React, { useState } from "react";
import { 
  FaCogs, 
  FaBrain, 
  FaUserTie, 
  FaShareAlt, 
  FaLaptop, 
  FaChartLine, 
  FaRegLightbulb, 
  FaTrophy 
} from "react-icons/fa";
import Link from 'next/link';

// Definimos un tipo para las claves de las tarjetas
type CardKey = 'branding' | 'marcaPersonal' | 'entrenamiento' | 'communityManager' | 'contenidoDigital' | 'ecommerce' | 'iaNegocios' | 'onlyfans';

// Definimos el estilo de los íconos
const iconStyle = (section: string, activeSection: string): string =>
  `text-[#FF5C5C] text-2xl mx-3 cursor-pointer hover:text-[#4A90E2] transition-colors ${
    activeSection === section ? 'text-[#4A90E2]' : ''
  }`;

const containerStyle = "p-4 md:p-8 flex justify-center items-center min-h-screen bg-[#0D0C1D] overflow-hidden";

const Soluciones = () => {
  const [activeSection] = useState<string>("soluciones");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Maneja la expansión de las tarjetas
  const toggleCard = (cardName: string) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  // Descripción de las soluciones
  const cardDescriptions: { [key in CardKey]: string } = {
    branding: "Creamos una identidad sólida y coherente para tu empresa. Mejoramos la percepción de tu marca, generando confianza y fidelidad en tus clientes.",
    marcaPersonal: "Desarrollamos tu imagen personal, proyectando autenticidad y profesionalismo. Te ayudamos a posicionarte como líder en tu industria.",
    entrenamiento: "Ofrecemos capacitaciones y entrenamientos especializados para líderes, equipos de trabajo y emprendedores, impulsando su rendimiento y crecimiento.",
    communityManager: "Gestionamos tus redes sociales para mejorar la interacción con tu audiencia. Creamos contenido atractivo y gestionamos tu comunidad online.",
    contenidoDigital: "Creamos contenido digital de alta calidad que conecta con tu público objetivo. Desarrollamos estrategias efectivas para aumentar tu visibilidad online.",
    ecommerce: "Desarrollamos tiendas online y optimizamos procesos de ventas, para maximizar tus ingresos. Te ayudamos a ofrecer una experiencia de compra excepcional.",
    iaNegocios: "Aplicamos inteligencia artificial para automatizar procesos, mejorar la toma de decisiones y optimizar el rendimiento de tu negocio.",
    onlyfans: "Te ayudamos a gestionar y monetizar tu presencia en OnlyFans. Ofrecemos estrategias personalizadas para crecer y maximizar tus ingresos en esta plataforma.",
  };

  // Definimos los íconos para cada tarjeta, ahora más coherentes con cada servicio
  const cardIcons: { [key in CardKey]: JSX.Element } = {
    branding: <FaCogs />,
    marcaPersonal: <FaUserTie />,
    entrenamiento: <FaTrophy />,
    communityManager: <FaShareAlt />,
    contenidoDigital: <FaLaptop />,
    ecommerce: <FaChartLine />,
    iaNegocios: <FaBrain />,
    onlyfans: <FaRegLightbulb />,
  };

  return (
    <div className="bg-[#0D0C1D] min-h-screen overflow-hidden">
      {/* Header */}
      <header className="flex justify-center py-4 mt-8 space-x-6 bg-[#1A1A2E] shadow-lg rounded-full w-[90%] max-w-3xl mx-auto">
        <Link href="/" className="flex flex-col items-center group">
          <FaCogs className={iconStyle("home", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Home</span>
        </Link>
        <Link href="/soluciones" className="flex flex-col items-center group">
          <FaBrain className={iconStyle("soluciones", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Soluciones</span>
        </Link>
        <Link href="/blog" className="flex flex-col items-center group">
          <FaTrophy className={iconStyle("blog", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Blog</span>
        </Link>
        <Link href="/contacto" className="flex flex-col items-center group">
          <FaShareAlt className={iconStyle("contacto", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Contacto</span>
        </Link>
      </header>

      {/* Main Content */}
      <div className={containerStyle}>
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.keys(cardDescriptions).map((cardKey, index) => {
              const card = cardKey as CardKey; // Aseguramos que sea de tipo CardKey
              return (
                <div
                  key={index}
                  className={`${
                    expandedCard === card ? "bg-white text-black" : `bg-${card === "branding" ? "FF5C5C" : card === "marcaPersonal" ? "4A90E2" : card === "entrenamiento" ? "FFC107" : card === "communityManager" ? "00C851" : card === "contenidoDigital" ? "33B5E5" : card === "ecommerce" ? "AA66CC" : card === "iaNegocios" ? "FF4444" : "2BBBAD"}`
                  } text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center cursor-pointer`}
                  onClick={() => toggleCard(card)}
                >
                  {/* Solo muestra el ícono cuando la tarjeta está expandida */}
                  {expandedCard === card && (
                    <div className="text-3xl mb-4">{cardIcons[card]}</div>
                  )}
                  {/* Título siempre visible */}
                  <h3 className="text-xl font-semibold">{cardDescriptions[card].split(":")[0]}</h3>
                  {/* Solo muestra la descripción si la tarjeta está expandida */}
                  {expandedCard === card && (
                    <p className="mt-4 text-gray-800">{cardDescriptions[card].split(":")[1]}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-center py-6 text-gray-300 text-sm">
        © 2024 Deivipluss. ¡Todos los derechos reservados!
      </footer>
    </div>
  );
};

export default Soluciones;
