"use client";

import { Expand, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import type { SearchVenue } from "@/features/search/data/venues";
import { cn } from "@/lib/utils";

type SearchMapProps = {
  venues: readonly SearchVenue[];
  className?: string;
};

/**
 * Presentational map panel. Pins are positioned from normalized lat/lng so the
 * layout matches the design without a third-party map SDK. Swap the board for
 * Mapbox/Google once keys are available — the marker + popup contract stays.
 */
export function SearchMap({ venues, className }: SearchMapProps) {
  const [activeId, setActiveId] = useState<string | null>(
    venues[1]?.id ?? venues[0]?.id ?? null,
  );

  const activeVenue = venues.find((venue) => venue.id === activeId) ?? null;

  const bounds = getBounds(venues);

  return (
    <aside
      className={cn(
        "border-border bg-muted relative hidden min-h-[420px] overflow-hidden rounded-2xl border xl:block",
        className,
      )}
      aria-label="Map of search results"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgb(0 0 0 / 0.03) 1px, transparent 1px),
            linear-gradient(180deg, rgb(0 0 0 / 0.03) 1px, transparent 1px),
            linear-gradient(135deg, #f4efe6 0%, #ebe7e0 45%, #e4ecdf 100%)
          `,
          backgroundSize: "48px 48px, 48px 48px, auto",
        }}
      />

      {/* Soft park / river shapes so the board reads as a city map */}
      <div
        aria-hidden
        className="bg-brand-amber/20 absolute top-[18%] left-[12%] h-24 w-40 rounded-[40%]"
      />
      <div
        aria-hidden
        className="absolute right-[8%] bottom-[22%] h-32 w-28 rounded-[45%] bg-emerald-200/40"
      />
      <div
        aria-hidden
        className="absolute top-[40%] left-[30%] h-3 w-[55%] -rotate-6 rounded-full bg-sky-200/50"
      />

      <button
        type="button"
        aria-label="Expand map"
        className="border-border bg-surface-white text-foreground absolute top-3 right-3 z-10 flex size-9 items-center justify-center rounded-lg border shadow-sm"
      >
        <Expand className="size-4" aria-hidden />
      </button>

      {venues.map((venue) => {
        const { top, left } = toPercent(venue, bounds);
        const isActive = venue.id === activeId;

        return (
          <button
            key={venue.id}
            type="button"
            aria-label={venue.title}
            aria-pressed={isActive}
            onClick={() => setActiveId(venue.id)}
            className={cn(
              "absolute z-[1] flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-transform",
              isActive
                ? "bg-brand-red scale-110"
                : "bg-brand-red/90 hover:scale-105",
            )}
            style={{ top, left }}
          >
            <span
              aria-hidden
              className="text-surface-white text-sm leading-none font-bold"
            >
              V
            </span>
          </button>
        );
      })}

      {activeVenue ? (
        <div
          className="border-border bg-surface-white shadow-card absolute z-[2] w-[210px] -translate-x-1/2 overflow-hidden rounded-xl border"
          style={popupPosition(activeVenue, bounds)}
        >
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={activeVenue.gallery[0]!}
              alt=""
              fill
              sizes="210px"
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <p className="text-foreground truncate text-sm font-semibold">
              {activeVenue.title.includes("Downtown")
                ? "Downtown Loft"
                : activeVenue.title}
            </p>
            <p className="text-muted-foreground mt-1 flex items-center gap-1 text-xs">
              <MapPin className="size-3 shrink-0" aria-hidden />
              {activeVenue.location}
            </p>
          </div>
        </div>
      ) : null}
    </aside>
  );
}

type Bounds = {
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
};

function getBounds(venues: readonly SearchVenue[]): Bounds {
  if (venues.length === 0) {
    return { minLat: 51.48, maxLat: 51.54, minLng: -0.16, maxLng: -0.06 };
  }

  const lats = venues.map((venue) => venue.lat);
  const lngs = venues.map((venue) => venue.lng);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);
  const latPad = Math.max((maxLat - minLat) * 0.2, 0.01);
  const lngPad = Math.max((maxLng - minLng) * 0.2, 0.01);

  return {
    minLat: minLat - latPad,
    maxLat: maxLat + latPad,
    minLng: minLng - lngPad,
    maxLng: maxLng + lngPad,
  };
}

function toPercent(venue: SearchVenue, bounds: Bounds) {
  const latRange = bounds.maxLat - bounds.minLat || 1;
  const lngRange = bounds.maxLng - bounds.minLng || 1;
  const left = `${((venue.lng - bounds.minLng) / lngRange) * 100}%`;
  // Invert latitude so north sits toward the top of the panel.
  const top = `${((bounds.maxLat - venue.lat) / latRange) * 100}%`;
  return { top, left };
}

function popupPosition(venue: SearchVenue, bounds: Bounds) {
  const { top, left } = toPercent(venue, bounds);
  return {
    top: `calc(${top} + 28px)`,
    left,
  };
}
