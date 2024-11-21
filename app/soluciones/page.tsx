"use client";
import React, { useState } from "react";
import { 
  FaHome, 
  FaLightbulb, 
  FaBlog, 
  FaEnvelope 
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
    branding: "Branding Corporativo: Crear una imagen sólida y coherente para tu empresa.",
    marcaPersonal: "Marca Personal: Desarrolla tu identidad personal y proyecta una imagen única.",
    entrenamiento: "Entrenamiento Gerencial: Capacitación para líderes de empresas y equipos.",
    communityManager: "Community Manager: Gestión de redes sociales para conectar con tu audiencia.",
    contenidoDigital: "Contenido Digital: Creación y distribución de contenido atractivo en línea.",
    ecommerce: "Ecommerce: Desarrolla y optimiza tu tienda online para vender de manera efectiva.",
    iaNegocios: "IA para Negocios: Implementación de inteligencia artificial para mejorar procesos empresariales.",
    onlyfans: "Consultoría OnlyFans: Asesoría estratégica para creadores en la plataforma OnlyFans.",
  };

  // Definimos los íconos para cada tarjeta
  const cardIcons: { [key in CardKey]: JSX.Element } = {
    branding: <FaHome />,
    marcaPersonal: <FaLightbulb />,
    entrenamiento: <FaBlog />,
    communityManager: <FaEnvelope />,
    contenidoDigital: <FaHome />,
    ecommerce: <FaLightbulb />,
    iaNegocios: <FaBlog />,
    onlyfans: <FaEnvelope />,
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
                  <div className="text-3xl mb-4">{cardIcons[card]}</div>
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
