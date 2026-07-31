"use client";

import "leaflet/dist/leaflet.css";

import { divIcon, latLngBounds } from "leaflet";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";

import type { SearchVenue } from "@/features/search/data/venues";

const LONDON: [number, number] = [51.5074, -0.1278];

/**
 * Shared across every marker — the pin is identical for all venues. The anchor
 * sits at the teardrop's tip, which the -45deg rotation pushes below the 32px
 * box, so it has to be offset past the icon height.
 */
const pinIcon = divIcon({
  className: "",
  html: '<span class="venuze-map-pin"><span>V</span></span>',
  iconSize: [32, 32],
  iconAnchor: [16, 38],
});

type ViewportSyncProps = {
  venues: readonly SearchVenue[];
};

/**
 * Frames the current results and keeps Leaflet's cached size honest. The panel
 * is display:none below xl, so the map can mount at 0x0 and would stay blank
 * once the viewport grows unless we invalidate on resize. Leaflet only exposes
 * the map instance through context, so this must live inside MapContainer.
 */
function MapViewportSync({ venues }: ViewportSyncProps) {
  const map = useMap();

  // `venues` is a fresh array on every render, so depending on it directly
  // would re-frame the map and throw away the user's pan on any re-render.
  const boundsKey = venues.map((venue) => venue.id).join("|");

  useEffect(() => {
    if (venues.length === 0) return;

    const bounds = latLngBounds(
      venues.map((venue) => [venue.lat, venue.lng] as [number, number]),
    );
    map.fitBounds(bounds, { padding: [56, 56], maxZoom: 14 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, boundsKey]);

  useEffect(() => {
    const container = map.getContainer();
    const observer = new ResizeObserver(() => {
      map.invalidateSize();
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, [map]);

  return null;
}

type SearchMapCanvasProps = {
  venues: readonly SearchVenue[];
};

export default function SearchMapCanvas({ venues }: SearchMapCanvasProps) {
  const center = useMemo<[number, number]>(() => {
    const first = venues[0];
    return first ? [first.lat, first.lng] : LONDON;
  }, [venues]);

  return (
    <MapContainer
      center={center}
      zoom={12}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapViewportSync venues={venues} />

      {venues.map((venue) => (
        <Marker key={venue.id} position={[venue.lat, venue.lng]} icon={pinIcon}>
          {/* Tooltip rather than Popup: it opens on hover natively and is
              pointer-transparent, so moving over the card can't flicker it. */}
          {/* The rotated pin renders ~46px above its anchor, so the card is
              lifted clear of it and the 14px tail points back down at it. */}
          <Tooltip
            direction="top"
            offset={[0, -46]}
            opacity={1}
            className="venuze-map-card"
          >
            {venue.gallery[0] ? (
              <div className="relative h-[163px] w-full overflow-hidden rounded-[10px]">
                <Image
                  src={venue.gallery[0]}
                  alt=""
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            ) : null}

            <div className="mt-[11px] flex flex-col gap-1">
              <p className="text-surface-ink text-[14px] leading-5 font-semibold tracking-[-0.03em] capitalize">
                {venue.title}
              </p>
              <span className="flex items-center gap-[5px]">
                <MapPin
                  className="text-brand-red size-4 shrink-0"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="text-surface-ink text-[12px] leading-4 tracking-[-0.03em]">
                  {venue.location}
                </span>
              </span>
            </div>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
