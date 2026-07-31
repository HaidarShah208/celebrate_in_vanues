"use client";
import {
  Car,
  ChevronLeft,
  ChevronRight,
  Heart,
  type LucideIcon,
  Maximize2,
  MapPin,
  Share,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { Venue } from "@/types/venue";
import { cn } from "@/lib/utils";
const IMAGE_ACTION =
  "absolute flex size-[30px] items-center justify-center rounded-full bg-surface-ink/50 text-surface-white backdrop-blur-[2px] transition-colors hover:bg-surface-ink/65";

// Touch devices get no hover, so the arrows only fade in where hover exists.
const GALLERY_ARROW =
  "transition duration-200 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100 [@media(hover:hover)]:focus-visible:opacity-100";
type AmenityChipProps = {
  icon?: LucideIcon;
  iconClassName?: string;
  label: string;
};
function AmenityChip({ icon: Icon, iconClassName, label }: AmenityChipProps) {
  return (
    <li className="bg-chip-fill text-chip-ink flex h-7 shrink-0 items-center gap-1.25 rounded-full px-1.75">
      {Icon ? (
        <Icon
          className={cn("shrink-0", iconClassName)}
          strokeWidth={1.5}
          aria-hidden
        />
      ) : null}
      <span className="text-[10px] leading-6 font-medium">{label}</span>
    </li>
  );
}
type VenueCardProps = {
  venue: Venue;
  className?: string;
};
export function VenueCard({ venue, className }: VenueCardProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const galleryLength = venue.gallery.length;
  const stepImage = (direction: -1 | 1) => {
    setImageIndex(
      (current) => (current + direction + galleryLength) % galleryLength,
    );
  };
  return (
    <article
      className={cn(
        "group flex shrink-0 basis-[80%] snap-start flex-col sm:basis-[47%] lg:basis-[calc((100%-4.5rem)/4)]",
        className,
      )}
    >
      <div className="bg-muted relative aspect-16/10 w-full overflow-hidden rounded-t-[20px]">
        {venue.gallery.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={index === 0 ? venue.title : ""}
            fill
            sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 28vw, (min-width: 640px) 47vw, 80vw"
            className={cn(
              "object-cover transition-opacity duration-500",
              index === imageIndex ? "opacity-100" : "opacity-0",
            )}
          />
        ))}

        {venue.isVerified && (
          <span className="bg-surface-ink/50 text-surface-white absolute top-2.25 left-2.5 flex h-7.5 items-center rounded-[92px] px-[15px] text-[11.05px] leading-[18px] font-semibold tracking-[-0.03em] backdrop-blur-[2px]">
            Verified
          </span>
        )}

        <button
          type="button"
          aria-label="Share venue"
          className={cn(IMAGE_ACTION, "top-2.25 right-10.75")}
        >
          <Share className="size-3.75" strokeWidth={1.5} aria-hidden />
        </button>
        <button
          type="button"
          aria-label={isSaved ? "Remove from saved" : "Save venue"}
          aria-pressed={isSaved}
          onClick={() => setIsSaved((saved) => !saved)}
          className={cn(IMAGE_ACTION, "top-2.25 right-2.5")}
        >
          <Heart
            className={cn("size-3.75", isSaved && "fill-current")}
            strokeWidth={1.5}
            aria-hidden
          />
        </button>

        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => stepImage(-1)}
          className={cn(IMAGE_ACTION, GALLERY_ARROW, "top-[47.5%] left-2.5")}
        >
          <ChevronLeft className="size-5" strokeWidth={1.5} aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Next photo"
          onClick={() => stepImage(1)}
          className={cn(IMAGE_ACTION, GALLERY_ARROW, "top-[47.5%] right-2.5")}
        >
          <ChevronRight className="size-5" strokeWidth={1.5} aria-hidden />
        </button>

        <div
          className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-[3px]"
          aria-hidden
        >
          {venue.gallery.map((_, index) => (
            <span
              key={index}
              className={cn(
                "size-1.25 rounded-full transition-opacity",
                index === imageIndex
                  ? "bg-surface-white"
                  : "bg-surface-white/50",
              )}
            />
          ))}
        </div>
      </div>

      <div className="border-card-hairline bg-panel shadow-card-body flex flex-1 flex-col rounded-b-[20px] border px-[15px] pt-[18px] pb-[15px]">
        <h3 className="text-ink line-clamp-2 min-h-[48px] text-[16px] leading-6 font-semibold">
          {venue.title}
        </h3>

        <p className="text-brand-red mt-[5px] flex h-6 items-center gap-[5px] text-xs">
          <MapPin className="size-3.5 shrink-0" strokeWidth={1.5} aria-hidden />
          {venue.location}
        </p>

        <ul className="mt-[8px] mb-[21px] flex flex-wrap items-center gap-x-[5px] gap-y-[7px]">
          <AmenityChip
            icon={Users}
            iconClassName="size-[14px]"
            label={venue.guests}
          />
          <AmenityChip
            icon={Maximize2}
            iconClassName="size-[15px]"
            label={venue.area}
          />
          <AmenityChip
            icon={Car}
            iconClassName="size-4"
            label={venue.parking}
          />
          <AmenityChip label={`+${venue.extraAmenities} more`} />
        </ul>

        <div className="border-rule-card mt-auto flex items-center justify-between gap-2 border-t pt-[17px]">
          <p className="text-muted-foreground text-xs">
            From{" "}
            <span className="text-ink text-[13px] font-semibold">
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
