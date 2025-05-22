// Create a Next.js page that renders a full-screen vertical scroll presentation using slides
// Each slide should be full height, centered, and have snap scrolling
// Import slides from a data file
import { HorizontalSlides, proposalSlides } from "../../data/propuestaContent.tsx";

export default function PropuestaPage() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <HorizontalSlides slides={proposalSlides} />
    </main>
  );
}
