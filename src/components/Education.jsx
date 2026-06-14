import Section from "./ui/Section";

export default function Education() {
  const education = [
    {
      institution: "The University of Chakwal",
      degree: "B.Sc in Computer Science",
      duration: "2022 – 2026",
    },
  ];

  return (
    <Section title="Education">
      <div className="flex flex-col gap-6">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 pb-6 border-b border-zinc-100 dark:border-zinc-800 last:border-0 last:pb-0"
          >
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{edu.institution}</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400 mt-1">{edu.degree}</p>
            </div>
            <span className="text-sm font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-lg whitespace-nowrap">
              {edu.duration}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
