"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeNavigation from "@/components/HomeNavigation";
import SidebarNavigation from "@/components/SidebarNavigation";
import { FiBarChart2, FiUsers, FiSettings, FiBookOpen } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import Footer from "@/components/Footer";
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { CreatorMetricsChart } from "../redes-membresia/CreatorMetricsChart";
import Link from "next/link";

// Métricas de ejemplo para la sección de resultados
const contentMetrics = {
  alcance: [
    { year: 2023, value: 12000 },
    { year: 2024, value: 60000 },
    { year: 2025, value: 130000 },
  ],
  seguidores: [
    { year: 2023, value: 2000 },
    { year: 2024, value: 12000 },
    { year: 2025, value: 30000 },
  ],
  conversiones: [
    { year: 2023, value: 8 },
    { year: 2024, value: 35 },
    { year: 2025, value: 75 },
  ],
};

const services = [
  {
    title: "Estrategia de Contenidos",
    features: [
      "Calendario editorial personalizado para cada red",
      "Análisis de tendencias y benchmarking sectorial",
      "Optimización de horarios y formatos según audiencia",
    ],
  },
  {
    title: "Producción Creativa",
    features: [
      "Copywriting persuasivo y storytelling de marca",
      "Diseño gráfico, animación y video profesional",
      "Fotografía y edición para identidad visual potente",
    ],
  },
  {
    title: "Gestión y Automatización",
    features: [
      "Publicación programada y multicanal",
      "Monitoreo de interacciones y respuesta ágil",
      "Reportes automáticos de performance y KPIs",
    ],
  },
  {
    title: "Campañas Pagadas",
    features: [
      "Segmentación avanzada y remarketing",
      "Creatividades para Ads en Meta, Google y LinkedIn",
      "Optimización de presupuesto y resultados",
    ],
  },
];

const faqData = [
  {
    question: "¿Qué plataformas gestionan?",
    answer:
      "Trabajamos con Facebook, Instagram, LinkedIn, TikTok, YouTube y más. Adaptamos la estrategia a cada canal y objetivo de tu marca.",
  },
  {
    question: "¿Cómo se mide el éxito?",
    answer:
      "Analizamos métricas de alcance, engagement, leads y conversiones. Recibes reportes periódicos y asesoría para mejorar resultados.",
  },
  {
    question: "¿Quién produce el contenido?",
    answer:
      "Nuestro equipo multidisciplinario: copywriters, diseñadores, animadores, editores, fotógrafos y filmmakers.",
  },
  {
    question: "¿Pueden gestionar campañas pagadas?",
    answer:
      "Sí, diseñamos y optimizamos campañas en Meta, Google, LinkedIn y más, maximizando tu inversión.",
  },
];

const blogPosts = [
  {
    title: "Tendencias de Contenido 2025",
    date: "Julio 2025",
    image: "/imagenes/blog-tendencias.jpg",
    excerpt:
      "Descubre las estrategias que dominarán el marketing de contenidos el próximo año y cómo aplicarlas en tu empresa.",
  },
  {
    title: "Cómo la IA revoluciona la producción",
    date: "Junio 2025",
    image: "/imagenes/blog-ia.jpg",
    excerpt:
      "La inteligencia artificial permite crear, optimizar y distribuir contenido a escala. Aprende a aprovecharla.",
  },
  {
    title: "De seguidores a clientes fieles",
    date: "Mayo 2025",
    image: "/imagenes/blog-clientes.jpg",
    excerpt:
      "Estrategias para convertir tu comunidad digital en ventas y relaciones duraderas.",
  },
];

export default function ContenidosPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const { scrollY, scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const overviewRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return scrollY.onChange(() => {
      setShowScrollTop(scrollY.get() > 100);
      const sections = [
        { ref: overviewRef, id: "overview" },
        { ref: metricsRef, id: "metrics" },
        { ref: featuresRef, id: "features" },
        { ref: blogRef, id: "blog" },
      ];
      const currentSection = sections.find((section) => {
        if (section.ref.current) {
          const { top, bottom } = section.ref.current.getBoundingClientRect();
          return top <= 100 && bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Función para desplazar a la sección seleccionada
  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  // Menú lateral personalizado (máximo 5 íconos + WhatsApp)
  const sidebarMenu = [
    { id: "overview", label: "Visión General", icon: <FiBarChart2 size={20} /> },
    { id: "metrics", label: "Resultados", icon: <FiBarChart2 size={20} /> },
    { id: "features", label: "Servicios", icon: <FiSettings size={20} /> },
    { id: "faq", label: "FAQ", icon: <FiHelpCircle size={20} /> },
    { id: "blog", label: "Blog", icon: <FiBookOpen size={20} /> }
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
        {/* Hero Section */}
        <section
          id="overview"
          ref={overviewRef}
          className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-16 text-center bg-gradient-to-br from-[#0D0C1D] via-[#1A1A2E] to-[#4A90E2]"
        >
          <motion.h1
            style={{ opacity, scale }}
            className="text-3xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#00F5D4] to-[#4A90E2] text-transparent bg-clip-text"
          >
            Gestión de Contenidos y Social Media
          </motion.h1>
          <p className="text-lg md:text-2xl max-w-3xl mb-8 text-gray-700">
            Multiplica tu alcance, engagement y ventas con estrategias de contenido, creatividad y automatización.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Link
              href="#features"
              className="px-6 py-3 bg-gradient-to-r from-[#00F5D4] to-[#4A90E2] text-white rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Explorar servicios
            </Link>
            <Link
              href="#blog"
              className="px-6 py-3 border border-[#00F5D4] text-[#00F5D4] rounded-full hover:bg-[#00F5D4] hover:text-white transition-all duration-300 hover:scale-105"
            >
              Ver recursos
            </Link>
          </div>
        </section>

        {/* Métricas de Impacto */}
        <section
          id="metrics"
          ref={metricsRef}
          className="py-16 px-6 md:px-12 bg-[#181828]"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-[#00B894]">
            Resultados que hablan por sí mismos
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-8 text-gray-600">
            Analizamos y optimizamos cada acción para garantizar crecimiento orgánico, engagement real y retorno de inversión.
          </p>
          <div className="max-w-4xl mx-auto">
            <CreatorMetricsChart data={contentMetrics} />
          </div>
        </section>

        {/* Servicios y equipo */}
        <section
          id="features"
          ref={featuresRef}
          className="py-16 px-6 md:px-12 bg-[#181828]"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-[#00B894]">
            Servicios a tu medida
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-[#00F5D4] shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#4A90E2]">
                  {service.title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#4A90E2]">
              Equipo multidisciplinario
            </h3>
            <p className="max-w-3xl mx-auto text-gray-700">
              Copywriters, diseñadores, animadores, editores, fotógrafos y filmmakers trabajan juntos para crear experiencias visuales y narrativas que conectan con tu audiencia y elevan tu marca.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          ref={faqRef}
          className="py-16 px-6 md:px-12 bg-[#181828]"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-[#00B894]">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-[#00F5D4] pb-4">
                <h4 className="text-lg font-semibold mb-2 text-[#4A90E2]">
                  {faq.question}
                </h4>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Blog Section */}
        <section
          id="blog"
          ref={blogRef}
          className="py-16 px-6 md:px-12 bg-[#181828]"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-[#00B894]">
            Blog y Recursos
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="rounded-xl border border-[#00F5D4] p-4 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded mb-3" />
                <p className="text-sm text-gray-500">{post.date}</p>
                <h3 className="text-lg font-semibold mb-2 text-[#4A90E2]">{post.title}</h3>
                <p className="text-gray-700 text-sm">{post.excerpt}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#4A90E2]">
              ¿Listo para transformar tu contenido?
            </h3>
            <p className="max-w-3xl mx-auto mb-6 text-gray-700">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a crecer con contenido estratégico y creatividad.
            </p>
            <Link
              href="#"
              className="px-8 py-3 bg-gradient-to-r from-[#00F5D4] to-[#4A90E2] text-white rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Agendar consulta
            </Link>
          </div>
        </section>

        {/* Botón para volver al inicio */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#00F5D4] text-[#4A90E2] p-3 rounded-full shadow-lg hover:bg-[#4A90E2] hover:text-white transition-colors z-50"
          >
            ↑
          </button>
        )}

        {/* Footer */}
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}