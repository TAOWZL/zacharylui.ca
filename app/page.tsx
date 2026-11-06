import type { Metadata } from "next";
import OperationsMap from "@/components/OperationsMap";
import IndexSignupForm from "@/components/IndexSignupForm";

// Online front door. Follows the Lane Z rules (see lib/laneZ.ts): no clinic
// name, address, phone, R.Ac title or acupuncture link on this page. The
// three-doors page for in-person work lives at /in-person.

const TITLE = "Zachary Lui | Chinese Magick and Divination Online";
const DESCRIPTION =
  "Wu shaman and Daoist priest by transmission. The Secret Menu membership and divination coaching on Zoom, in Chinese medicine as magick.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/", images: ["/images/og-magick.jpg"] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/images/og-magick.jpg"] }
};

type Offer = {
  kicker: string;
  name: string;
  body: string;
  detail: string;
  cta: string;
  href: string;
  more?: { label: string; href: string };
  paper?: boolean;
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Zachary Lui",
  url: "https://zacharylui.ca",
  description: DESCRIPTION,
  areaServed: "Worldwide"
};

const OFFERS: Offer[] = [
  {
    kicker: "Membership",
    name: "The Secret Menu",
    body: "One class a month on Zoom, each on an operation from the Index. Every class is recorded, and every monograph after garlic goes to members only.",
    detail: "$75 CAD a month + tax. The first 20 members keep that rate. Cancel any time.",
    cta: "Join The Secret Menu",
    href: "https://buy.stripe.com/3cI8wObD81C38vkg9b3Nm0w",
    more: { label: "What's inside", href: "/membership" },
    paper: true
  },
  {
    kicker: "One to one",
    name: "Divination Coaching",
    body: "Mahjong tiles or tarot, read with mediumship, 60 minutes on Zoom. Bring the decision. You leave with the read, the path that fits it, and a practice to work afterward.",
    detail: "$175 CAD + tax. Wherever you are.",
    cta: "Book a session",
    href: "https://wujixuan.janeapp.com/#/staff_member/1/treatment/3",
    more: { label: "About the readings", href: "/divination" }
  },
  {
    kicker: "Commissioned",
    name: "Ritual Work",
    body: "Protection and cleansing, ancestor work, deity petition and offering, from the Tangmi, Daoist and Wu lineages. Every commission begins with a divination session, and not every request is taken.",
    detail: "From $1,500, quoted before anything begins.",
    cta: "About ritual work",
    href: "/ritual"
  }
];

const CHAPTERS = [
  {
    title: "Chinese Medicine Is 75 Years Old",
    href: "/chinese-medicine-is-75-years-old",
    blurb: "What the post-war reform renamed, and the man who wanted the whole thing abolished in 1929."
  },
  {
    title: "Your Clinic Runs Eight of Nine",
    href: "/eight-of-nine",
    blurb: "Nine things a magician does, and where eight of them live in the medicine you were trained in."
  }
];

const LINEAGE = [
  "巫 (Wu shaman) and Daoist priest by transmission",
  "茅山上清 Mao Shan Shangqing Daoist transmission",
  "唐密 Tangmi, Chinese Esoteric Buddhism"
];

export default function HomePage() {
  return (
    <article className="mx-auto max-w-4xl py-2 sm:py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <section>
        <p className="kicker">Zachary Lui</p>
        <h1 className="display mt-3 text-[2rem] leading-tight sm:text-5xl">
          Chinese medicine is magick. Learn to work it.
        </h1>
        <p className="mt-4 max-w-2xl text-xl leading-relaxed text-zinc-300">
          Start with the free Index: the nine operations the tradition ran as standard practice, two named sources
          under every entry, plus a 24-page monograph on garlic.
        </p>
        <div className="mt-6">
          <IndexSignupForm id="top" />
          <p className="mt-3 text-sm text-zinc-400">
            Your PDFs open the moment you sign up. You also get emails from me, Zachary Lui, on Chinese medicine as magick, and now and then one names something I sell. Unsubscribe any time.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="heading-2">Work with me online</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {OFFERS.map((offer) => (
            <div key={offer.name} className={offer.paper ? "offer-card-paper" : "offer-card"}>
              <p className={offer.paper ? "text-xs uppercase tracking-[0.2em] text-cinnabar-700" : "kicker"}>{offer.kicker}</p>
              <h3 className={offer.paper ? "mt-2 font-display text-3xl font-semibold text-charcoal-950" : "display mt-2 text-2xl"}>
                {offer.name}
              </h3>
              <p className={`mt-3 text-lg leading-relaxed ${offer.paper ? "text-charcoal-950" : "text-zinc-300"}`}>{offer.body}</p>
              <p className={`mt-auto pt-3 text-base ${offer.paper ? "text-charcoal-800" : "text-zinc-400"}`}>{offer.detail}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={offer.href}
                  className={offer.href.startsWith("https://") ? "btn-buy" : "btn-secondary"}
                >
                  {offer.cta} →
                </a>
                {offer.more ? (
                  <a href={offer.more.href} className="btn-secondary">
                    {offer.more.label}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="heading-2">The nine operations</h2>
        <div className="mt-6">
          <OperationsMap />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="heading-2">Read the history</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {CHAPTERS.map((ch, i) => (
            <a key={ch.href} href={ch.href} className="chapter-card">
              <p className="kicker">Chapter {i + 1}</p>
              <p className="display mt-2 text-xl">{ch.title}</p>
              <p className="mt-2 text-lg text-zinc-300">{ch.blurb}</p>
            </a>
          ))}
        </div>
        <p className="mt-4">
          <a href="/writing">All writing →</a> <span className="mx-2 text-zinc-400">·</span> <a href="/watch">Watch the operations →</a>
        </p>
      </section>

      <section className="mt-16 flex flex-col items-start gap-5 rounded-lg border border-charcoal-800 bg-charcoal-950/60 p-5 sm:flex-row sm:items-center">
        <img
          src="/images/zachary-headshot-2.jpg"
          alt="Zachary Lui"
          width={96}
          height={96}
          className="h-24 w-24 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-zinc-100">Zachary Lui</p>
          {LINEAGE.map((line, i) => (
            <p key={line} className={i === 0 ? "mt-1 text-zinc-300" : "text-zinc-300"}>
              {line}
            </p>
          ))}
          <p className="mt-2 text-zinc-400">Spiritual master: Andrieh Vitimus. Apprenticing since 2008.</p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="heading-2">Start with the Index</h2>
        <div className="mt-6">
          <IndexSignupForm id="bottom" />
        </div>
      </section>
    </article>
  );
}
