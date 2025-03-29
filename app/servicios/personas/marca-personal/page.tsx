"use client";
import React, { useState, useRef } from "react";
import { 
  FaUserAlt, 
  FaLightbulb, 
  FaPenFancy, 
  FaCamera, 
  FaBullhorn, 
  FaArrowRight, 
  FaCheck, 
  FaPalette, 
  FaRocket 
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function MarcaPersonalPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Servicios de Marca Personal
  const serviciosMarcaPersonal = [
    {
      title: "Identidad Visual",
      description: "Diseño una identidad visual única que refleje tu esencia y te haga destacar en cualquier plataforma.",
      icon: <FaPalette className="text-xl" />,
      features: [
        "Diseño de logotipo personal",
        "Paleta de colores personalizada",
        "Tipografía distintiva",
        "Guía de estilo visual"
      ]
    },
    {
      title: "Estrategia de Contenido",
      description: "Creo un plan de contenido estratégico que conecte con tu audiencia y posicione tu marca como referente.",
      icon: <FaPenFancy className="text-xl" />,
      features: [
        "Calendario de contenido",
        "Mensajes clave",
        "Estrategia de storytelling",
        "Optimización para redes sociales"
      ]
    },
    {
      title: "Fotografía y Video",
      description: "Producción de contenido visual profesional que transmita confianza y autenticidad.",
      icon: <FaCamera className="text-xl" />,
      features: [
        "Sesión fotográfica profesional",
        "Producción de video corto",
        "Edición de alta calidad",
        "Optimización para plataformas digitales"
      ]
    },
    {
      title: "Presencia Digital",
      description: "Te ayudo a construir una presencia digital sólida y coherente en todas tus plataformas.",
      icon: <FaBullhorn className="text-xl" />,
      features: [
        "Optimización de perfiles sociales",
        "Estrategia de LinkedIn",
        "Creación de portafolio online",
        "SEO personal"
      ]
    }
  ];

  // Beneficios de trabajar tu Marca Personal
  const beneficios = [
    {
      title: "Diferenciación Clara",
      description: "Destaca en tu industria con una marca personal que refleje tu autenticidad y valores.",
      icon: <FaLightbulb />
    },
    {
      title: "Mayor Credibilidad",
      description: "Construye confianza y autoridad en tu campo con una presencia profesional y consistente.",
      icon: <FaRocket />
    },
    {
      title: "Oportunidades de Crecimiento",
      description: "Atrae nuevas oportunidades laborales, colaboraciones y clientes gracias a tu marca personal.",
      icon: <FaUserAlt />
    },
    {
      title: "Conexión con tu Audiencia",
      description: "Crea relaciones significativas con tu audiencia al comunicar tu historia de manera auténtica.",
      icon: <FaPenFancy />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-pink-600/5 filter blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-purple-600/5 filter blur-[120px] pointer-events-none"></div>
        
        {/* Sección Hero */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 text-sm font-medium mb-4 border border-pink-500/30">
                  MARCA PERSONAL
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Construyo tu <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">marca personal</span> para que brilles en tu industria
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Te ayudo a destacar y conectar con tu audiencia a través de una marca personal auténtica, profesional y memorable.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-glow-pink transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Impulsa tu marca ahora</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-pink-500 text-pink-400 rounded-lg hover:bg-pink-500/10 transition-all duration-300"
                  >
                    Agendar consulta gratuita
                  </Link>
                </div>
              </motion.div>
              
              {/* Imagen de Marca Personal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, scale: isHeaderInView ? 1 : 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="relative h-[400px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl"></div>
                  <Image
                    src="/imagenes/marca-personal-hero.webp"
                    alt="Marca personal profesional"
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-transparent to-transparent opacity-60"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Sección de Servicios */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 text-sm font-medium mb-3">
                SERVICIOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Servicios diseñados para <span className="italic">potenciar tu marca</span>
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Desde la creación de tu identidad visual hasta la estrategia de contenido, te ofrezco todo lo necesario para construir una marca personal sólida y auténtica.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {serviciosMarcaPersonal.map((servicio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-600 to-purple-700 flex items-center justify-center text-white text-xl mb-5">
                    {servicio.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{servicio.title}</h3>
                  
                  <p className="text-gray-300">{servicio.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sección de Beneficios */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 text-sm font-medium mb-3">
                BENEFICIOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Por qué trabajar tu <span className="italic">marca personal</span>?
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Una marca personal bien trabajada no solo te diferencia, sino que también abre puertas a nuevas oportunidades y fortalece tu conexión con tu audiencia.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-600 to-purple-700 flex items-center justify-center text-white text-xl mb-5">
                    {beneficio.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{beneficio.title}</h3>
                  
                  <p className="text-gray-300">{beneficio.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sección CTA */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl border border-pink-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-700/20"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Es hora de destacar con tu <span className="italic">marca personal</span>
                    </h2>
                    <p className="text-gray-300 mb-6">
                      No dejes que tu talento pase desapercibido. Construyamos juntos una marca personal que te haga brillar y conecte con tu audiencia.
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-glow-pink transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>Comenzar ahora</span>
                      <FaArrowRight />
                    </button>
                    <Link
                      href="https://calendly.com/deivipluss/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Agendar consulta gratuita
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. ¡Todos los derechos reservados!
      </footer>
    
      <style jsx global>{`
        .shadow-glow-pink {
          box-shadow: 0 0 25px rgba(236, 72, 153, 0.4);
        }
      `}</style>
    </div>
  );
}
