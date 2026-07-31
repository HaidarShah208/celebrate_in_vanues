"use client";

import Image from "next/image";
import Link from "next/link";

import avatarImage from "@/assets/home/user1.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownMini, UserMini } from "@/components/ui/icons";
import { Logo, LogoMark } from "@/components/ui/logo";
import { CompactSearchBar } from "@/features/search/components/compact-search-bar";
import {
  ACCOUNT_MENU_ITEMS,
  CURRENT_USER,
  LANGUAGE_OPTIONS,
  LISTING_MENU_ITEMS,
} from "@/features/search/data/header-menus";
import { cn } from "@/lib/utils";
import type { SearchQuery } from "@/types/search";

const CONTROL_BASE =
  "flex h-10 items-center justify-center rounded-lg border border-border bg-surface-white text-sm leading-[140%] font-semibold text-brand-red outline-none";

const CHEVRON =
  "text-control-chevron transition-transform duration-200 group-data-[state=open]:rotate-180";

type SearchHeaderProps = {
  query: SearchQuery;
};

function MobileAccountMenuContent() {
  return (
    <DropdownMenuContent align="end" className="min-w-[220px]">
      {ACCOUNT_MENU_ITEMS.map((item) => (
        <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
      ))}
      <DropdownMenuSeparator />
      {LISTING_MENU_ITEMS.map((item) => (
        <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
      ))}
      <DropdownMenuSeparator />
      {LANGUAGE_OPTIONS.map((language) => (
        <DropdownMenuItem key={language.code}>
          {language.label}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  );
}

export function SearchHeader({ query }: SearchHeaderProps) {
  return (
    <header className="bg-surface-white shadow-topbar sticky top-0 z-30">
      <div className="md:hidden">
        <div className="flex h-[68px] items-center justify-between gap-3 px-4">
          <Link href="/" aria-label="Home" className="shrink-0">
            <LogoMark priority className="w-10" />
          </Link>

          <div className="flex min-w-0 items-center gap-3">
            <span className="text-surface-ink truncate text-base leading-6 font-semibold">
              {CURRENT_USER.name}
            </span>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  aria-label="Account menu"
                  className="size-11 shrink-0 overflow-hidden rounded-full outline-none"
                >
                  <Image
                    src={avatarImage}
                    alt=""
                    className="size-full object-cover"
                    sizes="44px"
                  />
                </button>
              </DropdownMenuTrigger>
              <MobileAccountMenuContent />
            </DropdownMenu>
          </div>
        </div>

        <div className="px-4 pb-4">
          <CompactSearchBar query={query} className="max-w-none" />
        </div>
      </div>

      <div className="hidden h-22 items-center justify-between gap-4 px-4 sm:px-6 md:flex lg:px-8">
        <Link href="/" aria-label="Home" className="shrink-0 lg:hidden">
          <LogoMark priority className="w-10" />
        </Link>
        <Logo priority tone="ink" className="hidden shrink-0 lg:flex" />

        <CompactSearchBar query={query} className="mx-auto min-w-0" />

        <nav
          aria-label="Account"
          className="flex shrink-0 items-center gap-2.75"
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cn(CONTROL_BASE, "group gap-2 px-4")}
              >
                Add your listing
                <ChevronDownMini className={CHEVRON} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[220px]">
              {LISTING_MENU_ITEMS.map((item) => (
                <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Change language"
                className={cn(CONTROL_BASE, "group hidden gap-2 px-3 lg:flex")}
              >
                EN
                <ChevronDownMini className={CHEVRON} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[180px]">
              {LANGUAGE_OPTIONS.map((language) => (
                <DropdownMenuItem key={language.code}>
                  {language.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Account"
                className={cn(CONTROL_BASE, "w-11 px-3")}
              >
                <UserMini />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[200px]">
              {ACCOUNT_MENU_ITEMS.map((item) => (
                <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
