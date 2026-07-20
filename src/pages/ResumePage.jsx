import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiMapPin,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiGlobe,
  FiBriefcase,
  FiBookOpen,
  FiCode,
  FiTerminal,
  FiCpu,
  FiShield,
  FiDatabase,
  FiCloud,
  FiExternalLink,
  FiTool,
  FiDownload
} from "react-icons/fi";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <FiCode className="text-indigo-500" />,
    skills: ["JavaScript", "TypeScript", "Python", "React", "Next.js", "Node.js", "Express.js"],
  },
  {
    title: "State & Frontend Tools",
    icon: <FiTerminal className="text-emerald-500" />,
    skills: ["Context API", "Redux Toolkit", "TanStack Query", "Zustand", "TailwindCSS"],
  },
  {
    title: "APIs & Integration",
    icon: <FiCpu className="text-blue-500" />,
    skills: ["REST APIs", "GraphQL", "Socket.io", "BullMQ", "Stripe Payments"],
  },
  {
    title: "Databases",
    icon: <FiDatabase className="text-rose-500" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    title: "Identity & Security",
    icon: <FiShield className="text-purple-500" />,
    skills: ["JWT", "OAuth", "Bcrypt", "RBAC", "Rate Limiting", "API Security"],
  },
  {
    title: "Cloud & DevOps",
    icon: <FiCloud className="text-cyan-500" />,
    skills: ["CI/CD", "Docker", "Linux", "Vercel", "Render", "Git", "GitHub"],
  },
  {
    title: "Developer Tools",
    icon: <FiTool className="text-orange-500" />,
    skills: ["VS Code", "Postman", "Chrome DevTools", "CLI"],
  }
];

const projects = [
  {
    name: "Picket: Automated Candidate Verification Platform",
    duration: "Apr 2026 – June 2026",
    link: "https://github.com/guesswhozayn/picket",
    live: "https://picket-hr.vercel.app",
    bullets: [
      "Engineered a React/Node.js hiring platform processing 500+ resumes asynchronously with BullMQ and Redis.",
      "Integrated AI agents for plagiarism detection and enabled live progress tracking via secure Socket.io connections."
    ]
  },
  {
    name: "Attestify: Decentralized Credential Verification",
    duration: "Oct 2025 – Jan 2026",
    link: "https://github.com/guesswhozayn/attestify",
    live: "https://attestify-alpha.vercel.app",
    bullets: [
      "Built a MERN application enabling universities to issue and manage tamper-proof academic credentials.",
      "Implemented role-based dashboards featuring on-chain verification, IPFS storage, and batch PDF generation."
    ]
  },
  {
    name: "Homivio: Modern E-Commerce Storefront",
    duration: "Jun 2024 – Aug 2024",
    link: "https://github.com/guesswhozayn/homivio",
    live: "https://homivio-ecom.vercel.app",
    bullets: [
      "Developed a Next.js e-commerce storefront with dynamic routing, an admin panel, and robust local state.",
      "Integrated Stripe serverless functions for secure checkout and end-to-end purchasing flows."
    ]
  }
];

export default function ResumePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 pt-36 pb-20 px-4 md:px-8"
    >
      <div className="mx-auto max-w-[800px] space-y-16">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" size={16} />
            Back to Portfolio
          </Link>
          <a
            href="/zain_resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
          >
            <FiDownload size={16} />
            Download
          </a>
        </div>

        {/* Header Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Zain Ul Abidin
            </h1>
            <p className="text-xl text-indigo-500 dark:text-indigo-400 font-medium">Software Engineer</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-1.5"><FiMapPin /> Islamabad, Pakistan</span>
            <span className="flex items-center gap-1.5"><FiMail /> hizainulabidin@gmail.com</span>
            <span className="flex items-center gap-1.5"><FiPhone /> +923335771397</span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://linkedin.com/in/z4yn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors text-sm font-medium shadow-sm">
              <FiLinkedin className="text-[#0A66C2]" /> LinkedIn
            </a>
            <a href="https://github.com/guesswhozayn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors text-sm font-medium shadow-sm">
              <FiGithub /> GitHub
            </a>
            <a href="https://z4yn.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors text-sm font-medium shadow-sm">
              <FiGlobe className="text-emerald-500" /> Portfolio
            </a>
          </div>

          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 mt-6 bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 shadow-sm">
            Software Engineer specializing in building scalable, full-stack web applications. Proficient in crafting responsive frontends with React and Next.js, building robust Node.js backends, and designing efficient database architectures using MongoDB and PostgreSQL. Experienced in streamlining deployment workflows with Docker, CI/CD pipelines, and modern cloud platforms.
          </p>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
            <FiBriefcase className="text-zinc-400" /> Experience
          </h2>
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-5">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Freelance Software Engineer</h3>
                <p className="text-indigo-500 dark:text-indigo-400 text-sm font-medium mt-1">Upwork | Remote</p>
              </div>
              <span className="text-xs font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 font-mono bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1.5 rounded-lg self-start sm:self-auto">
                May 2024 – Present
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <span className="text-zinc-300 dark:text-zinc-600 mt-1">•</span>
                <span>Built and shipped custom web applications using React, Next.js, and Node.js, translating client requirements into scalable solutions.</span>
              </li>
              <li className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <span className="text-zinc-300 dark:text-zinc-600 mt-1">•</span>
                <span>Led projects from initial discussions through deployment, managing feature development, integrations, bug fixes, and ongoing support.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
            <FiCode className="text-zinc-400" /> Featured Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-5">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{project.name.split(':')[0]}</h3>
                    <p className="text-indigo-500 dark:text-indigo-400 text-sm font-medium mt-1">{project.name.split(':')[1]?.trim()}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-3">
                    <span className="text-xs font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 font-mono bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1.5 rounded-lg self-start sm:self-auto">
                      {project.duration}
                    </span>
                    <div className="flex gap-2">
                      <a href={project.live} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" title="Live">
                        <FiExternalLink size={16} />
                      </a>
                      <a href={project.link} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" title="GitHub">
                        <FiGithub size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      <span className="text-zinc-300 dark:text-zinc-600 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
            <FiCpu className="text-zinc-400" /> Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                <h3 className="text-sm font-bold tracking-wide text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  {category.icon} {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
            <FiBookOpen className="text-zinc-400" /> Education
          </h2>
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-5">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-indigo-500 dark:text-indigo-400 text-sm font-medium mt-1">The University of Chakwal</p>
              </div>
              <span className="text-xs font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 font-mono bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1.5 rounded-lg self-start sm:self-auto">
                Sep 2022 – Jun 2026
              </span>
            </div>
            <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <p><span className="font-semibold text-zinc-900 dark:text-zinc-300">CGPA:</span> 3.41 / 4.00</p>
              <p className="leading-relaxed"><span className="font-semibold text-zinc-900 dark:text-zinc-300">Relevant Coursework:</span> Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Engineering, Operating Systems, Software Engineering, Artificial Intelligence</p>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
