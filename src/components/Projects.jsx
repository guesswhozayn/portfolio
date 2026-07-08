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
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              1. Resume Upload
            </div>
            <span className="text-zinc-400 rotate-90 sm:rotate-0 select-none">→</span>
            <div className="w-full sm:flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              2. BullMQ & Redis
            </div>
          </div>
          <div className="flex items-center justify-center py-0.5 text-zinc-400 select-none">↓</div>
          <div className="w-full p-3 rounded-xl border border-cyan-500/20 dark:border-cyan-500/30 bg-cyan-500/5 font-bold text-cyan-600 dark:text-cyan-400 text-center">
            3. Multi-Agent Audit (Gemini, Llama 3.3, Tavily OSINT Search)
          </div>
          <div className="flex items-center justify-center py-0.5 text-zinc-400 select-none">↓</div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              4. Socket.io Broker
            </div>
            <span className="text-zinc-400 rotate-90 sm:rotate-0 select-none">→</span>
            <div className="w-full sm:flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
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
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              1. Issue Claim
            </div>
            <span className="text-zinc-400 rotate-90 sm:rotate-0 select-none">→</span>
            <div className="w-full sm:flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              2. IPFS Storage
            </div>
          </div>
          <div className="flex items-center justify-center py-0.5 text-zinc-400 select-none">↓</div>
          <div className="w-full p-3 rounded-xl border border-indigo-500/20 dark:border-indigo-500/30 bg-indigo-500/5 font-bold text-indigo-600 dark:text-indigo-400 text-center">
            3. Solidity SBT Minting (Ethereum Smart Contract validation)
          </div>
          <div className="flex items-center justify-center py-0.5 text-zinc-400 select-none">↓</div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              4. QR Signature Code
            </div>
            <span className="text-zinc-400 rotate-90 sm:rotate-0 select-none">→</span>
            <div className="w-full sm:flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              5. Instant Verifier
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectName === "Homivio") {
    return (
      <div className="flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
        <h4 className="text-xs font-bold font-space uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">Serverless Checkout & Cart Flow</h4>
        <div className="flex flex-col gap-4 font-mono text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              1. Cart Context (LocalStorage)
            </div>
            <span className="text-zinc-400 rotate-90 sm:rotate-0 select-none">→</span>
            <div className="w-full sm:flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              2. Stripe Elements
            </div>
          </div>
          <div className="flex items-center justify-center py-0.5 text-zinc-400 select-none">↓</div>
          <div className="w-full p-3 rounded-xl border border-rose-500/20 dark:border-rose-500/30 bg-rose-500/5 font-bold text-rose-600 dark:text-rose-400 text-center">
            3. Serverless Lambda (Stripe API & Payment Intent Confirmation)
          </div>
          <div className="flex items-center justify-center py-0.5 text-zinc-400 select-none">↓</div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              4. Customer/Order Record
            </div>
            <span className="text-zinc-400 rotate-90 sm:rotate-0 select-none">→</span>
            <div className="w-full sm:flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-bold text-zinc-800 dark:text-zinc-200">
              5. Local Storage Clear & UI Toast
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function SpinningGlobe() {
  return (
    <div className="relative w-6 h-6 shrink-0 flex items-center justify-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-500 dark:text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
      >
        <g transform="rotate(15 24 24)">
          {/* Outer circle (slowly rotating) */}
          <motion.circle
            cx="24"
            cy="24"
            r="22"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeDasharray="3 3"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Equator & Latitude lines */}
          <ellipse
            cx="24"
            cy="24"
            rx="22"
            ry="6"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="2 3"
            opacity="0.4"
          />
          <ellipse
            cx="24"
            cy="24"
            rx="19"
            ry="14"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 3"
            opacity="0.25"
          />

          {/* Rotating Longitude Ellipses */}
          <motion.ellipse
            cx="24"
            cy="24"
            ry="22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            animate={{
              rx: [22, 0, 22],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.ellipse
            cx="24"
            cy="24"
            ry="22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            animate={{
              rx: [0, 22, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.ellipse
            cx="24"
            cy="24"
            ry="22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            animate={{
              rx: [11, 22, 11],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.75,
            }}
          />

          <motion.ellipse
            cx="24"
            cy="24"
            ry="22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            animate={{
              rx: [11, 22, 11],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.25,
            }}
          />
        </g>
      </svg>
    </div>
  );
}

function ProjectName({ name, className = "" }) {
  const dotColor =
    name === "Attestify" ? "text-indigo-500" :
    name === "Picket" ? "text-cyan-500" :
    name === "Homivio" ? "text-rose-500" :
    "text-blue-500";

  return (
    <span className={`font-eina-semibold tracking-tight lowercase ${className}`}>
      {name}<span className={dotColor}>.</span>
    </span>
  );
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
    {
      name: "Homivio",
      description:
        "A configurable Next.js e-commerce storefront with Stripe Elements checkout, a global React Context cart engine with local persistence, and an inventory management admin dashboard.",
      longDescription:
        "Homivio is a modern e-commerce storefront engineered with Next.js App Router and React 19. It incorporates Stripe Elements for secure end-to-end payment processing, backed by a serverless AWS Lambda handler. State persistence for the cart is managed via a synchronized React Context & LocalStorage pipeline, and the application includes a dedicated administrative panel for local inventory control and mock user authentication.",
      url: "https://homivio-ecom.vercel.app",
      github: "https://github.com/guesswhozayn/homivio",
      tags: ["Next.js", "React 19", "Stripe", "Context API", "Serverless"],
      keyAchievements: [
        "Integrated Stripe SDK and Elements to build a secure checkout flow supporting tokenized payment processing.",
        "Architected a custom state synchronization layer combining React Context with LocalStorage for reactive, persistent shopping carts.",
        "Built a serverless checkout function (AWS Lambda) to verify payments, create customers, and safely process transaction details via Stripe API."
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
              <span className="absolute top-5 right-5 text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover/card:bg-zinc-200 dark:group-hover/card:bg-zinc-700 group-hover/card:text-zinc-900 dark:group-hover/card:text-white transition-all duration-200 font-mono">
                View Architecture
              </span>

              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white pr-28 flex items-center gap-2.5">
                <SpinningGlobe />
                <ProjectName name={project.name} />
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
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center">
                    <ProjectName name={selectedProject.name} className="text-lg" />
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
