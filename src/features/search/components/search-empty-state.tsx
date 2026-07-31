import { SearchX } from "lucide-react";
import Link from "next/link";

type SearchEmptyStateProps = {
  locationLabel: string;
};

export function SearchEmptyState({ locationLabel }: SearchEmptyStateProps) {
  return (
    <div className="border-border bg-surface-white flex flex-col items-center justify-center rounded-2xl border px-6 py-20 text-center">
      <SearchX className="text-muted-foreground size-10" aria-hidden />
      <h2 className="text-foreground mt-4 text-lg font-semibold">
        No venues found near {locationLabel}
      </h2>
      <p className="text-muted-foreground mt-2 max-w-md text-sm">
        Try adjusting your filters, guests, or location — or browse all spaces
        from the home page.
      </p>
      <Link
        href="/"
        className="bg-brand-red text-surface-white mt-6 inline-flex h-11 items-center rounded-lg px-5 text-sm font-semibold"
      >
        Back to home
      </Link>
    </div>
  );
}
