"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment, useTransition } from "react";
import { buildSearchHref } from "@/features/search/lib/search-params";
import { cn } from "@/lib/utils";
import type { SearchQuery } from "@/types/search";
type CompactSearchBarProps = {
  query: SearchQuery;
  className?: string;
};
function formatGuestsLabel(guests: string): string {
  const trimmed = guests.trim();
  if (!trimmed) return "Guests";
  if (/guests/i.test(trimmed)) return trimmed;
  return `${trimmed} Guests`;
}
function formatLocationDisplay(location: string): string {
  if (!location) return "Anywhere";
  const label = location
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
  if (label.toLowerCase() === "london") return "London, UK";
  if (label.toLowerCase() === "dubai") return "Dubai, UAE";
  return label;
}
function formatDateDisplay(date: string): string {
  if (!date || date.toLowerCase() === "anytime") return "Anytime";
  return date;
}
export function CompactSearchBar({ query, className }: CompactSearchBarProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const segments = [
    formatLocationDisplay(query.location),
    formatDateDisplay(query.date),
    formatGuestsLabel(query.guests),
  ];
  const handleSearch = () => {
    startTransition(() => {
      router.push(buildSearchHref(query));
    });
  };
  return (
    <div
      className={cn(
        "drop-shadow-control bg-surface-white flex h-11 w-full max-w-[430px] items-center rounded-[10px] pr-[7px] pl-[25px]",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 items-center justify-center gap-[30px]">
        {segments.map((segment, index) => (
          <Fragment key={segment}>
            {index > 0 ? (
              <span className="bg-rule-divider h-[17px] w-px shrink-0" />
            ) : null}
            <button
              type="button"
              className="text-surface-ink truncate text-[14px] leading-[21px] font-medium"
            >
              {segment}
            </button>
          </Fragment>
        ))}
      </div>

      <button
        type="button"
        aria-label="Search"
        aria-busy={isPending}
        disabled={isPending}
        onClick={handleSearch}
        className="bg-brand-red text-surface-white ml-[7px] flex h-[34px] w-[35px] shrink-0 items-center justify-center rounded-[10px] transition-opacity hover:opacity-90 disabled:opacity-70"
      >
        <Search className="size-[18px]" strokeWidth={1.75} aria-hidden />
      </button>
    </div>
  );
}
