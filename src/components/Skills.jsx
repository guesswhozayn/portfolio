import Section from "./ui/Section";

export default function Skills() {
  const row1 = [
    { name: "JavaScript", color: "bg-indigo-500" },
    { name: "TypeScript", color: "bg-indigo-500" },
    { name: "Python", color: "bg-indigo-500" },
    { name: "React", color: "bg-emerald-500" },
    { name: "Next.js", color: "bg-emerald-500" },
    { name: "TailwindCSS", color: "bg-emerald-500" },
    { name: "Context API", color: "bg-emerald-500" },
    { name: "Redux Toolkit", color: "bg-emerald-500" },
    { name: "TanStack Query", color: "bg-emerald-500" },
    { name: "Zustand", color: "bg-emerald-500" },
    { name: "VS Code", color: "bg-zinc-400" },
    { name: "Postman", color: "bg-zinc-400" }
  ];

  const row2 = [
    { name: "Node.js", color: "bg-blue-500" },
    { name: "Express.js", color: "bg-blue-500" },
    { name: "REST APIs", color: "bg-blue-500" },
    { name: "GraphQL", color: "bg-blue-500" },
    { name: "Socket.io", color: "bg-blue-500" },
    { name: "BullMQ", color: "bg-blue-500" },
    { name: "Stripe Payments", color: "bg-blue-500" },
    { name: "MongoDB", color: "bg-rose-500" },
    { name: "MySQL", color: "bg-rose-500" },
    { name: "PostgreSQL", color: "bg-rose-500" },
    { name: "Redis", color: "bg-rose-500" },
    { name: "Chrome DevTools", color: "bg-zinc-400" }
  ];

  const row3 = [
    { name: "JWT", color: "bg-cyan-500" },
    { name: "OAuth", color: "bg-cyan-500" },
    { name: "Bcrypt", color: "bg-cyan-500" },
    { name: "RBAC", color: "bg-cyan-500" },
    { name: "Rate Limiting", color: "bg-cyan-500" },
    { name: "API Security", color: "bg-cyan-500" },
    { name: "CI/CD", color: "bg-purple-500" },
    { name: "Docker", color: "bg-purple-500" },
    { name: "Linux", color: "bg-purple-500" },
    { name: "Vercel", color: "bg-purple-500" },
    { name: "Render", color: "bg-purple-500" },
    { name: "Git", color: "bg-purple-500" },
    { name: "GitHub", color: "bg-purple-500" },
    { name: "CLI", color: "bg-zinc-400" }
  ];

  const legends = [
    { name: "Languages", color: "bg-indigo-500" },
    { name: "Frontend", color: "bg-emerald-500" },
    { name: "Backend", color: "bg-blue-500" },
    { name: "Databases", color: "bg-rose-500" },
    { name: "Security", color: "bg-cyan-500" },
    { name: "DevOps", color: "bg-purple-500" },
    { name: "Tools", color: "bg-zinc-400" },
  ];

  const repeatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const repeatedRow2 = [...row2, ...row2, ...row2, ...row2];
  const repeatedRow3 = [...row3, ...row3, ...row3, ...row3];

  return (
    <Section title="Skills">
      <div className="flex flex-col gap-8 w-full overflow-hidden">
        <div className="flex flex-wrap gap-x-4 gap-y-2 select-none justify-start text-xs uppercase font-bold tracking-widest text-zinc-400 dark:text-zinc-500 font-mono">
          {legends.map((leg) => (
            <div key={leg.name} className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${leg.color}`} />
              {leg.name}
            </div>
          ))}
        </div>

        <div className="relative flex flex-col gap-4 w-full [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] select-none pointer-events-auto">
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
