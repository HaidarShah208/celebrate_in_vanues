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
      <div className="container-frame px-4 sm:px-6 lg:px-20">
        <PromoBanner {...LIST_VENUE_PROMO} />
      </div>
    </section>
  );
}
