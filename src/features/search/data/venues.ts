import imageStudio from "@/assets/home/1.png";
import imageCorporate from "@/assets/home/2.png";
import imageBanquet from "@/assets/home/3.png";
import imageCelebration from "@/assets/home/4.png";
import type { SearchQuery } from "@/types/search";
import type { SearchVenue, SearchVenuesResult } from "@/types/venue";
export type { SearchVenue, SearchVenuesResult } from "@/types/venue";
const GALLERY_POOL = [
  imageBanquet,
  imageCorporate,
  imageStudio,
  imageCelebration,
] as const;
const BASE_VENUES: readonly Omit<SearchVenue, "gallery">[] = [
  {
    id: "venue-1",
    title: "High-Spec Room in Trendy Home Clapham/ Stockwell",
    location: "London, SW1",
    city: "london",
    guests: "300+",
    area: "2,000 sq ft",
    parking: "Free parking",
    extraAmenities: 25,
    pricePerHour: 50,
    isVerified: true,
    category: "photo-studio",
    lat: 51.511,
    lng: -0.136,
  },
  {
    id: "venue-2",
    title: "Downtown Loft with Natural Light",
    location: "London, W1",
    city: "london",
    guests: "80+",
    area: "1,200 sq ft",
    parking: "Street parking",
    extraAmenities: 18,
    pricePerHour: 75,
    isVerified: true,
    category: "photo-studio",
    lat: 51.514,
    lng: -0.142,
  },
  {
    id: "venue-3",
    title: "Industrial Warehouse for Film & Events",
    location: "London, E1",
    city: "london",
    guests: "500+",
    area: "4,500 sq ft",
    parking: "On-site parking",
    extraAmenities: 32,
    pricePerHour: 120,
    isVerified: true,
    category: "photo-studio",
    lat: 51.508,
    lng: -0.075,
  },
  {
    id: "venue-4",
    title: "Rooftop Terrace Overlooking the Thames",
    location: "London, SE1",
    city: "london",
    guests: "150+",
    area: "900 sq ft",
    parking: "Nearby garage",
    extraAmenities: 14,
    pricePerHour: 95,
    isVerified: false,
    category: "photo-studio",
    lat: 51.505,
    lng: -0.09,
  },
  {
    id: "venue-5",
    title: "Gallery Space in Shoreditch Creative Hub",
    location: "London, E2",
    city: "london",
    guests: "200+",
    area: "1,800 sq ft",
    parking: "Free parking",
    extraAmenities: 22,
    pricePerHour: 65,
    isVerified: true,
    category: "photo-studio",
    lat: 51.526,
    lng: -0.078,
  },
  {
    id: "venue-6",
    title: "Film-Ready Studio with Cyclorama Wall",
    location: "London, N1",
    city: "london",
    guests: "60+",
    area: "1,100 sq ft",
    parking: "Reserved bays",
    extraAmenities: 20,
    pricePerHour: 85,
    isVerified: true,
    category: "photo-studio",
    lat: 51.534,
    lng: -0.104,
  },
  {
    id: "venue-7",
    title: "Modern Ballroom for Celebrations",
    location: "Dubai, Marina",
    city: "dubai",
    guests: "400+",
    area: "3,200 sq ft",
    parking: "Valet parking",
    extraAmenities: 28,
    pricePerHour: 150,
    isVerified: true,
    category: "venue",
    lat: 25.08,
    lng: 55.14,
  },
  {
    id: "venue-8",
    title: "Desert-View Outdoor Pavilion",
    location: "Dubai, UAE",
    city: "dubai",
    guests: "250+",
    area: "2,500 sq ft",
    parking: "Free parking",
    extraAmenities: 16,
    pricePerHour: 110,
    isVerified: true,
    category: "private-party",
    lat: 25.1,
    lng: 55.17,
  },
  {
    id: "venue-9",
    title: "Marina Photo Studio with Skyline Views",
    location: "Dubai, Marina",
    city: "dubai",
    guests: "120+",
    area: "1,600 sq ft",
    parking: "Valet parking",
    extraAmenities: 21,
    pricePerHour: 90,
    isVerified: true,
    category: "photo-studio",
    lat: 25.077,
    lng: 55.139,
  },
  {
    id: "venue-10",
    title: "Bright Content Studio in Business Bay",
    location: "Dubai, Business Bay",
    city: "dubai",
    guests: "90+",
    area: "1,400 sq ft",
    parking: "Free parking",
    extraAmenities: 19,
    pricePerHour: 70,
    isVerified: true,
    category: "photo-studio",
    lat: 25.185,
    lng: 55.267,
  },
];
function withGalleries(): SearchVenue[] {
  return BASE_VENUES.map((venue, index) => ({
    ...venue,
    gallery: [
      ...GALLERY_POOL.slice(index % GALLERY_POOL.length),
      ...GALLERY_POOL.slice(0, index % GALLERY_POOL.length),
    ],
  }));
}
export async function getSearchVenues(
  query: SearchQuery,
): Promise<SearchVenuesResult> {
  await new Promise((resolve) => setTimeout(resolve, 80));
  const all = withGalleries();
  const locationSlug = query.location.toLowerCase();
  let venues = all;
  if (locationSlug) {
    const matched = all.filter(
      (venue) =>
        venue.city.includes(locationSlug) || locationSlug.includes(venue.city),
    );
    venues =
      matched.length > 0
        ? matched
        : all.filter((venue) => venue.city === "london");
  }
  if (query.category && query.category !== "all") {
    venues = venues.filter((venue) => venue.category === query.category);
  }
  if (query.q) {
    const needle = query.q.toLowerCase();
    venues = venues.filter(
      (venue) =>
        venue.title.toLowerCase().includes(needle) ||
        venue.location.toLowerCase().includes(needle),
    );
  }
  if (query.sort === "price-asc") {
    venues = [...venues].sort((a, b) => a.pricePerHour - b.pricePerHour);
  } else if (query.sort === "price-desc") {
    venues = [...venues].sort((a, b) => b.pricePerHour - a.pricePerHour);
  }
  const totalCount = venues.length > 0 ? 3456 : 0;
  return { venues, totalCount };
}
