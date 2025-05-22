"use client";

import React from "react";

export interface ProposalSlideType {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  bg?: string;
  img?: string;
}

export const proposalSlides: ProposalSlideType[] = [
  {
    title: "Aplicación Web para Revista Turística",
    subtitle: "Desarrollo visual, interactivo y funcional",
    content: (
      <>
        <p>Incluye blog editable, animaciones visuales y una experiencia única de usuario.</p>
        <p className="mt-2 font-semibold text-blue-500">¡Promoción válida por 24 horas!</p>
      </>
    ),
    img: "/images/propuesta-hero.jpg",
  },
  {
    title: "Objetivo del Proyecto",
    content: (
      <p>
        Diseñar una revista digital interactiva con diseño moderno, animaciones suaves y una sección de blog que permita publicaciones por parte de los usuarios. El backend será gestionado con Google Sheets. Hosting y dominio están incluidos para una solución completa.
      </p>
    ),
  },
  {
    title: "Tecnologías Utilizadas",
    content: (
      <ul className="list-disc pl-5 text-left">
        <li>React + Next.js</li>
        <li>TailwindCSS</li>
        <li>Framer Motion (animaciones visuales)</li>
        <li>Google Sheets API como backend ligero</li>
        <li>Vercel (Hosting rápido y gratuito)</li>
        <li>Dominio personalizado `.com` incluido</li>
      </ul>
    ),
  },
  {
    title: "Estructura y Funcionalidades",
    content: (
      <ul className="list-disc pl-5 text-left">
        <li>Landing visual estilo revista digital</li>
        <li>Blog con publicaciones editables por usuarios</li>
        <li>Animaciones editoriales suaves</li>
        <li>Visualización dinámica de artículos</li>
        <li>Validación ligera de entradas</li>
        <li>Administración desde Google Sheets</li>
      </ul>
    ),
  },
  {
    title: "Diseño y Experiencia Visual",
    content: (
      <ul className="list-disc pl-5 text-left">
        <li>Diseño responsive (adaptado a todos los dispositivos)</li>
        <li>Estilo moderno, limpio y editorial</li>
        <li>Animaciones suaves al navegar entre secciones</li>
        <li>Iconografía y estructura de revista</li>
        <li>Colores adaptados al branding turístico</li>
      </ul>
    ),
  },
  {
    title: "Plazos de Entrega",
    subtitle: "Tiempo estimado según alcance",
    content: (
      <table className="w-full text-left mt-4">
        <thead>
          <tr>
            <th className="pb-2 font-semibold">Etapa</th>
            <th className="pb-2 font-semibold">Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Prototipo UI + UX</td><td>3 - 5 días hábiles</td></tr>
          <tr><td>Frontend y Blog</td><td>7 - 10 días hábiles</td></tr>
          <tr><td>Integración con Sheets</td><td>3 - 4 días hábiles</td></tr>
          <tr><td>Animaciones y QA</td><td>2 - 3 días hábiles</td></tr>
          <tr className="font-bold"><td>Total</td><td>15 - 25 días hábiles</td></tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "Presupuesto del Proyecto",
    subtitle: "Tarifa especial por tiempo limitado",
    content: (
      <>
        <ul className="list-disc pl-5 text-left">
          <li>Desarrollo completo: <strong>$450.00 USD</strong> (por 24 hrs)</li>
          <li>Precio regular: <span className="line-through">$900.00 USD</span></li>
          <li>Incluye dominio, hosting y soporte</li>
          <li>Soporte técnico 15 días después del lanzamiento</li>
        </ul>
        <p className="mt-4 text-blue-600 font-bold">⚠️ Tarifa válida solo por 24 horas tras esta presentación.</p>
      </>
    ),
  },
  {
    title: "Condiciones y Forma de Pago",
    content: (
      <ul className="list-disc pl-5 text-left">
        <li>Pago único de $450.00 para acceder a la oferta</li>
        <li>Entrega en máximo 25 días hábiles</li>
        <li>Incluye soporte técnico por 15 días</li>
        <li>Cambios mayores o ampliaciones se cotizan aparte</li>
      </ul>
    ),
  },
  {
    title: "Copy Promocional de Lanzamiento",
    subtitle: "Texto propuesto para marketing o sección principal",
    content: (
      <>
        <p className="italic mb-2">✈️🌎 ¡Explora, escribe y comparte!</p>
        <p>Bienvenid@s a <strong>[Nombre de la Revista]</strong>, la primera revista turística donde tú eres el protagonista.</p>
        <p>Con solo un clic puedes leer historias de viaje, publicar tus propias aventuras, y recorrer el mundo sin salir de la pantalla. Todo esto, en una app visual, rápida y lista para acompañarte a donde vayas. 📱💫</p>
      </>
    ),
  },
  {
    title: "Contacto y Próximo Paso",
    subtitle: "¿Activamos el desarrollo?",
    content: (
      <>
        <p>Estoy listo para comenzar el desarrollo apenas se confirme el pago.</p>
        <p className="mt-2 font-semibold">📞 WhatsApp: [tu número]<br/>📧 Correo: [tu correo]</p>
        <p className="mt-4">Gracias por confiar. Esta propuesta ha sido pensada para brindarte un producto funcional, profesional y visualmente potente.</p>
      </>
    ),
  },
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

  // Progreso visual y slide activo
  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = containerRef.current;
      setProgress(scrollLeft / (scrollWidth - offsetWidth));
      setActive(Math.round(scrollLeft / offsetWidth));
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E]">
      <div className="absolute top-4 left-0 right-0 flex justify-center z-10">
        <div className="w-2/3 h-2 bg-[#222] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#4A90E2] transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#1A1A2E]/80 p-2 rounded-full shadow-glow hover:bg-[#4A90E2] transition"
        onClick={() => scrollTo("left")}
        aria-label="Anterior"
        disabled={active === 0}
        style={{ opacity: active === 0 ? 0.3 : 1 }}
      >
        <span className="text-2xl">⟨</span>
      </button>
      <div
        ref={containerRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
        onScroll={handleScroll}
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
      >
        {slides.map((slide, idx) => (
          <section
            key={idx}
            className="w-full min-w-full h-full flex flex-col items-center justify-center snap-center px-4 py-8 transition-shadow duration-300"
            style={{ transition: 'box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)', boxShadow: active === idx ? '0 0 32px 0 #4A90E2aa' : 'none' }}
          >
            {slide.img && (
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full max-w-xl rounded-xl shadow-glow mb-8 object-cover border border-[#4A90E2]/30"
                style={{ maxHeight: 320 }}
              />
            )}
            <div className="w-full max-w-2xl text-center flex flex-col items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins mb-2 drop-shadow-glow text-[#4A90E2]">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FF5C5C] mb-4 drop-shadow-glow">
                  {slide.subtitle}
                </h2>
              )}
              <div className="text-base sm:text-lg md:text-xl font-poppins text-[#E1E1E1] opacity-90 mt-2 mb-4">
                {slide.content}
              </div>
            </div>
          </section>
        ))}
      </div>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#1A1A2E]/80 p-2 rounded-full shadow-glow hover:bg-[#4A90E2] transition"
        onClick={() => scrollTo("right")}
        aria-label="Siguiente"
        disabled={active === slides.length - 1}
        style={{ opacity: active === slides.length - 1 ? 0.3 : 1 }}
      >
        <span className="text-2xl">⟩</span>
      </button>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-3 h-3 rounded-full transition-all duration-300 ${active === idx ? 'bg-[#4A90E2]' : 'bg-[#222]'}`}
          />
        ))}
      </div>
    </div>
  );
}
