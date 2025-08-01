"use client";

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

export default function UxDesarrolloPage() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.2]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  
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

        {/* Sección Hero */}
        <section
          id="overview"
          ref={overviewRef}
          className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-16 text-center bg-gradient-to-br from-[#3498DB] via-[#2980B9] to-[#1A1A2E]"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#00F5D4] to-[#3498DB] text-transparent bg-clip-text"
            style={{ opacity: 1, scale: 1 }}
          >
            UX/UI & Desarrollo
          </motion.h1>
          <p className="text-lg md:text-2xl max-w-3xl mb-8 text-gray-200">
            Creamos experiencias digitales intuitivas y potentes.
          </p>
          <Link
            href="#design"
            onClick={() => scrollToSection("design")}
            className="px-6 py-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300"
          >
            Explorar Servicios
          </Link>
        </section>

        {/* Diseño */}
        <section id="design" ref={designRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#3498DB]">
            Servicios de Diseño
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="p-6 border border-[#3498DB] rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-[#3498DB]">
                Investigación y Arquitectura
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Research de usuarios y análisis de métricas</li>
                <li>Wireframes y flujos de usuario</li>
                <li>Mapas de experiencia y journey mapping</li>
              </ul>
            </div>
            <div className="p-6 border border-[#3498DB] rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-[#3498DB]">
                Diseño de Interfaces
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>UI visual y guías de estilo</li>
                <li>Prototipos interactivos en Figma</li>
                <li>Diseño responsivo y accesible</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Frontend */}
        <section id="frontend" ref={frontendRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#3498DB]">
            Desarrollo Frontend
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-2xl mx-auto">
            <li>React, Next.js y Tailwind CSS</li>
            <li>Componentización y reuse</li>
            <li>Optimización de rendimiento y SEO</li>
          </ul>
        </section>

        {/* Backend */}
        <section id="backend" ref={backendRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#3498DB]">
            Desarrollo Backend
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-2xl mx-auto">
            <li>Node.js, Express y API REST</li>
            <li>Bases de datos SQL y NoSQL</li>
            <li>Autenticación y seguridad</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" ref={faqRef} className="py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#3498DB]">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqUI.map((faq, idx) => (
              <div key={idx} className="border-b border-[#3498DB] pb-4">
                <h4 className="text-lg font-semibold mb-2 text-[#3498DB]">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}
