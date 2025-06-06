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
    subtitle: "PROMOTOURS PERÚ",
    content: (
      <div className="bg-gradient-to-br from-[#4A90E2]/20 to-[#FF5C5C]/10 rounded-xl p-5">
        <div className="text-lg font-bold text-pink-400 mb-4">Aplicación Web moderna y escalable para gestión de información y contenido turístico</div>
        <div className="flex flex-row flex-wrap gap-x-3 gap-y-1 font-semibold text-base whitespace-nowrap mb-3">
          <span className="text-[#4A90E2]">React.js</span>
          <span className="text-pink-400">+</span>
          <span className="text-[#4A90E2]">Google Sheets</span>
          <span className="text-pink-400">+</span>
          <span className="text-[#4A90E2]">APIs</span>
        </div>
        <div className="text-white/70 text-sm text-right border-t border-white/10 pt-3">22.05.2025</div>
      </div>
    )
  },
  {
    title: "🎯 Objetivo del Proyecto",
    content: (
      <div className="space-y-4">
        <ul className="space-y-3 bg-gradient-to-br from-[#4A90E2]/20 to-[#FF5C5C]/10 p-5 rounded-xl">
          <li className="flex items-start gap-3 text-white/90"><span className="mt-1 text-primary">•</span><span>Desarrollar una <b>aplicación web profesional</b> enfocada en turismo, que informe y motive viajes, visitas y experiencias.</span></li>
          <li className="flex items-start gap-3 text-white/90"><span className="mt-1 text-primary">•</span><span>Home moderna, adaptativa y alineada al objetivo de inspirar turismo.</span></li>
          <li className="flex items-start gap-3 text-white/90"><span className="mt-1 text-primary">•</span><span>Animaciones, visuales atractivos y blog autogestionado por usuarios.</span></li>
          <li className="flex items-start gap-3 text-white/90"><span className="mt-1 text-primary">•</span><span>Responsiva, rápida y conectada a Google Sheets como base de datos ligera.</span></li>
        </ul>
      </div>
    )
  },
  {
    title: "🧩 Tecnologías",
    content: (
      <div className="space-y-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm bg-gradient-to-br from-[#4A90E2]/20 to-[#FF5C5C]/10 rounded-xl">
            <thead>
              <tr className="text-left text-primary font-bold">
                <th className="py-2 px-3">Componente</th>
                <th className="py-2 pl-8">Tecnología / Herramienta</th>
              </tr>
            </thead>
            <tbody className="text-white/90">
              <tr><td className="py-2 px-3">Frontend</td><td className="py-2 pl-8">React.js + TailwindCSS</td></tr>
              <tr><td className="py-2 px-3">Backend / CMS básico</td><td className="py-2 pl-8">Google Sheets vía API segura</td></tr>
              <tr><td className="py-2 px-3">Blog & Posts</td><td className="py-2 pl-8">Sistema de ingreso, visualización y validación simple</td></tr>
              <tr><td className="py-2 px-3">Animaciones UI</td><td className="py-2 pl-8">Framer Motion / GSAP / CSS Transitions</td></tr>
              <tr><td className="py-2 px-3">Base de Datos</td><td className="py-2 pl-8">Google Sheets</td></tr>
              <tr><td className="py-2 px-3">Hosting</td><td className="py-2 pl-8">Vercel (incluido 1 año)</td></tr>
              <tr><td className="py-2 px-3">Dominio</td><td className="py-2 pl-8">Registro .com (incluido 1 año)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    title: "📖 Estructura",
    content: (
      <div className="bg-gradient-to-br from-[#4A90E2]/20 to-[#FF5C5C]/10 rounded-xl p-5">
        <ul className="space-y-6">
          <li>
            <div className="flex items-center gap-2 mb-1">
              <span role="img" aria-label="Páginas" className="text-lg text-pink-400">📄</span>
              <span className="font-bold text-pink-400">Páginas</span>
            </div>
            <ul className="ml-6 text-white/90 text-sm space-y-1">
              <li className="flex items-start gap-2"><span className="text-pink-400">•</span>Home</li>
              <li className="flex items-start gap-2"><span className="text-pink-400">•</span>Destinos</li>
              <li className="flex items-start gap-2"><span className="text-pink-400">•</span>Revista digital interactiva</li>
              <li className="flex items-start gap-2"><span className="text-pink-400">•</span>Contacto</li>
            </ul>
          </li>
          <li>
            <div className="flex items-center gap-2 mb-1">
              <span role="img" aria-label="Blog Turístico" className="text-lg text-pink-400">📰</span>
              <span className="font-bold text-pink-400">Blog Turístico</span>
            </div>
            <ul className="ml-6 text-white/90 text-sm space-y-1">
              <li className="flex items-start gap-2"><span className="text-pink-400">•</span>Visualización de artículos por categorías</li>
              <li className="flex items-start gap-2"><span className="text-pink-400">•</span>Buscador de artículos</li>
              <li className="flex items-start gap-2"><span className="text-pink-400">•</span>Sección de comentarios para los lectores</li>
            </ul>
          </li>
          <li>
            <div className="flex items-center gap-2 mb-1">
              <span role="img" aria-label="Panel de Blogger" className="text-lg text-pink-400">🧑‍💻</span>
              <span className="font-bold text-pink-400">Panel de Blogger</span>
            </div>
            <ul className="ml-6 text-white/90 text-sm space-y-1">
              <li className="flex items-start gap-2"><span className="text-pink-400">•</span>Permite a usuarios registrados subir entradas/post en el blog</li>
            </ul>
          </li>
          <li>
            <div className="flex items-center gap-2 mb-1">
              <span role="img" aria-label="Panel de Administrador" className="text-lg text-pink-400">🛠️</span>
              <span className="font-bold text-pink-400">Panel de Administrador</span>
            </div>
            <ul className="ml-6 text-white/90 text-sm space-y-1">
              <li className="flex items-start gap-2"><span className="text-pink-400">•</span>Crear/eliminar usuarios y ver estadísticas del blog</li>
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
    title: "💸 Inversión",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 p-5 rounded-xl border border-white/20">
          <table className="w-full text-white/90 text-sm md:text-base">
            <thead>
              <tr>
                <th className="text-pink-400 font-bold text-left pb-2">Concepto</th>
                <th className="text-pink-400 font-bold text-right pb-2">Precio Promocional (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1 align-top">Desarrollo completo </td>
                <td className="py-1 text-right font-semibold pl-8 md:pl-12">$900.00*</td>
              </tr>
              <tr>
                <td className="py-1 align-top">Hosting (1 año)</td>
                <td className="py-1 text-right pl-8 md:pl-12">Incluido</td>
              </tr>
              <tr>
                <td className="py-1 align-top">Dominio .com (1 año)</td>
                <td className="py-1 text-right pl-8 md:pl-12">Incluido</td>
              </tr>
              <tr>
                <td className="py-1 align-top">Soporte (30 días)</td>
                <td className="py-1 text-right pl-8 md:pl-12">Incluido</td>
              </tr>
              <tr>
                <td className="pt-3 font-bold text-pink-400">TOTAL HOY</td>
                <td className="pt-3 text-right font-bold text-pink-400 pl-8 md:pl-12">$900.00 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-gradient-to-r from-[#4A90E2]/10 to-[#FF5C5C]/10 rounded-xl p-4 mt-3 border border-pink-400/30">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-pink-400 text-lg">⏰</span>
              <div className="text-base">
                <span className="font-bold text-pink-400">NO HAY OFERTAS DISPONIBLES </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-pink-400">💫</span>
              <div className="flex items-center gap-2">
                <span className="text-white/90">No hay ofertas disponibles</span>
                <span className="text-xl font-bold text-pink-400">$00.00 USD</span>
              </div>
            </div>
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
    title: "¡Es momento de dar el paso!",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-[#4A90E2]/20 to-[#FF5C5C]/10 rounded-xl p-5 text-center">
          <div className="text-pink-400 font-bold text-lg mb-1">Deivis Contreras Cardenas</div>
          <div className="text-white font-semibold mb-2">Consultor de negocios, desarrollador de marcas y especialista en transformación digital</div>
          <div className="text-white/70 italic text-sm mb-4">Más de 10 años de experiencia impulsando proyectos digitales y marcas.</div>
          <a href="https://wa.me/51989843709?text=Hola%20Deivis%2C%20iniciemos%20con%20la%20aplicaci%C3%B3n%20web%20de%20Promotours%20per%C3%BA!" target="_blank" rel="noopener" className="block w-full bg-green-600 text-white font-bold text-lg px-6 py-4 rounded-lg shadow-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-[1.02] mb-3 uppercase tracking-wide">¡ARRANQUEMOS AHORA!</a>
          <a href="/" className="block w-full bg-transparent text-white font-semibold px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition">🌐 Ir a mi web</a>
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
              <div className="w-full max-w-2xl mx-auto px-4 py-8">
                {/* Título */}
                <h1 
                  className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#FF5C5C] to-[#4A90E2] text-center mb-4 drop-shadow-[0_0_25px_rgba(74,144,226,0.3)] font-poppins animate-gradient bg-[length:200%_100%] mt-2"
                  style={{ letterSpacing: "-1px" }}
                >
                  {slide.title}
                </h1>

                {/* Subtítulo */}
                {slide.subtitle && (
                  <h2 className="text-lg sm:text-xl font-medium text-center mb-6 text-[#4A90E2]">
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
