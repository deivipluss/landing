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
