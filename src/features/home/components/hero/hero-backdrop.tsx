"use client";

import Image from "next/image";

import { useHeroCarousel } from "@/features/home/components/hero/hero-carousel-context";
import { HERO_SLIDES } from "@/features/home/data/hero";
import { cn } from "@/lib/utils";

export function HeroBackdrop() {
  const { activeSlide } = useHeroCarousel();

  return (
    <div className="absolute inset-0" aria-hidden>
      {HERO_SLIDES.map((slide, index) => (
        <Image
          key={slide.id}
          src={slide.image}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-700 ease-out",
            index === activeSlide ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      {/* 40% black scrim from the design, flattening the photo behind the copy */}
      <div className="bg-surface-ink/40 absolute inset-0" />
    </div>
  );
}
