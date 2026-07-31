export const CURRENT_USER = { name: "John Snow" } as const;

export const LISTING_MENU_ITEMS = [
  "List your venue",
  "List your service",
  "Partner with us",
] as const;

export const ACCOUNT_MENU_ITEMS = [
  "My profile",
  "My bookings",
  "Saved venues",
  "Log out",
] as const;

export const LANGUAGE_OPTIONS = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
] as const;
