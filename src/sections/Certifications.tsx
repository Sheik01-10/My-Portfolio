import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  "/cert1.jpg",
  "/cert2.jpg",
  "/cert3.jpg",
  "/cert4.jpg",
  "/cert5.jpg",
  "/cert6.jpg",
  "/cert7.jpg",
  "/cert8.jpg",
  "/cert9.jpg",
 // "/cert10.jpg",
  "/cert11.jpg",
  "/cert12.jpg",
  "/cert13.jpg",
];

export default function Certifications() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section 
      id="certifications"
      className="py-24 sm:py-32 bg-white dark:bg-black overflow-hidden relative transition-colors duration-300"
    >

      {/* 🔥 TITLE */}
      <div className="text-center mb-12 sm:mb-20 px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">
          Certifications & <span className="text-primary">Achievements</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          My professional journey & accomplishments 
        </p>
      </div>

      {/* 🔥 INLINE PREVIEW */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            className="mb-10 sm:mb-12 flex justify-center relative px-4"
          >

            {/* IMAGE */}
            <img
              src={selected}
              alt="preview"
              className="w-full max-w-[90%] sm:max-w-[500px] rounded-xl shadow-2xl border border-black/10 dark:border-white/10"
            />

            {/* ❌ CLOSE BUTTON */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-6 sm:right-2 w-10 h-10 bg-white/70 dark:bg-black/70 backdrop-blur rounded-full flex items-center justify-center text-black dark:text-white active:scale-90 hover:text-primary transition"
            >
              <X className="w-5 h-5" />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔥 SCROLL */}
      <div className="relative w-full overflow-hidden">

        <motion.div
          className="flex gap-6 sm:gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >

          {[...images, ...images].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(src)}
              className="min-w-[220px] sm:min-w-[300px] h-[140px] sm:h-[200px] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 cursor-pointer"
            >
              <img
                src={src}
                alt="cert"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}

        </motion.div>
      </div>

    </section>
  );
}