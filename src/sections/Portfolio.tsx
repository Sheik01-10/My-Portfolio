import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web', 'AI', 'Mobile'];

  const projects = [
    {
      title: 'AI Voice Assistant',
      category: 'AI',
      description: 'Jarvis-like AI assistant with voice control & automation',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Training Trains App',
      category: 'Mobile',
      description: '3D animated app using React & Three.js',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Doctor Appointment Website',
      category: 'Web',
      description: 'Book appointments & manage patients',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Women Safety App',
      category: 'Mobile',
      description: 'Live tracking & SOS alert system',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Smart Budget App',
      category: 'Mobile',
      description: 'Expense tracking & analytics dashboard',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'College Club Website',
      category: 'Web',
      description: 'Event & student platform',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300"
    >

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,115,0,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,115,0,0.1),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="parallax-text text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Explore my latest projects and creative work
          </p>
        </motion.div>

        {/* 🔥 FILTER */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/50'
                  : 'bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">

          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-primary/50 transition-all cursor-pointer"
            >

              {/* 🔥 IMAGE */}
              <div className={`h-40 sm:h-56 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* 🔥 CONTENT */}
              <div className="p-4 sm:p-6">
                <div className="text-xs text-primary mb-2">
                  {project.category}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  {project.description}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}