"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeNavigation from "@/components/HomeNavigation";
import SidebarNavigation from "@/components/SidebarNavigation";
import { FiBarChart2, FiUsers, FiSettings, FiBookOpen } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import Footer from "@/components/Footer";
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { CreatorMetricsChart } from "../redes-membresia/CreatorMetricsChart";
import Link from "next/link";
import Image from "next/image";
import { FaBullhorn, FaChartLine, FaPhotoVideo, FaGlobe, FaSearchDollar, FaFileAlt, FaRocket, FaCheckCircle, FaDownload, FaCalendarCheck } from "react-icons/fa";

// Métricas de ejemplo para la sección de resultados
const contentMetrics = {
  alcance: [
    { year: 2023, value: 12000 },
    { year: 2024, value: 60000 },
    { year: 2025, value: 130000 },
  ],
  seguidores: [
    { year: 2023, value: 2000 },
    { year: 2024, value: 12000 },
    { year: 2025, value: 30000 },
  ],
  conversiones: [
    { year: 2023, value: 8 },
    { year: 2024, value: 35 },
    { year: 2025, value: 75 },
  ],
};

const services = [
  {
    title: "Consultoría de Estrategia",
    icon: <FaBullhorn size={24} className="text-green-500" />,
    features: [
      "Auditoría de contenidos y canales",
      "Planificación editorial personalizada",
      "Análisis de competencia y tendencias",
    ],
  },
  {
    title: "Producción Multimedia",
    icon: <FaPhotoVideo size={24} className="text-green-500" />,
    features: [
      "Copywriting y storytelling de marca",
      "Diseño gráfico, animación y video",
      "Fotografía y edición profesional",
    ],
  },
  {
    title: "Distribución Multicanal",
    icon: <FaGlobe size={24} className="text-green-500" />,
    features: [
      "Publicación programada en plataformas",
      "Gestión de comunidad y engagement",
      "Adaptación de formatos por canal",
    ],
  },
  {
    title: "SEO & Data Analytics",
    icon: <FaSearchDollar size={24} className="text-green-500" />,
    features: [
      "Optimización para motores de búsqueda",
      "Monitoreo de métricas e informes",
      "Ajustes basados en datos de rendimiento",
    ],
  },
];

const processSteps = [
  {
    id: 1,
    title: "Diagnóstico y Auditoría",
    description: "Evaluamos tu presencia actual, audiencia, competencia y objetivos para crear una estrategia personalizada.",
    icon: <FaFileAlt className="text-green-500" size={28} />
  },
  {
    id: 2,
    title: "Creación e Implementación",
    description: "Desarrollamos y ejecutamos tu estrategia de contenidos con creatividad, consistencia y optimización continua.",
    icon: <FaRocket className="text-green-500" size={28} />
  },
  {
    id: 3,
    title: "Medición y Optimización",
    description: "Analizamos resultados, identificamos oportunidades y refinamos la estrategia para maximizar el ROI.",
    icon: <FaChartLine className="text-green-500" size={28} />
  }
];

const faqData = [
  {
    question: "¿Qué plataformas gestionan?",
    answer:
      "Trabajamos con Facebook, Instagram, LinkedIn, TikTok, YouTube y más. Adaptamos la estrategia a cada canal y objetivo de tu marca.",
  },
  {
    question: "¿Cómo se mide el éxito?",
    answer:
      "Analizamos métricas de alcance, engagement, leads y conversiones. Recibes reportes periódicos y asesoría para mejorar resultados.",
  },
  {
    question: "¿Quién produce el contenido?",
    answer:
      "Nuestro equipo multidisciplinario: copywriters, diseñadores, animadores, editores, fotógrafos y filmmakers.",
  },
  {
    question: "¿Pueden gestionar campañas pagadas?",
    answer:
      "Sí, diseñamos y optimizamos campañas en Meta, Google, LinkedIn y más, maximizando tu inversión.",
  },
];

const clients = [
  "/imagenes/logo1.png",
  "/imagenes/logo2.png",
  "/imagenes/logo3.png",
  "/imagenes/logo4.png",
  "/imagenes/logo5.png",
];

const testimonials = [
  {
    name: "María Rodríguez",
    company: "E-commerce Moda",
    text: "Incrementamos nuestras ventas en un 45% gracias a la estrategia de contenidos que implementaron. La consistencia y calidad hicieron toda la diferencia.",
    image: "/imagenes/testimonial1.jpg"
  },
  {
    name: "Carlos Méndez",
    company: "SaaS Startup",
    text: "Pasamos de 500 a 10,000 seguidores en 6 meses y triplicamos nuestras conversiones. El equipo realmente entiende cómo crear contenido que conecta y convierte.",
    image: "/imagenes/testimonial2.jpg"
  }
];

export default function ContenidosPage() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.2]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const propuestaRef = useRef<HTMLDivElement>(null);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const metricasRef = useRef<HTMLDivElement>(null);
  const procesoRef = useRef<HTMLDivElement>(null);
  const testimoniosRef = useRef<HTMLDivElement>(null);
  const leadMagnetRef = useRef<HTMLDivElement>(null);
  const contactoRef = useRef<HTMLDivElement>(null);
  
  // Función para desplazar a la sección seleccionada
  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", ref: heroRef },
        { id: "propuesta", ref: propuestaRef },
        { id: "servicios", ref: serviciosRef },
        { id: "metricas", ref: metricasRef },
        { id: "proceso", ref: procesoRef },
        { id: "testimonios", ref: testimoniosRef },
        { id: "leadMagnet", ref: leadMagnetRef },
        { id: "contacto", ref: contactoRef },
      ];
      
      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menú lateral personalizado
  const sidebarMenu = [
    { id: "hero", label: "Inicio", icon: <FiBarChart2 size={20} /> },
    { id: "propuesta", label: "Propuesta", icon: <FiUsers size={20} /> },
    { id: "servicios", label: "Servicios", icon: <FiSettings size={20} /> },
    { id: "proceso", label: "Proceso", icon: <FiBookOpen size={20} /> },
    { id: "contacto", label: "Contacto", icon: <FiHelpCircle size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <SidebarNavigation
        menu={sidebarMenu}
        activeSection={activeSection}
        setActiveSection={scrollToSection}
      />
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative md:ml-28 lg:ml-40">
        <HomeNavigation />
        
        {/* 1. Hero / Encabezado Principal */}
        <section
          id="hero"
          ref={heroRef}
          className="relative min-h-[80vh] flex flex-col justify-center items-center py-16 overflow-hidden"
        >
          <motion.div 
            style={{ opacity, scale }}
            className="max-w-4xl mx-auto text-center z-10"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#00F5D4] to-[#4A90E2] text-transparent bg-clip-text">
              Gestión de Contenidos Estratégica 360°
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Transformamos tu presencia digital con contenido relevante, datos precisos e innovación constante que genera resultados medibles.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="px-6 py-3 bg-gradient-to-r from-[#00F5D4] to-[#4A90E2] text-white font-medium rounded-full hover:shadow-glow transition-all duration-300"
              >
                Comienza hoy
              </button>
              <button 
                onClick={() => scrollToSection('proceso')}
                className="px-6 py-3 border border-[#00F5D4] text-[#00F5D4] rounded-full hover:bg-[#00F5D4]/10 transition-all duration-300"
              >
                Ver proceso
              </button>
            </div>
          </motion.div>
          
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 z-0">
            <Image 
              src="/imagenes/contenidos-hero.jpg" 
              alt="Equipo editorial trabajando" 
              fill 
              className="object-cover"
            />
          </div>
        </section>
        
        {/* 2. Propuesta de Valor */}
        <section
          id="propuesta"
          ref={propuestaRef}
          className="py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Resolvemos tus mayores desafíos de contenido
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-red-500/20">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Problemas comunes</h3>
                <ul className="space-y-3">
                  {[
                    "Contenido inconsistente sin estrategia clara",
                    "Recursos desperdiciados sin retorno medible",
                    "Falta de cohesión entre canales y mensajes",
                    "Dificultad para destacar en mercados saturados"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-red-400 mt-1">✖</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-green-500/20">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Nuestra solución</h3>
                <ul className="space-y-3">
                  {[
                    "Estrategia editorial omnicanal cohesiva",
                    "Métricas claras y ROI demostrable",
                    "Contenido optimizado para SEO y conversión",
                    "Storytelling que conecta y diferencia tu marca"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-green-400 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* 3. Servicios Específicos */}
        <section
          id="servicios"
          ref={serviciosRef}
          className="py-16 md:py-24 bg-gradient-to-b from-[#1A1A2E]/30 to-transparent"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Servicios a tu medida
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-[#00F5D4]/30 hover:border-[#00F5D4] transition-all duration-300 bg-[#1A1A2E]/40 hover:bg-[#1A1A2E]/60"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 4. Métricas clave y resultados */}
        <section
          id="metricas"
          ref={metricasRef}
          className="py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              Resultados que hablan por sí mismos
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-gray-300">
              Analizamos y optimizamos cada acción para garantizar crecimiento orgánico, engagement real y retorno de inversión.
            </p>
            
            <div className="max-w-4xl mx-auto mb-16">
              <CreatorMetricsChart data={contentMetrics} />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { value: "+210%", label: "Aumento promedio en engagement" },
                { value: "-35%", label: "Reducción en costo por adquisición" },
                { value: "+65%", label: "Incremento en conversiones" }
              ].map((stat, i) => (
                <div key={i} className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-[#00F5D4]/20">
                  <p className="text-4xl font-bold text-[#00F5D4] mb-2">{stat.value}</p>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 5. Proceso de implementación */}
        <section
          id="proceso"
          ref={procesoRef}
          className="py-16 md:py-24 bg-gradient-to-b from-[#1A1A2E]/30 to-transparent"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Nuestro proceso
            </h2>
            
            <div className="relative">
              {/* Línea conectora */}
              <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00F5D4] to-transparent hidden md:block" />
              
              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                    <div className="flex-1">
                      <div className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-[#00F5D4]/30 h-full">
                        <h3 className="text-xl font-semibold mb-2 text-[#00F5D4] flex items-center gap-2">
                          {step.icon} {step.title}
                        </h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-16 flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#00F5D4] flex items-center justify-center text-[#1A1A2E] font-bold">
                        {step.id}
                      </div>
                    </div>
                    
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* 6. Señales de Confianza */}
        <section
          id="testimonios"
          ref={testimoniosRef}
          className="py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Marcas que confían en nosotros
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16">
              {clients.map((logo, i) => (
                <div key={i} className="w-24 h-24 bg-white/10 rounded-lg p-3 flex items-center justify-center">
                  <Image src={logo} alt={`Cliente ${i+1}`} width={80} height={80} className="opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-[#00F5D4]/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image src={testimonial.image} alt={testimonial.name} width={64} height={64} className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 7. Lead Magnet */}
        <section
          id="leadMagnet"
          ref={leadMagnetRef}
          className="py-16 md:py-24 bg-gradient-to-b from-[#1A1A2E]/30 to-transparent"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[#1A1A2E]/60 p-8 rounded-xl border border-[#00F5D4]/30">
              <FaFileAlt size={48} className="mx-auto text-[#00F5D4] mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Guía Gratuita: Estrategia de Contenidos 2025
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Descarga nuestra guía completa con las tendencias, herramientas y tácticas que están revolucionando el marketing de contenidos este año.
              </p>
              
              <form className="max-w-md mx-auto">
                <div className="flex flex-col md:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    className="px-4 py-3 bg-[#0D0C1D] border border-[#00F5D4]/30 rounded-full focus:outline-none focus:border-[#00F5D4] text-white flex-1"
                    required 
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-gradient-to-r from-[#00F5D4] to-[#4A90E2] text-white rounded-full hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaDownload /> Descargar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* 8. CTA Final + Formulario */}
        <section
          id="contacto"
          ref={contactoRef}
          className="py-16 md:py-24"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              ¿Listo para transformar tu contenido?
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-8 text-gray-300">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a crecer con contenido estratégico y creatividad.
            </p>
            
            <div className="bg-[#1A1A2E]/60 p-8 rounded-xl border border-[#00F5D4]/30">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                    <input 
                      type="text" 
                      id="nombre" 
                      className="w-full px-4 py-3 bg-[#0D0C1D] border border-[#00F5D4]/30 rounded-lg focus:outline-none focus:border-[#00F5D4] text-white"
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-[#0D0C1D] border border-[#00F5D4]/30 rounded-lg focus:outline-none focus:border-[#00F5D4] text-white"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-1">Empresa</label>
                  <input 
                    type="text" 
                    id="empresa" 
                    className="w-full px-4 py-3 bg-[#0D0C1D] border border-[#00F5D4]/30 rounded-lg focus:outline-none focus:border-[#00F5D4] text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-1">Mensaje</label>
                  <textarea 
                    id="mensaje" 
                    rows={4} 
                    className="w-full px-4 py-3 bg-[#0D0C1D] border border-[#00F5D4]/30 rounded-lg focus:outline-none focus:border-[#00F5D4] text-white"
                  ></textarea>
                </div>
                
                <div className="flex items-center justify-center">
                  <button 
                    type="submit" 
                    className="px-8 py-4 bg-gradient-to-r from-[#00F5D4] to-[#4A90E2] text-white rounded-full hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 text-lg font-medium"
                  >
                    <FaCalendarCheck /> Agenda tu consultoría gratuita
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}
