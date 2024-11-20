"use client";
import React from "react";
import { 
  FaLaptopCode, 
  FaChartLine, 
  FaRobot, 
  FaMobileAlt, 
  FaShoppingCart, 
  FaNetworkWired, 
  FaUserTie 
} from "react-icons/fa";

const SolutionCard: React.FC<{
  icon: React.ElementType, 
  title: string, 
  description: string, 
  color: string
}> = ({ icon: Icon, title, description, color }) => (
  <div 
    className={`bg-${color}-500 text-white p-6 rounded-lg shadow-lg 
    transform transition-all duration-300 hover:scale-105 
    flex flex-col justify-between h-[300px] md:h-[350px]`}
  >
    <div className="flex flex-col items-center text-center space-y-4">
      <Icon className="text-4xl md:text-5xl mb-4" />
      <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      <p className="text-sm md:text-base opacity-80">{description}</p>
    </div>
    <div className="self-end bg-white/20 p-2 rounded-lg mt-4">
      <span className="text-xl">→</span>
    </div>
  </div>
);

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: FaLaptopCode,
      title: "Desarrollo Web Profesional",
      description: "Creamos sitios web modernos, responsivos y de alto rendimiento que representan tu marca.",
      color: "blue"
    },
    {
      icon: FaChartLine,
      title: "Estrategia Digital",
      description: "Optimizamos tu presencia online con análisis de datos y estrategias de crecimiento.",
      color: "green"
    },
    {
      icon: FaRobot,
      title: "Automatización",
      description: "Implementamos soluciones de IA y automatización para optimizar procesos empresariales.",
      color: "purple"
    },
    {
      icon: FaMobileAlt,
      title: "Desarrollo de Apps",
      description: "Diseñamos aplicaciones móviles intuitivas y funcionales para iOS y Android.",
      color: "indigo"
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce",
      description: "Desarrollamos tiendas online completas con integración de pasarelas de pago.",
      color: "red"
    },
    {
      icon: FaNetworkWired,
      title: "Consultoría Tecnológica",
      description: "Asesoramiento integral en transformación digital y adopción de nuevas tecnologías.",
      color: "teal"
    },
    {
      icon: FaUserTie,
      title: "Branding Digital",
      description: "Creamos identidades de marca sólidas y estrategias de comunicación efectivas.",
      color: "orange"
    }
  ];

  return (
    <div className="bg-[#0D0C1D] min-h-screen overflow-hidden">
      <header className="flex justify-center py-4 mt-8 space-x-6 bg-[#1A1A2E] shadow-lg rounded-full w-[90%] max-w-3xl mx-auto">
        <h1 className="text-[#4A90E2] text-2xl font-bold">Mis Soluciones</h1>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={index} 
              {...solution} 
            />
          ))}
        </div>
      </div>

      <footer className="bg-[#1A1A2E] text-center py-6 text-gray-300 text-sm">
        © 2024 Deivipluss. Soluciones Digitales Innovadoras.
      </footer>
    </div>
  );
};

export default SolutionsPage;