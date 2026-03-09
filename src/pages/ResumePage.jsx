import Navbar from "../components/Navbar";
import Section from "../components/ui/Section";
import ListItem from "../components/ui/ListItem";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { FiDownload, FiLinkedin, FiInstagram, FiGithub, FiMail } from "react-icons/fi";

export default function ResumePage() {
  const education = [
    {
      institution: "The University of Chakwal",
      degree: "B.Sc in Computer Science",
      duration: "2022 – Present",
    },
  ];

  const categories = [
    { name: "Programming", skills: ["JavaScript", "TypeScript", "Python", "C++"] },
    { name: "Frontend",    skills: ["React", "Next.js", "TailwindCSS"] },
    { name: "Backend",     skills: ["NodeJS", "ExpressJS", "RESTful APIs", "GraphQL"] },
    { name: "Database",    skills: ["MongoDB", "PostgreSQL"] },
    { name: "Blockchain",  skills: ["Solidity", "Web3.js", "Ethers.js"] },
    { name: "DevOps",      skills: ["Git", "Vercel", "Docker", "GitHub Actions"] },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-300 relative">
      {/* Subtle top gradient */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.08),transparent)]" />

      <Navbar />

      <div className="mx-auto max-w-screen-xl px-8 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:gap-20">

          {/* === LEFT: Sticky Sidebar === */}
          <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-5/12 flex flex-col justify-center pt-48 pb-16 lg:py-28">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
                  Zayn Ul Abidin
                </h1>
                <p className="text-base sm:text-lg font-medium text-zinc-500 mb-3">
                  Software Engineer
                </p>
                
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for Opportunities
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/ltlehro"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/z4yn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/zaynndev"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <FiInstagram size={20} />
                  </a>
                  <a
                    href="mailto:ltlehro@gmail.com"
                    aria-label="Email"
                    className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <FiMail size={20} />
                  </a>
                </div>
              </div>

              <a
                href="/zayn_resume.pdf"
                download
                className="self-start inline-flex items-center gap-2 text-base font-medium px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
              >
                <FiDownload size={17} />
                Download Resume
              </a>
            </div>
          </aside>

          {/* === RIGHT: Scrolling Content === */}
          <main className="lg:w-7/12 flex flex-col gap-24 pt-32 pb-24 lg:pt-48 lg:pb-32">
            <Experience />
            
            <Section title="Education">
              <div className="flex flex-col gap-6">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 pb-6 border-b border-zinc-100 dark:border-zinc-800 last:border-0 last:pb-0"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{edu.institution}</h3>
                      <p className="text-base text-zinc-600 dark:text-zinc-400 mt-1">{edu.degree}</p>
                    </div>
                    <span className="text-sm font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-lg whitespace-nowrap">
                      {edu.duration}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Technical Skills">
              <div className="flex flex-col gap-4">
                {categories.map((cat, idx) => (
                  <ListItem key={idx} label={cat.name} value={cat.skills.join(", ")} />
                ))}
              </div>
            </Section>

            <Contact />
          </main>

        </div>
      </div>
    </div>
  );
}

