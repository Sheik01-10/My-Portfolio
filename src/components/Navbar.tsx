import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Added Certifications
  const navItems = ['Home', 'Services', 'About', 'Portfolio', 'Certifications', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.toLowerCase());

      let currentSection = 'home';

      sections.forEach(section => {
        const el = document.getElementById(section);
        if (el) {
          const offset = el.offsetTop - 120;
          if (window.scrollY >= offset) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ FIXED SCROLL FUNCTION (GSAP SAFE)
  const scrollToSection = (section: string) => {
    const el = document.getElementById(section.toLowerCase());

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // navbar height offset
        behavior: 'smooth',
      });
    }

    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/50 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >

      {/* 🔥 GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,115,0,0.15),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">

          {/* 🔥 LOGO */}
          <div
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold cursor-pointer"
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

                {/* 🔥 ACTIVE UNDERLINE */}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeLine"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                  />
                )}
              </button>
            ))} 

          </div>

          <motion.button
  onClick={() => scrollToSection('contact')}

  whileHover={{
    scale: 1.1,
    rotateX: 8,
    rotateY: -8,
  }}

  whileTap={{ scale: 0.95 }}

  className="hidden md:block px-6 py-2.5 bg-primary text-white rounded-full font-medium shadow-lg shadow-primary/40 transition-all relative overflow-hidden group parallax-card"
  style={{ transformStyle: 'preserve-3d' }}
>
  {/* 🔥 GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,115,0,0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition duration-500"></div>

  {/* 🔥 TEXT */}
  <span className="relative z-10">Hire Me</span>
</motion.button>

          {/* 🔥 MOBILE MENU BTN */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
          >
            <div className="flex flex-col items-center py-6 gap-4">

              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-lg ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary'
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