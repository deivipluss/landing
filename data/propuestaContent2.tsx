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
    subtitle: "Estrategia operativa, comercial y comunicacional para 2025",
    content: (
      <div className="space-y-3">
        <div><b>Diagnóstico:</b> presencia digital desaprovechada</div>
        <div><b>Objetivo:</b> profesionalizar canales, atraer huéspedes, fidelizar visitas</div>
      </div>
    )
  },
  {
    title: "Diagnóstico Rápido",
    content: (
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm bg-gradient-to-br from-yellow-200/10 to-yellow-400/10 rounded-xl">
          <thead>
            <tr className="text-left text-yellow-600 font-bold">
              <th className="py-2 px-3">Aspecto</th>
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
    )
  },
  {
    title: "Ruta Estratégica 2025",
    content: (
      <div className="space-y-2">
        <div><b>Objetivo General:</b> Profesionalizar la presencia digital del Hotel Sol de Oro para aumentar la ocupación, mejorar reputación y activar el flujo comercial.</div>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Brochure comercial</li>
          <li>Redes sociales activas</li>
          <li>Landing page para reservas</li>
          <li>Chatbots automatizados</li>
          <li>Campaña con creadores locales</li>
          <li>Campaña Facebook Ads geolocalizada</li>
        </ul>
      </div>
    )
  },
  {
    title: "Brochure Comercial",
    content: (
      <div className="space-y-2">
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
    )
  },
  {
    title: "Activación de Redes Sociales",
    content: (
      <div className="space-y-2">
        <div><b>Canales principales:</b></div>
        <ul className="list-disc ml-6">
          <li>Facebook (corporativo e informativo)</li>
          <li>Instagram (humano y visual)</li>
        </ul>
        <div className="mt-2"><b>Tipo de contenido semanal:</b></div>
        <ul className="list-disc ml-6">
          <li>1 post de habitaciones / servicios</li>
          <li>1 historia + reel experiencial</li>
          <li>1 testimonio o dato útil (tips altura, negocios, etc.)</li>
        </ul>
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
  }
];

export function HorizontalSlides({ slides }: { slides: ProposalSlideType[] }) {
  // ...puedes copiar aquí la función real si la necesitas...
  return null;
}
