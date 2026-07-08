import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiPrinter, FiDownload, FiArrowLeft } from "react-icons/fi";

export default function ResumePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-zinc-50 dark:bg-[#060606] text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-300 pt-28 pb-16 px-4 md:px-8"
    >
      {/* Dynamic print-specific styles */}
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

      <div className="mx-auto max-w-[800px]">
        {/* Top Controls Bar - Hides on Print */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 no-print px-1">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <FiArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer shadow-md shadow-zinc-200 dark:shadow-none"
            >
              <FiPrinter size={15} />
              Print Resume
            </button>
            <a
              href="/zain_resume.pdf"
              download
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
            >
              <FiDownload size={15} />
              Download PDF
            </a>
          </div>
        </div>

        {/* Resume Paper Simulation Container */}
        <div className="print-container bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 shadow-2xl rounded-2xl p-8 sm:p-12 md:p-16 transition-colors duration-300">
          <article className="font-serif">
            
            {/* Header: Name & Title */}
            <header className="text-center mb-6">
              <h1 className="print-text-dark text-zinc-900 dark:text-white text-3xl sm:text-4xl font-normal tracking-wide uppercase mb-1 font-serif">
                Zain Ul Abidin
              </h1>
              <p className="print-text-muted text-zinc-500 dark:text-zinc-400 text-[14px] sm:text-[15px] italic mb-3 font-serif">
                Software Engineer
              </p>
              {/* Contact Information Info-bar */}
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

            {/* Section: Summary */}
            <section className="mb-5">
              <h2 className="print-text-dark text-zinc-900 dark:text-white text-[13px] font-bold uppercase tracking-wider font-serif">
                Summary
              </h2>
              <hr className="print-hr border-t border-zinc-900 dark:border-zinc-100 my-1" />
              <p className="print-text-muted text-zinc-700 dark:text-zinc-300 text-[11.5px] leading-relaxed text-justify font-serif">
                Software Engineer specializing in building scalable, full-stack web applications. Proficient in crafting responsive frontends with React and Next.js, building robust Node.js backends, and designing efficient database architectures using PostgreSQL and MongoDB. Experienced in streamlining deployment workflows with Docker, CI/CD pipelines, and modern cloud platforms. Eager to contribute clean, scalable code and agile problem-solving to a collaborative engineering team.
              </p>
            </section>

            {/* Section: Technical Skills */}
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

            {/* Section: Relevant Experience */}
            <section className="mb-5">
              <h2 className="print-text-dark text-zinc-900 dark:text-white text-[13px] font-bold uppercase tracking-wider font-serif">
                Relevant Experience
              </h2>
              <hr className="print-hr border-t border-zinc-900 dark:border-zinc-100 my-1" />

              {/* Experience Item 1: Picket */}
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

              {/* Experience Item 2: Attestify */}
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

              {/* Experience Item 3: Homivio */}
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

            {/* Section: Education */}
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

            {/* Section: Publications */}
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
