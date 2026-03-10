import Section from "./ui/Section";

export default function Experience() {
  const experiences = [
    {
      company: "Attestify",
      role: "Lead Software Engineer",
      period: "2024 — Present",
      description: "Leading development of decentralized credentialing systems using Soulbound Tokens and Ethereum. Architecting scalable DApp infrastructure and ensuring security protocols.",
    },
    {
      company: "Homivio",
      role: "Full Stack Developer",
      period: "2023 — 2024",
      description: "Built high-performance e-commerce solutions. Optimized checkout flows and integrated complex payment gateways, resulting in significantly improved conversion rates.",
    },
    {
      company: "Freelance",
      role: "Creative Web Developer",
      period: "2022 — 2023",
      description: "Developed bespoke digital experiences for global clients, focusing on high-end animations and interactive storytelling.",
    }
  ];

  return (
    <Section title="Experience">
      <div className="flex flex-col gap-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-10">
            {/* Timeline Column */}
            <div className="sm:w-32 shrink-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-space">
                {exp.period}
              </span>
            </div>
            
            {/* Content Column */}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">
                {exp.role} <span className="text-zinc-400 dark:text-zinc-600">@</span>{" "}
                {exp.company === "Attestify" ? (
                  <span className="font-sans font-black tracking-[-0.05em] lowercase">
                    attestify<span className="text-indigo-500">.</span>
                  </span>
                ) : exp.company === "Homivio" ? (
                  <span className="font-sans font-black tracking-[-0.05em] uppercase">
                    homivio
                  </span>
                ) : (
                  exp.company
                )}
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
