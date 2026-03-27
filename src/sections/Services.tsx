import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Code, Smartphone, Database, Zap } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Palette,
      title: 'Full-Stack Development',
      description: 'Crafting seamless user experiences with robust full-stack solutions.',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and performant web applications.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Developing cross-platform mobile applications.',
    },
    {
      icon: Database,
      title: 'Backend Solutions',
      description: 'Scalable backend systems and APIs.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized speed and smooth experience.',
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-24 sm:py-32 relative overflow-hidden transition-colors duration-300"
    >

      {/* 🔥 FULL WIDTH BACKGROUND FIX */}
      <div className="absolute inset-0 bg-white dark:bg-black -z-20" />

      {/* 🔥 BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,115,0,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,115,0,0.1),transparent_40%)] -z-10" />

      {/* 🔥 GLOW */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/10 blur-[80px] sm:blur-[120px] -z-10" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >

        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="parallax-text text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Premium digital solutions with modern technologies
          </p>
        </motion.div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group p-5 sm:p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 transition-all cursor-pointer backdrop-blur-md"
            >

              {/* 🔥 ICON */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-4 sm:mb-6">
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>

              {/* 🔥 TITLE */}
              <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 sm:mb-3 group-hover:text-primary">
                {service.title}
              </h3>

              {/* 🔥 DESCRIPTION */}
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>

              {/* 🔥 LINE */}
              <div className="mt-4 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}