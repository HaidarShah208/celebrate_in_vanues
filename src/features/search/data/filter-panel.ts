export const FILTER_VENUE_TYPES = [
  "Office Space",
  "Meeting",
  "Private Party",
  "Villa",
  "Bar",
  "Loft",
  "Appartment",
  "Ballroom",
  "Restaurant",
  "Studio",
  "House",
  "Gallery",
  "test",
] as const;

export const FILTER_OCCASIONS = [
  "Wedding",
  "Reception",
  "Ceremony",
  "Engagement",
  "Birthday",
  "Babyshower",
  "Concert/Performance",
  "Brand Launch",
  "Fashion Show",
  "Corporate Event",
  "Conference",
  "Pop-up",
] as const;

export const FILTER_CAPACITY = {
  min: 10,
  max: 1500,
  step: 10,
} as const;

export const FILTER_PRICE = {
  min: 10,
  max: 30000,
  step: 10,
} as const;
