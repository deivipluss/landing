"use client";

import React from "react";

export interface ProposalSlideType {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const proposalSlides: ProposalSlideType[] = [
  {
    title: "Promo Tours Pasco",
    subtitle: "Tu guía digital de experiencias turísticas",
    content: (
      <div className="space-y-4">
        <p className="text-lg sm:text-xl font-light text-slate-100">
          Plataforma digital interactiva que conecta viajeros con las mejores experiencias turísticas de Pasco.
        </p>
        <p className="text-[#4A90E2] font-medium">
          ¡Lanzamiento especial con beneficios exclusivos!
        </p>
      </div>
    )
  },
  {
    title: "Visión del Proyecto",
    content: (
      <div className="space-y-4">
        <p className="text-lg font-light leading-relaxed text-slate-100">
          Un ecosistema digital que revoluciona la forma de descubrir y compartir experiencias en Pasco. Conectamos viajeros con destinos únicos, historias auténticas y aventuras inolvidables.
        </p>
        <p className="text-[#4A90E2]">
          Portal web + Revista digital + Comunidad de viajeros
        </p>
      </div>
    )
  },
  {
    title: "Características Premium",
    content: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-[#4A90E2] font-medium text-lg">Para Viajeros</h3>
          <ul className="space-y-2 text-slate-200">
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Guías interactivas de destinos
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Experiencias verificadas
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Reseñas y testimonios reales
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-[#FF5C5C] font-medium text-lg">Para Negocios</h3>
          <ul className="space-y-2 text-slate-200">
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              Promoción estratégica
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              Dashboard analítico
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              Gestión de reservas
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Experiencia Única",
    content: (
      <div className="space-y-6 text-left w-full max-w-2xl mx-auto">
        <div className="space-y-3">
          <h3 className="text-[#4A90E2] font-medium">Contenido Premium</h3>
          <ul className="space-y-2 text-slate-200">
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Fotografías profesionales
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Videos inmersivos
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Historias locales
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-[#FF5C5C] font-medium">Tecnología Avanzada</h3>
          <ul className="space-y-2 text-slate-200">
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              Mapas interactivos
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              Reservas en tiempo real
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              App móvil integrada
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Plan de Desarrollo",
    subtitle: "Lanzamiento por Fases",
    content: (
      <div className="space-y-6 text-left w-full max-w-xl mx-auto">
        <div>
          <h3 className="text-[#4A90E2] mb-3 font-medium">Fase 1: Base Digital</h3>
          <ul className="space-y-2 text-slate-200 text-sm">
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Portal web y revista digital
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Perfiles de destinos
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Sistema de reseñas
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#FF5C5C] mb-3 font-medium">Fase 2: Expansión</h3>
          <ul className="space-y-2 text-slate-200 text-sm">
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              App móvil nativa
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              Sistema de reservas
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              Marketplace local
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Inversión",
    subtitle: "Oferta de Lanzamiento",
    content: (
      <div className="space-y-6 max-w-lg mx-auto">
        <div className="text-center space-y-2">
          <p className="text-3xl font-bold text-[#4A90E2]">$450 USD</p>
          <p className="text-slate-400 line-through">Valor regular: $900 USD</p>
        </div>
        <ul className="text-left space-y-3 text-slate-200">
          <li className="flex items-center">
            <span className="text-emerald-400 mr-2">✓</span>
            Plataforma web completa
          </li>
          <li className="flex items-center">
            <span className="text-emerald-400 mr-2">✓</span>
            Hosting y dominio 1 año
          </li>
          <li className="flex items-center">
            <span className="text-emerald-400 mr-2">✓</span>
            15 días de soporte premium
          </li>
        </ul>
        <p className="text-[#FF5C5C] font-medium text-sm">
          * Precio especial de lanzamiento por tiempo limitado
        </p>
      </div>
    )
  },
  {
    title: "¿Listo para Comenzar?",
    subtitle: "Impulsa el Turismo en Pasco",
    content: (
      <div className="space-y-8 max-w-lg mx-auto">
        <div className="space-y-4 text-center">
          <h3 className="text-xl font-medium text-[#4A90E2]">Deivis</h3>
          <p className="text-lg text-slate-100">
            Desarrollador Web & UX/UI Designer especializado en plataformas turísticas digitales.
          </p>
          <p className="text-slate-300 text-sm">
            +10 años creando experiencias digitales memorables y efectivas.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <a 
            href="https://wa.me/51989843709" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            <span className="text-xl">📱</span>
            Iniciar Proyecto vía WhatsApp
          </a>
          
          <a 
            href="/contacto" 
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#4A90E2]/20 to-[#FF5C5C]/20 hover:from-[#4A90E2] hover:to-[#FF5C5C] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 border border-[#4A90E2]/30 hover:border-[#4A90E2]"
          >
            <span className="text-xl">✉️</span>
            Solicitar Más Información
          </a>
        </div>

        <p className="text-slate-400 text-sm text-center">
          * El desarrollo comienza tras la confirmación del pago inicial
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
  const [startX, setStartX] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  // Scroll suave y centrado con detección de dirección
  const scrollTo = React.useCallback((index: number) => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const targetIndex = Math.max(0, Math.min(slides.length - 1, index));
      setActive(targetIndex);
      containerRef.current.scrollTo({
        left: width * targetIndex,
        behavior: 'smooth'
      });
    }
  }, [slides.length]);

  const handleScroll = React.useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = containerRef.current;
      const newProgress = scrollLeft / (scrollWidth - offsetWidth);
      setProgress(newProgress);
      
      // Calcular el slide activo con más precisión
      const newActive = Math.round(scrollLeft / offsetWidth);
      if (newActive !== active && newActive >= 0 && newActive < slides.length) {
        setActive(newActive);
      }
    }
  }, [active, slides.length]);

  // Manejo mejorado de eventos táctiles
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = React.useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    const sensitivity = 50; // Sensibilidad del deslizamiento

    if (Math.abs(diff) > sensitivity) {
      // Determinar dirección y cambiar slide
      const direction = diff > 0 ? 1 : -1;
      const nextIndex = active + direction;
      
      if (nextIndex >= 0 && nextIndex < slides.length) {
        scrollTo(nextIndex);
      }
      setIsDragging(false);
    }
  }, [active, isDragging, scrollTo, slides.length, startX]);

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Asegurar que el slide actual esté completamente centrado
    scrollTo(active);
  };

  React.useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0A1120] via-[#1A1A2E] to-[#0D0C1D]">
      {/* Navegación lateral */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3 bg-[#1E293B]/80 backdrop-blur-md p-4 rounded-2xl border border-[#4A90E2]/30 shadow-glow">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`flex items-center gap-3 transition-all duration-300 group px-3 py-2 rounded-lg ${
              active === idx 
                ? 'bg-[#4A90E2]/20 text-white' 
                : 'hover:bg-[#4A90E2]/10 text-slate-300 hover:text-white'
            }`}
          >
            <span className={`h-2 w-2 rounded-full transition-all duration-300 ${
              active === idx 
                ? 'bg-[#4A90E2] shadow-glow-sm' 
                : 'bg-slate-500 group-hover:bg-[#4A90E2]'
            }`} />
            <span className="text-sm font-medium whitespace-nowrap">{slide.title}</span>
          </button>
        ))}
      </div>

      {/* Barra de progreso */}
      <div className="absolute top-0 left-0 right-0 h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#4A90E2] to-[#FF5C5C] transition-all duration-300 ease-out"
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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
      >
        {/* Contenedor de slides */}
        <div className="flex h-full">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-full h-full snap-center flex items-center justify-center"
              style={{ scrollSnapAlign: 'center', scrollSnapStop: 'always' }}
            >
              <div className="w-full max-w-2xl mx-auto px-4 py-12">
                {/* Título */}
                <h1 
                  className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#FF5C5C] text-center mb-4 drop-shadow-glow font-poppins"
                  style={{ letterSpacing: "-1px" }}
                >
                  {slide.title}
                </h1>

                {/* Subtítulo */}
                {slide.subtitle && (
                  <h2 className="text-lg sm:text-xl text-[#4A90E2] font-medium text-center mb-6 opacity-90">
                    {slide.subtitle}
                  </h2>
                )}

                {/* Tarjeta de contenido */}
                <div className="w-full bg-[#1E293B]/80 backdrop-blur-md rounded-xl p-6 shadow-glow border border-[#4A90E2]/20 animate-float">
                  <div className="text-slate-100">
                    {slide.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación - Ocultos en móvil */}
      <button
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#4A90E2]/20 backdrop-blur-md text-white hover:bg-[#4A90E2] transition-all duration-300 shadow-glow hidden md:block"
        onClick={() => scrollTo(active - 1)}
        disabled={active === 0}
        style={{ opacity: active === 0 ? 0.3 : 1 }}
      >
        <span className="text-xl">←</span>
      </button>

      <button
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#4A90E2]/20 backdrop-blur-md text-white hover:bg-[#4A90E2] transition-all duration-300 shadow-glow hidden md:block"
        onClick={() => scrollTo(active + 1)}
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
            onClick={() => scrollTo(idx)}
            className={`h-1 rounded-full transition-all duration-300 ${
              active === idx 
                ? 'bg-[#4A90E2] w-8 shadow-glow-sm' 
                : 'bg-white/20 w-4 hover:bg-[#4A90E2]/60'
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

        .shadow-glow {
          box-shadow: 0 0 20px rgba(74, 144, 226, 0.1),
                      0 0 40px rgba(74, 144, 226, 0.05);
        }

        .shadow-glow-sm {
          box-shadow: 0 0 10px rgba(74, 144, 226, 0.2);
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
