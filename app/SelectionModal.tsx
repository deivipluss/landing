"use client";
import React, { useState } from "react";
import { FaBuilding, FaUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

const SelectionModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-[#1A1A2E] p-8 rounded-lg shadow-glow text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">¿Quién eres?</h2>
            <div className="flex space-x-4 justify-center">
              <Link href="/soluciones">
                <motion.button 
                  className="bg-[#4A90E2] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                >
                  <FaBuilding className="inline-block mr-2" /> Empresa
                </motion.button>
              </Link>
              <Link href="/solucionesFreelance">
                <motion.button 
                  className="bg-[#FF5C5C] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                >
                  <FaUser className="inline-block mr-2" /> Individuo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SelectionModal;
