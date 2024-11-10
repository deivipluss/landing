"use client";

import React, { useState } from "react";
import { FaBehance, FaPinterest, FaGithub, FaWhatsapp } from "react-icons/fa";

// Define los colores de los íconos de acuerdo con la paleta de colores personalizada
const iconStyle = "text-[#4A90E2] text-2xl mx-3 cursor-pointer";
const iconCardStyle = "text-[#FF5C5C] text-2xl mx-2 cursor-pointer";  // Color de los íconos en la tarjeta de perfil
const containerStyle = "p-8 flex justify-center items-center min-h-screen bg-[#0D0C1D] overflow-hidden";

const ProfileCard = () => (
  <div className="bg-[#F9F9F9] p-8 rounded-lg flex flex-col items-center text-center space-y-6 shadow-lg h-[640px] w-[344px] mx-auto overflow-hidden">
    <div className="w-[240px] h-[283px] bg-[#FF5C5C] mb-4 rounded-lg"></div>
    <h2 className="text-[#4A90E2] text-3xl font-bold">DEIVIPLUSS</h2>
    <p className="text-gray-500 mt-4">
      Consultor digital enfocado en gestión de marcas, desarrollo de productos, y creación de comunidades para redes sociales (+18).
    </p>
    <div className="flex space-x-4 mt-4 justify-center">
      <FaBehance className={iconCardStyle} />
      <FaPinterest className={iconCardStyle} />
      <FaGithub className={iconCardStyle} />
      <FaWhatsapp className={iconCardStyle} />
    </div>
  </div>
);

const ProfessionalInfo = () => (
  <div className="text-white space-y-8 text-center sm:text-left">
    {/* Ajustes de tamaño y espaciado de caracteres */}
    <h1 className="font-black text-[#4A90E2] leading-none sm:text-[88px] sm:tracking-wider text-[48px] sm:leading-tight">
      DIGITAL <span style={{ opacity: 0.45 }}>CONSULTANT</span>
    </h1>
    <p className="text-[#E1E1E1] opacity-80">Experto en gestión de marcas, productos digitales y crecimiento de comunidades.</p>
    <div className="flex flex-col md:flex-row gap-4 text-left text-[#E1E1E1] justify-start">
      <div>
        <p className="text-3xl font-bold text-[#4A90E2]">+10</p>
        <p className="text-gray-400">AÑOS DE EXPERIENCIA</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-[#4A90E2]">+100</p>
        <p className="text-gray-400">CLIENTES ASESORADOS</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-[#4A90E2]">+50</p>
        <p className="text-gray-400">PROYECTOS DIGITALES</p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
      <div className="bg-[#FF5C5C] text-white p-6 rounded-lg relative shadow-md">
        <h3 className="text-lg">GESTIÓN DE MARCAS, DESARROLLO DE PRODUCTOS</h3>
        <span className="absolute bottom-2 right-2 text-2xl">→</span>
      </div>
      <div className="bg-[#32CD32] text-white p-6 rounded-lg relative shadow-md">
        <h3 className="text-lg">ENTRENAMIENTO DIGITAL, COMMUNITY MANAGEMENT</h3>
        <span className="absolute bottom-2 right-2 text-2xl">→</span>
      </div>
    </div>
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const handleNavigation = (section: string) => {
    if (isMobile()) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="bg-[#0D0C1D] min-h-screen overflow-hidden">
      <header className="flex justify-center py-4 space-x-6 bg-[#1A1A2E]">
        <FaBehance className={iconStyle} onClick={() => handleNavigation("home")} />
        <FaPinterest className={iconStyle} onClick={() => handleNavigation("specialties")} />
        <FaGithub className={iconStyle} onClick={() => handleNavigation("contact")} />
        <FaWhatsapp className={iconStyle} onClick={() => handleNavigation("contact")} />
      </header>

      <div className={containerStyle}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl items-center">
          <div className="flex justify-center w-full">
            <ProfileCard />
          </div>
          {activeSection === "profile" && <ProfessionalInfo />}
          {activeSection === "specialties" && <div className="text-white"> {/* Sección especialidades */}</div>}
          {activeSection === "contact" && <div className="text-white"> {/* Sección contacto */}</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
