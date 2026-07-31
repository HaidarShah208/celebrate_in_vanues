import { create } from "zustand";
import { persist } from "zustand/middleware";
import { THEME_STORAGE_KEY } from "@/config/constants";
import type { Theme } from "@/types/theme";
type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
  setResolvedTheme: (theme: "light" | "dark") => void;
};
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",
      resolvedTheme: "light",
      setTheme: (theme) => set({ theme }),
      setResolvedTheme: (resolvedTheme) => set({ resolvedTheme }),
    }),
    {
      name: THEME_STORAGE_KEY,
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
