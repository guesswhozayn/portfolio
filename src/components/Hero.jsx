import client1 from "../assets/img/client-1.png";
import client2 from "../assets/img/client-2.png";
import client3 from "../assets/img/client-3.png";
import client4 from "../assets/img/client-4.png";

export default function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-[100vh] flex flex-col justify-between pt-40 sm:pt-48 lg:pt-56 pb-8 px-8 overflow-hidden bg-white">
      {/* Background Gradient - Blue dome rising from bottom, transitioning to white via a multi-stop atmospheric fade */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0.95) 8%, rgba(255, 255, 255, 0.7) 25%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 75%),
            radial-gradient(circle at 50% 100%, #ffffff 0%, #93c5fd 20%, #2563eb 45%, #081035 70%, #000000 85%, #000000 100%)
          `
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col h-full flex-1">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full">
          {/* Main Title */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[3.6rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] font-normal tracking-tight leading-[1.0] sm:leading-[0.95] text-white">
              Crafting <br />
              logic <br />
              <span className="text-white/40">through</span> <br />
              <span className="text-white/40">engineering</span>
            </h1>
            
            {/* Interactive Avatar Stack with Client Ratings */}
            <div className="flex items-center flex-wrap gap-4 mt-6">
              <div className="flex -space-x-3 hover:-space-x-1.5 transition-all duration-500 ease-out group/avatars cursor-pointer w-fit">
                {[client1, client2, client3, client4].map((imgUrl, i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white/15 bg-zinc-900 overflow-hidden shadow-xl relative transition-all duration-300 ease-out hover:scale-110 hover:z-30 hover:border-blue-500 group/avatar" 
                    style={{ zIndex: 10 - i }}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Client ${i + 1}`} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out cursor-pointer" 
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  {/* Half Star */}
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="half-star">
                        <stop offset="50%" stopColor="#fbbf24" />
                        <stop offset="50%" stopColor="#3f3f46" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#half-star)" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-[12px] text-zinc-100 ml-2 font-semibold">4.9</span>
                </div>
                <span className="text-[14px] text-white/60 leading-relaxed font-medium mt-0.5">
                  4.9/5 average from 8 projects
                </span>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-[280px] text-left mt-4 lg:mt-0 lg:ml-auto">
            <p className="text-[20px] text-white/60 leading-relaxed font-medium">
              I believe good engineering is key to building strong connections.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between w-full mt-auto pt-24 gap-6">
          {/* Primary: Sliding Spotlight Pill */}
          <button 
            onClick={scrollToWork}
            className="relative overflow-hidden mb-4 sm:mb-0 px-9 py-4 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-[0.98] transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.2)] cursor-pointer border border-white/10 shrink-0 group"
          >
            {/* Spotlight Shimmer Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              See Portfolio
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </button>

          {/* Secondary: Inverting Border & Icon Slide */}
          <button 
            onClick={scrollToWork}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-transparent text-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white active:scale-[0.98] transition-all duration-300 cursor-pointer border border-black/15 hover:border-black group shrink-0"
          >
            <span>Scroll Now</span>
            <div className="w-5 h-5 rounded-full bg-black/5 group-hover:bg-white/10 flex items-center justify-center group-hover:translate-y-0.5 transition-all duration-300">
              <svg className="w-2.5 h-2.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
          </button>
        </div>
        
      </div>
    </div>
  );
}
