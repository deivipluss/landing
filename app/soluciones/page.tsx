"use client";
import React, { useState } from "react";
import { 
  FaHome, 
  FaLightbulb, 
  FaBlog, 
  FaEnvelope, 
  FaChartLine, 
  FaCog, 
  FaDollarSign, 
  FaTools 
} from "react-icons/fa";
import Link from 'next/link';

// Define el tipo explícito para los parámetros
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

  // Descripción de las soluciones, ahora más orientada a la transformación digital y optimización
  const cardDescriptions: { [key: string]: string } = {
    branding: "Transforma tu marca: Crea una imagen sólida y coherente con la evolución digital para destacar en un mercado competitivo.",
    marcaPersonal: "Desarrolla tu identidad digital: Potencia tu marca personal en plataformas online para alcanzar nuevos mercados.",
    entrenamiento: "Capacitación para líderes: Formación digital y estratégica para gerentes y equipos, con un enfoque en optimización y crecimiento.",
    communityManager: "Gestión digital de redes: Conecta de manera efectiva con tu audiencia y aprovecha las redes sociales como canales rentables.",
    contenidoDigital: "Contenido de valor: Desarrolla contenido estratégico que impulse el engagement y contribuya a la conversión.",
    ecommerce: "Ecommerce inteligente: Optimiza tu tienda online con herramientas digitales para mejorar las ventas y la experiencia del cliente.",
    iaNegocios: "Inteligencia Artificial para negocios: Mejora la eficiencia de tus procesos empresariales con la implementación de IA en operaciones clave.",
    onlyfans: "Consultoría OnlyFans: Estrategias digitales para maximizar el rendimiento en plataformas de contenido exclusivo y aumentar la rentabilidad.",
  };

  // Íconos representativos de la transformación digital
  const cardIcons = {
    branding: <FaChartLine />,
    marcaPersonal: <FaTools />,
    entrenamiento: <FaCog />,
    communityManager: <FaLightbulb />,
    contenidoDigital: <FaDollarSign />,
    ecommerce: <FaChartLine />,
    iaNegocios: <FaCog />,
    onlyfans: <FaLightbulb />,
  };

  return (
    <div className="bg-[#0D0C1D] min-h-screen overflow-hidden">
      {/* Header */}
      <header className="flex justify-center py-4 mt-8 space-x-6 bg-[#1A1A2E] shadow-lg rounded-full w-[90%] max-w-3xl mx-auto">
        <Link href="/" className="flex flex-col items-center group">
          <FaHome className={iconStyle("home", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Home</span>
        </Link>
        <Link href="/soluciones" className="flex flex-col items-center group">
          <FaLightbulb className={iconStyle("soluciones", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Soluciones</span>
        </Link>
        <Link href="/blog" className="flex flex-col items-center group">
          <FaBlog className={iconStyle("blog", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Blog</span>
        </Link>
        <Link href="/contacto" className="flex flex-col items-center group">
          <FaEnvelope className={iconStyle("contacto", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Contacto</span>
        </Link>
      </header>

      {/* Main Content */}
      <div className={containerStyle}>
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-[#FF5C5C] text-center mb-10">Soluciones para la Revolución Digital</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.keys(cardDescriptions).map((card, index) => (
              <div
                key={index}
                className={`${
                  expandedCard === card ? "bg-white text-black" : `bg-${card === "branding" ? "FF5C5C" : card === "marcaPersonal" ? "4A90E2" : card === "entrenamiento" ? "FFC107" : card === "communityManager" ? "00C851" : card === "contenidoDigital" ? "33B5E5" : card === "ecommerce" ? "AA66CC" : card === "iaNegocios" ? "FF4444" : "2BBBAD"}`
                } text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center cursor-pointer`}
                onClick={() => toggleCard(card)}
              >
                <div className="text-3xl mb-4">{cardIcons[card]}</div>
                <h3 className="text-xl font-semibold">{cardDescriptions[card].split(":")[0]}</h3>
                {/* Solo muestra la descripción si la tarjeta está expandida */}
                {expandedCard === card && (
                  <p className="mt-4 text-gray-800">{cardDescriptions[card].split(":")[1]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-center py-6 text-gray-300 text-sm">
        © 2024 Deivipluss. ¡Todos los derechos reservados!..
      </footer>
    </div>
  );
};

export default Soluciones;
