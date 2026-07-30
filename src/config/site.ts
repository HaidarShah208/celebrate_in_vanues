export const siteConfig = {
  name: "Venuze",
  description:
    "Production-ready Next.js application with a scalable frontend architecture.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  links: {
    github: "https://github.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
