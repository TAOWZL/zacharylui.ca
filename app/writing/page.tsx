import type { Metadata } from "next";
import { getWriting, type WritingEntry } from "@/lib/content";

// Built from docs/writing/. Drop a published .md in that folder and it appears here:
// pieces with `series` group under their series in `part` order, the rest list as Essays, newest first.
const TITLE = "Writing";
const DESCRIPTION =
  "Essays and a serialized book by Zachary Lui on classical Chinese medicine, qigong, ritual and the magick inside the medicine.";
const BOOK = "The Magick That Never Left";
const JOIN = "https://buy.stripe.com/3cI8wObD81C38vkg9b3Nm0w";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/writing" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/writing", images: ["/images/og-magick.jpg"] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/images/og-magick.jpg"] }
};

function ArticleCard({ entry, kicker }: { entry: WritingEntry; kicker: string }) {
  return (
    <a
      href={`/${entry.slug}/`}
      className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-charcoal-800 bg-charcoal-950/70 no-underline hover:border-cinnabar-500/60"
    >
      {entry.cover ? (
        <div className="aspect-video overflow-hidden bg-charcoal-900">
          <img
            src={entry.cover}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <p className="kicker">{kicker}</p>
        <h3 className="display mt-2 text-2xl leading-snug group-hover:text-cream-200">{entry.title}</h3>
        <p className="mt-3 line-clamp-3 text-lg leading-relaxed text-zinc-300">{entry.description}</p>
        <p className="mt-auto pt-4 text-sm text-zinc-400">
          {entry.dateDisplay ? (
            <time dateTime={entry.date} className="whitespace-nowrap">{entry.dateDisplay}</time>
          ) : null}
          {entry.dateDisplay ? <span className="mx-2">·</span> : null}
          <span className="whitespace-nowrap">{entry.minutes} min read</span>
        </p>
      </div>
    </a>
  );
}

export default function WritingPage() {
  const all = getWriting();
  const seriesNames = Array.from(new Set(all.filter((e) => e.series).map((e) => e.series as string)));
  // The book leads; any later series follow in order of their newest piece.
  seriesNames.sort((a, b) => (a === BOOK ? -1 : b === BOOK ? 1 : 0));
  const essays = all.filter((e) => !e.series);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${TITLE}, Zachary Lui`,
    url: "https://zacharylui.ca/writing/",
    author: { "@type": "Person", name: "Zachary Lui", url: "https://zacharylui.ca/" },
    blogPost: all.map((e) => ({
      "@type": "BlogPosting",
      headline: e.title,
      description: e.description,
      datePublished: e.date || undefined,
      url: `https://zacharylui.ca/${e.slug}/`,
      image: e.cover ? `https://zacharylui.ca${e.cover}` : undefined
    }))
  };

  return (
    <article className="mx-auto max-w-5xl py-2 sm:py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="display text-[2rem] leading-tight sm:text-5xl">Writing</h1>
      <p className="mt-4 max-w-2xl text-xl leading-relaxed text-zinc-300">
        Essays on classical Chinese medicine, qigong and ritual, written for practitioners and serious lay readers.
        Every claim carries its source, edition named.
      </p>
      <p className="mt-3 max-w-2xl text-base text-zinc-400">
        Not medical advice. If something here touches what you&apos;re working with clinically, take it to your own
        practitioner.
      </p>

      {seriesNames.map((name) => {
        const parts = all
          .filter((e) => e.series === name)
          .sort((a, b) => (a.part ?? 0) - (b.part ?? 0));
        const isBook = name === BOOK;
        return (
          <section key={name} id={name.toLowerCase().replace(/[^\w]+/g, "-")} className="mt-14 scroll-mt-6">
            <p className="kicker">{isBook ? "A serialized book" : "Series"}</p>
            <h2 className="heading-2 !mt-2">{name}</h2>
            {isBook ? (
              <p className="max-w-2xl text-lg leading-relaxed text-zinc-300">
                Read in order. Each chapter ends with a reading list that names the editions and flags what is
                contested. <a href="/about-this-book/">About this book →</a>
              </p>
            ) : null}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {parts.map((entry) => (
                <ArticleCard
                  key={entry.slug}
                  entry={entry}
                  kicker={entry.part ? `${isBook ? "Chapter" : "Part"} ${entry.part}` : name}
                />
              ))}
            </div>
          </section>
        );
      })}

      {essays.length > 0 ? (
        <section id="essays" className="mt-14 scroll-mt-6">
          <h2 className="heading-2">Essays</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {essays.map((entry) => (
              <ArticleCard key={entry.slug} entry={entry} kicker="Essay" />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-14">
        <h2 className="heading-2">The Nine Operations, on video</h2>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-300">
          One operation per lesson, with the word in your own vocabulary that proves it. Operation 1 is divination,
          starting at the pulse.
        </p>
        <p className="mt-4">
          <a href="/watch/" className="btn-secondary">Watch the series →</a>
        </p>
      </section>

      <section className="offer-card-paper mt-16">
        <h2 className="font-display text-3xl font-semibold text-charcoal-950">The Secret Menu</h2>
        <p className="mt-3 text-lg leading-relaxed text-charcoal-950">
          <strong>Free.</strong> The Secret Menu Index maps every operation running unlabeled in your training: what it
          was, when it was cut, and where it is restored. Subscribers also get the sample monograph, garlic (大蒜).
        </p>
        <p className="mt-3 text-lg leading-relaxed text-charcoal-950">
          <strong>Paid.</strong> One recorded class a month from the Index, plus every monograph after garlic. $75 CAD a
          month plus tax, locked for the first 20 members for as long as they stay. After that, the price goes up.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={JOIN} className="btn-buy">Join The Secret Menu →</a>
          <a href="/free-index/" className="btn-secondary">Get the Index by email</a>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="heading-2">Elsewhere</h2>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-300">
          <strong className="text-zinc-100">Deeper Down the Rabbit Hole.</strong> Co-hosted with Andrieh Vitimus.
          Long-form conversations on contemporary esoteric practice, ritual and tradition.{" "}
          <a href="https://ddtrh.com/">ddtrh.com</a>
        </p>
      </section>
    </article>
  );
}
