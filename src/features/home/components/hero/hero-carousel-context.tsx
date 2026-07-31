"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { HERO_AUTOPLAY_MS, HERO_SLIDES } from "@/features/home/data/hero";
import { useMediaQuery } from "@/hooks/use-media-query";
type HeroCarouselValue = {
  activeSlide: number;
  slideCount: number;
  goToSlide: (index: number) => void;
};
const HeroCarouselContext = createContext<HeroCarouselValue | null>(null);
const SLIDE_COUNT = HERO_SLIDES.length;
export function HeroCarouselProvider({ children }: { children: ReactNode }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );
  const goToSlide = useCallback((index: number) => {
    setActiveSlide(((index % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);
  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setTimeout(() => {
      goToSlide(activeSlide + 1);
    }, HERO_AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [activeSlide, goToSlide, prefersReducedMotion]);
  const value = useMemo(
    () => ({ activeSlide, slideCount: SLIDE_COUNT, goToSlide }),
    [activeSlide, goToSlide],
  );
  return (
    <HeroCarouselContext.Provider value={value}>
      {children}
    </HeroCarouselContext.Provider>
  );
}
export function useHeroCarousel() {
  const context = useContext(HeroCarouselContext);
  if (!context) {
    throw new Error(
      "useHeroCarousel must be used within a HeroCarouselProvider",
    );
  }
  return context;
}
