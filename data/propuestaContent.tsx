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
        <p className="text-xl sm:text-2xl font-bold text-primary drop-shadow-lg">
          Solución web moderna y escalable para gestión de información en tiempo real
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 bg-white/5 p-2 rounded-lg">
          <span className="font-semibold text-primary whitespace-nowrap hover:text-secondary transition-colors">React.js</span>
          <span className="text-secondary font-bold">+</span>
          <span className="font-semibold text-primary whitespace-nowrap hover:text-secondary transition-colors">Google Sheets</span>
          <span className="text-secondary font-bold">+</span>
          <span className="font-semibold text-primary whitespace-nowrap hover:textsecondary transition-colors">APIs</span>
        </div>
      </div>
    )
  },
  {
    title: "🎯 Objetivo del Proyecto",
    content: (
      <div className="space-y-4">
        <ul className="space-y-3 bg-gradient-to-br from-[#4A90E2]/20 to-[#FF5C5C]/10 p-5 rounded-xl">
          <li className="flex items-start gap-2 text-white/90"><span className="text-primary">•</span>Desarrollar una <b>aplicación web profesional</b> enfocada en turismo, que informe y motive viajes, visitas y experiencias.</li>
          <li className="flex items-start gap-2 text-white/90"><span className="text-primary">•</span>Home moderna, adaptativa y alineada al objetivo de inspirar turismo.</li>
          <li className="flex items-start gap-2 text-white/90"><span className="text-primary">•</span>Incluye <b>revista digital interactiva</b> como característica adicional para destacar destinos y experiencias.</li>
          <li className="flex items-start gap-2 text-white/90"><span className="text-primary">•</span>Animaciones, visuales atractivos y blog autogestionado por usuarios.</li>
          <li className="flex items-start gap-2 text-white/90"><span className="text-primary">•</span>Responsiva, rápida y conectada a Google Sheets como base de datos ligera.</li>
          <li className="flex items-start gap-2 text-white/90"><span className="text-primary">•</span>Ideal para MVPs o proyectos en crecimiento.</li>
        </ul>
      </div>
    )
  },
  {
    title: "🧩 Tecnologías y Recursos a Utilizar",
    content: (
      <div className="space-y-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm bg-gradient-to-br from-[#4A90E2]/20 to-[#FF5C5C]/10 rounded-xl">
            <thead>
              <tr className="text-left text-primary font-bold">
                <th className="py-2 px-3">Componente</th>
                <th className="py-2 px-3">Tecnología / Herramienta</th>
              </tr>
            </thead>
            <tbody className="text-white/90">
              <tr><td className="py-2 px-3">Frontend</td><td className="py-2 px-3">React.js + TailwindCSS (diseño moderno y animado)</td></tr>
              <tr><td className="py-2 px-3">Backend / CMS básico</td><td className="py-2 px-3">Google Sheets vía API segura</td></tr>
              <tr><td className="py-2 px-3">Blog & Posts</td><td className="py-2 px-3">Sistema de ingreso, visualización y validación simple</td></tr>
              <tr><td className="py-2 px-3">Animaciones UI</td><td className="py-2 px-3">Framer Motion / GSAP / CSS Transitions</td></tr>
              <tr><td className="py-2 px-3">Base de Datos</td><td className="py-2 px-3">Google Sheets estructurada como backend ligero</td></tr>
              <tr><td className="py-2 px-3">Hosting</td><td className="py-2 px-3">Vercel (incluido 1 año)</td></tr>
              <tr><td className="py-2 px-3">Dominio</td><td className="py-2 px-3">Registro .com (incluido 1 año)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    title: "📖 Estructura y Funcionalidades",
    content: (
      <div className="space-y-4">
        <ul className="space-y-4 bg-gradient-to-br from-[#4A90E2]/20 to-[#FF5C5C]/10 p-5 rounded-xl text-white/90">
          <li>
            <span className="font-bold text-primary">🧭 Home - Revista Visual</span>
            <ul className="ml-4 mt-1 space-y-1">
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Portada animada estilo revista digital</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Carrusel de ediciones o destinos destacados</li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-primary">✍️ Blog Turístico</span>
            <ul className="ml-4 mt-1 space-y-1">
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Visualización de artículos por categorías</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Publicación de entradas por usuarios (con validación)</li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-primary">💬 Panel de Usuario Ligero</span>
            <ul className="ml-4 mt-1 space-y-1">
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Validación de contenido antes de publicación</li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-primary">📊 Backend Admin Simplificado</span>
            <ul className="ml-4 mt-1 space-y-1">
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Base conectada a Google Sheets</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "🎨 Diseño y Experiencia Visual",
    content: (
      <div className="space-y-4">
        <ul className="space-y-3 bg-gradient-to-br from-[#4A90E2]/20 to-[#FF5C5C]/10 p-5 rounded-xl text-white/90">
          <li className="flex items-start gap-2"><span className="text-primary">•</span>Interfaz moderna, dinámica y adaptativa (mobile-first)</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span>Animaciones suaves y visuales editoriales</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span>Colores y estilos inspirados en revistas turísticas</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span>Branding personalizado</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span>Alta usabilidad y jerarquía de contenidos</li>
        </ul>
      </div>
    )
  },
  {
    title: "📆 Tiempo Estimado de Desarrollo",
    content: (
      <div className="space-y-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm bg-gradient-to-br from-[#4A90E2]/20 to-[#FF5C5C]/10 rounded-xl">
            <thead>
              <tr className="text-left text-primary font-bold">
                <th className="py-2 px-3">Etapa</th>
                <th className="py-2 px-3">Duración estimada</th>
              </tr>
            </thead>
            <tbody className="text-white/90">
              <tr><td className="py-2 px-3">Prototipo UI + navegación UX</td><td className="py-2 px-3">3 - 5 días hábiles</td></tr>
              <tr><td className="py-2 px-3">Desarrollo frontend y blog</td><td className="py-2 px-3">7 - 10 días hábiles</td></tr>
              <tr><td className="py-2 px-3">Integración con Sheets + test</td><td className="py-2 px-3">3 - 4 días hábiles</td></tr>
              <tr><td className="py-2 px-3">Animaciones, validaciones y QA</td><td className="py-2 px-3">2 - 3 días hábiles</td></tr>
              <tr className="font-bold text-primary"><td className="py-2 px-3">Total estimado</td><td className="py-2 px-3">15 - 25 días hábiles</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    title: "💰 Inversión del Proyecto",
    content: (
      <div className="space-y-4 bg-gradient-to-br from-[#4A90E2]/20 to-[#FF5C5C]/10 p-5 rounded-xl text-white/90">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-primary font-bold">
              <th className="py-2 px-3">Concepto</th>
              <th className="py-2 px-3">Precio Promocional (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="py-2 px-3">Desarrollo completo (app web)</td><td className="py-2 px-3">$450.00*</td></tr>
            <tr><td className="py-2 px-3">Hosting (1 año)</td><td className="py-2 px-3">Incluido</td></tr>
            <tr><td className="py-2 px-3">Dominio .com (1 año)</td><td className="py-2 px-3">Incluido</td></tr>
            <tr><td className="py-2 px-3">Animaciones y blog interactivo</td><td className="py-2 px-3">Incluido</td></tr>
            <tr><td className="py-2 px-3">Soporte técnico inicial (15 días)</td><td className="py-2 px-3">Incluido</td></tr>
            <tr className="font-bold text-primary"><td className="py-2 px-3">TOTAL HOY</td><td className="py-2 px-3">$450.00 USD</td></tr>
          </tbody>
        </table>
        <div className="mt-2">
          <div className="bg-[#181E2A]/80 border-l-4 border-yellow-400 p-4 rounded-md">
            <span className="block text-yellow-300 text-base font-bold mb-1">¡Importante!</span>
            <span className="text-white/90 text-sm font-medium">Esta tarifa especial es válida solo por 24 horas tras la presentación de esta propuesta.<br />A partir de mañana, el costo será de <span className='text-pink-400 font-bold'>$1100.00 USD</span>.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "💼 Condiciones del Servicio",
    content: (
      <div className="space-y-4 bg-gradient-to-br from-[#4A90E2]/20 to-[#FF5C5C]/10 p-5 rounded-xl text-white/90">
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span className="text-primary">•</span>100% del pago dentro de las siguientes 24 horas para acceder a tarifa promocional.</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span>El desarrollo inicia inmediatamente después del pago.</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span>Soporte técnico incluido por 15 días después del despliegue.</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span>Cambios mayores o extensiones se cotizan aparte.</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span>Entregables incluidos: acceso al dominio, base de datos, hosting, y manual básico de uso.</li>
        </ul>
      </div>
    )
  },
  {
    title: "¿Empezamos tu Proyecto?",
    subtitle: "Contacta conmigo",
    content: (
      <div className="space-y-8 max-w-lg mx-auto bg-[#181E2A] bg-opacity-90 p-6 rounded-xl shadow-lg">
        <div className="space-y-4 text-center bg-gradient-to-br from-[#4A90E2]/20 to-[#FF5C5C]/10 p-4 rounded-lg">
          <h3 className="text-xl font-bold text-primary">Deivis Contreras Cardenas</h3>
          <p className="text-lg text-neutral-300 font-semibold">Consultor de negocios, desarrollador de marcas y especialista en transformación digital</p>
          <p className="text-neutral-300 text-sm italic">Más de 10 años de experiencia impulsando proyectos digitales y marcas.</p>
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
            href="/"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary hover:to-secondary text-neutral-300 font-medium py-3 px-6 rounded-lg transition-all duration-300 border border-primary/30 hover:border-primary"
          >
            <span className="text-xl">🏠</span>
            Ir a la Home
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
