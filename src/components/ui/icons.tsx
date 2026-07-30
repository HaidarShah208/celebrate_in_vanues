import type { SVGProps } from "react";

/**
 * 12x6 chevron matching the Figma spec for top-bar controls
 * (12px wide, 6px tall, 1.5px stroke). Lucide's chevron ships in a
 * 24x24 box, which would consume 24px of layout width instead of 12px.
 */
export function ChevronDownMini(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M1 1l5 4 5-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 10x15 account glyph with a 2px stroke, per the Figma spec. Lucide's `User`
 * renders ~16x17 inside a 24x24 box and cannot hit these dimensions cleanly.
 */
export function UserMini(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="10"
      height="15"
      viewBox="0 0 10 15"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <circle cx="5" cy="2.9" r="2.1" stroke="currentColor" strokeWidth="2" />
      <path
        d="M1 14c0-2.2 1.8-3.6 4-3.6s4 1.4 4 3.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
