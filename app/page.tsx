// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [text, setText] = useState("Hola, soy Deivis y estoy listo para ayudarte");
  const texts = ["Hola, soy Deivis y estoy listo para ayudarte", "¿Qué deseas hacer?"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(texts[index]);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Cambia el texto cada 3 segundos
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-center p-5">
      {/* Texto Principal */}
      <motion.h1
        className="text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {text}
      </motion.h1>

      {/* Botones de Opciones */}
      <div className="flex space-x-4">
        {["Opción 1", "Opción 2", "Opción 3"].map((buttonText, idx) => (
          <motion.button
            key={idx}
            className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition-transform transform hover:scale-105"
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
