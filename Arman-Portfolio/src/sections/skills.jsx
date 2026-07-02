import React, { useState, useEffect, useRef } from "react";

/* ─── Intersection observer hook ─── */
function useReveal(threshold = 0.1) {
  const ref     = useRef(null);
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

/* ─────────────────────────────────────────────────────────────
   ALL ICONS ARE INLINE SVG COMPONENTS — zero network requests
   ───────────────────────────────────────────────────────────── */
const Icons = {
  // Languages
  JavaScript: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#F7DF1E" d="M0 0h128v128H0z"/>
      <path fill="#323330" d="M114 10.9H10.9V114H114V10.9zM80.5 98.5c0 7.8-4.6 11.3-11.3 11.3-5.9 0-9.3-3.1-11-7.1l6.1-3.7c1.2 2.1 2.3 3.9 4.9 3.9 2.5 0 4.1-1 4.1-4.8V63.1h7.2v35.4zm18.7 11.3c-6.9 0-11.3-3.3-13.5-7.6l6.1-3.5c1.6 2.6 3.7 4.5 7.4 4.5 3.1 0 5.1-1.6 5.1-3.7 0-2.6-2-3.5-5.5-5l-1.9-.8c-5.4-2.3-9-5.2-9-11.3 0-5.6 4.3-9.9 11-9.9 4.8 0 8.2 1.7 10.7 6l-5.9 3.8c-1.3-2.3-2.7-3.2-4.9-3.2-2.2 0-3.6 1.4-3.6 3.2 0 2.2 1.4 3.1 4.6 4.5l1.9.8c6.4 2.7 10 5.5 10 11.8 0 6.7-5.3 10.4-12.5 10.4z"/>
    </svg>
  ),
  TypeScript: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#3178C6" d="M0 0h128v128H0z"/>
      <path fill="#fff" d="M57.3 70.5H71v-7.3H35.8v7.3h13.6V107H57.3V70.5zm25.7-7.3v43.8h7.9V89.5h16.3v-7.3H90.9V70.5h18.9v-7.3H83z"/>
    </svg>
  ),
  "C/C++": ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#659AD3" d="M64 0L8.9 32v64L64 128l55.1-32V32z"/>
      <path fill="#fff" d="M64 24c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 12c8.3 0 15.7 3.4 21.1 8.9l-6.5 6.5C75.2 48 69.9 45.5 64 45.5c-10.2 0-18.5 8.3-18.5 18.5S53.8 82.5 64 82.5c7.1 0 13.3-4 16.5-9.9H64v-9.1h27.7c.3 1.5.4 3 .4 4.5 0 15.5-12.6 28-28 28s-28-12.5-28-28 12.5-28 28-28z"/>
      <text fill="#fff" fontSize="28" fontWeight="bold" x="78" y="76">+</text>
      <text fill="#fff" fontSize="28" fontWeight="bold" x="95" y="76">+</text>
    </svg>
  ),
  Python: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.5 5C38.6 5 40 16 40 16v20h24v6H24S5 39.7 5 64.9c0 25.2 14 24.3 14 24.3h8v-11.7s-.4-14 13.7-14H72s13.3.2 13.3-13V19.3S87.4 5 63.5 5z"/>
      <circle fill="#FFD43B" cx="51" cy="28" r="4"/>
      <path fill="#FFD43B" d="M64.5 123c24.9 0 23.5-11 23.5-11V92H64v-6h40S123 88.3 123 63.1c0-25.2-14-24.3-14-24.3h-8v11.7s.4 14-13.7 14H56s-13.3-.2-13.3 13v24.2S40.6 123 64.5 123z"/>
      <circle fill="#3776AB" cx="77" cy="100" r="4"/>
    </svg>
  ),
  Java: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#EA2D2E" d="M47.6 76.4s-3.3 1.9 2.3 2.5c6.7.8 10.1.7 17.5-.7 0 0 1.9 1.2 4.6 2.3-16.4 7-37.1-.4-24.4-4.1z"/>
      <path fill="#EA2D2E" d="M45.4 67.2s-3.7 2.7 1.9 3.3c7.2.7 12.9.8 22.7-1.1 0 0 1.3 1.4 3.4 2.1-20.1 5.9-42.5.5-28-4.3z"/>
      <path fill="#EA2D2E" d="M59.3 48.7c4.1 4.7-1.1 8.9-1.1 8.9s10.4-5.4 5.6-12.1c-4.4-6.2-7.8-9.3 10.6-19.9 0 .1-29 7.3-15.1 23.1z"/>
      <path fill="#EA2D2E" d="M80.7 83.8s2.4 2-2.7 3.5c-9.7 2.9-40.4 3.8-48.9.1-3.1-1.3 2.7-3.2 4.5-3.5 1.9-.4 2.9-.3 2.9-.3-3.3-2.3-21.6 4.6-9.3 6.6 33.6 5.4 61.2-2.4 53.5-6.4z"/>
      <path fill="#EA2D2E" d="M49 55.2s-15.2 3.6-5.4 4.9c4.2.6 12.5.4 20.2-.2 6.3-.5 12.7-1.5 12.7-1.5s-2.2 1-3.8 2c-15.4 4.1-45.1 2.2-36.6-1.9 7.2-3.5 12.9-3.3 12.9-3.3z"/>
      <path fill="#EA2D2E" d="M73.9 71.8c15.7-8.2 8.4-16 3.3-14.9-1.2.3-1.8.5-1.8.5s.5-.7 1.4-1c10.5-3.7 18.6 10.9-3.2 16.7 0 0 .2-.2.3-.3z"/>
      <path fill="#EA2D2E" d="M55.3 94.5s1.9 1.6-2.1 2.8c-7.6 2.3-31.7 3-38.4.1-2.4-1 2.1-2.4 3.5-2.7 1.4-.3 2.2-.2 2.2-.2-2.6-1.8-16.8 3.6-7.2 5.1 26.1 4.3 47.6-1.9 42-5.1z"/>
    </svg>
  ),
  Rust: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="#CE422B">
      <path d="M63.8 6.1a57.7 57.7 0 1 0 0 115.4A57.7 57.7 0 0 0 63.8 6.1zm0 110A52.3 52.3 0 1 1 63.8 11a52.3 52.3 0 0 1 0 104.6z"/>
      <path d="M56.4 46.2h15.2v7.8H56.4zM56.4 74.1h15.2V82H56.4zM46.2 56.4v15.2h-7.8V56.4zM89.6 56.4v15.2h-7.8V56.4z"/>
      <path d="M63.8 50a14 14 0 1 0 0 28 14 14 0 0 0 0-28zm0 22a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
    </svg>
  ),

  // Libraries
  React: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
      <g fill="none" stroke="#61DAFB" strokeWidth="5">
        <ellipse rx="42" ry="16" cx="64" cy="64"/>
        <ellipse rx="42" ry="16" cx="64" cy="64" transform="rotate(60 64 64)"/>
        <ellipse rx="42" ry="16" cx="64" cy="64" transform="rotate(120 64 64)"/>
      </g>
    </svg>
  ),
  NumPy: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" fill="#4DABCF" rx="10"/>
      <path fill="#fff" d="M20 44l28-16v32L20 76zM76 28l28 16v32L76 60zM48 76l28-16 28 16-28 16z"/>
    </svg>
  ),
  Pandas: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" fill="#150458" rx="10"/>
      <text fill="#E70488" fontSize="72" fontWeight="bold" x="14" y="90">pd</text>
    </svg>
  ),
  "Scikit-learn": ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" fill="#F7931E" rx="10"/>
      <path fill="#fff" d="M64 20c-24.3 0-44 19.7-44 44s19.7 44 44 44 44-19.7 44-44-19.7-44-44-44zm0 10a34 34 0 1 1 0 68A34 34 0 0 1 64 30z"/>
      <circle cx="64" cy="64" r="16" fill="#fff"/>
    </svg>
  ),

  // Frameworks
  "Next.js": ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="white">
      <circle cx="64" cy="64" r="64" fill="#000"/>
      <path d="M70.5 41.5L97 86.5H44l26.5-45zm-2 9.7L49.6 82.5h37.7L68.5 51.2z" fill="#fff"/>
      <path d="M88 74.5v-33h8.5v44.7L88 74.5z" fill="url(#ng)"/>
      <defs><linearGradient id="ng" x1="88" y1="41.5" x2="96.5" y2="86.2" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient></defs>
    </svg>
  ),
  "Express.js": ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="#fff">
      <path d="M126.7 111.5c-7 3.8-13.4 1.5-17.5-5L91 78l-2.5-3.7L69.8 105c-4 7-10.5 9.3-17 5.4l47-64.8-43.8-55.2c6.8-3.4 13.3-.9 17.3 5.7l18.8 29.5 19.3-29.5c4-6.7 10.6-9.3 17-5.4l-25.5 34.6 4.3 5.4 44.5 60.8z"/>
      <path d="M1.8 63.7l5.4-25.5C12.3 18.6 35.4 9.4 52.2 20.9c10.1 6.8 12.9 17 12.4 28.5H10.1c-1.3 19.9 13.5 28.2 27.3 24.2 6.3-1.8 10.2-6.1 12.9-12.1l10.8 3.7c-4.8 11.9-13.6 18.8-26.2 20-18.3 1.7-31.4-8.4-33.1-21.5zm10.4-10.8h44.7c-.4-14-9.5-20.8-21.3-20-12.1.8-20.3 8-23.4 20z"/>
    </svg>
  ),
  FastAPI: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" fill="#009688" rx="10"/>
      <path fill="#fff" d="M64 16c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 8a40 40 0 1 1 0 80A40 40 0 0 1 64 24z"/>
      <path fill="#fff" d="M72 36L44 68h24l-8 24 32-36H68z"/>
    </svg>
  ),
  Flask: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="white">
      <path d="M53 14h22l5 28h11l-6 72H43L37 42h11zm2 8l4 20h10l-4-20H55zm9 34c-13.5 0-24 5.4-24 12s10.5 12 24 12 24-5.4 24-12-10.5-12-24-12z" fill="#555"/>
    </svg>
  ),
  "Tailwind CSS": ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#38B2AC" d="M64 16C41.9 16 30 26.2 30 46.6c0 13.4 7 21 21 22.4 0 13.4-7 21-21 22.4 22.1 0 34-10.2 34-30.6 0-13.4-7-21-21-22.4 0-13.4 7-21 21-22.4zM98 46.6C98 26.2 86.1 16 64 16c13.4 0 21 7 22.4 21 13.4 0 21 7 22.4 21C109.9 38.6 98.5 28.4 98 46.6zm0 44.8c-13.4 0-21-7-22.4-21C62.2 70.4 54.6 76.4 54.6 91.4 54.6 111.8 66.5 122 88.6 122c0-13.4 7-21 9.4-30.6z"/>
    </svg>
  ),
  Vite: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#646CFF" d="M126.2 8.4L67.7 119.2a3.2 3.2 0 0 1-5.6.1L1.5 8.4a3.2 3.2 0 0 1 3.3-4.7l59.4 10.6 59.6-10.6a3.2 3.2 0 0 1 2.4 4.7z"/>
      <path fill="#FF3E00" d="M92.3 3.9L64.3 57.2V125l51.8-88.8L92.3 3.9z"/>
    </svg>
  ),

  // Databases
  MongoDB: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#00ED64" d="M64 4c0 0-32 52.7-32 74.7C32 104 46.4 120 64 120s32-16 32-41.3C96 56.7 64 4 64 4z"/>
      <path fill="#00684A" d="M64 4S36.7 53 36.7 78.7c0 6.7 1.2 13 3.3 18.7L64 120V4z"/>
      <path fill="#00ED64" d="M64 120v-24c0 0 16-8 16-29.3C80 52 64 4 64 4v116z" opacity=".3"/>
      <rect fill="#00684A" x="60" y="98" width="8" height="20" rx="4"/>
    </svg>
  ),
  PostgreSQL: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <ellipse cx="64" cy="44" rx="38" ry="30" fill="#336791"/>
      <rect x="26" y="44" width="76" height="40" fill="#336791"/>
      <ellipse cx="64" cy="84" rx="38" ry="12" fill="#204f7a"/>
      <ellipse cx="64" cy="44" rx="38" ry="12" fill="#4a90c9"/>
      <path d="M48 44v28M64 44v28M80 44v28" stroke="#fff" strokeWidth="3" fill="none"/>
    </svg>
  ),
  SQLite: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" rx="10" fill="#0F80CC"/>
      <text fill="#fff" fontSize="30" fontWeight="bold" x="12" y="78">SQLite</text>
      <path fill="#fff" d="M16 90h96v4H16z"/>
    </svg>
  ),
  Redis: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" rx="10" fill="#A41E11"/>
      <text fill="#fff" fontSize="28" fontWeight="bold" x="16" y="78">Redis</text>
      <path fill="#fff" d="M16 88l48-12 48 12-48 12z"/>
    </svg>
  ),
  MySQL: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" rx="10" fill="#00758F"/>
      <text fill="#fff" fontSize="24" fontWeight="bold" x="10" y="78">MySQL</text>
    </svg>
  ),
  Supabase: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#3ECF8E" d="M68 8L14 76h54V8z"/>
      <path fill="#1C1C1C" d="M60 120l54-68H60v68z"/>
    </svg>
  ),

  // Tools
  "Node.js": ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#83CD29" d="M64 4L16 32v56l48 28 48-28V32L64 4z"/>
      <path fill="#404137" d="M64 4L16 32v56l48 28V4z" opacity=".3"/>
      <path fill="#fff" d="M54 84V44h8.5c8 0 12 4 12 12s-4 12-12 12H62v16H54zm8-24h2c3 0 4.5-1.5 4.5-4s-1.5-4-4.5-4H62v8z"/>
    </svg>
  ),
  Git: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#F1502F" d="M122.8 58.3L69.7 5.2a7.2 7.2 0 0 0-10.2 0L49.3 15.4l12.9 12.9c3-1 6.4-.3 8.8 2.1a8.5 8.5 0 0 1 2 8.9l12.4 12.4c2.8-1 6.2-.4 8.5 2a8.5 8.5 0 1 1-12 12c-2.5-2.5-3-6.2-1.7-9.2L68.5 44.7v33.1a8.5 8.5 0 1 1-7 .2V43.4a8.5 8.5 0 0 1-4.6-11.2L44.2 19.3 5.2 58.3a7.2 7.2 0 0 0 0 10.2l53.1 53.1a7.2 7.2 0 0 0 10.2 0l54.3-54.3a7.2 7.2 0 0 0 0-10z"/>
    </svg>
  ),
  GitHub: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="white">
      <path d="M64 5.1C31.4 5.1 5 31.6 5 64.2c0 26.2 17 48.4 40.6 56.2 3 .5 4.1-1.3 4.1-2.9v-10.2c-16.6 3.6-20.1-7.9-20.1-7.9-2.7-6.9-6.7-8.7-6.7-8.7-5.4-3.7.4-3.6.4-3.6 6 .4 9.2 6.2 9.2 6.2 5.3 9.1 14 6.5 17.4 5 .5-3.9 2.1-6.5 3.8-8-13.3-1.5-27.2-6.6-27.2-29.5 0-6.5 2.3-11.8 6.1-16-.6-1.5-2.7-7.6.6-15.8 0 0 5-1.6 16.4 6.1 4.8-1.3 9.9-2 14.9-2s10.2.7 14.9 2c11.4-7.7 16.4-6.1 16.4-6.1 3.3 8.3 1.2 14.4.6 15.8 3.8 4.2 6.1 9.5 6.1 16 0 22.9-14 28-27.3 29.5 2.2 1.8 4.1 5.5 4.1 11.1v16.4c0 1.6 1.1 3.4 4.1 2.9C106 112.6 123 90.3 123 64.2 123 31.6 96.6 5.1 64 5.1z"/>
    </svg>
  ),
  "VS Code": ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#0098FF" d="M94 4L48 50 22 30 4 42v44l18 12 26-20 46 46 26-12V16L94 4zm4 87L64 64l34-27v54z"/>
    </svg>
  ),
  Postman: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="60" fill="#FF6C37"/>
      <circle cx="64" cy="64" r="30" fill="#fff"/>
      <path fill="#FF6C37" d="M64 40v48M40 64h48" stroke="#FF6C37" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="64" cy="64" r="8" fill="#FF6C37"/>
    </svg>
  ),
  Vercel: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="white">
      <path d="M64 8L8 120h112L64 8z"/>
    </svg>
  ),
  Render: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" rx="12" fill="#46E3B7"/>
      <path d="M30 90V40l50 0c16 0 18 22 0 22H30M74 62l24 28" stroke="#fff" strokeWidth="10" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  Antigravity: ({ className }) => (
    <svg className={className} viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="60" fill="none" stroke="#818CF8" strokeWidth="3" strokeDasharray="8 5"/>
      <circle cx="64" cy="64" r="38" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="4 3" opacity=".6"/>
      <circle cx="64" cy="64" r="14" fill="#6366F1" opacity=".9"/>
      <circle cx="64" cy="64" r="7" fill="#C7D2FE"/>
      <line x1="64" y1="4" x2="64" y2="22" stroke="#818CF8" strokeWidth="3" strokeLinecap="round"/>
      <line x1="64" y1="106" x2="64" y2="124" stroke="#818CF8" strokeWidth="3" strokeLinecap="round"/>
      <line x1="4" y1="64" x2="22" y2="64" stroke="#818CF8" strokeWidth="3" strokeLinecap="round"/>
      <line x1="106" y1="64" x2="124" y2="64" stroke="#818CF8" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
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
    glow: "hover:shadow-[0_0_25px_rgba(234,179,8,0.1)]",
    skills: ["JavaScript","TypeScript","C/C++","Python","Java","Rust"],
  },
  {
    id: "libraries",
    label: "Libraries",
    emoji: "📦",
    color: "text-rose-400",
    border: "border-rose-500/20",
    bg: "bg-rose-500/5",
    glow: "hover:shadow-[0_0_25px_rgba(244,63,94,0.1)]",
    skills: ["React","NumPy","Pandas","Scikit-learn"],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    emoji: "🏗️",
    color: "text-pink-400",
    border: "border-pink-500/20",
    bg: "bg-pink-500/5",
    glow: "hover:shadow-[0_0_25px_rgba(236,72,153,0.1)]",
    skills: ["Next.js","Express.js","FastAPI","Flask","Tailwind CSS","Vite"],
  },
  {
    id: "databases",
    label: "Databases & Caching",
    emoji: "🗄️",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    glow: "hover:shadow-[0_0_25px_rgba(52,211,153,0.1)]",
    skills: ["MongoDB","PostgreSQL","SQLite","Redis","MySQL","Supabase"],
  },
  {
    id: "tools",
    label: "Dev Tools & Runtimes",
    emoji: "🔧",
    color: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    glow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]",
    skills: ["Node.js","Git","GitHub","VS Code","Postman","Vercel","Render","Antigravity"],
  },
];

/* ─── Individual Skill Chip ─── */
function SkillChip({ name, delay = 0, vis }) {
  const IconComp = Icons[name];
  return (
    <div
      className={`flex flex-col items-center gap-2 group cursor-default transition-all duration-500 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-white/4 border border-white/8 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/8 rounded-2xl flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(99,102,241,0.25)] p-2.5">
        {IconComp ? (
          <IconComp className="w-full h-full" />
        ) : (
          <span className="text-xs font-black text-zinc-500">{name[0]}</span>
        )}
      </div>
      <span className="text-[10px] text-zinc-400 group-hover:text-zinc-200 font-semibold text-center tracking-wide w-16 truncate transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}

/* ─── Category Card ─── */
function CategoryCard({ cat, activeFilter }) {
  const [ref, vis] = useReveal(0.1);
  const isActive = activeFilter === "all" || activeFilter === cat.id;

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-30 scale-95 pointer-events-none"}`}
    >
      <div className={`${cat.bg} ${cat.border} border rounded-2xl p-6 h-full flex flex-col ${cat.glow} transition-all duration-300`}>
        {/* Card header */}
        <div className="flex items-center gap-2 mb-5 pb-3 border-b border-white/5">
          <span className="text-xl">{cat.emoji}</span>
          <h3 className={`text-sm font-black tracking-wider uppercase ${cat.color}`}>{cat.label}</h3>
          <span className={`ml-auto text-[10px] font-bold ${cat.color} opacity-60`}>{cat.skills.length}</span>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap justify-center gap-5 flex-1 stagger">
          {cat.skills.map((name, i) => (
            <SkillChip key={name} name={name} delay={i * 55} vis={vis} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
const SkillTower = () => {
  const [filter, setFilter] = useState("all");
  const [titleRef, titleVis] = useReveal(0.2);

  const tabs = [{ id: "all", label: "All" }, ...categories.map((c) => ({ id: c.id, label: c.label }))];

  return (
    <section id="skills" className="relative bg-[#06040f] text-white py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] bg-indigo-600/4 rounded-full blur-[160px] top-0 left-1/2 -translate-x-1/2" />
        <div className="absolute w-[500px] h-[500px] bg-purple-700/4 rounded-full blur-[120px] bottom-0 right-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px]" />
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
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-indigo-500/40" />
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-indigo-500/40" />
          </div>
        </div>

        {/* Filter Tabs */}
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

        {/* Total count strip */}
        <div className="mt-10 text-center text-zinc-600 text-[11px] font-bold uppercase tracking-widest">
          {categories.reduce((s, c) => s + c.skills.length, 0)} technologies mastered across{" "}
          {categories.length} categories
        </div>
      </div>
    </section>
  );
};

export default SkillTower;
