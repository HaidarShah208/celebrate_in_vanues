import Link from "next/link";

import { FooterContactForm } from "@/components/layout/footer-contact-form";
import { LogoMark } from "@/components/ui/logo";
import {
  FOOTER_COLUMNS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_TAGLINE,
} from "@/config/footer";
import { siteConfig } from "@/config/site";

/**
 * The generous top padding leaves room for a promo card to overlap the rounded
 * top edge; the card itself owns the negative margin that pulls it down.
 */
export function SiteFooter() {
  return (
    <footer className="bg-surface-ink text-surface-white rounded-t-[40px] pt-24 lg:pt-[125px]">
      <div className="container-frame px-4 pb-10 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between xl:gap-10">
          <div className="xl:flex-1">
            <div className="flex items-start gap-4">
              <LogoMark
                gradientId="venuze-mark-footer"
                className="w-[52px] lg:w-[70px]"
              />
              <p className="max-w-[570px] text-xl leading-[1.6] font-bold sm:text-2xl sm:leading-[1.85]">
                {FOOTER_TAGLINE}
              </p>
            </div>

            <nav
              aria-label="Footer"
              className="mt-10 grid grid-flow-col grid-cols-2 grid-rows-2 gap-x-8 gap-y-10 xl:grid-flow-row xl:grid-cols-4 xl:grid-rows-1 xl:gap-6"
            >
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title}>
                  <h2 className="text-lg leading-none font-semibold">
                    {column.title}
                  </h2>

                  <ul className="mt-4 flex flex-col gap-1">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-surface-white/70 hover:text-surface-white text-[13px] leading-[1.6] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <FooterContactForm className="w-full xl:w-[518px] xl:shrink-0" />
        </div>

        <div className="border-surface-white/8 mt-10 flex flex-col items-center gap-6 border-t pt-9 sm:flex-row sm:justify-between">
          <ul className="flex items-center gap-8">
            {FOOTER_SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-red block transition-colors"
                >
                  <Icon className="size-7" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-surface-white/70 text-[13px] leading-none">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
