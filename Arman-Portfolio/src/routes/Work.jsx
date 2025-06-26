import { Link } from "react-router-dom";

export default function Projects() {
  const Projects = [
    {
      title: "💸 MERN Expense Tracker",
      description:
        "A full-stack expense tracker with real-time charts and CRUD operations.",
      features: [
       "Secure expense operations (add/edit/delete) with password hashing using Argon2 and JWT-based authentication",
       "Persistent data storage using MongoDB via Mongoose with support for file uploads (e.g., receipts) through Multer",
       "Visualize expenses using Chart.js and Recharts enhanced with filtering and date tools like Moment",
       "Modern and responsive UI built with React and Tailwind CSS, including emoji tagging, toasts, and rich iconography",
       "Express.js REST API connected to frontend via Axios, with environment-based config through dotenv and cross-origin support"
      ],
      techStack: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Chart.js",
        "Express.js",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "JWT",
        "Axios",
        "dotenv"
      ],
      liveDemo: "https://final-two-hazel.vercel.app/",
      repo: "https://github.com/Izanagi078/Susanoo",
      preview: "https://final-two-hazel.vercel.app/",
    },
    {
      title: "🤖 ML Classifier & Regressor",
      description:
        "Upload images, text or CSVs and get instant predictions and analytics.",
      features: [
       "Image classification using TensorFlow and Keras with Flask-backed inference endpoints",
       "Text sentiment and category analysis via Transformers and PyTorch through secured Flask APIs",
       "CSV upload for regression and classification using scikit-learn and pandas with model serialization via joblib",
       "Cross-origin client-server integration supported by Flask-CORS"
      ],
      techStack: [
        "React",
        "Tailwind CSS",
        "Python",
        "Flask",
        "scikit-learn",
        "TensorFlow",
        "PyTorch",
        "pandas",
        "transformers",
        "numpy"
      ],
      liveDemo: "https://magic-steel.vercel.app/",
      repo: "https://github.com/Izanagi078/Magic",
      preview: "https://magic-steel.vercel.app/",
    },
    {
      title: "🌐 W3 NFT Marketplace",
      description:
        "A decentralized NFT marketplace built on Ethereum, with minting, listing & trading.",
      features: [
        "Smart contract development in Solidity with ERC-721 standard for NFTs",
        "Blockchain testing and deployment using Truffle and Ganache",
        "Decentralized file storage and metadata hosting via IPFS",
        "Frontend powered by React and styled with Tailwind, integrated with Web3.js and MetaMask"
      ],
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Solidity",
        "Web3.js",
        "Truffle",
        "Ganache",
        "IPFS"
      ],
      repo: "https://github.com/sunilbishnoi1/nftMarketplace",
      previewImage: "Screenshot 2025-06-26 152526.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d0019] text-white px-6 py-12">
      {/* Home button + title */}
      <div className="flex items-center justify-between mb-12">
        <Link
          to="/"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-white text-sm font-medium"
        >
          Home
        </Link>
        <h1 className="text-4xl font-extrabold text-center flex-1">
          🚀 My Projects Showcase
        </h1>
        {/* placeholder for alignment */}
        <div className="w-20" />
      </div>

      <div className="grid grid-cols-1 gap-8">
        {Projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-900 rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left: preview */}
            <div className="md:w-1/3 h-48 md:h-auto">
              {p.preview ? (
                <iframe
                  src={p.preview}
                  title={`${p.title} preview`}
                  className="w-full h-full object-cover border-0"
                  loading="lazy"
                />
              ) : (
                <img
                  src={p.previewImage}
                  alt={`${p.title} screenshot`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Right: content */}
            <div className="p-6 md:w-2/3 flex flex-col">
              <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
              <p className="text-gray-300 mb-4">{p.description}</p>

              <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-gray-200">
                {p.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center before:content-['•'] before:mr-2"
                  >
                    {feat}
                  </li>
                ))}
              </ul>

              <p className="font-semibold mb-1">Tech Stack:</p>
              <p className="text-gray-300 mb-4">
                {p.techStack.join(" • ")}
              </p>

              <div className="mt-auto flex space-x-4">
                {p.liveDemo && (
                  <a
                    href={p.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-white text-sm font-medium"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white text-sm font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
