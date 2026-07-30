import Image from "next/image";
import type { StaticImageData } from "next/image";

import perfectVenueMark from "@/assets/home/perfect-svg.svg";
import { JOURNEY_COLLAGE } from "@/features/home/data/journey";
import { cn } from "@/lib/utils";

function CollageColumn({
  photos,
  className,
}: {
  photos: readonly StaticImageData[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative aspect-[7/5] w-full overflow-hidden rounded-lg"
        >
          <Image
            src={photo}
            alt=""
            fill
            sizes="(min-width: 1024px) 250px, 45vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

/**
 * Two photo columns offset against each other inside a gold frame, with the
 * stage mark floating over the seam where they meet.
 */
export function JourneyCollage() {
  return (
    <div
      // Decorative supporting imagery: the section's meaning lives in the steps.
      aria-hidden
      className="border-frame-gold relative rounded-md border-[3px] p-1"
    >
      <div className="grid grid-cols-2 gap-3">
        {/*
          The columns are offset against each other by 36px, which is the
          offset in the design once the frame reaches its 521px width at `sm`.
        */}
        <CollageColumn
          photos={JOURNEY_COLLAGE.leading}
          className="mt-4 sm:mt-9"
        />
        <CollageColumn
          photos={JOURNEY_COLLAGE.trailing}
          className="mb-4 sm:mb-9"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="bg-surface-white shadow-panel flex size-20 items-center justify-center rounded-full lg:size-[150px]">
          <Image
            src={perfectVenueMark}
            alt=""
            className="h-auto w-9 lg:w-[70px]"
          />
        </span>
      </div>
    </div>
  );
}
