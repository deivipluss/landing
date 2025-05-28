"use client";

import React from "react";

export interface ProposalSlideType {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const proposalSlides: ProposalSlideType[] = [
  {
    title: "Despegue Digital del Hotel Sol de Oro",
    subtitle: "Estrategia operativa, comercial y comunicacional para Junio",
    content: (
      <div className="flex flex-col items-center justify-center">
        <span className="block text-2xl font-bold text-yellow-600 mb-2">Objetivo</span>
        <span className="block text-lg md:text-xl font-semibold text-white bg-yellow-500/90 rounded-lg px-4 py-2 inline-block shadow-sm">Profesionalizar canales, atraer huéspedes y fidelizar visitas</span>
      </div>
    )
  },
  {
    title: "Diagnóstico Rápido",
    content: (
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-lg">
          <table className="min-w-full text-sm bg-gradient-to-br from-yellow-200/10 to-yellow-400/10 rounded-xl mx-auto">
            <thead>
              <tr className="text-left text-yellow-600 font-bold">
                <th className="py-2 px-3">Objetivo</th>
                <th className="py-2 px-3">Estado Actual</th>
              </tr>
            </thead>
            <tbody className="text-gray-900/90">
              <tr><td className="py-1 px-3">Redes sociales</td><td className="py-1 px-3">Facebook con buen diseño pero sin uso</td></tr>
              <tr><td className="py-1 px-3">Página web</td><td className="py-1 px-3">Inexistente</td></tr>
              <tr><td className="py-1 px-3">Reservas digitales</td><td className="py-1 px-3">No automatizadas</td></tr>
              <tr><td className="py-1 px-3">Posicionamiento</td><td className="py-1 px-3">Débil en Google, cero pauta</td></tr>
              <tr><td className="py-1 px-3">Comunicación</td><td className="py-1 px-3">No sistematizada</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    title: "Ruta Estratégica Junio",
    content: (
      <div className="flex flex-col items-center justify-center">
        <ul className="list-disc ml-0 space-y-3 text-lg">
          <li className="text-pink-500 font-semibold">Brochure comercial</li>
          <li className="text-pink-500 font-semibold">Redes sociales activas</li>
          <li className="text-pink-500 font-semibold">Landing page para reservas</li>
          <li className="text-pink-500 font-semibold">Chatbots automatizados</li>
          <li className="text-pink-500 font-semibold">Campaña con creadores locales</li>
          <li className="text-pink-500 font-semibold">Campaña Facebook Ads geolocalizada</li>
        </ul>
      </div>
    )
  },
  {
    title: "Brochure Comercial",
    content: (
      <div className="flex flex-col items-center justify-center">
        <div className="space-y-2 text-center">
          <div><b>Formato PDF y físico:</b></div>
          <ul className="list-disc ml-6 space-y-1">
            <li>¿Quiénes somos?</li>
            <li>Servicios del hotel</li>
            <li>Habitaciones con íconos y descripciones</li>
            <li>Fotos reales + ubicación</li>
            <li>Tarifas base o llamada a reservar</li>
            <li>Contacto y redes</li>
          </ul>
          <div className="mt-2">👉 <b>Uso:</b> WhatsApp, recepciones, ferias, correos</div>
        </div>
      </div>
    )
  },
  {
    title: "Activación de Redes Sociales",
    content: (
      <div className="flex flex-col items-center justify-center">
        <div className="space-y-2 text-center">
          <div><b>Canales principales:</b></div>
          <ul className="list-disc ml-6">
            <li>Facebook (corporativo e informativo)</li>
            <li>Instagram (humano y visual)</li>
            <li>WhatsApp (atención directa y difusión)</li>
          </ul>
          <div className="mt-2"><b>Tipos de contenido y acciones semanales:</b></div>
          <ul className="list-disc ml-6">
            <li>1 post de habitaciones/servicios en Facebook e Instagram</li>
            <li>1 historia + reel experiencial en Instagram y Facebook</li>
            <li>1 testimonio o dato útil (tips altura, negocios, etc.)</li>
            <li>Enlaces y llamados a la landing page y WhatsApp en cada publicación</li>
            <li>Respuestas rápidas y atención por WhatsApp</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Landing Page Moderna",
    content: (
      <div className="space-y-2">
        <div><b>Objetivo:</b> Reservas rápidas y confianza inmediata</div>
        <div className="mt-2"><b>Estructura:</b></div>
        <ul className="list-disc ml-6">
          <li>Bienvenida e identidad visual</li>
          <li>Galería de fotos</li>
          <li>Habitaciones y servicios</li>
          <li>Formulario de reservas</li>
          <li>Opiniones</li>
          <li>Ubicación y contacto directo (WhatsApp, Maps)</li>
        </ul>
      </div>
    )
  },
  {
    title: "Chatbots y Automatización",
    content: (
      <div className="space-y-2">
        <div><b>Plataformas:</b></div>
        <ul className="list-disc ml-6">
          <li>Facebook Messenger</li>
          <li>WhatsApp Business</li>
        </ul>
        <div className="mt-2"><b>Respuestas automáticas:</b></div>
        <ul className="list-disc ml-6">
          <li>Bienvenida</li>
          <li>Tarifas y servicios</li>
          <li>Cómo llegar</li>
          <li>Horarios de check-in/out</li>
          <li>Contacto rápido a recepción</li>
        </ul>
      </div>
    )
  },
  {
    title: "Campaña con Creadores Locales",
    content: (
      <div className="space-y-2">
        <div><b>Objetivo:</b> Generar contenido auténtico y social proof</div>
        <div className="mt-2"><b>Acciones:</b></div>
        <ul className="list-disc ml-6">
          <li>Invitar 2 creadores jóvenes (vloggers, universitarios, fotógrafos)</li>
          <li>Estadía o desayuno gratis a cambio de stories, reels y publicaciones</li>
          <li>Compartir sus videos en los canales del hotel</li>
        </ul>
      </div>
    )
  },
  {
    title: "Campaña Facebook Ads",
    subtitle: "Aumentar reservas y reconocimiento de marca",
    content: (
      <div className="space-y-2">
        <div><b>Segmentación:</b></div>
        <ul className="list-disc ml-6">
          <li>Personas en Cerro de Pasco, Huánuco, Lima, Huancayo</li>
          <li>Intereses: viajes, trabajo, negocios, hospedaje, turismo</li>
          <li>Edad: 23–55 años</li>
        </ul>
        <div className="mt-2"><b>Formatos de anuncio:</b></div>
        <ul className="list-disc ml-6">
          <li>Carrusel de habitaciones</li>
          <li>Reels tipo “¿Buscas un hotel cómodo para trabajar?”</li>
          <li>Promociones por temporada</li>
        </ul>
        <div className="mt-2">Presupuesto sugerido inicial: <b>S/300 por mes</b></div>
        <div>Objetivo: +3000 visualizaciones por semana y generación de mensajes directos</div>
      </div>
    )
  },
  {
    title: "Cronograma de Implementación",
    content: (
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm bg-gradient-to-br from-yellow-200/10 to-yellow-400/10 rounded-xl">
          <thead>
            <tr className="text-left text-yellow-600 font-bold">
              <th className="py-2 px-3">Semana</th>
              <th className="py-2 px-3">Acción</th>
            </tr>
          </thead>
          <tbody className="text-gray-900/90">
            <tr><td className="py-1 px-3">1</td><td className="py-1 px-3">Brochure + diagnóstico visual completo</td></tr>
            <tr><td className="py-1 px-3">2</td><td className="py-1 px-3">Activación redes + chatbot básico</td></tr>
            <tr><td className="py-1 px-3">3</td><td className="py-1 px-3">Lanzamiento landing page</td></tr>
            <tr><td className="py-1 px-3">4</td><td className="py-1 px-3">Primer video de creador local</td></tr>
            <tr><td className="py-1 px-3">5</td><td className="py-1 px-3">Inicio de campaña Facebook Ads</td></tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    title: "Cierre y Siguiente Paso",
    content: (
      <div className="space-y-3">
        <div className="font-bold">"Cerro de Pasco merece un referente de hospitalidad digital. Este plan convierte al Hotel Sol de Oro en una marca viva, cercana y profesional."</div>
        <div className="mt-2">Siguiente paso: Aprobar la propuesta y definir responsables internos para activar el proceso.</div>
      </div>
    )
  },
  {
    title: "Costos operativos base que el cliente debe asumir para el reinicio del proyecto",
    content: (
      <div className="space-y-4">
        <div className="text-xl font-bold text-yellow-600 flex items-center gap-2">💰 Monto total a cubrir por el cliente: <span className="text-gray-900 bg-yellow-100 rounded px-3 py-1 ml-2">$140.00 USD</span></div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm bg-gradient-to-br from-yellow-200/10 to-yellow-400/10 rounded-xl">
            <thead>
              <tr className="text-left text-yellow-600 font-bold">
                <th className="py-2 px-3">Concepto</th>
                <th className="py-2 px-3">Detalle</th>
                <th className="py-2 px-3">Monto</th>
              </tr>
            </thead>
            <tbody className="text-gray-900/90">
              <tr>
                <td className="py-1 px-3">Hosting y dominio web</td>
                <td className="py-1 px-3">Alojamiento anual + activación del dominio</td>
                <td className="py-1 px-3 font-semibold">$80.00</td>
              </tr>
              <tr>
                <td className="py-1 px-3">Facebook Ads inicial</td>
                <td className="py-1 px-3">Activación de campaña publicitaria geolocalizada</td>
                <td className="py-1 px-3 font-semibold">$60.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-y-2 mt-2">
          <div className="font-semibold text-yellow-700">📌 Importancia:</div>
          <ul className="list-disc ml-6 text-gray-900/90 space-y-1">
            <li>Son costos imprescindibles para desplegar el sistema digital (sitio, pauta, reservas, tráfico).</li>
            <li>Se realiza por única vez en esta etapa como inversión base.</li>
            <li>Permite arrancar con todo el ecosistema activo desde la primera semana.</li>
          </ul>
        </div>
      </div>
    )
  }
];

export function HorizontalSlides({ slides }: { slides: ProposalSlideType[] }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);
  const [active, setActive] = React.useState(0);
  const [startX, setStartX] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

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
      const newActive = Math.round(scrollLeft / offsetWidth);
      if (newActive !== active && newActive >= 0 && newActive < slides.length) {
        setActive(newActive);
      }
    }
  }, [active, slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = React.useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    const sensitivity = 50;
    if (Math.abs(diff) > sensitivity) {
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
