"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { HeroSearchField } from "@/features/home/components/hero/hero-search-field";
import { HeroSearchTabs } from "@/features/home/components/hero/hero-search-tabs";
import {
  HERO_SEARCH_FIELDS,
  type HeroSearchTabId,
} from "@/features/home/data/hero";
import { buildSearchHref } from "@/features/search/lib/search-params";
export function HeroSearchPanel() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState<HeroSearchTabId>("venue");
  const handleSearch = () => {
    const where =
      HERO_SEARCH_FIELDS.find((field) => field.id === "where")?.value ?? "";
    const when =
      HERO_SEARCH_FIELDS.find((field) => field.id === "when")?.value ?? "";
    const guests =
      HERO_SEARCH_FIELDS.find((field) => field.id === "guests")?.value ?? "";
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
    <div className="mx-auto w-full max-w-[1054px]">
      <div className="bg-surface-white rounded-lg p-4 lg:bg-transparent lg:p-0">
        <HeroSearchTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="lg:bg-surface-white mt-2 lg:-mt-[17px] lg:h-[100px] lg:rounded-lg lg:px-[14px] lg:py-0">
          <div className="flex h-full flex-col gap-2 lg:flex-row lg:items-center lg:gap-[10px]">
            <div className="divide-border flex flex-col divide-y lg:contents lg:divide-y-0">
              {HERO_SEARCH_FIELDS.map(({ id, label, value }) => (
                <HeroSearchField key={id} label={label} value={value} />
              ))}
            </div>

            <button
              type="button"
              onClick={handleSearch}
              disabled={isPending}
              aria-busy={isPending}
              className="bg-brand-red text-surface-white flex h-[50px] w-full shrink-0 items-center justify-center gap-[10px] rounded-lg px-[14px] text-base leading-[120%] font-semibold tracking-[-0.02em] transition-opacity hover:opacity-90 disabled:opacity-70 lg:h-[61px] lg:w-[147px] lg:text-2xl"
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
