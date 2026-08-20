import { useState, useRef } from "react";
import homivioImg from "../assets/img/homivio-desktop.png";
import attestifyImg from "../assets/img/attestify-desktop.png";
import picketImg from "../assets/img/picket-desktop.png";

export default function Projects() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Homivio Commerce",
      category: "E-Commerce Architecture",
      img: homivioImg
    },
    {
      title: "Attestify",
      category: "Web3 Verification",
      img: attestifyImg
    },
    {
      title: "Picket Pipeline",
      category: "AI Agent Engine",
      img: picketImg
    }
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPos = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const index = Math.round(scrollPos / width);
    setActiveIndex(index);
  };

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white text-black py-24 sm:py-32" id="work">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-end border-b border-zinc-200 pb-4">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">Selected Work</span>
            <h2 className="text-3xl font-bold tracking-tight text-black">
              {projects[activeIndex]?.title || "Project Showcase"}
            </h2>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-400">
              {projects[activeIndex]?.category || ""}
            </span>
          </div>
          
          {/* Custom Navigation Dots */}
          <div className="flex gap-2 mt-4 sm:mt-0">
            {projects.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`w-12 h-1 rounded-full transition-colors duration-300 ${activeIndex === idx ? "bg-black" : "bg-zinc-200"}`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* MacBook Air Mockup */}
        <div className="w-full max-w-[1000px] mx-auto mt-8 transition-all duration-700 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          {/* Lid & Screen */}
          <div className="relative w-full aspect-video bg-black rounded-t-[1rem] sm:rounded-t-[2rem] border-[4px] sm:border-[16px] border-black overflow-hidden shadow-2xl">
            {/* Screen Content - Horizontal Scroll Snap */}
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="absolute inset-0 bg-[#0a0a0a] flex overflow-x-auto snap-x snap-mandatory scrollbar-hide z-10"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {projects.map((proj, idx) => (
                <div className="min-w-full h-full snap-center relative flex-shrink-0 group/screen" key={idx}>
                  <img 
                    src={proj.img} 
                    alt={proj.title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000" 
                  />
                  {/* Subtle inner shadow to simulate screen bezel depth */}
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Base / Keyboard Deck */}
          <div className="relative w-[104%] -left-[2%] h-4 sm:h-6 bg-gradient-to-b from-[#e5e5e5] via-[#d4d4d4] to-[#a3a3a3] rounded-b-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex justify-center items-start border-t border-white/40">
            {/* Trackpad notch */}
            <div className="w-24 sm:w-32 h-1 sm:h-2 bg-[#a3a3a3] rounded-b-md shadow-inner" />
          </div>
        </div>
        
        {/* Instructions */}
        <div className="flex justify-center mt-4">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Scroll inside screen to view more
          </span>
        </div>

      </div>
      
      {/* Hide scrollbar globally for the screen container */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </div>
  );
}
