"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeNavigation from "@/components/HomeNavigation";
import SidebarNavigation from "@/components/SidebarNavigation";
import Footer from "@/components/Footer";
import { CreatorMetricsChart } from "../redes-membresia/CreatorMetricsChart";
import Link from "next/link";

// Datos para la sección de métricas: se muestran tendencias de alcance, seguidores y conversiones a lo largo del tiempo.
const socialMetrics = {
  alcance: [
    { year: 2023, value: 10000 },
    { year: 2024, value: 45000 },
    { year: 2025, value: 90000 },
  ],
  seguidores: [
    { year: 2023, value: 1500 },
    { year: 2024, value: 8000 },
    { year: 2025, value: 20000 },
  ],
  conversiones: [
    { year: 2023, value: 5 },
    { year: 2024, value: 20 },
    { year: 2025, value: 40 },
  ],
};

// Servicios que ofrecen para la gestión de contenido y redes sociales.
const services = [
  {
    title: "Gestión Orgánica de Redes",
    features: [
      "Estrategias de contenido personalizadas para Facebook, Instagram, LinkedIn, YouTube y más",
      "Investigación de audiencia y optimización de horarios de publicación",
      "Interacción con la comunidad y respuesta ágil a la alta demanda",
    ],
  },
  {
    title: "Publicidad Pagada",
    features: [
      "Diseño y gestión de campañas en Meta Ads, Google Ads y LinkedIn Ads",
      "Segmentación avanzada y remarketing para maximizar ROI",
      "Informes detallados y ajustes continuos para mejorar resultados",
    ],
  },
  {
    title: "Producción y Diseño",
    features: [
      "Equipo de copywriters especializados en storytelling y SEO",
      "Diseñadores gráficos, animadores y editores para crear piezas de impacto",
      "Fotógrafos y filmmakers que elevan tu identidad visual",
    ],
  },
  {
    title: "Estrategia 360°",
    features: [
      "Integración de contenido orgánico, campañas pagadas y gestión de comunidad",
      "Planificación y calendario editorial mensual",
      "Medición de KPIs y asesoría constante para optimizar tu presencia digital",
    ],
  },
];

// Preguntas frecuentes para resolver las dudas más comunes.
const faqData = [
  {
    question: "¿Qué redes sociales gestionan?",
    answer:
      "Trabajamos con las plataformas donde está tu audiencia: Facebook, Instagram, LinkedIn, TikTok, YouTube y otras. Definimos una estrategia específica para cada canal según tus objetivos.",
  },
  {
    question: "¿Cuál es la diferencia entre crecimiento orgánico y pagado?",
    answer:
      "El crecimiento orgánico se basa en contenido de valor que atrae a tu comunidad de manera natural; el crecimiento pagado incluye campañas publicitarias segmentadas que amplifican tu alcance y aceleran los resultados.",
  },
  {
    question: "¿Quién crea el contenido?",
    answer:
      "Contamos con copywriters, diseñadores, animadores, editores, fotógrafos y filmmakers que trabajan en conjunto para producir contenido creativo y alineado a tu marca.",
  },
  {
    question: "¿Manejan la pauta publicitaria?",
    answer:
      "Sí. Diseñamos, ejecutamos y optimizamos campañas pagadas en todas las plataformas relevantes, cuidando tu presupuesto y maximizando el retorno de inversión.",
  },
];

// Publicaciones de blog para la sección de recursos.
const blogPosts = [
  {
    title: "Tendencias de Contenido para 2025",
    date: "20 Julio, 2025",
    image: "/imagenes/blog-tendencias.jpg",
    excerpt:
      "Descubre las tendencias que marcarán el contenido en redes sociales durante el próximo año.",
  },
  {
    title: "Cómo Construir una Comunidad Leal",
    date: "12 Julio, 2025",
    image: "/imagenes/blog-comunidad.jpg",
    excerpt:
      "Aprende a crear una comunidad sólida y participativa en torno a tu marca en redes sociales.",
  },
  {
    title: "Publicidad Digital Eficiente",
    date: "05 Julio, 2025",
    image: "/imagenes/blog-publicidad.jpg",
    excerpt:
      "Guía para optimizar tus campañas pagadas y obtener el máximo rendimiento de tu inversión.",
  },
];

export default function ContenidosPage() {
  // Estado para mostrar el botón de volver al inicio y para controlar la sección activa del sidebar.
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const { scrollY, scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Referencias a cada sección para detectar cuándo están en el viewport.
  const overviewRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Suscribirse a los cambios de scroll para actualizar la sección activa y la visibilidad del botón.
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
          const { top, bottom } =
            section.ref.current.getBoundingClientRect();
          return top <= 100 && bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    });
  }, [scrollY]);

  // Desplaza la pantalla hasta arriba de forma suave.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Navegación superior (mobile) */}
      <HomeNavigation />

      {/* Navegación lateral (desktop) */}
      <div className="hidden md:block fixed left-0 top-0 h-full z-50">
        <SidebarNavigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      {/* Contenedor principal */}
      <div className="md:ml-64">
        {/* Sección Hero / Overview */}
        <section
          id="overview"
          ref={overviewRef}
          className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-16 text-center"
        >
          <motion.h1
            style={{ opacity, scale }}
            className="text-3xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#4A90E2] to-[#00F5D4] text-transparent bg-clip-text"
          >
            Gestión de Contenido y Redes Sociales 360°
          </motion.h1>
          <p className="text-lg md:text-2xl max-w-3xl mb-8 text-gray-700">
            Impulsamos tu presencia en Facebook, Instagram, LinkedIn y otras
            plataformas con estrategias orgánicas, campañas pagadas y un
            equipo creativo integral.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Link
              href="#features"
              className="px-6 py-3 bg-gradient-to-r from-[#4A90E2] to-[#00F5D4] text-white rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Explorar servicios
            </Link>
            <Link
              href="#blog"
              className="px-6 py-3 border border-[#4A90E2] text-[#4A90E2] rounded-full hover:bg-[#4A90E2] hover:text-white transition-all duration-300 hover:scale-105"
            >
              Ver recursos
            </Link>
          </div>
        </section>

        {/* Sección de métricas */}
        <section
          id="metrics"
          ref={metricsRef}
          className="py-16 px-6 md:px-12 bg-gray-50"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            Resultados que se pueden medir
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-8 text-gray-600">
            Nuestro enfoque está basado en datos. Analizamos y optimizamos
            continuamente para garantizar un crecimiento orgánico sostenido y
            un retorno de inversión positivo.
          </p>
          <div className="max-w-4xl mx-auto">
            <CreatorMetricsChart data={socialMetrics} />
          </div>
        </section>

        {/* Sección de servicios y equipo (features) */}
        <section
          id="features"
          ref={featuresRef}
          className="py-16 px-6 md:px-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
            Servicios a tu medida
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">
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
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Equipo multidisciplinario
            </h3>
            <p className="max-w-3xl mx-auto text-gray-700">
              Nuestro equipo está formado por copywriters creativos, diseñadores
              talentosos, animadores, editores expertos, fotógrafos y filmmakers
              que trabajan en conjunto para dar vida a tu marca. Con su ayuda,
              creamos experiencias visuales y narrativas que conectan con tu
              audiencia y elevan tu presencia digital.
            </p>
          </div>
        </section>

        {/* Sección de FAQ y Blog */}
        <section
          id="blog"
          ref={blogRef}
          className="py-16 px-6 md:px-12 bg-gray-50"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-semibold mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mt-12 mb-8 text-center">
            Blog y Recursos
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-sm text-gray-500">{post.date}</p>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 text-sm">{post.excerpt}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              ¿Listo para llevar tu marca al siguiente nivel?
            </h3>
            <p className="max-w-3xl mx-auto mb-6 text-gray-700">
              Agenda una consulta gratuita con nuestro equipo y descubre cómo
              podemos ayudarte a crecer orgánicamente y con publicidad
              estratégica.
            </p>
            <Link
              href="#"
              className="px-8 py-3 bg-gradient-to-r from-[#4A90E2] to-[#00F5D4] text-white rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Agendar consulta
            </Link>
          </div>
        </section>

        {/* Botón para volver al inicio */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#4A90E2] text-white p-3 rounded-full shadow-lg hover:bg-[#00F5D4] transition-colors z-50"
          >
            ↑
          </button>
        )}

        {/* Pie de página */}
        <Footer />
      </div>
    </div>
  );
}