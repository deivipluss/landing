// app/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.h1
        className="text-6xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenido a <span className="text-yellow-300">Deivis</span>
      </motion.h1>
    </div>
  );
};

export default LandingPage;
