import { FiExternalLink, FiGithub } from "react-icons/fi";
import Section from "./ui/Section";
import InteractiveCard from "./ui/InteractiveCard";

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
          <InteractiveCard
            key={idx}
            className={idx === 0 ? "md:col-span-2" : ""}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group/card relative flex flex-col gap-3 p-6 md:p-10 h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400`}
            >
              {/* External link icon */}
              <FiExternalLink
                size={idx === 0 ? 20 : 16}
                className="absolute top-5 right-5 text-zinc-400 dark:text-zinc-600 group-hover/card:text-zinc-700 dark:group-hover/card:text-white transition-colors duration-200"
              />

              {/* Title */}
              <h3 className={`${idx === 0 ? "text-2xl" : "text-lg"} font-semibold text-zinc-900 dark:text-white pr-6`}>
                {project.name === "Attestify" ? (
                  <span className="font-sans font-black tracking-[-0.05em] lowercase">
                    attestify<span className="text-indigo-500">.</span>
                  </span>
                ) : project.name === "Homivio" ? (
                  <span className="font-sans font-black tracking-[-0.05em] uppercase">
                    homivio
                  </span>
                ) : (
                  project.name
                )}
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
          </InteractiveCard>
        ))}
      </div>
    </Section>
  );
}
