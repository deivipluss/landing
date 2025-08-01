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
  FaBlog,
  FaQuestionCircle,
  FaCheckCircle,
  FaUsers,
  FaChartBar,
  FaArrowRight,
  FaPlay,
  FaStar,
  FaClock,
  FaCalendar,
  FaPercent,
  FaDollarSign,
  FaTrophy,
  FaHandshake
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import SidebarNavigation from "@/components/SidebarNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Importar los datos y componentes
import { faqData, metricsData, processSteps, successMetrics, impactMetrics } from './data';
import { FAQItem, MetricCard, TimelineStep, SuccessStory, ServiceCard, BlogPost } from './components';
import { MetricsChart } from './MetricsChart';
import Footer from "@/components/Footer";

export default function GerenciasPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [showContactForm, setShowContactForm] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  const overviewRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const innovationRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
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
        { id: "metrics", ref: metricsRef },
        { id: "process", ref: processRef },
        { id: "innovation", ref: innovationRef },
        { id: "success", ref: successRef },
        { id: "faq", ref: faqRef },
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
    // Si quieres usar handleScroll, aquí deberías agregar el event listener
    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Menú lateral personalizado (máximo 5 íconos + WhatsApp)
  const sidebarMenu = [
    { id: "overview", label: "Visión General", icon: <FaUserTie /> },
    { id: "services", label: "Servicios", icon: <FaCogs /> },
    { id: "metrics", label: "Métricas", icon: <FaChartBar /> },
    { id: "faq", label: "FAQ", icon: <FaQuestionCircle /> },
    { id: "blog", label: "Blog", icon: <FaBlog /> }
  ];

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      {/* Sidebar de navegación personalizado */}
      <SidebarNavigation
        menu={sidebarMenu}
        activeSection={activeSection}
        setActiveSection={scrollToSection}
      />
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative md:ml-28 lg:ml-40">
        <HomeNavigation />

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

        {/* Sección de Métricas */}
        <section
          ref={metricsRef}
          id="metrics"
          className="py-16 md:py-24 bg-gradient-to-b from-[#1A1A2E]/50 to-transparent"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Impacto Medible en tu Negocio
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Resultados comprobados que impulsan el crecimiento de tu empresa
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {metricsData.map((metric, index) => (
                <MetricCard key={index} {...metric} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1A1A2E]/50 rounded-xl border border-[#4A90E2]/20 p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Evolución del Impacto por Área
              </h3>
              <MetricsChart data={impactMetrics} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-center"
            >
              <button
                onClick={() => setShowContactForm(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4A90E2] to-[#00F5D4] text-white rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <FaChartLine className="text-xl" />
                Impulsa tu Crecimiento
              </button>
            </motion.div>
          </div>
        </section>

        {/* Sección del Proceso */}
        <section
          ref={processRef}
          id="process"
          className="py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proceso de Implementación
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Un enfoque estructurado para garantizar resultados excepcionales
              </p>
            </motion.div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <TimelineStep key={index} {...step} index={index} />
              ))}
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

        {/* Sección de Casos de Éxito */}
        <section
          ref={successRef}
          id="success"
          className="py-16 md:py-24 bg-gradient-to-b from-[#1A1A2E]/50 to-transparent"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Casos de Éxito
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Historias reales de transformación y crecimiento
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successMetrics.map((story, index) => (
                <SuccessStory key={index} {...story} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 text-center"
            >
              <button
                onClick={() => setShowContactForm(true)}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#4A90E2]/30 text-white rounded-full hover:bg-[#4A90E2]/10 transition-all duration-300"
              >
                <FaHandshake className="text-xl" />
                Sé el Próximo Caso de Éxito
              </button>
            </motion.div>
          </div>
        </section>

        {/* Sección FAQ */}
        <section
          ref={faqRef}
          id="faq"
          className="py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Resolvemos tus dudas sobre nuestros servicios gerenciales
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-4">¿No encontraste lo que buscabas?</p>
              <button
                onClick={() => setShowContactForm(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4A90E2] to-[#00F5D4] text-white rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <FaWhatsapp className="text-xl" />
                Pregúntanos Directamente
              </button>
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

        {/* Newsletter/CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#1A1A2E]/50 to-transparent">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#4A90E2]/10 to-[#00F5D4]/10 rounded-2xl border border-[#4A90E2]/20 p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Listo para Transformar tu Empresa?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Únete a las empresas que ya están experimentando un crecimiento exponencial con nuestras soluciones gerenciales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="px-8 py-4 bg-gradient-to-r from-[#4A90E2] to-[#00F5D4] text-white rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaRocket className="text-xl" />
                  Comenzar Ahora
                </button>
                <a
                  href="#services"
                  className="px-8 py-4 border border-[#4A90E2]/30 text-white rounded-full hover:bg-[#4A90E2]/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaChartLine className="text-xl" />
                  Explorar Servicios
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
