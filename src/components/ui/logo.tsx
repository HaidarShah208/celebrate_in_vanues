import Image from "next/image";

import logoMark from "@/assets/logo.png";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  /** Set for above-the-fold use, so the mark is not lazy-loaded. */
  priority?: boolean;
  className?: string;
};

/** The Venuze "V" mark on its own. Defaults to the 48px header size. */
export function LogoMark({ priority = false, className }: LogoMarkProps) {
  return (
    <Image
      src={logoMark}
      alt=""
      aria-hidden
      priority={priority}
      sizes="70px"
      className={cn("h-auto w-12 shrink-0", className)}
    />
  );
}

type LogoProps = {
  priority?: boolean;
  className?: string;
};

/** Full Venuze lockup: the mark plus the wordmark, 16px apart. */
export function Logo({ priority, className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-4", className)}>
      <LogoMark priority={priority} />
      <span className="text-surface-white text-[26px] leading-none font-semibold tracking-[-0.02em]">
        venuze
      </span>
    </span>
  );
}
