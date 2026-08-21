import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import homivioImg from "../assets/img/homivio-desktop.png";
import attestifyImg from "../assets/img/attestify-desktop.png";
import picketImg from "../assets/img/picket-desktop.png";
import homivioMobileImg from "../assets/img/homivio-mobile.png";
import attestifyMobileImg from "../assets/img/attestify-mobile.png";
import picketMobileImg from "../assets/img/picket-mobile.png";

export default function Projects() {
  const scrollRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: "homivio",
      title: "Homivio",
      category: "E-Commerce Architecture",
      teaser: "A high-performance storefront optimized for sub-second page rendering and massive client traffic concurrency.",
      img: homivioImg,
      mobileImg: homivioMobileImg,
      liveUrl: "https://homivio-ecom.vercel.app"
    },
    {
      id: "attestify",
      title: "Attestify",
      category: "Web3 Verification Engine",
      teaser: "Decentralized document and credential attestation system built using secure Ethereum smart contracts.",
      img: attestifyImg,
      mobileImg: attestifyMobileImg,
      liveUrl: "https://attestify-alpha.vercel.app"
    },
    {
      id: "picket",
      title: "Picket",
      category: "AI Agent Engine",
      teaser: "An automated HR screening pipeline powered by multi-agent reasoning chains and vector search indexing.",
      img: picketImg,
      mobileImg: picketMobileImg,
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

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const scrollPos = mobileScrollRef.current.scrollLeft;
    const width = mobileScrollRef.current.offsetWidth;
    if (width === 0) return;
    const index = Math.round(scrollPos / width);
    setActiveIndex(index);
  };

  const scrollTo = (index) => {
    if (scrollRef.current && scrollRef.current.offsetWidth > 0) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    }
    if (mobileScrollRef.current && mobileScrollRef.current.offsetWidth > 0) {
      const width = mobileScrollRef.current.offsetWidth;
      mobileScrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current && scrollRef.current.offsetWidth > 0) {
        scrollRef.current.scrollLeft = scrollRef.current.offsetWidth * activeIndex;
      }
      if (mobileScrollRef.current && mobileScrollRef.current.offsetWidth > 0) {
        mobileScrollRef.current.scrollLeft = mobileScrollRef.current.offsetWidth * activeIndex;
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

        {/* Desktop View: Laptop Container Wrapper */}
        <div className="hidden md:block relative w-full max-w-[1000px] mx-auto mt-8 group/mockup">
          {/* MacBook Air Mockup */}
          <div className="w-full transition-all duration-700 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            {/* Lid & Screen */}
            <div className="relative w-full aspect-video bg-black rounded-t-[1.5rem] sm:rounded-t-[2.5rem] border-[4px] sm:border-[16px] border-black shadow-2xl">
              
              {/* MacBook Notch (Overlap bezel to fix sub-pixel gap) */}
              <div className="absolute top-[-2px] sm:top-[-4px] left-1/2 -translate-x-1/2 w-16 sm:w-28 h-2.5 sm:h-4 bg-black rounded-b-[4px] sm:rounded-b-[8px] z-30 flex items-center justify-center gap-2 shadow-md">
                {/* Camera Lens */}
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-zinc-900 flex items-center justify-center shadow-inner">
                  <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-blue-500/50" />
                </div>
                {/* Green Indicator Light */}
                <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-emerald-500/80 shadow-[0_0_4px_rgba(16,185,129,0.8)]" />
              </div>

              {/* Inner screen container to handle clipping cleanly */}
              <div className="absolute inset-0 overflow-hidden rounded-t-[1.2rem] sm:rounded-t-[2.2rem]">
                {/* Glass Screen Glare Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.07] pointer-events-none z-20" />

                {/* Screen Content - Horizontal Scroll Snap */}
                <div 
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="absolute inset-0 bg-[#0a0a0a] flex overflow-x-auto snap-x snap-mandatory scrollbar-hide z-10"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {projects.map((proj, idx) => {
                    return (
                      <div className="min-w-full h-full snap-center relative flex-shrink-0 group/screen" key={idx}>
                        <img 
                          src={proj.img} 
                          alt={proj.title}
                          className="w-full h-full object-cover object-center transition-transform duration-1000" 
                        />
                        {/* Subtle inner shadow to simulate screen bezel depth */}
                        <div className="absolute inset-0 border border-white/5 pointer-events-none z-15" />
                        
                        {/* Hover Overlay with Case Study / Live Site links */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 flex flex-col sm:flex-row items-center justify-center gap-4 backdrop-blur-sm z-20">
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
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Base / Keyboard Deck */}
            <div className="relative w-[104%] -left-[2%] h-4 sm:h-6 bg-gradient-to-b from-[#e5e5e5] via-[#d4d4d4] to-[#a3a3a3] rounded-b-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex justify-center items-start border-t border-white/40">
              {/* Trackpad notch */}
              <div className="w-24 sm:w-32 h-1 sm:h-2 bg-[#a3a3a3] rounded-b-md shadow-inner" />
            </div>

          </div>

          {/* Floating Nav Arrows (Show on Hover of Mockup) */}
          <button 
            onClick={() => activeIndex > 0 && scrollTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="absolute left-[-20px] lg:left-[-32px] top-[45%] -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 hover:bg-white text-black border border-zinc-200 shadow-xl items-center justify-center z-30 hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none opacity-0 group-hover/mockup:opacity-100 group/btn hidden md:flex"
            aria-label="Previous Project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:-translate-x-0.5 transition-transform duration-300">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <button 
            onClick={() => activeIndex < projects.length - 1 && scrollTo(activeIndex + 1)}
            disabled={activeIndex === projects.length - 1}
            className="absolute right-[-20px] lg:right-[-32px] top-[45%] -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 hover:bg-white text-black border border-zinc-200 shadow-xl items-center justify-center z-30 hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none opacity-0 group-hover/mockup:opacity-100 group/btn hidden md:flex"
            aria-label="Next Project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-0.5 transition-transform duration-300">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Mobile View: iPhone Mockup */}
        <div className="block md:hidden relative w-full max-w-[280px] sm:max-w-[320px] mx-auto mt-8 group/phone">
          {/* Physical Side Buttons */}
          {/* Action Button */}
          <div className="absolute top-[80px] -left-[3px] w-[3px] h-[16px] bg-zinc-700 rounded-l-[2px] z-0" />
          {/* Volume Up */}
          <div className="absolute top-[115px] -left-[3px] w-[3px] h-[32px] bg-zinc-700 rounded-l-[2px] z-0" />
          {/* Volume Down */}
          <div className="absolute top-[160px] -left-[3px] w-[3px] h-[32px] bg-zinc-700 rounded-l-[2px] z-0" />
          {/* Side Power Button */}
          <div className="absolute top-[130px] -right-[3px] w-[3px] h-[48px] bg-zinc-700 rounded-r-[2px] z-0" />

          {/* iPhone Outer Chassis / Titanium Frame */}
          <div className="relative w-full aspect-[9/19.5] bg-zinc-950 rounded-[3rem] p-[8px] sm:p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border-[3px] border-zinc-700/80 transition-all duration-700 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            
            {/* Speaker Mesh Ear Piece */}
            <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-16 h-[2px] bg-zinc-900 rounded-full z-40" />

            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3 shadow-md">
              {/* Camera Lens Element */}
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 shadow-inner flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-blue-900/60" />
              </div>
              {/* Proximity / Sensor Dot */}
              <div className="w-1 h-1 rounded-full bg-zinc-950" />
            </div>

            {/* Screen Glass Reflection / Glare */}
            <div className="absolute inset-[8px] sm:inset-[10px] overflow-hidden rounded-[2.3rem] pointer-events-none z-20">
              <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] rotate-12 transform origin-center" />
            </div>

            {/* Screen Container */}
            <div className="absolute inset-[8px] sm:inset-[10px] overflow-hidden rounded-[2.3rem] bg-[#0a0a0a]">
              {/* Screen Content - Horizontal Scroll Snap */}
              <div 
                ref={mobileScrollRef}
                onScroll={handleMobileScroll}
                className="absolute inset-0 bg-[#0a0a0a] flex overflow-x-auto snap-x snap-mandatory scrollbar-hide z-10"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {projects.map((proj, idx) => {
                  return (
                    <div className="min-w-full h-full snap-center relative flex-shrink-0 group/screen" key={idx}>
                      <img 
                        src={proj.mobileImg} 
                        alt={proj.title}
                        className="w-full h-full object-cover object-center transition-transform duration-1000" 
                      />
                      
                      {/* Hover Overlay with Case Study / Live Site links */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm z-20">
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
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Instructions */}
      <div className="flex justify-center mt-4">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          <span className="hidden md:inline">Scroll screen or use arrows to view more</span>
          <span className="inline md:hidden">Swipe screen to view more</span>
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
