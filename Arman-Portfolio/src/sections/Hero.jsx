"use client";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-[#0d0019] min-h-screen flex flex-col overflow-hidden">
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-72 h-72 bg-purple-700 rounded-full opacity-20 blur-2xl bottom-10 right-10 animate-bounce-slow" />
      </div>

      {/* TOP BAR */}
      <div className="relative z-10 container mx-auto px-6 py-6 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">

        {/* LEFT CONTACT INFO */}
        <div className="flex flex-col space-y-1 text-sm font-medium">
          <span className="text-indigo-300 text-sm font-semibold tracking-wide mb-1">Connect With Me</span>
          <div className="flex items-center space-x-6">
            <a
              href="mailto:kashyaparman15@gmail.com"
              className="flex items-center space-x-2 bg-gradient-to-r from-yellow-300 to-pink-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                alt="Gmail"
                className="w-4 h-4"
              />
              <span>kashyaparman15@gmail.com</span>
            </a>

            <a
              href="mailto:b23ci1005@iitj.ac.in"
              className="flex items-center space-x-2 bg-gradient-to-r from-green-300 to-cyan-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                alt="Gmail"
                className="w-4 h-4"
              />
              <span>b23ci1005@iitj.ac.in</span>
            </a>

            <a
              href="https://github.com/Izanagi078"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="flex items-center space-x-2 text-white hover:text-violet-300 transition-transform hover:scale-110"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="w-5 h-5"
              />
              <span className="text-sm font-semibold">GitHub</span>
            </a>
          </div>
        </div>

        {/* RIGHT NAV */}
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-violet-300 transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-white hover:text-violet-300 transition-colors">
            Projects
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="relative z-10 container mx-auto px-6 flex-grow flex flex-col justify-center items-center text-center text-white">
        <div className="relative w-48 h-48 mb-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="Arman Emote"
            className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
          />
          <div className="absolute -top-10 -right-32 bg-[#1a1a2e] text-white px-4 py-2 rounded-xl shadow-lg text-sm font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-5 after:border-[8px] after:border-t-[#1a1a2e] after:border-transparent after:border-b-0 after:rotate-45">
            Hi, I am Arman 💻
          </div>
        </div>

        <p className="text-lg md:text-2xl max-w-xl mb-6 opacity-90">
          Full-Stack Developer | Passionate About Algorithms | Crafting Scalable, Elegant Code
        </p>

        <Link
          to="/projects"
          className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-600 text-white font-semibold py-2 px-6 rounded-full transition-all shadow-md hover:scale-105"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}
