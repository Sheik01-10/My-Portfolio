import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextType {
  color: string;
  setColor: (color: string) => void;
  mode: "dark" | "light";              // 🔥 NEW
  toggleMode: () => void;              // 🔥 NEW
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState("#ff3b3b");
  const [mode, setMode] = useState<"dark" | "light">("dark"); // 🔥 NEW

  // 🎨 COLOR APPLY
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", color);
  }, [color]);

  // 🌙 DARK / LIGHT APPLY
  useEffect(() => {
    const root = document.documentElement;

    if (mode === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ color, setColor, mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
};