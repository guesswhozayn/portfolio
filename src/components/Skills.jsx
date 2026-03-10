import Section from "./ui/Section";
import InteractiveCard from "./ui/InteractiveCard";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat, idx) => (
          <InteractiveCard key={idx} className="p-6">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 shrink-0">
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
          </InteractiveCard>
        ))}
      </div>
    </Section>
  );
}
