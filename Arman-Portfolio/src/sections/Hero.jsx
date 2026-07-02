import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

/* ─── Particle Canvas ─── */
function ParticleField() {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);
  const mouseRef  = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const TOTAL = 90;
    const particles = Array.from({ length: TOTAL }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.5 + 0.15,
    }));

    const onResize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    const onMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        // mild mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.vx += (dx / dist) * 0.04;
          p.vy += (dy / dist) * 0.04;
        }

        p.x += p.vx;
        p.y += p.vy;
        // damp speed
        p.vx *= 0.99;
        p.vy *= 0.99;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${p.alpha})`;
        ctx.fill();
      });

      // connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - d / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

/* ─── Typewriter ─── */
function Typewriter({ words }) {
  const [idx, setIdx]   = useState(0);
  const [text, setText] = useState("");
  const [del, setDel]   = useState(false);
  const [spd, setSpd]   = useState(90);

  useEffect(() => {
    const full = words[idx];
    const timer = setTimeout(() => {
      if (!del) {
        setText(full.substring(0, text.length + 1));
        if (text === full) { setSpd(1600); setDel(true); } else setSpd(70);
      } else {
        setText(full.substring(0, text.length - 1));
        if (text === "") { setDel(false); setIdx((p) => (p + 1) % words.length); setSpd(350); } else setSpd(32);
      }
    }, spd);
    return () => clearTimeout(timer);
  }, [text, del, idx, spd]);

  return (
    <span className="text-cyan-400 neon-cyan">
      {text}
      <span className="inline-block w-[3px] h-6 bg-cyan-400 ml-1 animate-pulse align-middle" />
    </span>
  );
}

/* ─── Floating Nav Icon ─── */
function NavIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className="group flex items-center gap-1.5 text-zinc-400 hover:text-white transition-all duration-200"
    >
      {children}
      <span className="text-[11px] font-semibold hidden sm:block group-hover:text-cyan-300 transition-colors">{label}</span>
    </a>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#02010a] via-[#08051a] to-[#02010a] min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Particle canvas */}
      <ParticleField />

      {/* Static decorative glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[160px] -top-40 -left-40 animate-pulse-slow" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[130px] bottom-0 -right-20 animate-pulse-slow delay-700" />
        <div className="absolute w-[300px] h-[300px] bg-purple-700/6 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      {/* ─── Navbar ─── */}
      <nav
        className={`relative z-20 max-w-5xl w-full mx-auto px-6 py-3.5 mt-6 rounded-2xl flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "glass shadow-[0_8px_40px_rgba(0,0,0,0.6)] border-indigo-500/15"
            : "glass border-white/5"
        }`}
      >
        {/* Left: name logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-black text-sm text-zinc-950 group-hover:scale-105 group-hover:rotate-3 transition-all duration-200 shadow-lg shadow-indigo-500/25">
            AK
          </span>
          <span className="font-extrabold text-sm tracking-wide text-zinc-100 group-hover:text-white transition">
            Arman Kashyap
          </span>
        </Link>

        {/* Right: email · github · projects */}
        <div className="flex items-center gap-4">
          {/* Email 1 */}
          <NavIcon href="mailto:b23ci1005@iitj.ac.in" label="b23ci1005@iitj.ac.in">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </NavIcon>

          {/* GitHub */}
          <NavIcon href="https://github.com/Izanagi078" label="GitHub">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </NavIcon>

          {/* Projects button */}
          <Link
            to="/projects"
            className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-cyan-500/10 border border-indigo-500/30 hover:border-cyan-400/50 text-indigo-300 hover:text-cyan-300 rounded-xl transition-all duration-200 text-xs font-bold tracking-wide hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
          >
            Projects ↗
          </Link>
        </div>
      </nav>

      {/* ─── Main Content ─── */}
      <div className="relative z-10 max-w-4xl w-full mx-auto flex-grow flex flex-col justify-center items-center text-center px-6 py-16">

        {/* Availability badge */}
        <div className="mb-8 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full animate-fade-in">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping-slow" />
          Open to Opportunities
        </div>

        {/* Avatar with glow rings */}
        <div className="relative mb-10 group animate-scale-in">
          {/* Outer rings */}
          <div className="absolute inset-0 -m-8 border border-indigo-500/15 rounded-full animate-spin-slow pointer-events-none" />
          <div className="absolute inset-0 -m-14 border border-cyan-400/8 rounded-full animate-spin-slow [animation-direction:reverse] [animation-duration:25s] pointer-events-none" />
          {/* Dot on ring */}
          <div className="absolute -top-10 left-1/2 w-3 h-3 -translate-x-1/2 bg-cyan-400 rounded-full blur-[2px] shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-spin-slow pointer-events-none" style={{transformOrigin:"50% 88px"}} />

          {/* Avatar ring gradient */}
          <div className="relative w-40 h-40 rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-2xl shadow-indigo-500/30 animate-glow">
            <div className="w-full h-full rounded-full bg-[#08051a] flex items-center justify-center overflow-hidden">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                alt="Arman"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Badge */}
        <span className="inline-block text-[11px] text-indigo-400 font-extrabold uppercase tracking-[0.22em] bg-indigo-500/6 px-5 py-1.5 rounded-full border border-indigo-500/12 mb-5 animate-slide-up">
          Software Architect · IIT Jodhpur
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-4 animate-slide-up delay-100">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            Arman Kashyap
          </span>
        </h1>

        {/* Typewriter */}
        <div className="h-11 flex items-center justify-center mb-4 animate-slide-up delay-200">
          <p className="text-xl md:text-2xl font-bold font-mono text-zinc-300">
            I work as a{" "}
            <Typewriter words={["Software Engineer", "Agentic AI Developer", "Competitive Programmer", "Systems Builder"]} />
          </p>
        </div>

        {/* Sub-text */}
        <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed mb-12 animate-slide-up delay-300">
          Building scalable distributed systems, intelligent AI pipelines, and
          clean full-stack applications — powered by Rust, Python, and modern web tech.
        </p>

        {/* CTA Row */}
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up delay-500">
          <Link
            to="/projects"
            className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-zinc-950 font-black rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-cyan-400/25 hover:scale-105 transition-all text-xs tracking-wider uppercase"
          >
            🚀 View Projects
          </Link>
          <a
            href="#about"
            className="px-7 py-3.5 glass glass-hover border-white/8 text-zinc-300 hover:text-white font-bold rounded-xl text-xs transition duration-200 tracking-wide"
          >
            About Me ↓
          </a>
          <a
            href="mailto:b23ci1005@iitj.ac.in"
            className="px-7 py-3.5 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 font-bold rounded-xl text-xs transition duration-200 tracking-wide"
          >
            ✉ IIT Mail
          </a>
          <a
            href="mailto:kashyaparman15@gmail.com"
            className="px-7 py-3.5 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 hover:text-red-300 font-bold rounded-xl text-xs transition duration-200 tracking-wide"
          >
            ✉ Gmail
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-float opacity-50">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}
