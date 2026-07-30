import type { StaticImageData } from "next/image";

import photoNewYear from "@/assets/home/venue-1.png";
import photoCouple from "@/assets/home/venue-2.png";
import photoDancefloor from "@/assets/home/venue-3.png";
import photoHandshake from "@/assets/home/venue-4.png";

type JourneyStep = {
  title: string;
  description: string;
};

export const JOURNEY_STEPS: readonly JourneyStep[] = [
  {
    title: "Search & filter",
    description:
      "Browse our curated collection of venues and event professionals. Use smart filters, high-quality visuals, and authentic reviews to find options that fit your needs, style, and budget.",
  },
  {
    title: "Compare & message",
    description:
      "Communicate directly with venue hosts and service providers. Request tailored quotes, discuss requirements, and design every detail of your event or project with confidence.",
  },
  {
    title: "Book & add services",
    description:
      "Secure your choices with ease through our protected booking system. With clear agreements, secure payments, and ongoing support, you can move forward knowing everything is handled.",
  },
];

/**
 * The collage is two columns offset vertically against each other, so the
 * photos are grouped by column rather than by visual row.
 */
export const JOURNEY_COLLAGE: {
  leading: readonly StaticImageData[];
  trailing: readonly StaticImageData[];
} = {
  leading: [photoNewYear, photoCouple],
  trailing: [photoDancefloor, photoHandshake],
};
