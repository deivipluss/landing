"use client";
import React, { useState } from "react";
import { 
  FaBriefcase, 
  FaChalkboardTeacher, 
  FaChartLine, 
  FaUsersCog, 
  FaRocket,
  FaRegLightbulb,
  FaCalendarCheck,
  FaLaptop,
  FaArrowRight
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function EntrenamientoGerentesPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  
  const faqItems = [
    {
      question: "¿Qué habilidades digitales son esenciales para gerentes hoy?",
      answer: "Me enfoco en las competencias clave para directivos modernos: análisis de datos para toma de decisiones, gestión de equipos remotos, comprensión de tecnologías emergentes, ciberseguridad básica, y uso efectivo de herramientas de productividad. Mi entrenamiento equipa a los gerentes con habilidades prácticas que pueden aplicar inmediatamente en sus roles."
    },
    {
      question: "¿Cómo adaptas el entrenamiento a las necesidades específicas?",
      answer: "Antes de cada programa de formación, realizo una evaluación de necesidades con tu equipo directivo. Esto me permite personalizar completamente el contenido, los estudios de caso y los ejercicios prácticos para reflejar los desafíos reales que enfrenta tu organización. Mi objetivo es ofrecer herramientas inmediatamente aplicables a tu contexto empresarial específico."
    },
    {
      question: "¿Cuánto tiempo lleva ver resultados con tu entrenamiento?",
      answer: "Mis programas están diseñados para ofrecer victorias rápidas junto con transformaciones a largo plazo. Los gerentes suelen reportar mejoras en eficiencia y toma de decisiones dentro de las primeras dos semanas. Para cambios organizacionales más profundos, establezco un plan de 3-6 meses con objetivos medibles en cada etapa para asegurar un progreso continuo y sostenible."
    },
    {
      question: "¿Ofreces soporte posterior al entrenamiento?",
      answer: "Absolutamente, la continuidad es esencial. Todos mis programas incluyen sesiones de seguimiento y mentoría durante 3 meses después del entrenamiento principal. Además, proporciono acceso a una biblioteca de recursos y herramientas digitales, y disponibilidad para consultas puntuales. Mi compromiso es asegurar que las nuevas competencias se integren completamente en la práctica diaria."
    }
  ];

  const programItems = [
    {
      title: "Liderazgo Digital Transformador",
      description: "Desarrollo las capacidades de tu equipo gerencial para liderar en la era digital, fomentando la innovación y la agilidad organizacional.",
      icon: <FaRocket />,
      highlights: ["Mentalidad digital disruptiva", "Gestión del cambio tecnológico", "Cultura de innovación continua"]
    },
    {
      title: "Toma de Decisiones Basada en Datos",
      description: "Enseño a tus gerentes a interpretar datos complejos y convertirlos en insights accionables para mejorar resultados de negocio.",
      icon: <FaChartLine />,
      highlights: ["Análisis de datos para no-técnicos", "Visualización efectiva", "Decisiones estratégicas informadas"]
    },
    {
      title: "Gestión de Equipos Remotos",
      description: "Capacito a tus líderes para maximizar la productividad y cohesión de equipos híbridos y remotos en el nuevo entorno laboral.",
      icon: <FaUsersCog />,
      highlights: ["Herramientas de colaboración digital", "Comunicación asincrónica efectiva", "Evaluación de desempeño remoto"]
    },
    {
      title: "Transformación Digital Estratégica",
      description: "Comparto metodologías prácticas para identificar e implementar oportunidades de digitalización que generan ventajas competitivas.",
      icon: <FaRegLightbulb />,
      highlights: ["Evaluación de madurez digital", "Roadmap de transformación", "Medición de ROI digital"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-amber-500/10 mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-20 w-72 h-72 rounded-full bg-orange-500/10 mix-blend-screen filter blur-[80px]"></div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-20 mb-16 md:mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 text-sm font-medium mb-4 border border-amber-500/30">
                  DESARROLLO EJECUTIVO
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Entrenamiento para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">Gerentes</span>
                </h1>
                
                <p className="text-gray-300 text-lg mb-8">
                  Capacito a tus líderes con las habilidades digitales y gerenciales modernas que necesitan para impulsar la transformación en tu organización y mantenerla competitiva.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:shadow-glow-amber transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
                  >
                    <span>Potenciar a mi equipo</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <a 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-amber-500 text-amber-400 rounded-lg hover:bg-amber-500/10 transition-all duration-300"
                  >
                    Agendar consulta gratuita
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl border-2 border-amber-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10"></div>
                  <Image
                    src="/imagenes/entrenamiento-gerentes.webp"
                    alt="Entrenamiento para gerentes y directivos"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-transparent to-transparent opacity-60"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0D0C1D]/70 backdrop-blur-sm rounded-lg border border-amber-500/20">
                    <p className="text-white font-medium text-lg">Liderazgo que transforma organizaciones</p>
                    <p className="text-amber-300 text-sm">Desarrollo ejecutivo para la era digital</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
            >
              {[
                { value: "94%", label: "de mejora en toma de decisiones" },
                { value: "78%", label: "incremento en productividad de equipos" },
                { value: "25+", label: "habilidades digitales adquiridas" },
                { value: "6×", label: "ROI promedio en capacitación" }
              ].map((stat, index) => (
                <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/10 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        </section>

        {/* Programs Section */}
        <section className="py-12 md:py-16 mb-16 md:mb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 text-sm font-medium mb-3">
                PROGRAMAS ESPECIALIZADOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Capacitación que impulsa resultados
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Diseño programas que combinan teoría con práctica intensiva, asegurando que tus gerentes puedan 
                aplicar inmediatamente lo aprendido a sus desafíos diarios.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {programItems.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 md:p-8 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-xl mb-5">
                    {program.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                  <p className="text-gray-300 mb-5">{program.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {program.highlights.map((item, i) => (
                      <li key={i} className="flex items-center text-amber-300">
                        <div className="mr-2 text-sm">✓</div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="text-amber-400 hover:text-amber-300 flex items-center text-sm font-medium"
                  >
                    <span>Ver detalles del programa</span>
                    <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-12 md:py-16 mb-16 md:mb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 text-sm font-medium mb-3">
                MI METODOLOGÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cómo transformo a tus gerentes
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mi enfoque se basa en aprendizaje experiencial y aplicación práctica para desarrollar 
                competencias que generan un impacto inmediato en tu organización.
              </p>
            </motion.div>

            <div className="relative mb-12">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-orange-500 hidden sm:block"></div>
              
              {[
                {
                  title: "Diagnóstico personalizado",
                  description: "Evalúo el nivel actual de competencias digitales y gerenciales de tu equipo directivo, identificando fortalezas y áreas de oportunidad específicas.",
                  icon: <FaChalkboardTeacher className="text-lg" />
                },
                {
                  title: "Diseño a medida",
                  description: "Creo un programa de entrenamiento adaptado a las necesidades de tu empresa, incorporando casos de estudio relevantes para tu industria y retos específicos.",
                  icon: <FaRegLightbulb className="text-lg" />
                },
                {
                  title: "Formación práctica intensiva",
                  description: "Facilito sesiones dinámicas que combinan teoría esencial con ejercicios prácticos y simulaciones para dominar nuevas habilidades de forma efectiva.",
                  icon: <FaLaptop className="text-lg" />
                },
                {
                  title: "Implementación guiada",
                  description: "Acompaño a tus gerentes en la aplicación de lo aprendido a proyectos reales en tu organización, asegurando la transferencia de conocimiento.",
                  icon: <FaRocket className="text-lg" />
                },
                {
                  title: "Seguimiento y refuerzo",
                  description: "Proporciono sesiones de seguimiento, recursos adicionales y asesoría para consolidar el aprendizaje y medir el impacto en los resultados de negocio.",
                  icon: <FaCalendarCheck className="text-lg" />
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start gap-6 mb-12 relative ${
                    index % 2 === 0 ? 'md:mr-[50%]' : 'md:ml-[50%] md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-amber-500 to-orange-600 text-white ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/60 p-6 rounded-lg border border-amber-500/10 flex-grow">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-500/20 text-amber-400 mr-3">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-lg p-6 border border-amber-500/20"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-full text-white text-2xl">
                  <FaBriefcase />
                </div>
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">¿Listo para potenciar a tus gerentes?</h3>
                  <p className="text-gray-300">Agenda una consulta gratuita para diseñar un programa personalizado para tu equipo directivo.</p>
                </div>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:shadow-glow-amber transition-all duration-300 whitespace-nowrap"
                >
                  Solicitar propuesta
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-12 md:py-16 mb-16 md:mb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 text-sm font-medium mb-3">
                RESULTADOS COMPROBADOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Lo que dicen los líderes que he entrenado
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Las opiniones de directivos que han experimentado una transformación en sus habilidades y resultados
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "El programa de entrenamiento gerencial me dio exactamente las habilidades digitales que necesitaba para liderar nuestra transformación. En 3 meses, logramos optimizar procesos que habían estado estancados durante años.",
                  author: "María Rodríguez",
                  position: "Gerente de Operaciones",
                  company: "Grupo Financiero XYZ"
                },
                {
                  quote: "La metodología práctica y el enfoque personalizado hicieron toda la diferencia. Ahora, nuestro equipo directivo habla el mismo idioma digital y toma decisiones basadas en datos de forma mucho más efectiva.",
                  author: "Alejandro Méndez",
                  position: "Director General",
                  company: "Innovación Industrial"
                },
                {
                  quote: "La capacitación transformó la manera en que gestiono equipos remotos. Las herramientas y técnicas aprendidas han aumentado nuestra productividad en un 40% y mejorado significativamente la satisfacción del equipo.",
                  author: "Carolina Torres",
                  position: "Gerente de Recursos Humanos",
                  company: "TechSolutions"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-xl border border-amber-500/10"
                >
                  <div className="mb-4 text-amber-500">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 7L6 12H10V17H4V12L8 7H10Z" fill="currentColor" />
                      <path d="M20 7L16 12H20V17H14V12L18 7H20Z" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-gray-300 italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.position}<br/>{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 md:py-16 mb-16 md:mb-24">
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
                Resuelve tus dudas sobre mi programa de entrenamiento para gerentes
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                    className={`w-full text-left bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-lg border ${
                      activeQuestion === index ? 'border-amber-500/30' : 'border-amber-500/10'
                    } transition-colors duration-300`}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-white">{item.question}</h3>
                      <div className="ml-2 flex-shrink-0 text-amber-500">
                        {activeQuestion === index ? (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 7L10 12L5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 15L12 10L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {activeQuestion === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="mt-4 text-gray-300 text-sm">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 mb-16 md:mb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-orange-600/30"></div>
              
              <div className="relative p-8 md:p-12 z-10 flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl transform rotate-12 mb-6 flex items-center justify-center">
                    <FaBriefcase className="text-white text-3xl" />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Transforma a tus gerentes en líderes digitales
                  </h2>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Invierte en el desarrollo de las habilidades que tu equipo directivo necesita para liderar con éxito en la era digital. 
                    Diseñaré un programa personalizado que se adapte a tus objetivos estratégicos.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:shadow-glow-amber transition-all duration-300 hover:scale-105"
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
      </div>
      
      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. ¡Todos los derechos reservados!
      </footer>
    
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
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-amber-500/30"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center">
                    <FaBriefcase className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Entrenamiento para Gerentes</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntame sobre tu equipo y necesidades específicas</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-amber-500/30 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-amber-500/30 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-amber-500/30 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="team_size" className="block text-sm font-medium text-gray-300 mb-1">
                    Tamaño del equipo a capacitar
                  </label>
                  <select
                    id="team_size"
                    className="w-full p-3 bg-[#0D0C1D] border border-amber-500/30 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="1-5">1-5 gerentes</option>
                    <option value="6-15">6-15 gerentes</option>
                    <option value="16-30">16-30 gerentes</option>
                    <option value="31+">Más de 30 gerentes</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué objetivos buscas con el entrenamiento?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-amber-500/30 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Describe las habilidades que deseas desarrollar en tu equipo..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:shadow-glow-amber transition-all duration-300"
                  >
                    Solicitar propuesta personalizada
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Te contactaré en menos de 24 horas para discutir tu caso específico
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style jsx global>{`
        .shadow-glow-amber {
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.3);
        }
      `}</style>
    </div>
  );
}
