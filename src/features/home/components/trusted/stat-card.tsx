import type { StatTone } from "@/features/home/data/trusted";
import { cn } from "@/lib/utils";

/** The gold step of the accent ramp is too light for white text. */
const TONES: Record<StatTone, string> = {
  coral: "bg-accent-coral text-surface-white",
  red: "bg-brand-red text-surface-white",
  orange: "bg-accent-orange text-surface-white",
  gold: "bg-accent-gold text-surface-ink",
};

type StatCardProps = {
  value: string;
  label: string;
  tone: StatTone;
};

export function StatCard({ value, label, tone }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex min-h-[104px] flex-col items-center justify-center gap-1 rounded-lg px-4 text-center lg:min-h-[124px]",
        TONES[tone],
      )}
    >
      <p className="text-2xl leading-[1.2] font-bold tracking-[-0.01em] lg:text-[30px]">
        {value}
      </p>
      <p className="text-xs leading-[1.4] font-normal lg:text-sm">{label}</p>
    </div>
  );
}
