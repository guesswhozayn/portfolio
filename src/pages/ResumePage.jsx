import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiPrinter,
  FiDownload,
  FiArrowLeft,
  FiBriefcase,
  FiBookOpen,
  FiFileText,
  FiPhone,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiGlobe,
  FiExternalLink,
  FiMapPin,
  FiCalendar,
  FiAward
} from "react-icons/fi";

const colorMap = {
  "bg-indigo-500": {
    text: "text-indigo-500 dark:text-indigo-400",
    border: "hover:border-indigo-500/30 dark:hover:border-indigo-500/20",
    dot: "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]",
    glow: "hover:shadow-[0_0_20px_rgba(99,102,241,0.08)]",
    pill: "hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800/50"
  },
  "bg-emerald-500": {
    text: "text-emerald-500 dark:text-emerald-400",
    border: "hover:border-emerald-500/30 dark:hover:border-emerald-500/20",
    dot: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]",
    glow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]",
    pill: "hover:bg-emerald-50 dark:hover:bg-emerald-950/20 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-200 dark:hover:border-emerald-800/50"
  },
  "bg-blue-500": {
    text: "text-blue-500 dark:text-blue-400",
    border: "hover:border-blue-500/30 dark:hover:border-blue-500/20",
    dot: "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]",
    glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]",
    pill: "hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800/50"
  },
  "bg-rose-500": {
    text: "text-rose-500 dark:text-rose-400",
    border: "hover:border-rose-500/30 dark:hover:border-rose-500/20",
    dot: "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]",
    glow: "hover:shadow-[0_0_20px_rgba(244,63,94,0.08)]",
    pill: "hover:bg-rose-50 dark:hover:bg-rose-950/20 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-200 dark:hover:border-rose-800/50"
  },
  "bg-purple-500": {
    text: "text-purple-500 dark:text-purple-400",
    border: "hover:border-purple-500/30 dark:hover:border-purple-500/20",
    dot: "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]",
    glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.08)]",
    pill: "hover:bg-purple-50 dark:hover:bg-purple-950/20 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-200 dark:hover:border-purple-800/50"
  }
};

export default function ResumePage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      role: "Software Engineer & Architect",
      company: "Picket: Automated Candidate Verification & Assessment Platform",
      duration: "Jan 2026 – May 2026",
      url: "https://picket-hr.vercel.app",
      github: "https://github.com/guesswhozayn/picket",
      bullets: [
        "Built a hiring platform using React, Node.js, Express, and MongoDB with an asynchronous job queue (BullMQ + Redis) that automatically screens candidate resumes using AI agents for plagiarism detection and digital footprint verification, with real-time status updates via Socket.io.",
        "Designed a React dashboard with server-state caching and protected routing, allowing hiring managers to upload resumes, track live pipeline progress, and manage AI-generated candidate assessments."
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redis", "BullMQ", "Socket.io", "OSINT Search"],
      color: "border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 dark:bg-cyan-500/5"
    },
    {
      role: "Full-Stack Developer",
      company: "Attestify: Decentralized Credential Verification Platform",
      duration: "Oct 2025 – Mar 2026",
      url: "https://attestify-alpha.vercel.app",
      github: "https://github.com/guesswhozayn/attestify",
      bullets: [
        "Developed a full-stack application using React, Node.js, Express, and MongoDB enabling universities to issue tamper-proof academic credentials, with APIs handling PDF certificate generation, email notifications, IPFS storage, and blockchain-based verification.",
        "Built a React frontend with role-based dashboards for issuers, students, and employers, featuring on-chain credential verification, QR code scanning, and batch certificate issuance workflows."
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Solidity", "IPFS", "Soulbound Tokens", "QR Signatures"],
      color: "border-indigo-500 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 dark:bg-indigo-500/5"
    },
    {
      role: "Frontend Engineer",
      company: "Homivio: Modern E-Commerce Storefront",
      duration: "Feb 2025 – June 2025",
      url: "https://homivio-ecom.vercel.app",
      github: "https://github.com/guesswhozayn/homivio",
      bullets: [
        "Created a full-stack e-commerce application using Next.js and React with dynamic product routing, an admin panel for inventory management, and a persistent shopping cart powered by React Context and localStorage.",
        "Integrated Stripe payment processing through a serverless function for secure checkout, and built a fully responsive storefront covering product browsing, cart management, and the complete purchase flow."
      ],
      technologies: ["Next.js", "React 19", "Node.js", "Express", "MongoDB", "Stripe Elements", "Context API", "Serverless"],
      color: "border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400 dark:bg-rose-500/5"
    }
  ];

  const skillGroups = [
    { title: "Languages", skills: ["JavaScript", "TypeScript", "Python", "SQL", "C++"], color: "bg-indigo-500" },
    { title: "Frontend", skills: ["HTML5", "CSS3", "React", "Next.js", "Redux Toolkit", "Zustand", "TailwindCSS"], color: "bg-emerald-500" },
    { title: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Socket.io", "BullMQ", "JWT"], color: "bg-blue-500" },
    { title: "Databases", skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"], color: "bg-rose-500" },
    { title: "DevOps & Tools", skills: ["Docker", "Git", "GitHub", "Vercel", "Linux", "CLI"], color: "bg-purple-500" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-300 pt-36 pb-20 px-4 md:px-8"
    >
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          /* Hide all non-printable components */
          nav, .no-print, button, aside, header, footer {
            display: none !important;
          }
          
          /* Reset page margins and background colors for printing */
          body, html, #root {
            background: white !important;
            color: black !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
          }

          /* Remove shadow, border, and adjust padding of the paper simulation container */
          .print-container {
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            background: white !important;
            color: black !important;
          }

          /* Force high contrast text and rule colors for ink */
          .print-text-dark {
            color: #000000 !important;
          }
          
          .print-text-muted {
            color: #4b5563 !important;
          }

          .print-hr {
            border-color: #000000 !important;
          }
          
          /* Standardize font size for printing */
          .print-container a {
            text-decoration: none !important;
            color: #000000 !important;
          }
        }
      `}} />

      <div className="mx-auto max-w-[850px]">
        
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 no-print px-1">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" size={16} />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer shadow-md shadow-zinc-200 dark:shadow-none"
            >
              <FiPrinter size={15} />
              Print
            </button>
            <a
              href="/zain_resume.pdf"
              download
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
            >
              <FiDownload size={15} />
              Download
            </a>
          </div>
        </div>

        
        
        
        <div className="print:hidden space-y-12">
          
          
          <div className="p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-md shadow-sm space-y-5">
            <div className="text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-eina-semibold tracking-tight text-zinc-900 dark:text-white">
                  Zain Ul Abidin
                </h1>
                <p className="text-lg font-eina text-indigo-500 dark:text-indigo-400 mt-1 tracking-wide">Software Engineer</p>
              </div>
              <div className="flex flex-col items-center sm:items-end gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                <span className="flex items-center gap-1.5"><FiMapPin /> Islamabad, Pakistan</span>
                <span className="flex items-center gap-1.5"><FiMail /> hizainulabidin@gmail.com</span>
                <span className="flex items-center gap-1.5"><FiPhone /> +923335771397</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-2">
              <a
                href="https://linkedin.com/in/z4yn"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <FiLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/guesswhozayn"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href="https://z4yn.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <FiGlobe /> Portfolio
              </a>
            </div>
          </div>

          
          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-md shadow-sm space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-mono flex items-center gap-2">
              <FiFileText size={14} /> Summary
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
              Software Engineer specializing in building scalable, full-stack web applications. Proficient in crafting responsive frontends with React and Next.js, building robust Node.js backends, and designing efficient database architectures using PostgreSQL and MongoDB. Experienced in streamlining deployment workflows with Docker, CI/CD pipelines, and modern cloud platforms.
            </p>
          </div>

          
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-mono flex items-center gap-2 pl-1">
              <FiAward size={14} /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillGroups.map((group) => {
                const colors = colorMap[group.color];
                return (
                  <div
                    key={group.title}
                    className={`group p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-md shadow-sm transition-all duration-300 ${colors.glow} ${colors.border} ${
                      group.title === "DevOps & Tools" ? "sm:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                      <h3 className={`text-xs font-bold uppercase tracking-wider font-mono ${colors.text}`}>
                        {group.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-lg bg-zinc-100/80 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800/40 text-zinc-700 dark:text-zinc-300 transition-all duration-200 hover:scale-[1.02] cursor-default ${colors.pill}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-mono flex items-center gap-2 pl-1">
              <FiBriefcase size={14} /> Relevant Experience
            </h2>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800/80 ml-3 space-y-12">
              {experiences.map((exp, idx) => {
                const isHovered = hoveredIndex === idx;
                return (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative"
                  >
                    
                    <span
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white dark:bg-zinc-950 border-2 transition-all duration-300 flex items-center justify-center ${
                        isHovered
                          ? `${exp.color.split(" ")[0]} scale-125`
                          : "border-zinc-300 dark:border-zinc-700"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-transform duration-300 ${
                          isHovered ? "bg-zinc-900 dark:bg-white scale-110" : "bg-transparent"
                        }`}
                      />
                    </span>

                    
                    <div className="group relative p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-900/20 hover:bg-white dark:hover:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div>
                          <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 font-mono tracking-wider flex items-center gap-1.5 uppercase">
                            <FiCalendar /> {exp.duration}
                          </span>
                          <h3 className="text-lg font-eina-semibold text-zinc-900 dark:text-white mt-0.5">
                            {exp.role}
                          </h3>
                          <span className="text-sm font-eina text-zinc-600 dark:text-zinc-400 block mt-0.5">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 sm:mt-0">
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-colors"
                            title="Live App"
                          >
                            <FiExternalLink size={14} />
                          </a>
                          <a
                            href={exp.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-colors"
                            title="Source Code"
                          >
                            <FiGithub size={14} />
                          </a>
                        </div>
                      </div>

                      <ul className="space-y-2 mt-3 pl-1">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
                            <span className="text-zinc-400 dark:text-zinc-600 select-none">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          
          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-md shadow-sm space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-mono flex items-center gap-2">
              <FiBookOpen size={14} /> Education
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="text-base font-eina-semibold text-zinc-900 dark:text-white">
                  The University of Chakwal
                </h3>
                <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 font-mono">
                  2022 – 2026
                </span>
              </div>
              <div className="flex justify-between items-baseline text-sm text-zinc-500">
                <span>Bachelor of Science in Computer Science</span>
                <span className="text-xs">Chakwal, Pakistan</span>
              </div>
              <ul className="list-disc pl-4 text-sm text-zinc-600 dark:text-zinc-400 space-y-1 mt-3 font-medium">
                <li>
                  <strong className="text-zinc-900 dark:text-white font-semibold">CGPA:</strong> 3.41 / 4.00
                </li>
                <li>
                  <strong className="text-zinc-900 dark:text-white font-semibold">Relevant Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Engineering, Operating Systems, Software Engineering, Artificial Intelligence
                </li>
              </ul>
            </div>
          </div>

          
          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-md shadow-sm space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-mono flex items-center gap-2">
              <FiFileText size={14} /> Publications
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="text-base font-eina-semibold text-zinc-900 dark:text-white leading-snug">
                  Attestify: A Hybrid Blockchain-IPFS Framework for Credential Verification
                </h3>
                <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 font-mono whitespace-nowrap">
                  June 2026
                </span>
              </div>
              <p className="text-sm text-zinc-500 italic">
                Published in Spectrum of Engineering Sciences
              </p>
              <ul className="list-disc pl-4 text-sm text-zinc-600 dark:text-zinc-400 space-y-1 font-medium">
                <li>
                  Authored a paper proposing a novel decentralized architecture combining non-transferable Soulbound Tokens (SBTs) and dual-anchor document integrity (SHA-256 and IPFS) to reduce academic fraud.
                </li>
                <li className="pt-1">
                  <strong className="text-zinc-900 dark:text-white font-semibold">DOI:</strong>{" "}
                  <a
                    href="https://doi.org/10.5281/zenodo.20655578"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-500 hover:underline inline-flex items-center gap-1"
                  >
                    10.5281/zenodo.20655578 <FiExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <strong className="text-zinc-900 dark:text-white font-semibold">Read Paper:</strong>{" "}
                  <a
                    href="https://thesesjournal.com/index.php/1/article/view/3193"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-500 hover:underline inline-flex items-center gap-1"
                  >
                    thesesjournal.com/index.php/1/article/view/3193 <FiExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        
        
        
        <div className="hidden print:block print-container">
          <article className="font-serif">
            
            
            <header className="text-center mb-6">
              <h1 className="print-text-dark text-zinc-900 dark:text-white text-3xl sm:text-4xl font-normal tracking-wide uppercase mb-1 font-serif">
                Zain Ul Abidin
              </h1>
              <p className="print-text-muted text-zinc-500 dark:text-zinc-400 text-[14px] sm:text-[15px] italic mb-3 font-serif">
                Software Engineer
              </p>
              
              <div className="print-text-muted text-zinc-500 dark:text-zinc-400 text-[11px] sm:text-[12px] leading-relaxed flex flex-wrap justify-center items-center gap-x-2 gap-y-1 font-serif">
                <a href="tel:+923335771397" className="hover:text-zinc-900 dark:hover:text-white hover:underline transition-colors">
                  +923335771397
                </a>
                <span>|</span>
                <a href="mailto:hizainulabidin@gmail.com" className="hover:text-zinc-900 dark:hover:text-white hover:underline transition-colors">
                  hizainulabidin@gmail.com
                </a>
                <span>|</span>
                <a href="https://linkedin.com/in/z4yn" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white hover:underline transition-colors">
                  linkedin.com/in/z4yn
                </a>
                <span>|</span>
                <a href="https://github.com/guesswhozayn" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white hover:underline transition-colors">
                  github.com/guesswhozayn
                </a>
                <span>|</span>
                <a href="https://z4yn.vercel.app" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white hover:underline transition-colors">
                  z4yn.vercel.app
                </a>
              </div>
            </header>

            
            <section className="mb-5">
              <h2 className="print-text-dark text-zinc-900 dark:text-white text-[13px] font-bold uppercase tracking-wider font-serif">
                Summary
              </h2>
              <hr className="print-hr border-t border-zinc-900 dark:border-zinc-100 my-1" />
              <p className="print-text-muted text-zinc-700 dark:text-zinc-300 text-[11.5px] leading-relaxed text-justify font-serif">
                Software Engineer specializing in building scalable, full-stack web applications. Proficient in crafting responsive frontends with React and Next.js, building robust Node.js backends, and designing efficient database architectures using PostgreSQL and MongoDB. Experienced in streamlining deployment workflows with Docker, CI/CD pipelines, and modern cloud platforms. Eager to contribute clean, scalable code and agile problem-solving to a collaborative engineering team.
              </p>
            </section>

            
            <section className="mb-5">
              <h2 className="print-text-dark text-zinc-900 dark:text-white text-[13px] font-bold uppercase tracking-wider font-serif">
                Technical Skills
              </h2>
              <hr className="print-hr border-t border-zinc-900 dark:border-zinc-100 my-1" />
              
              <div className="space-y-1 font-serif text-[11.5px]">
                <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-2">
                  <span className="print-text-dark font-bold text-zinc-900 dark:text-white min-w-[125px] shrink-0">Languages:</span>
                  <span className="print-text-muted text-zinc-700 dark:text-zinc-300">JavaScript, TypeScript, Python, SQL, C++</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-2">
                  <span className="print-text-dark font-bold text-zinc-900 dark:text-white min-w-[125px] shrink-0">Frontend:</span>
                  <span className="print-text-muted text-zinc-700 dark:text-zinc-300">HTML5, CSS3, React, Next.js, Redux Toolkit, TanStack Query, Zustand, TailwindCSS</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-2">
                  <span className="print-text-dark font-bold text-zinc-900 dark:text-white min-w-[125px] shrink-0">Backend:</span>
                  <span className="print-text-muted text-zinc-700 dark:text-zinc-300">Node.js, Express.js, REST APIs, GraphQL, Socket.io, BullMQ, JWT, OAuth</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-2">
                  <span className="print-text-dark font-bold text-zinc-900 dark:text-white min-w-[125px] shrink-0">Databases:</span>
                  <span className="print-text-muted text-zinc-700 dark:text-zinc-300">MongoDB, MySQL, PostgreSQL, Redis</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-2">
                  <span className="print-text-dark font-bold text-zinc-900 dark:text-white min-w-[125px] shrink-0">DevOps & Cloud:</span>
                  <span className="print-text-muted text-zinc-700 dark:text-zinc-300">CI/CD, Docker, Linux, Vercel, Render</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-2">
                  <span className="print-text-dark font-bold text-zinc-900 dark:text-white min-w-[125px] shrink-0">Developer Tools:</span>
                  <span className="print-text-muted text-zinc-700 dark:text-zinc-300">VS Code, Git, GitHub, Postman, CLI</span>
                </div>
              </div>
            </section>

            
            <section className="mb-5">
              <h2 className="print-text-dark text-zinc-900 dark:text-white text-[13px] font-bold uppercase tracking-wider font-serif">
                Relevant Experience
              </h2>
              <hr className="print-hr border-t border-zinc-900 dark:border-zinc-100 my-1" />

              
              <div className="mb-4">
                <div className="flex justify-between items-baseline font-serif gap-4 mb-0.5">
                  <h3 className="print-text-dark text-zinc-900 dark:text-white text-[12px] font-bold">
                    Picket: Automated Candidate Verification & Assessment Platform
                  </h3>
                  <span className="print-text-dark text-zinc-900 dark:text-white text-[12px] font-medium whitespace-nowrap">
                    Jan 2026 – May 2026
                  </span>
                </div>
                <div className="print-text-muted text-zinc-500 dark:text-zinc-400 text-[11px] italic mb-1.5 flex flex-wrap gap-x-1.5 font-serif">
                  <a href="https://picket-hr.vercel.app" target="_blank" rel="noreferrer" className="hover:underline hover:text-zinc-900 dark:hover:text-white">
                    picket-hr.vercel.app
                  </a>
                  <span>|</span>
                  <a href="https://github.com/guesswhozayn/picket" target="_blank" rel="noreferrer" className="hover:underline hover:text-zinc-900 dark:hover:text-white">
                    github.com/guesswhozayn/picket
                  </a>
                </div>
                <ul className="list-disc pl-4 text-[11.5px] text-zinc-700 dark:text-zinc-300 space-y-1 font-serif leading-relaxed text-justify">
                  <li>
                    Built a hiring platform using React, Node.js, Express, and MongoDB with an asynchronous job queue (BullMQ + Redis) that automatically screens candidate resumes using AI agents for plagiarism detection and digital footprint verification, with real-time status updates via Socket.io.
                  </li>
                  <li>
                    Designed a React dashboard with server-state caching and protected routing, allowing hiring managers to upload resumes, track live pipeline progress, and manage AI-generated candidate assessments.
                  </li>
                </ul>
              </div>

              
              <div className="mb-4">
                <div className="flex justify-between items-baseline font-serif gap-4 mb-0.5">
                  <h3 className="print-text-dark text-zinc-900 dark:text-white text-[12px] font-bold">
                    Attestify: Decentralized Credential Verification Platform
                  </h3>
                  <span className="print-text-dark text-zinc-900 dark:text-white text-[12px] font-medium whitespace-nowrap">
                    Oct 2025 – Mar 2026
                  </span>
                </div>
                <div className="print-text-muted text-zinc-500 dark:text-zinc-400 text-[11px] italic mb-1.5 flex flex-wrap gap-x-1.5 font-serif">
                  <a href="https://attestify-alpha.vercel.app" target="_blank" rel="noreferrer" className="hover:underline hover:text-zinc-900 dark:hover:text-white">
                    attestify-alpha.vercel.app
                  </a>
                  <span>|</span>
                  <a href="https://github.com/guesswhozayn/attestify" target="_blank" rel="noreferrer" className="hover:underline hover:text-zinc-900 dark:hover:text-white">
                    github.com/guesswhozayn/attestify
                  </a>
                </div>
                <ul className="list-disc pl-4 text-[11.5px] text-zinc-700 dark:text-zinc-300 space-y-1 font-serif leading-relaxed text-justify">
                  <li>
                    Developed a full-stack application using React, Node.js, Express, and MongoDB enabling universities to issue tamper-proof academic credentials, with APIs handling PDF certificate generation, email notifications, IPFS storage, and blockchain-based verification.
                  </li>
                  <li>
                    Built a React frontend with role-based dashboards for issuers, students, and employers, featuring on-chain credential verification, QR code scanning, and batch certificate issuance workflows.
                  </li>
                </ul>
              </div>

              
              <div className="mb-4">
                <div className="flex justify-between items-baseline font-serif gap-4 mb-0.5">
                  <h3 className="print-text-dark text-zinc-900 dark:text-white text-[12px] font-bold">
                    Homivio: Modern E-Commerce Storefront
                  </h3>
                  <span className="print-text-dark text-zinc-900 dark:text-white text-[12px] font-medium whitespace-nowrap">
                    Feb 2025 – June 2025
                  </span>
                </div>
                <div className="print-text-muted text-zinc-500 dark:text-zinc-400 text-[11px] italic mb-1.5 flex flex-wrap gap-x-1.5 font-serif">
                  <a href="https://homivio-ecom.vercel.app" target="_blank" rel="noreferrer" className="hover:underline hover:text-zinc-900 dark:hover:text-white">
                    homivio-ecom.vercel.app
                  </a>
                  <span>|</span>
                  <a href="https://github.com/guesswhozayn/homivio" target="_blank" rel="noreferrer" className="hover:underline hover:text-zinc-900 dark:hover:text-white">
                    github.com/guesswhozayn/homivio
                  </a>
                </div>
                <ul className="list-disc pl-4 text-[11.5px] text-zinc-700 dark:text-zinc-300 space-y-1 font-serif leading-relaxed text-justify">
                  <li>
                    Created a full-stack e-commerce application using Next.js and React with dynamic product routing, an admin panel for inventory management, and a persistent shopping cart powered by React Context and localStorage.
                  </li>
                  <li>
                    Integrated Stripe payment processing through a serverless function for secure checkout, and built a fully responsive storefront covering product browsing, cart management, and the complete purchase flow.
                  </li>
                </ul>
              </div>
            </section>

            
            <section className="mb-5">
              <h2 className="print-text-dark text-zinc-900 dark:text-white text-[13px] font-bold uppercase tracking-wider font-serif">
                Education
              </h2>
              <hr className="print-hr border-t border-zinc-900 dark:border-zinc-100 my-1" />

              <div className="mb-2">
                <div className="flex justify-between items-baseline font-serif gap-4 mb-0.5">
                  <h3 className="print-text-dark text-zinc-900 dark:text-white text-[12px] font-bold">
                    The University of Chakwal
                  </h3>
                  <span className="print-text-dark text-zinc-900 dark:text-white text-[12px] font-medium whitespace-nowrap">
                    Chakwal, Pakistan
                  </span>
                </div>
                <div className="flex justify-between items-baseline print-text-muted text-zinc-500 dark:text-zinc-400 text-[11px] italic mb-1.5 font-serif">
                  <span>Bachelor of Science in Computer Science</span>
                  <span>2022 – 2026</span>
                </div>
                <ul className="list-disc pl-4 text-[11.5px] text-zinc-700 dark:text-zinc-300 space-y-1 font-serif leading-relaxed">
                  <li>
                    <strong className="print-text-dark text-zinc-900 dark:text-white font-semibold">CGPA:</strong> 3.41 / 4.00
                  </li>
                  <li>
                    <strong className="print-text-dark text-zinc-900 dark:text-white font-semibold">Relevant Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Engineering, Operating Systems, Software Engineering, Artificial Intelligence
                  </li>
                </ul>
              </div>
            </section>

            
            <section className="mb-2">
              <h2 className="print-text-dark text-zinc-900 dark:text-white text-[13px] font-bold uppercase tracking-wider font-serif">
                Publications
              </h2>
              <hr className="print-hr border-t border-zinc-900 dark:border-zinc-100 my-1" />

              <div>
                <div className="flex justify-between items-baseline font-serif gap-4 mb-0.5">
                  <h3 className="print-text-dark text-zinc-900 dark:text-white text-[12px] font-bold">
                    Attestify: A Hybrid Blockchain-IPFS Framework for Credential Verification
                  </h3>
                  <span className="print-text-dark text-zinc-900 dark:text-white text-[12px] font-medium whitespace-nowrap">
                    June 2026
                  </span>
                </div>
                <div className="print-text-muted text-zinc-500 dark:text-zinc-400 text-[11px] italic mb-1.5 font-serif">
                  Published in Spectrum of Engineering Sciences
                </div>
                <ul className="list-disc pl-4 text-[11.5px] text-zinc-700 dark:text-zinc-300 space-y-1 font-serif leading-relaxed text-justify">
                  <li>
                    Authored a paper proposing a novel decentralized architecture combining non-transferable Soulbound Tokens (SBTs) and dual-anchor document integrity (SHA-256 and IPFS) to reduce academic fraud.
                  </li>
                  <li>
                    <strong className="print-text-dark text-zinc-900 dark:text-white font-semibold">DOI:</strong>{" "}
                    <a href="https://doi.org/10.5281/zenodo.20655578" target="_blank" rel="noreferrer" className="hover:underline hover:text-zinc-900 dark:hover:text-white">
                      10.5281/zenodo.20655578
                    </a>{" "}
                    |{" "}
                    <strong className="print-text-dark text-zinc-900 dark:text-white font-semibold">Read Paper:</strong>{" "}
                    <a href="https://thesesjournal.com/index.php/1/article/view/3193" target="_blank" rel="noreferrer" className="hover:underline hover:text-zinc-900 dark:hover:text-white">
                      thesesjournal.com/index.php/1/article/view/3193
                    </a>
                  </li>
                </ul>
              </div>
            </section>

          </article>
        </div>
      </div>
    </motion.div>
  );
}
