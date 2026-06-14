import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-300 relative">
      {/* Subtle top gradient */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.08),transparent)]" />

      <Navbar />

      <div className="mx-auto max-w-screen-xl px-8 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:gap-20">

          {/* === LEFT: Sticky Sidebar === */}
          <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-5/12 flex flex-col justify-center pt-48 pb-16 lg:py-28">
            <Hero />
          </aside>

          {/* === RIGHT: Scrolling Content === */}
          <main className="lg:w-7/12 flex flex-col gap-24 pt-32 pb-24 lg:pt-48 lg:pb-32">
            <Projects />
            <Skills />
            <Contact />
          </main>

        </div>
      </div>
    </div>
  );
}
