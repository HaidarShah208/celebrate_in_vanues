import { VenueCard } from "@/features/home/components/featured/venue-card";
import type { SearchVenue } from "@/features/search/data/venues";
import type { Venue } from "@/features/home/data/featured-venues";

type SearchVenueGridProps = {
  venues: readonly SearchVenue[];
};

function toVenueCardModel(venue: SearchVenue): Venue {
  return {
    id: venue.id,
    title: venue.title,
    location: venue.location,
    guests: venue.guests,
    area: venue.area,
    parking: venue.parking,
    extraAmenities: venue.extraAmenities,
    pricePerHour: venue.pricePerHour,
    isVerified: venue.isVerified,
    gallery: venue.gallery,
  };
}

export function SearchVenueGrid({ venues }: SearchVenueGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
      {venues.map((venue) => (
        <VenueCard
          key={venue.id}
          venue={toVenueCardModel(venue)}
          className="shadow-card w-full basis-auto snap-none rounded-xl"
        />
      ))}
    </div>
  );
}
