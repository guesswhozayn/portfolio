import { useParams, Navigate, Link } from "react-router-dom";
import homivioImg from "../assets/img/homivio-desktop.png";
import attestifyImg from "../assets/img/attestify-desktop.png";
import picketImg from "../assets/img/picket-desktop.png";
import Footer from "../components/Footer";

const projectData = {
  homivio: {
    title: "Homivio",
    category: "E-Commerce Architecture",
    year: "2024",
    img: homivioImg,
    overview: "A high-performance e-commerce architecture designed to handle massive concurrency with sub-second response times. The platform focuses on an uninterrupted, fluid user experience through seamless state management and optimized edge delivery.",
    challenge: "The client faced high cart abandonment rates during peak traffic windows. Their legacy Shopify integration suffered from slow database queries, checkouts taking up to 6 seconds to load, and frequent API rate-limiting blocks from third-party payment gates under load.",
    solution: "I built a custom decoupled checkout architecture using Next.js for the storefront and Stripe Serverless Functions for transaction processing. I implemented optimistic state updates on the frontend so cart modifications happened instantly, and moved product catalog delivery to edge-cached CDNs to bypass database queries entirely.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "TailwindCSS"],
    features: [
      "Custom frictionless checkout flow",
      "Global state management for complex cart logic",
      "Real-time inventory synchronization",
      "Edge-cached product catalog"
    ],
    results: [
      "Reduced average checkout latency by 1.2s, resulting in a 4.8% immediate increase in completed checkouts.",
      "Handled traffic surges of up to 50k monthly active users with zero server downtime.",
      "Reduced page weight and optimized script loading to hit sub-second Largest Contentful Paint (LCP)."
    ]
  },
  attestify: {
    title: "Attestify",
    category: "Web3 Verification",
    year: "2023",
    img: attestifyImg,
    overview: "A decentralized platform enabling organizations and individuals to issue, attest, and verify credentials immutably on the blockchain. By leveraging decentralized storage, Attestify removes central points of failure for critical documents.",
    challenge: "The client needed a tamper-proof system for credential verification but struggled with gas fees on Ethereum and slow IPFS upload speeds that caused up to 12% of uploads to timeout, disrupting the user experience.",
    solution: "I designed a multi-layered verification pipeline that batches attestation hashes off-chain before anchoring them to the blockchain. I refactored the IPFS persistence logic with localized file-pinning workers and optimized connection hooks, introducing smart contract cache layers to prevent redundant Web3 network queries.",
    tech: ["React", "Solidity", "IPFS", "Ethers.js", "Node.js"],
    features: [
      "Smart contract credential issuance",
      "Decentralized IPFS data storage",
      "Web3 wallet authentication (MetaMask)",
      "Immutable verification trails"
    ],
    results: [
      "Brought document upload timeouts down to zero.",
      "Cut transaction gas costs by 80% through batching attestations off-chain.",
      "Achieved instant client-side credential verification (under 200ms) utilizing decentralized state validation."
    ]
  },
  picket: {
    title: "Picket",
    category: "AI Agent Engine",
    year: "2024",
    img: picketImg,
    overview: "An advanced orchestration engine utilizing multiple Large Language Models to automate complex HR workflows and document processing. Picket Pipeline heavily relies on distributed systems to handle high-throughput analytical tasks.",
    challenge: "The applicant screening system struggled with heavy memory leaks and crashed daily due to the unoptimized processing of thousands of resume PDFs concurrently. The server hosting bills were skyrocketing while process queue latency sat at several minutes.",
    solution: "I restructured the parser workers to run inside isolated sandboxes utilizing Redis and BullMQ for robust job processing. I optimized Redis memory allocations, introduced automatic resource cleanup rules for system agents, and integrated parallel processing chains powered by vector search embeddings.",
    tech: ["Python", "React", "BullMQ", "Redis", "OpenAI API"],
    features: [
      "Automated resume parsing and candidate matching",
      "Distributed task queues for massive processing",
      "Real-time analytics processing dashboard",
      "Multi-agent LLM reasoning chains"
    ],
    results: [
      "Slashed monthly cloud hosting costs by over $450 through optimized memory profiling.",
      "Increased processing capacity to handle 10,000+ candidate applications concurrently without single queue bottlenecks.",
      "Reduced average candidate screening time from 8 minutes down to under 15 seconds."
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
            <h1 className="text-4xl sm:text-7xl font-bold tracking-tight text-black leading-tight">{project.title}</h1>
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
            {/* Overview */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Overview</h3>
              <p className="text-base text-zinc-600 leading-relaxed max-w-3xl">
                {project.overview}
              </p>
            </div>

            {/* The Challenge */}
            <div className="flex flex-col gap-4 border-t border-zinc-100 pt-8">
              <h3 className="text-2xl font-bold text-black">The Challenge</h3>
              <p className="text-base text-zinc-600 leading-relaxed max-w-3xl">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="flex flex-col gap-4 border-t border-zinc-100 pt-8">
              <h3 className="text-2xl font-bold text-black">The Solution</h3>
              <p className="text-base text-zinc-600 leading-relaxed max-w-3xl">
                {project.solution}
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-col gap-4 border-t border-zinc-100 pt-8">
              <h3 className="text-2xl font-bold">Key Features</h3>
              <ul className="flex flex-col gap-3">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-zinc-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact & Results */}
            <div className="flex flex-col gap-4 border-t border-zinc-100 pt-8">
              <h3 className="text-2xl font-bold text-black">Impact & Results</h3>
              <ul className="flex flex-col gap-3">
                {project.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-zinc-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
                    {r}
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
