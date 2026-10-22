import type { Metadata } from "next";

// Where Kit sends people after they submit the /free-index form
// (Kit form 9434628 > Settings > "Redirect to an external page").
// Keep SENDER and SUBJECT in sync with the form's confirmation email in Kit.
export const metadata: Metadata = {
  title: "Check your inbox",
  robots: { index: false, follow: false },
  alternates: { canonical: "/free-index/check" }
};

const SENDER = "zac@zacharylui.ca";
const SUBJECT = "One click and the Secret Menu Index is yours";

// "Sniper links": open the reader's webmail already searched for the confirmation email.
const q = encodeURIComponent(`from:${SENDER}`);
const inboxLinks = [
  { label: "Open Gmail", href: `https://mail.google.com/mail/u/0/#search/${q}+in%3Aanywhere` },
  { label: "Open Outlook", href: "https://outlook.live.com/mail/0/" },
  { label: "Open Yahoo Mail", href: `https://mail.yahoo.com/d/search/keyword=${encodeURIComponent(SENDER)}` }
];

export default function CheckInboxPage() {
  return (
    <article className="mx-auto max-w-2xl py-10">
      <p className="kicker">The Secret Menu Index</p>
      <h1 className="heading-1 mt-3">One more click and it&rsquo;s yours</h1>
      <p className="mt-4 text-lg leading-relaxed text-zinc-300">
        An email from Zachary Lui ({SENDER}) is on its way, subject line &ldquo;{SUBJECT}&rdquo;. Tap the confirm button in it and both PDFs open on the next page.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {inboxLinks.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            {l.label}
          </a>
        ))}
      </div>
      <ul className="mt-8 space-y-3 text-zinc-300">
        <li><span className="text-cinnabar-400">1.</span> Nothing after a few minutes? Search your email for {SENDER}, and check Promotions and Spam.</li>
        <li><span className="text-cinnabar-400">2.</span> Move it to your main inbox so the next ones land there.</li>
        <li><span className="text-cinnabar-400">3.</span> Typo in your address? Go back to <a href="/free-index" className="underline">the free Index page</a> and sign up again.</li>
      </ul>
    </article>
  );
}
