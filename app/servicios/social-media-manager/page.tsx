"use client";
import React from "react";
import { FaChartLine } from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";

export default function SocialMediaManagerPage() {
  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4">
        <HomeNavigation />
        
        <main className="flex-grow flex flex-col justify-start items-center p-4 md:p-8">
          <div className="w-full max-w-4xl bg-[#1A1A2E] rounded-xl p-6 md:p-8 shadow-lg border border-blue-500/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 flex items-center justify-center text-white text-2xl">
                <FaChartLine />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
              Social Media Manager
            </h1>
            
            <div className="text-gray-300 space-y-4">
              <p>
                Estrategia, planificación y gestión integral de tus redes sociales con enfoque en resultados tangibles.
              </p>
              <p>
                Contenido detallado próximamente...
              </p>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link href="/contacto?servicio=socialMediaManager" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-full hover:shadow-glow transition-all duration-300">
                Solicitar este servicio
              </Link>
            </div>
          </div>
        </main>
      </div>
      
      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. ¡Todos los derechos reservados!
      </footer>
    </div>
  );
}
