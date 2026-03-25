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
      className="py-32 bg-black relative overflow-hidden"
      style={{ perspective: '1200px' }}
    >

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,115,0,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,115,0,0.1),transparent_40%)]" />

      {/* 🔥 GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-primary/10 blur-[140px]" />

      {/* 🔥 MAIN */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 150, rotateX: 40 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 1 }}
        className="about-section max-w-7xl mx-auto px-6 lg:px-8 relative z-10 origin-top"
      >

        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="parallax-text text-5xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(255,115,0,0.5)]">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate App Developer crafting modern digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* 🔥 LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: 20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Building Smart & Scalable Digital Products 
            </h3>

            {/* 💎 PREMIUM CONTENT */}
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm <span className="text-white font-semibold">Sheik Almadeen</span>, a passionate 
              App Developer, Full-Stack Engineer and AI Enthusiast based in India. I lead 
              <span className="text-primary font-semibold"> Projecttify</span>, a modern tech initiative 
              focused on building scalable, intelligent and user-centric digital products.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My work revolves around developing high-performance applications across web and mobile platforms, 
              integrating technologies like <span className="text-primary">AI</span>, real-time systems and cloud solutions. 
              I focus on delivering seamless user experiences and robust backend architectures.
            </p>

            <p className="text-gray-300 leading-relaxed">
              With experience in <span className="text-primary">React</span>, 
              <span className="text-primary"> Flutter</span>, 
              <span className="text-primary"> Node.js</span> and AI integration, 
              I build solutions that are scalable, efficient and future-ready.
            </p>

            {/* 🔥 INFO CARDS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {info.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.05,
                    rotateX: 8,
                    rotateY: -8,
                  }}
                  className="parallax-card flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all backdrop-blur-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 🔥 RIGHT SIDE SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-6"
          >

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.7, rotateX: 40 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}

                whileHover={{
                  scale: 1.1,
                  rotateX: 12,
                  rotateY: -12,
                  z: 50,
                }}

                className="about-card parallax-card group p-6 rounded-2xl bg-white/5 border border-white/10 transition-all cursor-pointer relative overflow-hidden backdrop-blur-md"
              >

                {/* 🔥 GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle,rgba(255,115,0,0.2),transparent_70%)]"></div>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-125 transition">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-white font-semibold group-hover:text-primary transition">
                    {skill.name}
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>

              </motion.div>
            ))}

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}