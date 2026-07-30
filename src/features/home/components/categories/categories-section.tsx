import { CardCarousel } from "@/components/ui/card-carousel";
import { MediaCard } from "@/components/ui/media-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { VENUE_CATEGORIES } from "@/features/home/data/categories";

export function CategoriesSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-frame px-4 sm:px-6 lg:px-20">
        <SectionHeading
          title="Find The Best Venue For Any Occasion"
          description="Explore venues by category, from timeless ballrooms and rooftops with a view to modern studios and outdoor gardens, discover spaces designed to inspire unforgettable experiences."
        />

        <CardCarousel label="categories" className="mt-10 lg:mt-12">
          {VENUE_CATEGORIES.map((category) => (
            <MediaCard
              key={category.id}
              title={category.title}
              image={category.image}
              badge={`${category.venueCount} Venues`}
            />
          ))}
        </CardCarousel>
      </div>
    </section>
  );
}
