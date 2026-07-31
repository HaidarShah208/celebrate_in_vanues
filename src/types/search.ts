export type SearchQuery = {
  location: string;
  date: string;
  guests: string;
  type: "venue" | "vendors";
  category: string;
  q: string;
  sort: string;
};
export type SearchParamsInput = Record<string, string | string[] | undefined>;
export type ActiveFilterChip = {
  id: string;
  label: string;
};
