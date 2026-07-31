"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import {
  buildSearchHref,
  type SearchQuery,
} from "@/features/search/lib/search-params";

type KeywordFiltersRowProps = {
  query: SearchQuery;
};

export function KeywordFiltersRow({ query }: KeywordFiltersRowProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [keyword, setKeyword] = useState(query.q);

  const submitKeyword = () => {
    startTransition(() => {
      router.push(buildSearchHref({ ...query, q: keyword }));
    });
  };

  return (
    <div className="flex items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
      <label className="border-border bg-surface-white relative flex h-11 min-w-0 flex-1 items-center rounded-lg border">
        <Search
          className="text-muted-foreground pointer-events-none absolute left-3 size-4"
          aria-hidden
        />
        <input
          type="search"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              submitKeyword();
            }
          }}
          placeholder="Add keywords..."
          aria-label="Add keywords"
          className="text-foreground placeholder:text-muted-foreground h-full w-full rounded-lg bg-transparent pr-3 pl-10 text-sm outline-none"
        />
      </label>

      <button
        type="button"
        disabled={isPending}
        className="border-border text-foreground hover:bg-muted flex h-11 shrink-0 items-center gap-2 rounded-lg border px-4 text-sm font-medium transition-colors"
      >
        <SlidersHorizontal className="size-4" aria-hidden />
        Filters
      </button>
    </div>
  );
}
