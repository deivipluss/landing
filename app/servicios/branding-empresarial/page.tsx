"use client";
import React, { useState, useRef } from "react";
import { 
  FaBuilding, 
  FaRegEye, 
  FaPalette, 
  FaBullhorn, 
  FaRegLightbulb, 
  FaChartBar, 
  FaStream,
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function BrandingEmpresarialPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState("estrategia");
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  
  // Referencias para desplazamiento suave
  const heroRef = useRef<HTMLDivElement>(null);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const procesosRef = useRef<HTMLDivElement>(null);
  const casosExitoRef = useRef<HTMLDivElement>(null);
  
  // Scroll suave a secciones
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Componente para las pestañas
  const TabItem = ({ id, label, icon, active }: { id: string, label: string, icon: JSX.Element, active: boolean }) => (
    <button 
      onClick={() => setActiveTab(id)} 
      className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
        active 
        ? "bg-gradient-to-r from-blue-700/30 to-purple-700/30 text-white shadow-lg border border-blue-500/20" 
        : "text-blue-300 hover:bg-blue-900/20 hover:text-blue-100"
      }`}
    >
      <span className={`transition-transform duration-300 ${active ? "scale-110" : ""}`}>
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </button>
  );
  
  // Componente para los elementos del proceso  
  const ProcessCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/60 rounded-xl p-6 border border-blue-500/10 relative overflow-hidden"
    >
      <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-500/5 blur-2xl"></div>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white text-xl font-bold">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
  
  // Componente para testimonios
  const Testimonial = ({ 
    quote, author, role, company 
  }: { 
    quote: string, 
    author: string, 
    role: string, 
    company: string 
  }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-500/10"
    >
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-500 mr-1">★</span>
        ))}
      </div>
      <blockquote className="text-gray-300 italic mb-4">{quote}</blockquote>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="text-white font-medium">{author}</p>
          <p className="text-gray-400 text-sm">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Gradient orbs para decoración */}
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-blue-500/10 mix-blend-screen filter blur-[80px]"></div>
        <div className="absolute top-80 left-10 w-80 h-80 rounded-full bg-purple-500/10 mix-blend-screen filter blur-[60px]"></div>
        
        {/* Hero section con enfoque en branding */}
        <motion.div 
          ref={heroRef} 
          className="relative py-12 md:py-24 mb-20"
          style={{ scale }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium mb-4 border border-blue-500/30">
                  SERVICIO PREMIUM
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">Branding</span>{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Empresarial</span>
                </h1>
                <p className="text-gray-300 text-lg mb-8">
                  Creamos una identidad sólida y coherente para tu empresa que refleje tus valores y resuene con tu audiencia. 
                  Más que un logo, construimos una experiencia de marca completa que genere confianza e impulse tu crecimiento.
                </p>
                
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
                  >
                    <span>Comenzar proyecto</span>
                    <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <a
                    href="https://wa.me/51999543832?text=Hola,%20me%20interesa%20saber%20más%20sobre%20el%20servicio%20de%20Branding%20Empresarial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-3 gap-4 mt-10"
              >
                {[
                  { value: "93%", label: "Aumento de reconocimiento" },
                  { value: "67%", label: "Mayor lealtad de clientes" },
                  { value: "78%", label: "Incremento de conversiones" }
                ].map((stat, index) => (
                  <div key={index} className="p-3 rounded-lg bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/10 text-center">
                    <p className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <motion.div 
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-xl overflow-hidden border-2 border-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <Image 
                  src="/imagenes/branding-empresarial.webp" 
                  alt="Branding Empresarial - Identidad visual corporativa"
                  fill
                  className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-6 py-2 backdrop-blur-lg bg-gradient-to-r from-blue-900/70 to-purple-900/70 rounded-lg text-white font-medium">
                    Identidad que Impacta
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        </motion.div>
        
        {/* Tabs section con servicios branding */}
        <div ref={serviciosRef} className="max-w-6xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium">
              SERVICIOS DE BRANDING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
              Construye una marca memorable
            </h2>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto">
              Cada elemento de tu marca debe transmitir coherentemente tu esencia y valores,
              creando una impresión duradera en tu audiencia.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1A1A2E]/80 rounded-xl p-6 border border-blue-500/20 mb-8"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { id: "estrategia", label: "Estrategia", icon: <FaRegLightbulb /> },
                { id: "identidad", label: "Identidad Visual", icon: <FaPalette /> },
                { id: "comunicacion", label: "Comunicación", icon: <FaBullhorn /> }
              ].map((tab) => (
                <TabItem 
                  key={tab.id}
                  id={tab.id}
                  label={tab.label}
                  icon={tab.icon}
                  active={activeTab === tab.id}
                />
              ))}
            </div>
            
            <div className="min-h-[300px] py-4">
              {activeTab === "estrategia" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Estrategia de Marca</h3>
                    <p className="text-gray-300 mb-6">
                      Definimos el ADN de tu marca mediante un proceso estratégico que identifica tus valores, personalidad, propuesta de valor única y posicionamiento en el mercado.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Investigación de mercado y competencia",
                        "Definición de valores y propósito",
                        "Posicionamiento estratégico",
                        "Arquetipos y personalidad de marca"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-64 md:h-auto bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/imagenes/estrategia-branding.webp" 
                          alt="Estrategia de Marca"
                          fill
                          className="object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D]/80 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === "identidad" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Identidad Visual</h3>
                    <p className="text-gray-300 mb-6">
                      Creamos los elementos visuales que darán vida a tu marca, con diseños atractivos y memorables que reflejan la esencia de tu empresa.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Diseño de logotipo e isotipos",
                        "Paleta de colores y tipografías",
                        "Elementos gráficos y patrones",
                        "Manual de identidad corporativa",
                        "Aplicaciones en medios digitales e impresos"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-64 md:h-auto bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/imagenes/identidad-visual.webp" 
                          alt="Identidad Visual Corporativa"
                          fill
                          className="object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D]/80 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === "comunicacion" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Comunicación de Marca</h3>
                    <p className="text-gray-300 mb-6">
                      Desarrollamos una voz y tono únicos para tu marca, asegurando que cada mensaje conecte con tu audiencia y refuerce tu posicionamiento.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Definición de voz y tono",
                        "Creación de mensajes clave",
                        "Guía de estilo de comunicación",
                        "Storytelling y narrativa de marca",
                        "Estrategia de contenidos alineada"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-64 md:h-auto bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/imagenes/comunicacion-marca.webp" 
                          alt="Comunicación de Marca"
                          fill
                          className="object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D]/80 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                href="/contacto?servicio=branding"
                className="inline-flex items-center px-5 py-3 bg-blue-700/30 hover:bg-blue-700/50 rounded-lg border border-blue-500/30 text-blue-300 transition-all duration-300 group"
              >
                <span>Ver todos los servicios de branding</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Proceso de trabajo */}
        <div ref={procesosRef} className="max-w-6xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium">
              METODOLOGÍA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
              Nuestro proceso creativo
            </h2>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto">
              Trabajamos con un enfoque sistemático y colaborativo para crear marcas que resuenan con tu audiencia
              y cumplen tus objetivos de negocio.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProcessCard 
              number="01"
              title="Descubrimiento"
              description="Exploramos a fondo tu negocio, objetivos, valores y competencia para entender el contexto completo de tu marca."
            />
            <ProcessCard 
              number="02"
              title="Estrategia"
              description="Definimos el posicionamiento, personalidad y valores de tu marca basados en la investigación y tus objetivos de negocio."
            />
            <ProcessCard 
              number="03"
              title="Concepto Creativo"
              description="Desarrollamos conceptos visuales y verbales que capturan la esencia de tu marca y resuenan con tu audiencia."
            />
            <ProcessCard 
              number="04"
              title="Diseño y Desarrollo"
              description="Creamos todos los elementos visuales y verbales necesarios para construir una identidad de marca coherente y atractiva."
            />
            <ProcessCard 
              number="05"
              title="Implementación"
              description="Aplicamos la nueva identidad en todos los puntos de contacto con el cliente, asegurando coherencia y calidad."
            />
            <ProcessCard 
              number="06"
              title="Evaluación y Evolución"
              description="Monitorizamos el rendimiento de la marca y realizamos ajustes para mantenerla relevante y efectiva con el tiempo."
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <button 
              onClick={() => setShowContactForm(true)}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Comienza tu proyecto de branding
            </button>
          </motion.div>
        </div>
        
        {/* Casos de éxito y testimonios */}
        <div ref={casosExitoRef} className="max-w-6xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium">
              RESULTADOS COMPROBADOS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto">
              Historias de éxito de empresas que transformaron su imagen y conectaron con su audiencia gracias a nuestro trabajo.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-8">
              <Testimonial 
                quote="La renovación de nuestra marca fue un cambio transformador para nuestro negocio. Ahora tenemos una identidad visual que refleja perfectamente nuestros valores y conecta con nuestros clientes."
                author="Carlos Jiménez"
                role="CEO"
                company="TechVision"
              />
              <Testimonial 
                quote="El proceso fue extremadamente profesional y colaborativo. Nos guiaron en cada paso y lograron capturar nuestra esencia de una manera que nunca imaginamos posible."
                author="María Santos"
                role="Directora de Marketing"
                company="EcoLife Solutions"
              />
            </div>
            <div className="space-y-8 mt-8 md:mt-16">
              <Testimonial 
                quote="Desde que implementamos nuestra nueva identidad de marca, hemos visto un aumento del 45% en el reconocimiento de marca y un 30% en conversiones. ¡La inversión más inteligente que hemos hecho!"
                author="Laura Moreno"
                role="Fundadora"
                company="BeautyEssence"
              />
              <Testimonial 
                quote="Apreciamos especialmente la atención al detalle y el pensamiento estratégico detrás de cada elemento de nuestra nueva marca. No solo es hermosa visualmente, sino que funciona comercialmente."
                author="Roberto Álvarez"
                role="Director General"
                company="Constructora Horizonte"
              />
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl overflow-hidden border border-blue-500/20"
          >
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative min-h-[300px]">
                <Image 
                  src="/imagenes/caso-exito-branding.webp"
                  alt="Caso de éxito de branding"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D0C1D] md:via-[#0D0C1D]/60 md:to-[#0D0C1D]"></div>
              </div>
              <div className="md:col-span-3 p-8 md:p-10 relative">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 rounded-full bg-blue-500/10 filter blur-3xl"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Modernizando una tradición</h3>
                <p className="text-blue-200 font-medium mb-4">Caso de estudio: Café Montaña - Rebrand completo</p>
                <p className="text-gray-300 mb-6">
                  Una empresa familiar con 40 años de tradición necesitaba renovar su imagen para conectar con una nueva generación 
                  de consumidores sin perder su esencia tradicional. Desarrollamos una identidad visual que honra su historia 
                  mientras la posiciona como una marca contemporánea y premium.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Aumento del 78% en reconocimiento de marca",
                    "Incremento del 52% en engagement en redes sociales",
                    "Expansión a 15 nuevos puntos de venta"
                  ].map((result, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-3 text-blue-400">✓</div>
                      <span className="text-gray-300 text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contacto?servicio=branding"
                  className="inline-flex items-center px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all duration-300"
                >
                  Ver caso completo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* FAQ Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Todo lo que necesitas saber sobre nuestros servicios de branding
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "¿Cuánto tiempo toma un proyecto de branding?",
                answer: "Normalmente, un proyecto completo de branding toma entre 4 y 8 semanas, dependiendo de su alcance y complejidad. Diseñamos un cronograma personalizado basado en tus necesidades específicas y plazos."
              },
              {
                question: "¿Qué hace que un buen branding sea importante?",
                answer: "Un branding efectivo distingue tu empresa de la competencia, construye confianza, mejora el reconocimiento de marca y crea una conexión emocional con los clientes. Además, un branding coherente aumenta el valor percibido de tus productos o servicios."
              },
              {
                question: "¿Qué incluye un proyecto de branding completo?",
                answer: "Un proyecto completo incluye investigación de mercado, estrategia de marca, diseño de identidad visual (logo, colores, tipografías), guía de voz y tono, manual de marca y aplicaciones básicas. También ofrecemos servicios adicionales como diseño de empaques, sitio web y estrategia de contenidos."
              },
              {
                question: "¿Cómo se integra el branding con el marketing digital?",
                answer: "El branding establece la base de toda tu estrategia de marketing digital, asegurando que todos tus canales y comunicaciones tengan un aspecto y mensaje coherentes. Trabajamos para que tu identidad de marca se traduzca efectivamente a entornos digitales, desde redes sociales hasta email marketing."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-blue-500/10"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="max-w-6xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
            
            <div className="relative p-8 md:p-12 z-10 flex flex-col items-center text-center">
              <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-12 mb-6 flex items-center justify-center">
                  <FaBuilding className="text-white text-3xl" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-xl">
                  ¿Listo para transformar la imagen de tu empresa?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Construyamos juntos una identidad de marca que refleje lo mejor de tu empresa, conecte con tu audiencia y te posicione como líder en tu industria.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    Solicitar una propuesta
                  </button>
                  <a
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    Agendar una llamada
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. ¡Todos los derechos reservados!
      </footer>
      
      {/* Modal de contacto */}
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
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <FaBuilding className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Branding Empresarial</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntanos sobre tu proyecto y te contactaremos en menos de 24 horas</p>
              </div>
              
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
                  <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-1">
                    Cuéntanos sobre tu proyecto
                  </label>
                  <textarea
                    id="project"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe brevemente tu proyecto de branding y objetivos"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-glow transition-all duration-300"
                  >
                    Enviar solicitud
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Al enviar este formulario, aceptas nuestra <a href="#" className="text-blue-400 hover:underline">Política de Privacidad</a>
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
