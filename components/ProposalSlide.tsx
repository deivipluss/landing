import type { ProposalSlideType } from "@/data/propuestaContent";

export default function ProposalSlide({ title, subtitle, content }: ProposalSlideType) {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center snap-start px-4 py-8 bg-gradient-to-b from-[#0D0C1D] via-[#131429] to-[#1A1B2E] text-white overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative w-full max-w-2xl text-center flex flex-col items-center">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#4A90E2] to-[#63B3ED]"
          style={{
            backgroundSize: '200% auto',
            animation: 'gradient 8s linear infinite'
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <h2 
            className="text-lg sm:text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FF5C5C] to-[#FF8080] mb-6"
            style={{
              backgroundSize: '200% auto',
              animation: 'gradient 8s linear infinite'
            }}
          >
            {subtitle}
          </h2>
        )}
        <div 
          className="w-full bg-[#181E2A]/70 backdrop-blur-xl rounded-xl p-8 
          shadow-[0_0_30px_rgba(74,144,226,0.1)] 
          border border-[#2A3344] hover:border-[#4A90E2]/30
          transition-all duration-500 hover:transform hover:scale-[1.02]
          hover:shadow-[0_0_40px_rgba(74,144,226,0.2)]"
        >
          <style jsx>{`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
          <div className="prose prose-invert max-w-none">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
