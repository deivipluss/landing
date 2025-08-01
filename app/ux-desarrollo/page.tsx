"use client";
export {};

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import HomeNavigation from "@/components/HomeNavigation";
import SidebarNavigation from "@/components/SidebarNavigation";
import { FiBarChart2, FiUsers, FiSettings, FiCode, FiLayers } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import Footer from "@/components/Footer";
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Link from "next/link";
import { FaPaintBrush, FaCode, FaMobile, FaServer, FaRocket, FaSearch, FaPencilRuler, FaRegLightbulb, FaDesktop, FaChartLine, FaCheckCircle, FaDownload, FaCalendarCheck } from "react-icons/fa";

// Métricas para la sección de resultados
const uxMetrics = {
  conversion: [
    { year: "Antes", value: 2.1 },
    { year: "Después", value: 5.8 },
  ],
  engagement: [
    { year: "Antes", value: 1.5 },
    { year: "Después", value: 3.8 },
  ],
  satisfaccion: [
    { year: "Antes", value: 3.2 },
    { year: "Después", value: 4.7 },
  ],
};

// Servicios específicos UX/UI
const services = [
  {
    title: "Auditoría UX",
    icon: <FaSearch size={24} className="text-indigo-500" />,
    features: [
      "Evaluación heurística",
      "Análisis de usabilidad",
      "Mapas de calor y recorridos de usuario",
    ],
  },
  {
    title: "Diseño de Interfaces (UI)",
    icon: <FaPaintBrush size={24} className="text-indigo-500" />,
    features: [
      "Sistemas de diseño escalables",
      "Interfaces responsivas",
      "Prototipos interactivos en Figma",
    ],
  },
  {
    title: "Desarrollo Front-End",
    icon: <FaDesktop size={24} className="text-indigo-500" />,
    features: [
      "Código limpio y optimizado",
      "React, Vue, Angular o frameworks a medida",
      "Accesibilidad WCAG 2.1",
    ],
  },
  {
    title: "Desarrollo Back-End",
    icon: <FaServer size={24} className="text-indigo-500" />,
    features: [
      "APIs robustas y escalables",
      "Node.js, Python, PHP o .NET",
      "Optimización de bases de datos",
    ],
  },
  {
    title: "Integración y Testing",
    icon: <FaCode size={24} className="text-indigo-500" />,
    features: [
      "Tests de integración automatizados",
      "QA y corrección de bugs",
      "Pruebas de rendimiento",
    ],
  },
  {
    title: "Optimización de Rendimiento",
    icon: <FaChartLine size={24} className="text-indigo-500" />,
    features: [
      "Mejoras de velocidad de carga",
      "Optimización para móviles",
      "Monitoreo y mejora continua",
    ],
  },
];

// Proceso de trabajo
const processSteps = [
  {
    id: 1,
    title: "Investigación y Prototipado",
    description: "Analizamos necesidades, creamos wireframes y validamos con usuarios reales antes de escribir una línea de código.",
    activities: ["User research", "Wireframing", "Pruebas con usuarios"],
    timeframe: "2-3 semanas",
    icon: <FaRegLightbulb className="text-indigo-500" size={28} />
  },
  {
    id: 2,
    title: "Desarrollo Iterativo",
    description: "Construimos en ciclos cortos con feedback constante, priorizando funcionalidades y mejorando continuamente.",
    activities: ["Sprints de desarrollo", "Pruebas técnicas", "Revisión de stakeholders"],
    timeframe: "4-8 semanas",
    icon: <FaCode className="text-indigo-500" size={28} />
  },
  {
    id: 3,
    title: "Lanzamiento y Optimización",
    description: "Implementamos, medimos el rendimiento y optimizamos continuamente basándonos en datos reales de uso.",
    activities: ["Despliegue", "Análisis de métricas", "Mejoras post-lanzamiento"],
    timeframe: "Continuo",
    icon: <FaRocket className="text-indigo-500" size={28} />
  }
];

// Casos de estudio
const caseStudies = [
  {
    client: "E-commerce Fashion",
    challenge: "Tasa de abandono de carrito del 78%",
    solution: "Rediseño del proceso de checkout y optimización móvil",
    results: "Reducción del 45% en abandono, +28% en conversión",
    logo: "/imagenes/logo1.png"
  },
  {
    client: "App Fintech",
    challenge: "Onboarding complejo con alta tasa de abandono",
    solution: "Flujo simplificado con micro-interacciones y feedback visual",
    results: "+60% en finalización de registro, -25% en soporte técnico",
    logo: "/imagenes/logo3.png"
  }
];

// Testimonios
const testimonials = [
  {
    name: "Ana Martínez",
    position: "Product Manager",
    company: "Fintech Solutions",
    text: "Transformaron nuestra app con un nuevo diseño UX que aumentó la retención un 40%. El equipo entendió perfectamente nuestras necesidades técnicas y de negocio.",
    image: "/imagenes/testimonial1.jpg"
  },
  {
    name: "Roberto García",
    position: "CTO",
    company: "E-commerce Leader",
    text: "Rediseñaron nuestras interfaces y el back-end, logrando un sitio 3 veces más rápido y con un aumento de conversión del 28%. Su enfoque en rendimiento técnico fue excepcional.",
    image: "/imagenes/testimonial2.jpg"
  }
];

export default function Page() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.2]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  
  const overviewRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const propuestaRef = useRef<HTMLDivElement>(null);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const impactoRef = useRef<HTMLDivElement>(null);
  const procesoRef = useRef<HTMLDivElement>(null);
  const casosRef = useRef<HTMLDivElement>(null);
  const avanzadosRef = useRef<HTMLDivElement>(null);
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
        { id: "impacto", ref: impactoRef },
        { id: "proceso", ref: procesoRef },
        { id: "casos", ref: casosRef },
        { id: "avanzados", ref: avanzadosRef },
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
    { id: "proceso", label: "Proceso", icon: <FiCode size={20} /> },
    { id: "casos", label: "Casos", icon: <FiLayers size={20} /> },
    { id: "contacto", label: "Contacto", icon: <FiHelpCircle size={20} /> }
  ];
  
  // Animaciones para counters
  const counters = [
    { value: 137, label: "% de aumento en conversión", prefix: "+" },
    { value: 67, label: "% de reducción en errores", prefix: "-" },
    { value: 84, label: "% más rápido en tiempo de carga", prefix: "+" }
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
        
        {/* 1. Hero / Cabecera Superior */}
        <section
          id="hero"
          ref={heroRef}
          className="relative min-h-[80vh] flex flex-col justify-center items-center py-16 overflow-hidden"
        >
          <motion.div 
            style={{ opacity, scale }}
            className="max-w-4xl mx-auto text-center z-10"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-transparent bg-clip-text">
              UX + Desarrollo Digital 360°: Experiencias que funcionan
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Combinamos diseño centrado en el usuario, usabilidad impecable y desarrollo técnico robusto para crear soluciones digitales con resultados tangibles.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-medium rounded-full hover:shadow-glow transition-all duration-300"
              >
                Solicita tu demo UX
              </button>
              <button 
                onClick={() => scrollToSection('impacto')}
                className="px-6 py-3 border border-[#6366F1] text-[#6366F1] rounded-full hover:bg-[#6366F1]/10 transition-all duration-300"
              >
                Ver resultados
              </button>
            </div>
          </motion.div>
          
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 z-0">
            <Image 
              src="/imagenes/ux-hero.jpg" 
              alt="Interfaces digitales interactivas" 
              fill 
              className="object-cover"
            />
          </div>
        </section>
        
        {/* 2. Retos del Cliente + Propuesta de Valor */}
        <section
          id="propuesta"
          ref={propuestaRef}
          className="py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Transformamos problemas digitales en experiencias exitosas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-red-500/20">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Retos comunes</h3>
                <ul className="space-y-3">
                  {[
                    "Tasas de conversión bajas y abandono elevado",
                    "Interfaces confusas que frustran a los usuarios",
                    "Aplicaciones inestables o con tiempos de carga lentos",
                    "Código obsoleto o difícil de mantener",
                    "Experiencia móvil deficiente"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-red-400 mt-1">✖</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-indigo-500/20">
                <h3 className="text-xl font-semibold mb-4 text-indigo-400">Nuestra solución</h3>
                <ul className="space-y-3">
                  {[
                    "Interfaces intuitivas que aumentan conversión y retención",
                    "Código limpio, escalable y mantenible a largo plazo",
                    "Experiencias optimizadas para todos los dispositivos",
                    "Tiempos de carga ultrarrápidos y alta estabilidad",
                    "Diseño basado en datos y pruebas con usuarios reales"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-indigo-400 mt-1">✓</span>
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
              Servicios UX + Desarrollo
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500 transition-all duration-300 bg-[#1A1A2E]/40 hover:bg-[#1A1A2E]/60"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <FaCheckCircle className="text-indigo-500 mt-1 flex-shrink-0" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 4. Demostración de Impacto */}
        <section
          id="impacto"
          ref={impactoRef}
          className="py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              Resultados medibles con impacto real
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-16 text-gray-300">
              No solo creamos experiencias bonitas, sino soluciones que generan resultados tangibles para tu negocio.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center mb-20">
              {counters.map((counter, i) => (
                <div key={i} className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-indigo-500/20 transform hover:scale-105 transition-transform duration-300">
                  <p className="text-5xl font-bold text-indigo-400 mb-2">
                    {counter.prefix}{counter.value}%
                  </p>
                  <p className="text-gray-300">{counter.label}</p>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-indigo-500/20">
                <h3 className="text-xl font-semibold mb-4 text-indigo-400">Antes vs. Después del rediseño</h3>
                <ul className="space-y-4">
                  {[
                    "Tiempo de carga: 8.2s → 1.3s",
                    "Tasa de rebote: 76% → 32%",
                    "Tasa de conversión: 1.2% → 4.8%",
                    "Satisfacción del usuario: 2.7/5 → 4.8/5"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-indigo-400 font-bold">↗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-indigo-500/20">
                <h3 className="text-xl font-semibold mb-4 text-indigo-400">Mejoras técnicas</h3>
                <ul className="space-y-4">
                  {[
                    "Puntuación PageSpeed: 62 → 94",
                    "Reducción del 72% en bugs de interfaz",
                    "Cobertura de tests: 12% → 87%",
                    "Tiempo de desarrollo: -40% con nuevo sistema"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-indigo-400 font-bold">↗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* 5. Proceso de Trabajo / Roadmap Visual */}
        <section
          id="proceso"
          ref={procesoRef}
          className="py-16 md:py-24 bg-gradient-to-b from-[#1A1A2E]/30 to-transparent"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Nuestro proceso de diseño y desarrollo
            </h2>
            
            <div className="relative">
              {/* Línea conectora */}
              <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6366F1] to-transparent hidden md:block" />
              
              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                    <div className="flex-1">
                      <div className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-indigo-500/30 h-full">
                        <h3 className="text-xl font-semibold mb-2 text-indigo-400 flex items-center gap-2">
                          {step.icon} {step.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{step.description}</p>
                        
                        <div className="flex flex-wrap justify-between">
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-2">Actividades</h4>
                            <ul className="text-sm text-gray-400">
                              {step.activities.map((activity, i) => (
                                <li key={i}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-indigo-900/30 px-3 py-2 rounded-lg">
                            <span className="text-xs text-indigo-300 font-medium">Duración estimada</span>
                            <p className="text-white">{step.timeframe}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-16 flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-[#1A1A2E] font-bold">
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
        
        {/* 6. Estudios de Caso / Testimonios UX */}
        <section
          id="casos"
          ref={casosRef}
          className="py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Casos de éxito
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {caseStudies.map((study, i) => (
                <div key={i} className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-indigo-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{study.client}</h3>
                    <div className="w-16 h-16 bg-white/10 rounded-lg p-2 flex items-center justify-center">
                      <Image src={study.logo} alt={study.client} width={56} height={56} className="opacity-70" />
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="border-l-2 border-red-400 pl-3">
                      <p className="text-sm font-medium text-red-400">RETO</p>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div className="border-l-2 border-indigo-400 pl-3">
                      <p className="text-sm font-medium text-indigo-400">SOLUCIÓN</p>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    
                    <div className="border-l-2 border-green-400 pl-3">
                      <p className="text-sm font-medium text-green-400">RESULTADO</p>
                      <p className="text-gray-300">{study.results}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold text-center mb-8 text-white">Lo que dicen nuestros clientes</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-[#1A1A2E]/60 p-6 rounded-xl border border-indigo-500/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image src={testimonial.image} alt={testimonial.name} width={64} height={64} className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-indigo-300">{testimonial.position}</p>
                      <p className="text-xs text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 7. Elementos UX avanzados */}
        <section
          id="avanzados"
          ref={avanzadosRef}
          className="py-16 md:py-24 bg-gradient-to-b from-[#1A1A2E]/30 to-transparent"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              Herramientas avanzadas de UX y desarrollo
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-gray-300">
              Utilizamos metodologías probadas y tecnologías de vanguardia para crear productos digitales de alta calidad.
            </p>
            
            <div className="relative aspect-video mb-16">
              <div className="absolute inset-0 bg-black/30 rounded-xl overflow-hidden flex items-center justify-center">
                <Image 
                  src="/imagenes/video-placeholder.jpg" 
                  alt="Video testimonial" 
                  fill 
                  className="object-cover opacity-70"
                />
                <button className="w-20 h-20 rounded-full bg-indigo-500/80 flex items-center justify-center z-10 hover:bg-indigo-600/80 transition-colors">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1A1A2E]/60 p-5 rounded-xl border border-indigo-500/20 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-900/30 flex items-center justify-center">
                  <FaPencilRuler size={32} className="text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Prototipado Interactivo</h3>
                <p className="text-gray-300 text-sm">Creamos prototipos de alta fidelidad que simulan la experiencia real antes de escribir código.</p>
              </div>
              
              <div className="bg-[#1A1A2E]/60 p-5 rounded-xl border border-indigo-500/20 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-900/30 flex items-center justify-center">
                  <FaMobile size={32} className="text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Diseño Responsive Avanzado</h3>
                <p className="text-gray-300 text-sm">Cada interfaz se adapta perfectamente a cualquier tamaño de pantalla, desde móviles hasta grandes monitores.</p>
              </div>
              
              <div className="bg-[#1A1A2E]/60 p-5 rounded-xl border border-indigo-500/20 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-900/30 flex items-center justify-center">
                  <FaChartLine size={32} className="text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Análisis de UX</h3>
                <p className="text-gray-300 text-sm">Utilizamos herramientas avanzadas de seguimiento y análisis para optimizar continuamente la experiencia.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* 8. Lead Magnet y Recursos */}
        <section
          id="leadMagnet"
          ref={leadMagnetRef}
          className="py-16 md:py-24"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[#1A1A2E]/60 p-8 rounded-xl border border-indigo-500/30">
              <FaDownload size={48} className="mx-auto text-indigo-400 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Guía Gratuita: "Mejores prácticas UX + KPIs técnicos"
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Descarga nuestra guía con las mejores prácticas de UX, checklist de accesibilidad y los KPIs técnicos que debes monitorear para un producto digital exitoso.
              </p>
              
              <form className="max-w-md mx-auto">
                <div className="flex flex-col md:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    className="px-4 py-3 bg-[#0D0C1D] border border-indigo-500/30 rounded-full focus:outline-none focus:border-indigo-500 text-white flex-1"
                    required 
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-full hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaDownload /> Descargar Guía
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* 9. Formulario de Conversión / CTA Final */}
        <section
          id="contacto"
          ref={contactoRef}
          className="py-16 md:py-24"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              ¿Listo para transformar tu producto digital?
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-8 text-gray-300">
              Agenda una auditoría UX/UI gratuita y descubre cómo podemos ayudarte a mejorar la experiencia de usuario y el rendimiento técnico.
            </p>
            
            <div className="bg-[#1A1A2E]/60 p-8 rounded-xl border border-indigo-500/30">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                    <input 
                      type="text" 
                      id="nombre" 
                      className="w-full px-4 py-3 bg-[#0D0C1D] border border-indigo-500/30 rounded-lg focus:outline-none focus:border-indigo-500 text-white"
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-[#0D0C1D] border border-indigo-500/30 rounded-lg focus:outline-none focus:border-indigo-500 text-white"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-1">Empresa</label>
                  <input 
                    type="text" 
                    id="empresa" 
                    className="w-full px-4 py-3 bg-[#0D0C1D] border border-indigo-500/30 rounded-lg focus:outline-none focus:border-indigo-500 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="proyecto" className="block text-sm font-medium text-gray-300 mb-1">¿Qué tipo de proyecto tienes?</label>
                  <select
                    id="proyecto"
                    className="w-full px-4 py-3 bg-[#0D0C1D] border border-indigo-500/30 rounded-lg focus:outline-none focus:border-indigo-500 text-white"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="website">Sitio Web</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="app">Aplicación Móvil</option>
                    <option value="saas">SaaS / Plataforma Web</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-center">
                  <button 
                    type="submit" 
                    className="px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-full hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 text-lg font-medium"
                  >
                    <FaCalendarCheck /> Agenda tu auditoría gratuita
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
export {};
// Dummy export to ensure module context

