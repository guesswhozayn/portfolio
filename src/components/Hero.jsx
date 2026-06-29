import profilePic from "../assets/img/img.jpg";
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from "react-icons/fi";
import StatusBadge from "./ui/StatusBadge";

function SocialLink({ href, children, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white p-2 cursor-pointer hover:scale-105 active:scale-95 transition-transform"
    >
      {children}
    </a>
  );
}

export default function Hero() {
  return (
    <div className="relative w-full p-6 sm:p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl shadow-lg flex flex-col gap-6 overflow-hidden">
      <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="flex items-center gap-5">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 bg-zinc-200 ring-2 ring-zinc-200 dark:ring-zinc-800 shadow-sm">
          <img
            src={profilePic}
            alt="Zayn Ul Abidin"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            Zain Ul Abidin
          </h1>
          <p className="text-base sm:text-lg font-medium text-zinc-500 mb-3">Software Engineer</p>
          <StatusBadge className="mb-4" />
        </div>
      </div>

      <div className="flex flex-col gap-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
        <p>
          I&apos;m Zayn, a software engineer passionate about crafting high-quality, scalable web applications.
        </p>
        <p>
          My work combines clean code with modern design principles to deliver seamless user experiences.
        </p>
      </div>

      <div className="flex items-center gap-2 -ml-2">
        <SocialLink href="https://github.com/guesswhozayn" label="GitHub">
          <FiGithub size={20} />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/z4yn" label="LinkedIn">
          <FiLinkedin size={20} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/zaynndev" label="Instagram">
          <FiInstagram size={20} />
        </SocialLink>
        <SocialLink href="mailto:guesswhozayn@gmail.com" label="Email">
          <FiMail size={20} />
        </SocialLink>
      </div>
    </div>
  );
}
