"use client";
import { useHeroCarousel } from "@/features/home/components/hero/hero-carousel-context";
import { cn } from "@/lib/utils";
export function HeroSlideDots() {
  const { activeSlide, slideCount, goToSlide } = useHeroCarousel();
  return (
    <div className="flex items-center justify-center gap-[5px]">
      {Array.from({ length: slideCount }, (_, index) => {
        const isActive = index === activeSlide;
        return (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isActive}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              isActive
                ? "bg-brand-amber w-7"
                : "bg-dot-idle/40 hover:bg-dot-idle/70 w-2",
            )}
          />
        );
      })}
    </div>
  );
}
