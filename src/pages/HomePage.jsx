import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Spotlight from "../components/Spotlight";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased relative overflow-hidden flex flex-col">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Spotlight />
      <FAQ />
      <Footer />
    </div>
  );
}
