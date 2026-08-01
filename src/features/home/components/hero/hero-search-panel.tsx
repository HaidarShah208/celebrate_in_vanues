"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { HeroSearchField } from "@/features/home/components/hero/hero-search-field";
import { HeroSearchTabs } from "@/features/home/components/hero/hero-search-tabs";
import {
  HERO_DATE_OPTIONS,
  HERO_GUEST_OPTIONS,
  HERO_LOCATION_OPTIONS,
  type HeroSearchTabId,
} from "@/features/home/data/hero";
import { buildSearchHref } from "@/features/search/lib/search-params";

export function HeroSearchPanel() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState<HeroSearchTabId>("venue");
  const [where, setWhere] = useState<string>(HERO_LOCATION_OPTIONS[0]);
  const [when, setWhen] = useState<string>(HERO_DATE_OPTIONS[0]);
  const [guests, setGuests] = useState<string>(HERO_GUEST_OPTIONS[1]);

  const handleSearch = () => {
    const href = buildSearchHref({
      location: where,
      date: when,
      guests,
      type: activeTab,
    });

    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <div className="mx-auto w-full max-w-263.5">
      <div className="bg-panel rounded-lg p-4 lg:bg-transparent lg:p-0">
        <HeroSearchTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="lg:bg-panel mt-2 lg:-mt-4.25 lg:h-25 lg:rounded-lg lg:px-3.5 lg:py-0">
          <div className="flex h-full flex-col gap-2 lg:flex-row lg:items-center lg:gap-[10px]">
            <div className="divide-border flex flex-col divide-y lg:contents lg:divide-y-0">
              <HeroSearchField
                label="Where"
                value={where}
                options={HERO_LOCATION_OPTIONS}
                onValueChange={setWhere}
              />
              <HeroSearchField
                label="When"
                value={when}
                options={HERO_DATE_OPTIONS}
                onValueChange={setWhen}
              />
              <HeroSearchField
                label="Guests"
                value={guests}
                options={HERO_GUEST_OPTIONS}
                onValueChange={setGuests}
              />
            </div>

            <button
              type="button"
              onClick={handleSearch}
              disabled={isPending}
              aria-busy={isPending}
              className="bg-brand-red text-surface-white flex h-12.5 w-full shrink-0 items-center justify-center gap-2.5 rounded-lg px-3.5 text-base leading-[120%] font-semibold tracking-[-0.02em] transition-opacity hover:opacity-90 disabled:opacity-70 lg:h-15 lg:w-36.75 lg:text-2xl"
            >
              <Search
                className="size-5 shrink-0 lg:size-6"
                strokeWidth={1.5}
                aria-hidden
              />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
