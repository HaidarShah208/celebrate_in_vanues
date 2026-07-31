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
    <footer className="bg-surface-ink text-surface-white rounded-t-[40px] pt-24 lg:pt-31.25">
      <div className="container-frame px-4 pb-10 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between xl:gap-10">
          <div className="xl:flex-1">
            <div className="flex items-start gap-4">
              <LogoMark className="w-13 lg:w-17.5" />
              <p className="max-w-142.5 text-lg leading-[1.6] font-semibold sm:text-2xl sm:leading-[1.85]">
                {FOOTER_TAGLINE}
              </p>
            </div>

            <nav
              aria-label="Footer"
              className="mt-10 grid grid-flow-col grid-cols-2 grid-rows-2 gap-x-8 gap-y-10 xl:grid-flow-row xl:grid-cols-4 xl:grid-rows-1 xl:gap-6"
            >
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title}>
                  <h2 className="lg:text-xl text-[#A6A6A6] text-lg leading-none ">
                    {column.title}
                  </h2>

                  <ul className="mt-4 flex flex-col gap-1">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-white hover:text-surface-white text-xs leading-[1.6] transition-colors"
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

          <FooterContactForm className="w-full lg:mt-4 xl:w-129.5 xl:shrink-0" />
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
