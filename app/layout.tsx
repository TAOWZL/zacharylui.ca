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

          <footer className="mt-16 rounded-2xl border border-charcoal-800 bg-charcoal-900/55 p-6 text-sm text-zinc-300 md:p-8">
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-zinc-100">Zachary Lui</p>
                <p>Wuji Xuan Life Wellness</p>
                <p>255 Broadview Avenue, Toronto ON</p>
                <p>416-595-5525</p>
              </div>

              <p className="max-w-3xl text-xs leading-relaxed text-zinc-400">
                Acupuncture is regulated under the College of Traditional Chinese Medicine Practitioners and Acupuncturists of Ontario (R.Ac). Reiki, Qigong, Neigong coaching, Divination Coaching, Ritual work, and Marriage Officiation are not regulated healthcare services. Marriage officiation is provided under religious officiant registration with the Province of Ontario.
              </p>

              <nav className="flex flex-wrap gap-x-3 gap-y-2 text-zinc-200">
                <a href="/acupuncture" className="hover:text-gold-400">Acupuncture</a>
                <span className="text-zinc-600">·</span>
                <a href="/qigong" className="hover:text-gold-400">Qigong / Neigong</a>
                <span className="text-zinc-600">·</span>
                <a href="/reiki" className="hover:text-gold-400">Reiki</a>
                <span className="text-zinc-600">·</span>
                <a href="/ritual" className="hover:text-gold-400">Ritual</a>
                <span className="text-zinc-600">·</span>
                <a href="/divination" className="hover:text-gold-400">Divination Coaching</a>
                <span className="text-zinc-600">·</span>
                <a href="/officiant" className="hover:text-gold-400">Marriage Officiant</a>
                <span className="text-zinc-600">·</span>
                <a href="/education" className="hover:text-gold-400">Teaching</a>
              </nav>

              <nav className="flex flex-wrap gap-x-3 gap-y-2 text-zinc-400">
                <a href="/" className="hover:text-zinc-200">Home</a>
                <span className="text-zinc-700">·</span>
                <a href="/about" className="hover:text-zinc-200">About</a>
                <span className="text-zinc-700">·</span>
                <a href="/services" className="hover:text-zinc-200">Services & Fees</a>
                <span className="text-zinc-700">·</span>
                <a href="/writing" className="hover:text-zinc-200">Writing</a>
                <span className="text-zinc-700">·</span>
                <a href="/press" className="hover:text-zinc-200">Press</a>
                <span className="text-zinc-700">·</span>
                <a href="/privacy" className="hover:text-zinc-200">Privacy</a>
              </nav>

              <p className="text-xs text-zinc-500">
                &copy; {new Date().getFullYear()} Zachary Lui.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
