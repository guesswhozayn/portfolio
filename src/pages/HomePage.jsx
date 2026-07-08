import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-300 relative"
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.08),transparent)]" />

      <div className="mx-auto max-w-3xl px-6 sm:px-8 pt-44 pb-24 flex flex-col gap-20 sm:gap-24">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </motion.div>
  );
}
