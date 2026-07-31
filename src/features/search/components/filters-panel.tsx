"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { RangeSlider } from "@/components/ui/range-slider";
import {
  FILTER_CAPACITY,
  FILTER_OCCASIONS,
  FILTER_PRICE,
  FILTER_VENUE_TYPES,
} from "@/features/search/data/filter-panel";
import { cn } from "@/lib/utils";
import type { FilterDraft } from "@/types/search";

type FiltersPanelProps = {
  open: boolean;
  onClose: () => void;
  onApply?: (filters: FilterDraft) => void;
};

export type { FilterDraft };

const INITIAL_DRAFT: FilterDraft = {
  venueTypes: [],
  occasions: [],
  capacity: [FILTER_CAPACITY.min, FILTER_CAPACITY.max],
  price: [FILTER_PRICE.min, FILTER_PRICE.max],
  verifiedOnly: false,
};

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

function formatAed(value: number): string {
  return `AED ${value.toFixed(2)}`;
}

type ChipProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

function FilterChip({ label, selected, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "rounded-full px-3.5 py-2 text-[13px] leading-none font-medium transition-colors",
        selected
          ? "bg-surface-blush-soft text-brand-red"
          : "bg-chip-fill text-surface-ink hover:bg-muted",
      )}
    >
      {label}
    </button>
  );
}

export function FiltersPanel({ open, onClose, onApply }: FiltersPanelProps) {
  const [draft, setDraft] = useState<FilterDraft>(INITIAL_DRAFT);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  const clearAll = () => setDraft(INITIAL_DRAFT);

  const apply = () => {
    onApply?.(draft);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="Close filters backdrop"
        className="bg-surface-ink/40 absolute inset-0"
        onClick={onClose}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Filters"
        className="bg-surface-white shadow-panel relative flex h-dvh w-full max-w-[654px] flex-col"
      >
        <div className="border-border flex h-16 shrink-0 items-center justify-between border-b px-5 sm:px-6">
          <h2 className="text-surface-ink text-xl font-semibold">Filters</h2>
          <button
            type="button"
            aria-label="Close filters"
            onClick={onClose}
            className="text-surface-ink flex size-10 items-center justify-center rounded-full transition-opacity hover:opacity-70"
          >
            <X className="size-5" strokeWidth={1.75} aria-hidden />
          </button>
        </div>

        <div className="no-scrollbar flex-1 overflow-y-auto px-5 py-6 sm:px-6">
          <section>
            <h3 className="text-surface-ink text-base font-semibold">
              Venue Type
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {FILTER_VENUE_TYPES.map((type) => (
                <FilterChip
                  key={type}
                  label={type}
                  selected={draft.venueTypes.includes(type)}
                  onClick={() =>
                    setDraft((current) => ({
                      ...current,
                      venueTypes: toggleValue(current.venueTypes, type),
                    }))
                  }
                />
              ))}
            </div>
          </section>

          <div className="border-border my-7 border-t" />

          <section>
            <h3 className="text-surface-ink text-base font-semibold">
              Capacity
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              Showing venues for {draft.capacity[0]} - {draft.capacity[1]}{" "}
              guests
            </p>
            <RangeSlider
              className="mt-5"
              min={FILTER_CAPACITY.min}
              max={FILTER_CAPACITY.max}
              step={FILTER_CAPACITY.step}
              value={draft.capacity}
              aria-label="Capacity"
              onChange={(capacity) =>
                setDraft((current) => ({ ...current, capacity }))
              }
            />
          </section>

          <div className="border-border my-7 border-t" />

          <section>
            <h3 className="text-surface-ink text-base font-semibold">
              Price per hour (AED)
            </h3>
            <div className="text-surface-ink mt-3 flex items-center justify-between text-sm font-medium">
              <span>{formatAed(draft.price[0])}</span>
              <span>{formatAed(draft.price[1])}</span>
            </div>
            <RangeSlider
              className="mt-3"
              min={FILTER_PRICE.min}
              max={FILTER_PRICE.max}
              step={FILTER_PRICE.step}
              value={draft.price}
              aria-label="Price per hour"
              onChange={(price) =>
                setDraft((current) => ({ ...current, price }))
              }
            />
          </section>

          <div className="border-border my-7 border-t" />

          <section>
            <h3 className="text-surface-ink text-base font-semibold">
              Event / Occasion
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {FILTER_OCCASIONS.map((occasion) => (
                <FilterChip
                  key={occasion}
                  label={occasion}
                  selected={draft.occasions.includes(occasion)}
                  onClick={() =>
                    setDraft((current) => ({
                      ...current,
                      occasions: toggleValue(current.occasions, occasion),
                    }))
                  }
                />
              ))}
            </div>
          </section>

          <div className="border-border my-7 border-t" />

          <section className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-surface-ink text-base font-semibold">
                Verified Only
              </h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Show only verified venues
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={draft.verifiedOnly}
              onClick={() =>
                setDraft((current) => ({
                  ...current,
                  verifiedOnly: !current.verifiedOnly,
                }))
              }
              className={cn(
                "relative h-7 w-12 shrink-0 rounded-full transition-colors",
                draft.verifiedOnly ? "bg-brand-red" : "bg-border",
              )}
            >
              <span
                className={cn(
                  "bg-surface-white absolute top-0.5 left-0.5 size-6 rounded-full shadow-sm transition-transform",
                  draft.verifiedOnly && "translate-x-5",
                )}
              />
            </button>
          </section>
        </div>

        <div className="border-border flex shrink-0 items-center justify-between gap-3 border-t px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={clearAll}
            className="bg-chip-fill text-surface-ink h-11 rounded-lg px-5 text-sm font-medium transition-opacity hover:opacity-80"
          >
            Clear All
          </button>
          <button
            type="button"
            onClick={apply}
            className="bg-brand-red text-surface-white h-11 rounded-lg px-6 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            Apply Filters
          </button>
        </div>
      </aside>
    </div>
  );
}
