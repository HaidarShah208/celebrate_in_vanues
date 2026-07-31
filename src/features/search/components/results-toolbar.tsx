"use client";

import { ChevronDown, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  DEFAULT_ACTIVE_FILTERS,
  SORT_OPTIONS,
  type ActiveFilterChip,
} from "@/features/search/data/filters";
import {
  formatLocationLabel,
  type SearchQuery,
} from "@/features/search/lib/search-params";
import { SPACE_CATEGORIES } from "@/features/search/data/categories";
import { cn } from "@/lib/utils";

type ResultsToolbarProps = {
  query: SearchQuery;
  totalCount: number;
};

function categoryLabel(categoryId: string): string {
  const match = SPACE_CATEGORIES.find((category) => category.id === categoryId);
  if (!match || match.id === "all") return "spaces";
  return `${match.label.toLowerCase()}s`;
}

export function ResultsToolbar({ query, totalCount }: ResultsToolbarProps) {
  const router = useRouter();
  const [chips, setChips] = useState<ActiveFilterChip[]>([
    ...DEFAULT_ACTIVE_FILTERS,
  ]);

  const removeChip = (id: string) => {
    setChips((current) => current.filter((chip) => chip.id !== id));
  };

  const locationLabel = formatLocationLabel(query.location || "London");
  const categoryText = categoryLabel(query.category || "photo-studio");
  const countLabel = totalCount.toLocaleString();

  return (
    <div className="flex flex-col gap-3 px-4 pt-2 pb-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h1 className="text-foreground text-base font-medium sm:text-lg">
            {countLabel} <span className="font-semibold">{categoryText}</span>{" "}
            near {locationLabel}
          </h1>

          {chips.length > 0 ? (
            <ul className="mt-3 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <li key={chip.id}>
                  <button
                    type="button"
                    onClick={() => removeChip(chip.id)}
                    className="bg-muted text-foreground inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:bg-neutral-200"
                  >
                    {chip.label}
                    <X className="size-3.5" aria-hidden />
                    <span className="sr-only">Remove {chip.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <label className="text-muted-foreground relative inline-flex shrink-0 items-center gap-1 text-sm">
          Sort by:
          <select
            className="text-foreground appearance-none bg-transparent pr-5 font-medium outline-none"
            value={query.sort || "recommended"}
            onChange={(event) => {
              const params = new URLSearchParams(window.location.search);
              if (event.target.value === "recommended") {
                params.delete("sort");
              } else {
                params.set("sort", event.target.value);
              }
              const qs = params.toString();
              router.push(qs ? `/search?${qs}` : "/search");
            }}
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className={cn(
              "pointer-events-none absolute top-1/2 right-0 size-3.5 -translate-y-1/2",
            )}
            aria-hidden
          />
        </label>
      </div>
    </div>
  );
}
