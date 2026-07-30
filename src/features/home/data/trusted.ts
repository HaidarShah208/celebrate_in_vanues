import type { StaticImageData } from "next/image";

import portraitMichael from "@/assets/home/user1.png";
import portraitAyesha from "@/assets/home/user2.png";

export type StatTone = "coral" | "red" | "orange" | "gold";

type TrustStat = {
  value: string;
  label: string;
  tone: StatTone;
};

export const TRUST_STATS: readonly TrustStat[] = [
  { value: "1,500+", label: "Venues Vetted & Approved", tone: "coral" },
  { value: "7,500+", label: "Events Successfully Hosted", tone: "red" },
  { value: "35+", label: "Cities Across the Region", tone: "orange" },
  { value: "4.9★", label: "Average Host Rating", tone: "gold" },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  rating: number;
  portrait: StaticImageData;
};

const PLACEHOLDER_QUOTE =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

/**
 * The design ships two portraits but shows active carousel arrows, so the last
 * two entries reuse those portraits to keep the carousel scrollable. Replace
 * them once the remaining testimonials and photos are available.
 */
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "michael-carter",
    quote: PLACEHOLDER_QUOTE,
    author: "Michael Carter",
    rating: 5,
    portrait: portraitMichael,
  },
  {
    id: "ayesha-m",
    quote: PLACEHOLDER_QUOTE,
    author: "by Ayesha M.",
    rating: 5,
    portrait: portraitAyesha,
  },
  {
    id: "placeholder-3",
    quote: PLACEHOLDER_QUOTE,
    author: "Daniel Reed",
    rating: 5,
    portrait: portraitMichael,
  },
  {
    id: "placeholder-4",
    quote: PLACEHOLDER_QUOTE,
    author: "Sofia Marren",
    rating: 5,
    portrait: portraitAyesha,
  },
];
