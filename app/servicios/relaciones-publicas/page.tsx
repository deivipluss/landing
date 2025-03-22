"use client";
import React, { useState } from "react";
import { 
  FaShareAlt, 
  FaTwitter, 
  FaNewspaper, 
  FaChartBar, 
  FaPodcast, 
  FaSearchPlus,
  FaShieldAlt,
  FaPlay,
  FaArrowRight
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function RelacionesPublicasPage() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  
  const features = [
    {
      title: "Relaciones con Medios Digitales",
      description: "Construimos y mantenemos relaciones con periodistas, influencers y publicaciones digitales para obtener cobertura mediática positiva para tu empresa.",
      icon: <FaNewspaper />,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Gestión de Crisis Online",
      description: "Protegemos tu reputación digital y mitigamos daños con protocolos de comunicación de crisis efectivos para escenarios adversos.",
      icon: <FaShieldAlt />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Monitorización de Marca",
      description: "Seguimiento en tiempo real de todas las menciones de tu marca en medios digitales y redes sociales para una gestión proactiva de tu presencia online.",
      icon: <FaSearchPlus />,
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Estrategia de Contenidos PR",
      description: "Desarrollo de contenidos específicos para relaciones públicas: comunicados, dossieres de prensa y artículos de opinión que posicionen a tu empresa como autoridad.",
      icon: <FaPodcast />,
      color: "from-purple-600 to-violet-700"
    }
  ];
  
  const Statistic = ({ value, label }: { value: string; label: string }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 rounded-lg border border-purple-500/20"
    >
      <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text mb-2">
        {value}
      </span>
      <span className="text-gray-300 text-sm text-center">{label}</span>
    </motion.div>
  );

  const Testimonial = ({ text, author, company }: { text: string; author: string; company: string }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-lg border border-purple-500/20 relative"
    >
      <div className="absolute -top-3 -left-2 text-3xl text-purple-500 opacity-50">"</div>
      <div className="absolute -bottom-3 -right-2 text-3xl text-purple-500 opacity-50">"</div>
      <p className="text-gray-300 italic mb-4">{text}</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="text-white font-medium">{author}</p>
          <p className="text-gray-400 text-xs">{company}</p>
        </div>
      </div>
    </motion.div>
  );

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      } 
    })
  };

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-purple-500/10 mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute top-2/3 left-10 w-60 h-60 rounded-full bg-pink-500/10 mix-blend-screen filter blur-[80px] animate-pulse"></div>
        
        {/* Hero section */}
        <section className="relative mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 text-purple-300 px-4 py-1 rounded-full text-sm font-medium border border-purple-500/30">
                  GESTIÓN ESTRATÉGICA
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                  <span className="text-white">Relaciones </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">Públicas Digitales</span>
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Construyo puentes estratégicos entre tu marca y tus públicos clave en el entorno digital. 
                  Convierte la opinión pública en tu mejor aliado empresarial y fortalece tu reputación online.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-glow-pink transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
                  >
                    <span>Impulsar mi reputación</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="px-6 py-3 bg-transparent border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaPlay className="text-sm" />
                    <span>Ver cómo funciona</span>
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden md:block"
              >
                <div className="relative h-[400px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl"></div>
                  <Image
                    src="/imagenes/relaciones-publicas-hero.webp"
                    alt="Relaciones Públicas Digitales"
                    fill
                    className="object-cover rounded-2xl mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0D0C1D] to-transparent"></div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
            >
              <Statistic value="87%" label="Aumento en percepción positiva de marca" />
              <Statistic value="65%" label="Incremento en menciones en medios" />
              <Statistic value="3.5x" label="Mayor alcance de comunicados" />
              <Statistic value="72%" label="Mejora en gestión de crisis" />
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        </section>
        
        {/* Features carousel */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 px-4 py-1 rounded-full text-sm font-medium">
                NUESTROS SERVICIOS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
                Gestión integral de tu presencia pública
              </h2>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Desarrollamos estrategias personalizadas para posicionar tu marca positivamente en el entorno digital
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/60 p-2 rounded-xl border border-purple-500/20"
              >
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {features.map((feature, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeature(index)}
                      className={`p-4 text-left rounded-lg transition-all duration-300 ${
                        currentFeature === index 
                          ? `bg-gradient-to-r ${feature.color} text-white`
                          : 'hover:bg-purple-500/10 text-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
                          currentFeature === index ? 'bg-white/20' : 'bg-purple-500/20'
                        } mr-3`}>
                          {feature.icon}
                        </div>
                        <div className="text-sm font-medium line-clamp-2">{feature.title}</div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="p-6 bg-[#0D0C1D]/50 rounded-lg min-h-[200px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFeature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-3">{features[currentFeature].title}</h3>
                      <p className="text-gray-300">{features[currentFeature].description}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative aspect-video rounded-xl overflow-hidden border border-purple-500/20"
              >
                <Image 
                  src={`/imagenes/relaciones-publicas-feature-${currentFeature + 1}.webp`}
                  alt={features[currentFeature].title}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-[#1A1A2E]/80 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                    <h4 className="text-white font-bold mb-2">Enfoque estratégico</h4>
                    <p className="text-gray-300 text-sm">
                      Cada servicio se adapta a tus objetivos comerciales específicos y a las necesidades de tu audiencia.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* How we work section */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 px-4 py-1 rounded-full text-sm font-medium">
                METODOLOGÍA
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
                Cómo construimos tu reputación digital
              </h2>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Un proceso meticuloso que combina estrategia, creatividad y análisis continuo
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500/50 via-purple-500/50 to-indigo-500/50 hidden sm:block"></div>
              
              {[
                {
                  title: "Auditoría de reputación",
                  description: "Evaluamos cómo se percibe actualmente tu marca en el ecosistema digital, identificando fortalezas, debilidades y oportunidades.",
                  icon: <FaSearchPlus />
                },
                {
                  title: "Diseño estratégico",
                  description: "Desarrollamos un plan personalizado que alinea tus objetivos de negocio con las expectativas de tus audiencias clave.",
                  icon: <FaChartBar />
                },
                {
                  title: "Generación de contenido PR",
                  description: "Creamos material de comunicación persuasivo y de alto valor para medios, influencers y otros stakeholders.",
                  icon: <FaNewspaper />
                },
                {
                  title: "Distribución y amplificación",
                  description: "Utilizamos canales estratégicos para difundir tus mensajes y maximizar su alcance e impacto.",
                  icon: <FaShareAlt />
                },
                {
                  title: "Monitorización y análisis",
                  description: "Seguimiento constante de resultados para optimizar estrategias y maximizar el retorno de inversión.",
                  icon: <FaChartBar />
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUpVariants}
                  className={`flex items-start gap-4 mb-12 relative ${
                    index % 2 === 0 ? 'sm:flex-row sm:mr-[50%]' : 'sm:flex-row-reverse sm:ml-[50%]'
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 mt-1 rounded-full flex items-center justify-center z-10 bg-gradient-to-br from-pink-500 to-purple-600 text-white ${
                    index % 2 === 1 && 'sm:order-1'
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className={`bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/60 p-6 rounded-lg border border-purple-500/20 flex-grow ${
                    index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'
                  }`}>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-400 mr-3">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Case studies section */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 px-4 py-1 rounded-full text-sm font-medium">
                CASOS DE ÉXITO
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
                Transformando la percepción pública
              </h2>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Historias reales de marcas que fortalecieron su imagen y reputación
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/60 rounded-xl overflow-hidden border border-purple-500/20 mb-8"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-60 md:h-auto">
                  <Image 
                    src="/imagenes/caso-estudio-relaciones.webp"
                    alt="Caso de estudio - Relaciones Públicas"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D0C1D] md:via-[#0D0C1D]/60 md:to-[#0D0C1D]"></div>
                </div>
                
                <div className="md:col-span-3 p-8 relative">
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 rounded-full bg-purple-500/10 filter blur-3xl"></div>
                  
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    TECH STARTUP
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">De crisis a oportunidad</h3>
                  <p className="text-gray-300 mb-6">
                    Una startup tecnológica enfrentó una crisis de seguridad que afectó a miles de usuarios. 
                    Implementamos un protocolo de gestión de crisis que no solo mitigó el daño, sino que también 
                    transformó la situación en una oportunidad para demostrar transparencia y responsabilidad.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#0D0C1D]/50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-pink-400">94%</p>
                      <p className="text-xs text-gray-400">de recuperación en confianza de usuarios</p>
                    </div>
                    <div className="bg-[#0D0C1D]/50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-pink-400">+12K</p>
                      <p className="text-xs text-gray-400">nuevos usuarios post-crisis</p>
                    </div>
                  </div>
                  
                  <Link 
                    href="/contacto?servicio=relacionesPublicas"
                    className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors group"
                  >
                    <span>Ver detalles completos</span>
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Testimonial 
                text="La estrategia de relaciones públicas transformó completamente cómo los medios digitales hablan de nosotros. En seis meses, pasamos de ser casi invisibles a aparecer regularmente en publicaciones de nuestro sector."
                author="Alejandro Méndez"
                company="Director de Marketing, HealthTech Solutions"
              />
              <Testimonial 
                text="Cuando enfrentamos aquella crisis en redes sociales, su equipo actuó rápido y con precisión. Convirtieron una situación potencialmente devastadora en una demostración de nuestros valores. Impresionante."
                author="Carmen Rodríguez"
                company="CEO, Moda Sostenible"
              />
              <Testimonial 
                text="El programa de PR digital incrementó nuestra visibilidad como expertos del sector. Ahora recibimos constantemente solicitudes de medios para entrevistas y comentarios sobre tendencias de la industria."
                author="Ricardo Torres"
                company="Fundador, InnovaFintech"
              />
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30"></div>
              
              <div className="relative p-8 md:p-12 z-10 flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl transform rotate-12 mb-6 flex items-center justify-center">
                    <FaShareAlt className="text-white text-3xl" />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-xl">
                    ¿Listo para transformar la narrativa de tu marca?
                  </h2>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Tu reputación digital es demasiado importante para dejarla al azar. 
                    Construyamos juntos una estrategia de relaciones públicas que amplifique tus fortalezas 
                    y te posicione como referente en tu industria.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-glow-pink transition-all duration-300 hover:scale-105"
                    >
                      Solicitar propuesta personalizada
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
        </section>
        
        {/* FAQ section */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Preguntas frecuentes
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto">
                Resolviendo tus dudas sobre las relaciones públicas digitales
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Cómo se diferencia PR digital de marketing digital?",
                  answer: "Mientras que el marketing digital se centra principalmente en la promoción y venta directa, las relaciones públicas digitales se enfocan en construir y gestionar la reputación de tu marca mediante comunicación estratégica con múltiples stakeholders (medios, influencers, comunidad). PR busca generar credibilidad y confianza a través de terceros, lo que complementa las estrategias de marketing."
                },
                {
                  question: "¿Cuánto tiempo se necesita para ver resultados?",
                  answer: "Las relaciones públicas son un esfuerzo estratégico a medio y largo plazo. Los primeros resultados visibles (menciones en medios, cambios en percepción) suelen notarse a partir de los 3-4 meses. Sin embargo, los beneficios completos de una estrategia consistente de PR se acumulan con el tiempo, fortaleciendo progresivamente tu posición en el mercado."
                },
                {
                  question: "¿Puede PR digital ayudar durante una crisis?",
                  answer: "Absolutamente. La gestión de crisis es uno de los pilares fundamentales de las relaciones públicas. Implementamos protocolos preventivos y reactivos para proteger tu reputación durante situaciones adversas. Una buena estrategia de PR no solo mitiga daños, sino que puede convertir crisis en oportunidades para demostrar los valores de tu marca."
                },
                {
                  question: "¿Cómo se mide el éxito en relaciones públicas?",
                  answer: "Utilizamos métricas tanto cualitativas como cuantitativas: volumen y calidad de menciones en medios, sentimiento y tonalidad de la cobertura, alcance estimado, engagement con contenidos, cambios en percepción de marca y, lo más importante, el impacto en tus objetivos de negocio como conversiones, ventas o retención de clientes."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/60 p-6 rounded-xl border border-purple-500/10"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. ¡Todos los derechos reservados!
      </footer>

      {/* Video modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-[#1A1A2E] rounded-xl p-4 max-w-4xl w-full relative border border-purple-500/30"
            >
              <button 
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-4 -right-4 bg-purple-600 text-white p-2 rounded-full z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="aspect-video rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-[#1A1A2E]/80">
                  <p className="text-white text-center">Video demostrativo del servicio</p>
                  <p className="text-gray-400 text-sm text-center">(Se cargará desde un servidor externo)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact form modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-purple-500/30"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <FaShareAlt className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Relaciones Públicas Digitales</h3>
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
                    className="w-full p-3 bg-[#0D0C1D] border border-purple-500/30 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-purple-500/30 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Empresa o proyecto
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full p-3 bg-[#0D0C1D] border border-purple-500/30 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué objetivos de PR buscas alcanzar?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-purple-500/30 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Describe brevemente tus necesidades y objetivos"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-glow-pink transition-all duration-300"
                  >
                    Solicitar estrategia personalizada
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Al enviar este formulario, aceptas nuestra <a href="#" className="text-pink-400 hover:underline">Política de Privacidad</a>
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .shadow-glow-pink {
          box-shadow: 0 0 25px rgba(219, 39, 119, 0.3);
        }
      `}</style>
    </div>
  );
}
