import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const words = [
    "Software Engineer",
    "Agentic AI Developer",
    "Competitive Programmer"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          // Pause before deleting
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(75);
        }
      } else {
        // Deleting characters
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(400); // pause before typing next word
        } else {
          setTypingSpeed(35);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative bg-gradient-to-b from-[#03010a] via-[#090518] to-[#03010a] min-h-screen flex flex-col justify-between overflow-hidden px-6 py-8">
      {/* Decorative Grid and Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(99,102,241,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] -top-40 -left-40 animate-pulse-slow" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] bottom-10 -right-20" />

      {/* Floating HUD Glass Navbar */}
      <div className="relative z-10 max-w-5xl w-full mx-auto flex items-center justify-between bg-[#0e0a26]/40 border border-white/5 backdrop-blur-xl px-6 py-3.5 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
        {/* Name Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-black text-sm text-zinc-950 group-hover:scale-105 transition">
            AK
          </span>
          <span className="font-extrabold text-sm tracking-wide text-zinc-200 group-hover:text-white transition">
            Arman Kashyap
          </span>
        </Link>

        {/* Action Hub */}
        <div className="flex items-center gap-6 text-xs font-bold text-zinc-400">
          <Link
            to="/projects"
            className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 text-indigo-300 rounded-lg transition"
          >
            Projects
          </Link>
        </div>
      </div>

      {/* Core Hero Component */}
      <div className="relative z-10 max-w-4xl w-full mx-auto flex-grow flex flex-col justify-center items-center text-center py-16">
        
        {/* Avatar Container with glowing orbit */}
        <div className="relative mb-10 group">
          {/* Orbital rings */}
          <div className="absolute inset-0 -m-6 border border-indigo-500/20 rounded-full animate-spin-slow pointer-events-none" />
          <div className="absolute inset-0 -m-10 border border-cyan-400/10 rounded-full animate-spin-slow pointer-events-none [animation-direction:reverse]" />
          
          <div className="relative w-44 h-44 rounded-full p-1.5 bg-gradient-to-tr from-indigo-500 via-purple-600 to-cyan-400 shadow-2xl">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
              alt="Arman Emote"
              className="w-full h-full rounded-full object-cover bg-[#090518] border-2 border-[#090518]"
            />
          </div>
        </div>

        {/* Main Header Tag */}
        <div className="space-y-4">
          <span className="inline-block text-xs text-indigo-400 font-extrabold uppercase tracking-[0.2em] bg-indigo-500/5 px-4 py-1.5 rounded-full border border-indigo-500/10">
            Systems & Intelligence Architect
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Hi, I am <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Arman Kashyap</span>
          </h2>

          {/* Custom Typewriter text container */}
          <div className="h-10 flex items-center justify-center">
            <p className="text-xl md:text-3xl font-bold font-mono text-zinc-300">
              I code as a <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">{currentText}</span>
              <span className="inline-block w-1.5 h-6 bg-cyan-400 ml-1.5 animate-pulse"></span>
            </p>
          </div>

          <p className="text-sm md:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed pt-2">
            Software Engineer & Competitive Programmer building scalable web applications and intelligent systems.
          </p>
        </div>

        {/* Interactive action controls */}
        <div className="flex gap-4 mt-12 w-full justify-center">
          <Link
            to="/projects"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-zinc-950 font-black rounded-xl shadow-lg hover:shadow-cyan-400/15 hover:scale-105 transition-all text-xs tracking-wider uppercase"
          >
            Launch System Dashboard
          </Link>
          <a
            href="#about"
            className="px-6 py-3 bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 text-zinc-300 hover:text-white font-bold rounded-xl text-xs transition duration-200"
          >
            Read Bios
          </a>
        </div>

      </div>
    </section>
  );
}
