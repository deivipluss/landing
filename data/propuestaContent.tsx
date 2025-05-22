"use client";

import React from "react";

export interface ProposalSlideType {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const proposalSlides: ProposalSlideType[] = [
  {
    title: "Proforma de Servicios",
    subtitle: "Desarrollo de Aplicación Web React + Google Sheets",
    content: (
      <div className="space-y-4">
        <p className="text-xl sm:text-2xl font-light bg-clip-text text-transparent bg-gradient-to-r from-[#4A90E2] via-[#FF5C5C] to-[#4A90E2] animate-gradient bg-[length:200%_100%] drop-shadow-[0_2px_10px_rgba(74,144,226,0.4)]">
          Solución web moderna y escalable para gestión de información en tiempo real
        </p>
        <div className="bg-gradient-to-r from-[#1A1A2E] to-[#1E293B] p-4 rounded-lg border border-[#4A90E2]/20 shadow-[0_0_15px_rgba(74,144,226,0.15)]">
          <p className="font-medium text-center space-x-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4A90E2] to-[#FF5C5C] animate-gradient bg-[length:200%_100%]">
            <span className="hover:text-[#FF5C5C] transition-colors">React.js</span>
            <span className="text-[#FF5C5C]">+</span>
            <span className="hover:text-[#FF5C5C] transition-colors">Google Sheets</span>
            <span className="text-[#FF5C5C]">+</span>
            <span className="hover:text-[#FF5C5C] transition-colors">APIs</span>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Objetivo del Proyecto",
    content: (
      <div className="space-y-4">
        <p className="text-lg font-light leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-[#4A90E2] to-[#FF5C5C] animate-gradient bg-[length:200%_100%] drop-shadow-[0_2px_10px_rgba(74,144,226,0.4)]">
          Desarrollar una aplicación web visualmente atractiva, de carga rápida, accesible desde cualquier dispositivo y alimentada por una base de datos sencilla conectada a Google Sheets.
        </p>
        <div className="bg-gradient-to-r from-[#1A1A2E] to-[#1E293B] p-4 rounded-lg border border-[#4A90E2]/20 shadow-[0_0_15px_rgba(74,144,226,0.15)]">
          <p className="text-sm leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-[#4A90E2] to-[#FF5C5C] animate-gradient bg-[length:200%_100%]">
            Ideal para gestión de información en tiempo real, formularios, pedidos, inventario, reportes u otras necesidades operativas.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Tecnologías y Recursos",
    content: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-[#4A90E2] font-medium text-lg">Frontend y Backend</h3>
          <ul className="space-y-2 text-slate-200">
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              React.js + TailwindCSS para diseño moderno
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Integración a Google Sheets vía API segura
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Base de datos en Google Sheets estructurado
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-[#FF5C5C] font-medium text-lg">Infraestructura</h3>
          <ul className="space-y-2 text-slate-200">
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              Hosting en Vercel/Netlify/Firebase
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              Dominio personalizado (.com/.pe/.xyz)
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              Panel de administración opcional
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Diseño y Experiencia",
    content: (
      <div className="space-y-6 text-left w-full max-w-2xl mx-auto">
        <div className="space-y-3">
          <h3 className="text-[#4A90E2] font-medium">Diseño Visual</h3>
          <ul className="space-y-2 text-slate-200">
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Adaptado a identidad del cliente
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Estilo moderno y limpio
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#4A90E2]">•</span>
              Iconografía clara y coherente
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-[#FF5C5C] font-medium">Experiencia de Usuario</h3>
          <ul className="space-y-2 text-slate-200">
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              Mobile first
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              Animaciones suaves
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#FF5C5C]">•</span>
              Optimización de carga
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Plazos de Entrega",
    subtitle: "8 a 10 días hábiles",
    content: (
      <div className="space-y-6 text-left w-full max-w-xl mx-auto">
        <div>
          <h3 className="text-[#4A90E2] mb-3 font-medium">Primera Fase</h3>
          <ul className="space-y-2 text-slate-200 text-sm">
            <li className="flex items-center justify-between">
              <span>Prototipado y diseño UI</span>
              <span className="text-[#4A90E2]">2-3 días</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Desarrollo funcional</span>
              <span className="text-[#4A90E2]">4-5 días</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#FF5C5C] mb-3 font-medium">Segunda Fase</h3>
          <ul className="space-y-2 text-slate-200 text-sm">
            <li className="flex items-center justify-between">
              <span>Conexión con Sheets</span>
              <span className="text-[#FF5C5C]">1 día</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Testing y entrega</span>
              <span className="text-[#FF5C5C]">1-2 días</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Presupuesto Total",
    subtitle: "Inversión en tu Proyecto Digital",
    content: (
      <div className="space-y-6 max-w-lg mx-auto">
        <div className="space-y-4">
          <ul className="text-left space-y-3">
            <li className="flex items-center justify-between text-slate-200">
              <span>Desarrollo frontend (React)</span>
              <span className="text-[#4A90E2]">S/ XXX</span>
            </li>
            <li className="flex items-center justify-between text-slate-200">
              <span>Conexión a Sheets</span>
              <span className="text-[#4A90E2]">S/ XXX</span>
            </li>
            <li className="flex items-center justify-between text-slate-200">
              <span>Diseño visual personalizado</span>
              <span className="text-[#4A90E2]">S/ XXX</span>
            </li>
            <li className="flex items-center justify-between text-slate-200">
              <span>Dominio y hosting (1 año)</span>
              <span className="text-[#4A90E2]">S/ XXX</span>
            </li>
          </ul>
          <div className="border-t border-[#4A90E2]/30 pt-4 mt-4">
            <div className="flex items-center justify-between">
              <span className="text-xl text-white">Total</span>
              <span className="text-2xl font-bold text-[#4A90E2]">S/ XXXX</span>
            </div>
          </div>
        </div>
        <p className="text-[#FF5C5C] font-medium text-sm text-center">
          * Los precios pueden ajustarse según características específicas adicionales
        </p>
      </div>
    )
  },
  {
    title: "Condiciones",
    content: (
      <div className="space-y-6 max-w-lg mx-auto">
        <ul className="space-y-4 text-slate-200">
          <li className="flex items-center gap-3">
            <span className="text-[#4A90E2] text-xl">•</span>
            <span>50% adelanto para inicio del proyecto</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#4A90E2] text-xl">•</span>
            <span>50% contra entrega de la versión publicada</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#4A90E2] text-xl">•</span>
            <span>Reuniones de avance por videollamada o presencial</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#4A90E2] text-xl">•</span>
            <span>Soporte inicial incluido (15 días)</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "¿Empezamos tu Proyecto?",
    subtitle: "Contacta con nosotros",
    content: (
      <div className="space-y-8 max-w-lg mx-auto">
        <div className="space-y-4 text-center">
          <h3 className="text-xl font-medium text-[#4A90E2]">Deivis</h3>
          <p className="text-lg text-slate-100">
            Desarrollador Web & UX/UI Designer
          </p>
          <p className="text-slate-300 text-sm">
            Especialista en Desarrollo Web con React y Gestión de Datos
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
    <div className="fixed inset-0 bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] overflow-hidden">
      {/* Navegación lateral */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3 bg-gradient-to-b from-[#1A1A2E]/90 to-[#1E293B]/90 backdrop-blur-md p-4 rounded-2xl border border-[#4A90E2]/40 shadow-[0_0_15px_rgba(74,144,226,0.3)]">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`flex items-center gap-3 transition-all duration-300 group px-3 py-2 rounded-lg ${
              active === idx 
                ? 'bg-gradient-to-r from-[#4A90E2]/30 to-[#FF5C5C]/30 text-white' 
                : 'hover:bg-gradient-to-r hover:from-[#4A90E2]/20 hover:to-[#FF5C5C]/20 text-slate-300 hover:text-white'
            }`}
          >
            <span className={`h-2 w-2 rounded-full transition-all duration-300 ${
              active === idx 
                ? 'bg-gradient-to-r from-[#4A90E2] to-[#FF5C5C] shadow-[0_0_10px_rgba(74,144,226,0.5)]' 
                : 'bg-slate-500 group-hover:bg-[#4A90E2]'
            }`} />
            <span className="text-sm font-medium whitespace-nowrap">{slide.title}</span>
          </button>
        ))}
      </div>

      {/* Barra de progreso */}
      <div className="absolute top-0 left-0 right-0 h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#4A90E2] via-[#FF5C5C] to-[#4A90E2] bg-[length:200%_100%] animate-gradient transition-all duration-300 ease-out"
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
                  className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#FF5C5C] to-[#4A90E2] text-center mb-4 drop-shadow-[0_0_25px_rgba(74,144,226,0.3)] font-poppins animate-gradient bg-[length:200%_100%]"
                  style={{ letterSpacing: "-1px" }}
                >
                  {slide.title}
                </h1>

                {/* Subtítulo */}
                {slide.subtitle && (
                  <h2 className="text-lg sm:text-xl font-medium text-center mb-6 bg-gradient-to-r from-[#4A90E2] to-[#FF5C5C] text-transparent bg-clip-text">
                    {slide.subtitle}
                  </h2>
                )}

                {/* Tarjeta de contenido */}
                <div className="w-full bg-gradient-to-br from-[#1A1A2E]/95 to-[#1E293B]/95 backdrop-blur-md rounded-xl p-6 shadow-[0_0_30px_rgba(74,144,226,0.15)] border border-[#4A90E2]/30 hover:border-[#4A90E2]/50 transition-all duration-500 animate-float">
                  <div className="text-white">
                    {slide.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <button
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-gradient-to-r from-[#4A90E2]/20 to-[#FF5C5C]/20 backdrop-blur-md text-white hover:from-[#4A90E2]/40 hover:to-[#FF5C5C]/40 transition-all duration-300 shadow-[0_0_15px_rgba(74,144,226,0.2)] hidden md:block"
        onClick={() => scrollTo(active - 1)}
        disabled={active === 0}
        style={{ opacity: active === 0 ? 0.3 : 1 }}
      >
        <span className="text-xl">←</span>
      </button>

      <button
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-gradient-to-r from-[#4A90E2]/20 to-[#FF5C5C]/20 backdrop-blur-md text-white hover:from-[#4A90E2]/40 hover:to-[#FF5C5C]/40 transition-all duration-300 shadow-[0_0_15px_rgba(74,144,226,0.2)] hidden md:block"
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
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === idx 
                ? 'bg-gradient-to-r from-[#4A90E2] to-[#FF5C5C] w-10 shadow-[0_0_10px_rgba(74,144,226,0.5)]' 
                : 'bg-white/20 w-5 hover:bg-gradient-to-r hover:from-[#4A90E2]/60 hover:to-[#FF5C5C]/60'
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

        .animate-gradient {
          animation: gradient 8s linear infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
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
