/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 6s infinite",
        pulse: "pulse 4s infinite",
      },
    },
  },
  plugins: [],
animation: {
  "bounce-slow": "bounce 6s infinite",
  float: "float 5s ease-in-out infinite",
},
keyframes: {
  float: {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-12px)" },
  },
},

};
