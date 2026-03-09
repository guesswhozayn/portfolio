import profilePic from "../assets/img/img.jpg";
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="flex flex-col gap-8">
      {/* Avatar + Name */}
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 bg-zinc-200 ring-2 ring-zinc-200 dark:ring-zinc-800 shadow-sm">
          <img
            src={profilePic}
            alt="Zayn Ul Abidin"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-1">
            Zayn Ul Abidin
          </h1>
          <p className="text-base sm:text-lg font-medium text-zinc-500 mb-2">Software Engineer</p>
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Opportunities
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="flex flex-col gap-4 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>
          Hello! I&apos;m Zayn, a creative web developer with a passion for design, animation,
          and problem-solving. I enjoy building things that live on the Internet.
        </p>
        <p>
          My focus is on building extensible, maintainable software with clean architecture.
        </p>
      </div>

      {/* Social Links */}
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
    </section>
  );
}
