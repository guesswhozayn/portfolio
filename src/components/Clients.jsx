import { useState } from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import client1 from "../assets/img/client-1.png";
import client2 from "../assets/img/client-2.png";
import client3 from "../assets/img/client-3.png";
import client4 from "../assets/img/client-4.png";

const testimonials = [
  {
    name: "David Vance",
    role: "CTO, Attestify",
    avatar: client1,
    text: "Zain came in and completely refactored our IPFS uploading and authentication hooks when our internal team hit a wall. He doesn't just write code; he helped us design a clean architecture that actually works under load. Saved us weeks of debugging.",
    platform: "Direct Partner",
    project: "Attestify"
  },
  {
    name: "Sarah Lin",
    role: "Lead Architect, Homivio",
    avatar: client2,
    text: "We needed to move our checkout flow to Stripe serverless functions without breaking existing carts. Zain handled the migration in a weekend, set up robust webhooks, and got our page load speeds down under 800ms. Exceptional work.",
    platform: "Upwork Verified",
    project: "Homivio"
  },
  {
    name: "Aarav Mehta",
    role: "Founder, Picket",
    avatar: client3,
    text: "Zain built out our BullMQ worker queues for resume processing. He optimized the Redis memory footprint so we could run thousands of parser agents concurrently without hitting memory limits. Super responsive and easy to work with.",
    platform: "Upwork Verified",
    project: "Picket"
  },
  {
    name: "Elena Rostova",
    role: "Creative Director",
    avatar: client4,
    text: "It's rare to find an engineer who can implement complex motion-heavy Figma mockups pixel-for-pixel while also structuring clean API layouts. Zain crushed the frontend build and got the page score to 99 on Lighthouse.",
    platform: "Direct Partner",
    project: "Creative Portfolio"
  }
];

export default function Clients() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="w-full bg-[#050505] text-white py-24 border-t border-white/5 relative overflow-hidden" id="clients">
      
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-blue-900/5 blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-[1400px] mx-auto px-8 space-y-12 relative z-10">
        
        {/* Header Block */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">Client Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Trust Metrics.</h2>
        </div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 gap-4">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative overflow-hidden group ${
                hoverIndex === idx 
                  ? "bg-[#0c0c0c] border-blue-500/30 shadow-lg translate-x-2" 
                  : "bg-[#070707] border-white/5"
              }`}
            >

              <div className="flex gap-4 flex-1">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-bold text-white text-sm">{t.name}</span>
                    <span className="text-[10px] text-zinc-500">{t.role}</span>
                    <div className="flex items-center gap-1 bg-zinc-900 border border-white/5 px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wider text-zinc-400">
                      <FiCheckCircle size={9} className="text-blue-500" />
                      <span>{t.platform}</span>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed pr-0 sm:pr-8">"{t.text}"</p>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-3 shrink-0 w-full sm:w-auto border-t border-white/5 sm:border-t-0 pt-4 sm:pt-0">
                <span className="text-[10px] font-mono tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-lg">
                  {t.project}
                </span>
                
                <a 
                  href="#work"
                  className={`text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all duration-300 ${
                    hoverIndex === idx ? "text-white translate-x-1" : "text-zinc-500"
                  }`}
                >
                  View Project <FiArrowRight size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
