import Section from "./ui/Section";

export default function Skills() {
  const categories = [
    { name: "Programming", skills: ["JavaScript", "TypeScript", "Python", "C++"] },
    { name: "Frontend",    skills: ["React", "Next.js", "TailwindCSS"] },
    { name: "Backend",     skills: ["NodeJS", "ExpressJS", "RESTful APIs", "GraphQL"] },
    { name: "Database",    skills: ["MongoDB", "PostgreSQL"] },
    { name: "Blockchain",  skills: ["Solidity", "Web3.js", "Ethers.js"] },
    { name: "DevOps",      skills: ["Git", "Vercel", "Docker", "GitHub Actions"] },
  ];

  return (
    <Section title="Skills">
      <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-4 first:pt-0 last:pb-0">
            <span className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 sm:w-28 shrink-0">
              {cat.name}
            </span>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
