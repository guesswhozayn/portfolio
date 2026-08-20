export default function Skills() {
  const skillCategories = [
    { 
      n: "01",
      title: "Languages & Frameworks", 
      skills: [
        { name: "JavaScript", featured: true },
        { name: "TypeScript", featured: true },
        { name: "Python", featured: false },
        { name: "React", featured: true },
        { name: "Next.js", featured: true },
        { name: "Node.js", featured: true },
        { name: "Express.js", featured: false }
      ] 
    },
    { 
      n: "02",
      title: "State & Frontend Tools", 
      skills: [
        { name: "Zustand", featured: true },
        { name: "Redux Toolkit", featured: false },
        { name: "TanStack Query", featured: true },
        { name: "TailwindCSS", featured: true },
        { name: "Context API", featured: false }
      ] 
    },
    { 
      n: "03",
      title: "APIs & Integration", 
      skills: [
        { name: "REST APIs", featured: true },
        { name: "GraphQL", featured: true },
        { name: "Socket.io", featured: false },
        { name: "BullMQ", featured: true },
        { name: "Stripe Payments", featured: true }
      ] 
    },
    { 
      n: "04",
      title: "Databases & Caching", 
      skills: [
        { name: "PostgreSQL", featured: true },
        { name: "MongoDB", featured: false },
        { name: "Redis", featured: true },
        { name: "MySQL", featured: false }
      ] 
    },
    { 
      n: "05",
      title: "Security & Authentication", 
      skills: [
        { name: "JWT", featured: true },
        { name: "OAuth", featured: false },
        { name: "RBAC", featured: false },
        { name: "Rate Limiting", featured: true },
        { name: "API Security", featured: true }
      ] 
    },
    { 
      n: "06",
      title: "DevOps & Workflows", 
      skills: [
        { name: "Docker", featured: true },
        { name: "Vercel", featured: true },
        { name: "CI/CD", featured: false },
        { name: "Git", featured: false },
        { name: "Linux", featured: false },
        { name: "Postman", featured: false }
      ] 
    }
  ];

  return (
    <div className="w-full bg-white text-black py-24 sm:py-32 border-t border-zinc-100" id="skills">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col gap-12">
        
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">Capabilities</span>
          <h2 className="text-3xl font-bold tracking-tight text-black">Technical Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="group border border-zinc-200/80 hover:border-blue-500/20 rounded-3xl p-6 sm:p-8 bg-white hover:bg-blue-50/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(37,99,235,0.03)] flex flex-col gap-6 cursor-default"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between border-b border-zinc-100 pb-4">
                <span className="text-base font-bold text-black group-hover:text-blue-600 transition-colors duration-300">
                  {cat.title}
                </span>
                <span className="text-xs font-mono font-bold text-zinc-300 group-hover:text-blue-500/40 transition-colors">
                  {cat.n}
                </span>
              </div>

              {/* Skills Badges Grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 text-xs rounded-full transition-all duration-300 hover:scale-105 select-none font-bold text-blue-600 bg-blue-50/30 border border-blue-200/80 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
