import React from "react";

// Official logos dictionary (reusing your local assets and Devicon CDN endpoints)
const SKILL_ICONS = {
  // Languages
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "C/C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Rust: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",

  // Libraries
  NumPy: "/numpy-logo-png_seeklogo-485085.png",
  Pandas: "/pandas_logo.png",
  "Scikit-learn": "/sklearn logo.png",
  Recharts: "https://raw.githubusercontent.com/recharts/recharts/master/assets/recharts-logo.png",

  // Frameworks
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-svg.svg", // Fallback devicon
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "Tailwind CSS": "/tailwind_css-logo_brandlogos.net_v91ni-512x512.png",
  Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",

  // Databases & Cache
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  Supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",

  // Developer Tools & Runtimes
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  Vercel: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  Render: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/render/render-original.svg", // devicon fallback
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Antigravity: "antigravity" // Custom sci-fi graphic wrapper
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
    skills: ["React", "NumPy", "Pandas", "Scikit-learn"]
  },
  {
    label: "Frameworks",
    color: "text-pink-400 border-pink-500/20 bg-pink-500/5",
    skills: ["Next.js", "Express.js", "FastAPI", "Flask", "Tailwind CSS", "Vite"]
  },
  {
    label: "Databases & Caching",
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    skills: ["MongoDB", "PostgreSQL", "SQLite", "Redis", "MySQL", "Supabase"]
  },
  {
    label: "Developer Tools & Runtimes",
    color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    skills: ["Node.js", "Git", "GitHub", "VS Code", "Postman", "Vercel", "Render", "Antigravity"]
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
                    <div className="w-14 h-14 bg-white/5 border border-white/10 group-hover:border-indigo-500/30 rounded-xl flex items-center justify-center mb-2 transition-all duration-200 p-2.5 overflow-hidden">
                      {SKILL_ICONS[name] === "antigravity" ? (
                        <svg className="w-10 h-10 text-indigo-400 animate-pulse drop-shadow-[0_0_12px_rgba(129,140,248,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="7" strokeDasharray="3 3" />
                          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" />
                        </svg>
                      ) : name === "Render" ? (
                        <svg className="w-9 h-9 text-[#46e3b7]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm3.5 13.5l-3.5-3.5V9.5h.5l3 3.5v2.5z"/>
                        </svg>
                      ) : name === "Next.js" ? (
                        <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2zm4.5 14.5L12 11V9.5h.5l4 5z"/>
                        </svg>
                      ) : (
                        <img
                          src={SKILL_ICONS[name]}
                          alt={name}
                          className={`w-full h-full object-contain filter group-hover:brightness-110 transition duration-150 ${["GitHub", "Express.js", "Rust"].includes(name) ? "invert brightness-200" : ""}`}
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentNode.innerHTML = `<svg class="w-8 h-8 text-zinc-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
                          }}
                        />
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
