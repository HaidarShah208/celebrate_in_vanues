import imageNewYork from "@/assets/home/discover1.png";
import imageLondon from "@/assets/home/discover2.png";
import imageDubai from "@/assets/home/discover3.png";
import type { Destination } from "@/types/home";
export type { Destination } from "@/types/home";
export const DESTINATIONS: readonly Destination[] = [
  {
    id: "new-york",
    city: "New York, USA",
    venueCount: 24,
    tagline: "Coastal energy, modern Venue",
    popularVenue: "Rooftop",
    fromPricePerHour: 50,
    image: imageNewYork,
  },
  {
    id: "london",
    city: "London, UK",
    venueCount: 108,
    tagline: "Coastal energy, modern Venue",
    popularVenue: "Rooftop",
    fromPricePerHour: 25,
    image: imageLondon,
  },
  {
    id: "dubai",
    city: "Dubai, UAE",
    venueCount: 17,
    tagline: "Coastal energy, modern Venue",
    popularVenue: "Rooftop",
    fromPricePerHour: 50,
    image: imageDubai,
  },
];
