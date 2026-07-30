"use client";

import {
  VENUE_FILTERS,
  type VenueFilter,
} from "@/features/home/data/featured-venues";
import { cn } from "@/lib/utils";

type VenueFilterTabsProps = {
  activeFilter: VenueFilter;
  onFilterChange: (filter: VenueFilter) => void;
};

export function VenueFilterTabs({
  activeFilter,
  onFilterChange,
}: VenueFilterTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Venue categories"
      className="no-scrollbar flex gap-2 overflow-x-auto lg:flex-wrap lg:justify-center lg:overflow-visible"
    >
      {VENUE_FILTERS.map((filter) => {
        const isActive = filter === activeFilter;

        return (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onFilterChange(filter)}
            className={cn(
              "flex h-[46px] shrink-0 items-center justify-center rounded-lg px-6 text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors lg:px-8",
              isActive
                ? "bg-brand-red text-surface-white"
                : "bg-surface-white/30 text-surface-white hover:bg-surface-white/40",
            )}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
