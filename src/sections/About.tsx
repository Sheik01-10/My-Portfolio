import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Palette,
  Zap,
  Award,
  GraduationCap,
  School,
} from "lucide-react";

export default function About() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const skills = [
    { name: "Canva", icon: Palette },
    { name: "Frontend Development", icon: Code },
    { name: "React & TypeScript", icon: Zap },
    { name: "Creative Thinking", icon: Award },
    { name: "Flutter Development", icon: Code },
    { name: "AI Integration", icon: Zap },
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
        </motion.div>

        {/* 🔥 ABOUT + SKILLS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* 🔥 LEFT - ABOUT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
              Crafting Smart Digital Experiences
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-lg">
              I'm{" "}
              <span className="text-black dark:text-white font-semibold">
                Sheik Almadeen
              </span>
              , a passionate{" "}
              <span className="text-primary font-semibold">
                App Developer
              </span>
              ,{" "}
              <span className="text-primary font-semibold">
                Full-Stack Engineer
              </span>{" "}
              and AI Enthusiast. I specialize in developing modern,
              scalable and high-performance web and mobile applications
              with AI integration, focusing on seamless user experiences
              and innovative digital products.
              <br />
              <br />
              I completed my Higher Secondary Education (HSC - 12th)
              at{" "}
              <span className="font-medium text-black dark:text-white">
                Nanjappa Municipal Boys Higher Secondary School
              </span>{" "}
              during 2022 - 2023 and I am currently pursuing a{" "}
              <span className="text-primary font-semibold">
                Bachelor of Technology (B.Tech) in Artificial Intelligence
                & Data Science
              </span>
              , where I continue to strengthen my expertise in software
              development, artificial intelligence and emerging
              technologies.
              <br />
              <br />
              My expertise includes{" "}
              <span className="text-primary">React</span>,
              <span className="text-primary"> Flutter</span>,
              <span className="text-primary"> TypeScript</span> and
              <span className="text-primary"> Node.js</span>. I enjoy
              transforming creative ideas into impactful real-world
              solutions through clean UI/UX, scalable architecture and
              modern technologies.
            </p>
          </motion.div>

          {/* 🔥 RIGHT - SKILLS */}
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
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="p-4 sm:p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md"
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