import type { ComponentType, SVGProps } from "react";
import { FacebookLogo, InstagramLogo, XLogo } from "@/components/ui/icons";
export const FOOTER_TAGLINE =
  "Make it memorable—book the perfect venue and the pros who make it shine.";
type FooterLink = {
  label: string;
  href: string;
};
type FooterColumn = {
  title: string;
  links: readonly FooterLink[];
};
export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Venuze",
    links: [
      { label: "About", href: "#" },
      { label: "News", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Investors", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Listings your venue", href: "#" },
      { label: "Listing your service", href: "#" },
      { label: "Help center", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Venue types", href: "#" },
      { label: "Venue features", href: "#" },
      { label: "Service options", href: "#" },
      { label: "Locations", href: "#" },
    ],
  },
  {
    title: "Legal & Privacy",
    links: [
      { label: "Terms of service", href: "#" },
      { label: "Payment & refund policy", href: "#" },
      { label: "Host agreement", href: "#" },
      { label: "Vendor agreement", href: "#" },
    ],
  },
];
type SocialLink = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};
export const FOOTER_SOCIAL_LINKS: readonly SocialLink[] = [
  { label: "X", href: "https://x.com", Icon: XLogo },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookLogo },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramLogo },
];
