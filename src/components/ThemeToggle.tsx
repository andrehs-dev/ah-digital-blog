"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : false;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <button
      onClick={toggle}
      className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-card)] p-2 text-sm transition hover:bg-[var(--theme-card-hover)]"
      aria-label={dark ? "Modo claro" : "Modo escuro"}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
