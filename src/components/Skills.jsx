export default function Skills() {
  const skillCategories = [
    { title: "Languages & Frameworks", skills: "JavaScript, TypeScript, Python, React, Next.js, Node.js, Express.js" },
    { title: "State & Frontend Tools", skills: "Context API, Redux Toolkit, TanStack Query, Zustand, TailwindCSS" },
    { title: "APIs & Integration", skills: "REST APIs, GraphQL, Socket.io, BullMQ, Stripe Payments" },
    { title: "Databases", skills: "MongoDB, MySQL, PostgreSQL, Redis" },
    { title: "Identity & Security", skills: "JWT, OAuth, Bcrypt, RBAC, Rate Limiting, API Security" },
    { title: "Cloud & DevOps", skills: "CI/CD, Docker, Linux, Vercel, Render, Git, GitHub" },
    { title: "Developer Tools", skills: "VS Code, Postman, Chrome DevTools, CLI" },
  ];

  return (
    <div className="w-full bg-white text-black py-16" id="skills">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col">
        <div className="flex justify-between items-end border-b border-zinc-200 pb-4 mb-4">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-900">Technical Expertise</span>
        </div>

        <div className="flex flex-col">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col md:flex-row py-8 border-b border-zinc-200/60 last:border-0 hover:pl-4 transition-all duration-300 ease-out cursor-default"
            >
              <div className="w-full md:w-1/3 mb-2 md:mb-0">
                <span className="text-[14px] font-semibold tracking-tight text-black">{cat.title}</span>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-[14px] text-zinc-500 font-medium">
                  {cat.skills}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
