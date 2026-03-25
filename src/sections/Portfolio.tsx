import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'UI', 'Web', 'AI', 'Mobile'];

  const projects = [
    {
      title: 'AI Voice Assistant',
      category: 'AI',
      description: 'Jarvis-like AI assistant with voice control & automation',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Training Trains App',
      category: 'App',
      description: 'Modern 3D animated portfolio using React & Three.js',
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
      className="py-32 bg-black relative overflow-hidden"
      style={{ perspective: '1200px' }}
    >

      {/* 🔥 BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,115,0,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,115,0,0.1),transparent_40%)]" />

      <div
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
        ref={ref}
      >

        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(255,115,0,0.5)] parallax">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects and creative work
          </p>
        </motion.div>

        {/* 🔥 FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/50'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 🔥 PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProjects.map((project, index) => (
  <motion.div
    key={project.title}

    className="portfolio-card parallax-card group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all cursor-pointer"

    style={{ transformStyle: 'preserve-3d' }}

    initial={{ opacity: 0, y: 120, rotateX: 40, scale: 0.9 }}
    animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}

    transition={{
      duration: 0.8,
      delay: index * 0.1,
    }}

    whileHover={{
      scale: 1.08,
      rotateX: 10,
      rotateY: -10,
      z: 80,
    }}
  >

              {/* 🔥 IMAGE AREA */}
              <div className={`h-64 bg-gradient-to-br ${project.color} relative`}>

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all" />

                {/* 🔥 ICON POP */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>

              </div>

              {/* 🔥 CONTENT */}
              <div className="p-6">
                <div className="text-xs text-primary font-semibold mb-2">
                  {project.category}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>

              {/* 🔥 BOTTOM GLOW LINE */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}