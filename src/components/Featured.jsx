import zaynImg from "../assets/img/img.jpg";

export default function Featured() {
  return (
    <div className="w-full bg-white text-black py-12 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#4b3c79] to-[#251b3f] relative flex flex-col items-center justify-center py-24 sm:py-32 group cursor-pointer">
          
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 flex flex-col gap-2 z-10">
            <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">About Me</span>
            <span className="text-white text-2xl sm:text-3xl font-bold tracking-tight">Open Source</span>
            <span className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">Zain Ul Abidin</span>
          </div>

          <div className="absolute top-8 right-8 sm:top-12 sm:right-12 z-10">
            <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase hover:text-white transition-colors">↗</span>
          </div>

          {/* Centerpiece Image */}
          <div className="w-64 h-64 sm:w-[400px] sm:h-[400px] mt-16 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-700 ease-out border-4 border-white/10 relative z-0">
            <img 
              src={zaynImg} 
              alt="Zain" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-80" 
            />
          </div>

          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-10">
            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
