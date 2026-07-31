import portraitMichael from "@/assets/home/user1.png";
import portraitAyesha from "@/assets/home/user2.png";
import type { StatTone, Testimonial } from "@/types/home";
export type { StatTone, Testimonial } from "@/types/home";
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
const PLACEHOLDER_QUOTE =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
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
