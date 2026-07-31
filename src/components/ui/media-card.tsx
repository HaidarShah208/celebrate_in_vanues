import Image from "next/image";
import type { StaticImageData } from "next/image";
type MediaCardProps = {
  title: string;
  image: StaticImageData;
  badge?: string;
};
export function MediaCard({ title, image, badge }: MediaCardProps) {
  return (
    <article className="group relative aspect-3/4 shrink-0 basis-[78%] snap-start overflow-hidden rounded-2xl sm:basis-[46%] lg:basis-[calc((100%-4.5rem)/4)]">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 46vw, 78vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div className="from-surface-ink/85 via-surface-ink/25 absolute inset-0 bg-linear-to-t to-transparent" />

      {badge ? (
        <span className="bg-surface-ink/50 text-surface-white absolute top-4 left-4 rounded-md px-2 py-1 text-xs leading-none font-medium backdrop-blur-sm">
          {badge}
        </span>
      ) : null}

      <h3 className="text-surface-white absolute inset-x-6 bottom-6 pr-6 text-[22px] leading-tight font-semibold sm:text-[26px] lg:text-[30px]">
        {title}
      </h3>
    </article>
  );
}
