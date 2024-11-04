"use client"; // Asegúrate de que esta línea esté al inicio del archivo

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 3000); // Cambia el texto después de 3 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.h1
        className="text-4xl font-bold text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hola, soy <span className="text-red-500">Deivis</span>
      </motion.h1>
      
      {showButtons && (
        <motion.div
          className="flex flex-col space-y-4 mt-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Opción 1
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Opción 2
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Opción 3
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;
