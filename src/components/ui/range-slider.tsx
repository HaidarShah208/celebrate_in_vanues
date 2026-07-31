"use client";

import { useId } from "react";

import { cn } from "@/lib/utils";

type RangeSliderProps = {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  "aria-label"?: string;
  className?: string;
};

export function RangeSlider({
  min,
  max,
  step = 1,
  value,
  onChange,
  "aria-label": ariaLabel = "Range",
  className,
}: RangeSliderProps) {
  const id = useId();
  const [low, high] = value;
  const span = max - min || 1;
  const leftPct = ((low - min) / span) * 100;
  const rightPct = ((high - min) / span) * 100;

  return (
    <div className={cn("relative h-8 w-full", className)}>
      <div className="bg-border absolute top-1/2 right-0 left-0 h-1 -translate-y-1/2 rounded-full" />
      <div
        className="bg-brand-red absolute top-1/2 h-1 -translate-y-1/2 rounded-full"
        style={{ left: `${leftPct}%`, right: `${100 - rightPct}%` }}
      />

      <input
        id={`${id}-min`}
        type="range"
        min={min}
        max={max}
        step={step}
        value={low}
        aria-label={`${ariaLabel} minimum`}
        onChange={(event) => {
          const next = Math.min(Number(event.target.value), high);
          onChange([next, high]);
        }}
        className="range-thumb pointer-events-none absolute inset-0 z-10 w-full appearance-none bg-transparent"
      />
      <input
        id={`${id}-max`}
        type="range"
        min={min}
        max={max}
        step={step}
        value={high}
        aria-label={`${ariaLabel} maximum`}
        onChange={(event) => {
          const next = Math.max(Number(event.target.value), low);
          onChange([low, next]);
        }}
        className="range-thumb pointer-events-none absolute inset-0 z-20 w-full appearance-none bg-transparent"
      />
    </div>
  );
}
