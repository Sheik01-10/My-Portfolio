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
      className="py-32 bg-black relative overflow-hidden"
      style={{ perspective: '1200px' }}
    >

      {/* 🔥 BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,115,0,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,115,0,0.1),transparent_40%)]" />

      {/* 🔥 GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px]" />

      {/* 🔥 MAIN CONTAINER (3D ENTRY) */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 150, rotateX: 60 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 origin-top"
      >

        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(255,115,0,0.4)]">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium digital solutions with modern technologies
          </p>
        </motion.div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.title}

              initial={{ opacity: 0, y: 100, rotateX: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: 'easeOut',
              }}

              whileHover={{
                scale: 1.08,
                rotateX: 10,
                rotateY: -10,
                z: 50,
              }}

              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 transition-all cursor-pointer overflow-hidden backdrop-blur-md"
            >

              {/* 🔥 HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.15),transparent_70%)]"></div>

              {/* 🔥 ICON */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 transition-all"
              >
                <service.icon className="w-8 h-8 text-primary" />
              </motion.div>

              {/* 🔥 TITLE */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* 🔥 DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* 🔥 BOTTOM LINE */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>

            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}