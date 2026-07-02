import React, { useState, useEffect, useRef } from "react";

/* ─── Intersection observer hook ─── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

/* ─────────────────────────────────────────────────────────────────
   All icons reference /icons/*.svg (downloaded to public/icons/).
   They are served locally — zero CDN, always instantly visible.
   Dark-background icons (GitHub, Express, Rust, Next.js, Flask,
   Vercel) get the `invert` class so they show on the dark card bg.
   ───────────────────────────────────────────────────────────────── */
const SKILL_ICONS = {
  // Languages
  JavaScript:    { src: "/icons/js.svg" },
  TypeScript:    { src: "/icons/ts.svg" },
  "C/C++":       { src: "/icons/cpp.svg" },
  Python:        { src: "/icons/python.svg" },
  Java:          { src: "/icons/java.svg" },
  Rust:          { src: "/icons/rust.svg",    invert: true },

  // Libraries
  React:         { src: "/icons/react.svg" },
  NumPy:         { src: "/icons/numpy.svg" },
  Pandas:        { src: "/icons/pandas.svg" },
  "Scikit-learn":{ src: "/icons/sklearn.svg" },

  // Frameworks
  "Next.js":     { src: "/icons/nextjs.svg",  invert: true },
  "Express.js":  { src: "/icons/express.svg", invert: true },
  FastAPI:       { src: "/icons/fastapi.svg" },
  Flask:         { src: "/icons/flask.svg",   invert: true },
  "Tailwind CSS":{ src: "/icons/tailwind.svg" },
  Vite:          { src: "/icons/vite.svg" },

  // Databases
  MongoDB:       { src: "/icons/mongodb.svg" },
  PostgreSQL:    { src: "/icons/postgresql.svg" },
  SQLite:        { src: "/icons/sqlite.svg" },
  Redis:         { src: "/icons/redis.svg" },
  MySQL:         { src: "/icons/mysql.svg" },
  Supabase:      { src: "/icons/supabase.svg" },

  // Tools
  "Node.js":     { src: "/icons/nodejs.svg" },
  Git:           { src: "/icons/git.svg" },
  GitHub:        { src: "/icons/github.svg",  invert: true },
  "VS Code":     { src: "/icons/vscode.svg" },
  Postman:       { src: "/icons/postman.svg" },
  Vercel:        { src: "/icons/vercel.svg",  invert: true },
  Render:        { src: null }, // inline SVG fallback
  Antigravity:   { src: null }, // inline SVG fallback
};

/* ─── Category data ─── */
const categories = [
  {
    id: "languages",
    label: "Languages",
    emoji: "⌨️",
    color: "text-yellow-400",
    border: "border-yellow-500/20",
    bg: "bg-yellow-500/5",
    glow: "hover:shadow-[0_0_28px_rgba(234,179,8,0.1)]",
    skills: ["JavaScript", "TypeScript", "C/C++", "Python", "Java", "Rust"],
  },
  {
    id: "libraries",
    label: "Libraries",
    emoji: "📦",
    color: "text-rose-400",
    border: "border-rose-500/20",
    bg: "bg-rose-500/5",
    glow: "hover:shadow-[0_0_28px_rgba(244,63,94,0.1)]",
    skills: ["React", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    emoji: "🏗️",
    color: "text-pink-400",
    border: "border-pink-500/20",
    bg: "bg-pink-500/5",
    glow: "hover:shadow-[0_0_28px_rgba(236,72,153,0.1)]",
    skills: ["Next.js", "Express.js", "FastAPI", "Flask", "Tailwind CSS", "Vite"],
  },
  {
    id: "databases",
    label: "Databases & Caching",
    emoji: "🗄️",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    glow: "hover:shadow-[0_0_28px_rgba(52,211,153,0.1)]",
    skills: ["MongoDB", "PostgreSQL", "SQLite", "Redis", "MySQL", "Supabase"],
  },
  {
    id: "tools",
    label: "Dev Tools & Runtimes",
    emoji: "🔧",
    color: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    glow: "hover:shadow-[0_0_28px_rgba(168,85,247,0.1)]",
    skills: ["Node.js", "Git", "GitHub", "VS Code", "Postman", "Vercel", "Render", "Antigravity"],
  },
];

/* ─── Render SVG (Fallback for items without a local icon) ─── */
function RenderSVG() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <rect width="128" height="128" rx="12" fill="#46E3B7"/>
      <text fill="#fff" fontSize="52" fontWeight="900" x="50%" y="55%" dominantBaseline="middle" textAnchor="middle">R</text>
    </svg>
  );
}

/* ─── Antigravity SVG ─── */
function AntigravitySVG() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <circle cx="64" cy="64" r="60" fill="none" stroke="#818CF8" strokeWidth="3" strokeDasharray="8 5"/>
      <circle cx="64" cy="64" r="38" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="4 3" opacity=".6"/>
      <circle cx="64" cy="64" r="14" fill="#6366F1" opacity=".9"/>
      <circle cx="64" cy="64" r="7" fill="#C7D2FE"/>
      <line x1="64" y1="4"   x2="64"  y2="22"  stroke="#818CF8" strokeWidth="3" strokeLinecap="round"/>
      <line x1="64" y1="106" x2="64"  y2="124" stroke="#818CF8" strokeWidth="3" strokeLinecap="round"/>
      <line x1="4"  y1="64"  x2="22"  y2="64"  stroke="#818CF8" strokeWidth="3" strokeLinecap="round"/>
      <line x1="106" y1="64" x2="124" y2="64"  stroke="#818CF8" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

/* ─── Skill chip ─── */
function SkillChip({ name, delay = 0, vis }) {
  const icon = SKILL_ICONS[name];

  const renderIcon = () => {
    if (name === "Antigravity") return <AntigravitySVG />;
    if (name === "Render") return <RenderSVG />;
    if (!icon?.src) return <span className="text-xs font-black text-zinc-400">{name[0]}</span>;

    return (
      <img
        src={icon.src}
        alt={name}
        loading="eager"
        decoding="sync"
        className={`w-full h-full object-contain transition duration-150 group-hover:brightness-110 ${icon.invert ? "invert brightness-[2]" : ""}`}
      />
    );
  };

  return (
    <div
      className={`flex flex-col items-center gap-2 group cursor-default transition-all duration-500 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${delay}ms` }}
      title={name}
    >
      <div className="w-14 h-14 bg-white/4 border border-white/8 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/6 rounded-2xl flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(99,102,241,0.25)] p-2.5 overflow-hidden">
        {renderIcon()}
      </div>
      <span className="text-[10px] text-zinc-400 group-hover:text-zinc-100 font-semibold text-center tracking-wide w-16 truncate transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}

/* ─── Category card ─── */
function CategoryCard({ cat, activeFilter }) {
  const [ref, vis] = useReveal(0.08);
  const isActive   = activeFilter === "all" || activeFilter === cat.id;

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-25 scale-[0.97] pointer-events-none"}`}
    >
      <div className={`${cat.bg} ${cat.border} border rounded-2xl p-6 h-full flex flex-col ${cat.glow} transition-all duration-300`}>

        {/* Header */}
        <div className="flex items-center gap-2 mb-5 pb-3 border-b border-white/5">
          <span className="text-xl">{cat.emoji}</span>
          <h3 className={`text-sm font-black tracking-wider uppercase ${cat.color}`}>{cat.label}</h3>
          <span className={`ml-auto text-[10px] font-bold opacity-50 ${cat.color}`}>{cat.skills.length}</span>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-5 flex-1">
          {cat.skills.map((name, i) => (
            <SkillChip key={name} name={name} delay={i * 55} vis={vis} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main section ─── */
const SkillTower = () => {
  const [filter, setFilter]   = useState("all");
  const [titleRef, titleVis]  = useReveal(0.2);

  const tabs = [
    { id: "all",       label: "All" },
    ...categories.map((c) => ({ id: c.id, label: c.label })),
  ];

  return (
    <section id="skills" className="relative bg-[#06040f] text-white py-28 px-6 overflow-hidden">

      {/* Background decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] bg-indigo-600/4 rounded-full blur-[160px] top-0 left-1/2 -translate-x-1/2"/>
        <div className="absolute w-[500px] h-[500px] bg-purple-700/4 rounded-full blur-[120px] bottom-0 right-0"/>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px]"/>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Title */}
        <div
          ref={titleRef}
          className={`mb-12 text-center transition-all duration-700 ${titleVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-3">My Toolkit</p>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
            System Stack &amp; Tools
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-indigo-500/40"/>
            <div className="w-2 h-2 bg-purple-500 rounded-full"/>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-indigo-500/40"/>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === tab.id
                  ? "bg-indigo-500 text-white shadow-[0_0_16px_rgba(99,102,241,0.4)]"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/8"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} activeFilter={filter} />
          ))}
        </div>

        {/* Footer count */}
        <div className="mt-10 text-center text-zinc-600 text-[11px] font-bold uppercase tracking-widest">
          {categories.reduce((s, c) => s + c.skills.length, 0)} technologies across{" "}
          {categories.length} categories
        </div>
      </div>
    </section>
  );
};

export default SkillTower;
