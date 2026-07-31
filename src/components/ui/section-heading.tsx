import { cn } from "@/lib/utils";

const TITLE_TONES = {
  light: "text-black",
  dark: "text-surface-white",
} as const;

const DESCRIPTION_TONES = {
  light: "text-black",
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
        "mx-auto flex max-w-297.5 flex-col items-center gap-3 text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "text-2xl leading-[1.2] font-semibold tracking-[-0.02em] lg:text-[44px]",
          TITLE_TONES[tone],
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-sm leading-[1.6] font-normal lg:text-xl",
            DESCRIPTION_TONES[tone],
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
