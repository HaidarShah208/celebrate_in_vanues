import { PromoBanner } from "@/components/ui/promo-banner";
import { LIST_VENUE_PROMO } from "@/features/home/data/promos";

/**
 * Sits astride the footer's rounded top edge. The negative bottom margin lives
 * here rather than on the footer so the footer stays reusable on pages that do
 * not carry a promo above it.
 */
export function ListVenueBanner() {
  return (
    <section className="relative z-10 -mb-10 lg:-mb-[67px]">
      {/*
        White plate behind the card, stopping exactly where the footer's rounded
        top edge starts so the footer's black still shows in the gutters either
        side of the overlap. Its inset must match the negative margin above.
      */}
      <div
        aria-hidden
        className="bg-surface-white absolute inset-x-0 top-0 bottom-10 lg:bottom-[67px]"
      />

      <div className="container-frame relative px-4 sm:px-6 lg:px-20">
        <PromoBanner {...LIST_VENUE_PROMO} />
      </div>
    </section>
  );
}
