"use client";
import "leaflet/dist/leaflet.css";
import { divIcon, latLngBounds } from "leaflet";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import type { SearchVenue } from "@/types/venue";
const LONDON: [number, number] = [51.5074, -0.1278];
const pinIcon = divIcon({
  className: "",
  html: '<span class="venuze-map-pin"><span>V</span></span>',
  iconSize: [32, 32],
  iconAnchor: [16, 38],
});
type ViewportSyncProps = {
  venues: readonly SearchVenue[];
};
const RESIZE_SETTLE_MS = 150;
function MapViewportSync({ venues }: ViewportSyncProps) {
  const map = useMap();
  const boundsKey = venues.map((venue) => venue.id).join("|");
  const venuesRef = useRef(venues);
  venuesRef.current = venues;
  const fitToVenues = useCallback(() => {
    const current = venuesRef.current;
    if (current.length === 0) return;
    const bounds = latLngBounds(
      current.map((venue) => [venue.lat, venue.lng] as [number, number]),
    );
    map.fitBounds(bounds, { padding: [56, 56], maxZoom: 14 });
  }, [map]);
  useEffect(() => {
    fitToVenues();
  }, [fitToVenues, boundsKey]);
  useEffect(() => {
    const container = map.getContainer();
    let settleTimer = 0;
    const observer = new ResizeObserver(() => {
      window.clearTimeout(settleTimer);
      // A drag-resize fires this every frame, and Leaflet's default recentring
      // pan is animated. Wait for the drag to settle, then resize without
      // panning and reframe the results for the new aspect ratio.
      settleTimer = window.setTimeout(() => {
        map.invalidateSize({ pan: false, debounceMoveend: true });
        fitToVenues();
      }, RESIZE_SETTLE_MS);
    });
    observer.observe(container);
    return () => {
      window.clearTimeout(settleTimer);
      observer.disconnect();
    };
  }, [map, fitToVenues]);
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
              <p className="text-ink text-[14px] leading-5 font-semibold tracking-[-0.03em] capitalize">
                {venue.title}
              </p>
              <span className="flex items-center gap-[5px]">
                <MapPin
                  className="text-brand-red size-4 shrink-0"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="text-ink text-[12px] leading-4 tracking-[-0.03em]">
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
