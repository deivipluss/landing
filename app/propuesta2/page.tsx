// Create a Next.js page that renders a full-screen vertical scroll presentation using slides
// Each slide should be full height, centered, and have snap scrolling
// Import slides from a data file
import { HorizontalSlides, proposalSlides } from "../../data/propuestaContent2";

export const metadata = {
  title: "Propuesta Hotel Sol de Oro | Despegue Digital",
  description:
    "Estrategia digital, operativa y comercial para el Hotel Sol de Oro. ¡Descubre cómo transformar tu presencia online y aumentar tus reservas!",
  openGraph: {
    title: "Propuesta Hotel Sol de Oro | Despegue Digital",
    description:
      "Estrategia digital, operativa y comercial para el Hotel Sol de Oro. ¡Descubre cómo transformar tu presencia online y aumentar tus reservas!",
    url: "https://tusitio.com/propuesta2",
    siteName: "Sol de Oro",
    images: [
      {
        url: "https://tusitio.com/imagenes/soldeoro-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Vista previa propuesta Hotel Sol de Oro",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta Hotel Sol de Oro | Despegue Digital",
    description:
      "Estrategia digital, operativa y comercial para el Hotel Sol de Oro.",
    images: ["https://tusitio.com/imagenes/soldeoro-preview.jpg"],
  },
};

export default function Propuesta2Page() {
  return (
    <main className="w-full min-h-screen bg-[#0D0C1D] overflow-hidden">
      <HorizontalSlides slides={proposalSlides} />
    </main>
  );
}
