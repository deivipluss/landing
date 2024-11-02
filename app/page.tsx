import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Bienvenido a DEIVIS
      </motion.h2>
      {/* Otros elementos y secciones */}
    </div>
  );
};

export const getStaticProps = async () => {
  return { props: {} };
};

export default LandingPage;

