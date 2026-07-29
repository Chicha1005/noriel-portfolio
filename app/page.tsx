import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}