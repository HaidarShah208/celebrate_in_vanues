import type { StaticImageData } from "next/image";
export type Venue = {
  id: string;
  title: string;
  location: string;
  guests: string;
  area: string;
  parking: string;
  extraAmenities: number;
  pricePerHour: number;
  isVerified: boolean;
  gallery: readonly StaticImageData[];
};
export type SearchVenue = {
  id: string;
  title: string;
  location: string;
  city: string;
  guests: string;
  area: string;
  parking: string;
  extraAmenities: number;
  pricePerHour: number;
  isVerified: boolean;
  category: string;
  lat: number;
  lng: number;
  gallery: readonly StaticImageData[];
};
export type SearchVenuesResult = {
  venues: SearchVenue[];
  totalCount: number;
};
