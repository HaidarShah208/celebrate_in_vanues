"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
const TONES = {
  light: "border-border shadow-md bg-[#F4F4F4] text-black hover:bg-[#F4F4F4]",
  dark: "border-surface-white/40 bg-surface-white/10 text-surface-white hover:bg-surface-white/20",
} as const;
type CarouselArrowsProps = {
  label: string;
  canScrollBack: boolean;
  canScrollForward: boolean;
  onBack: () => void;
  onForward: () => void;
  tone?: keyof typeof TONES;
  className?: string;
};
export function CarouselArrows({
  label,
  canScrollBack,
  canScrollForward,
  onBack,
  onForward,
  tone = "light",
  className,
}: CarouselArrowsProps) {
  const buttonClass = cn(
    "flex size-12 items-center justify-center text-black rounded-full border shadow-md bg-[#F4F4F4] text-black hover:bg-[#F4F4F4] transition-colors disabled:pointer-events-none disabled:opacity-40",
    TONES[tone],
  );
  return (
    <div className={cn("flex  items-center justify-end gap-3", className)}>
      <button
        type="button"
        aria-label={`Previous ${label}`}
        onClick={onBack}
        disabled={!canScrollBack}
        className={buttonClass}
      >
        <ChevronLeft className="size-5 " aria-hidden />
      </button>
      <button
        type="button"
        aria-label={`Next ${label}`}
        onClick={onForward}
        disabled={!canScrollForward}
        className={buttonClass}
      >
        <ChevronRight className="size-5" aria-hidden />
      </button>
    </div>
  );
}
