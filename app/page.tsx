// Importa los módulos y librerías necesarios
import React from "react";
import { FaDribbble, FaTwitter, FaInstagram, FaEnvelope, FaFolder, FaHome, FaTools, FaPen, FaWindowMaximize } from "react-icons/fa";

// Estilos de los íconos y contenedores
const iconStyle = "text-white text-2xl mx-3";
const containerStyle = "p-8 flex justify-center items-center min-h-screen bg-[#111111]";

const ProfileCard = () => (
  <div className="bg-white p-8 rounded-lg flex flex-col items-center text-center space-y-4">
    {/* Imagen de perfil cuadrada */}
    <div className="w-32 h-32 rounded bg-[#FF5722]"></div>
    {/* Nombre y bio */}
    <h2 className="text-[#FF5722] text-3xl font-bold">MARK SMITH</h2>
    <div className="border-dotted border-t-2 border-[#FF5722] my-4 w-full flex justify-center items-center">
      <span className="text-[#FF5722] text-2xl">🔥</span>
    </div>
    <p className="text-gray-500">Experienced Software Engineer</p>
    {/* Íconos de redes sociales */}
    <div className="flex space-x-4 text-[#FF5722]">
      <FaDribbble />
      <FaTwitter />
      <FaInstagram />
      <FaEnvelope />
    </div>
  </div>
);

const ProfessionalInfo = () => (
  <div className="text-white space-y-8">
    {/* Título y subtítulo */}
    <div>
      <h1 className="text-5xl font-bold">SOFTWARE</h1>
      <h2 className="text-2xl text-gray-400">ENGINEER</h2>
    </div>
    {/* Descripción */}
    <p className="text-gray-300">
      Passionate about creating dynamic animations and efficient design systems that make a difference.
    </p>
    {/* Estadísticas */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-center">
      <div>
        <p className="text-3xl font-bold text-white">+12</p>
        <p className="text-gray-400">YEARS OF EXPERIENCE</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-white">+46</p>
        <p className="text-gray-400">PROJECTS COMPLETED</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-white">+20</p>
        <p className="text-gray-400">WORLDWIDE CLIENTS</p>
      </div>
    </div>
    {/* Tarjetas de especialidad */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-[#FF5722] text-white p-6 rounded-lg relative">
        <h3 className="text-lg">DYNAMIC ANIMATION, MOTION DESIGN</h3>
        <span className="absolute bottom-2 right-2 text-2xl">→</span>
      </div>
      <div className="bg-[#B4FF39] text-white p-6 rounded-lg relative">
        <h3 className="text-lg">FRAMER, FIGMA, WORDPRESS, REACT.JS</h3>
        <span className="absolute bottom-2 right-2 text-2xl">→</span>
      </div>
    </div>
  </div>
);

const App = () => (
  <div className="bg-[#111111] min-h-screen">
    {/* Navegación */}
    <header className="flex justify-center py-4 space-x-6 bg-[#222222]">
      <FaHome className={iconStyle} />
      <FaFolder className={iconStyle} />
      <FaWindowMaximize className={iconStyle} />
      <FaTools className={iconStyle} />
      <FaPen className={iconStyle} />
    </header>
    {/* Contenedor Principal */}
    <div className={containerStyle}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl">
        {/* Columna Izquierda: Tarjeta de Perfil */}
        <ProfileCard />
        {/* Columna Derecha: Información Profesional */}
        <ProfessionalInfo />
      </div>
    </div>
  </div>
);

export default App;
