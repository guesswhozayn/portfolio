export default function Footer() {
  return (
    <div className="w-full bg-black text-white overflow-hidden flex flex-col">
      {/* Links & Copyright (Matches reference layout) */}
      <div className="max-w-[1400px] mx-auto w-full px-8 flex flex-col sm:flex-row justify-between items-center pb-8 pt-8 lg:pt-0 gap-4">
        <div className="text-[11px] font-medium text-zinc-400">
          © {new Date().getFullYear()} Zain. All Rights Reserved.
        </div>
        <div className="flex gap-2 text-[11px] font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>

      {/* Massive Creative Footer Text (Kept underneath as requested earlier) */}
      <div className="relative w-full flex justify-center items-end pt-12 pb-8 select-none group cursor-pointer overflow-hidden border-t border-white/5">
        <h1 
          className="text-[18vw] leading-[0.75] font-black tracking-tighter text-transparent transition-all duration-700 ease-in-out relative z-10"
          style={{ 
            fontFamily: "'Poppins', sans-serif",
            WebkitTextStroke: "2px rgba(255,255,255,0.15)",
          }}
        >
          <span className="bg-clip-text bg-gradient-to-b from-white to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 absolute inset-0 text-center">
            ZAIN
          </span>
          ZAIN
        </h1>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_bottom,rgba(65,35,166,0.3)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>
    </div>
  );
}
