"use client";
import React, { useState } from "react";
import { FaHome, FaWindowMaximize, FaPen } from "react-icons/fa";
import { FaBehance, FaPinterest, FaGithub, FaWhatsapp } from "react-icons/fa";
import { RiCustomerService2Line, RiMessage2Line } from "react-icons/ri";

const iconStyle = "text-2xl mx-3 cursor-pointer transition-colors duration-300";

const ProfileCard = () => (
  <div className="bg-[#F9F9F9] p-6 md:p-8 rounded-lg flex flex-col items-center text-center space-y-4 md:space-y-6 shadow-lg h-[456px] md:h-[530px] w-[320px] md:w-[300px] mx-auto md:mb-8 overflow-hidden">
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
      Experiencia global y habilidades avanzadas que me convierten en la mejor opción para llevar tus proyectos al siguiente nivel.
    </p>
    <div className="flex space-x-4 mt-2 md:mt-4 justify-center">
      <FaBehance className="text-[#FF5C5C] text-xl md:text-2xl" />
      <FaPinterest className="text-[#FF5C5C] text-xl md:text-2xl" />
      <FaGithub className="text-[#FF5C5C] text-xl md:text-2xl" />
      <FaWhatsapp className="text-[#FF5C5C] text-xl md:text-2xl" />
    </div>
  </div>
);

const Stats = () => (
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
);

const HomeSection = () => (
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
      Especialista en el desarrollo de marcas, crecimiento de negocios, desarrollo de productos y gestión digital. Transformo ideas en realidades sólidas y rentables.
    </p>
    <Stats />
  </div>
);

const SpecialtiesSection = () => (
  <div className="w-full max-w-[800px] px-4 md:px-0">
    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#4A90E2] mb-6">Especialidades</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-[#FF5C5C] text-white p-4 md:p-6 rounded-lg relative shadow-md h-[120px] md:h-[220px] flex flex-col justify-center transition-transform hover:scale-105">
        <div className="flex items-center md:items-start justify-center md:justify-start space-x-2">
          <RiCustomerService2Line className="hidden md:block text-3xl" />
          <h3 className="text-lg md:text-xl font-poppins font-semibold">SOLUCIONES POPULARES</h3>
        </div>
        <div className="hidden md:block absolute bottom-4 right-4 bg-white/20 p-2 rounded-lg">
          <span className="text-xl">→</span>
        </div>
      </div>
      <div className="bg-[#32CD32] text-white p-4 md:p-6 rounded-lg relative shadow-md h-[120px] md:h-[220px] flex flex-col justify-center transition-transform hover:scale-105">
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

const ContactSection = () => (
  <div className="w-full max-w-[800px] px-4 md:px-0">
    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#4A90E2] mb-6">Contacto</h2>
    <div className="bg-[#1A1A2E] p-6 rounded-lg">
      <p className="text-[#E1E1E1] mb-4">
        ¿Listo para llevar tu proyecto al siguiente nivel? Contáctame y conversemos sobre cómo puedo ayudarte.
      </p>
      {/* Aquí puedes agregar un formulario de contacto si lo deseas */}
    </div>
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "specialties":
        return <SpecialtiesSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="bg-[#0D0C1D] min-h-screen overflow-hidden">
      <header className="flex justify-center py-4 mt-8 space-x-6 bg-[#1A1A2E] shadow-lg rounded-full w-[90%] max-w-3xl mx-auto">
        <FaHome 
          className={`${iconStyle} ${activeSection === "home" ? "text-[#FF5C5C]" : "text-gray-400"}`} 
          onClick={() => setActiveSection("home")} 
        />
        <FaWindowMaximize 
          className={`${iconStyle} ${activeSection === "specialties" ? "text-[#FF5C5C]" : "text-gray-400"}`} 
          onClick={() => setActiveSection("specialties")} 
        />
        <FaPen 
          className={`${iconStyle} ${activeSection === "contact" ? "text-[#FF5C5C]" : "text-gray-400"}`} 
          onClick={() => setActiveSection("contact")} 
        />
      </header>

      <main className="p-4 md:p-8 flex justify-center items-start min-h-[calc(100vh-200px)] bg-[#0D0C1D]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="flex justify-center">
            <ProfileCard />
          </div>
          <div className="flex flex-col flex-1">
            {renderSection()}
          </div>
        </div>
      </main>

      <footer className="bg-[#1A1A2E] text-gray-400 py-6 mt-12 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <button 
            onClick={() => setActiveSection("home")}
            className={`hover:text-[#FF5C5C] ${activeSection === "home" ? "text-[#FF5C5C]" : ""}`}
          >
            Inicio
          </button>
          <button 
            onClick={() => setActiveSection("specialties")}
            className={`hover:text-[#FF5C5C] ${activeSection === "specialties" ? "text-[#FF5C5C]" : ""}`}
          >
            Especialidades
          </button>
          <button 
            onClick={() => setActiveSection("contact")}
            className={`hover:text-[#FF5C5C] ${activeSection === "contact" ? "text-[#FF5C5C]" : ""}`}
          >
            Contacto
          </button>
        </div>
        <p>&copy; 2024 Deivipluss. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;