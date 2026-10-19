import type { Metadata } from "next";

// Where Kit sends people after they submit the /free-index form
// (Kit form 9434628 > Settings > "Redirect to an external page").
export const metadata: Metadata = {
  title: "Check your inbox",
  robots: { index: false, follow: false },
  alternates: { canonical: "/free-index/check" }
};

export default function CheckInboxPage() {
  return (
    <article className="mx-auto max-w-2xl py-10">
      <p className="kicker">The Secret Menu Index</p>
      <h1 className="heading-1 mt-3">Check your inbox</h1>
      <p className="mt-4 text-lg leading-relaxed text-zinc-300">
        One email from Zachary Lui is on its way. Tap the confirm button in it and both PDFs open on the next page.
      </p>
      <ul className="mt-8 space-y-3 text-zinc-300">
        <li><span className="text-cinnabar-400">1.</span> Nothing in your inbox after a few minutes? Check Promotions or Spam.</li>
        <li><span className="text-cinnabar-400">2.</span> Move it to your main inbox so the next ones land there.</li>
      </ul>
    </article>
  );
}
