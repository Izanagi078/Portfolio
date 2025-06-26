import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/skills";
// import Contact from "../sections/Contact"; // optional

export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">
      <Hero />
      <About />
      <Skills />
      {/* <Contact /> */}
    </main>
  );
}
