
import homivioImg from "../assets/img/homivio-desktop.png";
import attestifyImg from "../assets/img/attestify-desktop.png";
import picketImg from "../assets/img/picket-desktop.png";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[100vh] flex flex-col justify-between pt-32 pb-8 px-8 overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_100%,#7f5af0_0%,#2a1b7a_45%,black_90%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none z-0" />
      
      {/* Bottom White Blend */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[40vh] bg-[radial-gradient(ellipse_at_bottom,white_20%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col h-full flex-1">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full">
          {/* Main Title */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[5rem] sm:text-[6rem] lg:text-[7.5rem] font-bold tracking-tight leading-[0.95] text-white">
              Crafting <br />
              logic <br />
              <span className="text-white/40">through</span> <br />
              <span className="text-white/40">engineering</span>
            </h1>
            <div className="flex -space-x-3 mt-6">
              {[
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/46.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg"
              ].map((imgUrl, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-[3px] border-[#392398] bg-white overflow-hidden shadow-xl relative" style={{ zIndex: 10 - i }}>
                  <img src={imgUrl} alt={`Client ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-[260px] text-right mt-4 lg:mt-0">
            <p className="text-[13px] text-white/60 leading-relaxed font-medium">
              I believe good engineering is key to building strong connections.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-end justify-between w-full mt-auto pt-24">
          <div className="mb-4 sm:mb-0">
            <span className="text-[11px] font-bold tracking-[0.05em] uppercase text-black">SEE MY PORTFOLIO</span>
          </div>
          
          <div className="flex gap-3">
            {[homivioImg, attestifyImg, picketImg].map((img, idx) => (
              <div key={idx} className="w-24 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden bg-black shadow-2xl relative">
                <img src={img} alt="Thumbnail" className="w-full h-full object-cover object-top opacity-80" />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-8 sm:mt-0">
            <span className="text-[11px] font-bold tracking-[0.05em] uppercase text-black">SCROLL NOW</span>
            <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
