import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type MaskIconProps = {
  /** `src` of a statically imported SVG. */
  src: string;
  className?: string;
};

/**
 * Renders an SVG file tinted with `currentColor`. The exported icons have their
 * fills baked in, so they are drawn as a mask rather than an <img> — see the
 * `mask-icon` utility in globals.css.
 */
export function MaskIcon({ src, className }: MaskIconProps) {
  return (
    <span
      aria-hidden
      className={cn("mask-icon block", className)}
      // The url() is per-icon, so it cannot live in a static class.
      style={{ "--icon": `url(${src})` } as CSSProperties}
    />
  );
}
