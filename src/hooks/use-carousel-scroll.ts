"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Drives a horizontally scrollable carousel: tracks whether either end has
 * been reached and advances by exactly one card at a time.
 *
 * @param cardGap Gap between cards in px, so a step lands on the next card.
 */
export function useCarouselScroll(cardGap = 24) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const syncScrollState = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    setCanScrollBack(scroller.scrollLeft > 1);
    setCanScrollForward(scroller.scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    syncScrollState();
    scroller.addEventListener("scroll", syncScrollState, { passive: true });

    // Card widths are percentage based, so re-check on any resize.
    const observer = new ResizeObserver(syncScrollState);
    observer.observe(scroller);

    return () => {
      scroller.removeEventListener("scroll", syncScrollState);
      observer.disconnect();
    };
  }, [syncScrollState]);

  const scrollByCard = useCallback(
    (direction: -1 | 1) => {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const firstCard = scroller.firstElementChild;
      const step =
        firstCard instanceof HTMLElement
          ? firstCard.offsetWidth + cardGap
          : scroller.clientWidth;

      scroller.scrollBy({ left: direction * step, behavior: "smooth" });
    },
    [cardGap],
  );

  return { scrollerRef, canScrollBack, canScrollForward, scrollByCard };
}
