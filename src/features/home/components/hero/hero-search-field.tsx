"use client";

import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type HeroSearchFieldProps = {
  label: string;
  value: string;
  options: readonly string[];
  onValueChange: (value: string) => void;
};

export function HeroSearchField({
  label,
  value,
  options,
  onValueChange,
}: HeroSearchFieldProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={label}
          className="group flex w-full flex-col items-start gap-[5px] py-3 text-left outline-none lg:flex-1 lg:px-[5px] lg:py-0"
        >
          <span className="text-field-label w-full text-sm leading-[21px] font-normal">
            {label}
          </span>
          <span className="flex w-full items-center justify-between gap-[5px]">
            <span className="text-surface-ink text-base leading-6 font-medium">
              {value}
            </span>
            <ChevronDown
              className="text-field-arrow size-6 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[220px]">
        <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option} value={option}>
              {option}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
