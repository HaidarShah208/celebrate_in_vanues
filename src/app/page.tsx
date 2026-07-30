import { CategoriesSection } from "@/features/home/components/categories/categories-section";
import { GrowBusinessBanner } from "@/features/home/components/cta/grow-business-banner";
import { ListVenueBanner } from "@/features/home/components/cta/list-venue-banner";
import { DestinationsSection } from "@/features/home/components/destinations/destinations-section";
import { FeaturedVenuesSection } from "@/features/home/components/featured/featured-venues-section";
import { HeroSection } from "@/features/home/components/hero/hero-section";
import { VenueJourneySection } from "@/features/home/components/journey/venue-journey-section";
import { TrustedSection } from "@/features/home/components/trusted/trusted-section";
import { VendorsSection } from "@/features/home/components/vendors/vendors-section";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <CategoriesSection />
      <FeaturedVenuesSection />
      <VendorsSection />
      <GrowBusinessBanner />
      <VenueJourneySection />
      <TrustedSection />
      <DestinationsSection />
      <ListVenueBanner />
    </main>
  );
}
