import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <Footer />
    </main>
  );
}
