import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/effects/ScrollProgress";
import ParticlesBackground from "@/components/effects/ParticlesBackground";
import Preloader from "@/components/effects/Preloader";
import BackToTop from "@/components/effects/BackToTop";

export default function Home() {
  return (
    <>
      <Preloader />
      <ParticlesBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
