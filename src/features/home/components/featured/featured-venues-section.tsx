"use client";

import Image from "next/image";
import { useState } from "react";

import featuredVenueBackdrop from "@/assets/home/featuredVenue.png";
import { CardCarousel } from "@/components/ui/card-carousel";
import { SectionHeading } from "@/components/ui/section-heading";
import { VenueCard } from "@/features/home/components/featured/venue-card";
import { VenueFilterTabs } from "@/features/home/components/featured/venue-filter-tabs";
import {
  DEFAULT_VENUE_FILTER,
  FEATURED_VENUES,
  type VenueFilter,
} from "@/features/home/data/featured-venues";

export function FeaturedVenuesSection() {
  const [activeFilter, setActiveFilter] =
    useState<VenueFilter>(DEFAULT_VENUE_FILTER);

  return (
    /* `isolate` keeps the -z-10 backdrop behind the content but still inside
       this section, so it never slips under the sections around it. */
    <section className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-20">
      <Image
        src={featuredVenueBackdrop}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="container-frame px-4 sm:px-6 lg:px-20">
        <SectionHeading title="Featured Venues" tone="dark" />

        <div className="mt-8">
          <VenueFilterTabs
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <CardCarousel label="venues" tone="dark" className="mt-10">
          {FEATURED_VENUES.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </CardCarousel>
      </div>
    </section>
  );
}
