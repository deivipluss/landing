"use client";
import React from "react";
import { 
  FaUserTie, 
  FaChartLine, 
  FaRobot, 
  FaUserCircle, 
  FaLaptopCode, 
  FaShoppingCart, 
  FaMobileAlt, 
  FaNetworkWired, 
  FaChalkboardTeacher, 
  FaCoffee 
} from "react-icons/fa";
import Link from "next/link"; // Importamos Link de Next.js

const SolutionCard: React.FC<{
  icon: React.ElementType, 
  title: string, 
  description: string, 
  color: string
}> = ({ icon: Icon, title, description, color }) => (
  <div 
    className={`bg-${color}-500 text-white p-6 rounded-lg shadow-xl 
    transform transition-all duration-300 hover:scale-105 
    flex flex-col justify-between h-[350px] md:h-[400px]`}
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
      icon: FaUserTie,
      title: "Branding Digital",
      description: "Creamos identidades de marca sólidas y estrategias de comunicación efectivas.",
      color: "orange"
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
      icon: FaCoffee,
      title: "Consultoría OnlyFans",
      description: "Te ayudamos a gestionar y optimizar tu cuenta de OnlyFans para maximizar tus ganancias.",
      color: "pink"
    },
    {
      icon: FaLaptopCode,
      title: "Desarrollo Web Profesional",
      description: "Creamos sitios web modernos, responsivos y de alto rendimiento que representan tu marca.",
      color: "blue"
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce",
      description: "Desarrollamos tiendas online completas con integración de pasarelas de pago.",
      color: "red"
    },
    {
      icon: FaMobileAlt,
      title: "Desarrollo de Apps",
      description: "Diseñamos aplicaciones móviles intuitivas y funcionales para iOS y Android.",
      color: "indigo"
    },
    {
      icon: FaNetworkWired,
      title: "Consultoría Tecnológica",
      description: "Asesoramiento integral en transformación digital y adopción de nuevas tecnologías.",
      color: "teal"
    },
    {
      icon: FaUserCircle,
      title: "Desarrollo de Marca Personal",
      description: "Te ayudamos a construir y consolidar tu marca personal para destacar en el mundo digital.",
      color: "yellow"
    },
    {
      icon: FaChalkboardTeacher,
      title: "Entrenamientos para Gerentes",
      description: "Capacitación especializada para gerentes y líderes de equipos en la adopción de herramientas digitales y estrategias efectivas.",
      color: "blue"
    }
  ];

  return (
    <div className="bg-[#0D0C1D] min-h-screen overflow-hidden">
      {/* Header with Navigation */}
      <header className="bg-[#1A1A2E] shadow-lg rounded-full w-[90%] max-w-6xl mx-auto mt-8 py-4">
        <div className="flex justify-between items-center px-6">
          <h1 className="text-[#4A90E2] text-3xl font-bold">Mis Soluciones</h1>
          <nav className="space-x-6">
            <Link href="/" className="text-white hover:text-[#4A90E2]">Inicio</Link>
            <Link href="#services" className="text-white hover:text-[#4A90E2]">Servicios</Link>
            <Link href="#contact" className="text-white hover:text-[#4A90E2]">Contacto</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12" id="services">
        <h2 className="text-3xl text-white font-bold text-center mb-8">Soluciones Digitales para Impulsar tu Negocio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={index} 
              {...solution} 
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-center py-6 text-gray-300 text-sm" id="contact">
        <p>© 2024 Deivipluss. Soluciones Digitales.</p>
      </footer>
    </div>
  );
};

export default SolutionsPage;
