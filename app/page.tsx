"use client";
import React, { useState } from "react";
import { FaHome, FaWindowMaximize, FaPen } from "react-icons/fa";
import { FaBehance, FaPinterest, FaGithub, FaWhatsapp } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";

const iconStyle = (section: string, activeSection: string) =>
  `text-[#FF5C5C] text-2xl mx-3 cursor-pointer ${activeSection === section ? 'text-[#4A90E2]' : ''}`;
const containerStyle = "p-4 md:p-8 flex justify-center items-center min-h-screen bg-[#0D0C1D] overflow-hidden";

const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 768;

const ProfileCard: React.FC = () => (
  <div className="bg-[#F9F9F9] p-6 md:p-8 rounded-lg flex flex-col items-center text-center space-y-4 md:space-y-6 shadow-lg h-[456px] md:h-[530px] w-[320px] md:w-[360px] mx-auto md:mb-12 overflow-hidden"> {/* Ensanchado y más espacio en móvil */}
    <div className="w-[180px] md:w-[220px] h-[200px] md:h-[283px] bg-[#FF5C5C] mb-2 md:mb-4 rounded-lg overflow-hidden">
      <img
        src="/imagenes/perfil.jpg"
        alt="Foto de perfil de Deivipluss"
        className="w-full h-full object-cover"
      />
    </div>

    <h2 className="text-[#0D0C1D] text-2xl md:text-3xl font-bold font-poppins">
      <span style={{ color: '#4A90E2' }}>Deivipluss</span>
    </h2>
    <p className="text-gray-500 mt-2 md:mt-4 text-sm md:text-base font-poppins font-light">
      Mi experiencia global y mis habilidades avanzadas me convierten en la mejor opción para llevar tus proyectos al siguiente nivel.
    </p>
    <div className="flex space-x-4 mt-2 md:mt-4 justify-center">
      <FaBehance className="text-[#FF5C5C] text-xl md:text-2xl" />
      <FaPinterest className="text-[#FF5C5C] text-xl md:text-2xl" />
      <FaGithub className="text-[#FF5C5C] text-xl md:text-2xl" />
      <FaWhatsapp className="text-[#FF5C5C] text-xl md:text-2xl" />
    </div>
  </div>
);

const ActionCards: React.FC = () => (
  <div className="w-full max-w-[1000px] mt-16 px-4 md:px-0"> 
    <div className="flex flex-col md:flex-row gap-8 md:gap-12"> 
      {/* Tarjeta de Soluciones */}
      <div className="bg-red-500 text-white p-6 rounded-lg relative shadow-md h-[100px] md:h-[240px] flex items-center justify-center w-full md:w-1/2">
        <div className="flex flex-col items-center justify-center space-y-2">
          <RiLightbulbLine className="text-2xl md:text-3xl" /> {/* Cambiado de RiCustomerService2Line a RiLightbulbLine */}
          <h3 className="text-lg md:text-xl font-semibold text-center w-full">SOLUCIONES POPULARES</h3>
        </div>
        {!isMobile() && (
          <div className="absolute right-4 bottom-4 bg-white/20 p-2 rounded-lg">
            <span className="text-xl">→</span>
          </div>
        )}
      </div>

      {/* Tarjeta de Contacta conmigo */}
      <div className="bg-green-500 text-white p-6 rounded-lg relative shadow-md h-[100px] md:h-[240px] flex items-center justify-center w-full md:w-1/2">
        <div className="flex flex-col items-center justify-center space-y-2">
          <FaWhatsapp className="text-2xl md:text-3xl" />
          <h3 className="text-lg md:text-xl font-semibold text-center w-full">CONTACTA CONMIGO</h3>
        </div>
        {!isMobile() && (
          <div className="absolute right-4 bottom-4 bg-white/20 p-2 rounded-lg">
            <span className="text-xl">→</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

// Añadir la importación del nuevo icono al inicio del archivo
import { RiLightbulbLine } from "react-icons/ri";

const ActionCards: React.FC = () => (
  <div className="w-full max-w-[1000px] mt-16 px-4 md:px-0"> {/* Aumentado el margen superior y mayor ancho */}
    <div className="flex flex-col md:flex-row gap-8 md:gap-12"> {/* Aumento del gap para más separación */}
      {/* Tarjeta de Soluciones */}
      <div className="bg-red-500 text-white p-6 rounded-lg relative shadow-md h-[100px] md:h-[240px] flex items-center justify-center w-full md:w-1/2">
        <div className="flex flex-col items-center justify-center space-y-2">
          <RiCustomerService2Line className="text-2xl md:text-3xl" />
          <h3 className="text-lg md:text-xl font-semibold">SOLUCIONES POPULARES</h3>
        </div>
        {/* Eliminar la flecha en móvil */}
        {!isMobile() && (
          <div className="absolute right-4 bottom-4 bg-white/20 p-2 rounded-lg">
            <span className="text-xl">→</span>
          </div>
        )}
      </div>

      {/* Tarjeta de Contacta conmigo */}
      <div className="bg-green-500 text-white p-6 rounded-lg relative shadow-md h-[100px] md:h-[240px] flex items-center justify-center w-full md:w-1/2">
        <div className="flex flex-col items-center justify-center space-y-2">
          <FaWhatsapp className="text-2xl md:text-3xl" />
          <h3 className="text-lg md:text-xl font-semibold">CONTACTA CONMIGO</h3>
        </div>
        {/* Eliminar la flecha en móvil */}
        {!isMobile() && (
          <div className="absolute right-4 bottom-4 bg-white/20 p-2 rounded-lg">
            <span className="text-xl">→</span>
          </div>
        )}
      </div>
    </div>
  </div>
);


const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleNavigation = (section: string) => {
    if (isMobile()) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      setActiveSection(section); // Esto actualiza la sección activa
    }
  };

  return (
    <div className="bg-[#0D0C1D] min-h-screen overflow-hidden">
      <header className="flex justify-center py-4 mt-8 space-x-6 bg-[#1A1A2E] shadow-lg rounded-full w-[90%] max-w-3xl mx-auto">
        <FaHome className={iconStyle("home", activeSection)} onClick={() => handleNavigation("home")} />
        <FaWindowMaximize className={iconStyle("specialties", activeSection)} onClick={() => handleNavigation("specialties")} />
        <FaPen className={iconStyle("contact", activeSection)} onClick={() => handleNavigation("contact")} />
      </header>

      <div className={containerStyle}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl items-center mx-auto">
          <div className="flex justify-center w-full">
            <ProfileCard />
          </div>
          <div className="space-y-8">
            <ProfessionalInfo />
            <ActionCards />
          </div>
        </div>
      </div>

      <footer className="bg-[#1A1A2E] text-white text-center py-4 mt-8">
        &copy; {new Date().getFullYear()} @ Deivipluss. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default App;
