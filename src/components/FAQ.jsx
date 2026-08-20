import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { q: "What services does Zain offer?", a: "I specialize in the MERN stack, Next.js, and Web3 technologies like Solidity and IPFS." },
    { q: "How does Zain work with clients?", a: "I focus on understanding the core business requirements, designing a scalable architecture, and then executing with clean code." },
    { q: "How long does it take to complete a project?", a: "Timelines vary depending on complexity, but most mid-sized projects take 4-8 weeks from conception to launch." },
    { q: "Do you accept design projects for mobile apps?", a: "Yes, I build cross-platform mobile experiences using React Native and modern web technologies." },
    { q: "How to contact Zain to start the project?", a: "You can reach out via the contact button in the navigation or through my social channels." },
    { q: "How much does it cost to use your services?", a: "Pricing is project-based. Feel free to reach out with your requirements for a detailed estimate." },
  ];

  return (
    <div className="w-full bg-black py-24 sm:py-32" id="faq">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
        
        {/* Left Side: Social Icons */}
        <div className="flex flex-col justify-end lg:w-[40%] order-2 lg:order-1">
          <div className="flex items-center gap-3">
            {[
              "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z", // LinkedIn
              "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z", // Twitter/X
              "M9 18l6-10-14 4 4 1 5-4-3 5z", // Telegram
              "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z", // YouTube
              "M9 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM19 22h-4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z", // Generic Pause (Placeholder for Behance/Other)
            ].map((path, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {i === 4 ? <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 11a2 2 0 0 1-2 2h-2v-4h2a2 2 0 0 1 2 2zm-4-4h-2v10h2zm-2-8a8 8 0 1 1-8 8 8 8 0 0 1 8-8z"/> : <path d={path} />}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: FAQ List */}
        <div className="flex flex-col gap-3 lg:w-[60%] order-1 lg:order-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="flex flex-col bg-[#111111] hover:bg-[#151515] transition-colors rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="py-5 px-6 flex items-center justify-between text-left w-full"
                >
                  <span className="text-[13px] font-medium text-zinc-300">{faq.q}</span>
                  <div className="w-6 h-6 shrink-0 rounded-full bg-[#000000] flex items-center justify-center ml-4">
                    <span className={`text-zinc-500 text-lg leading-none transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 px-6 text-sm text-zinc-500 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
