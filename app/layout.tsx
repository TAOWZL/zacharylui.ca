import type { Metadata } from "next";
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
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
          <header className="mb-10 rounded-2xl border border-charcoal-800 bg-charcoal-900/65 p-4 backdrop-blur md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <a href="/" className="text-xl font-semibold tracking-wide text-zinc-100 no-underline md:text-2xl">
                <span className="text-gold-400">Zachary</span> Lui
              </a>
              <nav className="flex flex-wrap items-center gap-2">
                {siteConfig.nav.map((item) => (
                  <a
                    key={item.slug || "home"}
                    href={item.slug ? `/${item.slug}` : "/"}
                    className="rounded-md border border-charcoal-800 bg-charcoal-950/70 px-3 py-1.5 text-sm text-zinc-200 no-underline hover:border-gold-600 hover:text-gold-400"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-16 rounded-2xl border border-charcoal-800 bg-charcoal-900/55 p-4 text-sm text-zinc-400">
            <p>Built from markdown notes, deployed with GitHub Pages.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
