import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Featured from "../components/Featured";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased relative overflow-hidden flex flex-col">
      <Hero />
      <Mission />
      <Services />
      <Projects />
      <Skills />
      <Featured />
      <FAQ />
      <Footer />
    </div>
  );
}
