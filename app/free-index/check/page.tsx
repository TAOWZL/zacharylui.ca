import type { Metadata } from "next";

// Old Kit redirect target from the double opt-in setup. The form is single
// opt-in now and Kit redirects straight to /secret-menu; this page stays only
// for old links.
export const metadata: Metadata = {
  title: "Your PDFs",
  robots: { index: false, follow: false },
  alternates: { canonical: "/free-index/check" }
};

export default function CheckInboxPage() {
  return (
    <article className="mx-auto max-w-2xl py-10">
      <p className="kicker">The Secret Menu Index</p>
      <h1 className="heading-1 mt-3">Your PDFs are ready</h1>
      <p className="mt-4 text-lg leading-relaxed text-zinc-300">
        <a href="/secret-menu">Open them here →</a>
      </p>
    </article>
  );
}
