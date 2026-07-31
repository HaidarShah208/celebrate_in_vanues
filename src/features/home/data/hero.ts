import type { StaticImageData } from "next/image";
import slideCelebration from "@/assets/home/4.png";
import slideCorporate from "@/assets/home/2.png";
import slideParty from "@/assets/home/home.jpg";
import slideWedding from "@/assets/home/3.png";

export const HERO_SEARCH_TABS = [
  { id: "venue", label: "Venue" },
  { id: "vendors", label: "Vendors" },
] as const;

export type HeroSearchTabId = (typeof HERO_SEARCH_TABS)[number]["id"];

export const HERO_LOCATION_OPTIONS = [
  "Dubai, UAE",
  "Abu Dhabi, UAE",
  "London, UK",
  "New York, USA",
  "Paris, France",
] as const;

export const HERO_DATE_OPTIONS = [
  "Anytime",
  "Today",
  "This weekend",
  "Next week",
  "This month",
] as const;

export const HERO_GUEST_OPTIONS = [
  "1-10",
  "10-20",
  "20-50",
  "50-100",
  "100-300",
  "300+",
] as const;

type HeroSlide = {
  id: string;
  image: StaticImageData;
};

export const HERO_SLIDES: readonly HeroSlide[] = [
  { id: "party", image: slideParty },
  { id: "celebration", image: slideCelebration },
  { id: "wedding", image: slideWedding },
  { id: "corporate", image: slideCorporate },
];

export const HERO_AUTOPLAY_MS = 5000;
