import imageStudio from "@/assets/home/1.png";
import imageCorporate from "@/assets/home/2.png";
import imageBanquet from "@/assets/home/3.png";
import imageCelebration from "@/assets/home/4.png";
import type { Venue } from "@/types/venue";

export type { Venue } from "@/types/venue";
export const VENUE_FILTERS = [
  "Rooftop",
  "Gallery",
  "Restaurant",
  "Outdoor",
  "Studio",
  "Terrace",
  "Ballroom",
] as const;
export type VenueFilter = (typeof VENUE_FILTERS)[number];
export const DEFAULT_VENUE_FILTER: VenueFilter = "Gallery";
const GALLERY_POOL = [
  imageBanquet,
  imageCorporate,
  imageStudio,
  imageCelebration,
] as const;
const PLACEHOLDER_LISTING = {
  title: "High-Spec Room in Trendy Home Clapham/ Stockwell",
  location: "London, SW1",
  guests: "300+",
  area: "2,000 sq ft",
  parking: "Free parking",
  extraAmenities: 25,
  pricePerHour: 50,
  isVerified: true,
} as const;
export const FEATURED_VENUES: readonly Venue[] = GALLERY_POOL.map(
  (_, index) => ({
    id: `venue-${index + 1}`,
    ...PLACEHOLDER_LISTING,
    gallery: [...GALLERY_POOL.slice(index), ...GALLERY_POOL.slice(0, index)],
  }),
);
