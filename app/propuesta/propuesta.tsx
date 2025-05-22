// Create a Next.js page that renders a full-screen vertical scroll presentation using slides
// Each slide should be full height, centered, and have snap scrolling
// Import slides from a data file
import ProposalSlide from "../../components/ProposalSlide";
import { proposalSlides } from "../../data/propuestaContent";

export default function PropuestaPage() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
      {proposalSlides.map((slide: any, index: number) => (
        <ProposalSlide key={index} {...slide} />
      ))}
    </main>
  );
}
