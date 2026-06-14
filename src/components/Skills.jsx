import Section from "./ui/Section";

export default function Skills() {
  const row1 = [
    { name: "JavaScript", cat: "Languages", color: "bg-indigo-500" },
    { name: "TypeScript", cat: "Languages", color: "bg-indigo-500" },
    { name: "Solidity", cat: "Languages", color: "bg-indigo-500" },
    { name: "Python", cat: "Languages", color: "bg-indigo-500" },
    { name: "C++", cat: "Languages", color: "bg-indigo-500" },
    { name: "React", cat: "Frontend", color: "bg-emerald-500" },
    { name: "Next.js", cat: "Frontend", color: "bg-emerald-500" },
    { name: "Tailwind CSS", cat: "Frontend", color: "bg-emerald-500" },
    { name: "Framer Motion", cat: "Frontend", color: "bg-emerald-500" },
    { name: "HTML", cat: "Frontend", color: "bg-emerald-500" },
    { name: "CSS", cat: "Frontend", color: "bg-emerald-500" },
  ];

  const row2 = [
    { name: "Node.js", cat: "Backend", color: "bg-blue-500" },
    { name: "Express.js", cat: "Backend", color: "bg-blue-500" },
    { name: "RESTful APIs", cat: "Backend", color: "bg-blue-500" },
    { name: "GraphQL", cat: "Backend", color: "bg-blue-500" },
    { name: "Socket.io", cat: "Backend", color: "bg-blue-500" },
    { name: "BullMQ", cat: "Backend", color: "bg-blue-500" },
    { name: "JWT", cat: "Backend", color: "bg-blue-500" },
    { name: "MongoDB", cat: "Databases", color: "bg-rose-500" },
    { name: "PostgreSQL", cat: "Databases", color: "bg-rose-500" },
    { name: "Redis", cat: "Databases", color: "bg-rose-500" },
  ];

  const row3 = [
    { name: "Smart Contracts", cat: "Blockchain", color: "bg-amber-500" },
    { name: "Hardhat", cat: "Blockchain", color: "bg-amber-500" },
    { name: "Ethers.js", cat: "Blockchain", color: "bg-amber-500" },
    { name: "OpenZeppelin", cat: "Blockchain", color: "bg-amber-500" },
    { name: "Git", cat: "DevOps & Deployment", color: "bg-purple-500" },
    { name: "GitHub", cat: "DevOps & Deployment", color: "bg-purple-500" },
    { name: "Vercel", cat: "DevOps & Deployment", color: "bg-purple-500" },
    { name: "Docker", cat: "DevOps & Deployment", color: "bg-purple-500" },
    { name: "Linux", cat: "Tools & Workflow", color: "bg-zinc-400" },
    { name: "VS Code", cat: "Tools & Workflow", color: "bg-zinc-400" },
    { name: "CLI", cat: "Tools & Workflow", color: "bg-zinc-400" },
  ];

  const legends = [
    { name: "Languages", color: "bg-indigo-500" },
    { name: "Frontend", color: "bg-emerald-500" },
    { name: "Backend", color: "bg-blue-500" },
    { name: "Databases", color: "bg-rose-500" },
    { name: "Blockchain", color: "bg-amber-500" },
    { name: "DevOps", color: "bg-purple-500" },
    { name: "Tools", color: "bg-zinc-400" },
  ];

  const repeatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const repeatedRow2 = [...row2, ...row2, ...row2, ...row2];
  const repeatedRow3 = [...row3, ...row3, ...row3, ...row3];

  return (
    <Section title="Skills">
      <div className="flex flex-col gap-8 w-full overflow-hidden">
        {/* Legend */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 select-none justify-start text-[10px] uppercase font-bold tracking-widest text-zinc-400 dark:text-zinc-500 font-mono">
          {legends.map((leg) => (
            <div key={leg.name} className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${leg.color}`} />
              {leg.name}
            </div>
          ))}
        </div>

        {/* Marquee tracks container */}
        <div className="relative flex flex-col gap-4 w-full [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] select-none pointer-events-auto">
          {/* Row 1: Left scrolling */}
          <div className="flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]">
            {repeatedRow1.map((skill, idx) => (
              <div
                key={`${skill.name}-${idx}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors cursor-default shrink-0 shadow-sm"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${skill.color}`} />
                {skill.name}
              </div>
            ))}
          </div>

          {/* Row 2: Right scrolling */}
          <div className="flex w-max gap-3 animate-marquee-reverse hover:[animation-play-state:paused]">
            {repeatedRow2.map((skill, idx) => (
              <div
                key={`${skill.name}-${idx}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors cursor-default shrink-0 shadow-sm"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${skill.color}`} />
                {skill.name}
              </div>
            ))}
          </div>

          {/* Row 3: Left scrolling */}
          <div className="flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]">
            {repeatedRow3.map((skill, idx) => (
              <div
                key={`${skill.name}-${idx}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors cursor-default shrink-0 shadow-sm"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${skill.color}`} />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
