import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaDiscord, FaXTwitter } from "react-icons/fa6";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { q: "What services do you offer?", a: "I specialize in the MERN stack, Next.js, and Web3 technologies like Solidity and IPFS." },
    { q: "How do you work with clients?", a: "I focus on understanding the core business requirements, designing a scalable architecture, and then executing with clean code." },
    { q: "How long does it take to complete a project?", a: "Timelines vary depending on complexity, but most mid-sized projects take 4-8 weeks from conception to launch." },
    { q: "Do you accept design projects for mobile apps?", a: "Yes, I build cross-platform mobile experiences using React Native and modern web technologies." },
    { q: "How can I contact you to start a project?", a: "You can reach out via the contact button in the navigation or through my social channels." },
    { q: "How much does it cost to use your services?", a: "Pricing is project-based. Feel free to reach out with your requirements for a detailed estimate." },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/z4yn",
      icon: FaLinkedinIn
    },
    {
      name: "Twitter/X",
      url: "https://x.com/guesswhozayn",
      icon: FaXTwitter
    },
    {
      name: "Discord",
      url: "https://discord.com/users/guesswhozayn",
      icon: FaDiscord
    },
    {
      name: "GitHub",
      url: "https://github.com/guesswhozayn",
      icon: FaGithub
    }
  ];

  return (
    <div className="w-full bg-black py-24 sm:py-32" id="faq">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
        
        {/* Left Side: Heading & Social Icons */}
        <div className="flex flex-col justify-between lg:w-[40%] order-1 lg:order-1 gap-12 relative lg:min-h-[300px]">
          
          <div className="flex flex-col gap-4 relative z-10">
            {/* Pill Badge */}
            <span className="w-fit px-3 py-1 rounded-full text-[9px] font-black tracking-[0.25em] uppercase border border-blue-500/30 bg-blue-500/10 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              FAQ
            </span>

            {/* Heading Accent Styles */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
              Frequently <br />
              Asked <br />
              Questions.
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 relative z-10">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center text-white"
                  title={social.username ? `${social.name}: ${social.username}` : social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Side: FAQ List */}
        <div className="flex flex-col gap-3 lg:w-[60%] order-2 lg:order-2">
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
