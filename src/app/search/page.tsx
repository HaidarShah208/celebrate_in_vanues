import type { Metadata } from "next";

import { SearchErrorState } from "@/features/search/components/search-error-state";
import { SearchResultsView } from "@/features/search/components/search-results-view";
import { getSearchVenues } from "@/features/search/data/venues";
import {
  formatLocationLabel,
  parseSearchParams,
  type SearchParamsInput,
} from "@/features/search/lib/search-params";

export const metadata: Metadata = {
  title: "Search venues",
  description: "Browse venues and spaces that match your event.",
};

type SearchPageProps = {
  searchParams: Promise<SearchParamsInput>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const rawParams = await searchParams;
  const query = parseSearchParams(rawParams);

  try {
    const { venues, totalCount } = await getSearchVenues(query);

    return (
      <main className="flex flex-1 flex-col">
        <SearchResultsView
          query={query}
          venues={venues}
          totalCount={totalCount}
        />
      </main>
    );
  } catch {
    return (
      <main className="flex flex-1 flex-col px-4 py-16 sm:px-6 lg:px-8">
        <SearchErrorState
          message={`We couldn’t load venues near ${formatLocationLabel(query.location || "your area")}.`}
        />
      </main>
    );
  }
}
