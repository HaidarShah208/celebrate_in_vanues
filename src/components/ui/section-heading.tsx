import { cn } from "@/lib/utils";

const TITLE_TONES = {
  light: "text-black",
  dark: "text-surface-white",
} as const;

const DESCRIPTION_TONES = {
  light: "text-muted-foreground",
  dark: "text-surface-white/80",
} as const;

type SectionHeadingProps = {
  title: string;
  description?: string;
  /** `dark` for sections sitting on a dark or photographic background. */
  tone?: keyof typeof TITLE_TONES;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "mx-auto flex max-w-[1190px] flex-col items-center gap-3 text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "text-[26px] leading-[1.2] font-bold tracking-[-0.02em] sm:text-[34px] lg:text-[44px]",
          TITLE_TONES[tone],
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-sm leading-[1.6] text-black sm:text-base lg:text-xl",
            DESCRIPTION_TONES[tone],
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
