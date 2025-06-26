import React from 'react';

const About = () => {
  return (
    <section className="relative bg-[#0d0019] text-white py-24 px-6 overflow-hidden" id="about">
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-72 h-72 bg-purple-700 rounded-full opacity-20 blur-2xl bottom-10 right-10 animate-bounce-slow" />
      </div>

      {/* ABOUT CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="relative z-10 mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text drop-shadow-lg">
            About
          </h2>
          <div className="w-1 h-8 bg-white/25 mx-auto mt-4 rounded-full" />
        </div>
        <div className="leading-relaxed text-lg space-y-6 text-white/90">
          <p>
            I'm an aspiring software developer driven by a deep love for structure, performance, and clean architecture—turning abstract problems into modular, scalable systems.
          </p>
          <p>
            My foundations were forged in competitive programming. I regularly explore patterns, analyse situtations and do optimization challenges on{" "}
            <a
              href="https://leetcode.com/u/Sharingan_078/"
              className="text-indigo-400 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
            ,{" "}
            <a
              href="https://codeforces.com/profile/Amaterasu_"
              className="text-indigo-400 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codeforces
            </a>{" "}
            and{" "}
            <a
              href="https://www.codechef.com/users/itachi_078"
              className="text-indigo-400 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeChef
            </a>
            —places that sharpen both speed and precision.
          </p>
          <p>
            I’ve built a full-stack{" "}
            <a
              href="https://final-two-hazel.vercel.app/"
              className="text-indigo-400 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Expense Tracker
            </a>
            , a{" "}
            <a
              href="https://magic-steel.vercel.app/"
              className="text-green-400 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ML engine
            </a>
            , and an applied{" "}
                        <a
              href="https://github.com/sunilbishnoi1/nftMarketplace"
              className="text-purple-400 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web3 NFT Marketplace
            </a>

            —each representing a different technical discipline that excites me deeply.
          </p>
          <p>
            Every solution I create aims for that sweet spot between simplicity, creativity, and velocity. I build with intent—and I debug with grit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
