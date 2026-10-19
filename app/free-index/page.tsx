import type { Metadata } from "next";

// Lane Z signup page: the Instagram bio, DM replies and group posts point here.
// Both forms post straight to Kit form 9434628 ("The Secret Menu Index"), whose
// confirmation email and post-confirm redirect to /secret-menu are set in Kit.
const KIT_FORM_ACTION = "https://app.kit.com/forms/9434628/subscriptions";

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

function SignupForm({ id }: { id: string }) {
  return (
    <form
      action={KIT_FORM_ACTION}
      method="post"
      className="grid gap-3 rounded-lg border border-charcoal-800 bg-charcoal-950/80 p-4 sm:grid-cols-[1fr_1.4fr_auto] sm:p-5"
    >
      <label htmlFor={`${id}-name`} className="sr-only">First name</label>
      <input
        id={`${id}-name`}
        name="fields[first_name]"
        type="text"
        required
        autoComplete="given-name"
        placeholder="First name"
        className="rounded-md border border-charcoal-800 bg-zinc-950 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-500 focus:border-gold-600 focus:outline-none"
      />
      <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
      <input
        id={`${id}-email`}
        name="email_address"
        type="email"
        required
        autoComplete="email"
        placeholder="Email"
        className="rounded-md border border-charcoal-800 bg-zinc-950 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-500 focus:border-gold-600 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-md bg-gold-400 px-5 py-3 text-base font-semibold text-zinc-950 hover:bg-gold-600"
      >
        Send me the free Index
      </button>
    </form>
  );
}

export default function FreeIndexPage() {
  return (
    <article className="mx-auto max-w-3xl py-2 sm:py-10">

      <p className="text-xs uppercase tracking-[0.2em] text-gold-400">The Secret Menu Index</p>
      <h1 className="mt-2 text-[1.6rem] font-bold leading-tight text-zinc-50 sm:text-4xl">The magick Chinese medicine ran as standard practice, in nine entries.</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">Free, one page, two named sources under every entry. Plus a 24-page monograph on garlic.</p>

      <div className="mt-5">
        <SignupForm id="top" />
        <p className="mt-3 text-sm text-zinc-400">
          Confirm one email and both PDFs open. Emails on Chinese medicine as magick. Unsubscribe any time.
        </p>
      </div>

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
              <span className="font-mono text-sm text-gold-400">{String(i + 1).padStart(2, "0")}</span>
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
          <p className="mt-1 text-zinc-300">茅山上清 Mao Shan Shangqing Daoist transmission</p>
          <p className="text-zinc-300">唐密 Tangmi, Chinese Esoteric Buddhism</p>
        </div>
      </section>

      <div className="mt-14">
        <SignupForm id="bottom" />
      </div>
    </article>
  );
}
