"use client";

import {
  BadgeCheck,
  Car,
  ChevronLeft,
  ChevronRight,
  Heart,
  Maximize2,
  MapPin,
  Share2,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import type { Venue } from "@/features/home/data/featured-venues";
import { cn } from "@/lib/utils";

const IMAGE_ACTION =
  "flex size-7 items-center justify-center rounded-full bg-surface-ink/45 text-surface-white backdrop-blur-sm transition-colors hover:bg-surface-ink/65";

const GALLERY_ARROW =
  "absolute top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100";

type VenueCardProps = {
  venue: Venue;
};

export function VenueCard({ venue }: VenueCardProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const galleryLength = venue.gallery.length;

  const stepImage = (direction: -1 | 1) => {
    setImageIndex(
      (current) => (current + direction + galleryLength) % galleryLength,
    );
  };

  return (
    <article className="group bg-surface-white flex shrink-0 basis-[80%] snap-start flex-col overflow-hidden rounded-2xl sm:basis-[47%] lg:basis-[calc((100%-4.5rem)/4)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {venue.gallery.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={index === 0 ? venue.title : ""}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 47vw, 80vw"
            className={cn(
              "object-cover transition-opacity duration-500",
              index === imageIndex ? "opacity-100" : "opacity-0",
            )}
          />
        ))}

        {venue.isVerified && (
          <span className="bg-surface-ink/60 text-surface-white absolute top-3 left-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] leading-none font-medium backdrop-blur-sm">
            <BadgeCheck className="size-3" aria-hidden />
            Verified
          </span>
        )}

        <div className="absolute top-3 right-3 flex items-center gap-2">
          <button
            type="button"
            aria-label="Share venue"
            className={IMAGE_ACTION}
          >
            <Share2 className="size-3.5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label={isSaved ? "Remove from saved" : "Save venue"}
            aria-pressed={isSaved}
            onClick={() => setIsSaved((saved) => !saved)}
            className={IMAGE_ACTION}
          >
            <Heart
              className={cn(
                "size-3.5",
                isSaved && "fill-brand-red text-brand-red",
              )}
              aria-hidden
            />
          </button>
        </div>

        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => stepImage(-1)}
          className={cn(GALLERY_ARROW, IMAGE_ACTION, "left-3")}
        >
          <ChevronLeft className="size-4" aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Next photo"
          onClick={() => stepImage(1)}
          className={cn(GALLERY_ARROW, IMAGE_ACTION, "right-3")}
        >
          <ChevronRight className="size-4" aria-hidden />
        </button>

        <div
          className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1"
          aria-hidden
        >
          {venue.gallery.map((_, index) => (
            <span
              key={index}
              className={cn(
                "size-1.5 rounded-full transition-colors",
                index === imageIndex
                  ? "bg-surface-white"
                  : "bg-surface-white/50",
              )}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-foreground text-base leading-[1.35] font-semibold">
          {venue.title}
        </h3>

        <p className="text-brand-red mt-1.5 flex items-center gap-1 text-xs">
          <MapPin className="size-3.5 shrink-0" aria-hidden />
          {venue.location}
        </p>

        <ul className="text-muted-foreground mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px]">
          <li className="flex items-center gap-1">
            <Users className="size-3.5 shrink-0" aria-hidden />
            {venue.guests}
          </li>
          <li className="flex items-center gap-1">
            <Maximize2 className="size-3.5 shrink-0" aria-hidden />
            {venue.area}
          </li>
          <li className="flex items-center gap-1">
            <Car className="size-3.5 shrink-0" aria-hidden />
            {venue.parking}
          </li>
        </ul>

        <p className="text-muted-foreground mt-2 text-[11px]">
          +{venue.extraAmenities} more
        </p>

        <div className="border-border mt-auto flex items-center justify-between gap-2 border-t pt-3">
          <p className="text-muted-foreground text-xs">
            From{" "}
            <span className="text-foreground text-[13px] font-semibold">
              ${venue.pricePerHour}/hour
            </span>
          </p>
          <button
            type="button"
            className="border-brand-red text-brand-red hover:bg-brand-red hover:text-surface-white h-[34px] shrink-0 rounded-lg border px-4 text-xs font-medium transition-colors"
          >
            View details
          </button>
        </div>
      </div>
    </article>
  );
}
