import zaynImg from "../assets/img/img.jpg";

export default function Spotlight() {
  return (
    <div className="w-full bg-white text-black py-16 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="w-full rounded-[2.5rem] overflow-hidden relative py-16 px-8 sm:p-16 lg:p-20 group border border-white/10 shadow-2xl transition-all duration-700 hover:shadow-[0_30px_60px_rgba(37,99,235,0.25)] flex flex-col lg:flex-row items-center justify-between gap-12 cursor-default bg-gradient-to-br from-black via-[#081035] to-[#2563eb]">
          
          {/* Dynamic Glowing blue aura blur */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-blue-500/15 blur-[100px] pointer-events-none group-hover:bg-blue-500/25 group-hover:scale-110 transition-all duration-700 ease-out z-10" />

          {/* Left Column: Bio & Text Content */}
          <div className="flex-1 flex flex-col gap-6 relative z-20 text-left">
            <div className="flex flex-col gap-2">
              <span className="text-blue-300 text-[10px] font-bold tracking-[0.2em] uppercase">About Me / Open Source</span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Building for the <br /> open web.
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-[600px] font-normal">
              I&apos;m Zain ul Abidin, a full-stack engineer who loves designing high-throughput developer systems, creating open-source tools, and engineering clean web experiences. I actively collaborate with developers globally, translating complex backend challenges into elegant client-side execution.
            </p>

            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-2 px-6 py-3.5 bg-white text-black hover:bg-blue-600 hover:text-white text-xs font-bold uppercase tracking-widest rounded-full w-fit hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer"
            >
              Follow on GitHub ↗
            </a>
          </div>

          {/* Right Column: Circular Portrait Image */}
          <div className="relative z-20 shrink-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border-[6px] border-white/10 overflow-hidden shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:border-white/25">
            <img 
              src={zaynImg} 
              alt="Zain ul Abidin"
              className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-105" 
            />
          </div>

        </div>
      </div>
    </div>
  );
}
