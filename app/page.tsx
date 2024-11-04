// app/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Typical from 'react-typical';

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 text-center p-5">
      {/* Texto Principal con Efecto de Tipeo */}
      <motion.h1
        className="text-5xl font-bold text-blue-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-blue-800">Hola, soy Deivis </span>
        <Typical
          steps={[
            ", y estoy listo para ayudarte",
            3000,
            " ¿Qué deseas hacer?",
            3000,
          ]}
          loop={Infinity}
          wrapper="span"
          className="text-gray-700"
        />
      </motion.h1>

      {/* Botones de Opciones */}
      <div className="flex space-x-4 mt-8">
        {["Estrategia Digital", "Marketing Online", "Transformación Digital"].map((buttonText, idx) => (
          <motion.button
            key={idx}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.5 }}
          >
            {buttonText}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
