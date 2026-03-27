import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'Services', 'About', 'Portfolio', 'Certifications', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let currentSection = 'home';

      navItems.forEach(item => {
        const el = document.getElementById(item.toLowerCase());
        if (el) {
          const offset = el.offsetTop - 120;
          if (window.scrollY >= offset) {
            currentSection = item.toLowerCase();
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const el = document.getElementById(section.toLowerCase());

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }

    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >

      {/* 🔥 GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,115,0,0.15),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">

          {/* 🔥 LOGO */}
          <div
            onClick={() => scrollToSection('home')}
            className="text-xl sm:text-2xl font-bold cursor-pointer"
          >
            <span className="text-primary drop-shadow-[0_0_15px_rgba(255,115,0,0.9)]">
              Portfolio
            </span>
          </div>

          {/* 🔥 DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 relative">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative px-4 py-2 text-sm font-medium transition-all ${
                  activeSection === item.toLowerCase()
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}

                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeLine"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          {/* 🔥 RIGHT SIDE (UNCHANGED + ADD TOGGLE) */}
          <div className="hidden md:flex items-center gap-4">

            {/* 🔥 CTA */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-2.5 bg-primary text-white rounded-full font-medium shadow-lg shadow-primary/40"
            >
              Hire Me
            </motion.button>

            {/* 🌙 NEW TOGGLE (ONLY ADDITION) */}
            <ThemeToggle />

          </div>

          {/* 🔥 MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl active:scale-90 transition"
          >
            ☰
          </button>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-20 left-0 w-full bg-black/95 backdrop-blur-xl z-[9998]"
          >
            <div className="flex flex-col items-center py-8 gap-6 text-xl">

              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-6 py-3 rounded-lg transition active:scale-95 ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}