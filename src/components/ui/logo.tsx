import Image from "next/image";
import Link from "next/link";
import logoMark from "@/assets/logo.png";
import { cn } from "@/lib/utils";
type LogoMarkProps = {
  priority?: boolean;
  className?: string;
};
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
  tone?: "light" | "ink";
  href?: string;
  className?: string;
};
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
      <span className={cn("flex items-center gap-4", className)}>
        {content}
      </span>
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
