import Image from "next/image";
import Link from "next/link";
import arrowCurve from "@/assets/home/arrowCurve.svg";
import { cn } from "@/lib/utils";
import type { PromoBannerContent } from "@/types/promo";
export type { PromoBannerContent } from "@/types/promo";
type PromoBannerProps = PromoBannerContent & {
  className?: string;
};
const ACTION_CLASS =
  "bg-surface-ink text-surface-white focus-visible:ring-surface-white mt-7 inline-flex h-12 w-fit items-center justify-center rounded-[10px] px-10 text-[15px]  md:text-[20px] transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none";
export function PromoBanner({
  title,
  description,
  actionLabel,
  actionHref,
  illustration,
  illustrationClassName = "w-[64%] max-w-[420px] lg:w-[360px] lg:max-w-none xl:w-[447px]",
  curveArrowClassName,
  className,
}: PromoBannerProps) {
  return (
    <div
      className={cn(
        "bg-cta-gradient relative overflow-hidden rounded-3xl",
        className,
      )}
    >
      <div className="flex flex-col items-center lg:min-h-[300px] lg:flex-row lg:items-end pe-10 lg:justify-between lg:gap-8">
        <div className="px-6 pt-10 text-center sm:px-10 sm:pt-12 lg:py-8 lg:pl-26 lg:text-left">
          <h2 className="text-surface-white mx-auto max-w-[560px] text-[28px] leading-[1.2] font-semibold tracking-[-0.02em] sm:text-[36px] lg:mx-0 lg:text-[44px]">
            {title}
          </h2>

          <p className="text-surface-white mx-auto mt-4 max-w-[1000px] text-sm leading-[1.6] font-medium sm:text-xl lg:mx-0">
            {description}
          </p>

          {actionHref ? (
            <Link href={actionHref} className={ACTION_CLASS}>
              {actionLabel}
            </Link>
          ) : (
            <button type="button" className={ACTION_CLASS}>
              {actionLabel}
            </button>
          )}
        </div>

        <Image
          src={illustration}
          alt=""
          aria-hidden
          className={cn(
            "mt-8 shrink-0 self-center lg:mt-0 lg:self-end",
            illustrationClassName,
          )}
        />
      </div>

      {curveArrowClassName ? (
        <Image
          src={arrowCurve}
          alt=""
          aria-hidden
          className={cn(
            "pointer-events-none absolute hidden w-[199px] xl:block",
            curveArrowClassName,
          )}
        />
      ) : null}
    </div>
  );
}
