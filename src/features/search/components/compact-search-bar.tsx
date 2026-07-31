"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import {
  buildSearchHref,
  type SearchQuery,
} from "@/features/search/lib/search-params";
import { cn } from "@/lib/utils";

type CompactSearchBarProps = {
  query: SearchQuery;
  className?: string;
};

function formatGuestsLabel(guests: string): string {
  const trimmed = guests.trim();
  if (!trimmed) return "Guests";
  if (/guests/i.test(trimmed)) return trimmed;
  return `${trimmed} Guests`;
}

function formatLocationDisplay(location: string): string {
  if (!location) return "Anywhere";
  const label = location
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
  // Demo data uses city slugs; restore a country hint for the common ones.
  if (label.toLowerCase() === "london") return "London, UK";
  if (label.toLowerCase() === "dubai") return "Dubai, UAE";
  return label;
}

function formatDateDisplay(date: string): string {
  if (!date || date.toLowerCase() === "anytime") return "Anytime";
  return date;
}

/**
 * Pill search summary used in the white search-page header. Re-submitting
 * keeps the same param contract the hero produces.
 */
export function CompactSearchBar({ query, className }: CompactSearchBarProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const segments = [
    formatLocationDisplay(query.location),
    formatDateDisplay(query.date),
    formatGuestsLabel(query.guests),
  ];

  const handleSearch = () => {
    startTransition(() => {
      router.push(buildSearchHref(query));
    });
  };

  return (
    <div
      className={cn(
        " bg-surface-white flex h-12 max-w-full items-center rounded-[10px] shadow-md",
        className,
      )}
    >
      {segments.map((segment, index) => (
        <button
          key={segment}
          type="button"
          className={cn(
            "text-surface-ink truncate px-3 text-sm font-medium",
            index > 0 && "border-border border-l",
          )}
        >
          {segment}
        </button>
      ))}

      <button
        type="button"
        aria-label="Search"
        aria-busy={isPending}
        disabled={isPending}
        onClick={handleSearch}
        className="bg-brand-red text-surface-white ml-2 flex size-9 shrink-0 items-center justify-center rounded-[10px] transition-opacity hover:opacity-90 disabled:opacity-70"
      >
        <Search className="size-4" strokeWidth={2} aria-hidden />
      </button>
    </div>
  );
}
