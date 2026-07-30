"use client";

import { type ReactNode } from "react";
import { Toaster } from "sonner";

import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { useThemeStore } from "@/stores/theme-store";

type AppProvidersProps = {
  children: ReactNode;
};

function ToasterWithTheme() {
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme);

  return (
    <Toaster
      richColors
      closeButton
      position="top-right"
      theme={resolvedTheme}
    />
  );
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryProvider>
      <ThemeProvider>
        {children}
        <ToasterWithTheme />
      </ThemeProvider>
    </QueryProvider>
  );
}
