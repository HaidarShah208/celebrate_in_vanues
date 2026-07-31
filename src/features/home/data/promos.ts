import businessVenueIllustration from "@/assets/home/business vanue.svg";
import destinationIllustration from "@/assets/home/destination.svg";
import type { PromoBannerContent } from "@/types/promo";
export const GROW_BUSINESS_PROMO: PromoBannerContent = {
  title: "Grow Your Business with Venuze",
  description:
    "Showcase your services to thousands of event organizers and creators searching for talent like yours.",
  actionLabel: "Join as a Vendor",
  illustration: businessVenueIllustration,
  curveArrowClassName: "right-[563px] bottom-[74px]",
};
export const LIST_VENUE_PROMO: PromoBannerContent = {
  title: "Turn Your Venue into a Destination",
  description:
    "List your space on Venuze and unlock new revenue opportunities. Reach clients looking for venues just like yours.",
  actionLabel: "List Your Venue",
  illustration: destinationIllustration,
  illustrationClassName:
    "w-[64%] max-w-[380px] lg:w-[330px] lg:max-w-none xl:w-[410px]",
  curveArrowClassName: "right-[475px] bottom-[34px]",
};
