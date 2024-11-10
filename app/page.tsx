"use client";

import React, { useState } from "react";
import { FaHome, FaWindowMaximize, FaPen } from "react-icons/fa";
import { FaBehance, FaPinterest, FaGithub, FaWhatsapp } from "react-icons/fa";

const iconStyle = "text-[#FF5C5C] text-2xl mx-3 cursor-pointer";
const containerStyle = "p-8 flex justify-center items-center min-h-screen bg-[#0D0C1D] overflow-hidden";

const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 768;

const ProfileCard = () => (
 <div className="bg-[#F9F9F9] p-6 md:p-8 rounded-lg flex flex-col items-center text-center space-y-4 md:space-y-6 shadow-lg h-[456px] md:h-[640px] w-[350px] md:w-[344px] mx-auto overflow-hidden">
   <div className="w-[200px] md:w-[240px] h-[200px] md:h-[283px] bg-[#FF5C5C] mb-2 md:mb-4 rounded-lg"></div>
   <h2 className="text-[#FF5C5C] text-2xl md:text-3xl font-bold">DEIVIPLUSS</h2>
   <p className="text-gray-500 mt-2 md:mt-4 text-sm md:text-base">
     Consultor digital enfocado en gestión de marcas, desarrollo de productos, y creación de comunidades para redes sociales (+18).
   </p>
   <div className="flex space-x-4 mt-2 md:mt-4 justify-center">
     <FaBehance className="text-[#FF5C5C] text-xl md:text-2xl" />
     <FaPinterest className="text-[#FF5C5C] text-xl md:text-2xl" />
     <FaGithub className="text-[#FF5C5C] text-xl md:text-2xl" />
     <FaWhatsapp className="text-[#FF5C5C] text-xl md:text-2xl" />
   </div>
 </div>
);

const ProfessionalInfo = () => (
 <div>
   <div className="flex justify-center w-full mb-12">
     <div className="relative">
       <h1
         className="text-[40px] md:text-[80px] font-black leading-none z-10 relative text-center"
         style={{ letterSpacing: "-1px" }}
       >
         <span className="text-[#4A90E2]">DIGITAL </span>
         <span className="text-[#4A90E2] opacity-40">CONSULTANT</span>
       </h1>
     </div>
   </div>
   <p className="text-[#E1E1E1] opacity-80 md:mt-2 text-sm text-center md:text-left px-4">
     Experto en gestión de marcas, productos digitales y crecimiento de comunidades.
   </p>
   <div className="flex flex-row gap-8 md:gap-4 text-center text-[#E1E1E1] justify-center mt-8 px-4 md:px-0">
     <div className="flex flex-col items-center">
       <p className="text-[40px] md:text-[50px] font-bold text-[#4A90E2]">+10</p>
       <p className="text-[11px] md:text-[13px] text-gray-400 max-w-[80px] leading-tight">
         AÑOS DE<br />EXPERIENCIA
       </p>
     </div>
     <div className="flex flex-col items-center">
       <p className="text-[40px] md:text-[50px] font-bold text-[#4A90E2]">+100</p>
       <p className="text-[11px] md:text-[13px] text-gray-400 max-w-[80px] leading-tight">
         CLIENTES<br />ASESORADOS
       </p>
     </div>
     <div className="flex flex-col items-center">
       <p className="text-[40px] md:text-[50px] font-bold text-[#4A90E2]">+50</p>
       <p className="text-[11px] md:text-[13px] text-gray-400 max-w-[80px] leading-tight">
         PROYECTOS<br />DIGITALES
       </p>
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
       <FaHome className={iconStyle} onClick={() => handleNavigation("home")} />
       <FaWindowMaximize className={iconStyle} onClick={() => handleNavigation("specialties")} />
       <FaPen className={iconStyle} onClick={() => handleNavigation("contact")} />
     </header>

     <div className={containerStyle}>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl items-center mx-auto">
         <div className="flex justify-center w-full">
           <ProfileCard />
         </div>
         {activeSection === "profile" && <ProfessionalInfo />}
         {activeSection === "specialties" && <div className="text-white">{/* Sección especialidades */}</div>}
         {activeSection === "contact" && <div className="text-white">{/* Sección contacto */}</div>}
       </div>
     </div>
   </div>
 );
};

export default App;