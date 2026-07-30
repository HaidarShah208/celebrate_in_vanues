"use client";

import { useState } from "react";

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
    <section className="bg-featured-dusk py-14 sm:py-16 lg:py-20">
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
