"use client";
import React, { useState } from "react";
import { FaHome, FaBlog, FaEnvelope } from "react-icons/fa"; // Eliminamos FaLightbulb ya que no se usa
import Link from "next/link";

const iconStyle = (section: string, activeSection: string) =>
  `text-[#FF5C5C] text-2xl mx-3 cursor-pointer hover:text-[#4A90E2] transition-colors ${activeSection === section ? 'text-[#4A90E2]' : ''}`;

const containerStyle = "p-4 md:p-8 flex flex-col items-center bg-[#0D0C1D] overflow-hidden min-h-screen";

const services = [
  {
    title: "Branding corporativo y comercial",
    description: "Establecemos marcas que conectan emocionalmente con los clientes y aumentan su valor percibido en mercados altamente competitivos.",
  },
  {
    title: "Marca Personal",
    description: "Creamos estrategias para construir una identidad única y sólida, aumentando la relevancia y autoridad en tu industria.",
  },
  {
    title: "Entrenamiento gerencial",
    description: "Capacitación avanzada para líderes, ayudándolos a maximizar la productividad y tomar decisiones estratégicas clave.",
  },
  {
    title: "Community Manager",
    description: "Gestionamos tus redes sociales para construir comunidades leales, impulsando el engagement y las conversiones.",
  },
  {
    title: "Contenido y estrategia digital",
    description: "Desarrollamos contenido poderoso y estrategias personalizadas que generan valor y posicionamiento digital.",
  },
  {
    title: "IA para negocios",
    description: "Integramos soluciones de inteligencia artificial para optimizar procesos, reducir costos y aumentar la eficiencia operativa.",
  },
  {
    title: "Consultoría OnlyFans",
    description: "Estrategias personalizadas para maximizar ingresos, fidelizar seguidores y profesionalizar tu presencia en plataformas de contenido.",
  },
  {
    title: "E-commerce",
    description: "Diseñamos y optimizamos tiendas online para aumentar las ventas, ofreciendo experiencias de usuario inolvidables.",
  },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleNavigation = (section: string) => {
    setActiveSection(section); // Actualiza la sección activa
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0D0C1D] min-h-screen">
      {/* Navigation Bar */}
      <header className="flex justify-center py-4 mt-8 space-x-6 bg-[#1A1A2E] shadow-lg rounded-full w-[90%] max-w-3xl mx-auto">
        <button 
          className="flex flex-col items-center group" 
          onClick={() => handleNavigation("home")}
        >
          <FaHome className={iconStyle("home", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Inicio</span>
        </button>
        <button 
          className="flex flex-col items-center group" 
          onClick={() => handleNavigation("contacto")}
        >
          <FaEnvelope className={iconStyle("contacto", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Contacto</span>
        </button>
        <Link href="/blog" className="flex flex-col items-center group">
          <FaBlog className={iconStyle("blog", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Blog</span>
        </Link>
      </header>

      {/* Services Section */}
      <div className={containerStyle}>
        <div className="max-w-[1200px] mt-12 space-y-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#1A1A2E] text-[#E1E1E1] p-6 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#4A90E2]">{service.title}</h3>
              <p className="text-sm font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-[#1A1A2E] text-center py-6 text-gray-300 text-sm">
        © 2024 Deivipluss. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default App;
