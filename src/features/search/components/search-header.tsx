import { Menu } from "lucide-react";

import { ChevronDownMini, UserMini } from "@/components/ui/icons";
import { Logo, LogoMark } from "@/components/ui/logo";
import { CompactSearchBar } from "@/features/search/components/compact-search-bar";
import type { SearchQuery } from "@/features/search/lib/search-params";
import { cn } from "@/lib/utils";

const CONTROL_BASE =
  "flex h-10 items-center justify-center rounded-lg border border-border bg-surface-white text-sm leading-[140%] font-semibold text-brand-red";

type SearchHeaderProps = {
  query: SearchQuery;
};

/** 88px white top bar with a hairline bottom edge and a soft drop shadow. */
export function SearchHeader({ query }: SearchHeaderProps) {
  return (
    <header className="bg-surface-white shadow-topbar sticky top-0 z-30">
      <div className="flex h-22 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <LogoMark priority className="w-10 lg:hidden" />
        <Logo priority tone="ink" className="hidden shrink-0 lg:flex" />

        <CompactSearchBar
          query={query}
          className="mx-auto hidden min-w-0 md:flex"
        />

        <nav
          aria-label="Account"
          className="flex shrink-0 items-center gap-[11px]"
        >
          <button
            type="button"
            className={cn(CONTROL_BASE, "hidden gap-2 px-4 sm:flex")}
          >
            Add your listing
            <ChevronDownMini className="text-control-chevron" />
          </button>

          <button
            type="button"
            aria-label="Menu"
            className={cn(CONTROL_BASE, "size-10 rounded-full lg:hidden")}
          >
            <Menu className="size-5" aria-hidden />
          </button>

          <button
            type="button"
            aria-label="Change language"
            className={cn(CONTROL_BASE, "hidden gap-2 px-3 lg:flex")}
          >
            EN
            <ChevronDownMini className="text-control-chevron" />
          </button>

          <button
            type="button"
            aria-label="Account"
            className={cn(CONTROL_BASE, "hidden w-11 px-3 lg:flex")}
          >
            <UserMini />
          </button>
        </nav>
      </div>
    </header>
  );
}
