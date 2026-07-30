import { CardCarousel } from "@/components/ui/card-carousel";
import { MediaCard } from "@/components/ui/media-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { VENDOR_CATEGORIES } from "@/features/home/data/vendors";

export function VendorsSection() {
  return (
    <section className="bg-surface-cream py-14 sm:py-16 lg:py-20">
      <div className="container-frame px-4 sm:px-6 lg:px-20">
        <SectionHeading
          title="Complete Your Event with our Trusted Vendors"
          description="Venues are just the beginning. Discover caterers, decorators, photographers, entertainment, and more all in one place, ready to bring your event project to life."
        />

        <CardCarousel label="vendors" className="mt-10 lg:mt-12">
          {VENDOR_CATEGORIES.map((vendor) => (
            <MediaCard
              key={vendor.id}
              title={vendor.title}
              image={vendor.image}
            />
          ))}
        </CardCarousel>
      </div>
    </section>
  );
}
