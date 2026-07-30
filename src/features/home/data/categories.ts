import type { StaticImageData } from "next/image";

import imageCelebration from "@/assets/home/4.png";
import imageCorporate from "@/assets/home/2.png";
import imageStudios from "@/assets/home/1.png";
import imagePrivateParty from "@/assets/home/3.png";

type VenueCategory = {
  id: string;
  title: string;
  venueCount: number;
  image: StaticImageData;
};

export const VENUE_CATEGORIES: readonly VenueCategory[] = [
  {
    id: "celebration",
    title: "Celebration Venues",
    venueCount: 37,
    image: imageCelebration,
  },
  {
    id: "private-party",
    title: "Private Party Venues",
    venueCount: 37,
    image: imagePrivateParty,
  },
  {
    id: "corporate",
    title: "Corporate Meetings",
    venueCount: 37,
    image: imageCorporate,
  },
  {
    id: "creative-studios",
    title: "Creative Studios",
    venueCount: 37,
    image: imageStudios,
  },
];
