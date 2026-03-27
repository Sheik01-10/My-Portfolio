import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Award, User, Mail, Briefcase } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Canva', icon: Palette },
    { name: 'Frontend Development', icon: Code },
    { name: 'React & TypeScript', icon: Zap },
    { name: 'Creative Thinking', icon: Award },
    { name: 'Flutter Development', icon: Code },
    { name: 'AI Integration', icon: Zap },
  ];

  const info = [
    { label: 'Name', value: 'Sheik Almadeen', icon: User },
    { label: 'Email', value: 'sheikalmadeen@gmail.com', icon: Mail },
    { label: 'Experience', value: '2+ Years', icon: Briefcase },
    { label: 'Status', value: 'App Developer', icon: Award },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300"
    >

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,115,0,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,115,0,0.1),transparent_40%)]" />

      {/* 🔥 GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] -translate-x-1/2 -translate-y-1/2 bg-primary/10 blur-[120px] sm:blur-[140px]" />

      {/* 🔥 MAIN */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >

        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="parallax-text text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Passionate App Developer crafting modern digital experiences
          </p>
        </motion.div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          {/* 🔥 LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-5 sm:space-y-6 text-center lg:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
              Building Smart & Scalable Digital Products 
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-lg">
              I'm <span className="text-black dark:text-white font-semibold">Sheik Almadeen</span>, a passionate 
              App Developer, Full-Stack Engineer and AI Enthusiast.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              I develop high-performance applications across web and mobile platforms with AI integration.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Skilled in <span className="text-primary">React</span>, 
              <span className="text-primary"> Flutter</span>, 
              <span className="text-primary"> Node.js</span>.
            </p>

            {/* 🔥 INFO CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
              {info.map((item, i) => (
                <motion.div
                  key={i}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
                    <p className="text-black dark:text-white font-semibold text-xs sm:text-sm">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 🔥 RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 sm:p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
              >

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>

                  <h3 className="text-black dark:text-white text-sm sm:text-base font-semibold">
                    {skill.name}
                  </h3>
                </div>

              </motion.div>
            ))}

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}