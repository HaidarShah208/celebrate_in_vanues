import { PromoBanner } from "@/components/ui/promo-banner";
import { LIST_VENUE_PROMO } from "@/features/home/data/promos";
export function ListVenueBanner() {
  return (
    <section className="relative z-10 -mb-10 lg:-mb-16.75">
      <div
        aria-hidden
        className="bg-background absolute inset-x-0 top-0 bottom-10 lg:bottom-21.5"
      />

      <div className="container-frame relative px-4 sm:px-6 lg:px-20">
        <PromoBanner {...LIST_VENUE_PROMO} />
      </div>
    </section>
  );
}
