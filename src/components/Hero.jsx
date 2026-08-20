import homivioImg from "../assets/img/homivio-desktop.png";
import attestifyImg from "../assets/img/attestify-desktop.png";
import picketImg from "../assets/img/picket-desktop.png";

export default function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-[100vh] flex flex-col justify-between pt-32 pb-8 px-8 overflow-hidden bg-white">
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
            <h1 className="text-[5rem] sm:text-[6rem] lg:text-[7.5rem] font-bold tracking-tight leading-[1.0] sm:leading-[0.95] text-white">
              Crafting <br />
              logic <br />
              <span className="text-white/40">through</span> <br />
              <span className="text-white/40">engineering</span>
            </h1>
            
            {/* Interactive Avatar Stack */}
            <div className="flex -space-x-3 hover:-space-x-1.5 transition-all duration-500 ease-out mt-6 group/avatars cursor-pointer w-fit">
              {[
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/46.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg"
              ].map((imgUrl, i) => (
                <div 
                  key={i} 
                  className="w-12 h-12 rounded-full border-[3px] border-white/15 bg-zinc-900 overflow-hidden shadow-xl relative transition-all duration-300 ease-out hover:scale-110 hover:z-30 hover:border-indigo-500" 
                  style={{ zIndex: 10 - i }}
                >
                  <img src={imgUrl} alt={`Client ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-[280px] text-left mt-4 lg:mt-0 lg:ml-auto">
            <p className="text-[13px] text-white/50 leading-relaxed font-medium">
              I believe good engineering is key to building strong connections.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between w-full mt-auto pt-24 gap-6">
          <button 
            onClick={scrollToWork}
            className="mb-4 sm:mb-0 px-8 py-4 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer hover:bg-zinc-900 border border-white/10 shrink-0"
          >
            See My Portfolio
          </button>
          
          <div className="flex gap-3">
            {[homivioImg, attestifyImg, picketImg].map((img, idx) => (
              <div 
                key={idx} 
                onClick={scrollToWork}
                className="w-24 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden bg-black shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer relative group"
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <button 
            onClick={scrollToWork}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer hover:bg-zinc-900 border border-white/10 group shrink-0"
          >
            <span>Scroll Now</span>
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-y-0.5 transition-transform duration-300">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
          </button>
        </div>
        
      </div>
    </div>
  );
}
