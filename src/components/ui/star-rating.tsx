import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
type StarRatingProps = {
  rating: number;
  outOf?: number;
  className?: string;
};
export function StarRating({ rating, outOf = 5, className }: StarRatingProps) {
  return (
    <span
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of ${outOf} stars`}
    >
      {Array.from({ length: outOf }, (_, index) => (
        <Star
          key={index}
          className={cn(
            "size-3.5",
            index < rating
              ? "fill-accent-gold text-accent-gold"
              : "text-dot-idle fill-transparent",
          )}
          aria-hidden
        />
      ))}
    </span>
  );
}
