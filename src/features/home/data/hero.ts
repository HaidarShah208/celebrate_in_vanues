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

export const HERO_SEARCH_FIELDS = [
  { id: "where", label: "Where", value: "Dubai, UAE" },
  { id: "when", label: "When", value: "Anytime" },
  { id: "guests", label: "Guests", value: "10-20" },
] as const;

type HeroSlide = {
  id: string;
  image: StaticImageData;
};

/** Four slides to match the four pagination dots in the design. */
export const HERO_SLIDES: readonly HeroSlide[] = [
  { id: "party", image: slideParty },
  { id: "celebration", image: slideCelebration },
  { id: "wedding", image: slideWedding },
  { id: "corporate", image: slideCorporate },
];

export const HERO_AUTOPLAY_MS = 5000;
