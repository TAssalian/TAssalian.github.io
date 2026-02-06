"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme-preference";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const nextIsDark = saved ? saved === "dark" : false;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("theme-dark", nextIsDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("theme-dark", next);
    window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  };

  return (
    <button
      className={`theme-toggle ${isDark ? "theme-toggle--dark" : "theme-toggle--light"}`}
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun aria-hidden="true" className="theme-icon" />
      ) : (
        <Moon aria-hidden="true" className="theme-icon" />
      )}
    </button>
  );
}
