import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import homivioImg from "../assets/img/homivio-desktop.png";
import attestifyImg from "../assets/img/attestify-desktop.png";
import picketImg from "../assets/img/picket-desktop.png";

export default function Projects() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: "homivio",
      title: "Homivio",
      category: "E-Commerce Architecture",
      teaser: "A high-performance storefront optimized for sub-second page rendering and massive client traffic concurrency.",
      img: homivioImg,
      liveUrl: "https://homivio-ecom.vercel.app"
    },
    {
      id: "attestify",
      title: "Attestify",
      category: "Web3 Verification Engine",
      teaser: "Decentralized document and credential attestation system built using secure Ethereum smart contracts.",
      img: attestifyImg,
      liveUrl: "https://attestify-alpha.vercel.app"
    },
    {
      id: "picket",
      title: "Picket",
      category: "AI Agent Engine",
      teaser: "An automated HR screening pipeline powered by multi-agent reasoning chains and vector search indexing.",
      img: picketImg,
      liveUrl: "https://picket-hr.vercel.app"
    }
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPos = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    if (width === 0) return;
    const index = Math.round(scrollPos / width);
    setActiveIndex(index);
  };

  const scrollTo = (index) => {
    if (scrollRef.current && scrollRef.current.offsetWidth > 0) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current && scrollRef.current.offsetWidth > 0) {
        scrollRef.current.scrollLeft = scrollRef.current.offsetWidth * activeIndex;
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <div className="w-full bg-white text-black py-24 sm:py-32" id="work">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-end border-b border-zinc-100 pb-6 gap-6">
          <div className="flex flex-col gap-2 max-w-[600px]">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">Selected Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black transition-all duration-300">
              {projects[activeIndex]?.title || "Project Showcase"}
            </h2>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600">
              {projects[activeIndex]?.category || ""}
            </span>
            <p className="text-sm text-zinc-500 mt-2 leading-relaxed transition-all duration-500">
              {projects[activeIndex]?.teaser || ""}
            </p>

            {/* Direct Project CTAs for accessibility and mobile viewports */}
            <div className="flex gap-4 mt-4">
              <Link 
                to={`/project/${projects[activeIndex]?.id}`}
                className="px-5 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm text-center min-w-[120px]"
              >
                Case Study
              </Link>
              <a 
                href={projects[activeIndex]?.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-transparent text-zinc-800 text-xs font-bold uppercase tracking-widest rounded-full border border-black/15 hover:border-black/35 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 min-w-[120px]"
              >
                <span>Live Site</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Custom Navigation Dots - Blue Accent and Expand transition */}
          <div className="flex gap-2 mt-4 sm:mt-0 items-center">
            {projects.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out ${activeIndex === idx ? "w-14 bg-blue-600" : "w-8 bg-zinc-200 hover:bg-zinc-300"}`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Showcase Display Container */}
        <div className="relative w-full max-w-[1100px] mx-auto mt-6 group/display">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-zinc-950 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
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
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/screen:scale-[1.02]" 
                  />
                  
                  {/* Hover Overlay with Case Study / Live Site links */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 flex flex-col sm:flex-row items-center justify-center gap-4 backdrop-blur-sm z-20">
                    <Link 
                      to={`/project/${proj.id}`}
                      className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all duration-300 text-center min-w-[130px] shadow-lg"
                    >
                      Case Study
                    </Link>
                    <a 
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all duration-300 text-center min-w-[130px] border border-blue-500 shadow-lg shadow-blue-500/20"
                    >
                      Live Site ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Nav Arrows */}
          <button 
            onClick={() => activeIndex > 0 && scrollTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="absolute left-[-16px] lg:left-[-24px] top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-black border border-zinc-200 shadow-xl flex items-center justify-center z-30 hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none opacity-0 group-hover/display:opacity-100 group/btn"
            aria-label="Previous Project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:-translate-x-0.5 transition-transform duration-300">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <button 
            onClick={() => activeIndex < projects.length - 1 && scrollTo(activeIndex + 1)}
            disabled={activeIndex === projects.length - 1}
            className="absolute right-[-16px] lg:right-[-24px] top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-black border border-zinc-200 shadow-xl flex items-center justify-center z-30 hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none opacity-0 group-hover/display:opacity-100 group/btn"
            aria-label="Next Project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-0.5 transition-transform duration-300">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Instructions */}
      <div className="flex justify-center mt-4">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          <span>Scroll / Swipe</span>
        </span>
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
