"use client";
import React, { useEffect, useState, useRef } from "react";
import { 
  FaRocket, 
  FaLaptopCode, 
  FaChartLine, 
  FaUsers, 
  FaCogs, 
  FaCloudUploadAlt,
  FaMobileAlt,
  FaWhatsapp
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function TransformacionDigitalPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [showContactForm, setShowContactForm] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  const overviewRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

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
        { id: "benefits", ref: benefitsRef },
        { id: "process", ref: processRef },
        { id: "success", ref: successRef }
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

  const ServiceFeature = ({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center p-5 bg-[#1A1A2E]/50 rounded-xl border border-blue-500/10 hover:border-blue-500/30 hover:bg-[#1A1A2E]/80 transition-all duration-300"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );

  const ProcessStep = ({ number, title, description }: { number: string, title: string, description: string }) => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="flex md:items-center gap-4 md:gap-6"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold text-blue-400 mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Floating navigation */}
        <div className="fixed bottom-8 left-0 right-0 z-40 flex justify-center md:hidden">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="px-4 py-3 bg-[#1A1A2E]/90 backdrop-blur-lg rounded-full flex gap-3 border border-blue-500/20 shadow-lg"
          >
            {[
              { id: "overview", icon: <FaRocket /> },
              { id: "benefits", icon: <FaChartLine /> },
              { id: "process", icon: <FaCogs /> },
              { id: "success", icon: <FaUsers /> }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-2 rounded-full ${activeSection === item.id ? "bg-blue-600 text-white" : "text-gray-400"}`}
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
              { id: "overview", label: "Visión General", icon: <FaRocket /> },
              { id: "benefits", label: "Beneficios", icon: <FaChartLine /> },
              { id: "process", label: "Proceso", icon: <FaCogs /> },
              { id: "success", label: "Casos de Éxito", icon: <FaUsers /> }
            ].map(item => (
              <div key={item.id} className="relative group">
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className={`p-3 rounded-lg ${activeSection === item.id ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}
                >
                  {item.icon}
                </button>
                <div className="absolute left-full ml-2 px-2 py-1 bg-[#1A1A2E] text-white text-xs whitespace-nowrap rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.label}
                </div>
                {activeSection === item.id && (
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-blue-500"></div>
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <p className="text-blue-400 text-sm mb-3 font-medium">SERVICIO PREMIUM</p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Transformación <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Digital</span>
                  </h1>
                  <p className="text-lg text-gray-300">
                    Te ayudo a reinventar tu empresa con tecnologías disruptivas para optimizar procesos, 
                    mejorar la experiencia de tus clientes y aumentar tu competitividad en el mercado actual.
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
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <FaRocket className="text-lg" />
                    Empezar mi transformación
                  </button>
                  
                  <a
                    href="https://wa.me/51999543832?text=Hola,%20me%20interesa%20saber%20más%20sobre%20el%20servicio%20de%20Transformación%20Digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaWhatsapp className="text-lg" />
                    Consultar por WhatsApp
                  </a>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative hidden md:block"
              >
                <div className="relative z-10 w-full h-[400px]">
                  <Image
                    src="/imagenes/transformacion-digital.webp"
                    alt="Transformación Digital - Consultoría avanzada"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <div className="absolute top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl"></div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
            >
              {[
                { label: 'Clientes transformados', value: '120+' },
                { label: 'Años de experiencia', value: '10+' },
                { label: 'Reducción de costos', value: '35%' },
                { label: 'Aumento de eficiencia', value: '75%' }
              ].map((stat, index) => (
                <div key={index} className="p-4 bg-[#1A1A2E]/50 rounded-lg border border-blue-500/10">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits section */}
        <section 
          ref={benefitsRef}
          id="benefits" 
          className="py-12 md:py-16 mb-16 md:mb-24 max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-blue-400 text-sm mb-3 font-medium"
            >
              BENEFICIOS PARA TU NEGOCIO
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              ¿Por qué necesitas transformarte?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 max-w-xl mx-auto"
            >
              En el mundo actual, la digitalización no es una opción, es una necesidad. Te ayudo a implementar 
              soluciones tecnológicas que impulsan resultados reales para tu negocio.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ServiceFeature 
              icon={<FaChartLine />} 
              title="Incrementa la eficiencia" 
              description="Automatizo procesos manuales y repetitivos, reduciendo errores y liberando a tu equipo para tareas de mayor valor."
            />
            <ServiceFeature 
              icon={<FaLaptopCode />} 
              title="Mejora la experiencia del cliente" 
              description="Diseño soluciones digitales centradas en el usuario que hacen que tus clientes se sientan valorados y vuelvan por más."
            />
            <ServiceFeature 
              icon={<FaCloudUploadAlt />} 
              title="Toma decisiones basadas en datos" 
              description="Implemento sistemas de análisis que convierten datos en insights accionables para tu negocio."
            />
            <ServiceFeature 
              icon={<FaMobileAlt />} 
              title="Accesibilidad en todo dispositivo" 
              description="Creo soluciones que funcionan perfectamente en todos los dispositivos, desde móviles hasta ordenadores de escritorio."
            />
            <ServiceFeature 
              icon={<FaCogs />} 
              title="Optimización de recursos" 
              description="Identifico y elimino ineficiencias operativas, reduciendo costos y maximizando el uso de los recursos existentes."
            />
            <ServiceFeature 
              icon={<FaUsers />} 
              title="Cultura digital" 
              description="Acompaño a tu equipo en la adopción de nuevas tecnologías, construyendo una cultura organizacional orientada a la innovación."
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-6 md:p-8 rounded-xl border border-blue-500/20"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">¿Listo para transformar tu negocio?</h3>
                <p className="text-gray-300">Agenda una consulta gratuita para evaluar tus necesidades específicas</p>
              </div>
              <Link 
                href="/contacto?servicio=transformacionDigital"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Solicitar diagnóstico gratis
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Process section */}
        <section 
          ref={processRef}
          id="process" 
          className="py-12 md:py-16 mb-16 md:mb-24 max-w-6xl mx-auto"
        >
          <div className="mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-blue-400 text-sm mb-3 font-medium"
            >
              MI METODOLOGÍA
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Un enfoque metódico para una transformación exitosa
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 max-w-xl"
            >
              Implemento un proceso estructurado y adaptable que asegura resultados constantes 
              y medibles para cada etapa de la transformación digital.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="md:col-span-2">
              <div className="sticky top-24 space-y-8">
                <ProcessStep 
                  number="1"
                  title="Diagnóstico Digital"
                  description="Evaluación integral del estado actual de tu empresa, identificando brechas tecnológicas y oportunidades de mejora."
                />
                <ProcessStep 
                  number="2"
                  title="Planificación Estratégica"
                  description="Desarrollo de una hoja de ruta personalizada con objetivos claros, plazos realistas y KPIs efectivos."
                />
                <ProcessStep 
                  number="3"
                  title="Implementación"
                  description="Ejecución metódica de soluciones tecnológicas, con seguimiento constante y ajustes según las necesidades."
                />
                <ProcessStep 
                  number="4"
                  title="Capacitación y Adopción"
                  description="Entrenamiento de tu equipo para maximizar el uso de las nuevas tecnologías y promover una cultura digital."
                />
                <ProcessStep 
                  number="5"
                  title="Evolución Continua"
                  description="Monitoreo de resultados y refinamiento constante para adaptarse a los cambios del mercado y nuevas tecnologías."
                />
              </div>
            </div>
            <div className="md:col-span-3 relative">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-[#1A1A2E]/80 to-[#1A1A2E]/60 p-6 md:p-8 rounded-xl border border-blue-500/20 relative overflow-hidden"
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
                  
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-4">¿Cómo trabajamos juntos?</h3>
                    <p className="text-gray-300 mb-6">
                      Mi enfoque es colaborativo y transparente. Me integro como parte de tu equipo para entender a fondo 
                      tus necesidades y crear soluciones que realmente aporten valor a tu negocio.
                    </p>

                    <div className="bg-[#0D0C1D]/50 p-5 rounded-lg border border-blue-500/10 mb-6">
                      <h4 className="text-blue-400 font-bold mb-2">Un proceso a tu medida</h4>
                      <p className="text-gray-400 text-sm">
                        No creo en soluciones genéricas. Cada empresa es única, por lo que personalizo el proceso 
                        de transformación digital según tus recursos, objetivos y mercado específico.
                      </p>
                    </div>

                    <div className="space-y-4 mb-6">
                      {[
                        "Reuniones semanales para revisar avances",
                        "Informes de progreso y resultados medibles",
                        "Acceso directo a todas las herramientas implementadas",
                        "Adaptación continua según feedback y necesidades"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-gray-300">{item}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contacto?servicio=transformacionDigital"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Agendar una llamada de descubrimiento
                      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-8 aspect-video rounded-xl overflow-hidden relative"
                >
                  <Image
                    src="/imagenes/proceso-transformacion-digital.webp"
                    alt="Proceso de transformación digital"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm">Proceso de transformación digital con resultados medibles</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Success cases section */}
        <section 
          ref={successRef}
          id="success" 
          className="py-12 md:py-16 mb-16 md:mb-24 max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-blue-400 text-sm mb-3 font-medium"
            >
              CASOS DE ÉXITO
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Transformaciones que generan resultados
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 max-w-xl mx-auto"
            >
              Algunas historias de clientes que han experimentado un verdadero cambio en sus negocios a través de la transformación digital.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                company: "TechSolutions Inc",
                industry: "Software",
                image: "/imagenes/caso1.webp",
                result: "Incremento del 85% en eficiencia operativa",
                description: "Implementamos un sistema integrado de gestión que automatizó procesos manuales y redujo los tiempos de respuesta al cliente en un 60%."
              },
              {
                company: "Retail Premium",
                industry: "Comercio minorista",
                image: "/imagenes/caso2.webp",
                result: "230% de aumento en ventas online",
                description: "Desarrollamos una estrategia omnicanal que integró perfectamente la experiencia de tienda física con la digital."
              }
            ].map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A2E]/60 rounded-xl overflow-hidden border border-blue-500/10"
              >
                <div className="h-48 md:h-56 relative">
                  <Image
                    src={case_.image}
                    alt={case_.company}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs text-gray-300">{case_.industry}</p>
                    <h3 className="text-xl font-bold text-white">{case_.company}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-blue-400 font-bold text-lg mb-2">{case_.result}</h4>
                  <p className="text-gray-300">{case_.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-xl border border-blue-500/20"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-2xl flex-shrink-0">
                <FaUsers />
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["#DigitalTransformation", "#BusinessGrowth", "#Innovation"].map(tag => (
                    <span key={tag} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">¿Quieres ser el próximo caso de éxito?</h3>
                <p className="text-gray-300">
                  Tu negocio tiene un potencial único que podemos potenciar con las estrategias digitales adecuadas.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/contacto?servicio=transformacionDigital"
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all duration-300 inline-block"
                >
                  Iniciar mi transformación
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 mb-16 md:mb-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Preguntas frecuentes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300 max-w-xl mx-auto"
            >
              Respuestas a las dudas más comunes sobre la transformación digital
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                question: "¿Cuánto tiempo toma implementar una transformación digital?",
                answer: "El tiempo varía según la complejidad y alcance del proyecto. Normalmente, los primeros resultados visibles se notan en 2-3 meses, mientras que una transformación completa puede tomar de 6 meses a un año. Trabajo con un enfoque de entregas incrementales para que puedas ver resultados desde el inicio."
              },
              {
                question: "¿Se necesita un gran presupuesto para la transformación digital?",
                answer: "No necesariamente. Diseño soluciones escalables que se adaptan a diferentes presupuestos, priorizando las áreas de mayor impacto. Además, muchas soluciones digitales actuales funcionan con modelos de suscripción que reducen la inversión inicial."
              },
              {
                question: "¿Cómo se maneja la resistencia al cambio en la organización?",
                answer: "Parte fundamental de mi metodología incluye estrategias de gestión del cambio. Involucro a los equipos desde el inicio, ofrezco capacitación constante y comunico claramente los beneficios para generar compromiso y reducir la resistencia."
              },
              {
                question: "¿Qué pasa si ya tenemos algunas tecnologías implementadas?",
                answer: "Perfecto. Evaluamos lo que ya tienes funcionando, integramos sistemas existentes cuando es posible y recomendamos cambios solo donde realmente añaden valor. El objetivo es maximizar tus inversiones previas, no reemplazarlo todo."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#1A1A2E]/40 p-6 rounded-xl border border-blue-500/10">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </motion.div>
        </section>
        
        {/* Call to action */}
        <section className="py-12 md:py-16 mb-16 md:mb-24 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 md:p-12 rounded-xl border border-blue-500/30 text-center relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Listo para iniciar tu transformación digital?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Da el primer paso hacia la modernización de tu negocio. Agenda una consulta gratuita para discutir tus necesidades específicas y cómo puedo ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contacto?servicio=transformacionDigital"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Solicitar consulta gratuita
                </Link>
                <a
                  href="https://calendly.com/deivipluss/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Agendar una llamada
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
      
      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. ¡Todos los derechos reservados!
      </footer>

      {/* Floating contact form modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-blue-500/30"
            >
              <button 
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-2">Comencemos tu transformación</h3>
              <p className="text-gray-300 mb-6">Completa el formulario y me pondré en contacto contigo en menos de 24 horas.</p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué te gustaría transformar?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Cuéntame sobre tus necesidades..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-glow transition-all duration-300"
                >
                  Enviar mensaje
                </button>
              </form>
              
              <p className="mt-4 text-xs text-center text-gray-400">
                También puedes contactarme directamente por WhatsApp al {" "}
                <a 
                  href="https://wa.me/51999543832" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  +51 999 543 832
                </a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
