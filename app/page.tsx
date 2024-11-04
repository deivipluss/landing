"use client"; // Asegúrate de que esta línea esté al inicio del archivo

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Hola, soy Deivis",
    "Estoy listo para ayudarte",
    "¿Qué estás buscando?"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000); // Cambia el texto cada 3 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-blue-300">
      <motion.h1
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {texts[currentText]}
      </motion.h1>
      
      <motion.div
        className="flex flex-col space-y-4 mt-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Opción 1
        </motion.button>
        <motion.button
          className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Opción 2
        </motion.button>
        <motion.button
          className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Opción 3
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HomePage;
