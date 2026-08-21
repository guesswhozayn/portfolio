import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    { 
      n: "01", 
      slug: "web-apps",
      title: "Web Applications", 
      desc: "Designing and building high-performance web systems with modern React and Next.js architectures.",
      tags: ["React", "Next.js", "Architecture"] 
    },
    { 
      n: "02", 
      slug: "web3",
      title: "Blockchain & Web3", 
      desc: "Developing secure smart contracts and decentralized web applications on Ethereum and EVM networks.",
      tags: ["Smart Contracts", "DApps", "Solidity"] 
    },
    { 
      n: "03", 
      slug: "ai",
      title: "AI Integrations", 
      desc: "Leveraging large language models (LLMs), semantic search, and autonomous agents to automate processes.",
      tags: ["LLMs", "Agents", "Automation"] 
    },
    { 
      n: "04", 
      slug: "ecommerce",
      title: "E-Commerce & Shopify", 
      desc: "Creating conversion-optimized headless storefronts, custom Shopify stores, and high-performance payment setups.",
      tags: ["Shopify", "Headless", "Stripe"] 
    }
  ];

  return (
    <section id="services" className="w-full bg-white border-t border-zinc-100 py-24 md:py-32 px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        
        <p className="text-[10px] font-bold text-zinc-400 tracking-[0.2em] uppercase">
          What I Build
        </p>
        
        <div className="flex flex-col">
          {services.map((s) => (
            <Link 
              key={s.n} 
              to={`/service/${s.slug}`}
              className="group border-b border-zinc-100 py-10 md:py-12 block cursor-pointer relative overflow-hidden px-4 -mx-4 rounded-xl transition-all duration-500 ease-out"
            >
              {/* Smooth sliding backdrop */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-zinc-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none z-0" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                
                <div className="flex items-baseline gap-6 md:gap-12 w-full md:w-auto relative z-10">
                  <span className="text-xl font-bold text-zinc-300 transition-colors group-hover:text-blue-600 font-mono">
                    {s.n}
                  </span>
                  <div className="flex flex-col gap-2 transition-all group-hover:translate-x-4 duration-500 ease-out">
                    <h2 className="text-4xl md:text-5xl lg:text-[4rem] tracking-tighter text-black font-bold">
                      {s.title}
                    </h2>
                    <p className="text-[13px] text-zinc-500 max-w-[500px] leading-relaxed font-normal group-hover:text-zinc-700 transition-colors duration-300">
                      {s.desc}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-row items-center justify-between gap-4 w-full md:w-auto mt-4 md:mt-0 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span 
                        key={t} 
                        className="px-4 py-2 text-xs font-bold rounded-full bg-zinc-50 text-zinc-600 border border-zinc-200 shadow-sm transition-all duration-300 group-hover:bg-blue-50/50 group-hover:text-blue-600 group-hover:border-blue-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300 text-black shrink-0 bg-white shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
                
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
