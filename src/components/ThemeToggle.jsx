"use client";

import { MoonIcon, SunIcon } from "@/components/Icons";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // ignore storage errors
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Ganti tema terang/gelap"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-obsidian/15 bg-paper/70 text-muted transition-colors hover:border-inkwell hover:text-inkwell"
    >
      <SunIcon className="h-4.5 w-4.5 dark:hidden" />
      <MoonIcon className="hidden h-4.5 w-4.5 dark:block" />
    </button>
  );
}
