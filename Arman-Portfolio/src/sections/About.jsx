import React, { useEffect, useRef, useState } from "react";

/* ─── Intersection observer hook ─── */
function useReveal(threshold = 0.15) {
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

/* ─── Animated counter ─── */
function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const [ref, vis]    = useReveal(0.5);
  useEffect(() => {
    if (!vis) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const id = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(id); } else setVal(start);
    }, 35);
    return () => clearInterval(id);
  }, [vis, to]);
  return <span ref={ref} className="tabular-nums">{val}{suffix}</span>;
}

/* ─── CP Platform card ─── */
function CPCard({ href, color, icon, platform, handle, accent }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between p-3.5 ${color} border rounded-xl transition-all duration-200 hover:scale-[1.02] group`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-lg ${accent} flex items-center justify-center text-base`}>
          {icon}
        </div>
        <div>
          <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{platform}</span>
          <span className="text-xs font-bold text-zinc-200">{handle}</span>
        </div>
      </div>
      <span className="text-[10px] font-black opacity-70 group-hover:opacity-100 transition">Open ↗</span>
    </a>
  );
}

/* ─── Main ─── */
const About = () => {
  const [bioRef,  bioVis]  = useReveal();
  const [cpRef,   cpVis]   = useReveal();
  const [statRef, statVis] = useReveal();

  return (
    <section className="relative bg-[#04020e] text-white py-28 px-6 overflow-hidden" id="about">

      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[550px] h-[550px] bg-indigo-600/5 rounded-full blur-[140px] top-0 left-0 animate-pulse-slow" />
        <div className="absolute w-[450px] h-[450px] bg-purple-700/5 rounded-full blur-[110px] bottom-0 right-0 animate-pulse-slow delay-700" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ─── Section Title ─── */}
        <div className="mb-16 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
            Identity &amp; Focus
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-indigo-500/40" />
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping-slow" />
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-indigo-500/40" />
          </div>
        </div>

        {/* ─── Bento Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Cell 1 — Bio (2-col) */}
          <div
            ref={bioRef}
            className={`lg:col-span-2 gradient-border glass p-8 rounded-2xl flex flex-col gap-6 transition-all duration-700 ${bioVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1 block">Core Biography</span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">Building Vetted Software Systems</h3>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              I'm a systems-minded engineer passionate about <span className="text-indigo-300 font-semibold">concurrency</span>,{" "}
              <span className="text-cyan-300 font-semibold">distributed architectures</span>, and{" "}
              <span className="text-purple-300 font-semibold">intelligent AI pipelines</span>.
              I study at IIT Jodhpur and I push code that has measurable impact — from research papers to production deployments.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              I've shipped systems ranging from{" "}
              <a href="/GLOSSVIS_Research_Paper.pdf" className="text-purple-400 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">GLOSSVIS</a>{" "}
              (academic research in HCI), to{" "}
              <a href="https://savant.vercel.app/" className="text-cyan-400 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Savant AI Tutor</a>
              , a{" "}
              <span className="text-orange-400 font-semibold">Distributed Rate Limiter</span>{" "}
              in Rust, a{" "}
              <a href="https://machine-learning-recommendation-sys.vercel.app" className="text-green-400 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">CineStream AI</a>
              {" "}recommender, and a full-stack{" "}
              <a href="https://final-two-hazel.vercel.app/login" className="text-pink-400 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">MERN Expense Tracker</a>.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Rust", "Python", "React", "Next.js", "FastAPI", "PostgreSQL", "LLMs", "gRPC"].map((t) => (
                <span key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/8 text-zinc-300 rounded-full hover:border-indigo-400/40 hover:text-indigo-300 transition cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Cell 2 — CP Profiles */}
          <div
            ref={cpRef}
            className={`gradient-border glass p-7 rounded-2xl flex flex-col gap-5 transition-all duration-700 delay-100 ${cpVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-orange-400 mb-1 block">Competitive Programming</span>
              <h3 className="text-xl font-extrabold text-white tracking-tight">Algorithmic Foundations</h3>
              <p className="text-zinc-500 text-xs leading-relaxed mt-1">
                Speed and precision forged through daily problem solving.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <CPCard
                href="https://leetcode.com/u/Sharingan_078/"
                platform="LeetCode"
                handle="Sharingan_078"
                icon="⚡"
                color="bg-yellow-500/5 hover:bg-yellow-500/10 border-yellow-500/15"
                accent="bg-yellow-500/15 text-yellow-400"
              />
              <CPCard
                href="https://codeforces.com/profile/Amaterasu_"
                platform="Codeforces"
                handle="Amaterasu_"
                icon="🔵"
                color="bg-sky-500/5 hover:bg-sky-500/10 border-sky-500/15"
                accent="bg-sky-500/15 text-sky-400"
              />
              <CPCard
                href="https://www.codechef.com/users/itachi_078"
                platform="CodeChef"
                handle="itachi_078"
                icon="🍴"
                color="bg-amber-600/5 hover:bg-amber-600/10 border-amber-600/15"
                accent="bg-amber-500/15 text-amber-400"
              />
            </div>
          </div>

          {/* Cell 3 — Stat cards row */}
          <div
            ref={statRef}
            className={`lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${statVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {[
              { label: "Projects Shipped",  val: 5,    suffix: "+", color: "text-cyan-400",   border: "border-cyan-500/15",   bg: "bg-cyan-500/5" },
              { label: "Languages",         val: 6,    suffix: "",  color: "text-indigo-400", border: "border-indigo-500/15", bg: "bg-indigo-500/5" },
              { label: "Academic Year",     val: 2023, suffix: "→", color: "text-purple-400", border: "border-purple-500/15", bg: "bg-purple-500/5" },
            ].map((s) => (
              <div key={s.label} className={`glass ${s.bg} ${s.border} border rounded-2xl p-5 text-center hover:scale-[1.03] transition-all duration-200`}>
                <p className={`text-3xl font-black mb-1 ${s.color}`}>
                  <Counter to={s.val} suffix={s.suffix} />
                </p>
                <p className="text-[11px] text-zinc-500 uppercase font-bold tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Cell 4 — Contact strip */}
          <div className="lg:col-span-3 glass border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">Let's Connect</p>
              <p className="text-white font-bold text-lg">Open to internships, collabs &amp; research projects</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="mailto:b23ci1005@iitj.ac.in"
                className="px-5 py-2.5 bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/25 text-xs font-bold rounded-xl transition"
              >
                ✉ IIT Mail
              </a>
              <a
                href="mailto:kashyaparman15@gmail.com"
                className="px-5 py-2.5 bg-red-500/10 border border-red-500/20 text-red-400 hover:text-red-300 hover:bg-red-500/20 text-xs font-bold rounded-xl transition"
              >
                ✉ Gmail
              </a>
              <a
                href="https://github.com/Izanagi078"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 text-xs font-bold rounded-xl transition"
              >
                GitHub ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
