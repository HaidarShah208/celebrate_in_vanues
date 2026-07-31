import Image from "next/image";
import Link from "next/link";

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
  /** `light` for dark backgrounds, `ink` for white headers. */
  tone?: "light" | "ink";
  href?: string;
  className?: string;
};

/** Full Venuze lockup: the mark plus the wordmark, 16px apart. */
export function Logo({
  priority,
  tone = "light",
  href = "/",
  className,
}: LogoProps) {
  const content = (
    <>
      <LogoMark priority={priority} />
      <span
        className={cn(
          "text-[26px] leading-none font-semibold tracking-[-0.02em]",
          tone === "ink" ? "text-brand-red" : "text-surface-white",
        )}
      >
        venuze
      </span>
    </>
  );

  if (!href) {
    return (
      <span className={cn("flex items-center gap-4", className)}>{content}</span>
    );
  }

  return (
    <Link
      href={href}
      aria-label="Venuze home"
      className={cn("flex items-center gap-4", className)}
    >
      {content}
    </Link>
  );
}
