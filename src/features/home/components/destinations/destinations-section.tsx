import { SectionHeading } from "@/components/ui/section-heading";
import { DestinationCard } from "@/features/home/components/destinations/destination-card";
import { DESTINATIONS } from "@/features/home/data/destinations";
export function DestinationsSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-frame px-4 sm:px-6 lg:px-20">
        <SectionHeading
          title="Discover Exceptional Destinations Across the Region"
          description="From cosmopolitan cityscapes to cultural treasures, explore where celebrations come alive with local flavor."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {DESTINATIONS.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
