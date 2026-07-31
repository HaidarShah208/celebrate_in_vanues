import { PromoBanner } from "@/components/ui/promo-banner";
import { GROW_BUSINESS_PROMO } from "@/features/home/data/promos";
export function GrowBusinessBanner() {
  return (
    <section className="bg-seam-cream">
      <div className="container-frame px-4 sm:px-6 lg:px-20">
        <PromoBanner {...GROW_BUSINESS_PROMO} />
      </div>
    </section>
  );
}
