"use client";

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
    }, currentText === 2 ? 6000 : 4000); // Mantiene el último texto más tiempo

    return () => clearInterval(timer);
  }, [currentText]);

  const getRandomPosition = () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    return { x, y };
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-blue-300 overflow-hidden">
      <div className="absolute inset-0">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0">
          <path fill="rgba(255, 255, 255, 0.1)" d="M0,192L30,186.7C60,181,120,171,180,160C240,149,300,139,360,154.7C420,171,480,213,540,202.7C600,192,660,128,720,128C780,128,840,192,900,213.3C960,235,1020,213,1080,197.3C1140,181,1200,171,1260,160C1320,149,1380,139,1410,134.7L1440,130L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"></path>
        </svg>
      </div>

      {/* Círculo como imagen de perfil */}
      <motion.div className="w-24 h-24 rounded-full border-4 border-white bg-blue-800 absolute top-10 flex items-center justify-center">
        {/* Aquí puedes añadir una imagen de perfil si deseas */}
        <span className="text-3xl text-white">D</span>
      </motion.div>

      <motion.h1
        className="text-4xl font-bold text-white text-center md:text-5xl lg:text-6xl mt-20"
        key={currentText}  // Clave para identificar el texto animado
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }} // Ajustar duración y suavidad
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

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {Array.from({ length: 10 }).map((_, index) => {
          const { x, y } = getRandomPosition();
          const size = `${Math.random() * 50 + 20}px`;
          return (
            <motion.div
              key={index}
              className="absolute border-2 border-white"
              style={{
                width: size,
                height: size,
                borderRadius: '50%',
                top: `${y}%`,
                left: `${x}%`,
                opacity: 0.7,
              }}
              animate={{
                translateX: [0, Math.random() > 0.5 ? 20 : -20],
                translateY: [0, Math.random() > 0.5 ? 20 : -20],
              }}
              transition={{ duration: Math.random() * 5 + 2, repeat: Infinity, repeatType: "mirror" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
