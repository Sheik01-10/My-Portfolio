import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "Services", "About", "Portfolio","Certifications", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-[999999] pointer-events-none"
    >

      {/* 🔥 CONTAINER */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`mx-auto flex items-center justify-between px-6 pointer-events-auto
        ${
          scrolled
            ? "max-w-5xl mt-3 py-3 rounded-2xl bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl"
            : "max-w-7xl py-5"
        }`}
      >

        {/* 🔥 LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold cursor-pointer text-primary"
        >
          Portfolio
        </div>

        {/* 🔥 MENU */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-all"
            >
              {item}
            </button>
          ))}
        </div>

        {/* 🔥 RIGHT */}
        <div className="flex items-center gap-4">

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("contact")}
            className="hidden md:block px-5 py-2 bg-primary text-white rounded-full shadow-lg shadow-primary/40"
          >
            Hire Me
          </motion.button>

          <ThemeToggle />

        </div>

      </motion.div>
    </motion.nav>
  );
}