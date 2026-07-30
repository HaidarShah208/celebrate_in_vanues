import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import arrowCurve from "@/assets/home/arrowCurve.svg";
import { cn } from "@/lib/utils";

export type PromoBannerContent = {
  title: string;
  description: string;
  actionLabel: string;
  actionHref?: string;
  illustration: StaticImageData;
  /** Sizing for the illustration; override when swapping in artwork of a different shape. */
  illustrationClassName?: string;
};

type PromoBannerProps = PromoBannerContent & {
  /** Dashed curve pointing from the copy across to the illustration. */
  withCurveArrow?: boolean;
  className?: string;
};

const ACTION_CLASS =
  "mt-7 inline-flex h-12 w-fit items-center justify-center rounded-lg bg-surface-ink px-10 text-[15px] font-semibold text-surface-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-surface-white focus-visible:ring-offset-2 focus-visible:outline-none";

/**
 * Full-width gradient promo card: copy and a call to action on the left, an
 * illustration flush to the bottom-right corner. Reused across pages with
 * different copy and artwork.
 */
export function PromoBanner({
  title,
  description,
  actionLabel,
  actionHref,
  illustration,
  illustrationClassName = "lg:w-[360px] xl:w-[447px]",
  withCurveArrow = false,
  className,
}: PromoBannerProps) {
  return (
    <div
      className={cn(
        "bg-cta-gradient relative overflow-hidden rounded-3xl",
        className,
      )}
    >
      <div className="flex flex-col lg:min-h-[300px] lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <div className="px-6 py-10 sm:px-10 sm:py-12 lg:py-8 lg:pl-20">
          <h2 className="text-surface-white max-w-[560px] text-[28px] leading-[1.2] font-bold tracking-[-0.02em] sm:text-[36px] lg:text-[44px]">
            {title}
          </h2>

          <p className="text-surface-white mt-4 max-w-[640px] text-sm leading-[1.6] font-normal sm:text-base">
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
            "hidden shrink-0 self-end lg:block",
            illustrationClassName,
          )}
        />
      </div>

      {withCurveArrow ? (
        <Image
          src={arrowCurve}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-[563px] bottom-[74px] hidden w-[199px] xl:block"
        />
      ) : null}
    </div>
  );
}
