"use client";

import { Moon, Sun } from "lucide-react";

import { setThemePreference } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  // Read the resolved theme off the root element rather than the store so the
  // button stays correct even before the provider's first effect has run.
  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setThemePreference(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={cn("outline-none", className)}
    >
      <Sun className="size-5 dark:hidden" strokeWidth={1.75} aria-hidden />
      <Moon
        className="hidden size-5 dark:block"
        strokeWidth={1.75}
        aria-hidden
      />
    </button>
  );
}
