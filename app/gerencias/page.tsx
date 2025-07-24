"use client";
import React, { useEffect, useState, useRef } from "react";
import { 
  FaBrain,
  FaChartLine, 
  FaUserTie, 
  FaCogs, 
  FaRocket,
  FaLightbulb,
  FaMicrochip,
  FaWhatsapp,
  FaBlog
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function GerenciasPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [showContactForm, setShowContactForm] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  const overviewRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const innovationRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const refs = [
        { id: "overview", ref: overviewRef },
        { id: "services", ref: servicesRef },
        { id: "innovation", ref: innovationRef },
        { id: "blog", ref: blogRef }
      ];
      
      for (const { id, ref } of refs) {
        if (ref.current) {
          const element = ref.current;
          const { top, bottom } = element.getBoundingClientRect();
          
          if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ServiceCard = ({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center p-6 bg-[#1A1A2E]/50 rounded-xl border border-blue-500/10 hover:border-blue-500/30 hover:bg-[#1A1A2E]/80 transition-all duration-300"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#00F5D4] flex items-center justify-center text-white text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );

  const BlogPost = ({ title, date, excerpt }: { title: string, date: string, excerpt: string }) => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-[#1A1A2E]/50 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-blue-400 text-sm mb-3">{date}</p>
      <p className="text-gray-300 text-sm">{excerpt}</p>
      <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium">
        Leer más →
      </button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Floating navigation for mobile */}
        <div className="fixed bottom-8 left-0 right-0 z-40 flex justify-center md:hidden">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="px-4 py-3 bg-[#1A1A2E]/90 backdrop-blur-lg rounded-full flex gap-3 border border-blue-500/20 shadow-lg"
          >
            {[
              { id: "overview", icon: <FaUserTie /> },
              { id: "services", icon: <FaCogs /> },
              { id: "innovation", icon: <FaLightbulb /> },
              { id: "blog", icon: <FaBlog /> }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-2 rounded-full ${activeSection === item.id ? "bg-[#4A90E2] text-white" : "text-gray-400"}`}
              >
                {item.icon}
              </button>
            ))}
          </motion.div>
        </div>
        
        {/* Desktop sidebar navigation */}
        <div className="hidden md:block fixed left-4 lg:left-10 top-1/2 transform -translate-y-1/2 z-40">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="py-6 px-3 bg-[#1A1A2E]/60 backdrop-blur-md rounded-xl flex flex-col gap-6 border border-blue-500/20"
          >
            {[
              { id: "overview", label: "Visión General", icon: <FaUserTie /> },
              { id: "services", label: "Servicios", icon: <FaCogs /> },
              { id: "innovation", label: "Innovación", icon: <FaLightbulb /> },
              { id: "blog", label: "Blog", icon: <FaBlog /> }
            ].map(item => (
              <div key={item.id} className="relative group">
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className={`p-3 rounded-lg ${activeSection === item.id ? "bg-[#4A90E2] text-white" : "text-gray-400 hover:text-white"}`}
                >
                  {item.icon}
                </button>
                <div className="absolute left-full ml-2 px-2 py-1 bg-[#1A1A2E] text-white text-xs whitespace-nowrap rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.label}
                </div>
                {activeSection === item.id && (
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-[#4A90E2]"></div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero section */}
        <motion.section
          ref={overviewRef}
          id="overview"
          className="relative py-12 md:py-20 mb-16 md:mb-24"
          style={{ opacity, scale }}
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A90E2]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-[#00F5D4]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <p className="text-[#4A90E2] text-sm mb-3 font-medium">SERVICIO EJECUTIVO</p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Gerencias <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#00F5D4]">360°</span>
                  </h1>
                  <p className="text-lg text-gray-300">
                    Estructuro y proveo servicios gerenciales especializados que impulsan la innovación, 
                    optimizan la comunicación y potencian el desarrollo tecnológico de tu empresa.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-[#4A90E2] to-[#00F5D4] text-white rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <FaWhatsapp className="text-xl" />
                    Contactar ahora
                  </button>
                  <Link href="#services"
                    className="px-6 py-3 border border-[#4A90E2]/30 text-white rounded-full hover:bg-[#4A90E2]/10 transition-all duration-300"
                  >
                    Explorar servicios
                  </Link>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square relative">
                  <Image
                    src="/imagenes/gerencias360.jpg"
                    alt="Gerencias 360°"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Servicios Gerenciales */}
        <section
          ref={servicesRef}
          id="services"
          className="py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Servicios Gerenciales Especializados
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Ofrezco soluciones integrales para las áreas más críticas de tu empresa
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                icon={<FaBrain />}
                title="Gerencia de Innovación"
                description="Impulso la cultura de innovación y el desarrollo de nuevos productos y servicios alineados con las tendencias del mercado."
              />
              <ServiceCard
                icon={<FaMicrochip />}
                title="Gerencia de Tecnología"
                description="Gestiono la infraestructura tecnológica y lidero la implementación de soluciones digitales para optimizar operaciones."
              />
              <ServiceCard
                icon={<FaRocket />}
                title="Gerencia de Comunicaciones"
                description="Desarrollo estrategias de comunicación efectivas para mejorar la conexión con clientes y fortalecer la marca."
              />
            </div>
          </div>
        </section>

        {/* Sección de Innovación */}
        <section
          ref={innovationRef}
          id="innovation"
          className="py-16 md:py-24 bg-gradient-to-b from-[#1A1A2E]/50 to-transparent"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Transformación Digital Integrada
                </h2>
                <p className="text-gray-300 mb-6">
                  La transformación digital es un componente esencial de nuestros servicios gerenciales,
                  integrada de manera natural en cada área para garantizar la evolución constante de tu empresa.
                </p>
                <ul className="space-y-4">
                  {[
                    "Automatización de procesos empresariales",
                    "Implementación de tecnologías emergentes",
                    "Desarrollo de estrategias digitales",
                    "Optimización de la experiencia del cliente"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <FaChartLine className="text-[#4A90E2]" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/imagenes/innovation.jpg"
                  alt="Innovación empresarial"
                  width={500}
                  height={500}
                  className="rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Section */}
        <section
          ref={blogRef}
          id="blog"
          className="py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Blog de Negocios
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Últimas tendencias y consejos para el éxito empresarial
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <BlogPost
                title="5 Estrategias de Innovación para 2025"
                date="24 Julio, 2025"
                excerpt="Descubre las tendencias más importantes en innovación empresarial y cómo implementarlas en tu organización."
              />
              <BlogPost
                title="El Futuro del Liderazgo Digital"
                date="22 Julio, 2025"
                excerpt="Análisis de las habilidades y competencias necesarias para liderar empresas en la era digital."
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mt-8"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#4A90E2] hover:text-[#00F5D4] transition-colors duration-300"
              >
                Ver todos los artículos
                <FaChartLine className="text-sm" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
