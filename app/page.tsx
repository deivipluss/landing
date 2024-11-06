// Importa los módulos y librerías necesarios
import React from "react";
import { FaDribbble, FaTwitter, FaInstagram, FaEnvelope, FaFolder, FaHome, FaTools, FaPen, FaWindowMaximize } from "react-icons/fa";

// Estilos actualizados con una paleta profesional y excéntrica
const iconStyle = "text-[#4A90E2] text-2xl mx-3";
const containerStyle = "p-8 flex justify-center items-center min-h-screen bg-[#0D0C1D]";

const ProfileCard = () => (
  <div className="bg-[#F9F9F9] p-8 rounded-lg flex flex-col items-center text-center space-y-4 shadow-lg">
    {/* Imagen de perfil cuadrada */}
    <div className="w-32 h-32 rounded-full bg-[#FF5C5C]"></div>
    {/* Nombre y bio */}
    <h2 className="text-[#FF5C5C] text-3xl font-bold">DEIVIPLUSS</h2>
    {/* Bio directa */}
    <p className="text-gray-500 mt-4">
      Consultor digital enfocado en gestión de marcas, desarrollo de productos, y creación de comunidades para redes sociales (+18). Entreno a líderes en estrategias digitales efectivas.
    </p>
    {/* Íconos de redes sociales */}
    <div className="flex space-x-4 text-[#FF5C5C] mt-4">
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
    {/* Descripción profesional */}
    <p className="text-[#E1E1E1]">
      Experto en gestión de marcas, productos digitales y crecimiento de comunidades.
    </p>
    {/* Estadísticas en una sola fila */}
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
    {/* Tarjetas de especialidad */}
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
