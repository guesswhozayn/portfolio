import { useParams, Navigate, Link } from "react-router-dom";
import Footer from "../components/Footer";

const serviceDetails = {
  "web-apps": {
    n: "01",
    title: "Web Applications",
    tagline: "Building high-performance, responsive, and secure web architectures.",
    overview: "I design and develop custom web applications using modern, component-driven frontend frameworks and robust server-side infrastructures. My focus is on speed, scalability, and delivering clean, intuitive user experiences that scale seamlessly from viewport to viewport.",
    deliverables: [
      { title: "Custom Frontend Architectures", desc: "Leveraging React, Next.js, and TypeScript to build component libraries, high-fidelity landing pages, and responsive dashboards." },
      { title: "State Management & Performance", desc: "Optimizing state flows using lightweight tools like Zustand, and tuning performance metrics (LCP, FID) to achieve near-instant loading." },
      { title: "API Development & Integration", desc: "Creating secure, scalable GraphQL/REST endpoints and integrating third-party services like authentication and storage." }
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Node.js", "GraphQL"],
    projects: [
      { id: "homivio", name: "Homivio Commerce" },
      { id: "picket", name: "Picket Pipeline" }
    ]
  },
  "web3": {
    n: "02",
    title: "Blockchain & Web3",
    tagline: "Developing robust smart contracts and decentralized systems.",
    overview: "I design, write, test, and deploy smart contracts on EVM-compatible blockchains. I bridge the gap between blockchain nodes and the web browser to build decentralized applications (DApps) with excellent frontend execution and secure wallets connections.",
    deliverables: [
      { title: "Smart Contract Development", desc: "Writing secure, optimized Solidity code for tokens, NFTs, staking protocols, and customizable DAO governance systems." },
      { title: "DApp Frontend Integration", desc: "Connecting decentralized networks to frontend applications using ethers.js, viem, or wagmi, supporting seamless multi-wallet connect flows." },
      { title: "Security Auditing & Gas Optimization", desc: "Running security checks, writing unit tests (Foundry/Hardhat), and refactoring code to optimize transaction gas fees." }
    ],
    technologies: ["Solidity", "Hardhat", "Foundry", "Ethers.js", "Viem", "Wagmi", "Web3.js"],
    projects: [
      { id: "attestify", name: "Attestify Verification" }
    ]
  },
  "ai": {
    n: "03",
    title: "AI Integrations",
    tagline: "Empowering systems with LLMs and autonomous agent workflows.",
    overview: "I integrate state-of-the-art AI architectures into software platforms. From simple prompt engineering and semantic vector retrieval (RAG) to multi-agent coordinate systems that run autonomously to automate business processes.",
    deliverables: [
      { title: "Agentic Workflow Systems", desc: "Developing orchestration systems where AI agents collaborate, call tools, and make decisions to complete multi-step tasks." },
      { title: "Semantic Search & RAG", desc: "Building Retrieve-and-Generate pipelines using vector databases (Pinecone, pgvector) to connect LLMs to your private data." },
      { title: "LLM Orchestration", desc: "Integrating and fine-tuning prompts across platforms like OpenAI, Anthropic, or local open-source models using LangChain or LlamaIndex." }
    ],
    technologies: ["OpenAI API", "LangChain", "Vector DBs", "Python", "Node.js", "LlamaIndex", "Semantic Kernel"],
    projects: [
      { id: "picket", name: "Picket Pipeline" }
    ]
  },
  "ecommerce": {
    n: "04",
    title: "E-Commerce Systems",
    tagline: "Building fast, high-converting headless storefronts.",
    overview: "I specialize in constructing headless commerce structures that untangle backend databases from frontend templates. This ensures faster loading speeds, superior search engine optimization (SEO), and customizable shopping experiences.",
    deliverables: [
      { title: "Headless Storefront Integration", desc: "Linking Shopify, BigCommerce, or custom catalogs with Next.js/Vite engines to enable instantaneous page transitions." },
      { title: "Payment Orchestration", desc: "Configuring stripe, multi-currency processing, recurring subscriptions, and secure PCI-compliant checkout streams." },
      { title: "Custom CMS Integrations", desc: "Setting up Sanity, Contentful, or Strapi to allow marketing teams to manage store layout and blogs without developer assistance." }
    ],
    technologies: ["Shopify API", "Stripe API", "Sanity CMS", "Next.js", "GraphQL", "Next Commerce"],
    projects: [
      { id: "homivio", name: "Homivio Commerce" }
    ]
  }
};

export default function ServicePage() {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white text-black pt-32 flex flex-col">
      <div className="max-w-[1400px] mx-auto w-full px-8 flex flex-col gap-16 mb-24 flex-1">
        
        {/* Header */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors w-fit flex items-center gap-2">
            ← Back to Portfolio
          </Link>
          <div className="flex items-start gap-6 sm:gap-12">
            <span className="text-3xl sm:text-5xl font-mono font-bold text-blue-600 pt-1.5">{service.n}</span>
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-black leading-none">{service.title}</h1>
              <span className="text-base font-medium text-zinc-500 max-w-[600px] mt-2">{service.tagline}</span>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 border-t border-zinc-100 pt-16">
          
          {/* Left Column: Tech Stack & Related Projects */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Core Technologies</span>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, i) => (
                  <span key={i} className="px-3.5 py-1.5 bg-zinc-50 border border-zinc-200 text-xs font-bold text-zinc-600 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {service.projects.length > 0 && (
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Recent Projects</span>
                <div className="flex flex-col gap-3">
                  {service.projects.map((p) => (
                    <Link 
                      key={p.id} 
                      to={`/project/${p.id}`} 
                      className="group/proj flex items-center justify-between border border-zinc-200 hover:border-blue-600 rounded-2xl p-4 bg-white hover:bg-blue-50/10 transition-all duration-300"
                    >
                      <span className="font-bold text-black">{p.name}</span>
                      <span className="text-xs font-bold text-zinc-400 group-hover/proj:text-blue-600 transition-colors">Case Study →</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Overview & Deliverables */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold tracking-tight">Overview</h3>
              <p className="text-base text-zinc-600 leading-relaxed max-w-3xl font-normal">
                {service.overview}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold tracking-tight">What I Deliver</h3>
              <div className="flex flex-col gap-6">
                {service.deliverables.map((del, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-zinc-50/50 border border-zinc-150">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-black">{del.title}</span>
                      <span className="text-sm text-zinc-600 leading-relaxed">{del.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic CTA */}
        <div className="w-full bg-black text-white rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mt-12 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 80% 50%, #2563eb 0%, transparent 60%)"
            }}
          />
          <div className="relative z-10 flex flex-col gap-3 max-w-[600px]">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">Need help with {service.title}?</h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Let&apos;s collaborate to design, architecture, and implement high-fidelity solutions custom-built for your company.
            </p>
          </div>
          <a 
            href="mailto:zain@example.com" 
            className="relative z-10 px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
          >
            Get In Touch
          </a>
        </div>

      </div>
      <Footer />
    </div>
  );
}
