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

  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
          <header className="header-shell">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <a href="/" className="text-xl font-semibold tracking-wide text-zinc-100 visited:text-zinc-100 no-underline md:text-2xl">
                <span className="text-gold-400">Zachary</span> Lui
              </a>
              <nav className="flex flex-wrap items-center gap-2">
                {siteConfig.nav.map((item) => (
                  <a
                    key={item.slug || "home"}
                    href={item.slug ? `/${item.slug}` : "/"}
                    className="rounded-md border border-charcoal-800 bg-charcoal-950/70 px-3 py-1.5 text-sm text-zinc-200 visited:text-zinc-200 no-underline hover:border-gold-600 hover:text-gold-400"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="footer-shell">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-1">
                <p className="font-semibold text-zinc-100">Zachary Lui, R.Ac</p>
                <p>Wuji Xuan Life Wellness</p>
                <p>
                  <a
                    href="https://maps.google.com/?q=255+Broadview+Avenue+Toronto+ON"
                    className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400"
                  >
                    255 Broadview Avenue, Toronto ON
                  </a>
                </p>
                <p>
                  <a href="tel:+14165955525" className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400">
                    416-595-5525
                  </a>
                </p>
                <p className="pt-3 text-xs text-zinc-500">
                  Related:{" "}
                  <a
                    href="https://queencitycurio.ca"
                    rel="noopener"
                    className="text-zinc-400 visited:text-zinc-400 no-underline hover:text-gold-400"
                  >
                    Queen City Curio
                  </a>
                </p>
              </div>

              <nav aria-label="Footer" className="space-y-2">
                <p className="font-semibold text-zinc-100">Practice</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <li><a href="/acupuncture" className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400">Acupuncture</a></li>
                  <li><a href="/qigong" className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400">Qigong / Neigong</a></li>
                  <li><a href="/reiki" className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400">Reiki</a></li>
                  <li><a href="/ritual" className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400">Ritual</a></li>
                  <li><a href="/divination" className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400">Divination Coaching</a></li>
                  <li><a href="/services" className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400">Services &amp; Fees</a></li>
                  <li><a href="/writing" className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400">Writing</a></li>
                  <li><a href="/education" className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400">Teaching</a></li>
                  <li><a href="/about" className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400">About</a></li>
                  <li><a href="/press" className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400">Press</a></li>
                </ul>
              </nav>
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-xs leading-relaxed text-zinc-400">
              Acupuncture is a regulated health service in Ontario, provided by Zachary Lui, Registered Acupuncturist (R.Ac), under the{" "}
              <a
                href="https://www.ctcmpao.on.ca/publicregistersrc/"
                rel="noopener"
                className="text-zinc-300 visited:text-zinc-300 underline hover:text-gold-400"
              >
                College of Traditional Chinese Medicine Practitioners and Acupuncturists of Ontario
              </a>
              . Reiki, Qigong and Neigong instruction, Divination Coaching, and Ritual work are offered separately and are not regulated healthcare services in Ontario. Nothing on this site is a substitute for medical, mental health, legal, or professional advice.
            </p>

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
