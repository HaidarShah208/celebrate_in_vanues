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
          className="relative aspect-7/5 w-full overflow-hidden rounded-lg"
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
export function JourneyCollage() {
  return (
    <div aria-hidden className="border-frame-gold relative rounded-md p-1">
      <div className="grid grid-cols-2 gap-3">
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
        <span className="bg-panel shadow-panel flex size-20 items-center justify-center rounded-full lg:size-37.5">
          <Image
            src={perfectVenueMark}
            alt=""
            className="h-auto w-9 lg:w-17.5"
          />
        </span>
      </div>
    </div>
  );
}
