import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web', 'AI', 'Mobile'];

  const projects = [
    {
      title: 'AI Voice Assistant',
      category: 'AI',
      description: 'Jarvis-like AI assistant',
      color: 'from-orange-500 to-red-500',
      github: "https://github.com/Sheik01-10/jarvis-ai",
    },
    {
      title: 'Training Trains App',
      category: 'Mobile',
      description: 'Seminar & certificate app',
      color: 'from-purple-500 to-pink-500',
      github: "https://github.com/Sheik01-10/Training-Trains-App",
      live: "https://play.google.com/store/apps/details?id=com.trainingtrains.app"
    },
    {
      title: 'Sunflower Siddha Clinic Website',
      category: 'Web',
      description: 'Book appointments system',
      color: 'from-green-500 to-teal-500',
      github: "https://github.com/Sheik01-10/sunflowersiddhaclinic",
      live: "https://sunflowersiddhaclinic.com/"
    },
    {
      title: 'Women Safety App',
      category: 'Mobile',
      description: 'SOS alert system',
      color: 'from-yellow-500 to-orange-500',
      github: "https://github.com/Sheik01-10/SafeHer",
    },
    {
      title: 'App Creation ',
      category: 'Mobile',
      description: 'App creation using flutter this app is used to create apps with basic home page',
      color: 'from-blue-500 to-cyan-500',
      github: "https://github.com/Sheik01-10/App-Creation-",
    },
    {
      title: 'College Club Website',
      category: 'Web',
      description: 'Event platform',
      color: 'from-pink-500 to-rose-500',
      github: "https://github.com/Sheik01-10/hackforge-club",
      live: "https://hackforge-club.netlify.app/"
    },
    {
      title: 'Shanmuga Diabetic Clinic Website',
      category: 'Web',
      description: 'Event platform',
      color: 'from-pink-500 to-rose-500',
      github: "https://github.com/Sheik01-10/doctorwebsite",
      live: "https://shanmugadiabeticclinic.netlify.app/"
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-black relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,115,0,0.15),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10" ref={ref}>

        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-black dark:text-white">
            My <span className="text-primary">Portfolio</span>
          </h2>
        </motion.div>

        {/* 🔥 FILTER */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                activeFilter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/40"
                  : "bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* 🔥 GRID FIX */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 120, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1], // 🔥 Apple easing
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              className="group relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all"
            >

              {/* 🔥 IMAGE */}
              <div className={`h-52 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
              </div>

              {/* 🔥 CONTENT */}
              <div className="p-6 space-y-3">

                <span className="text-xs text-primary">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-primary transition">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>

                {/* 🔥 BUTTONS */}
                <div className="flex gap-3 pt-3">

                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-full text-sm hover:bg-primary hover:text-white transition"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.live}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm shadow-md hover:shadow-lg transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </motion.a>

                </div>

              </div>

              {/* 🔥 HOVER GLOW */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle,rgba(255,115,0,0.2),transparent_70%)]" />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}