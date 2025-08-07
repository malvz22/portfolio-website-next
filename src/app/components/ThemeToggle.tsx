"use client";

import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    //Determine the initial theme based on localStorage or system preference
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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
