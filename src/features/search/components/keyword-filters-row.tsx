"use client";

import { SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import searchIcon from "@/assets/search/search.svg";
import {
  buildSearchHref,
  type SearchQuery,
} from "@/features/search/lib/search-params";

type KeywordFiltersRowProps = {
  query: SearchQuery;
};

/**
 * Full-bleed keyword bar. The input is borderless and sits directly on the row,
 * with only a hairline separating it from the Filters control. `container-frame`
 * matches the header so the search icon and the Filters label line up with the
 * logo and the account buttons above them.
 */
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
    <div className="border-border border-b">
      <div className="flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <label className="flex h-full min-w-0 flex-1 items-center gap-3">
          {/* Sits in the flow rather than absolutely, so the input needs no inset. */}
          <Image
            src={searchIcon}
            alt=""
            aria-hidden
            width={20}
            height={20}
            className="shrink-0"
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
            className="text-surface-ink placeholder:text-muted-foreground h-full w-full bg-transparent pr-3 text-sm outline-none"
          />
        </label>

        <span className="bg-border h-6 w-px shrink-0" aria-hidden />

        <button
          type="button"
          disabled={isPending}
          className="text-surface-ink flex shrink-0 items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
        >
          <SlidersHorizontal className="size-[18px]" aria-hidden />
          Filters
        </button>
      </div>
    </div>
  );
}
