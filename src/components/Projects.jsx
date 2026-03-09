import { FiExternalLink, FiGithub } from "react-icons/fi";
import Section from "./ui/Section";

export default function Projects() {
  const projects = [
    {
      name: "Attestify",
      description:
        "A decentralized app (DApp) utilizing Ethereum Soulbound Tokens (SBTs) and IPFS to issue permanently verified, unforgeable academic credentials with zero-cost instant QR authentication.",
      url: "https://attestify-alpha.vercel.app",
      tags: ["Solidity", "IPFS", "React", "Web3"],
    },
    {
      name: "Homivio",
      description:
        "A high-performance e-commerce storefront built with Next.js and Stripe, delivering seamless shopping and secure checkout.",
      url: "https://homivio-ecom.vercel.app",
      tags: ["Next.js", "Stripe", "TailwindCSS"],
    },
  ];

  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col gap-3 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${
              idx === 0 ? "md:col-span-2 md:p-10" : ""
            }`}
          >
            {/* External link icon */}
            <FiExternalLink
              size={idx === 0 ? 20 : 16}
              className="absolute top-5 right-5 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-700 dark:group-hover:text-white transition-colors duration-200"
            />

            {/* Title */}
            <h3 className={`${idx === 0 ? "text-2xl" : "text-lg"} font-semibold text-zinc-900 dark:text-white pr-6`}>
              {project.name}
            </h3>

            {/* Description */}
            <p className={`${idx === 0 ? "text-base sm:text-lg" : "text-sm sm:text-base"} text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium`}>
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
