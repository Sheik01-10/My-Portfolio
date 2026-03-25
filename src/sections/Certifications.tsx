import { motion } from "framer-motion";

const images = [
  "/cert1.jpg",
  "/cert2.jpg",
  "/cert3.jpg",
  "/cert4.jpg",
  "/cert5.jpg",
];

export default function Certifications() {
  return (
    <section 
    id="certifications"
    className="py-32 bg-black overflow-hidden relative">

      {/* 🔥 TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">
          Certifications & <span className="text-primary">Achievements</span>
        </h2>
        <p className="text-gray-400">
          My professional journey & accomplishments 
        </p>
      </div>

      {/* 🔥 SCROLL CONTAINER */}
      <div className="relative w-full overflow-hidden">

        {/* 🔥 MOVING TRACK */}
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >

          {/* 🔥 DUPLICATE IMAGES (IMPORTANT FOR LOOP) */}
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="min-w-[300px] h-[200px] rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all"
            >
              <img
                src={src}
                alt="cert"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}