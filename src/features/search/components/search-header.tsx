"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { ChevronDownMini, UserMini } from "@/components/ui/icons";
import { Logo, LogoMark } from "@/components/ui/logo";
import { CompactSearchBar } from "@/features/search/components/compact-search-bar";
import { cn } from "@/lib/utils";
import type { SearchQuery } from "@/types/search";

const CONTROL_BASE =
  "flex h-10 items-center justify-center rounded-lg border border-border bg-surface-white text-sm leading-[140%] font-semibold text-brand-red";

type SearchHeaderProps = {
  query: SearchQuery;
};

export function SearchHeader({ query }: SearchHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="bg-surface-white shadow-topbar sticky top-0 z-30">
      <div className="relative flex h-22 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Home" className="shrink-0 lg:hidden">
          <LogoMark priority className="w-10" />
        </Link>
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
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
            className={cn(CONTROL_BASE, "size-10 rounded-full lg:hidden")}
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
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

        {menuOpen ? (
          <div
            id={menuId}
            role="menu"
            className="border-border bg-surface-white shadow-panel absolute top-full right-4 left-4 z-40 mt-2 overflow-hidden rounded-xl border sm:right-6 sm:left-auto sm:w-72 lg:hidden"
          >
            <button
              type="button"
              role="menuitem"
              className="text-surface-ink hover:bg-muted flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-medium sm:hidden"
              onClick={() => setMenuOpen(false)}
            >
              Add your listing
              <ChevronDownMini className="text-control-chevron" />
            </button>
            <button
              type="button"
              role="menuitem"
              className="text-surface-ink hover:bg-muted border-border flex w-full items-center justify-between border-t px-4 py-3.5 text-left text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Language: EN
              <ChevronDownMini className="text-control-chevron" />
            </button>
            <button
              type="button"
              role="menuitem"
              className="text-surface-ink hover:bg-muted border-border flex w-full items-center gap-3 border-t px-4 py-3.5 text-left text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              <UserMini />
              Account
            </button>
          </div>
        ) : null}
      </div>

      {menuOpen ? (
        <button
          type="button"
          aria-label="Close menu backdrop"
          className="fixed inset-0 z-20 bg-transparent lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </header>
  );
}
