
"use client";
import Footer from "@/components/Footer";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CreatorMetricsChart } from './CreatorMetricsChart';
import { creatorMetrics, testimonials, platformFeatures, faqData, blogPosts } from './data';
import { FaWhatsapp, FaArrowUp, FaBlog, FaUserTie, FaCogs, FaUsers, FaChartLine } from 'react-icons/fa';
import { FiHelpCircle } from 'react-icons/fi';
import Link from 'next/link';
import HomeNavigation from '@/components/HomeNavigation';
import SidebarNavigation from '@/components/SidebarNavigation';

import ScrollToTopButton from '@/components/ScrollToTopButton';
export default function RedesMembresia() {
  const [activeSection, setActiveSection] = useState("overview");
  const { scrollY, scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Referencias para las secciones
  const overviewRef = useRef<HTMLElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  // Función para desplazar hacia la sección seleccionada
  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  useEffect(() => {
    return scrollY.onChange(() => {
      // Actualizar sección activa basado en el scroll
      const sections = [
        { ref: overviewRef, id: "overview" },
        { ref: metricsRef, id: "metrics" },
        { ref: testimonialsRef, id: "testimonials" },
        { ref: featuresRef, id: "features" },
        { ref: faqRef, id: "faq" },
        { ref: blogRef, id: "blog" }
      ];

      const currentSection = sections.find(section => {
        if (section.ref.current) {
          const { top, bottom } = section.ref.current.getBoundingClientRect();
          return top <= 100 && bottom >= 100;
        }
        return false;
      });

      if (currentSection) setActiveSection(currentSection.id);
    });
  }, [scrollY]);

  // ...existing code...

  // Menú lateral personalizado (máximo 5 íconos + WhatsApp)
  const sidebarMenu = [
    { id: 'overview', label: 'Visión General', icon: <FaUserTie /> },
    { id: 'metrics', label: 'Métricas', icon: <FaChartLine /> },
    { id: 'testimonials', label: 'Testimonios', icon: <FaUsers /> },
    { id: 'faq', label: 'FAQ', icon: <FiHelpCircle /> },
    { id: 'blog', label: 'Blog', icon: <FaBlog /> }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1A1A2E] flex flex-col overflow-hidden">
      <SidebarNavigation
        menu={sidebarMenu}
        activeSection={activeSection}
        setActiveSection={scrollToSection}
      />
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative md:ml-28 lg:ml-40">
        <HomeNavigation />
        {/* Hero Section */}
        <section ref={overviewRef} id="overview" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-6"
          >
            Potencia tu Presencia Digital
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Maximiza tus ingresos y construye una comunidad leal con nuestro equipo de expertos
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform"
          >
            Comienza tu Transformación
          </motion.button>
        </div>
      </section>

      {/* Métricas Section */}
      <section ref={metricsRef} id="metrics" className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Resultados que Hablan por Sí Mismos
          </h2>
          <CreatorMetricsChart data={creatorMetrics} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Historias de Éxito
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#1A1A2E] p-6 rounded-xl"
              >
                <div className="mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-white text-center">{testimonial.name}</h3>
                  <p className="text-purple-400 text-center">{testimonial.platform}</p>
                </div>
                <p className="text-2xl font-bold text-pink-500 text-center mb-2">{testimonial.income}</p>
                <p className="text-green-400 text-center mb-4">+{testimonial.growth} crecimiento</p>
                <p className="text-gray-400 text-center italic">&quot;{testimonial.quote}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section ref={featuresRef} id="features" className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Maximiza tu Presencia en Cada Plataforma
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformFeatures.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-b from-purple-900/50 to-pink-900/50 p-6 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{platform.platform}</h3>
                <ul className="space-y-3">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="text-pink-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A2E] p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section ref={blogRef} id="blog" className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Blog y Recursos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-pink-500 mb-2">{post.date}</p>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400">{post.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Lista para Llevar tu Contenido al Siguiente Nivel?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Únete a nuestra red de creadoras exitosas y transforma tu presencia digital
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform">
            Agenda una Consulta Gratuita
          </button>
        </div>
      </section>



      {/* Footer */}
      <Footer />
      <ScrollToTopButton />
      </div>
    </div>
  );
}
