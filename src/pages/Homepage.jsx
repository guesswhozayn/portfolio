import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Socials from "../components/Socials";
import Email from "../components/Email";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen font-inter">
      <main>
        <Hero id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
      <Socials />
      <Email />
      <Footer />
    </div>
  );
};

export default HomePage;
