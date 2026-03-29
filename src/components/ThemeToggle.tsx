import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { appliedTheme, toggleMode } = useTheme();
  

  return (
    <motion.div
      onClick={toggleMode}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 flex items-center justify-center rounded-full 
                 bg-white/10 backdrop-blur-md border border-white/20 
                 cursor-pointer"
    >
      {appliedTheme === "dark" ? (
        <Moon className="w-5 h-5 text-white" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-500" />
      )}
    </motion.div>
  );
}