import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Github, Linkedin, Download, Mail } from 'lucide-react';
import HeroAvatar from "./HeroAvatar";
import { useEffect, useState } from "react";

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

  // 🔥 CUSTOM TYPING LOGIC
  const texts = [
    "Sheik Almadeen",
    "App Developer",
    "AI Engineer"
  ];

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {

      if (!deleting) {
        setDisplayText(texts[index].substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex === texts[index].length) {
          setDeleting(true);
        }

      } else {
        setDisplayText(texts[index].substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((index + 1) % texts.length);
        }
      }

    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      id="home"
      className="min-h-screen pt-20 bg-white dark:bg-dark relative overflow-hidden transition-colors duration-300"
    >

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/20 rounded-full blur-[80px] sm:blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-[80px] sm:blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* 🔥 LEFT */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">

            <div className="space-y-4">
              <h2 className="text-base sm:text-xl text-gray-600 dark:text-gray-400">
                Hi, I am
              </h2>

              {/* 🔥 FIXED TYPING */}
             <h1 className="parallax-text text-4xl sm:text-5xl lg:text-7xl font-bold text-black dark:text-white leading-tight">

  {displayText.split("").map((char, i) => {

    const fullText = texts[index];

    // find colored part
    let highlightStart = 0;

    if (fullText.includes("Almadeen")) {
      highlightStart = fullText.indexOf("Almadeen");
    } else if (fullText.includes("Developer")) {
      highlightStart = fullText.indexOf("Developer");
    } else if (fullText.includes("Engineer")) {
      highlightStart = fullText.indexOf("Engineer");
    }

    const highlightEnd = highlightStart + (
      fullText.includes("Almadeen") ? 8 :
      fullText.includes("Developer") ? 9 :
      fullText.includes("Engineer") ? 8 : 0
    );

    const isColored = i >= highlightStart && i < highlightEnd;

    return (
      <span
        key={i}
        className={isColored ? "text-primary" : ""}
      >
        {char}
      </span>
    );
  })}

  <span className="animate-pulse">|</span>

</h1>

              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed">
                I build modern, scalable web and mobile applications with AI integration,
                delivering clean UI and powerful backend solutions.
              </p>
            </div>

            {/* 🔥 BUTTONS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">

              <button
                onClick={scrollToContact}
                className="px-6 sm:px-8 py-3 bg-primary text-white rounded-full font-medium active:scale-95 transition-all shadow-lg shadow-primary/40"
              >
                Hire Me
              </button>

              <a
                href="/cv.pdf"
                download
                className="px-6 sm:px-8 py-3 border border-primary text-primary rounded-full font-medium active:scale-95 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>

            </div>

            {/* 🔥 SOCIAL */}
            <div className="flex justify-center lg:justify-start gap-4">

              <a
                href="https://github.com/Sheik01-10"
                target="_blank"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary active:scale-90 transition-all"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/sheik-almadeen-0a04112bb/"
                target="_blank"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary active:scale-90 transition-all"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href="mailto:sheikalmadeen@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary active:scale-90 transition-all"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

            </div>

          </div>

          {/* 🔥 RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="h-[300px] sm:h-[400px] lg:h-[600px]"
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