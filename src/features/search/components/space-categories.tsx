"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

import { MaskIcon } from "@/components/ui/mask-icon";
import { SPACE_CATEGORIES } from "@/features/search/data/categories";
import {
  buildSearchHref,
  type SearchQuery,
} from "@/features/search/lib/search-params";
import { cn } from "@/lib/utils";

const ARROW_BASE =
  "text-control-chevron hover:text-foreground hidden size-8 shrink-0 items-center justify-center transition-colors sm:flex";

type SpaceCategoriesProps = {
  query: SearchQuery;
};

export function SpaceCategories({ query }: SpaceCategoriesProps) {
  const router = useRouter();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const activeCategory = query.category || "all";

  const scrollBy = (direction: -1 | 1) => {
    scrollerRef.current?.scrollBy({
      left: direction * 280,
      behavior: "smooth",
    });
  };

  return (
    /* Bottom edge only — the header above already draws the line above this. */
    <div className="border-rule-strong border-b">
      <div className="container-frame flex items-center gap-2 px-4 py-0.5 sm:px-6 lg:px-8">
        <button
          type="button"
          aria-label="Previous categories"
          onClick={() => scrollBy(-1)}
          className={ARROW_BASE}
        >
          <ArrowLeft className="size-5" strokeWidth={2} aria-hidden />
        </button>

        <div
          ref={scrollerRef}
          role="tablist"
          aria-label="Space types"
          className="no-scrollbar flex flex-1 snap-x snap-mandatory gap-1 overflow-x-auto scroll-smooth"
        >
          {SPACE_CATEGORIES.map(({ id, label, icon }) => {
            const isActive = id === activeCategory;

            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() =>
                  router.push(buildSearchHref({ ...query, category: id }))
                }
                className={cn(
                  // flex-1 spreads the tiles across the full width; the min
                  // width keeps labels readable and lets the row scroll instead
                  // of crushing them on narrow screens.
                  "flex h-19.75 w-28.25 flex-1 cursor-pointer snap-start flex-col items-center justify-center gap-1.5 rounded-md px-2 py-2 transition-colors",
                  isActive
                    ? "bg-[#F4F4F4] text-[#FF5037]"
                    : "text-icon-idle hover:bg-[#F4F4F4]/50",
                )}
              >
                <MaskIcon src={icon.src} className="size-6" />
                <span
                  className={cn(
                    "text-sm leading-tight whitespace-nowrap",
                    isActive ? "font-semibold" : "text-surface-ink font-medium",
                  )}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Next categories"
          onClick={() => scrollBy(1)}
          className={ARROW_BASE}
        >
          <ArrowRight className="size-5" strokeWidth={1.5} aria-hidden />
        </button>
      </div>
    </div>
  );
}
