import React from "react";

const categories = [
  {
    label: "Languages",
    color: "text-yellow-400",
    icons: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  },
  {
    label: "Libraries",
    color: "text-green-400",
    icons: [
      { name: "NumPy", icon: "/numpy-logo-png_seeklogo-485085.png" },
      { name: "Pandas", icon: "/pandas_logo.png" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "/pytorch-logo-png_seeklogo-503267.png" },
      { name: "Keras", icon: "/keras-logo.png" },
      { name: "Scikit-learn", icon: "/sklearn logo.png" },
    ],
  },
  {
    label: "Frameworks",
    color: "text-blue-400",
    icons: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "/tailwind_css-logo_brandlogos.net_v91ni-512x512.png" },
      { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
      { name: "Truffle", icon: "/truffle-logo-png_seeklogo-426732.png" },
      { name: "Ganache", icon: "/ganache-logo.png" },
      {name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    ],
  },
  {
    label: "Tools & Platforms",
    color: "text-purple-400",
    icons: [
      { name: "Ethereum", icon: "/88c6c53f654c89838e39a9c013a66f0c.jpg" },
      { name: "MetaMask", icon: "https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png" },
      { name: "Anaconda", icon: "/anaconda-logo-png_seeklogo-453476.png" },
      { name: "Vercel", icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
      { name: "Render", icon: "ec37a3660704e1fa2b4246c9a01ab34e145194ad-824x824.png" }
    ],
  },
  {
    label: "Databases",
    color: "text-red-400",
    icons: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    label: "Dev Tools",
    color: "text-orange-400",
      icons: [
     { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
     { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
     { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
     { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
   ],
  },
];

const SkillTower = () => {
  return (
    <section className="relative bg-[#0d0019] text-white py-28 flex flex-col items-center px-6 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full blur-3xl top-0 left-1/2 -translate-x-1/2 opacity-20 animate-pulse" />
        <div className="absolute w-72 h-72 bg-purple-700 rounded-full blur-2xl bottom-0 right-1/2 translate-x-1/3 opacity-25 animate-bounce-slow" />
      </div>

      {/* STACK TITLE */}
      <div className="relative z-10 mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text drop-shadow-lg">
          Tech Stack
        </h2>
        <div className="w-1 h-8 bg-white/25 mx-auto mt-4 rounded-full" />
      </div>

      {/* CATEGORIES GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {categories.map((cat) => (
          <div key={cat.label} className="w-full">
            <div className="bg-[#1a1a2e] rounded-xl p-6 shadow-md border border-white/10 backdrop-blur-md h-full flex flex-col">
              <h3 className={`text-xl font-semibold mb-4 ${cat.color} text-center`}>
                {cat.label}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {cat.icons.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center w-20 animate-float">
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain mb-1" />
                    <span className="text-xs text-white/80 text-center">{skill.name}</span>
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
