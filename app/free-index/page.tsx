import type { Metadata } from "next";

// Lane Z signup page: the Instagram bio, DM replies and group posts point here.
// The form posts straight to Kit form 9434628 ("The Secret Menu Index"), whose
// confirmation email and post-confirm redirect to /secret-menu are set in Kit.
const KIT_FORM_ACTION = "https://app.kit.com/forms/9434628/subscriptions";

export const metadata: Metadata = {
  title: "The Secret Menu Index",
  description:
    "Free. Nine operations Chinese medicine's own records name, two named sources for every entry.",
  alternates: { canonical: "/free-index" },
  openGraph: {
    title: "The Secret Menu Index",
    description:
      "Free. Nine operations Chinese medicine's own records name, two named sources for every entry.",
    url: "/free-index"
  }
};

export default function FreeIndexPage() {
  return (
    <article className="mx-auto max-w-2xl py-10">
      <p className="text-xs uppercase tracking-[0.2em] text-gold-400">The Magick That Never Left</p>
      <h1 className="heading-1 mt-3">The Secret Menu Index</h1>
      <p className="mt-4 text-lg leading-relaxed text-zinc-300">
        Free. Nine operations Chinese medicine&apos;s own records name, two named sources for every entry.
      </p>

      <ul className="mt-8 space-y-3 text-zinc-200">
        <li><span className="text-gold-400">1.</span> The nine operations, one page each.</li>
        <li><span className="text-gold-400">2.</span> Where each operation sits in the classical record.</li>
        <li><span className="text-gold-400">3.</span> Plus the garlic monograph: 24 pages, built on Chinese primary sources.</li>
      </ul>

      <form
        action={KIT_FORM_ACTION}
        method="post"
        className="mt-10 flex flex-col gap-3 rounded-md border border-charcoal-800 bg-charcoal-950/70 p-5 sm:flex-row"
      >
        <label htmlFor="email_address" className="sr-only">Email address</label>
        <input
          id="email_address"
          name="email_address"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email"
          className="flex-1 rounded-md border border-charcoal-800 bg-zinc-950 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-500 focus:border-gold-600 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-md bg-gold-400 px-5 py-3 text-base font-semibold text-zinc-950 hover:bg-gold-600"
        >
          Send me the Index
        </button>
      </form>
      <p className="mt-3 text-sm text-zinc-400">
        Confirm your email and both PDFs are yours. Emails on Chinese medicine as magick. Unsubscribe any time.
      </p>
    </article>
  );
}
