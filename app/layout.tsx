import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/site.config";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#151516"
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
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <header className="mb-8 rounded-2xl border border-charcoal-800 bg-charcoal-900/65 p-4 backdrop-blur md:mb-10 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <a href="/" className="text-xl font-semibold tracking-wide text-zinc-100 no-underline md:text-2xl">
                <span className="text-gold-400">Zachary</span> Lui
              </a>
              <nav aria-label="Primary" className="flex flex-wrap items-center gap-2">
                {siteConfig.nav.map((item) => (
                  
                    key={item.slug || "home"}
                    href={item.slug ? `/${item.slug}` : "/"}
                    className="inline-flex min-h-[44px] items-center rounded-md border border-charcoal-800 bg-charcoal-950/70 px-4 py-2 text-sm text-zinc-200 no-underline hover:border-gold-600 hover:text-gold-400"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
