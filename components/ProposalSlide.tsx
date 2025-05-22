import type { ProposalSlideType } from "@/data/propuestaContent";

export default function ProposalSlide({ title, subtitle, content, bg, img }: ProposalSlideType) {
  return (
    <section
      className={`h-screen flex flex-col items-center justify-center snap-start px-4 py-8 ${bg ?? ""} text-white bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E]`}
      style={{ minHeight: '100vh' }}
    >
      {img && (
        <img
          src={img}
          alt={title}
          className="w-full max-w-xl rounded-xl shadow-glow mb-8 object-cover border border-[#4A90E2]/30"
          style={{ maxHeight: 320 }}
        />
      )}
      <div className="w-full max-w-2xl text-center flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins mb-2 drop-shadow-glow text-[#4A90E2]">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FF5C5C] mb-4 drop-shadow-glow">
            {subtitle}
          </h2>
        )}
        <div className="text-base sm:text-lg md:text-xl font-poppins text-[#E1E1E1] opacity-90 mt-2 mb-4">
          {content}
        </div>
      </div>
    </section>
  );
}
