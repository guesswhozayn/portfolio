export default function About() {
  return (
    <div className="w-full bg-white text-black py-24 sm:py-32 px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        <div className="w-full lg:w-[15%] pt-2" id="about">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">About Me</span>
        </div>
        
        <div className="w-full lg:w-[85%] flex flex-col gap-16">
          <h2 className="text-3xl sm:text-[4rem] lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] text-black max-w-[1000px]">
            I build <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">scalable full-stack applications</span> <br className="hidden sm:inline" />
            and integrate <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">advanced systems</span> into modern <br className="hidden sm:inline" />
            software architectures.
          </h2>

          <div className="flex flex-col md:flex-row gap-12 w-full lg:w-[80%] ml-auto lg:mr-[5%]">
            <p className="text-[14px] text-zinc-600 leading-relaxed font-normal md:w-[60%]">
              I&apos;m Zain. I focus on bridging the gap between robust backend engineering and clean frontend execution. Recently, my work revolves around implementing LLMs, autonomous agent pipelines, and intelligent data processing into production environments to solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t md:border-t-0 md:border-l border-zinc-200 pt-6 md:pt-0 pl-0 md:pl-6 md:w-[40%] min-w-[240px] shrink-0">
              <div className="group cursor-pointer">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 group-hover:text-blue-600 transition-colors duration-300">Based In</span>
                <span className="block text-base font-bold tracking-tight text-black mt-0.5">Islamabad, PK</span>
              </div>
              <div className="group cursor-pointer">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 group-hover:text-blue-600 transition-colors duration-300">Experience</span>
                <span className="block text-base font-bold tracking-tight text-black mt-0.5">4+ Years</span>
              </div>
              <div className="group cursor-pointer">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 group-hover:text-blue-600 transition-colors duration-300">Current Focus</span>
                <span className="block text-base font-bold tracking-tight text-black mt-0.5">AI & Fullstack</span>
              </div>
              <div className="group cursor-pointer">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 group-hover:text-blue-600 transition-colors duration-300">Status</span>
                <span className="block text-base font-bold tracking-tight text-black mt-0.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
