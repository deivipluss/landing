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
    }, currentText === 2 ? 5000 : 3000); // Mantener el tercer texto por 5 segundos

    return () => clearInterval(timer);
  }, [currentText]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-blue-300 overflow-hidden">
      <div className="absolute inset-0">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0">
          <path fill="rgba(255, 255, 255, 0.1)" d="M0,192L30,186.7C60,181,120,171,180,160C240,149,300,139,360,154.7C420,171,480,213,540,202.7C600,192,660,128,720,128C780,128,840,192,900,213.3C960,235,1020,213,1080,197.3C1140,181,1200,171,1260,160C1320,149,1380,139,1410,134.7L1440,130L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"></path>
        </svg>
      </div>
      
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

      {/* Elementos flotantes en el fondo */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="absolute w-48 h-48 bg-blue-200 rounded-full opacity-30 animate-bounce" style={{ top: '20%', left: '15%' }}></div>
        <div className="absolute w-32 h-32 bg-blue-400 rounded-full opacity-40 animate-bounce" style={{ bottom: '10%', right: '10%' }}></div>
        <div className="absolute w-64 h-64 bg-blue-300 rounded-full opacity-20 animate-bounce" style={{ top: '60%', right: '30%' }}></div>
        <div className="absolute w-32 h-32 bg-blue-500 rounded-full opacity-50 animate-bounce" style={{ top: '80%', left: '50%' }}></div>
        <div className="absolute w-24 h-24 bg-blue-600 rounded-full opacity-30 animate-bounce" style={{ top: '30%', left: '70%' }}></div>
      </div>
    </div>
  );
};

export default HomePage;
