"use client";

import { Maximize } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef } from "react";

import type { SearchVenue } from "@/types/venue";
import { cn } from "@/lib/utils";

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
    void panelRef.current?.requestFullscreen?.();
  };

  return (
    <aside
      ref={panelRef}
      className={cn("bg-muted relative block", className)}
      aria-label="Map of search results"
    >
      <SearchMapCanvas venues={venues} />

      <button
        type="button"
        onClick={toggleFullscreen}
        aria-label="Toggle fullscreen map"
        className="border-border bg-panel text-ink absolute top-4 right-4 z-500 flex size-9 items-center justify-center rounded-lg border shadow-sm transition-opacity hover:opacity-80"
      >
        <Maximize className="size-4" aria-hidden />
      </button>
    </aside>
  );
}
