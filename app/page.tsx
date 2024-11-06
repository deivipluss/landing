// Importa los módulos y librerías necesarios
import React from "react";
import { FaDribbble, FaTwitter, FaInstagram, FaEnvelope, FaFolder, FaHome, FaTools, FaPen, FaWindowMaximize } from "react-icons/fa";

// Nuevos estilos de colores y diseño
const iconStyle = "text-[#4A90E2] text-2xl mx-3";  // azul vibrante
const containerStyle = "p-8 flex justify-center items-center min-h-screen bg-[#0D0C1D]";  // fondo oscuro profundo

const ProfileCard = () => (
  <div className="bg-[#F9F9F9] p-8 rounded-lg flex flex-col items-center text-center space-y-4 shadow-lg">
    {/* Imagen de perfil cuadrada */}
    <div className="w-32 h-32 rounded-full bg-[#FF5C5C]"></div>  {/* círculo de color rojo vibrante */}
    {/* Nombre y bio */}
    <h2 className="text-[#FF5C5C] text-3xl font-bold">DEIVIS CONTRERAS CÁRDENAS</h2>  {/* nombre en rojo vibrante */}
    <div className="border-dotted border-t-2 border-[#FF5C5C] my-4 w-full flex justify-center items-center">
      <span className="text-[#FF5C5C] text-2xl">🔥</span>
    </div>
    <p className="text-gray-500">CONSULTOR DIGITAL</p>
    {/* Íconos de redes sociales */}
    <div className="flex space-x-4 text-[#FF5C5C]">
      <FaDribbble />
      <FaTwitter />
      <FaInstagram />
      <FaEnvelope />
    </div>
  </div>
);

const ProfessionalInfo = () => (
  <div className="text-white space-y-8 text-center">
    {/* Título y subtítulo */}
    <div>
      <h1 className="text-6xl font-bold text-[#4A90E2]">DIGITAL</h1>
      <h2 className="text-3xl text-[#A9A9A9]">CONSULTANT</h2>
    </div>
    {/* Descripción */}
    <p className="text-[#E1E1E1]">
      Experienced in driving digital transformation and business growth through strategic consulting and innovative solutions.
    </p>
    {/* Estadísticas */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-center text-[#E1E1E1]">
      <div>
        <p className="text-3xl font-bold text-[#4A90E2]">+10</p>
        <p className="text-gray-400">YEARS OF EXPERIENCE</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-[#4A90E2]">+100</p>
        <p className="text-gray-400">CLIENTS CONSULTED</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-[#4A90E2]">+50</p>
        <p className="text-gray-400">DIGITAL PROJECTS</p>
      </div>
    </div>
    {/* Tarjetas de especialidad */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-[#FF5C5C] text-white p-6 rounded-lg relative shadow-md">
        <h3 className="text-lg">DIGITAL STRATEGY, BRANDING</h3>
        <span className="absolute bottom-2 right-2 text-2xl">→</span>
      </div>
      <div className="bg-[#32CD32] text-white p-6 rounded-lg relative shadow-md">
        <h3 className="text-lg">TRANSFORMATION, UX/UI, ANALYTICS</h3>
        <span className="absolute bottom-2 right-2 text-2xl">→</span>
      </div>
    </div>
  </div>
);

const App = () => (
  <div className="bg-[#0D0C1D] min-h-screen">
    {/* Navegación */}
    <header className="flex justify-center py-4 space-x-6 bg-[#1A1A2E]">
      <FaHome className={iconStyle} />
      <FaFolder className={iconStyle} />
      <FaWindowMaximize className={iconStyle} />
      <FaTools className={iconStyle} />
      <FaPen className={iconStyle} />
    </header>
    {/* Contenedor Principal */}
    <div className={containerStyle}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl items-center">
        {/* Columna Izquierda: Tarjeta de Perfil */}
        <ProfileCard />
        {/* Columna Derecha: Información Profesional */}
        <ProfessionalInfo />
      </div>
    </div>
  </div>
);

export default App;
