"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment, useTransition } from "react";

import { buildSearchHref } from "@/features/search/lib/search-params";
import { cn } from "@/lib/utils";
import type { SearchQuery } from "@/types/search";

type CompactSearchBarProps = {
  query: SearchQuery;
  className?: string;
};

type Segment = {
  id: string;
  label: string;
  isPlaceholder: boolean;
};

function formatLocationDisplay(location: string): string {
  const label = location
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
  if (label.toLowerCase() === "london") return "London, UK";
  if (label.toLowerCase() === "dubai") return "Dubai, UAE";
  return label;
}

function formatGuestsDisplay(guests: string): string {
  return /guests/i.test(guests) ? guests : `${guests} Guests`;
}

function buildSegments(query: SearchQuery): Segment[] {
  const location = query.location.trim();
  const date = query.date.trim();
  const guests = query.guests.trim();

  // The parser normalises a missing date to "anytime", so that value reads as unset.
  const hasDate = Boolean(date) && date.toLowerCase() !== "anytime";

  return [
    {
      id: "where",
      label: location ? formatLocationDisplay(location) : "Where",
      isPlaceholder: !location,
    },
    {
      id: "when",
      label: hasDate ? date : "When",
      isPlaceholder: !hasDate,
    },
    {
      id: "guests",
      label: guests ? formatGuestsDisplay(guests) : "Guests",
      isPlaceholder: !guests,
    },
  ];
}

export function CompactSearchBar({ query, className }: CompactSearchBarProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const segments = buildSegments(query);

  const handleSearch = () => {
    startTransition(() => {
      router.push(buildSearchHref(query));
    });
  };

  return (
    <div
      className={cn(
        "drop-shadow-control bg-panel flex h-11 w-full max-w-107.5 items-center rounded-[10px] pr-1.75 pl-6.25",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 items-center justify-center gap-7.5">
        {segments.map((segment, index) => (
          <Fragment key={segment.id}>
            {index > 0 ? (
              <span className="bg-rule-divider h-4.25 w-px shrink-0" />
            ) : null}
            <button
              type="button"
              className={cn(
                "truncate text-[14px] leading-5.25 font-medium",
                segment.isPlaceholder ? "text-muted-foreground" : "text-ink",
              )}
            >
              {segment.label}
            </button>
          </Fragment>
        ))}
      </div>

      <button
        type="button"
        aria-label="Search"
        aria-busy={isPending}
        disabled={isPending}
        onClick={handleSearch}
        className="bg-brand-red text-surface-white ml-[7px] flex h-[34px] w-[35px] shrink-0 items-center justify-center rounded-[10px] transition-opacity hover:opacity-90 disabled:opacity-70"
      >
        <Search className="size-[18px]" strokeWidth={1.75} aria-hidden />
      </button>
    </div>
  );
}
