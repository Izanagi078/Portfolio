import { Link } from "react-router-dom";

export default function Projects() {
  const projectsList = [
    {
      title: "🔬 GLOSSVIS: Visual Glossary Annotations for Scientific Papers",
      type: "Research Project",
      professor: "Prof. Suman Kundu (IIT Jodhpur)",
      timeline: "Aug 2025 - Apr 2026",
      description:
        "An in-document visual analytics system that embeds glossary annotations (citations, abbreviations, mathematical symbols) directly within PDF margins to mitigate cognitive overload and context-switching during research reading.",
      features: [
        "Document-Grounded Extraction (DIE): Implements structural layout analysis to deterministically extract explicit glossary declarations directly from the PDF.",
        "LLM-RAG Fallback Resolution: Employs a local 14B-parameter LLM (Qwen-2.5-14B) with Retrieval-Augmented Generation to resolve implicit symbols and contextual definitions.",
        "Calibrated Reliability Modeling: Maps annotations to a two-tier confidence scheme (HIGH for deterministic matches, MEDIUM for model inferences) to prevent visual hallucinations.",
        "Interactive PDF Annotation Viewer: Supports real-time filtering, margin rendering, confidence toggles, and sorting to enhance read-time text comprehension."
      ],
      techStack: [
        "Python",
        "Qwen 2.5 (14B)",
        "PyMuPDF",
        "RAG",
        "NLP",
        "Information Visualization"
      ],
      repo: "https://github.com/Izanagi078/GLOSSVIS",
      pdfUrl: "/GLOSSVIS_Research_Paper.pdf",
      previewType: "document",
      badgeColor: "from-purple-500 to-indigo-600"
    },
    {
      title: "💡 Savant: AI-Powered Course Builder & Multi-Agent Tutor",
      type: "Full-Stack Project",
      timeline: "May 2026 - Jul 2026",
      description:
        "A multi-agent educational orchestrator that converts abstract learning goals into structured, modular syllabi complete with matched videos, research papers, web assets, and an active chat tutor workspace.",
      features: [
        "Dynamic Syllabus Generation: Translates learning prompts into structured modules with detailed concept maps and targeted search query sets.",
        "Concurrent Multi-Agent Scraper: Parallel query orchestrator running search requests concurrently across YouTube, arXiv, and Wikipedia/Web APIs.",
        "Gemini 2.5 Flash Verifier: Implements a verifier agent that filters out inappropriate or unsuitable resources and generates optimized course pathways.",
        "Interactive Contextual Chat Tutor: Activates a conversational workspace using session history tracking, memory stores, and auto-generated verified concept quizzes."
      ],
      techStack: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "asyncpg",
        "Supabase Connection Pooler",
        "Gemini 2.5 Flash"
      ],
      liveDemo: "https://savant.vercel.app/",
      repo: "https://github.com/Izanagi078/Savant",
      previewType: "browser",
      previewUrl: "https://savant.vercel.app/",
      badgeColor: "from-cyan-500 to-blue-600"
    },
    {
      title: "🦀 Distributed Hierarchical Rate Limiter",
      type: "DSA Course Project",
      professor: "Prof. Suchetna Chakraborty (IIT Jodhpur)",
      timeline: "Jan 2025 - Apr 2025",
      description:
        "A high-concurrency, distributed rate-limiting service implementing a hierarchical token-bucket leasing model designed to reduce centralized network overhead and load-balancer bottlenecks.",
      features: [
        "Hierarchical Token Leasing: Caches dynamic token lease pools locally on regional edge servers, ensuring 0ms network latency for local cache hits.",
        "gRPC & Protobuf Orchestration: Orchestrates server-coordinator communication using the Tonic framework and Google Protocol Buffers over HTTP/2.",
        "Lock-Free Concurrency: Leverages concurrent hash map structures (DashMap) in multi-threaded environments to support lock-free reads and high-scale writes.",
        "Tier-Aware Limits: Dynamically allocates rule sets, window durations, and lease sizes based on standard/premium client categories.",
        "Graceful Node Degradation: Features autonomous failover, reverting edge nodes to local standalone evaluation if the master coordinator goes offline."
      ],
      techStack: [
        "Rust",
        "Tokio Async",
        "Tonic (gRPC)",
        "Prost (Protobuf)",
        "DashMap Concurrency Map",
        "Tracing"
      ],
      repo: "https://github.com/Izanagi078/DSA-Course-Project",
      previewType: "terminal",
      badgeColor: "from-orange-500 to-red-600"
    },
    {
      title: "🎬 CineStream AI — Hybrid Movie Recommender System",
      type: "Machine Learning Project",
      professor: "Prof. Avinash Sharma (IIT Jodhpur)",
      timeline: "Aug 2024 - Nov 2024",
      description:
        "A decoupled hybrid machine learning recommendation engine ensembling Collaborative Filtering (Matrix Factorization SVD) and Content-Based NLP Filtering on 100,000 ratings.",
      features: [
        "Collaborative Matrix SVD: Decomposes sparse interaction maps into 50-dimensional user/item latent matrices using Stochastic Gradient Descent.",
        "Bayesian Bias Shrinkage: Regularizes user rating baselines toward global means to eliminate model collapse and cold-start profiles.",
        "NLP TF-IDF Cosine Similarity: Computes content relevance coefficients across movie attributes, plot summaries, and genres.",
        "On-the-Fly Online Learning: Retrains the user's latent matrix across 5 mini-batch epochs in real-time on every rating submission.",
        "Explainable AI (XAI): Returns detailed mathematical breakdowns showing exactly how much collaborative factors vs. content similarity contributed to the score."
      ],
      techStack: [
        "React",
        "FastAPI",
        "scikit-learn",
        "numpy",
        "pandas",
        "PostgreSQL",
        "SQLite",
        "Redis Cache",
        "TMDB API"
      ],
      liveDemo: "https://machine-learning-recommendation-sys.vercel.app",
      repo: "https://github.com/Izanagi078/MachineLearning-AlgoTrading",
      previewType: "browser",
      previewUrl: "https://machine-learning-recommendation-sys.vercel.app",
      badgeColor: "from-green-500 to-emerald-600"
    },
    {
      title: "💸 MERN Expense Tracker",
      type: "Personal Project",
      timeline: "May 2024 - Jul 2024",
      description:
        "A full-stack financial transaction and budgeting platform providing real-time data visualization, transaction categorization, and secure credential storage.",
      features: [
        "MERN Stack CRUD: Full lifecycle management of transactions and monthly targets connected via Express REST APIs.",
        "Argon2 & JWT Authentication: Secures client profiles with Argon2 password hashing and stateless JSON Web Token auth cookies.",
        "Data Visualizations: Visualizes budget breakdowns and trends using Chart.js, Recharts, and date manipulation engines.",
        "Mongoose & Multer Storage: Persists transaction schemas inside MongoDB clusters with support for receipt image uploads."
      ],
      techStack: [
        "React",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Chart.js",
        "JWT",
        "Argon2"
      ],
      liveDemo: "https://final-two-hazel.vercel.app/",
      repo: "https://github.com/Izanagi078/Susanoo",
      previewType: "browser",
      previewUrl: "https://final-two-hazel.vercel.app/",
      badgeColor: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#07050f] via-[#0d0a1b] to-[#04020a] text-zinc-100 px-4 md:px-8 py-16 font-sans relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Top Header */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between mb-16 gap-6 relative z-10">
        <Link
          to="/"
          className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-zinc-300 hover:text-white text-xs font-bold tracking-wide transition duration-300"
        >
          <svg
            className="w-4 h-4 transform group-hover:-translate-x-1 transition duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back Home
        </Link>
        
        <div className="text-center md:text-right space-y-1">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Project Showcase
          </h1>
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest">
            Vetted Systems, NLP Inventions & Distributed Computing
          </p>
        </div>
      </div>

      {/* Main List */}
      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        {projectsList.map((p, idx) => (
          <div
            key={p.title}
            className="bg-[#0f0b21]/45 border border-zinc-800/40 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col lg:flex-row hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)] transition-all duration-300 shadow-xl"
          >
            
            {/* Left/Top: Interactive Visual Mockups */}
            <div className="lg:w-2/5 min-h-[300px] lg:min-h-auto bg-[#07050f]/80 relative flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-800/45 p-6 justify-center">
              
              {/* Document/Research Mockup */}
              {p.previewType === "document" && (
                <div className="bg-[#120e2b]/60 border border-purple-500/20 rounded-xl p-5 flex flex-col h-full justify-between shadow-inner">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800/60">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Research Document</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center py-6 text-center space-y-4">
                    <svg className="w-16 h-16 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-200">GLOSSVIS Research Paper</h4>
                      <p className="text-zinc-500 text-2xs mt-1">Information Visualization & NLP (PDF 2.1MB)</p>
                    </div>
                  </div>
                  {p.pdfUrl && (
                    <a
                      href={p.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 rounded-xl text-center text-xs font-bold text-white shadow-md hover:shadow-lg transition duration-200"
                    >
                      Read Research PDF
                    </a>
                  )}
                </div>
              )}

              {/* Browser Window Mockup */}
              {p.previewType === "browser" && (
                <div className="bg-[#120e2b]/40 border border-zinc-800/80 rounded-xl overflow-hidden flex flex-col h-full shadow-inner">
                  {/* Browser address bar */}
                  <div className="bg-[#0d0a1b] px-4 py-2 flex items-center gap-3 border-b border-zinc-800/50">
                    <div className="flex gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                    </div>
                    <div className="bg-[#080612] flex-1 rounded-md px-3 py-1 text-[10px] text-zinc-500 font-semibold select-none overflow-hidden truncate">
                      {p.previewUrl}
                    </div>
                  </div>
                  {/* Browser viewport iframe */}
                  <div className="flex-1 min-h-[180px] bg-[#07050f]/60 relative flex items-center justify-center">
                    {p.liveDemo ? (
                      <iframe
                        src={p.liveDemo}
                        title={`${p.title} preview`}
                        className="absolute inset-0 w-full h-full border-0 opacity-40 hover:opacity-60 transition duration-300"
                        loading="lazy"
                      />
                    ) : null}
                    <div className="relative z-10 p-4 text-center pointer-events-none">
                      <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
                        Web App Interface
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Terminal Mockup */}
              {p.previewType === "terminal" && (
                <div className="bg-[#04020a] border border-zinc-800/90 rounded-xl p-4 font-mono text-left h-full flex flex-col justify-between shadow-2xl">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-900 mb-3">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                    </div>
                    <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">Rust Console</span>
                  </div>
                  <div className="text-2xs text-zinc-400 space-y-1.5 flex-1 select-none">
                    <p className="text-zinc-600 font-semibold">$ cargo run --bin coordinator</p>
                    <p className="text-orange-400">  [INFO] Central Coordinator listening on port 50050</p>
                    <p className="text-zinc-600 font-semibold">$ cargo run --bin rate-limiter 50051</p>
                    <p className="text-green-400">  [INFO] Edge Server cached token lease (Premium: 15 tokens)</p>
                    <p className="text-zinc-600 font-semibold">$ cargo run --bin client</p>
                    <p className="text-cyan-400">  [RUN] Load Generator: Sending 50,000 client API requests...</p>
                    <p className="text-green-500 font-bold">  [SUCCESS] 100% throughput, local hits processed in 0ms!</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-zinc-900 flex justify-between items-center text-[9px] text-zinc-600 font-bold">
                    <span>Thread safe</span>
                    <span>gRPC (HTTP/2)</span>
                  </div>
                </div>
              )}

            </div>

            {/* Right/Bottom: Content Details */}
            <div className="p-6 md:p-8 lg:w-3/5 flex flex-col justify-between space-y-6">
              
              {/* Card Header & Metadata */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className={`px-3 py-1 bg-gradient-to-r ${p.badgeColor || "from-indigo-500 to-purple-600"} text-white text-[10px] font-black rounded-full uppercase tracking-wider shadow-sm`}>
                    {p.type}
                  </span>
                  
                  <span className="px-3 py-1 bg-white/5 border border-white/5 text-zinc-400 text-2xs font-extrabold rounded-full tracking-wide">
                    🗓️ {p.timeline}
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-white tracking-tight">
                  {p.title}
                </h2>

                {p.professor && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-lg text-xs font-bold">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <span>{p.professor}</span>
                  </div>
                )}

                <p className="text-zinc-400 text-sm leading-relaxed pt-1">
                  {p.description}
                </p>
              </div>

              {/* Core Accomplishments */}
              <div className="space-y-2">
                <h4 className="text-2xs uppercase tracking-widest font-black text-indigo-400">Core Architecture Features</h4>
                <ul className="grid grid-cols-1 gap-2.5">
                  {p.features.map((feat) => {
                    const [headline, details] = feat.split(":");
                    return (
                      <li key={feat} className="text-xs text-zinc-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-indigo-500 mt-1 shrink-0">✦</span>
                        <div>
                          {details ? (
                            <>
                              <strong className="text-zinc-200 font-bold">{headline}:</strong>{details}
                            </>
                          ) : feat}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="space-y-2 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {p.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#15112e]/80 border border-zinc-800/60 text-zinc-400 hover:text-white hover:border-zinc-700/60 rounded-md text-[10px] font-bold tracking-wide transition duration-150"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-3 border-t border-zinc-800/40">
                {p.liveDemo && (
                  <a
                    href={p.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-center text-xs font-bold shadow-md hover:shadow-indigo-500/20 transition duration-200 cursor-pointer"
                  >
                    Live Demo
                  </a>
                )}
                {p.pdfUrl && (
                  <a
                    href={p.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none px-6 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white rounded-xl text-center text-xs font-bold shadow-md hover:shadow-purple-500/20 transition duration-200 cursor-pointer"
                  >
                    Open Research Paper
                  </a>
                )}
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white rounded-xl text-center text-xs font-bold transition duration-200 cursor-pointer"
                >
                  GitHub Repository
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
