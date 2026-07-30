import Image from "next/image";

import { StarRating } from "@/components/ui/star-rating";
import type { Testimonial } from "@/features/home/data/trusted";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="bg-surface-white flex shrink-0 basis-[88%] snap-start overflow-hidden rounded-xl sm:basis-[72%] lg:min-h-[300px] lg:basis-[calc((100%-1.5rem)/2)]">
      {/* The portrait's coloured backdrop is baked into the artwork. */}
      <div className="relative w-[130px] shrink-0 self-stretch sm:w-[190px] lg:w-[237px]">
        <Image
          src={testimonial.portrait}
          alt=""
          fill
          sizes="(min-width: 1024px) 237px, (min-width: 640px) 190px, 130px"
          className="object-cover"
        />
      </div>

      <blockquote className="flex flex-1 flex-col justify-center p-5 sm:p-6 lg:px-7 lg:py-8">
        <p className="text-foreground text-base leading-[1.55] font-normal sm:text-lg lg:text-xl">
          {testimonial.quote}
        </p>

        <footer className="mt-4">
          <p className="text-foreground text-base font-bold lg:text-lg">
            {testimonial.author}
          </p>
          <StarRating rating={testimonial.rating} className="mt-2" />
        </footer>
      </blockquote>
    </article>
  );
}
