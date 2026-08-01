import type { SearchParamsInput, SearchQuery } from "@/types/search";
export type { SearchParamsInput, SearchQuery } from "@/types/search";
export const SEARCH_PARAM_KEYS = {
  location: "location",
  date: "date",
  guests: "guests",
  type: "type",
  category: "category",
  q: "q",
  sort: "sort",
} as const;
function firstValue(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }
  return value ?? "";
}
export function toLocationSlug(value: string): string {
  const trimmed = value.trim().toLowerCase();
  if (!trimmed) return "";
  const city = trimmed.split(/[|,/]/)[0]?.trim() ?? trimmed;
  return city
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}
export function formatLocationLabel(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "your area";
  const city = trimmed.split(/[|,/]/)[0]?.trim();
  if (!city) return trimmed;
  return city
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
export function parseSearchParams(input: SearchParamsInput): SearchQuery {
  const typeRaw = firstValue(input[SEARCH_PARAM_KEYS.type]);
  const type = typeRaw === "vendors" ? "vendors" : "venue";
  return {
    location: firstValue(input[SEARCH_PARAM_KEYS.location]),
    date: firstValue(input[SEARCH_PARAM_KEYS.date]) || "anytime",
    guests: firstValue(input[SEARCH_PARAM_KEYS.guests]),
    type,
    category: firstValue(input[SEARCH_PARAM_KEYS.category]) || "all",
    q: firstValue(input[SEARCH_PARAM_KEYS.q]),
    sort: firstValue(input[SEARCH_PARAM_KEYS.sort]) || "recommended",
  };
}
export function buildSearchHref(query: Partial<SearchQuery>): string {
  const params = new URLSearchParams();
  if (query.location) {
    params.set(SEARCH_PARAM_KEYS.location, toLocationSlug(query.location));
  }
  if (query.date) {
    params.set(SEARCH_PARAM_KEYS.date, query.date.trim().toLowerCase());
  }
  if (query.guests) {
    params.set(SEARCH_PARAM_KEYS.guests, query.guests.trim());
  }
  if (query.type && query.type !== "venue") {
    params.set(SEARCH_PARAM_KEYS.type, query.type);
  }
  if (query.category && query.category !== "all") {
    params.set(SEARCH_PARAM_KEYS.category, query.category);
  }
  if (query.q) {
    params.set(SEARCH_PARAM_KEYS.q, query.q.trim());
  }
  if (query.sort && query.sort !== "recommended") {
    params.set(SEARCH_PARAM_KEYS.sort, query.sort);
  }
  const qs = params.toString();
  return qs ? `/search?${qs}` : "/search";
}
