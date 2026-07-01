import { Link } from "react-router-dom";

export default function Projects() {
  const projectsList = [
    {
      title: "🔬 GLOSSVIS: Visual Glossary Annotations for Scientific Papers",
      type: "Research Project",
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
      previewType: "glossvis-arch",
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
      previewType: "savant-arch",
      badgeColor: "from-cyan-500 to-blue-600"
    },
    {
      title: "🦀 Distributed Hierarchical Rate Limiter",
      type: "DSA Course Project",
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
      previewType: "limiter-arch",
      badgeColor: "from-orange-500 to-red-600"
    },
    {
      title: "🎬 CineStream AI — Hybrid Movie Recommender System",
      type: "Machine Learning Project",
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
      previewType: "recommend-arch",
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
      previewType: "tracker-arch",
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
            
            {/* Left/Top: Interactive Visual Architecture Graphics */}
            <div className="lg:w-2/5 min-h-[340px] lg:min-h-auto bg-[#07050f]/60 relative flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-800/45 p-6 justify-center overflow-hidden">
              
              {/* Decorative background grid inside graphic panel */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.06),rgba(255,255,255,0))] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

              {/* 1. GLOSSVIS Pipeline Graphic */}
              {p.previewType === "glossvis-arch" && (
                <div className="relative w-full h-full flex flex-col justify-between space-y-4 font-sans text-xs">
                  <div className="text-center font-black tracking-widest text-[10px] text-purple-400/80 uppercase">System Pipeline Architecture</div>
                  <div className="flex flex-col space-y-3 relative z-10">
                    
                    {/* Step 1 */}
                    <div className="flex items-center justify-between p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-lg bg-purple-500 flex items-center justify-center text-white text-[10px] font-bold">1</span>
                        <span className="font-bold text-zinc-200">Input PDF Document</span>
                      </div>
                      <span className="text-[9px] text-zinc-500 font-medium">Research Paper</span>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center -my-1 text-purple-500/60 font-black animate-pulse">▼</div>

                    {/* Step 2 */}
                    <div className="flex items-center justify-between p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-lg bg-indigo-500 flex items-center justify-center text-white text-[10px] font-bold">2</span>
                        <span className="font-bold text-zinc-200">DIE Document Extraction</span>
                      </div>
                      <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 text-green-400 text-[9px] font-bold rounded">HIGH Conf</span>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center -my-1 text-indigo-500/60 font-black animate-pulse">▼</div>

                    {/* Step 3 */}
                    <div className="flex items-center justify-between p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-lg bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">3</span>
                        <span className="font-bold text-zinc-200">Local RAG LLM Fallback</span>
                      </div>
                      <span className="px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[9px] font-bold rounded">MED Conf</span>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center -my-1 text-blue-500/60 font-black animate-pulse">▼</div>

                    {/* Step 4 */}
                    <div className="flex items-center justify-between p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-lg bg-cyan-500 flex items-center justify-center text-[#07050f] text-[10px] font-bold">4</span>
                        <span className="font-bold text-zinc-200">Margin Annotation Viewer</span>
                      </div>
                      <span className="text-[9px] font-bold text-cyan-400">PDF Render</span>
                    </div>

                  </div>
                  
                  {p.pdfUrl && (
                    <a
                      href={p.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 w-full py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 rounded-xl text-center text-xs font-bold text-white shadow-md hover:shadow-lg transition duration-200"
                    >
                      Read Research PDF
                    </a>
                  )}
                </div>
              )}

              {/* 2. Savant AI Agent Graphic */}
              {p.previewType === "savant-arch" && (
                <div className="relative w-full h-full flex flex-col justify-between space-y-4 font-sans text-xs">
                  <div className="text-center font-black tracking-widest text-[10px] text-cyan-400/80 uppercase">Multi-Agent System Blueprint</div>
                  <div className="flex flex-col space-y-3 relative z-10">
                    
                    <div className="grid grid-cols-5 items-center gap-2 p-2 bg-zinc-950/40 border border-zinc-800 rounded-xl">
                      <span className="col-span-2 text-zinc-300 font-bold">1. Learning Goal</span>
                      <span className="text-zinc-500 font-black text-center">➔</span>
                      <span className="col-span-2 text-cyan-400 font-black text-right">Orchestrator</span>
                    </div>

                    <div className="p-3 bg-cyan-500/5 border border-cyan-500/10 rounded-xl space-y-2">
                      <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">2. Concurrent Scrapers</div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-1 bg-black/40 border border-zinc-800 text-[10px] text-center rounded text-zinc-300 font-bold">YouTube API</div>
                        <div className="p-1 bg-black/40 border border-zinc-800 text-[10px] text-center rounded text-zinc-300 font-bold">arXiv API</div>
                        <div className="p-1 bg-black/40 border border-zinc-800 text-[10px] text-center rounded text-zinc-300 font-bold">Wiki Scrape</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-5 items-center gap-2 p-2 bg-zinc-950/40 border border-zinc-800 rounded-xl">
                      <span className="col-span-2 text-zinc-300 font-bold">3. Raw Output</span>
                      <span className="text-zinc-500 font-black text-center">➔</span>
                      <span className="col-span-2 text-yellow-400 font-black text-right">Gemini Verifier</span>
                    </div>

                    <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-between">
                      <span className="font-bold text-zinc-200">4. Interactive Course Workspace</span>
                      <span className="text-blue-400 font-bold">Live</span>
                    </div>

                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={p.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-center text-xs font-bold text-white shadow-md hover:shadow-lg transition duration-200"
                    >
                      Visit Course App
                    </a>
                  </div>
                </div>
              )}

              {/* 3. Distributed Rate Limiter gRPC Design */}
              {p.previewType === "limiter-arch" && (
                <div className="relative w-full h-full flex flex-col justify-between space-y-4 font-sans text-xs">
                  <div className="text-center font-black tracking-widest text-[10px] text-orange-400/80 uppercase">Distributed gRPC Lease Flow</div>
                  
                  <div className="relative flex-1 flex flex-col justify-center space-y-4">
                    
                    {/* Top coordinator */}
                    <div className="mx-auto w-3/4 p-2 bg-red-500/10 border border-red-500/25 rounded-xl text-center shadow-inner">
                      <div className="text-[10px] text-red-400 font-extrabold uppercase">Master Coordinator</div>
                      <div className="text-[9px] text-zinc-500">Authoritative Token Pool</div>
                    </div>

                    {/* Bi-directional arrows */}
                    <div className="flex justify-around px-8 -my-2 text-[10px] text-zinc-600 font-black">
                      <span>▲ gRPC lease</span>
                      <span>▼ lease size</span>
                    </div>

                    {/* Client Node distribution */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-2.5 bg-orange-500/5 border border-orange-500/20 rounded-xl text-center">
                        <div className="text-[10px] text-orange-400 font-bold">Edge Node A</div>
                        <div className="text-[8px] text-zinc-500 mt-0.5">Lease Pool Cache</div>
                      </div>
                      <div className="p-2.5 bg-orange-500/5 border border-orange-500/20 rounded-xl text-center">
                        <div className="text-[10px] text-orange-400 font-bold">Edge Node B</div>
                        <div className="text-[8px] text-zinc-500 mt-0.5">Lease Pool Cache</div>
                      </div>
                    </div>

                  </div>

                  <div className="p-2 bg-black/60 border border-zinc-900 rounded-lg text-[9px] font-mono text-zinc-500 text-center uppercase tracking-wide">
                    Tokio Thread Runtime • Tonic gRPC Protocol
                  </div>
                </div>
              )}

              {/* 4. CineStream Hybrid Recommender ML Pipeline */}
              {p.previewType === "recommend-arch" && (
                <div className="relative w-full h-full flex flex-col justify-between space-y-4 font-sans text-xs">
                  <div className="text-center font-black tracking-widest text-[10px] text-green-400/80 uppercase">Hybrid ML Recommendation Engine</div>
                  
                  <div className="flex-1 flex flex-col justify-center space-y-3">
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-2.5 bg-green-500/5 border border-green-500/20 rounded-xl">
                        <div className="text-[10px] font-bold text-zinc-200">Collaborative filtering</div>
                        <div className="text-[9px] text-zinc-500 mt-0.5">Truncated SVD SGD</div>
                      </div>
                      <div className="p-2.5 bg-green-500/5 border border-green-500/20 rounded-xl">
                        <div className="text-[10px] font-bold text-zinc-200">Content Similarity</div>
                        <div className="text-[9px] text-zinc-500 mt-0.5">TF-IDF + Cosine</div>
                      </div>
                    </div>

                    <div className="flex justify-center font-black text-green-500/60 -my-1">▼</div>

                    <div className="p-2.5 bg-green-500/10 border border-green-500/25 rounded-xl text-center">
                      <div className="font-extrabold text-zinc-200">Ensemble Predictor (HybridRecommender)</div>
                      <div className="text-[9px] text-zinc-400 mt-0.5">Bayesian Bias Shrinkage Regularization</div>
                    </div>

                    <div className="flex justify-center font-black text-green-500/60 -my-1">▼</div>

                    <div className="p-2 bg-black/40 border border-zinc-800/80 rounded-lg text-center text-[10px]">
                      <span className="text-green-400 font-bold">XAI:</span> Rating Breakdown & Feature Importance
                    </div>

                  </div>

                  <a
                    href={p.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 rounded-xl text-center text-xs font-bold text-white shadow-md hover:shadow-lg transition duration-200"
                  >
                    Open Live Portal
                  </a>
                </div>
              )}

              {/* 5. Expense Tracker Stack Graphic */}
              {p.previewType === "tracker-arch" && (
                <div className="relative w-full h-full flex flex-col justify-between space-y-4 font-sans text-xs">
                  <div className="text-center font-black tracking-widest text-[10px] text-pink-400/80 uppercase">MERN Full-Stack Ingestion</div>
                  
                  <div className="flex-1 flex flex-col justify-center space-y-2.5">
                    
                    <div className="p-2.5 bg-pink-500/5 border border-pink-500/20 rounded-xl flex items-center justify-between">
                      <span className="font-bold text-zinc-200">React Client UI</span>
                      <span className="text-zinc-500 text-[10px]">Recharts & Chart.js</span>
                    </div>

                    <div className="flex justify-center font-black text-pink-500/50 -my-1.5">▼</div>

                    <div className="p-2.5 bg-pink-500/10 border border-pink-500/25 rounded-xl flex items-center justify-between">
                      <span className="font-bold text-zinc-200">Express / Node Service</span>
                      <span className="px-2 py-0.5 bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[9px] font-bold rounded">Argon2 / JWT</span>
                    </div>

                    <div className="flex justify-center font-black text-pink-500/50 -my-1.5">▼</div>

                    <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-between">
                      <span className="font-bold text-zinc-300">MongoDB Datastore</span>
                      <span className="text-zinc-500 text-[9px]">Receipt Storage</span>
                    </div>

                  </div>

                  <a
                    href={p.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 rounded-xl text-center text-xs font-bold text-white shadow-md hover:shadow-lg transition duration-200"
                  >
                    Open Expense App
                  </a>
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
