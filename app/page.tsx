import type { Metadata } from "next";
import OperationsMap from "@/components/OperationsMap";
import IndexSignupForm from "@/components/IndexSignupForm";
import ArticleCard from "@/components/ArticleCard";
import { getWriting } from "@/lib/content";

// Online front door. Follows the Lane Z rules (see lib/laneZ.ts): no clinic
// name, address, phone, R.Ac title or acupuncture link on this page. The
// three-doors page for in-person work lives at /in-person.

const TITLE = "Zachary Lui | Chinese Magick and Divination Online";
const DESCRIPTION =
  "Wu shaman and Daoist priest by transmission. The Secret Menu membership, and divination coaching on Zoom, in Chinese medicine as magick.";

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
    body: "One recorded class a month, each on an operation from the Index. Members send questions, answered in the next class, and every monograph after garlic goes to members only.",
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

// Teaching venues on the home page, one dotted line. Lane Z venues only; the colleges are on /education.
const TAUGHT_AT = [
  "Penn State University",
  "World Tai Chi & Qigong Summit",
  "Saam Diagnostic Conference",
  "ConVocation",
  "Toronto and Hamilton Pagan Pride"
];


// Lane Z appearances only, four max so the section stays light. Clinic press stays on /press.
// Cover art loads from Apple Podcasts' artwork CDN (160px squares).
const art = (path: string) => `https://is1-ssl.mzstatic.com/image/thumb/${path}/160x160bb.jpg`;
const FEATURED = [
  {
    show: "Qiological",
    title: "Ep. 340, Alchemy, Magic, and Channel Personalities",
    href: "https://qiological.com/podcast/alchemy-magic-and-channel-personalities-zachary-lui/",
    img: art("Podcasts211/v4/69/76/9d/69769dfc-c7f8-3ed9-c19a-6e12467d167f/mza_13318356769921450566.jpg")
  },
  {
    show: "Black Beryl",
    title: "Buddhist Ritual Magic, with Pierce Salguero of Penn State",
    href: "https://open.spotify.com/episode/6pJs76mESwXJEHW7hONCEL",
    img: art("Podcasts211/v4/36/2a/fc/362afcc7-b5ce-e80d-0f92-ef13f93c498d/mza_17174706515285653761.jpg")
  },
  {
    show: "Learn Feng Shui",
    title: "Honoring Our Ancestors and Feng Shui for Burial",
    href: "https://podcasts.apple.com/us/podcast/honoring-our-ancestors-and-feng-shui-for-burial-with-zac-lui/id1486212016?i=1000632002729",
    img: art("Podcasts211/v4/b3/1b/5d/b31b5d5d-7ab5-2771-1c95-df61c1542ae3/mza_13874763813627147720.jpg")
  },
  {
    show: "Deeper Down the Rabbit Hole",
    title: "Co-host, with Andrieh Vitimus",
    href: "https://ddtrh.com",
    img: art("Podcasts123/v4/d0/bb/4d/d0bb4d3d-1c6f-6d7f-9b2c-86852da64667/mza_8988145111910738095.jpg")
  }
];

export default function HomePage() {
  return (
    <article className="mx-auto max-w-4xl py-2 sm:py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <section>
        <p className="kicker">Zachary Lui</p>
        <h1 className="display mt-3 text-balance text-[2rem] leading-tight sm:text-5xl">
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

      <section aria-label="Featured on" className="mt-10">
        <p className="kicker">Featured on</p>
        <ul className="mt-3 grid list-none grid-cols-1 gap-2 p-0 min-[480px]:grid-cols-2 sm:gap-3">
          {FEATURED.map((f) => (
            <li key={f.show} className="min-w-0">
              <a href={f.href} className="chapter-card group h-full !p-3 sm:!p-5" rel="noopener">
                <span className="flex items-center gap-3 sm:gap-4">
                <img
                  src={f.img}
                  alt={`${f.show} cover art`}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="h-10 w-10 shrink-0 rounded-md border border-charcoal-800 object-cover opacity-90 transition group-hover:opacity-100 sm:h-[4.5rem] sm:w-[4.5rem]"
                />
                <span className="min-w-0">
                  <span className="display block text-[0.95rem] leading-snug sm:text-lg">{f.show}</span>
                  <span className="mt-1 hidden text-zinc-300 sm:block">{f.title}</span>
                </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[0.95rem] text-zinc-300">
          <span className="kicker mr-3 whitespace-nowrap">Cited in</span>
          Benebell Wen,{" "}
          <a href="https://benebellwen.com/2026/02/19/are-asian-folk-traditions-pagan/" rel="noopener">
            Are Asian Folk Traditions &ldquo;Pagan&rdquo;?
          </a>{" "}
          (2026)<span className="mx-2 text-zinc-500">·</span>
          <a href="https://www.theglobeandmail.com/life/adv/article-best-exercises-to-aid-in-digestion/" rel="noopener">
            The Globe and Mail
          </a>
          , on qigong (2020).
        </p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-zinc-300">
          <span className="kicker mr-3 whitespace-nowrap">Taught at</span>
          {TAUGHT_AT.map((v, i) => (
            <span key={v}>
              <span className="whitespace-nowrap">{v}</span>
              {i < TAUGHT_AT.length - 1 ? <span className="mx-2 text-zinc-500">·</span> : null}{" "}
            </span>
          ))}
        </p>
      </section>

      <section className="mt-16 sm:mt-24">
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
                  <span className="hidden sm:contents">
                  <a href={offer.more.href} className="btn-secondary">
                    {offer.more.label}
                  </a>
                  </span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <h2 className="heading-2">The nine operations</h2>
        <div className="mt-6">
          <OperationsMap />
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <h2 className="heading-2">Read the history</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {getWriting()
            .filter((e) => e.series === "The Magick That Never Left")
            .sort((a, b) => (a.part ?? 0) - (b.part ?? 0))
            .map((entry) => (
              <ArticleCard key={entry.slug} entry={entry} kicker={`Chapter ${entry.part}`} />
            ))}
        </div>
        <p className="mt-4">
          <a href="/writing">All writing →</a> <span className="mx-2 text-zinc-400">·</span> <a href="/watch">Watch the operations →</a>
        </p>
      </section>

      <section className="mt-16 sm:mt-24 flow-root rounded-lg border border-charcoal-800 bg-charcoal-950/60 p-5 sm:flex sm:flex-row sm:items-center sm:gap-5">
        <img
          src="/images/zachary-headshot-2.jpg"
          alt="Zachary Lui"
          width={96}
          height={96}
          className="float-left mb-1 mr-4 h-16 w-16 shrink-0 rounded-full object-cover sm:float-none sm:m-0 sm:h-24 sm:w-24"
        />
        <div>
          <p className="font-semibold text-zinc-100">Zachary Lui</p>
          <p className="mt-1 max-w-2xl text-zinc-300">
            Wu (巫) and Daoist priest of the Mao Shan Shangqing (茅山上清) transmission, and a Tangmi (唐密) practitioner
            of Chinese Esoteric Buddhism. Apprenticed to his teachers since 2008; his spiritual master is Andrieh Vitimus.
          </p>
          <p className="mt-2">
            <a href="/about-this-book/">About the author →</a>
          </p>
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <h2 className="heading-2">Start with the Index</h2>
        <div className="mt-6">
          <IndexSignupForm id="bottom" />
        </div>
      </section>
    </article>
  );
}
