import type { Metadata } from "next";

import IndexSignupForm from "@/components/IndexSignupForm";

// Lane Z signup page: the Instagram bio, DM replies and group posts point here.

const DESCRIPTION =
  "The magick Chinese medicine ran as standard practice, in nine entries. Free, one page, two named sources under every entry.";

export const metadata: Metadata = {
  title: "The Secret Menu Index",
  description: DESCRIPTION,
  alternates: { canonical: "/free-index" },
  openGraph: {
    title: "The Secret Menu Index",
    description: DESCRIPTION,
    url: "/free-index",
    images: ["/images/15_nine_operations.jpg"]
  }
};

const OPERATIONS = [
  "Divination",
  "Correspondence",
  "Talismans",
  "Energy work",
  "Gnosis",
  "Illumination",
  "Banishing",
  "Spirit work",
  "The ninth"
];

export default function FreeIndexPage() {
  return (
    <article className="mx-auto max-w-3xl py-2 sm:py-10">

      <p className="kicker">The Secret Menu Index</p>
      <h1 className="display mt-2 text-[1.6rem] leading-tight text-zinc-50 sm:text-4xl">The magick Chinese medicine ran as standard practice, in nine entries.</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">Free, one page, two named sources under every entry. Plus a 24-page monograph on garlic.</p>

      <div className="mt-5">
        <IndexSignupForm id="top" />
        <p className="mt-3 text-sm text-zinc-400">
          Your PDFs open the moment you sign up. You also get emails from me, Zachary Lui, on Chinese medicine as magick, and now and then one names something I sell. Unsubscribe any time.
        </p>
      </div>


      <section className="mt-10 rounded-lg border border-cinnabar-500/40 bg-charcoal-950/70 p-5">
        <p className="kicker">Entry 01, from the Index</p>
        <p className="mt-3 text-lg font-semibold text-zinc-50">Divination</p>
        <p className="mt-2 leading-relaxed text-zinc-300">
          Reading one surface for information it has no business carrying. The receipt: 脈象, pulse image, not pulse
          rate. 象 is the character the Yijing uses for what a diviner reads out of a hexagram.
        </p>
        <p className="mt-3 text-sm text-zinc-400">
          Sources: Nigel Wiseman and Feng Ye, A Practical Dictionary of Chinese Medicine (Paradigm, 1998); Elisabeth Hsu,
          Pulse Diagnosis in Early Chinese Medicine (Cambridge University Press, 2010).
        </p>
        <p className="mt-3 text-zinc-300">Eight more like this, one page.</p>
        <p className="mt-3">
          <a href="/watch#divination">Watch the divination lesson →</a>
        </p>
      </section>
      <section className="mt-14">
        <img
        src="/images/15_nine_operations.jpg"
        alt="Nine objects laid out on a dark wooden table: brush, sealed paper packet, bronze mirror, dried herbs, porcelain dish, red cord, stone, cup"
        width={1672}
        height={941}
        className="w-full rounded-lg border border-charcoal-800"
      />
        <h2 className="heading-2 mt-8">What&apos;s in it</h2>
        <ol className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {OPERATIONS.map((name, i) => (
            <li
              key={name}
              className="flex items-baseline gap-3 rounded-md border border-charcoal-800 bg-charcoal-950/60 px-4 py-3"
            >
              <span className="font-mono text-sm text-cinnabar-400">{String(i + 1).padStart(2, "0")}</span>
              <span className="min-w-0 text-zinc-100 [overflow-wrap:anywhere]">{name}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-zinc-300">
          One page. Each entry names where the operation sits in the classical record, with two named sources under it.
          The garlic monograph comes with it: 24 pages on one herb, built on Chinese primary sources.
        </p>
      </section>

      <section className="mt-14 flex flex-col items-start gap-5 rounded-lg border border-charcoal-800 bg-charcoal-950/60 p-5 sm:flex-row sm:items-center">
        <img
          src="/images/zachary-headshot-2.jpg"
          alt="Zachary Lui"
          width={96}
          height={96}
          className="h-24 w-24 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-zinc-100">Zachary Lui</p>
          <p className="mt-1 text-zinc-300">Wu (巫) and Daoist priest, Mao Shan Shangqing (茅山上清)</p>
          <p className="text-zinc-300">Tangmi (唐密), Chinese Esoteric Buddhism</p>
        </div>
      </section>

      <div className="mt-14">
        <IndexSignupForm id="bottom" />
      </div>

      <nav aria-label="After the Index" className="mt-14 border-t border-charcoal-800 pt-8">
        <h2 className="heading-2">After the Index</h2>
        <ul className="mt-5 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
          <li>
            <a href="/membership" className="chapter-card h-full">
              <span className="kicker block">Membership</span>
              <span className="display mt-2 block text-xl">The Secret Menu</span>
              <span className="mt-2 block text-zinc-300">One recorded class a month, one operation at a time.</span>
            </a>
          </li>
          <li>
            <a href="/divination" className="chapter-card h-full">
              <span className="kicker block">One to one</span>
              <span className="display mt-2 block text-xl">Divination Coaching</span>
              <span className="mt-2 block text-zinc-300">Mahjong or tarot, read with mediumship, 60 minutes.</span>
            </a>
          </li>
          <li>
            <a href="/watch" className="chapter-card h-full">
              <span className="kicker block">Free</span>
              <span className="display mt-2 block text-xl">Watch</span>
              <span className="mt-2 block text-zinc-300">Lessons on the operations, grouped by entry.</span>
            </a>
          </li>
          <li>
            <a href="/writing" className="chapter-card h-full">
              <span className="kicker block">Free</span>
              <span className="display mt-2 block text-xl">Read</span>
              <span className="mt-2 block text-zinc-300">The Magick That Never Left, the history behind the Index, chapter by chapter.</span>
            </a>
          </li>
        </ul>
      </nav>
    </article>
  );
}
