import type { StaticImageData } from "next/image";
export type Destination = {
  id: string;
  city: string;
  venueCount: number;
  tagline: string;
  popularVenue: string;
  fromPricePerHour: number;
  image: StaticImageData;
};
export type StatTone = "coral" | "red" | "orange" | "gold";
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  rating: number;
  portrait: StaticImageData;
};
