import { KeywordFiltersRow } from "@/features/search/components/keyword-filters-row";
import { ResultsToolbar } from "@/features/search/components/results-toolbar";
import { SearchEmptyState } from "@/features/search/components/search-empty-state";
import { SearchHeader } from "@/features/search/components/search-header";
import { SearchMap } from "@/features/search/components/search-map";
import { SearchVenueGrid } from "@/features/search/components/search-venue-grid";
import { SpaceCategories } from "@/features/search/components/space-categories";
import type { SearchVenue } from "@/types/venue";
import type { SearchQuery } from "@/types/search";
type SearchResultsViewProps = {
  query: SearchQuery;
  venues: readonly SearchVenue[];
  totalCount: number;
};
export function SearchResultsView({
  query,
  venues,
  totalCount,
}: SearchResultsViewProps) {
  return (
    <div className="bg-surface-white flex min-h-0 flex-1 flex-col">
      <SearchHeader query={query} />
      <KeywordFiltersRow query={query} />
      <SpaceCategories query={query} />

      <div className="grid flex-1 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_421px]">
        <section
          aria-label="Venue results"
          className="min-w-0 px-4 pb-8 sm:px-6 lg:px-8"
        >
          <ResultsToolbar query={query} totalCount={totalCount} />

          {venues.length === 0 ? (
            <SearchEmptyState />
          ) : (
            <SearchVenueGrid venues={venues} />
          )}
        </section>

        <SearchMap
          venues={venues}
          className="lg:sticky lg:top-[88px] lg:h-[calc(100dvh-88px)]"
        />
      </div>
    </div>
  );
}
