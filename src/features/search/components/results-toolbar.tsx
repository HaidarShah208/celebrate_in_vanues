"use client";

import { ArrowUpDown, ChevronDown, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

function sortLabel(sortId: string): string {
  return (
    SORT_OPTIONS.find((option) => option.id === sortId)?.label ?? "Recommended"
  );
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              aria-label="Sort results"
              className={`${PILL_BASE} group ml-auto shrink-0 gap-1.5 px-3.5 outline-none`}
            >
              <ArrowUpDown className="size-3.5 shrink-0" aria-hidden />
              Sort by: {sortLabel(query.sort)}
              <ChevronDown
                className="text-control-chevron size-3.5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="min-w-[200px]">
            <DropdownMenuRadioGroup
              value={query.sort}
              onValueChange={changeSort}
            >
              {SORT_OPTIONS.map((option) => (
                <DropdownMenuRadioItem key={option.id} value={option.id}>
                  {option.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
