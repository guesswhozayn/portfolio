import profilePic from "../assets/img/img.jpg";
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from "react-icons/fi";

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
    <div className="w-full flex flex-col items-center text-center gap-6">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 bg-zinc-200 ring-2 ring-zinc-200 dark:ring-zinc-800 shadow-sm">
          <img
            src={profilePic}
            alt="Zain Ul Abidin"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            Zain Ul Abidin
          </h1>
          <p className="text-lg sm:text-xl font-medium text-zinc-500">Software Engineer</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl items-center">
        <p>
          I&apos;m Zain, a software engineer passionate about crafting high-quality, scalable web applications.
        </p>
        <p>
          My work combines clean code with modern design principles to deliver seamless user experiences.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 mt-2">
        <SocialLink href="https://github.com/guesswhozayn" label="GitHub">
          <FiGithub size={22} />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/z4yn" label="LinkedIn">
          <FiLinkedin size={22} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/zaynndev" label="Instagram">
          <FiInstagram size={22} />
        </SocialLink>
        <SocialLink href="mailto:hizainulabidin@gmail.com" label="Email">
          <FiMail size={22} />
        </SocialLink>
      </div>
    </div>
  );
}
