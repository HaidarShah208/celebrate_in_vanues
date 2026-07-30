"use client";

import { Building2, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  HERO_SEARCH_TABS,
  type HeroSearchTabId,
} from "@/features/home/data/hero";
import { cn } from "@/lib/utils";

const TAB_ICONS: Record<HeroSearchTabId, LucideIcon> = {
  venue: Building2,
  vendors: Sparkles,
};

type HeroSearchTabsProps = {
  activeTab: HeroSearchTabId;
  onTabChange: (tab: HeroSearchTabId) => void;
};

export function HeroSearchTabs({
  activeTab,
  onTabChange,
}: HeroSearchTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Search type"
      className="bg-surface-white shadow-panel relative z-10 mx-auto flex h-[55px] w-[264px] items-center gap-[10px] rounded-lg p-[7px]"
    >
      {HERO_SEARCH_TABS.map(({ id, label }) => {
        const Icon = TAB_ICONS[id];
        const isActive = id === activeTab;

        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(id)}
            className={cn(
              "flex h-10 flex-1 items-center justify-center gap-[7px] rounded-lg text-sm leading-[21px] font-semibold transition-colors",
              isActive
                ? "bg-brand-red text-surface-white"
                : "text-surface-ink hover:bg-muted",
            )}
          >
            <Icon className="size-5 shrink-0" strokeWidth={2} aria-hidden />
            {label}
          </button>
        );
      })}
    </div>
  );
}
