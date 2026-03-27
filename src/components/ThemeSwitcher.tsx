import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Settings } from "lucide-react";

const colors = ["#ff3b3b", "#ff6b00", "#2ecc71", "#1e60ff", "#ff2ebd"];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { setColor } = useTheme(); // 🔥 ONLY COLOR (NO MODE TOUCH)

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">

      {/* ⚙️ SETTINGS BUTTON */}
      <motion.div
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg cursor-pointer"
      >
        {/* 🔥 ALWAYS ROTATE */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
        >
          <Settings className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* 🎨 THEME PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-black p-4 rounded-xl shadow-xl border border-black/10 dark:border-white/10"
          >
            <p className="mb-3 font-semibold text-black dark:text-white">
              Theme Colors
            </p>

            <div className="flex gap-3">
              {colors.map((c) => (
                <motion.div
                  key={c}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setColor(c)} // 🔥 ONLY COLOR CHANGE
                  className="w-8 h-8 rounded-full cursor-pointer border border-black/10 dark:border-white/10"
                  style={{ background: c }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}