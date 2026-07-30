import { PromoBanner } from "@/components/ui/promo-banner";
import { GROW_BUSINESS_PROMO } from "@/features/home/data/promos";

/**
 * Sits on the seam between the cream vendors section and the white venue
 * journey section. The wrapper's background is split at 50%, so the card is
 * always exactly half on each section regardless of how tall it grows.
 */
export function GrowBusinessBanner() {
  return (
    <section className="bg-seam-cream">
      <div className="container-frame px-4 sm:px-6 lg:px-20">
        <PromoBanner {...GROW_BUSINESS_PROMO} withCurveArrow />
      </div>
    </section>
  );
}
