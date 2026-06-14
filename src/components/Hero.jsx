import { useState } from "react";
import profilePic from "../assets/img/img.jpg";
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from "react-icons/fi";
import { useMagnetic } from "../hooks/useMagnetic";
import { motion } from "framer-motion";

function MagneticSocialLink({ href, children, label }) {
  const { ref, x, y, setIsHovered } = useMagnetic();

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ x, y }}
      className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors p-2 cursor-pointer"
    >
      {children}
    </motion.a>
  );
}

function HeroTerminal() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 overflow-hidden font-mono text-xs shadow-inner">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 select-none">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 dark:bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 dark:bg-green-500/60" />
        </div>
        <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">zayn-shell</span>
      </div>

      {/* Terminal tabs */}
      <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/30 dark:bg-zinc-900/20 select-none">
        {["profile", "contact"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 border-r border-zinc-200 dark:border-zinc-800 text-[9px] uppercase font-bold tracking-wider transition-all cursor-pointer ${
              activeTab === tab
                ? "bg-white/80 dark:bg-zinc-900/50 text-zinc-900 dark:text-white border-t-2 border-t-indigo-500 font-bold"
                : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 bg-zinc-50/50 dark:bg-zinc-950/20"
            }`}
          >
            {tab}.json
          </button>
        ))}
      </div>

      {/* Terminal Content */}
      <div className="p-4 bg-white/70 dark:bg-zinc-900/40 leading-relaxed text-[11px] min-h-[145px] flex flex-col gap-2 font-mono">
        <div className="flex items-center gap-2 select-none border-b border-zinc-100 dark:border-zinc-800/40 pb-1.5 mb-1">
          <span className="text-emerald-500 font-bold">~</span>
          <span className="text-indigo-400 font-bold">$</span>
          <span className="text-zinc-500 dark:text-zinc-400">cat {activeTab}.json</span>
        </div>
        
        {activeTab === "profile" && (
          <div className="font-space font-medium text-zinc-600 dark:text-zinc-300">
            <div>
              <span className="text-indigo-500 dark:text-indigo-400">&#123;</span>
              <div className="pl-4">
                <span className="text-purple-500 dark:text-purple-400">&quot;location&quot;</span>: <span className="text-emerald-600 dark:text-emerald-400">&quot;Pakistan&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-500 dark:text-purple-400">&quot;degree&quot;</span>: <span className="text-emerald-600 dark:text-emerald-400">&quot;B.Sc Computer Science&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-500 dark:text-purple-400">&quot;focus&quot;</span>: <span className="text-emerald-600 dark:text-emerald-400">&quot;Fullstack, Blockchain &amp; AI&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-500 dark:text-purple-400">&quot;core_stack&quot;</span>: <span className="text-indigo-500 dark:text-indigo-400">[</span>
                <span className="text-emerald-600 dark:text-emerald-400">&quot;React&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;Node.js&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;Solidity&quot;</span>
                <span className="text-indigo-500 dark:text-indigo-400">]</span>
              </div>
              <span className="text-indigo-500 dark:text-indigo-400">&#125;</span>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="font-space font-medium text-zinc-600 dark:text-zinc-300">
            <div>
              <span className="text-indigo-500 dark:text-indigo-400">&#123;</span>
              <div className="pl-4">
                <span className="text-purple-500 dark:text-purple-400">&quot;email&quot;</span>: <span className="text-emerald-600 dark:text-emerald-400">&quot;guesswhozayn@gmail.com&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-500 dark:text-purple-400">&quot;phone&quot;</span>: <span className="text-emerald-600 dark:text-emerald-400">&quot;+923335771397&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-500 dark:text-purple-400">&quot;github&quot;</span>: <span className="text-emerald-600 dark:text-emerald-400">&quot;github.com/guesswhozayn&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-500 dark:text-purple-400">&quot;linkedin&quot;</span>: <span className="text-emerald-600 dark:text-emerald-400">&quot;linkedin.com/in/z4yn&quot;</span>
              </div>
              <span className="text-indigo-500 dark:text-indigo-400">&#125;</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative w-full p-6 sm:p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl shadow-lg flex flex-col gap-6 overflow-hidden">
      {/* Background ambient glow ball */}
      <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none" />

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
            Zain Ul Abidin
          </h1>
          <p className="text-base sm:text-lg font-medium text-zinc-500 mb-2">Software Engineer</p>
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/20 mb-1 font-space uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Opportunities
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="flex flex-col gap-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
        <p>
          I&apos;m Zayn, a software engineer passionate about crafting high-quality, scalable web applications.
        </p>
        <p>
          My work combines clean code with modern design principles to deliver seamless user experiences.
        </p>
      </div>

      {/* Live Shell Terminal Widget */}
      <HeroTerminal />

      {/* Social Links */}
      <div className="flex items-center gap-2 -ml-2">
        <MagneticSocialLink href="https://github.com/guesswhozayn" label="GitHub">
          <FiGithub size={20} />
        </MagneticSocialLink>
        <MagneticSocialLink href="https://linkedin.com/in/z4yn" label="LinkedIn">
          <FiLinkedin size={20} />
        </MagneticSocialLink>
        <MagneticSocialLink href="https://www.instagram.com/zaynndev" label="Instagram">
          <FiInstagram size={20} />
        </MagneticSocialLink>
        <MagneticSocialLink href="mailto:guesswhozayn@gmail.com" label="Email">
          <FiMail size={20} />
        </MagneticSocialLink>
      </div>
    </div>
  );
}
