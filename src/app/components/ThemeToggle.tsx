"use client";

import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return localStorage.theme === "dark" ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(`theme: ${theme}`);
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full bg-gray-200 dark:bg-slate-600 text-[24px]"
    >
      {theme === "dark" ? (
        <IoMoon className="text-white" />
      ) : (
        <IoSunny className="text-black" />
      )}
    </button>
  );
};

export default ThemeToggle;
