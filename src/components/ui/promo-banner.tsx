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
  /**
   * Position utilities for the dashed curve pointing from the copy across to
   * the illustration. Omit to hide the curve. Where it lands depends on how
   * wide the illustration is, so each promo supplies its own offsets.
   */
  curveArrowClassName?: string;
};

type PromoBannerProps = PromoBannerContent & {
  className?: string;
};

const ACTION_CLASS =
  "bg-surface-ink text-surface-white focus-visible:ring-surface-white mt-7 inline-flex h-12 w-fit items-center justify-center rounded-lg px-10 text-[15px] font-semibold transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none";

/**
 * Full-width gradient promo card. Stacks to centred copy above the illustration
 * on small screens; from `lg` the copy sits on the left with the illustration
 * flush to the bottom-right corner. Reused across pages with different copy and
 * artwork.
 */
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
      <div className="flex flex-col items-center lg:min-h-[300px] lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <div className="px-6 pt-10 text-center sm:px-10 sm:pt-12 lg:py-8 lg:pl-20 lg:text-left">
          <h2 className="text-surface-white mx-auto max-w-[560px] text-[28px] leading-[1.2] font-bold tracking-[-0.02em] sm:text-[36px] lg:mx-0 lg:text-[44px]">
            {title}
          </h2>

          <p className="text-surface-white mx-auto mt-4 max-w-[640px] text-sm leading-[1.6] font-normal sm:text-base lg:mx-0">
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
