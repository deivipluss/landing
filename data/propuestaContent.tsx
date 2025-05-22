"use client";

import React from "react";

export interface ProposalSlideType {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const proposalSlides: ProposalSlideType[] = [
  {
    title: "Aplicación Web para Revista Turística",
    subtitle: "Desarrollo visual, interactivo y funcional",
    content: (
      <div className="space-y-4">
        <p className="text-xl font-light">Experiencia moderna y elegante para compartir historias de viaje.</p>
        <p className="text-blue-400 font-medium">¡Oferta especial por tiempo limitado!</p>
      </div>
    )
  },
  {
    title: "Visión del Proyecto",
    content: (
      <div className="space-y-4">
        <p className="text-xl font-light leading-relaxed">
          Una revista digital interactiva que combina diseño moderno y funcionalidad intuitiva, permitiendo a los usuarios compartir sus historias de viaje de forma elegante y profesional.
        </p>
        <p className="text-gray-400 text-lg">
          Administración simple vía Google Sheets + Hosting y dominio incluidos
        </p>
      </div>
    )
  },
  {
    title: "Stack Tecnológico",
    content: (
      <div className="grid grid-cols-2 gap-6 text-left max-w-xl mx-auto">
        <div>
          <h3 className="text-[#4A90E2] mb-2 font-medium">Frontend</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• React + Next.js</li>
            <li>• TailwindCSS</li>
            <li>• Framer Motion</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#FF5C5C] mb-2 font-medium">Backend</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Google Sheets API</li>
            <li>• Vercel Hosting</li>
            <li>• Dominio .com</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Características Clave",
    content: (
      <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
        <div className="space-y-3">
          <h3 className="text-[#4A90E2] font-medium">Experiencia de Usuario</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Diseño responsive moderno</li>
            <li>• Animaciones fluidas</li>
            <li>• Navegación intuitiva</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-[#FF5C5C] font-medium">Funcionalidades</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Blog interactivo</li>
            <li>• Panel de administración</li>
            <li>• Analytics integrado</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Cronograma",
    subtitle: "Desarrollo Ágil",
    content: (
      <div className="grid grid-cols-2 gap-8 max-w-xl mx-auto text-left">
        <div>
          <h3 className="text-[#4A90E2] mb-3 font-medium">Fase 1 (1-2 semanas)</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Diseño UI/UX</li>
            <li>• Prototipado</li>
            <li>• Arquitectura base</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#FF5C5C] mb-3 font-medium">Fase 2 (2-3 semanas)</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Desarrollo frontend</li>
            <li>• Integración backend</li>
            <li>• Testing & Deploy</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Inversión",
    subtitle: "Oferta por Tiempo Limitado",
    content: (
      <div className="space-y-6 max-w-lg mx-auto">
        <div className="text-center space-y-2">
          <p className="text-3xl font-bold text-[#4A90E2]">$450 USD</p>
          <p className="text-gray-400 line-through">Valor regular: $900 USD</p>
        </div>
        <ul className="text-left space-y-3 text-gray-300">
          <li className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            Desarrollo completo
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            Dominio y hosting 1 año
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            Soporte técnico 15 días
          </li>
        </ul>
        <p className="text-[#FF5C5C] font-medium text-sm">
          * Oferta válida solo por 24 horas
        </p>
      </div>
    )
  },
  {
    title: "¿Comenzamos?",
    subtitle: "Tu Proyecto en Buenas Manos",
    content: (
      <div className="space-y-6 max-w-lg mx-auto text-center">
        <p className="text-xl font-light leading-relaxed">
          Estoy listo para crear tu revista digital interactiva con los más altos estándares de calidad y diseño.
        </p>
        <div className="space-y-2 text-[#4A90E2]">
          <p className="font-medium">📱 WhatsApp: [tu número]</p>
          <p className="font-medium">📧 Email: [tu correo]</p>
        </div>
        <p className="text-gray-400 text-sm">
          * El desarrollo comienza tras la confirmación del pago
        </p>
      </div>
    )
  }
];

// Nuevo componente para navegación horizontal y UX/UI
// Marcar como 'use client' para permitir hooks
export function HorizontalSlides({ slides }: { slides: ProposalSlideType[] }) {
  "use client";
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);
  const [active, setActive] = React.useState(0);

  // Scroll suave y centrado
  const scrollTo = (dir: "left" | "right") => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      let next = active + (dir === "right" ? 1 : -1);
      next = Math.max(0, Math.min(slides.length - 1, next));
      setActive(next);
      containerRef.current.scrollTo({
        left: width * next,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = containerRef.current;
      setProgress(scrollLeft / (scrollWidth - offsetWidth));
      setActive(Math.round(scrollLeft / offsetWidth));
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0D0C1D] via-[#1A1A2E] to-[#0D0C1D]">
      {/* Barra de progreso */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A90E2] to-[#FF5C5C]" style={{ width: `${progress * 100}%` }} />
      
      {/* Controles de navegación */}
      <button
        className="fixed left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-[#1A1A2E]/80 backdrop-blur-sm text-[#4A90E2] hover:text-white hover:bg-[#4A90E2] transition-all duration-300"
        onClick={() => scrollTo("left")}
        aria-label="Anterior"
        disabled={active === 0}
        style={{ opacity: active === 0 ? 0.3 : 1 }}
      >
        <span className="text-2xl">←</span>
      </button>

      {/* Contenedor principal de slides */}
      <div
        ref={containerRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
        onScroll={handleScroll}
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
      >
        {slides.map((slide, idx) => (
          <section
            key={idx}
            className={`w-full min-w-full h-full flex flex-col items-center justify-center snap-center px-8 md:px-16 py-12 transition-all duration-500`}
            style={{
              opacity: active === idx ? 1 : 0.3,
              transform: `scale(${active === idx ? 1 : 0.95})`,
            }}
          >
            <div className="w-full max-w-3xl mx-auto space-y-6 text-center">
              {/* Título con gradiente animado */}
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-[#4A90E2] via-white to-[#FF5C5C] bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% auto',
                  animation: 'gradient 8s linear infinite',
                }}
              >
                {slide.title}
              </h1>

              {/* Subtítulo con efecto de brillo */}
              {slide.subtitle && (
                <h2 className="text-xl sm:text-2xl text-[#FF5C5C] font-medium mt-4 drop-shadow-glow">
                  {slide.subtitle}
                </h2>
              )}

              {/* Contenido con estilo mejorado */}
              <div className="text-lg sm:text-xl text-[#E1E1E1]/90 leading-relaxed mt-8 max-w-2xl mx-auto">
                {slide.content}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Botón siguiente */}
      <button
        className="fixed right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-[#1A1A2E]/80 backdrop-blur-sm text-[#4A90E2] hover:text-white hover:bg-[#4A90E2] transition-all duration-300"
        onClick={() => scrollTo("right")}
        aria-label="Siguiente"
        disabled={active === slides.length - 1}
        style={{ opacity: active === slides.length - 1 ? 0.3 : 1 }}
      >
        <span className="text-2xl">→</span>
      </button>

      {/* Indicadores de posición */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (containerRef.current) {
                containerRef.current.scrollTo({
                  left: containerRef.current.offsetWidth * idx,
                  behavior: "smooth"
                });
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              active === idx 
                ? 'bg-[#4A90E2] w-6' 
                : 'bg-[#4A90E2]/20 hover:bg-[#4A90E2]/40'
            }`}
          />
        ))}
      </div>

      {/* Estilos globales para animaciones */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
