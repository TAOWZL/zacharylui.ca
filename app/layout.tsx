import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/eb-garamond/500.css";
import "@fontsource/eb-garamond/600.css";
import "@fontsource/eb-garamond/700.css";
import { siteConfig } from "@/site.config";
import FooterContact from "@/components/FooterContact";
import HeaderNav, { HeaderHomeLink } from "@/components/HeaderNav";
import { FooterNav, FooterDisclaimer } from "@/components/FooterBody";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Zachary Lui",
    template: "%s | Zachary Lui"
  },
  description: "Zachary Lui, Toronto.",
  openGraph: {
    type: "website",
    title: "Zachary Lui",
    description: "Zachary Lui, Toronto.",
    url: siteConfig.url,
    images: ["/images/og-plain.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
          <header className="header-shell">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <HeaderHomeLink className="inline-flex min-h-[44px] items-center gap-[0.25em] text-xl font-display font-semibold tracking-wide text-cream-50 visited:text-cream-50 no-underline md:text-2xl">
                <span className="text-cinnabar-400">Zachary</span> Lui
              </HeaderHomeLink>
              <HeaderNav />
            </div>
          </header>

          <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">{children}</main>

          <footer className="footer-shell">
            <div className="grid gap-8 md:grid-cols-2">
              <FooterContact />

              <FooterNav />
            </div>

            <FooterDisclaimer />

            <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-charcoal-800 pt-4 text-xs text-zinc-400">
              <p>&copy; {year} Zachary Lui. All rights reserved.</p>
              <p>
                <a href="/terms#privacy" className="inline-flex min-h-[44px] max-w-full items-center text-zinc-400 visited:text-zinc-400 no-underline hover:text-cream-50">Privacy</a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
