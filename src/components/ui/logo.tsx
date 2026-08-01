import Image from "next/image";
import Link from "next/link";
import brandOrange from "@/assets/brandOrange.png";
import brandWhite from "@/assets/brandWhite.png";
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
  wordmark?: "orange" | "white";
  href?: string;
  className?: string;
};
export function Logo({
  priority,
  wordmark = "orange",
  href = "/",
  className,
}: LogoProps) {
  const content = (
    <>
      <LogoMark priority={priority} />
      <Image
        src={wordmark === "white" ? brandOrange : brandWhite}
        alt="Venuze"
        priority={priority}
        sizes="125px"
        className="h-auto w-31.25 shrink-0"
      />
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
