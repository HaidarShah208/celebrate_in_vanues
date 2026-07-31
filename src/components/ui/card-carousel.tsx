"use client";

import type { ReactNode } from "react";

import { CarouselArrows } from "@/components/ui/carousel-arrows";
import { useCarouselScroll } from "@/hooks/use-carousel-scroll";
import { cn } from "@/lib/utils";

type CardCarouselProps = {
  label: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

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
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth"
      >
        {children}
      </div>

      <CarouselArrows
        className="hidden sm:flex"
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
