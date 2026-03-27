import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black relative overflow-hidden border-t border-black/10 dark:border-white/10 transition-colors duration-300">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,115,0,0.15),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10 text-center sm:text-left">

          {/* 🔥 BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-2xl sm:text-3xl font-bold">
              <span className="text-primary drop-shadow-[0_0_15px_rgba(255,115,0,0.9)]">
                Portfolio
              </span>
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Crafting premium digital experiences with modern technologies,
              smooth animations and user-focused design.
            </p>
          </motion.div>

          {/* 🔥 LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-black dark:text-white font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-all text-sm inline-block active:scale-95"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 🔥 SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-black dark:text-white font-semibold mb-4">Connect</h4>

            <div className="flex justify-center sm:justify-start gap-4">

              {[{
                icon: Github,
                link: "https://github.com/Sheik01-10"
              },
              {
                icon: Linkedin,
                link: "https://www.linkedin.com/in/sheik-almadeen-0a04112bb/"
              },
              {
                icon: Mail,
                link: "mailto:sheikalmadeen@gmail.com"
              }].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"

                  whileHover={{
                    scale: 1.15,
                    y: -3,
                  }}

                  whileTap={{ scale: 0.9 }}

                  className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary transition-all relative overflow-hidden"
                >

                  {/* 🔥 HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-[radial-gradient(circle,rgba(255,115,0,0.2),transparent_70%)]"></div>

                  <item.icon className="w-5 h-5 relative z-10" />
                </motion.a>
              ))}

            </div>
          </motion.div>

        </div>

        {/* 🔥 BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-8 border-t border-black/10 dark:border-white/10 text-center"
        >
          <p className="parallax-text text-gray-600 dark:text-gray-400 text-xs sm:text-sm flex flex-wrap items-center justify-center gap-2">
            Made with 
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            by <span className="text-black dark:text-white font-semibold">Sheik Almadeen</span> © {currentYear}
          </p>
        </motion.div>

      </div>
    </footer>
  );
}