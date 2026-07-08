import Section from "./ui/Section";
import { FiMail, FiArrowUpRight } from "react-icons/fi";

export default function Contact() {
  return (
    <Section title="Let's Connect">
      <div className="group relative p-6 sm:p-8 md:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden text-center flex flex-col items-center gap-6">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="relative p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white">
          <FiMail size={32} />
        </div>

        <div className="flex flex-col gap-2 relative z-10">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Have a project in mind?
          </h3>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
            I&apos;m currently available for freelance work and full-time opportunities. 
            Let&apos;s build something extraordinary together.
          </p>
        </div>

        <a
          href="mailto:hizainulabidin@gmail.com"
          className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold hover:scale-105 transition-transform shadow-lg shadow-zinc-200 dark:shadow-none"
        >
          Say Hello
          <FiArrowUpRight size={18} />
        </a>
      </div>
    </Section>
  );
}
