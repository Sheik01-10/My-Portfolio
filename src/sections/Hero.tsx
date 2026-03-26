import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Github, Linkedin, Download, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import HeroAvatar from "./HeroAvatar";

export default function Hero() {

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-dark relative overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* 🔥 LEFT */}
          <div className="space-y-8">

            <div className="space-y-4">
              <h2 className="text-xl text-gray-400">Hi, I am</h2>

              <h1 className="parallax-text text-6xl lg:text-7xl font-bold text-white leading-tight">
                <TypeAnimation
                  sequence={[
                    'Sheik Almadeen',
                    2000,
                    '',
                    500,
                    'App Developer',
                    2000,
                    '',
                    500,
                    'AI Engineer',
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </h1>

              <p className="text-gray-400 max-w-lg leading-relaxed">
                I build modern, scalable web and mobile applications with AI integration,
                delivering clean UI and powerful backend solutions.
              </p>
            </div>

            {/* 🔥 BUTTONS */}
            <div className="flex gap-4">

              {/* 💼 HIRE ME */}
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:scale-105 transition-all shadow-lg shadow-primary/40"
              >
                Hire Me
              </button>

              {/* 📄 DOWNLOAD CV */}
              <a
                href="/cv.pdf"
                download
                className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>

            </div>

            {/* 🔥 SOCIAL */}
            <div className="flex gap-4">

              <a
                href="https://github.com/Sheik01-10"
                target="_blank"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/sheik-almadeen-0a04112bb/"
                target="_blank"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:sheikalmadeen@gmail.com"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>

            </div>

          </div>

          {/* 🔥 RIGHT 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="h-[600px]"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
  <ambientLight intensity={0.6} />
  <pointLight position={[5, 5, 5]} />
  <pointLight position={[-5, -5, -5]} color="#ff6b00" />

  <HeroAvatar />

  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
</Canvas>
          </motion.div>

        </div>
      </div>
    </section>
  );
}