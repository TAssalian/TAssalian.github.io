"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme-preference";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextIsDark = saved ? saved === "dark" : prefersDark;
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
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="theme-icon">
          <path
            d="M12 4.5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1V6a1 1 0 0 1-2 0V4.5zM12 18a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 0V19a1 1 0 0 1 1-1zM6 11a1 1 0 0 1 1-1h1.5a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1zM16.5 10a1 1 0 0 1 0-2H18a1 1 0 1 1 0 2h-1.5zM7.76 6.76a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41L7.76 8.17a1 1 0 0 1 0-1.41zM14.17 13.17a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41zM7.76 15.83a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41 0zM14.17 8.17a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41 0zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="theme-icon">
          <path
            d="M14.5 2.5a1 1 0 0 1 .9 1.42 8 8 0 1 0 8.68 11.08 1 1 0 0 1 1.23-.67 1 1 0 0 1 .7 1.19 10 10 0 1 1-11.96-12.7 1 1 0 0 1 .45-.02z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
}
