"use client";

import type { ReactNode } from "react";

import { CarouselArrows } from "@/components/ui/carousel-arrows";
import { useCarouselScroll } from "@/hooks/use-carousel-scroll";
import { cn } from "@/lib/utils";

type CardCarouselProps = {
  /** Describes what is being paged, used for the arrows' accessible labels. */
  label: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Snap-scrolling row of cards with paging arrows. Children set their own
 * responsive `basis`, so the same shell works for any card size.
 *
 * The track gap is 24px (`gap-6`). Cards that want a whole number per row
 * subtract it from their basis, and `useCarouselScroll` adds it to each step,
 * so all three must change together.
 */
export function CardCarousel({
  label,
  children,
  tone = "light",
  className,
}: CardCarouselProps) {
  const { scrollerRef, canScrollBack, canScrollForward, scrollByCard } =
    useCarouselScroll();

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto"
      >
        {children}
      </div>

      <CarouselArrows
        label={label}
        tone={tone}
        canScrollBack={canScrollBack}
        canScrollForward={canScrollForward}
        onBack={() => scrollByCard(-1)}
        onForward={() => scrollByCard(1)}
      />
    </div>
  );
}
