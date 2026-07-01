import React from "react";

// In-line SVG dictionary to ensure 100% beautiful, consistent, glowing vector icons for all skills
const SKILL_ICONS = {
  // Languages
  JavaScript: (
    <svg className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3m12.525 15c.61 0 1.096-.201 1.458-.6.362-.4.543-.97.543-1.71v-2.03h-1.533v2.002c0 .35-.084.6-.252.75-.168.15-.417.225-.747.225-.33 0-.583-.07-.756-.21-.173-.14-.26-.388-.26-.745v-4.042h-1.533v4.116c0 .737.19 1.309.57 1.715.38.406.883.609 1.51.609m-5.815 0c.66 0 1.183-.173 1.57-.52.387-.347.58-.891.58-1.633v-4.707h-1.528v4.732c0 .324-.078.56-.234.71-.156.15-.392.225-.707.225-.308 0-.547-.075-.717-.225-.17-.15-.255-.386-.255-.71v-4.732H6.18v4.707c0 .742.193 1.286.58 1.633.387.347.91.52 1.57.52z"/>
    </svg>
  ),
  TypeScript: (
    <svg className="w-10 h-10 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3m12.285 15c.61 0 1.097-.201 1.46-.6.362-.4.543-.97.543-1.71v-2.03h-1.533v2.002c0 .35-.084.6-.252.75-.168.15-.417.225-.747.225-.33 0-.583-.07-.756-.21-.173-.14-.26-.388-.26-.745v-4.042h-1.533v4.116c0 .737.19 1.309.57 1.715.38.406.883.609 1.51.609m-4.57-2.613v2.463c0 .747-.56 1.15-1.587 1.15-.997 0-1.554-.424-1.554-1.15V15.38h1.492v2.247c0 .245.163.385.45.385.295 0 .438-.13.438-.385V11.26h-3.83v-1.63h5.33v5.757z"/>
    </svg>
  ),
  "C/C++": (
    <svg className="w-10 h-10 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Python: (
    <svg className="w-10 h-10 text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.97 2C6.464 2 6.57 4.384 6.57 5.4v2.09h5.534v.77H4.42c-1.026 0-3.42.063-3.42 5.568 0 5.506 2.052 5.438 3.078 5.438h1.795v-2.525c0-1.077.896-2.02 2.051-2.02h5.535c1.026 0 1.795-.943 1.795-2.02V7.121c0-1.078-.718-5.121-5.295-5.121zm5.438 6.223v2.525c0 1.077-.897 2.02-2.051 2.02H9.821c-1.025 0-1.794.943-1.794 2.02v5.016c0 1.077.718 5.121 5.295 5.121 5.506 0 5.4-2.384 5.4-3.4v-2.09h-5.534v-.77h7.684c1.026 0 3.42-.063 3.42-5.568 0-5.506-2.052-5.438-3.078-5.438h-1.795z"/>
    </svg>
  ),
  Java: (
    <svg className="w-10 h-10 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8zM6 2v3M10 2v3M14 2v3" />
    </svg>
  ),
  Rust: (
    <svg className="w-10 h-10 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 4v3h2.5V6H13zm-5.5 0v3H10V6H7.5zM6 10.5V13H3.5v-2.5H6zm14.5 0V13H18v-2.5h2.5zM13 15v3h-2.5v-3H13zm-5.5 0v3H5v-3h2.5z"/>
    </svg>
  ),

  // Libraries
  NumPy: (
    <svg className="w-10 h-10 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M12 3v18M8 3v18M16 3v18" />
    </svg>
  ),
  Pandas: (
    <svg className="w-10 h-10 text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="3" width="7" height="18" rx="1" />
      <rect x="14" y="3" width="7" height="8" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  "Scikit-learn": (
    <svg className="w-10 h-10 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
    </svg>
  ),
  "Chart.js": (
    <svg className="w-10 h-10 text-rose-400 drop-shadow-[0_0_8px_rgba(251,113,133,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 20V10M12 20V4M6 20v-6" strokeWidth="2.5" />
    </svg>
  ),
  PyMuPDF: (
    <svg className="w-10 h-10 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  DashMap: (
    <svg className="w-10 h-10 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  ),
  SQLAlchemy: (
    <svg className="w-10 h-10 text-amber-600 drop-shadow-[0_0_8px_rgba(217,119,6,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
    </svg>
  ),
  "Prost (Protobuf)": (
    <svg className="w-10 h-10 text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v8M12 14v8M5 12h14M8 5l8 14M8 19L16 5" />
    </svg>
  ),
  asyncpg: (
    <svg className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),

  // Frameworks
  React: (
    <svg className="w-10 h-10 text-cyan-400 animate-spin-slow drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-1.12-.9-2.02-2.02-2.02H18c0-.62-.12-1.22-.35-1.78l1.43-1.43c.8-.8.8-2.08 0-2.88a2.03 2.03 0 0 0-2.88 0l-1.43 1.43A4.85 4.85 0 0 0 13 5.06V4.02C13 2.9 12.1 2 10.98 2c-1.12 0-2.02.9-2.02 2.02v1.04a4.85 4.85 0 0 0-1.78.35L5.75 4a2.03 2.03 0 0 0-2.88 0c-.8.8-.8 2.08 0 2.88l1.43 1.43c-.23.56-.35 1.16-.35 1.78H3.02C1.9 10.09 1 11 1 12.12c0 1.12.9 2.02 2.02 2.02H5c0 .62.12 1.22.35 1.78l-1.43 1.43a2.03 2.03 0 0 0 0 2.88 2.03 2.03 0 0 0 2.88 0l1.43-1.43c.56.23 1.16.35 1.78.35v1.04c0 1.12.9 2.02 2.02 2.02a2.03 2.03 0 0 0 2.02-2.02v-1.04c.62 0 1.22-.12 1.78-.35l1.43 1.43a2.03 2.03 0 0 0 2.88 0c.8-.8.8-2.08 0-2.88l-1.43-1.43c.23-.56.35-1.16.35-1.78h1.04C23.1 14.16 24 13.25 24 12.13v-.13zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
    </svg>
  ),
  "Next.js": (
    <svg className="w-10 h-10 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2zm4.5 14.5L12 11V9.5h.5l4 5zM12 8.5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 8.5z" />
    </svg>
  ),
  "Express.js": (
    <svg className="w-10 h-10 text-zinc-300 drop-shadow-[0_0_6px_rgba(212,212,216,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="5" width="20" height="6" rx="1" />
      <rect x="2" y="13" width="20" height="6" rx="1" />
      <circle cx="6" cy="8" r="1" />
      <circle cx="6" cy="16" r="1" />
    </svg>
  ),
  FastAPI: (
    <svg className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 13h9v9l10-11h-9V2z" />
    </svg>
  ),
  "Node.js": (
    <svg className="w-10 h-10 text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm7 13.9L12 19.8l-7-3.9V8.1l7-3.9 7 3.9v7.8z"/>
    </svg>
  ),
  Flask: (
    <svg className="w-10 h-10 text-zinc-400 drop-shadow-[0_0_6px_rgba(156,163,175,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 3h6M12 3v6M6 14a6 6 0 1 0 12 0V9H6v5z" />
    </svg>
  ),
  "Tonic (gRPC)": (
    <svg className="w-10 h-10 text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M5 3h14v4H5zM8 7v14M16 7v14M12 7v7M4 14h16" />
    </svg>
  ),
  "Tokio (Async Runtime)": (
    <svg className="w-10 h-10 text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),

  // Databases & Cache
  MongoDB: (
    <svg className="w-10 h-10 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .053c-.3 0-.6.1-.9.3-1.6 1.3-4.1 4.3-5.2 7-1.1 2.8-.7 5.7-.3 7.8.6 3.1 2.6 5.8 5.5 8 1-.8 1.9-1.7 2.8-2.7.9-1 1.6-2 2.2-3.1 1.2-2.2 1.5-4.8 1.4-7.4-.1-2.6-.9-5.1-2.1-7.4-.8-1.5-1.9-2.8-3.1-3.9-.2-.2-.5-.3-.9-.3z"/>
    </svg>
  ),
  PostgreSQL: (
    <svg className="w-10 h-10 text-sky-500 drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm.8 4.2c1.7 0 3 1.2 3.1 2.8a2.9 2.9 0 0 1-2.9 2.9H12v-5.7h.8zm-2.8 0h1v5.7h-1v-5.7zm0 7.7h5.6a2.9 2.9 0 0 1 0 5.8H10v-5.8z"/>
    </svg>
  ),
  SQLite: (
    <svg className="w-10 h-10 text-sky-600 drop-shadow-[0_0_8px_rgba(2,132,199,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  Redis: (
    <svg className="w-10 h-10 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Supabase: (
    <svg className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L4 12h7v10l8-10h-7V2z" />
    </svg>
  ),

  // Developer Tools
  Git: (
    <svg className="w-10 h-10 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M6 9v6M9 6h5a3 3 0 0 1 3 3v6" />
    </svg>
  ),
  GitHub: (
    <svg className="w-10 h-10 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  "VS Code": (
    <svg className="w-10 h-10 text-sky-500 drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.984 6.342a.56.56 0 0 0-.276-.464L18.423.861a.57.57 0 0 0-.74.12l-7.39 9.388-3.904-2.923a.57.57 0 0 0-.7-.015L.892 11.238a.56.56 0 0 0-.015.892l4.896 3.805a.57.57 0 0 0 .693-.016l3.9-2.92 7.39 9.39a.57.57 0 0 0 .74.12l5.285-5.016a.56.56 0 0 0 .276-.464l-.273-10.687zm-14.77 6.16L5.753 9.778 3.033 11.68l2.72 1.902 3.46-2.61a.55.55 0 0 0 .001-.47z" />
    </svg>
  ),
  Postman: (
    <svg className="w-10 h-10 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
    </svg>
  ),
  Vercel: (
    <svg className="w-10 h-10 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  ),
  Render: (
    <svg className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Antigravity: (
    <svg className="w-12 h-12 text-indigo-400 animate-pulse drop-shadow-[0_0_15px_rgba(129,140,248,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Sci-fi levitating ring and core */}
      <circle cx="12" cy="12" r="8" className="animate-spin-slow" strokeDasharray="4 4" />
      <circle cx="12" cy="12" r="3" fill="currentColor" className="animate-ping-slow" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" />
    </svg>
  )
};

const categories = [
  {
    label: "Languages",
    color: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5",
    skills: ["JavaScript", "TypeScript", "C/C++", "Python", "Java", "Rust"]
  },
  {
    label: "Libraries",
    color: "text-rose-400 border-rose-500/20 bg-rose-500/5",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Chart.js",
      "PyMuPDF",
      "DashMap",
      "SQLAlchemy",
      "Prost (Protobuf)",
      "asyncpg"
    ]
  },
  {
    label: "Frameworks",
    color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    skills: [
      "React",
      "Next.js",
      "Express.js",
      "FastAPI",
      "Node.js",
      "Flask",
      "Tonic (gRPC)",
      "Tokio (Async Runtime)",
      "Tailwind CSS"
    ]
  },
  {
    label: "Databases & Caching",
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    skills: ["MongoDB", "PostgreSQL", "SQLite", "Redis", "Supabase"]
  },
  {
    label: "Developer Tools",
    color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Render",
      "Antigravity"
    ]
  }
];

const SkillTower = () => {
  return (
    <section className="relative bg-[#07050f] text-white py-24 flex flex-col items-center px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] top-0 left-1/2 -translate-x-1/2 opacity-30 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-purple-700/5 rounded-full blur-[100px] bottom-0 right-1/2 translate-x-1/3 opacity-30" />
      </div>

      {/* Title */}
      <div className="relative z-10 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
          System Stack & Tools
        </h2>
        <div className="w-1 h-8 bg-indigo-500/30 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {categories.map((cat) => (
          <div key={cat.label} className="w-full">
            <div className={`border rounded-2xl p-6 backdrop-blur-xl h-full flex flex-col hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)] transition-all duration-300 ${cat.color}`}>
              <h3 className="text-lg font-black tracking-wider uppercase mb-6 text-center border-b border-white/5 pb-3">
                {cat.label}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-6">
                {cat.skills.map((name) => (
                  <div
                    key={name}
                    className="flex flex-col items-center justify-between w-20 group cursor-pointer transition-transform duration-300 hover:scale-110"
                    title={name}
                  >
                    <div className="w-14 h-14 bg-black/40 border border-white/5 group-hover:border-white/15 rounded-xl flex items-center justify-center mb-2 transition-all duration-200">
                      {SKILL_ICONS[name] || (
                        <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[10px] text-zinc-400 font-bold group-hover:text-zinc-200 text-center tracking-wide overflow-hidden text-ellipsis w-full truncate">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillTower;
