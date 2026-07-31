"use client";
import { ArrowUpDown, ChevronDown, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SPACE_CATEGORIES } from "@/features/search/data/categories";
import {
  DEFAULT_ACTIVE_FILTERS,
  SORT_OPTIONS,
} from "@/features/search/data/filters";
import { formatLocationLabel } from "@/features/search/lib/search-params";
import type { ActiveFilterChip, SearchQuery } from "@/types/search";
const PILL_BASE =
  "border-border text-surface-ink flex h-8 shrink-0 items-center rounded-full border bg-surface-white text-[13px] leading-none";
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
  const changeSort = (sort: string) => {
    const params = new URLSearchParams(window.location.search);
    if (sort === "recommended") {
      params.delete("sort");
    } else {
      params.set("sort", sort);
    }
    const qs = params.toString();
    router.push(qs ? `/search?${qs}` : "/search");
  };
  return (
    <div className="pt-4 pb-4">
      <div className="flex items-center gap-x-4">
        <h1 className="text-surface-ink shrink-0 text-sm">
          {totalCount.toLocaleString()}{" "}
          <span className="font-semibold">{categoryLabel(query.category)}</span>{" "}
          near {formatLocationLabel(query.location || "London")}
        </h1>

        {chips.length > 0 ? (
          <ul className="no-scrollbar flex min-w-0 flex-1 items-center gap-2 overflow-x-auto">
            {chips.map((chip) => (
              <li key={chip.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => removeChip(chip.id)}
                  className={`${PILL_BASE} gap-2 px-3.5 transition-colors`}
                >
                  {chip.label}
                  <X className="text-control-chevron size-3.5" aria-hidden />
                  <span className="sr-only">Remove {chip.label}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        <label
          className={`${PILL_BASE} relative ml-auto shrink-0 gap-1.5 pr-3 pl-3.5`}
          aria-label="Sort results"
        >
          <ArrowUpDown className="size-3.5 shrink-0" aria-hidden />
          Sort by:
          <select
            value={query.sort}
            onChange={(event) => changeSort(event.target.value)}
            className="text-surface-ink cursor-pointer appearance-none bg-transparent pr-4 text-[13px] outline-none"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="text-control-chevron pointer-events-none absolute right-3 size-3.5"
            aria-hidden
          />
        </label>
      </div>
    </div>
  );
}
