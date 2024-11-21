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
            <div className="bg-[#FF5C5C] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Branding corporativo y comercial</h3>
              <p>Construcción y desarrollo de identidades de marca impactantes.</p>
            </div>
            <div className="bg-[#4A90E2] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Marca Personal</h3>
              <p>Potencia tu imagen profesional y personal.</p>
            </div>
            <div className="bg-[#FFC107] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Entrenamiento Gerencial</h3>
              <p>Capacitación para líderes que buscan resultados extraordinarios.</p>
            </div>
            <div className="bg-[#00C851] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Community Manager</h3>
              <p>Gestión de redes sociales con estrategias efectivas.</p>
            </div>
            <div className="bg-[#33B5E5] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Contenido y estrategia digital</h3>
              <p>Diseño y ejecución de campañas digitales de alto impacto.</p>
            </div>
            <div className="bg-[#AA66CC] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Ecommerce</h3>
              <p>Soluciones para construir y optimizar tiendas en línea.</p>
            </div>
            <div className="bg-[#FF4444] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">IA para negocios</h3>
              <p>Integración de inteligencia artificial para automatización y análisis.</p>
            </div>
            <div className="bg-[#2BBBAD] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Consultoría Only Fans</h3>
              <p>Estrategias especializadas para maximizar tus ingresos.</p>
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
