"use client";
import React, { useState, useRef } from "react";
import { 
  FaNetworkWired, 
  FaShieldAlt, 
  FaChartBar, 
  FaSearchPlus,
  FaArrowRight,
  FaServer,
  FaCode,
  FaCloudDownloadAlt,
  FaFileAlt,
  FaLock
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function AuditoriaTecnologicaPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const auditTypes = [
    {
      title: "Infraestructura IT",
      description: "Evalúo detalladamente tus servidores, redes, almacenamiento y sistemas operativos para identificar cuellos de botella y oportunidades de optimización.",
      icon: <FaServer className="text-xl" />,
      stats: ["27%", "reducción de costos operativos", "99.9%", "mejora en disponibilidad"]
    },
    {
      title: "Arquitectura de Software",
      description: "Analizo tu stack tecnológico, dependencias y arquitectura de aplicaciones para mejorar escalabilidad, mantenibilidad y rendimiento.",
      icon: <FaCode className="text-xl" />,
      stats: ["40%", "reducción de deuda técnica", "62%", "mejora en tiempo de desarrollo"]
    },
    {
      title: "Seguridad Informática",
      description: "Identifico vulnerabilidades y evalúo tus políticas de seguridad para fortalecer la protección de tus activos digitales contra amenazas modernas.",
      icon: <FaLock className="text-xl" />,
      stats: ["85%", "reducción de vulnerabilidades críticas", "92%", "mejora en tiempo de respuesta"]
    },
    {
      title: "Rendimiento de Sistemas",
      description: "Mido y optimizo el desempeño de tus aplicaciones y bases de datos para mejorar tiempos de respuesta y experiencia de usuario.",
      icon: <FaChartBar className="text-xl" />,
      stats: ["73%", "aumento en velocidad de carga", "54%", "mejora en experiencia de usuario"]
    }
  ];

  const processSteps = [
    {
      title: "Diagnóstico Inicial",
      description: "Realizo un análisis preliminar de tu infraestructura y procesos tecnológicos para establecer el alcance y objetivos de la auditoría.",
      icon: <FaSearchPlus />
    },
    {
      title: "Evaluación Profunda",
      description: "Implemento herramientas especializadas para auditar cada componente de tu ecosistema tecnológico, desde hardware hasta aplicaciones.",
      icon: <FaNetworkWired />
    },
    {
      title: "Análisis de Resultados",
      description: "Proceso los datos obtenidos para identificar patrones, vulnerabilidades, ineficiencias y oportunidades de mejora en tu infraestructura.",
      icon: <FaChartBar />
    },
    {
      title: "Plan de Acción",
      description: "Desarrollo un roadmap detallado con recomendaciones priorizadas y planes de implementación claros para optimizar tu tecnología.",
      icon: <FaFileAlt />
    }
  ];

  const testimonials = [
    {
      text: "La auditoría tecnológica que realizó para nuestra empresa fue reveladora. Identificó problemas críticos de seguridad que desconocíamos y nos ahorró más de $50,000 en potenciales pérdidas por brechas de datos.",
      author: "Elena Morales",
      position: "CTO",
      company: "FinTech Solutions"
    },
    {
      text: "Su enfoque metódico y detallado nos permitió optimizar nuestra infraestructura cloud, reduciendo nuestros costos mensuales en un 35% mientras mejoramos el rendimiento. La claridad de sus recomendaciones hizo muy fácil la implementación.",
      author: "Roberto Sánchez",
      position: "Director de IT",
      company: "Logística Global"
    },
    {
      text: "La evaluación de nuestra arquitectura de software nos ayudó a identificar y eliminar deuda técnica que frenaba nuestro desarrollo. Ahora lanzamos nuevas funcionalidades un 40% más rápido y con mayor estabilidad.",
      author: "Carolina Pérez",
      position: "Lead Developer",
      company: "InnovaApps"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Elementos decorativos */}
        <div className="absolute -top-10 right-0 w-[600px] h-[600px] rounded-full bg-cyan-600/5 filter blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-600/5 filter blur-[100px] pointer-events-none"></div>
        
        {/* Hero Section */}
        <div ref={headerRef} className="relative py-12 md:py-18 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
                className="order-2 md:order-1"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm font-medium mb-4 border border-cyan-500/30">
                  DIAGNÓSTICO PROFESIONAL
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">Auditoría</span>{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">Tecnológica</span>
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Evaluó exhaustivamente tu infraestructura tecnológica para identificar vulnerabilidades, optimizar recursos y potenciar tu competitividad digital. Mi enfoque metódico transforma datos en decisiones estratégicas.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg hover:shadow-glow-cyan transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Solicitar auditoría</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="/#servicios" 
                    className="px-6 py-3 bg-transparent border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Ver todos los servicios
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, scale: isHeaderInView ? 1 : 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="order-1 md:order-2 relative"
              >
                <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                  <Image
                    src="/imagenes/auditoria-tecnologica.webp"
                    alt="Auditoría de infraestructura tecnológica"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-[#0D0C1D]/20 to-transparent opacity-60"></div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="absolute bottom-0 left-0 right-0 p-4"
                  >
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Infraestructura", value: "Optimizada" },
                        { label: "Seguridad", value: "Reforzada" },
                        { label: "Costos", value: "Reducidos" },
                      ].map((item, index) => (
                        <div key={index} className="bg-[#0D0C1D]/80 backdrop-blur-sm p-2 rounded border border-cyan-500/20 text-center">
                          <p className="text-cyan-400 text-sm font-bold">{item.value}</p>
                          <p className="text-gray-400 text-xs">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -bottom-5 -right-5 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-xl p-4 shadow-lg hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <FaShieldAlt className="text-white text-xl" />
                    <div>
                      <p className="text-white font-bold">100% Confidencial</p>
                      <p className="text-cyan-200 text-xs">Protocolos de seguridad</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
            >
              {[
                { value: "97%", label: "de precisión en diagnósticos" },
                { value: "45%", label: "reducción promedio de costos IT" },
                { value: "89%", label: "de vulnerabilidades mitigadas" },
                { value: "3.5×", label: "ROI promedio por auditoría" }
              ].map((stat, index) => (
                <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-[#1A1A2E]/70 to-[#1A1A2E]/40 border border-cyan-500/10 text-center">
                  <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        </div>

        {/* Audit Types Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm font-medium mb-3">
                ÁREAS DE ESPECIALIZACIÓN
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Diagnósticos completos y especializados
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mi metodología de auditoría tecnológica cubre todos los aspectos críticos de tu ecosistema digital,
                proporcionando visibilidad completa y recomendaciones accionables.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {auditTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl overflow-hidden group hover:border-cyan-500/40 border border-cyan-500/10 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white mb-4">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                    <p className="text-gray-300 mb-6 text-sm">{type.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#0D0C1D]/50 p-3 rounded-lg group-hover:border-cyan-500/30 border border-transparent transition-all duration-300">
                        <p className="text-xl font-bold text-cyan-400">{type.stats[0]}</p>
                        <p className="text-xs text-gray-400">{type.stats[1]}</p>
                      </div>
                      <div className="bg-[#0D0C1D]/50 p-3 rounded-lg group-hover:border-blue-500/30 border border-transparent transition-all duration-300">
                        <p className="text-xl font-bold text-blue-400">{type.stats[2]}</p>
                        <p className="text-xs text-gray-400">{type.stats[3]}</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-12 mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E]/40 to-transparent rounded-xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm font-medium mb-3">
                MI METODOLOGÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proceso de auditoría tecnológica
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mi enfoque metódico garantiza una evaluación exhaustiva de tu infraestructura tecnológica,
                desde la identificación de problemas hasta las soluciones estratégicas.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-cyan-700 hidden sm:block"></div>
              
              {processSteps.map((step, index) => (
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
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-cyan-500 to-blue-700 text-white ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 p-6 rounded-lg border border-cyan-500/20 flex-grow">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-900/30 text-cyan-400 mr-3">
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
              className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 p-6 rounded-xl border border-cyan-500/20 mt-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <FaCloudDownloadAlt className="text-cyan-400 text-xl" />
                    <h3 className="text-xl font-bold text-white">Informe detallado incluido</h3>
                  </div>
                  <p className="text-gray-300">Cada auditoría culmina con un informe exhaustivo que documenta hallazgos, recomendaciones priorizadas y un roadmap de implementación claro.</p>
                </div>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg hover:shadow-glow-cyan transition-all duration-300 whitespace-nowrap"
                >
                  Solicitar muestra de informe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm font-medium mb-3">
                CASOS DE ÉXITO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Resultados que hablan por sí mismos
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Empresas que han transformado su infraestructura tecnológica gracias a mis servicios de auditoría
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-cyan-500/10 relative group hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="absolute -top-3 -left-2 text-3xl text-cyan-500 opacity-70">"</div>
                  <div className="absolute -bottom-3 -right-2 text-3xl text-cyan-500 opacity-70">"</div>
                  <p className="text-gray-300 italic mb-6 relative z-10 text-sm">{item.text}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium">{item.author}</p>
                      <p className="text-gray-400 text-xs">{item.position}, <span className="text-cyan-400">{item.company}</span></p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 mb-20">
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
                Resuelvo tus dudas sobre mis servicios de auditoría tecnológica
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Cuánto tiempo toma una auditoría tecnológica completa?",
                  answer: "El tiempo necesario depende de la complejidad de tu infraestructura, pero típicamente mis auditorías toman entre 2 y 4 semanas. Para empresas pequeñas puedo completar evaluaciones focalizadas en 1 semana, mientras que para organizaciones grandes con sistemas complejos, el proceso puede extenderse hasta 6 semanas. En cada caso, adapto mi metodología para minimizar las interrupciones en tus operaciones."
                },
                {
                  question: "¿Qué información necesitas para comenzar el proceso?",
                  answer: "Para iniciar una auditoría efectiva, necesito documentación básica sobre tu infraestructura actual (inventario de hardware y software), políticas de seguridad existentes, y acceso controlado a tus sistemas (que puede ser de solo lectura). Siempre firmo acuerdos de confidencialidad antes de comenzar y sigo protocolos estrictos para proteger tu información sensible."
                },
                {
                  question: "¿Cómo garantizas la confidencialidad de nuestra información?",
                  answer: "La confidencialidad es mi prioridad absoluta. Implemento un proceso de tres capas: primero, firmo acuerdos de confidencialidad legalmente vinculantes; segundo, utilizo sistemas de almacenamiento cifrados y protocolos de comunicación seguros; y tercero, sigo el principio de mínimo privilegio para acceder solo a lo estrictamente necesario. Toda la información se elimina de mis sistemas después del período acordado."
                },
                {
                  question: "¿Qué obtenemos al finalizar la auditoría?",
                  answer: "Al finalizar, recibes un informe ejecutivo con los hallazgos principales, un informe técnico detallado con todas las vulnerabilidades y problemas identificados (clasificados por severidad), y un plan de acción priorizado con recomendaciones específicas y estimaciones de recursos necesarios. También incluyo una sesión de presentación para explicar los resultados y responder preguntas de tu equipo."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 p-6 rounded-xl border border-cyan-500/10"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 to-blue-700/30"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/50 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Optimiza tu infraestructura tecnológica
                    </h2>
                    <p className="text-gray-300 mb-6 max-w-lg">
                      Permíteme ayudarte a identificar vulnerabilidades, reducir costos y maximizar el rendimiento de tus sistemas tecnológicos. Una auditoría exhaustiva es el primer paso hacia la excelencia digital.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      {[
                        "Diagnóstico completo y personalizado",
                        "Recomendaciones priorizadas y accionables",
                        "Soporte post-auditoría incluido"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg hover:shadow-glow-cyan transition-all duration-300 whitespace-nowrap"
                    >
                      Solicitar auditoría
                    </button>
                    <Link
                      href="https://calendly.com/deivipluss/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Agendar llamada consultiva
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
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-cyan-500/30"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 flex items-center justify-center">
                    <FaNetworkWired className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Auditoría Tecnológica</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntame sobre tu infraestructura y necesidades específicas</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-cyan-500/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-cyan-500/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-cyan-500/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="audit_type" className="block text-sm font-medium text-gray-300 mb-1">
                    Tipo de auditoría que necesitas
                  </label>
                  <select
                    id="audit_type"
                    className="w-full p-3 bg-[#0D0C1D] border border-cyan-500/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="infraestructura">Infraestructura IT</option>
                    <option value="software">Arquitectura de Software</option>
                    <option value="seguridad">Seguridad Informática</option>
                    <option value="rendimiento">Rendimiento de Sistemas</option>
                    <option value="completa">Auditoría Completa</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Describe brevemente tu infraestructura actual
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-cyan-500/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Número de servidores, aplicaciones principales, problemas actuales..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg hover:shadow-glow-cyan transition-all duration-300"
                  >
                    Solicitar propuesta personalizada
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Te contactaré en menos de 24 horas con una propuesta detallada
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .shadow-glow-cyan {
          box-shadow: 0 0 25px rgba(6, 182, 212, 0.3);
        }
      `}</style>
    </div>
  );
}
