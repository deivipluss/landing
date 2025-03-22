"use client";
import React, { useState, useRef } from "react";
import { 
  FaUsers, 
  FaBrain, 
  FaHandshake, 
  FaLaptopCode, 
  FaChartLine, 
  FaClipboardCheck,
  FaArrowRight,
  FaRegLightbulb,
  FaComments
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function EntrenamientoRhPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  
  // Datos para componentes
  const trainingModules = [
    {
      title: "Transformación Digital en RRHH",
      icon: <FaLaptopCode />,
      description: "Capacito a tu equipo para adoptar herramientas digitales que automatizan procesos de reclutamiento, evaluación y gestión del talento.",
      bullets: [
        "Implementación de HRIS modernos",
        "Análisis de datos para decisiones estratégicas",
        "Optimización del employee journey digital"
      ]
    },
    {
      title: "Cultura y Liderazgo Digital",
      icon: <FaBrain />,
      description: "Desarrollo las habilidades necesarias para fomentar una cultura de innovación y adaptabilidad en entornos de trabajo híbridos y remotos.",
      bullets: [
        "Gestión del cambio organizacional",
        "Desarrollo de liderazgo digital",
        "Estrategias de comunicación interna"
      ]
    },
    {
      title: "Experiencia del Empleado (EX)",
      icon: <FaHandshake />,
      description: "Enseño a diseñar experiencias laborales centradas en el empleado, mejorando engagement, retención y productividad.",
      bullets: [
        "Mapeo y optimización del employee journey",
        "Implementación de programas de wellbeing",
        "Medición y mejora continua del NPS interno"
      ]
    },
    {
      title: "People Analytics",
      icon: <FaChartLine />,
      description: "Capacito a tus profesionales de RRHH para aprovechar los datos en la toma de decisiones estratégicas sobre capital humano.",
      bullets: [
        "Construcción de dashboards de RRHH",
        "Predicción de rotación y engagement",
        "Medición de ROI en programas de talento"
      ]
    }
  ];

  const testimonialData = [
    {
      text: "La transformación que David logró en nuestro departamento de RRHH fue asombrosa. Ahora utilizamos datos para tomar decisiones estratégicas y hemos reducido nuestro tiempo de contratación en un 40%.",
      name: "Claudia Martínez",
      role: "HR Director",
      company: "Grupo Tecnova"
    },
    {
      text: "El programa de entrenamiento combinó perfectamente teoría y práctica. En apenas 3 meses, mi equipo se siente confiado usando herramientas digitales que antes les intimidaban.",
      name: "Miguel Sánchez",
      role: "Talent Manager",
      company: "Corporación Andina"
    },
    {
      text: "El enfoque personalizado hizo toda la diferencia. David entendió exactamente nuestros desafíos específicos y adaptó el contenido a nuestras necesidades reales.",
      name: "Lorena Gómez",
      role: "People & Culture Lead",
      company: "Innovatech SA"
    }
  ];

  const FAQItems = [
    {
      question: "¿Qué incluye exactamente tu programa de entrenamiento para RRHH?",
      answer: "Mi programa es modular y personalizable, pero típicamente incluye capacitación en herramientas digitales específicas para RRHH, workshops prácticos de implementación, mentorías individuales para líderes clave, y un roadmap estratégico para la transformación digital del área. Cada programa lo diseño a medida según tus necesidades específicas, cultura organizacional y nivel de madurez digital."
    },
    {
      question: "¿Cómo adaptas la formación a diferentes niveles de conocimiento tecnológico?",
      answer: "Antes de iniciar cualquier entrenamiento, realizo una evaluación diagnóstica para identificar el nivel de competencia digital de cada participante. Esto me permite crear grupos de aprendizaje homogéneos y adaptar los contenidos y ejercicios prácticos. Para equipos muy diversos, implemento un sistema de mentorías internas y aprendizaje colaborativo que ha demostrado excelentes resultados."
    },
    {
      question: "¿Cuánto tiempo lleva implementar estos cambios en un departamento de RRHH?",
      answer: "La duración varía según el tamaño de tu organización y el alcance del cambio deseado. Mi programa estándar se desarrolla durante 3-4 meses, con una combinación de sesiones intensivas y períodos de implementación práctica. Veo resultados tangibles desde el primer mes, pero la transformación completa y sostenible típicamente requiere entre 6 y 12 meses de acompañamiento estratégico."
    }
  ];

  // Feature component
  const ModuleCard = ({ title, icon, description, bullets, index }: { 
    title: string, 
    icon: JSX.Element, 
    description: string, 
    bullets: string[],
    index: number 
  }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/50 rounded-xl border border-green-500/10 p-6 hover:border-green-500/30 hover:shadow-md hover:shadow-green-500/5 transition-all duration-300"
    >
      <div className="mb-4 w-14 h-14 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center text-white text-xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {bullets.map((item, i) => (
          <li key={i} className="flex items-start text-sm">
            <span className="text-green-400 mr-2 mt-1">✓</span>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
  
  // Testimonial component
  const TestimonialCard = ({ text, name, role, company, isActive }: { 
    text: string, 
    name: string, 
    role: string, 
    company: string,
    isActive: boolean
  }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.9,
        x: isActive ? 0 : 30
      }}
      transition={{ duration: 0.4 }}
      className={`bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/60 p-6 rounded-xl border border-green-500/20 relative ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="absolute -top-4 -left-4 text-green-400 text-5xl opacity-30">"</div>
      <p className="text-gray-300 italic mb-6 relative z-10">{text}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="text-white font-medium">{name}</p>
          <p className="text-gray-400 text-sm">{role}, <span className="text-green-400">{company}</span></p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-green-500/5 filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-teal-500/5 filter blur-[100px] pointer-events-none"></div>

        {/* Hero Section */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-300 text-sm font-medium mb-4 border border-green-500/30">
                  CAPACITACIÓN ESPECIALIZADA
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Entrenamiento en <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">Recursos Humanos</span>
                </h1>
                
                <p className="text-gray-300 text-lg mb-8">
                  Transformo equipos de RRHH tradicionales en centros estratégicos de innovación digital. Capacito a tu talento humano para liderar la transformación cultural y tecnológica que tu organización necesita.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Potenciar mi equipo de RRHH</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <a 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-green-500 text-green-400 rounded-lg hover:bg-green-500/10 transition-all duration-300"
                  >
                    Consulta gratuita
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, scale: isHeaderInView ? 1 : 0.9 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative hidden md:block"
              >
                <div className="relative h-[380px] w-full rounded-xl overflow-hidden border-2 border-green-500/20">
                  <Image
                    src="/imagenes/entrenamiento-rh.webp"
                    alt="Entrenamiento para equipos de Recursos Humanos"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-gradient-to-r from-[#1A1A2E]/80 to-[#1A1A2E]/60 backdrop-blur-sm p-4 rounded-lg border border-green-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white">
                          <FaRegLightbulb />
                        </div>
                        <h3 className="text-white font-medium">Recursos Humanos en la Era Digital</h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Transformando la función de RRHH para el futuro del trabajo
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-4 shadow-xl">
                  <p className="text-white font-semibold">+87%</p>
                  <p className="text-xs text-white/80">Mayor retención</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Benefits & Features */}
        <section className="py-12 md:py-16 mb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-300 text-sm font-medium mb-3">
                MÓDULOS DE CAPACITACIÓN
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Desarrollo integral para equipos de RRHH
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mis programas de capacitación están diseñados para transformar la función de Recursos Humanos 
                en un aliado estratégico que utiliza la tecnología para potenciar el talento.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {trainingModules.map((module, index) => (
                <ModuleCard 
                  key={index}
                  title={module.title}
                  icon={module.icon}
                  description={module.description}
                  bullets={module.bullets}
                  index={index}
                />
              ))}
            </div>
            
            {/* Stats section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { value: "93%", label: "de empresas reportan mejoras en productividad" },
                { value: "68%", label: "reducción en tiempo de contratación" },
                { value: "40%", label: "aumento en retención de talento" },
                { value: "4.8/5", label: "satisfacción en programas de capacitación" }
              ].map((stat, index) => (
                <div key={index} className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/60 border border-green-500/10 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Methodology Section */}
        <section className="py-12 md:py-16 mb-16 bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/60 rounded-xl border border-green-500/10">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-300 text-sm font-medium mb-3">
                MI METODOLOGÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Aprendizaje experiencial personalizado
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mi enfoque combina teoría actualizada, práctica inmediata y acompañamiento continuo para asegurar 
                la adopción real de nuevas competencias en tu equipo de RRHH.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: <FaClipboardCheck />, 
                  title: "Diagnóstico de madurez digital", 
                  description: "Evalúo el nivel actual de competencias digitales y procesos HR para diseñar un programa completamente personalizado."
                },
                {
                  icon: <FaBrain />, 
                  title: "Talleres prácticos inmersivos", 
                  description: "Facilito sesiones hands-on donde tu equipo aprende resolviendo casos reales de su día a día usando nuevas herramientas."
                },
                {
                  icon: <FaComments />, 
                  title: "Mentoría continua", 
                  description: "Brindo soporte post-capacitación para asegurar la aplicación correcta de lo aprendido y resolver dudas en tiempo real."
                },
              ].map((method, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#0D0C1D]/50 p-6 rounded-xl border border-green-500/10 relative overflow-hidden group hover:border-green-500/30 transition-colors duration-300"
                >
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-green-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="mb-4 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-300 relative z-10">{method.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 flex justify-center"
            >
              <button 
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300"
              >
                Consultar sobre capacitación para mi equipo
              </button>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-12 md:py-16 mb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-300 text-sm font-medium mb-3">
                EXPERIENCIAS REALES
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Lo que dicen de mis programas
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Profesionales de RRHH que han transformado sus departamentos con mis metodologías de capacitación
              </p>
            </motion.div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/3">
                <div className="sticky top-24">
                  <h3 className="text-2xl font-bold text-white mb-4">Historias de transformación</h3>
                  <p className="text-gray-300 mb-8">
                    Mi objetivo es convertir a los equipos de Recursos Humanos en líderes de la transformación digital dentro de la organización.
                  </p>
                  
                  <div className="flex gap-2">
                    {testimonialData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTab(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          currentTab === index ? 'bg-green-500' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 relative h-80">
                {testimonialData.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    text={testimonial.text}
                    name={testimonial.name}
                    role={testimonial.role}
                    company={testimonial.company}
                    isActive={currentTab === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 md:py-16 mb-16">
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
              <p className="text-gray-300 max-w-2xl mx-auto">
                Resuelvo tus dudas sobre mis programas de entrenamiento para equipos de RRHH
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {FAQItems.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/60 p-6 rounded-xl border border-green-500/10"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-16 mb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-teal-600/30"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/60 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Potencia tu departamento de Recursos Humanos
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl">
                      Permíteme transformar a tu equipo de RRHH en un socio estratégico que utiliza tecnología y datos para impulsar el crecimiento organizacional y la experiencia del empleado.
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 whitespace-nowrap"
                    >
                      Solicitar propuesta
                    </button>
                    <a
                      href="https://calendly.com/deivipluss/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Agendar consulta
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
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-green-500/30"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                    <FaUsers className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Entrenamiento para RRHH</h3>
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
                    className="w-full p-3 bg-[#0D0C1D] border border-green-500/30 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-green-500/30 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-green-500/30 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="team_size" className="block text-sm font-medium text-gray-300 mb-1">
                    Tamaño del equipo de RRHH
                  </label>
                  <select
                    id="team_size"
                    className="w-full p-3 bg-[#0D0C1D] border border-green-500/30 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="1-3">1-3 personas</option>
                    <option value="4-10">4-10 personas</option>
                    <option value="11-20">11-20 personas</option>
                    <option value="21+">Más de 20 personas</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué retos específicos enfrenta tu equipo de RRHH?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-green-500/30 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Describe brevemente tus necesidades..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300"
                  >
                    Solicitar propuesta personalizada
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Te contactaré personalmente en menos de 24 horas para conversar sobre tu caso
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
