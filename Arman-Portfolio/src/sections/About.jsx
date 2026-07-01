import React from 'react';

const About = () => {
  return (
    <section className="relative bg-[#03010a] text-white py-24 px-6 overflow-hidden" id="about">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] top-10 left-10 animate-pulse-slow" />
        <div className="absolute w-[400px] h-[400px] bg-purple-700/5 rounded-full blur-[90px] bottom-10 right-10" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
            Identity & Focus
          </h2>
          <div className="w-1 h-8 bg-indigo-500/30 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Bento Cell 1: Bio (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 bg-[#0c081e]/40 border border-white/5 backdrop-blur-xl p-8 rounded-2xl flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300 shadow-xl">
            <div className="space-y-5">
              <span className="text-3xs font-black uppercase tracking-widest text-indigo-400">Core Biography</span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Building Vetted Software Systems
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                I am an aspiring systems engineer driven by a deep love for concurrency, architecture, and mathematical constraints. My goal is to build high-throughput middleware, robust AI orchestrations, and deterministic paper visualization models.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                I study at IIT Jodhpur, specializing in Computer Science. Through my academic research and personal engineering tracks, I explore the margins where complex calculations meet clean web architectures.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                I’ve designed and built a variety of advanced systems: from my academic research in human-AI interaction on{" "}
                <a
                  href="/GLOSSVIS_Research_Paper.pdf"
                  className="text-purple-400 font-bold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GLOSSVIS
                </a>
                , to a multi-agent course orchestrator (
                <a
                  href="https://savant.vercel.app/"
                  className="text-cyan-400 font-bold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Savant AI Tutor
                </a>
                ), a high-scale gRPC leasing service in Rust (
                <span className="text-orange-400 font-bold">Distributed Rate Limiter</span>
                ), a math-rigorous recommendation portal (
                <a
                  href="https://machine-learning-recommendation-sys.vercel.app"
                  className="text-green-400 font-bold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CineStream AI
                </a>
                ), and a full-stack{" "}
                <a
                  href="https://final-two-hazel.vercel.app/login"
                  className="text-pink-400 font-bold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MERN Expense Tracker
                </a>
                .
              </p>
            </div>
          </div>

          {/* Bento Cell 2: CP Profiles Grid */}
          <div className="bg-[#0c081e]/40 border border-white/5 backdrop-blur-xl p-8 rounded-2xl flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300 shadow-xl">
            <div className="space-y-6">
              <span className="text-3xs font-black uppercase tracking-widest text-orange-400">Competitive Programming</span>
              <h3 className="text-xl font-extrabold text-white tracking-tight">
                Algorithmic Foundations
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Competitive programming is where my speed and precision are forged. I actively practice on Codeforces, LeetCode, and CodeChef.
              </p>

              {/* Stats Links Cards */}
              <div className="space-y-3">
                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/Sharingan_078/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-yellow-500/5 hover:bg-yellow-500/10 border border-yellow-500/15 rounded-xl transition duration-200"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.483 0a1.374 1.374 0 00-.961.411L7.11 5.827a1.378 1.378 0 000 1.953l5.412 5.412a1.378 1.378 0 001.953 0l5.41-5.412a1.378 1.378 0 000-1.953L14.444.411A1.379 1.379 0 0013.483 0zm.01 10.44a1.272 1.272 0 110-2.543 1.272 1.272 0 010 2.543zM6.55 12.183l-5.41 5.412a1.378 1.378 0 000 1.953l5.41 5.412a1.378 1.378 0 001.953 0l5.41-5.412a1.378 1.378 0 000-1.953l-5.41-5.412a1.378 1.378 0 00-1.953 0z"/>
                    </svg>
                    <div>
                      <span className="block text-[10px] text-zinc-500 font-bold uppercase">LeetCode</span>
                      <span className="text-xs font-bold text-zinc-300">Sharingan_078</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-yellow-500">Practice➔</span>
                </a>

                {/* Codeforces */}
                <a
                  href="https://codeforces.com/profile/Amaterasu_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-sky-500/5 hover:bg-sky-500/10 border border-sky-500/15 rounded-xl transition duration-200"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.5 7.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7.5-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 16.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
                    </svg>
                    <div>
                      <span className="block text-[10px] text-zinc-500 font-bold uppercase">Codeforces</span>
                      <span className="text-xs font-bold text-zinc-300">Amaterasu_</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-sky-400">Practice➔</span>
                </a>

                {/* CodeChef */}
                <a
                  href="https://www.codechef.com/users/itachi_078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-amber-600/5 hover:bg-amber-600/10 border border-amber-600/15 rounded-xl transition duration-200"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
                    </svg>
                    <div>
                      <span className="block text-[10px] text-zinc-500 font-bold uppercase">CodeChef</span>
                      <span className="text-xs font-bold text-zinc-300">itachi_078</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-amber-500">Practice➔</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
