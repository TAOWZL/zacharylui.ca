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
    images: ["/images/15_nine_operations.png"]
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
          Both PDFs open the moment you sign up. Then regular emails from me on Chinese medicine as magick, and now and then one names something I sell. Unsubscribe any time.
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
      </section>
      <section className="mt-14">
        <img
        src="/images/15_nine_operations.png"
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
              <span className="text-zinc-100">{name}</span>
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
          <p className="mt-1 text-zinc-300">巫 (Wu shaman) and Daoist priest by transmission</p>
          <p className="text-zinc-300">茅山上清 Mao Shan Shangqing Daoist transmission</p>
          <p className="text-zinc-300">唐密 Tangmi, Chinese Esoteric Buddhism</p>
        </div>
      </section>

      <div className="mt-14">
        <IndexSignupForm id="bottom" />
      </div>
    </article>
  );
}
