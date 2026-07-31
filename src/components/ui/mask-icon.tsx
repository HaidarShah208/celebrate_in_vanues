import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
type MaskIconProps = {
  src: string;
  className?: string;
};
export function MaskIcon({ src, className }: MaskIconProps) {
  return (
    <span
      aria-hidden
      className={cn("mask-icon block", className)}
      style={{ "--icon": `url(${src})` } as CSSProperties}
    />
  );
}
