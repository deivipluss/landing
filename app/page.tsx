"use client";

import { motion } from 'framer-motion';
import { FaWhatsapp, FaTools } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      {/* Centered Content Container */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">Hola, soy Deivis</h1>
        <p className="text-lg text-gray-600">
          Ingeniero de sistemas especializado en transformación digital y desarrollo de negocios. Listo para llevar tu empresa al siguiente nivel.
        </p>

        <div className="flex flex-col space-y-4">
          {/* "Mis Servicios" Button */}
          <motion.button
            className="flex items-center justify-center space-x-2 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaTools className="text-lg" />
            <span>Mis Servicios</span>
          </motion.button>

          {/* "Contacta Conmigo" Button */}
          <motion.button
            className="flex items-center justify-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaWhatsapp className="text-lg" />
            <span>Contacta conmigo</span>
          </motion.button>
        </div>
      </div>

      {/* Floating Circles for Background Styling */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-blue-700"
            style={{
              width: `${Math.random() * 50 + 30}px`,
              height: `${Math.random() * 50 + 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              translateX: [0, Math.random() > 0.5 ? 20 : -20],
              translateY: [0, Math.random() > 0.5 ? 20 : -20],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-200 text-gray-600 py-6 text-center mt-auto">
        <p>© 2024 Deivis Contreras - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default HomePage;
