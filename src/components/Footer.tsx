import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black relative overflow-hidden border-t border-white/10">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,115,0,0.15),transparent_60%)] parallax-bg" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">

        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* 🔥 BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold">
              <span className="text-primary drop-shadow-[0_0_15px_rgba(255,115,0,0.9)]">
                Portfolio
              </span>
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting premium digital experiences with modern technologies,
              smooth animations and user-focused design.
            </p>
          </motion.div>

          {/* 🔥 LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-all text-sm hover:translate-x-2 inline-block"
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
            <h4 className="text-white font-semibold mb-4">Connect</h4>

            <div className="flex gap-4">

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
                    scale: 1.2,
                    y: -5,
                  }}

                  className="parallax-card w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all relative overflow-hidden"
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
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2 parallax-text">
            Made with 
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            by <span className="text-white font-semibold">Sheik Almadeen</span> © {currentYear}
          </p>
        </motion.div>

      </div>
    </footer>
  );
}