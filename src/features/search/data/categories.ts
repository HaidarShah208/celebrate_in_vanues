import allSpacesIcon from "@/assets/search/allSpaces.svg";
import apartmentIcon from "@/assets/search/appartment.svg";
import filmStudioIcon from "@/assets/search/film.svg";
import galleryIcon from "@/assets/search/gallery.svg";
import meetingIcon from "@/assets/search/meeting.svg";
import officeIcon from "@/assets/search/office.svg";
import partyIcon from "@/assets/search/party.svg";
import photoStudioIcon from "@/assets/search/photoStudio.svg";
import restaurantIcon from "@/assets/search/resturant.svg";
import venueIcon from "@/assets/search/vanue.svg";
import warehouseIcon from "@/assets/search/wareHouse.svg";
type SpaceCategory = {
  id: string;
  label: string;
  icon: {
    src: string;
  };
};
export const SPACE_CATEGORIES = [
  { id: "all", label: "All Spaces", icon: allSpacesIcon },
  { id: "photo-studio", label: "Photo Studio", icon: photoStudioIcon },
  { id: "film-studio", label: "Film Studio", icon: filmStudioIcon },
  { id: "warehouse", label: "Warehouse", icon: warehouseIcon },
  { id: "gallery", label: "Gallery", icon: galleryIcon },
  { id: "restaurant", label: "Restaurant", icon: restaurantIcon },
  { id: "apartment", label: "Apartment", icon: apartmentIcon },
  { id: "office-space", label: "Office Space", icon: officeIcon },
  { id: "venue", label: "Venue", icon: venueIcon },
  { id: "private-party", label: "Private Party", icon: partyIcon },
  { id: "meeting", label: "Meeting", icon: meetingIcon },
] as const satisfies readonly SpaceCategory[];
export type SpaceCategoryId = (typeof SPACE_CATEGORIES)[number]["id"];
export const DEFAULT_SPACE_CATEGORY: SpaceCategoryId = "photo-studio";
