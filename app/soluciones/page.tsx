"use client";
import React, { useState } from "react";
import { 
  FaHome, 
  FaLightbulb, 
  FaBlog, 
  FaEnvelope 
} from "react-icons/fa";
import Link from 'next/link';

// Define el tipo explícito para los parámetros
const iconStyle = (section: string, activeSection: string): string =>
  `text-[#FF5C5C] text-2xl mx-3 cursor-pointer hover:text-[#4A90E2] transition-colors ${
    activeSection === section ? 'text-[#4A90E2]' : ''
  }`;

const containerStyle = "p-4 md:p-8 flex justify-center items-center min-h-screen bg-[#0D0C1D] overflow-hidden";

const Soluciones = () => {
  const [activeSection] = useState<string>("soluciones");

  return (
    <div className="bg-[#0D0C1D] min-h-screen overflow-hidden">
      {/* Header */}
      <header className="flex justify-center py-4 mt-8 space-x-6 bg-[#1A1A2E] shadow-lg rounded-full w-[90%] max-w-3xl mx-auto">
        <Link href="/" className="flex flex-col items-center group">
          <FaHome className={iconStyle("home", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Home</span>
        </Link>
        <Link href="/soluciones" className="flex flex-col items-center group">
          <FaLightbulb className={iconStyle("soluciones", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Soluciones</span>
        </Link>
        <Link href="/blog" className="flex flex-col items-center group">
          <FaBlog className={iconStyle("blog", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Blog</span>
        </Link>
        <Link href="/contacto" className="flex flex-col items-center group">
          <FaEnvelope className={iconStyle("contacto", activeSection)} />
          <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors">Contacto</span>
        </Link>
      </header>

      {/* Main Content */}
      <div className={containerStyle}>
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FF5C5C] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h3 className="text-xl font-semibold">Branding Corporativo</h3>
            </div>
            <div className="bg-[#4A90E2] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h3 className="text-xl font-semibold">Marca Personal</h3>
            </div>
            <div className="bg-[#FFC107] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h3 className="text-xl font-semibold">Entrenamiento Gerencial</h3>
            </div>
            <div className="bg-[#00C851] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h3 className="text-xl font-semibold">Community Manager</h3>
            </div>
            <div className="bg-[#33B5E5] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h3 className="text-xl font-semibold">Contenido Digital</h3>
            </div>
            <div className="bg-[#AA66CC] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h3 className="text-xl font-semibold">Ecommerce</h3>
            </div>
            <div className="bg-[#FF4444] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h3 className="text-xl font-semibold">IA para Negocios</h3>
            </div>
            <div className="bg-[#2BBBAD] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h3 className="text-xl font-semibold">Consultoría OnlyFans</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-center py-6 text-gray-300 text-sm">
        © 2024 Deivipluss. ¡Todos los derechos reservados!.
      </footer>
    </div>
  );
};

export default Soluciones;
