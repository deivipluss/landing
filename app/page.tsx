"use client";
import React, { useState, useEffect } from "react";
import { 
  FaCogs, 
  FaBrain, 
  FaRocket,
  FaUserTie,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaBehance,
  FaPinterest,
  FaSpotify,
  FaArrowUp
} from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// ... [previous code remains the same until the solutions section]

const App: React.FC = () => {
  // ... [previous code remains the same]

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden relative">
      {/* ... [previous code remains the same] */}

      <main className="flex-grow flex justify-center items-center p-4 md:p-8">
        {/* ... [previous code remains the same] */}
        
        <motion.div 
          id="solutions"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-[1000px] mt-16 px-4 md:px-0 highlight"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <Link href="/soluciones/empresas" className="w-full md:w-1/2">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#4A90E2] to-[#00F5D4] text-white p-6 rounded-xl relative shadow-glow h-[240px] flex items-center justify-center w-full overflow-hidden"
              >
                <div className="flex flex-col items-center justify-center text-center space-y-4 z-10">
                  <FaRocket className="text-4xl opacity-80 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-xl font-bold tracking-wide">EMPRESAS PARA EMPRESAS</h3>
                  <div className="bg-white/20 px-6 py-2 rounded-full text-sm hover:bg-white/30 transition-all">
                    Descubrir más
                  </div>
                </div>
              </motion.div>
            </Link>
            <Link href="/soluciones/individuos" className="w-full md:w-1/2">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#FF5C5C] to-[#FF914D] text-white p-6 rounded-xl relative shadow-glow h-[240px] flex items-center justify-center w-full overflow-hidden"
              >
                <div className="flex flex-col items-center justify-center text-center space-y-4 z-10">
                  <FaUserTie className="text-4xl opacity-80 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-xl font-bold tracking-wide">SOLUCIONES PARA INDIVIDUOS</h3>
                  <div className="bg-white/20 px-6 py-2 rounded-full text-sm hover:bg-white/30 transition-all">
                    Descubrir más
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </main>

      {/* ... [rest of the previous code remains the same] */}
    </div>
  );
};

export default App;