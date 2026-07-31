import { HeroBackdrop } from "@/features/home/components/hero/hero-backdrop";
import { HeroCarouselProvider } from "@/features/home/components/hero/hero-carousel-context";
import { HeroSearchPanel } from "@/features/home/components/hero/hero-search-panel";
import { HeroSlideDots } from "@/features/home/components/hero/hero-slide-dots";
import { HeroTopBar } from "@/features/home/components/hero/hero-top-bar";
export function HeroSection() {
  return (
    <HeroCarouselProvider>
      <section className="bg-surface-hero-base relative isolate w-full overflow-hidden lg:h-[745px]">
        <HeroBackdrop />

        <HeroTopBar />

        <div className="relative z-10 flex flex-col px-4 pt-[128px] pb-16 sm:px-6 lg:px-0 lg:pt-[196px] lg:pb-[129px]">
          <h1 className="text-surface-white mx-auto max-w-[746px] text-center text-[2.25rem] leading-[1.14] font-semibold tracking-[-0.03em] sm:text-[3rem] lg:text-[70px] lg:leading-[80px]">
            Celebrate in venues big and small
          </h1>

          <div className="mt-10 lg:mt-[65px]">
            <HeroSearchPanel />
          </div>

          <div className="mt-10 lg:mt-[49px]">
            <HeroSlideDots />
          </div>
        </div>
      </section>
    </HeroCarouselProvider>
  );
}
