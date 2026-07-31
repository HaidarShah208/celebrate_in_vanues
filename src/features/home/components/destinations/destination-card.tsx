import Image from "next/image";
import type { Destination } from "@/types/home";
type DestinationCardProps = {
  destination: Destination;
};
export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="group relative aspect-[5/6] overflow-hidden rounded-xl">
      <Image
        src={destination.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div className="from-surface-ink via-surface-ink/70 absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t to-transparent" />

      <span className="bg-surface-ink/30 text-surface-white absolute top-5 left-5 rounded-md px-2.5 py-1.5 text-xs leading-none font-normal backdrop-blur-sm">
        {destination.venueCount} Venues
      </span>

      <div className="text-surface-white absolute inset-x-0 bottom-0 flex flex-col gap-1.5 px-5 pb-8 sm:pr-10">
        <h3 className="text-[26px] leading-[1.2] font-bold tracking-[-0.01em] lg:text-[30px]">
          {destination.city}
        </h3>

        <p className="text-sm leading-[1.5] font-normal lg:text-base">
          {destination.tagline}
        </p>

        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[15px] leading-[1.4]">
          <span className="font-normal">
            Popular: {destination.popularVenue}
          </span>
          <span className="font-bold">
            From ${destination.fromPricePerHour} per hour
          </span>
        </div>
      </div>
    </article>
  );
}
