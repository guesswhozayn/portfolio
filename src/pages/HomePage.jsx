import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function HomePage() {
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
          <div className="w-full lg:w-5/12 pt-48 pb-16 lg:pt-48 lg:pb-32">
            <aside className="lg:sticky lg:top-28">
              <Hero />
            </aside>
          </div>

          {/* === RIGHT: Scrolling Content === */}
          <main className="lg:w-7/12 flex flex-col gap-24 pt-32 pb-24 lg:pt-48 lg:pb-32">
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>

        </div>
      </div>
    </motion.div>
  );
}
