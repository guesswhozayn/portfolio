import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import Section from "./ui/Section";
import InteractiveCard from "./ui/InteractiveCard";

function ProjectArchitecture({ projectName }) {
  if (projectName === "Picket") {
    return (
      <div className="flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
        <h4 className="text-xs font-bold font-space uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">Asynchronous Pipeline Architecture</h4>
        <div className="flex flex-col gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              1. Resume Upload
            </div>
            <span className="text-zinc-400">→</span>
            <div className="flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              2. BullMQ & Redis
            </div>
          </div>
          <div className="flex items-center justify-center py-0.5 text-zinc-400">↓</div>
          <div className="p-3 rounded-xl border border-cyan-500/20 dark:border-cyan-500/30 bg-cyan-500/5 font-bold text-cyan-600 dark:text-cyan-400 text-center">
            3. Multi-Agent Audit (Gemini, Llama 3.3, Tavily OSINT Search)
          </div>
          <div className="flex items-center justify-center py-0.5 text-zinc-400">↓</div>
          <div className="flex items-center gap-3">
            <div className="flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              4. Socket.io Broker
            </div>
            <span className="text-zinc-400">→</span>
            <div className="flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              5. Live Dashboard
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectName === "Attestify") {
    return (
      <div className="flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
        <h4 className="text-xs font-bold font-space uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">Decentralized Credentials Flow</h4>
        <div className="flex flex-col gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              1. Issue Claim
            </div>
            <span className="text-zinc-400">→</span>
            <div className="flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              2. IPFS Storage
            </div>
          </div>
          <div className="flex items-center justify-center py-0.5 text-zinc-400">↓</div>
          <div className="p-3 rounded-xl border border-indigo-500/20 dark:border-indigo-500/30 bg-indigo-500/5 font-bold text-indigo-600 dark:text-indigo-400 text-center">
            3. Solidity SBT Minting (Ethereum Smart Contract validation)
          </div>
          <div className="flex items-center justify-center py-0.5 text-zinc-400">↓</div>
          <div className="flex items-center gap-3">
            <div className="flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              4. QR Signature Code
            </div>
            <span className="text-zinc-400">→</span>
            <div className="flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              5. Instant Verifier
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Attestify",
      description:
        "A decentralized app (DApp) utilizing Ethereum Soulbound Tokens (SBTs) and IPFS to issue permanently verified, unforgeable academic credentials with zero-cost instant QR authentication.",
      longDescription:
        "Attestify is a Web3-powered academic credentialing platform that eliminates diploma forgery. By mapping academic degrees to non-transferable Soulbound Tokens (SBTs) on the Ethereum blockchain, it creates a tamper-proof verification ledger. Combined with IPFS for decentralized metadata hosting, credentials can be validated instantly via dynamically generated QR codes at zero gas cost.",
      url: "https://attestify-alpha.vercel.app",
      github: "https://github.com/guesswhozayn/attestify",
      tags: ["Solidity", "IPFS", "React", "Web3"],
      keyAchievements: [
        "Implemented Gas-Optimized ERC-721 based Soulbound Tokens, ensuring non-transferability and permanent verification.",
        "Integrated IPFS (Pinata) for decentralized metadata hosting, securing student files and transcript data.",
        "Designed a cryptographic authentication scheme for instant, zero-cost QR code validation without executing blockchain read calls directly on-chain."
      ]
    },
    {
      name: "Picket",
      description:
        "An automated candidate verification and assessment platform. Features an asynchronous multi-agent pipeline (Gemini, Llama 3.3, Tavily) running on BullMQ/Redis to analyze resumes and OSINT footprints, paired with interactive coding challenges backed by behavioral telemetry.",
      longDescription:
        "Picket is an AI-native candidate assessment engine that automates multi-channel profile auditing. Using an asynchronous multi-agent queue (Gemini 1.5, Llama 3.3, and Tavily), Picket automatically inspects candidate resumes and correlates public OSINT footprints to verify claims. The platform hosts sandboxed, telemetry-backed coding assessments to evaluate practical problem-solving in real-time.",
      url: "https://picket-hr.vercel.app",
      github: "https://github.com/guesswhozayn/picket",
      tags: ["React 19", "Node.js", "Redis", "BullMQ", "LLMs"],
      keyAchievements: [
        "Orchestrated a highly concurrent background pipeline using Node.js, BullMQ, and Redis to process multi-agent tasks asynchronously.",
        "Engineered behavioral telemetry capture inside the sandboxed code runner, analyzing keyboard patterns, paste events, and tab switches to gauge candidate integrity.",
        "Developed real-time progress broadcasts using Socket.io to stream background agent steps directly to the hiring dashboard."
      ]
    },
  ];

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <InteractiveCard
            key={idx}
            className="md:col-span-2"
          >
            <div
              onClick={() => setSelectedProject(project)}
              className="group/card relative flex flex-col gap-3 p-6 md:p-10 h-full cursor-pointer focus:outline-none"
            >
              <span className="absolute top-5 right-5 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover/card:bg-zinc-200 dark:group-hover/card:bg-zinc-700 group-hover/card:text-zinc-900 dark:group-hover/card:text-white transition-all duration-200 font-mono">
                View Architecture
              </span>

              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white pr-28 flex items-center gap-2.5">
                {project.name === "Attestify" ? (
                  <span className="font-sans font-black tracking-[-0.05em] lowercase">
                    attestify<span className="text-indigo-500">.</span>
                  </span>
                ) : project.name === "Picket" ? (
                  <>
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 44 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Picket logo"
                      className="shrink-0"
                    >
                      <defs>
                        <linearGradient id="pk-g-back" x1="6" y1="6" x2="20" y2="48" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#1565C0" />
                          <stop offset="100%" stopColor="#1E88E5" />
                        </linearGradient>
                        <linearGradient id="pk-g-front" x1="22" y1="2" x2="34" y2="46" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#26C6DA" />
                          <stop offset="100%" stopColor="#1565C0" />
                        </linearGradient>
                      </defs>
                      <rect
                        x="4"
                        y="6"
                        width="17"
                        height="40"
                        rx="8.5"
                        fill="url(#pk-g-back)"
                        transform="rotate(14 12.5 26)"
                      />
                      <rect
                        x="20"
                        y="3"
                        width="15"
                        height="38"
                        rx="7.5"
                        fill="url(#pk-g-front)"
                        transform="rotate(-6 27.5 22)"
                      />
                    </svg>
                    <span className="font-sans font-black tracking-[-0.05em] lowercase">
                      picket<span className="text-cyan-500">.</span>
                    </span>
                  </>
                ) : (
                  project.name
                )}
              </h3>

              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </InteractiveCard>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] cursor-pointer"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-lg md:max-w-xl bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl z-[101] flex flex-col h-full"
            >
              <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {selectedProject.name === "Picket" ? (
                      <span className="font-sans font-black tracking-[-0.05em] lowercase text-lg">
                        picket<span className="text-cyan-500">.</span>
                      </span>
                    ) : selectedProject.name === "Attestify" ? (
                      <span className="font-sans font-black tracking-[-0.05em] lowercase text-lg">
                        attestify<span className="text-indigo-500">.</span>
                      </span>
                    ) : (
                      selectedProject.name
                    )}
                  </h3>
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                    System Architecture
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-bold font-space uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Overview</h4>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ProjectArchitecture projectName={selectedProject.name} />

                <div className="flex flex-col gap-3">
                  <h4 className="text-xs font-bold font-space uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Technical Highlights & Metrics</h4>
                  <ul className="flex flex-col gap-3">
                    {selectedProject.keyAchievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <span className="text-emerald-500 select-none">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex gap-3 shrink-0">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform text-sm shadow-md"
                >
                  <FiExternalLink size={16} />
                  Live Platform
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98] transition-all text-sm shadow-sm"
                >
                  <FiGithub size={16} />
                  Source Code
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Section>
  );
}
