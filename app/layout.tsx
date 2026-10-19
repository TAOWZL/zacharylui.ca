import type { Metadata } from "next";
import "./globals.css";
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
  description: "Systems for body, mind, and pattern.",
  openGraph: {
    type: "website",
    title: "Zachary Lui",
    description: "Systems for body, mind, and pattern.",
    url: siteConfig.url
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Zachary Lui",
    url: siteConfig.url,
    areaServed: "Toronto",
    description: "Systems for body, mind, and pattern."
  };

  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
          <header className="header-shell">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <HeaderHomeLink className="text-xl font-semibold tracking-wide text-zinc-100 visited:text-zinc-100 no-underline md:text-2xl">
                <span className="text-gold-400">Zachary</span> Lui
              </HeaderHomeLink>
              <HeaderNav />
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="footer-shell">
            <div className="grid gap-8 md:grid-cols-2">
              <FooterContact />

              <FooterNav />
            </div>

            <FooterDisclaimer />

            <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-charcoal-800 pt-4 text-xs text-zinc-500">
              <p>&copy; {year} Zachary Lui. All rights reserved.</p>
              <p>
                <a href="/privacy" className="text-zinc-500 visited:text-zinc-500 no-underline hover:text-gold-400">Privacy</a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
