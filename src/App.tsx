import { useSmoothScroll } from './hooks/useSmoothScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import useCinematicScroll from './hooks/useCinematicScroll';
import useMouseParallax from "./hooks/useMouseParallax";
import Certifications from "./sections/Certifications";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  useSmoothScroll();
  useCinematicScroll();
  useMouseParallax();

  return (
    <>
      {/* 🔥 FLOATING THEME SWITCHER */}
      <ThemeSwitcher />

      <div id="main-container" className="w-full bg-black text-white transition-colors duration-300">
        <Navbar />

        <main>
          <Hero />
          <Services />
          <About />
          <Portfolio />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;