"use client";
import React, { useState } from "react";
import { FaHome, FaWindowMaximize, FaPen } from "react-icons/fa";
import { FaBehance, FaPinterest, FaGithub, FaWhatsapp } from "react-icons/fa";
import { RiCustomerService2Line, RiMessage2Line } from "react-icons/ri";

const iconStyle = "text-[#FF5C5C] text-2xl mx-3 cursor-pointer";
const containerStyle = "p-4 md:p-8 flex justify-center items-center min-h-screen bg-[#0D0C1D] overflow-hidden";

const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 768;

const ProfileCard: React.FC = () => (
  <div className="bg-[#F9F9F9] p-6 md:p-8 rounded-lg flex flex-col items-center text-center space-y-4 md:space-y-6 shadow-lg h-[456px] md:h-[640px] w-[350px] md:w-[344px] mx-auto md:mb-8 overflow-hidden">
    <div className="w-[200px] md:w-[240px] h-[200px] md:h-[283px] bg-[#FF5C5C] mb-2 md:mb-4 rounded-lg"></div>
    <h2 className="text-[#FF5C5C] text-2xl md:text-3xl font-bold font-poppins">DEIVIPLUSS</h2>
    <p className="text-gray-500 mt-2 md:mt-4 text-sm md:text-base font-poppins font-light">
      Alta competencia en mercados de porte mundial, me hacen la mejor opción para hacer realidad tus proyectos
    </p>
    <div className="flex space-x-4 mt-2 md:mt-4 justify-center">
      <FaBehance className="text-[#FF5C5C] text-xl md:text-2xl" />
      <FaPinterest className="text-[#FF5C5C] text-xl md:text-2xl" />
      <FaGithub className="text-[#FF5C5C] text-xl md:text-2xl" />
      <FaWhatsapp className="text-[#FF5C5C] text-xl md:text-2xl" />
    </div>
  </div>
);

const ProfessionalInfo: React.FC = () => (
  <div className="w-full max-w-[800px] px-4 md:px-0">
    <div className="flex justify-center md:justify-start w-full mb-6 md:mb-8">
      <h1
        className="text-[40px] md:text-[80px] font-poppins font-black leading-none z-10 relative md:text-left text-center"
        style={{ letterSpacing: "-1px" }}
      >
        <span className="text-[#4A90E2]">CONSULTOR </span>
        <span className="text-[#4A90E2] opacity-40">DIGITAL</span>
      </h1>
    </div>
    <p className="text-[#E1E1E1] opacity-80 text-[16px] text-center md:text-left px-4 md:px-0 -mt-2 font-poppins font-light">
    Especialista en el desarrollo de marcas, desarrollo de negocios, desarrollo de productos, gerencias digitales, transformación difital y gestion de comunidades en Internet
    </p>
    <div className="grid grid-cols-3 gap-6 md:gap-12 mt-8 px-4 md:px-0 w-full">
      <div className="flex flex-col items-center md:items-start">
        <p className="text-[30px] md:text-[50px] font-poppins font-black text-[#4A90E2] leading-none" style={{ letterSpacing: "-1px" }}>+10</p>
        <p className="text-[11px] md:text-[13px] text-gray-400 leading-tight mt-2 font-poppins font-medium">
          AÑOS DE<br />EXPERIENCIA
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <p className="text-[30px] md:text-[50px] font-poppins font-black text-[#4A90E2] leading-none" style={{ letterSpacing: "-1px" }}>+85</p>
        <p className="text-[11px] md:text-[13px] text-gray-400 leading-tight mt-2 font-poppins font-medium">
          CLIENTES<br />ASESORADOS
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <p className="text-[30px] md:text-[50px] font-poppins font-black text-[#4A90E2] leading-none" style={{ letterSpacing: "-1px" }}>+50</p>
        <p className="text-[11px] md:text-[13px] text-gray-400 leading-tight mt-2 font-poppins font-medium">
          PROYECTOS<br />DIGITALES
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
      <div className="bg-[#FF5C5C] text-white p-4 md:p-6 rounded-lg relative shadow-md h-[120px] md:h-[220px] flex flex-col justify-center md:justify-between">
        <div className="flex items-center md:items-start justify-center md:justify-start space-x-2">
          <RiCustomerService2Line className="hidden md:block text-3xl" />
          <h3 className="text-lg md:text-xl font-poppins font-semibold">SOLUCIONES POPULARES</h3>
        </div>
        <div className="hidden md:block absolute bottom-4 right-4 bg-white/20 p-2 rounded-lg">
          <span className="text-xl">→</span>
        </div>
      </div>
      <div className="bg-[#32CD32] text-white p-4 md:p-6 rounded-lg relative shadow-md h-[120px] md:h-[220px] flex flex-col justify-center md:justify-between">
        <div className="flex items-center md:items-start justify-center md:justify-start space-x-2">
          <RiMessage2Line className="hidden md:block text-3xl" />
          <h3 className="text-lg md:text-xl font-poppins font-semibold">CONTACTA CONMIGO</h3>
        </div>
        <div className="hidden md:block absolute bottom-4 right-4 bg-white/20 p-2 rounded-lg">
          <span className="text-xl">→</span>
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("profile");

  const handleNavigation = (section: string) => {
    if (isMobile()) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="bg-[#0D0C1D] min-h-screen overflow-hidden">
      <header className="flex justify-center py-4 mt-8 space-x-6 bg-[#1A1A2E] shadow-lg rounded-full w-[90%] max-w-3xl mx-auto">
        <FaHome className={iconStyle} onClick={() => handleNavigation("home")} />
        <FaWindowMaximize className={iconStyle} onClick={() => handleNavigation("specialties")} />
        <FaPen className={iconStyle} onClick={() => handleNavigation("contact")} />
      </header>

      <div className={containerStyle}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl items-center mx-auto">
          <div className="flex justify-center w-full">
            <ProfileCard />
          </div>
          {activeSection === "profile" && <ProfessionalInfo />}
          {activeSection === "specialties" && <div className="text-white">{/* Sección especialidades */}</div>}
          {activeSection === "contact" && <div className="text-white">{/* Sección contacto */}</div>}
        </div>
      </div>

      <footer className="bg-[#1A1A2E] text-gray-400 py-6 mt-12 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#home" className="hover:text-[#FF5C5C] transition-colors">Inicio</a>
          <a href="#specialties" className="hover:text-[#FF5C5C] transition-colors">Especialidades</a>
          <a href="#contact" className="hover:text-[#FF5C5C] transition-colors">Contacto</a>
        </div>
        <p className="text-sm">&copy; 2024 Deivipluss. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
