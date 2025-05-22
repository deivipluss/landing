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
        <p className="text-lg sm:text-xl font-light">
          Experiencia moderna y elegante para compartir historias de viaje.
        </p>
        <p className="text-blue-400 font-medium">
          ¡Oferta especial por tiempo limitado!
        </p>
      </div>
    )
  },
  {
    title: "Visión del Proyecto",
    content: (
      <div className="space-y-4">
        <p className="text-lg font-light leading-relaxed">
          Una revista digital interactiva que combina diseño moderno y funcionalidad intuitiva, permitiendo a los usuarios compartir sus historias de viaje de forma elegante y profesional.
        </p>
        <p className="text-gray-400">
          Administración simple vía Google Sheets + Hosting y dominio incluidos
        </p>
      </div>
    )
  },
  {
    title: "Stack Tecnológico",
    content: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-[#4A90E2] font-medium text-lg">Frontend</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">•</span>
              React + Next.js
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              TailwindCSS
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Framer Motion
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-[#FF5C5C] font-medium text-lg">Backend</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Google Sheets API
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Vercel Hosting
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Dominio .com
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Características Clave",
    content: (
      <div className="space-y-6 text-left w-full max-w-2xl mx-auto">
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
      <div className="space-y-6 text-left w-full max-w-xl mx-auto">
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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);
  const [active, setActive] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

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

  const handleScroll = React.useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = containerRef.current;
      const newProgress = scrollLeft / (scrollWidth - offsetWidth);
      setProgress(newProgress);
      
      const newActive = Math.round(scrollLeft / offsetWidth);
      if (newActive !== active) {
        setActive(newActive);
      }
    }
  }, [active]);

  // Eventos táctiles mejorados
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  React.useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchend', handleTouchEnd);
      container.addEventListener('scroll', handleScroll);
      
      return () => {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827]">
      {/* Barra de progreso */}
      <div className="absolute top-0 left-0 right-0 h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Contenedor principal con scroll horizontal */}
      <div
        ref={containerRef}
        className="h-screen w-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
        style={{ 
          scrollSnapType: "x mandatory",
          scrollBehavior: isDragging ? 'auto' : 'smooth',
          touchAction: 'pan-x'
        }}
        onScroll={handleScroll}
      >
        {/* Contenedor de slides */}
        <div className="flex h-full">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-full h-full snap-center flex items-center justify-center"
            >
              <div className="w-full max-w-2xl mx-auto px-4 py-12">
                {/* Título */}
                <h1 
                  className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 text-center mb-4"
                >
                  {slide.title}
                </h1>

                {/* Subtítulo */}
                {slide.subtitle && (
                  <h2 className="text-lg sm:text-xl text-blue-300 font-medium text-center mb-6">
                    {slide.subtitle}
                  </h2>
                )}

                {/* Tarjeta de contenido */}
                <div className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10 text-white">
                  {slide.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación - Ocultos en móvil */}
      <button
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-blue-500 transition-all duration-300 shadow-lg hidden md:block"
        onClick={() => scrollTo("left")}
        disabled={active === 0}
        style={{ opacity: active === 0 ? 0.3 : 1 }}
      >
        <span className="text-xl">←</span>
      </button>

      <button
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-blue-500 transition-all duration-300 shadow-lg hidden md:block"
        onClick={() => scrollTo("right")}
        disabled={active === slides.length - 1}
        style={{ opacity: active === slides.length - 1 ? 0.3 : 1 }}
      >
        <span className="text-xl">→</span>
      </button>

      {/* Indicadores de progreso */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center gap-2 z-50">
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
            className={`h-1 rounded-full transition-all duration-300 ${
              active === idx 
                ? 'bg-blue-500 w-8' 
                : 'bg-white/20 w-4 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      <style jsx global>{`
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
