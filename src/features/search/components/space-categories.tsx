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
    <div className="border-border border-b">
      <div className="container-frame flex items-center gap-2 px-4 py-2 sm:px-6 lg:px-8">
        <button
          type="button"
          aria-label="Previous categories"
          onClick={() => scrollBy(-1)}
          className={ARROW_BASE}
        >
          <ArrowLeft className="size-5" strokeWidth={1.5} aria-hidden />
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
                  "flex w-[92px] shrink-0 snap-start flex-col items-center justify-center gap-1.5 rounded-lg px-2 py-2 transition-colors",
                  isActive
                    ? "bg-surface-blush-soft text-brand-red"
                    : "text-icon-idle hover:bg-muted",
                )}
              >
                <MaskIcon src={icon.src} className="size-6" />
                <span
                  className={cn(
                    "text-[11px] leading-tight whitespace-nowrap",
                    isActive
                      ? "font-semibold"
                      : "text-control-idle-label font-medium",
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
