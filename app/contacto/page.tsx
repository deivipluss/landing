"use client";
import React, { useState } from "react";
import { 
  FaCogs, 
  FaBrain, 
  FaRocket,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaBehance,
  FaPinterest,
  FaSpotify
} from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { 
    href: "/", 
    icon: <FaCogs className="transition-transform duration-300 group-hover:rotate-180" />, 
    label: "Home" 
  },
  { 
    href: "#solutions", 
    icon: <FaBrain className="transition-transform duration-300 group-hover:scale-110" />, 
    label: "Soluciones" 
  },
  { 
    href: "/novedades-tech", 
    icon: <FaRocket className="transition-transform duration-300 group-hover:scale-110" />, 
    label: "Tech News" 
  },
  { 
    href: "/contacto", 
    icon: <FaWhatsapp className="transition-transform duration-300 group-hover:rotate-12" />, 
    label: "Contacto" 
  },
];

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
    console.log('Formulario enviado:', formState);
  };

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden relative">
      <header className="flex justify-center py-6 mt-8 space-x-6 bg-[#1A1A2E]/80 backdrop-blur-lg shadow-glow rounded-full w-[90%] max-w-3xl mx-auto border border-[#4A90E2]/20">
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href}
            className="group flex flex-col items-center cursor-pointer"
          >
            <div className={`
              text-2xl mx-3
              text-[#FF5C5C]
              group-hover:text-[#4A90E2] transition-all duration-300
            `}>
              {item.icon}
            </div>
            <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors duration-300">
              {item.label}
            </span>
          </Link>
        ))}
      </header>

      <main className="flex-grow flex justify-center items-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-[700px] bg-[#1A1A2E] p-8 rounded-lg shadow-glow"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nombre</label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                className="mt-1 p-3 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Correo Electrónico</label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                className="mt-1 p-3 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensaje</label>
              <textarea 
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                className="mt-1 p-3 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                rows={5}
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#4A90E2] text-white p-3 rounded-md shadow-lg hover:bg-blue-600 transition-all duration-300"
            >
              Enviar
            </motion.button>
          </form>
        </motion.div>
      </main>

      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. Todos los derechos reservados.
      </footer>

      <style jsx global>{`
        .drop-shadow-glow {
          text-shadow: 0 0 15px rgba(74, 144, 226, 0.5);
        }

        .shadow-glow {
          box-shadow: 0 0 25px rgba(74, 144, 226, 0.3);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
