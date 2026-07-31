import type { StaticImageData } from "next/image";
export type PromoBannerContent = {
  title: string;
  description: string;
  actionLabel: string;
  actionHref?: string;
  illustration: StaticImageData;
  illustrationClassName?: string;
  curveArrowClassName?: string;
};
