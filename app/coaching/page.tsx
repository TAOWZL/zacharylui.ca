import type { Metadata } from "next";
import StripeRef from "@/components/StripeRef";

// Lane Z coaching page: the YouTube descriptions ("apply" link) point here.
// Scope: magick and personal practice coaching, never health care.

const DESCRIPTION =
  "Private coaching in Chinese magick with Zachary Lui. Sixty minutes online, one on one. You leave with a practice built for your own life. $175 + tax.";

// Stripe payment link (Wuji Xuan Life Wellness Ltd account). Charges tax at checkout.
// Private sessions: pay first by Stripe; Stripe then redirects to cal.com/zacharylui/coaching to book.
const SESSION_URL = "https://buy.stripe.com/3cI6oGdLggwXcLA2il3Nm0B";

export const metadata: Metadata = {
  title: "Private Coaching",
  description: DESCRIPTION,
  alternates: { canonical: "/coaching" },
  openGraph: {
    title: "Private Coaching | Zachary Lui",
    description: DESCRIPTION,
    url: "/coaching",
    images: ["/images/zac-coaching.jpg"]
  }
};

const TOPICS: [string, string][] = [
  ["Mapping metaphors", "put your situation on the Chinese map, so you can see which part of it to work on"],
  ["Energy work", "qigong and neigong: standing, breathing and moving exercises, picked for what you are working on"],
  ["Correspondences and stacking", "each of the five phases links to a season, a direction, a colour, a taste and a planet. Stacking lines several up at once, so one working pushes one way"],
  ["Herbal magick and sorcery", "first you make contact with the herb, then you use it in a spell"]
];

const STEPS: [string, string][] = [
  ["Pay", "$175 + tax by card. Stripe adds the tax at checkout."],
  ["Pick your time", "The next screen opens my calendar. Sessions are scheduled in Eastern time."],
  ["Meet on Zoom", "Sixty minutes. You tell me what you want to change. We end by going back over the exercises, so you know what to do next."]
];

const FAQ: [string, string][] = [
  [
    "Do I need to have studied Chinese medicine?",
    "It helps. If you already know the five phases (wood, fire, earth, metal, water) and the channels, we get further in the hour. If you work another magick system, bring it, and we line it up with the Chinese one."
  ],
  [
    "Can I bring more than one topic?",
    "Yes. Pick from the list in any order. Most people get the most from one question worked all the way through."
  ],
  [
    "What do I leave with?",
    "A practice or ritual you can do at home without me, and a summary of the exercises we covered."
  ],
  [
    "Is this therapy or medical care?",
    "No. This is coaching in magick and personal practice. It is not medical treatment, diagnosis or health care."
  ]
];

function BookButton({ className = "" }: { className?: string }) {
  return (
    <a href={SESSION_URL} className={`btn-buy ${className}`}>
      Book a session →
    </a>
  );
}

export default function CoachingPage() {
  return (
    <article className="mx-auto max-w-4xl py-2 sm:py-10">
      <StripeRef />

      <header className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="kicker">Private coaching</p>
          <h1 className="display mt-2 text-[1.7rem] leading-tight text-zinc-50 sm:text-[2.6rem]">
            One hour. You leave with a practice you can do on your own.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
            Chinese medicine is magick. The map it uses to read the body, the five phases and the channels, also works on
            your life. Tell me what you want to change. We find where it sits on the map and build a practice for it that
            you can do at home.
          </p>
          <p className="mt-6 text-lg font-semibold text-zinc-50">
            $175 + tax <span className="text-base font-normal text-zinc-400">· 60 minutes · online</span>
          </p>
          <BookButton className="mt-4" />
          <p className="mt-5 text-sm text-zinc-400">
            Need a read on a decision instead?{" "}
            <a href="/divination" className="underline decoration-zinc-500 underline-offset-4 hover:text-zinc-50">
              Divination coaching
            </a>{" "}
            is the same hour, spent on the reading.
          </p>
        </div>
        <img
          src="/images/zac-coaching.jpg"
          alt="Zachary Lui in a black Chinese jacket, standing with palms open as he explains a qigong form"
          width={864}
          height={1080}
          className="w-full rounded-lg border border-charcoal-800 object-cover"
        />
      </header>

      <section className="offer-card mt-14">
        <p className="kicker">What we can work</p>
        <h2 className="heading-2 mt-2">Bring any of these</h2>
        <ul className="mt-5 grid grid-cols-1 gap-2">
          {TOPICS.map(([name, detail]) => (
            <li key={name} className="rounded-md border border-charcoal-800 bg-charcoal-950/60 px-4 py-3">
              <span className="text-zinc-100">{name}</span>
              <span className="text-zinc-400">, {detail}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 leading-relaxed text-zinc-300">Say which when you book. You can change your mind on the call.</p>
      </section>

      <section className="mt-14">
        <h2 className="heading-2">How it works</h2>
        <ol className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STEPS.map(([title, body], i) => (
            <li key={title} className="rounded-lg border border-charcoal-800 bg-charcoal-950/60 p-5">
              <p className="kicker">Step {i + 1}</p>
              <p className="mt-1 font-semibold text-zinc-100">{title}</p>
              <p className="mt-2 leading-relaxed text-zinc-300">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="heading-2">Who this is for</h2>
        <p className="mt-3 leading-relaxed text-zinc-300">
          People who studied Chinese medicine and want to use it on their own lives. Magicians from other traditions who
          want the Chinese map under their work.
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
          <p className="mt-1 leading-relaxed text-zinc-300">
            巫 (Wu), a shaman and folk priest, and a chaos magician working inside the Chinese system. He holds a Master
            of Medical Qigong, carries 茅山上清 Mao Shan Shangqing Daoist transmission, and teaches Chinese medicine to
            the people who practise it.
          </p>
          <p className="mt-2 text-sm text-zinc-400">Every claim carries its source, edition named.</p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="heading-2">Questions</h2>
        <dl className="mt-5 space-y-5">
          {FAQ.map(([q, a]) => (
            <div key={q}>
              <dt className="font-semibold text-zinc-100">{q}</dt>
              <dd className="mt-1 leading-relaxed text-zinc-300">{a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="offer-card mt-14 text-center sm:text-left">
        <h2 className="heading-2">Book your hour</h2>
        <p className="mt-3 text-lg font-semibold text-zinc-50">
          $175 + tax <span className="text-base font-normal text-zinc-400">· 60 minutes · online</span>
        </p>
        <BookButton className="mt-5" />
        <p className="mt-6 leading-relaxed text-zinc-300">
          Want to keep working between sessions?{" "}
          <a href="/membership" className="underline decoration-zinc-500 underline-offset-4 hover:text-zinc-50">
            The Secret Menu
          </a>{" "}
          is the monthly membership.
        </p>
      </section>

      <p className="mt-10 text-sm text-zinc-400">
        This is coaching in magick and personal practice. It is not medical treatment, diagnosis or health care. It is not
        clinical training, and it does not carry continuing-education credit.
      </p>
    </article>
  );
}
