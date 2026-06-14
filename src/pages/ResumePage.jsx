import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../components/ui/Section";
import ListItem from "../components/ui/ListItem";
import Education from "../components/Education";
import { FiDownload, FiLinkedin, FiInstagram, FiGithub, FiMail, FiPhone, FiGlobe, FiX } from "react-icons/fi";

export default function ResumePage() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const categories = [
    { name: "Programming", skills: ["JavaScript", "TypeScript", "Solidity", "Python", "C++"] },
    { name: "Frontend",    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { name: "Backend",     skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Socket.io", "BullMQ", "JWT"] },
    { name: "Databases",   skills: ["MongoDB", "PostgreSQL", "Redis"] },
    { name: "Blockchain",  skills: ["Smart Contracts", "Hardhat", "Ethers.js", "OpenZeppelin Contracts", "Ethereum & Testnets"] },
    { name: "DevOps & Deployment", skills: ["Git", "GitHub", "Vercel", "Netlify", "Docker", "GitHub Actions"] },
    { name: "Tools & Workflow", skills: ["Linux", "Visual Studio Code", "Postman", "NPM", "CLI"] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-300 relative"
    >
      {/* Subtle top gradient */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.08),transparent)]" />

      <div className="mx-auto max-w-screen-xl px-8 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:gap-20">

          {/* === LEFT: Sticky Sidebar Column === */}
          <div className="w-full lg:w-5/12 pt-48 pb-16 lg:pt-48 lg:pb-32 relative">
            {/* Background ambient glow ball */}
            <div className="absolute -left-20 top-1/4 w-48 h-48 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none" />

            <aside className="lg:sticky lg:top-28">
              <div className="relative p-6 sm:p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl shadow-lg flex flex-col gap-6 overflow-hidden">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
                    Zain Ul Abidin
                  </h1>
                  <p className="text-base sm:text-lg font-medium text-zinc-500 mb-3">
                    Software Engineer
                  </p>
                  
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/20 mb-4 font-space uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for Opportunities
                  </div>
                  {/* Contact details */}
                  <div className="flex flex-col gap-3 mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 font-space">
                    <div className="flex items-center gap-2.5">
                      <FiPhone className="text-zinc-400 dark:text-zinc-500 shrink-0" size={16} />
                      <button
                        onClick={() => handleCopy("+923335771397", "phone")}
                        className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                      >
                        +92 333 5771397
                      </button>
                      {copiedText === "phone" && (
                        <span className="text-[10px] text-emerald-500 font-mono">Copied!</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FiMail className="text-zinc-400 dark:text-zinc-500 shrink-0" size={16} />
                      <button
                        onClick={() => handleCopy("guesswhozayn@gmail.com", "email")}
                        className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                      >
                        guesswhozayn@gmail.com
                      </button>
                      {copiedText === "email" && (
                        <span className="text-[10px] text-emerald-500 font-mono">Copied!</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FiLinkedin className="text-zinc-400 dark:text-zinc-500 shrink-0" size={16} />
                      <a href="https://linkedin.com/in/z4yn" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                        linkedin.com/in/z4yn
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FiGithub className="text-zinc-400 dark:text-zinc-500 shrink-0" size={16} />
                      <a href="https://github.com/guesswhozayn" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                        github.com/guesswhozayn
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FiGlobe className="text-zinc-400 dark:text-zinc-500 shrink-0" size={16} />
                      <a href="https://z4yn.vercel.app" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                        z4yn.vercel.app
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/zayn_resume.pdf"
                    download
                    className="inline-flex items-center gap-2 text-base font-medium px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
                  >
                    <FiDownload size={17} />
                    Download
                  </a>
                  <button
                    onClick={() => setIsPreviewOpen(true)}
                    className="inline-flex items-center gap-2 text-base font-medium px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-400 cursor-pointer"
                  >
                    <FiGlobe size={17} />
                    Preview
                  </button>
                </div>
              </div>
            </aside>
          </div>

          {/* === RIGHT: Scrolling Content === */}
          <main className="lg:w-7/12 flex flex-col gap-24 pt-32 pb-24 lg:pt-48 lg:pb-32">
            <Education />

            <Section title="Technical Skills">
              <div className="flex flex-col gap-4">
                {categories.map((cat, idx) => (
                  <ListItem key={idx} label={cat.name} value={cat.skills.join(", ")} />
                ))}
              </div>
            </Section>

            {/* Back to Interactive Showcase CTA */}
            <div className="flex flex-col items-center text-center p-8 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 rounded-2xl gap-4">
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Looking for interactive project showcases, code highlight walk-throughs, and system design flows?
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:scale-105 active:scale-95 transition-all shadow-md"
              >
                Explore Interactive Showcase
              </Link>
            </div>
          </main>

        </div>
      </div>

      {/* PDF Inline Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 top-10 bottom-10 md:inset-10 lg:inset-20 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl z-[101] flex flex-col overflow-hidden"
            >
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between shrink-0">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white font-mono">
                  zayn_resume.pdf
                </span>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <FiX size={18} />
                </button>
              </div>
              <iframe
                src="/zayn_resume.pdf#toolbar=0"
                className="w-full h-full border-0 bg-zinc-100 dark:bg-zinc-950"
                title="Resume PDF Preview"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

