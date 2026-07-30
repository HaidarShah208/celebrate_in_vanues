import type { StaticImageData } from "next/image";

import imagePhotographers from "@/assets/home/1.png";
import imageEntertainment from "@/assets/home/2.png";
import imageCaterers from "@/assets/home/3.png";
import imageDecorators from "@/assets/home/4.png";

type VendorCategory = {
  id: string;
  title: string;
  image: StaticImageData;
};

/**
 * NOTE: images are the closest stand-ins from the current asset pool.
 * Replace with the exported vendor photography when available.
 */
export const VENDOR_CATEGORIES: readonly VendorCategory[] = [
  { id: "caterers", title: "Caterers", image: imageCaterers },
  { id: "decorators", title: "Decorators", image: imageDecorators },
  { id: "photographers", title: "Photographers", image: imagePhotographers },
  { id: "entertainment", title: "Entertainment", image: imageEntertainment },
];
