"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import { HeroSearchField } from "@/features/home/components/hero/hero-search-field";
import { HeroSearchTabs } from "@/features/home/components/hero/hero-search-tabs";
import {
  HERO_SEARCH_FIELDS,
  type HeroSearchTabId,
} from "@/features/home/data/hero";

export function HeroSearchPanel() {
  const [activeTab, setActiveTab] = useState<HeroSearchTabId>("venue");

  return (
    <div className="mx-auto w-full max-w-[1054px]">
      <HeroSearchTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Pulled up so the tab pill overlaps the card by 17px, as designed. */}
      <div className="bg-surface-white -mt-[17px] rounded-lg p-4 pt-6 lg:h-[100px] lg:px-[14px] lg:py-0">
        <div className="flex h-full flex-col gap-2 lg:flex-row lg:items-center lg:gap-[10px]">
          <div className="divide-border flex flex-col divide-y lg:contents lg:divide-y-0">
            {HERO_SEARCH_FIELDS.map(({ id, label, value }) => (
              <HeroSearchField key={id} label={label} value={value} />
            ))}
          </div>

          <button
            type="button"
            className="bg-brand-red text-surface-white flex h-[61px] w-full shrink-0 items-center justify-center gap-[10px] rounded-lg px-[14px] text-2xl leading-[120%] font-semibold tracking-[-0.02em] transition-opacity hover:opacity-90 lg:w-[147px]"
          >
            <Search className="size-6 shrink-0" strokeWidth={1.5} aria-hidden />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
