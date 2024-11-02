// app/page.tsx
import React from 'react';
import { motion } from 'framer-motion';  // Asegúrate de que esta línea esté presente

const LandingPage = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Encabezado */}
      <header className="fixed w-full z-10 top-0 bg-blue-600 text-white shadow-md p-4">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold tracking-wide">DEIVIS</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="hover:text-gray-300">Servicios</a></li>
              <li><a href="#testimonials" className="hover:text-gray-300">Testimonios</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sección Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white text-center px-4">
        <motion.h2 
          className="text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transformación Digital y Marketing
        </motion.h2>
        <motion.p 
          className="mt-4 text-lg md:text-2xl max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Impulsa tu negocio al siguiente nivel con estrategias efectivas.
        </motion.p>
        <motion.a 
          href="#contact" 
          className="mt-5 px-8 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Contáctame
        </motion.a>
      </section>

      {/* Servicios */}
      <section id="services" className="p-10 text-center bg-gray-100">
        <motion.h3 
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Servicios Ofrecidos
        </motion.h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Consultoría Digital", description: "Asesoría personalizada para tu transformación digital." },
            { title: "Marketing en Internet", description: "Estrategias efectivas para captar y retener clientes." },
            { title: "Comunicación Efectiva", description: "Desarrollamos tu presencia digital y comunicación interna." }
          ].map((service, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h4 className="text-xl font-semibold">{service.title}</h4>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonials" className="p-10 bg-gray-200 text-center">
        <h3 className="text-3xl md:text-4xl font-bold">Testimonios</h3>
        <motion.p 
          className="mt-4 max-w-xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          &quot;Deivis transformó completamente nuestra estrategia digital. ¡Altamente recomendado!&quot;
        </motion.p>
        <p className="text-gray-700 mt-2">- Cliente Satisfecho</p>
      </section>

      {/* Pie de Página */}
      <footer id="contact" className="p-10 bg-blue-600 text-white text-center">
        <motion.h3 
          className="text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Contacto
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Email: deivis@ejemplo.com
        </motion.p>
        <p>Redes Sociales: [Links]</p>
      </footer>
    </div>
  );
};

export default LandingPage;
