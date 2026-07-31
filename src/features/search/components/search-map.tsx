"use client";

import { Maximize } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef } from "react";

import type { SearchVenue } from "@/features/search/data/venues";
import { cn } from "@/lib/utils";

/**
 * Leaflet touches `window` on import, so the canvas is loaded client-side only.
 * The placeholder keeps the panel from collapsing while the chunk arrives.
 */
const SearchMapCanvas = dynamic(
  () => import("@/features/search/components/search-map-canvas"),
  {
    ssr: false,
    loading: () => <div className="bg-muted size-full animate-pulse" />,
  },
);

type SearchMapProps = {
  venues: readonly SearchVenue[];
  className?: string;
};

export function SearchMap({ venues, className }: SearchMapProps) {
  const panelRef = useRef<HTMLElement>(null);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }
    // Resizing is picked up by the canvas' ResizeObserver, which re-syncs Leaflet.
    void panelRef.current?.requestFullscreen?.();
  };

  return (
    <aside
      ref={panelRef}
      className={cn("bg-muted relative hidden lg:block", className)}
      aria-label="Map of search results"
    >
      <SearchMapCanvas venues={venues} />

      {/* Leaflet's own panes sit at z-index 400+ */}
      <button
        type="button"
        onClick={toggleFullscreen}
        aria-label="Toggle fullscreen map"
        className="border-border bg-surface-white text-surface-ink absolute top-4 right-4 z-500 flex size-9 items-center justify-center rounded-lg border shadow-sm transition-opacity hover:opacity-80"
      >
        <Maximize className="size-4" aria-hidden />
      </button>
    </aside>
  );
}
