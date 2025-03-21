"use client";

import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Container from "@/components/Container";

export default function NovedadesTechPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header decorativo */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 h-2"></div>
      
      {/* Navegación consistente */}
      <Navigation />
      
      <Container className="py-12 md:py-20">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500">
            Novedades Tecnológicas
          </h1>
          
          <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl p-6 md:p-8 mb-8 border border-gray-100 dark:border-slate-700">
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
              Aquí encontrarás las últimas novedades y tendencias del mundo tecnológico.
            </p>
            
            {/* Contenido de blog aquí */}
            <div className="space-y-8">
              {/* Ejemplo de artículo */}
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border-b border-gray-200 dark:border-gray-700 pb-8"
              >
                <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                  Inteligencia Artificial para Negocios: Transformando la Industria
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Publicado: {new Date().toLocaleDateString('es-ES')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  La Inteligencia Artificial está revolucionando la forma en que las empresas operan, 
                  desde la automatización de tareas rutinarias hasta el análisis predictivo para la toma de decisiones.
                </p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Leer más →
                </a>
              </motion.article>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Footer decorativo */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 h-1 mt-auto"></div>
    </main>
  );
}
