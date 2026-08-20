import { useParams, Navigate, Link } from "react-router-dom";
import homivioImg from "../assets/img/homivio-desktop.png";
import attestifyImg from "../assets/img/attestify-desktop.png";
import picketImg from "../assets/img/picket-desktop.png";
import Footer from "../components/Footer";

const projectData = {
  homivio: {
    title: "Homivio Commerce",
    category: "E-Commerce Architecture",
    year: "2024",
    role: "Full Stack Engineer",
    img: homivioImg,
    overview: "A high-performance e-commerce architecture designed to handle massive concurrency with sub-second response times. The platform focuses on an uninterrupted, fluid user experience through seamless state management and optimized edge delivery.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "TailwindCSS"],
    features: [
      "Custom frictionless checkout flow",
      "Global state management for complex cart logic",
      "Real-time inventory synchronization",
      "Edge-cached product catalog"
    ]
  },
  attestify: {
    title: "Attestify",
    category: "Web3 Verification",
    year: "2023",
    role: "Blockchain Developer",
    img: attestifyImg,
    overview: "A decentralized platform enabling organizations and individuals to issue, attest, and verify credentials immutably on the blockchain. By leveraging decentralized storage, Attestify removes central points of failure for critical documents.",
    tech: ["React", "Solidity", "IPFS", "Ethers.js", "Node.js"],
    features: [
      "Smart contract credential issuance",
      "Decentralized IPFS data storage",
      "Web3 wallet authentication (MetaMask)",
      "Immutable verification trails"
    ]
  },
  picket: {
    title: "Picket Pipeline",
    category: "AI Agent Engine",
    year: "2024",
    role: "AI / Backend Engineer",
    img: picketImg,
    overview: "An advanced orchestration engine utilizing multiple Large Language Models to automate complex HR workflows and document processing. Picket Pipeline heavily relies on distributed systems to handle high-throughput analytical tasks.",
    tech: ["Python", "React", "BullMQ", "Redis", "OpenAI API"],
    features: [
      "Automated resume parsing and candidate matching",
      "Distributed task queues for massive processing",
      "Real-time analytics processing dashboard",
      "Multi-agent LLM reasoning chains"
    ]
  }
};

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white text-black pt-32 flex flex-col">
      <div className="max-w-[1400px] mx-auto w-full px-8 flex flex-col gap-16 mb-24">
        
        {/* Header */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors w-fit flex items-center gap-2">
            ← Back to Portfolio
          </Link>
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-black">{project.title}</h1>
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">{project.category}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full rounded-3xl overflow-hidden bg-[#f4f4f5] shadow-2xl border border-zinc-100 aspect-video relative">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover object-center" />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 border-t border-zinc-200 pt-16">
          {/* Meta Info */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Role</span>
              <span className="text-sm font-semibold">{project.role}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Year</span>
              <span className="text-sm font-semibold">{project.year}</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-100 text-xs font-semibold rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Overview</h3>
              <p className="text-base text-zinc-600 leading-relaxed max-w-3xl">
                {project.overview}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Key Features</h3>
              <ul className="flex flex-col gap-3">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-base text-zinc-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
