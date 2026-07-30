import { cn } from "@/lib/utils";

type LogoMarkProps = {
  /**
   * SVG gradient ids are document-global, so every mark rendered on the same
   * page needs its own id to keep the markup valid.
   */
  gradientId?: string;
  className?: string;
};

/**
 * Gradient "V" mark on its own (48 x 33). Drawn inline so it picks up the brand
 * gradient tokens; swap for the exported Figma artwork when it is available.
 */
export function LogoMark({
  gradientId = "venuze-mark",
  className,
}: LogoMarkProps) {
  return (
    <svg
      width="48"
      height="33"
      viewBox="0 0 48 33"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="48"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--brand-red)" />
          <stop offset="55%" stopColor="var(--brand-orange)" />
          <stop offset="100%" stopColor="var(--brand-amber)" />
        </linearGradient>
      </defs>
      <path
        d="M0 0h13.2l10.8 17.4L34.8 0H48L28.2 33h-8.4L0 0Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
}

type LogoProps = {
  className?: string;
};

/** Full Venuze lockup: the mark plus the wordmark, 16px apart. */
export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-4", className)}>
      <LogoMark />
      <span className="text-surface-white text-[26px] leading-none font-semibold tracking-[-0.02em]">
        venuze
      </span>
    </span>
  );
}
