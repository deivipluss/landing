import type { ProposalSlideType } from "@/data/propuestaContent";

export default function ProposalSlide({ title, subtitle, content }: ProposalSlideType) {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center snap-start px-4 py-8 bg-[#0D0C1D] text-white"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-full max-w-2xl text-center flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins mb-2 drop-shadow-glow text-[#4A90E2]">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FF5C5C] mb-4 drop-shadow-glow">
            {subtitle}
          </h2>
        )}
        <div className="w-full bg-[#181E2A] bg-opacity-95 backdrop-blur-md rounded-xl p-6 shadow-[0_0_30px_rgba(74,144,226,0.15)] border border-border hover:border-primary/50 transition-all duration-500 animate-float">
          <div>
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
