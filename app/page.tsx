"use client";

import React, { useState } from "react";
import { FaHome, FaWindowMaximize, FaPen } from "react-icons/fa";

// Estilos actualizados con una paleta profesional y excéntrica
const iconStyle = "text-[#4A90E2] text-2xl mx-3 cursor-pointer";
const containerStyle = "p-8 flex justify-center items-center min-h-screen bg-[#0D0C1D]";

// Detecta si el dispositivo es móvil
const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

const ProfileCard = () => (
  <div className="bg-[#F9F9F9] p-8 rounded-lg flex flex-col items-center text-center space-y-6 shadow-lg h-[640px] w-[344px] mx-auto">
    {/* Cuadrado en lugar de círculo */}
    <div className="w-32 h-32 bg-[#FF5C5C] mb-4"></div> {/* Ahora es un cuadrado */}
    <h2 className="text-[#FF5C5C] text-3xl font-bold">DEIVIPLUSS</h2>
    <p className="text-gray-500 mt-4">
      Consultor digital enfocado en gestión de marcas, desarrollo de productos, y creación de comunidades para redes sociales (+18). Entreno a líderes en estrategias digitales efectivas.
    </p>
    <div className="flex space-x-4 text-[#FF5C5C] mt-4 justify-center">
      <FaHome />
      <FaWindowMaximize />
      <FaPen />
    </div>
  </div>
);

const ProfessionalInfo = () => (
  <div className="text-white space-y-8 text-center">
    <div>
      <h1 className="text-6xl font-bold text-[#4A90E2]">DIGITAL</h1>
      <h2 className="text-3xl text-[#A9A9A9]">CONSULTANT</h2>
    </div>
    <p className="text-[#E1E1E1]">
      Experto en gestión de marcas, productos digitales y crecimiento de comunidades.
    </p>
    <div className="flex flex-col md:flex-row gap-4 text-center text-[#E1E1E1] justify-center">
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

  // Función para manejar la navegación
  const handleNavigation = (section: string) => {
    if (isMobile()) {
      // Navegación en móvil: desplaza hacia la sección correspondiente
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navegación en PC: cambia la vista activa
      setActiveSection(section);
    }
  };

  return (
    <div className="bg-[#0D0C1D] min-h-screen">
      {/* Navegación */}
      <header className="flex justify-center py-4 space-x-6 bg-[#1A1A2E]">
        <FaHome className={iconStyle} onClick={() => handleNavigation("home")} />
        <FaWindowMaximize className={iconStyle} onClick={() => handleNavigation("specialties")} />
        <FaPen className={iconStyle} onClick={() => handleNavigation("contact")} />
      </header>

      {/* Contenedor Principal */}
      <div className={containerStyle}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl items-center">
          {/* Columna Izquierda: Tarjeta de Perfil */}
          <ProfileCard />

          {/* Columna Derecha: Información Profesional */}
          {activeSection === "profile" && <ProfessionalInfo />}
          {activeSection === "specialties" && (
            <div className="text-white"> {/* Aquí va la sección de especialidades */}</div>
          )}
          {activeSection === "contact" && (
            <div className="text-white"> {/* Aquí va la sección de contacto */}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
