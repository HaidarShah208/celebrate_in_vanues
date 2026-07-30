import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

/**
 * Venuze lockup: gradient "V" mark (48 x 32.15) + wordmark, 16px apart.
 * The mark is drawn inline so it inherits the brand gradient tokens;
 * swap for the exported Figma artwork when it is available.
 */
export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-4", className)}>
      <svg
        width="48"
        height="33"
        viewBox="0 0 48 33"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient
            id="venuze-mark"
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
          fill="url(#venuze-mark)"
        />
      </svg>
      <span className="text-surface-white text-[26px] leading-none font-semibold tracking-[-0.02em]">
        venuze
      </span>
    </span>
  );
}
