import type { ActiveFilterChip } from "@/types/search";
export type { ActiveFilterChip } from "@/types/search";
export const DEFAULT_ACTIVE_FILTERS: readonly ActiveFilterChip[] = [
  { id: "verified", label: "Verified" },
  { id: "area-2000", label: "2,000+ m²" },
  { id: "guests-10-20", label: "10-20 guests" },
  { id: "parking", label: "Parking" },
  { id: "kitchen", label: "Kitchen" },
];
export const SORT_OPTIONS = [
  { id: "recommended", label: "Recommended" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "newest", label: "Newest" },
] as const;
export type SortOptionId = (typeof SORT_OPTIONS)[number]["id"];
