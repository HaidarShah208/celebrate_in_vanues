import Image from "next/image";

import noResultIllustration from "@/assets/search/noResult.svg";

export function SearchEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
      <Image
        src={noResultIllustration}
        alt=""
        width={200}
        height={150}
        aria-hidden
      />

      <h2 className="text-surface-ink mt-6 text-[15px] leading-6 font-semibold">
        No data found for your search.
      </h2>
      <p className="text-muted-foreground mt-1 max-w-[280px] text-[13px] leading-5">
        Explore other options or clear filters to see more results.
      </p>
    </div>
  );
}
