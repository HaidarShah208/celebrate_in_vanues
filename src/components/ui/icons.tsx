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

/*
 * Social marks are hand-drawn because lucide-react dropped its brand icon set
 * in v1. X and Instagram are outlined and Facebook is solid, matching the
 * design.
 */

export function XLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      {/* Stroking the glyph outline rather than filling it gives the hairline look. */}
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export function FacebookLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      {/* Single path: the disc plus the "f" cut out of it by the fill winding. */}
      <path
        d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.412c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.268h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.25" fill="currentColor" />
    </svg>
  );
}
