// Importaciones necesarias
import React, { useState } from "react";
import { FaHome, FaWindowMaximize, FaPen } from "react-icons/fa";
import { FaBehance, FaPinterest, FaGithub, FaWhatsapp } from "react-icons/fa";
import { RiCustomerService2Line, RiMessage2Line } from "react-icons/ri";

const iconStyle = "text-[#FF5C5C] text-2xl mx-3 cursor-pointer";
const containerStyle = "p-4 md:p-8 flex justify-center items-center min-h-screen bg-[#0D0C1D] overflow-hidden";

const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 768;

// Componente ProfileCard
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

// Componente ProfessionalInfo (información profesional)
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
      Especialista en el desarrollo de marcas, crecimiento de negocios, desarrollo de productos y gestión digital. Transformo ideas en realidades sólidas y rentables.
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
  </div>
);

// Nuevo componente CallToActionSection (sección de llamadas a la acción)
const CallToActionSection: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 px-4">
    {/* Caja de "SOLUCIONES POPULARES" */}
    <div className="bg-[#FF5C5C] text-white p-6 rounded-lg relative shadow-md h-[220px] flex flex-col justify-center items-center">
      <RiCustomerService2Line className="text-3xl" />
      <h3 className="text-xl font-poppins font-semibold mt-4">SOLUCIONES POPULARES</h3>
      <div className="absolute bottom-4 right-4 bg-white/20 p-2 rounded-lg">
        <span className="text-xl">→</span>
      </div>
    </div>

    {/* Caja de "CONTACTA CONMIGO" */}
    <div className="bg-[#32CD32] text-white p-6 rounded-lg relative shadow-md h-[220px] flex flex-col justify-center items-center">
      <RiMessage2Line className="text-3xl" />
      <h3 className="text-xl font-poppins font-semibold mt-4">CONTACTA CONMIGO</h3>
      <div className="absolute bottom-4 right-4 bg-white/20 p-2 rounded-lg">
        <span className="text-xl">→</span>
      </div>
    </div>
  </div>
);

// Componente principal App
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
        </div>
      </div>

      {/* Añadir nueva sección de CTA */}
      <section id="cta">
        <div className="container mx-auto px-6">
          <CallToActionSection />
        </div>
      </section>
    </div>
  );
};

export default App;
