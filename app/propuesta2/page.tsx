// Create a Next.js page that renders a full-screen vertical scroll presentation using slides
// Each slide should be full height, centered, and have snap scrolling
// Import slides from a data file
import { HorizontalSlides, proposalSlides } from "../../data/propuestaContent2";

export default function Propuesta2Page() {
  return (
    <main className="w-full min-h-screen bg-[#0D0C1D] overflow-hidden">
      <HorizontalSlides slides={proposalSlides} />
    </main>
  );
}
