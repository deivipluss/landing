// app/page.tsx

// Indicar que esta página debe ser dinámica
export const dynamic = 'force-dynamic';

import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Encabezado */}
      <header className="flex justify-between items-center p-5 bg-blue-600 text-white">
        <h1 className="text-2xl font-bold">DEIVIS</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#services">Servicios</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          Transformación Digital y Marketing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-lg"
        >
          Impulsa tu negocio al siguiente nivel con estrategias efectivas.
        </motion.p>
        <a href="#contact" className="mt-5 px-4 py-2 bg-white text-blue-600 rounded-lg">Contáctame</a>
      </section>

      {/* Servicios */}
      <section id="services" className="p-10 text-center">
        <h3 className="text-3xl font-bold">Servicios Ofrecidos</h3>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold">Consultoría Digital</h4>
            <p>Asesoría personalizada para tu transformación digital.</p>
          </div>
          <div className="p-5 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold">Marketing en Internet</h4>
            <p>Estrategias efectivas para captar y retener clientes.</p>
          </div>
          <div className="p-5 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold">Comunicación Efectiva</h4>
            <p>Desarrollamos tu presencia digital y comunicación interna.</p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonials" className="p-10 bg-gray-200 text-center">
        <h3 className="text-3xl font-bold">Testimonios</h3>
        <p className="mt-4">&quot;Deivis transformó completamente nuestra estrategia digital. ¡Altamente recomendado!&quot;</p>
        <p>- Cliente Satisfecho</p>
      </section>

      {/* Pie de Página */}
      <footer id="contact" className="p-5 bg-blue-600 text-white text-center">
        <h3 className="text-lg">Contacto</h3>
        <p>Email: deivis@ejemplo.com</p>
        <p>Redes Sociales: [Links]</p>
      </footer>
    </div>
  );
};

export default LandingPage;
