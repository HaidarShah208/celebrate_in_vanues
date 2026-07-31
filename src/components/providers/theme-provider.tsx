"use client";
import {
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useSyncExternalStore,
} from "react";
import { THEME_STORAGE_KEY } from "@/config/constants";
import { useThemeStore } from "@/stores/theme-store";
import type { Theme } from "@/types/theme";
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
function applyTheme(resolved: "light" | "dark") {
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.style.colorScheme = resolved;
}
type ThemeProviderProps = {
  children: ReactNode;
};
export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useThemeStore((state) => state.theme);
  const setResolvedTheme = useThemeStore((state) => state.setResolvedTheme);
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  useIsomorphicLayoutEffect(() => {
    if (!mounted) return;
    const resolved = theme === "system" ? getSystemTheme() : theme;
    applyTheme(resolved);
    setResolvedTheme(resolved);
  }, [theme, mounted, setResolvedTheme]);
  useEffect(() => {
    if (!mounted || theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const resolved = getSystemTheme();
      applyTheme(resolved);
      setResolvedTheme(resolved);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme, mounted, setResolvedTheme]);
  return children;
}
export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var raw=localStorage.getItem(k);var theme="light";if(raw){var p=JSON.parse(raw);if(p&&p.state&&p.state.theme){theme=p.state.theme;}}var dark=theme==="dark"||(theme==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.classList.toggle("dark",dark);r.style.colorScheme=dark?"dark":"light";}catch(e){}})();`;
export function setThemePreference(theme: Theme) {
  useThemeStore.getState().setTheme(theme);
}
