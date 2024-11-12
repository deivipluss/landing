"use client";
import React, { useState } from "react";
import { FaHome, FaWindowMaximize, FaPen } from "react-icons/fa";
import { FaBehance, FaPinterest, FaGithub, FaWhatsapp } from "react-icons/fa";
import { RiCustomerService2Line, RiMessage2Line } from "react-icons/ri";

const iconStyle = "text-[#FF5C5C] text-2xl mx-3 cursor-pointer";
const containerStyle = "p-4 md:p-8 flex justify-center items-center min-h-screen bg-[#0D0C1D] overflow-hidden";

const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 768;

const ProfileCard: React.FC = () => (
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

const ProfessionalInfo: React.FC = () => (
  <div className="w-full max-w-[800px] px-4 md:px-0 mx-auto">
    {/* Título "Consultor Digital" */}
    <div className="flex justify-start mb-6 md:mb-8">
      <h1
        className="text-[40px] md:text-[80px] font-poppins font-black leading-none z-10 relative"
        style={{ letterSpacing: "-1px" }}
      >
        <span className="text-[#4A90E2]">CONSULTOR </span>
        <span className="text-[#4A90E2] opacity-40">DIGITAL</span>
      </h1>
    </div>

    {/* Descripción alineada */}
    <p className="text-[#E1E1E1] opacity-80 text-[16px] text-left px-4 md:px-0 -mt-2 font-poppins font-light">
      Especialista en el desarrollo de marcas, crecimiento de negocios, desarrollo de productos y gestión digital. Transformo ideas en realidades sólidas y rentables.
    </p>

    {/* Estadísticas alineadas */}
    <div className="grid grid-cols-3 gap-6 md:gap-12 mt-8 w-full">
      <div className="flex flex-col items-start">
        <p className="text-[30px] md:text-[50px] font-poppins font-black text-[#4A90E2] leading-none" style={{ letterSpacing: "-1px" }}>+10</p>
        <p className="text-[11px] md:text-[13px] text-gray-400 leading-tight mt-2 font-poppins font-medium">
          AÑOS DE<br />EXPERIENCIA
        </p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-[30px] md:text-[50px] font-poppins font-black text-[#4A90E2] leading-none" style={{ letterSpacing: "-1px" }}>+85</p>
        <p className="text-[11px] md:text-[13px] text-gray-400 leading-tight mt-2 font-poppins font-medium">
          CLIENTES<br />ASESORADOS
        </p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-[30px] md:text-[50px] font-poppins font-black text-[#4A90E2] leading-none" style={{ letterSpacing: "-1px" }}>+50</p>
        <p className="text-[11px] md:text-[13px] text-gray-400 leading-tight mt-2 font-poppins font-medium">
          PROYECTOS<br />DIGITALES
        </p>
      </div>
    </div>

    {/* ProfessionalInfo alineado a la izquierda */}
    <div className="mt-8">
      <div className="flex flex-col gap-6">
        <div className="bg-red-500 text-white p-4 md:p-6 rounded-lg shadow-md flex flex-col justify-center h-[120px] md:h-[220px] w-full">
          <div className="flex items-start space-x-2">
            <RiCustomerService2Line className="text-3xl" />
            <h3 className="text-lg md:text-xl font-semibold">SOLUCIONES POPULARES</h3>
          </div>
          <p className="mt-2 md:mt-4 text-[13px] md:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          </p>
        </div>
        <div className="bg-green-500 text-white p-4 md:p-6 rounded-lg shadow-md flex flex-col justify-center h-[120px] md:h-[220px] w-full">
          <div className="flex items-start space-x-2">
            <RiCustomerService2Line className="text-3xl" />
            <h3 className="text-lg md:text-xl font-semibold">EXPERIENCIA AMPLIA</h3>
          </div>
          <p className="mt-2 md:mt-4 text-[13px] md:text-[15px]">
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
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

      <footer className="bg-[#1A1A2E] text-white text-center py-4 mt-8">
        &copy; {new Date().getFullYear()} Deivipluss. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default App;
