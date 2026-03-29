import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextType {
  color: string;
  setColor: (color: string) => void;
  mode: "dark" | "light" | "system";
  toggleMode: () => void;
  appliedTheme: "dark" | "light"; // 🔥 NEW
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState("#ff3b3b");
  const [mode, setMode] = useState<"dark" | "light" | "system">("system");

  // 🎯 Detect system theme
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const appliedTheme = mode === "system" ? getSystemTheme() : mode;

  // 🎨 COLOR APPLY
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", color);
  }, [color]);

  // 🌙 APPLY THEME
  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", appliedTheme === "dark");

    // 💾 save
    localStorage.setItem("theme", mode);

    // 🔄 listen system change
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      if (mode === "system") {
        root.classList.toggle("dark", getSystemTheme() === "dark");
      }
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [mode, appliedTheme]);

  // 🔁 load saved
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as any) || "system";
    setMode(saved);
  }, []);

  // 🔘 toggle (3-state)
  const toggleMode = () => {
    if (mode === "light") setMode("dark");
    else if (mode === "dark") setMode("system");
    else setMode("light");
  };

  return (
    <ThemeContext.Provider
      value={{ color, setColor, mode, toggleMode, appliedTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
};