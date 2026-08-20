

export default function Mission() {
  return (
    <div className="w-full bg-white text-black py-24 sm:py-32 px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        <div className="w-full lg:w-[15%] pt-2">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">About</span>
        </div>
        
        <div className="w-full lg:w-[85%] flex flex-col gap-16">
          <h2 className="text-[3xl] sm:text-[4rem] lg:text-[4.5rem] font-medium tracking-tight leading-[1.05] text-black max-w-[1000px]">
            Fundamentally, I believe <br />
            that engineering is not just <br />
            about functionality but <br />
            also about creating <br />
            immersive and <span className="inline-flex items-center justify-center bg-[#1c1c1e] text-white text-[12px] font-bold tracking-[0.1em] uppercase px-5 py-2.5 rounded-full mx-2 -translate-y-2 align-middle cursor-pointer hover:bg-black transition-colors">More</span> <br />
            meaningful experiences.
          </h2>

          <div className="flex flex-col sm:flex-row gap-12 w-full lg:w-1/2 ml-auto lg:mr-[10%]">
            <p className="text-[13px] text-zinc-500 leading-relaxed font-medium">
              I engineer scalable software that merges robust backend architectures with flawless frontend execution. Every line of code is purposeful, built for high performance.
            </p>
            <div className="flex flex-col gap-1 border-l border-zinc-200 pl-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black">Established</span>
              <span className="text-xl font-medium tracking-tight">2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
