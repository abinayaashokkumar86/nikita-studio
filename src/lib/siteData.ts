export type ContentMap = Record<string, string>;

export type SiteContentRow = {
  id: string;
  key: string;
  value: string;
  display_order: number | null;
  is_visible: boolean | null;
};

export type MediaCategory = "images" | "videos" | "audios" | "certificates";

export type MediaItemRow = {
  id: string;
  title: string;
  description: string | null;
  category: MediaCategory;
  storage_path: string;
  public_url: string;
  display_order: number | null;
  is_featured: boolean | null;
  is_visible: boolean | null;
};

export const fallbackContent: ContentMap = {
  hero_kicker: "Saraswati Veena • Frisco ISD, Texas",
  hero_title: "Nikita Studio",
  hero_subtitle: "Nikita Prakash - Veena Artist & Aspiring Physician",
  hero_description:
    "5+ Years of Carnatic Veena · Performances in India & USA · Original Compositions · Future Masterclasses",
  hero_quote:
    '"Blending tradition with discipline - A journey of passion and perseverance"',
  featured_title: "Watch & Listen",
  featured_description:
    "Experience the Saraswati Veena - a featured performance or original composition by Nikita.",
  gallery_title: "Moments in Music",
  albums_title: "My Music",
  certificates_title: "Certificates",
};
