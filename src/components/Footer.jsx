import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = { 
        timeZone: "Asia/Karachi", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit", 
        hour12: false 
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white relative overflow-hidden border-t border-zinc-900 pt-24 pb-12">
      {/* Dynamic Glowing blue aura blur behind elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-500/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 flex flex-col gap-16 relative z-10">
        
        {/* Upper Grid Layout: Side-by-side elements on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5 pb-16">
          
          {/* Column 1: Collaboration */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-500 uppercase">Collaboration</span>
            <div className="flex flex-col gap-2">
              <a 
                href="mailto:hizainulabidin@gmail.com" 
                className="text-base sm:text-lg font-bold text-white hover:text-blue-500 transition-colors duration-300 w-fit"
              >
                hizainulabidin@gmail.com ↗
              </a>
              <span className="text-xs text-zinc-400 flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for new projects
              </span>
            </div>
          </div>
          
          {/* Column 2: Local Time & Location */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-500 uppercase">Local Time</span>
            <div className="flex flex-col gap-1">
              <span className="text-base sm:text-lg font-bold font-mono text-zinc-200">
                {time ? `${time} PKT` : "Loading..."}
              </span>
              <span className="text-xs text-zinc-400">Islamabad, PK</span>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-500 uppercase">Navigation</span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                { name: "About Me", href: "/#about" },
                { name: "Services", href: "/#services" },
                { name: "Project", href: "/#work" },
                { name: "Clients", href: "/#clients" },
                { name: "Resume", href: "/zain_resume.pdf", isDownload: true },
                { name: "FAQ", href: "/#faq" }
              ].map((item) => 
                item.isDownload ? (
                  <a 
                    key={item.name}
                    href={item.href} 
                    download
                    className="text-xs text-zinc-400 hover:text-blue-500 hover:translate-x-1 transition-all duration-300 font-medium cursor-pointer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className="text-xs text-zinc-400 hover:text-blue-500 hover:translate-x-1 transition-all duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Column 4: Social Channels */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-500 uppercase">Socials</span>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { name: "LinkedIn", url: "https://linkedin.com/in/z4yn" },
                { name: "GitHub", url: "https://github.com/guesswhozayn" },
                { name: "Twitter/X", url: "https://twitter.com" },
                { name: "Discord", url: "https://discord.gg" }
              ].map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-zinc-400 hover:text-blue-500 hover:translate-y-[-1px] transition-all duration-300 font-medium"
                >
                  {social.name} ↗
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Lower Row: Copyright, Terms & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[11px] font-medium text-zinc-500">
            <span>© {new Date().getFullYear()} Zain. All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <div className="flex gap-2">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
          </div>
          <button 
            onClick={scrollToTop}
            className="px-5 py-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-xs font-bold uppercase tracking-widest cursor-pointer hover:scale-105 active:scale-95 shadow-lg bg-zinc-900"
          >
            Back to Top ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
