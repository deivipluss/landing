"use client";
import React from "react";
import { FaRegGem } from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";

export default function OnlyFansPage() {
  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4">
        <HomeNavigation />
        
        <main className="flex-grow flex flex-col justify-start items-center p-4 md:p-8">
          <div className="w-full max-w-4xl bg-[#1A1A2E] rounded-xl p-6 md:p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white text-2xl">
                <FaRegGem />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
              OnlyFans Management
            </h1>
            
            <div className="text-gray-300 space-y-4">
              <p>
                Gestión profesional de cuentas de OnlyFans, incluyendo estrategia de contenido, monetización y crecimiento de audiencia.
              </p>
              <p>
                Nuestros servicios de OnlyFans Management están diseñados para creadores de contenido que buscan maximizar sus ingresos y su presencia en la plataforma, con un enfoque profesional y estratégico.
              </p>
              <p>
                Ofrecemos asesoría personalizada, programación de contenido, interacción con suscriptores, estrategias de precios y mucho más para ayudarte a destacar y monetizar tu presencia en OnlyFans.
              </p>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link href="/contacto?servicio=onlyfans" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-full hover:shadow-glow transition-all duration-300">
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
