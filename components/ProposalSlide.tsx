import type { ProposalSlideType } from "@/data/propuestaContent";

export default function ProposalSlide({ title, content, bg }: ProposalSlideType) {
  return (
    <section className={`h-screen flex flex-col items-center justify-center snap-start ${bg ?? ""} text-white`}>
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-2xl">{content}</p>
    </section>
  );
}
