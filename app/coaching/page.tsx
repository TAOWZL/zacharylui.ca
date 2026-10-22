import type { Metadata } from "next";

// Lane Z coaching page: the YouTube descriptions ("apply" link) point here.
// Scope: magick and personal practice coaching, never health care.

const DESCRIPTION =
  "Work the medicine you already practise, for yourself. An eight-week founding cohort and one-on-one sessions in Chinese magick and practice.";

const BOOKING_URL = "https://wujixuan.janeapp.com/#/discipline/3/treatment/3";
const WAITLIST_URL =
  "mailto:zac@zacharylui.ca?subject=Founding%20cohort%20waitlist&body=Name%3A%0ABackground%20(practitioner%2C%20student%2C%20or%20learning%20on%20my%20own)%3A%0AWhich%20operation%20I%20most%20want%20to%20work%3A%0AWhat%20I%20want%20to%20be%20able%20to%20do%20for%20myself%20after%20eight%20weeks%3A%0A";

export const metadata: Metadata = {
  title: "Coaching",
  description: DESCRIPTION,
  alternates: { canonical: "/coaching" },
  openGraph: {
    title: "Coaching | Zachary Lui",
    description: DESCRIPTION,
    url: "/coaching",
    images: ["/images/15_nine_operations.png"]
  }
};

const WEEKS = [
  ["Correspondence", "and the method I call stacking"],
  ["Energy work", "through qigong and neigong"],
  ["Herbal magick and sorcery", "worked on a plant of your choosing"]
];

const ONE_ON_ONE = [
  ["Mapping metaphors", ""],
  ["Energy work", "through qigong and neigong"],
  ["Correspondences", "and the method I call stacking"],
  ["Herbal magick and sorcery", "the furthest the one on one goes"]
];

export default function CoachingPage() {
  return (
    <article className="mx-auto max-w-3xl py-2 sm:py-10">
      <p className="kicker">Coaching</p>
      <h1 className="display mt-2 text-[1.6rem] leading-tight text-zinc-50 sm:text-4xl">
        Work the medicine you already practise.
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
        You learned the five phases, the channels, the organ spirits. You passed the exam. Then you put the chart away.
        Chinese medicine is magick. The system you studied is a working system, and you can run it in your own life.
      </p>

      <section className="offer-card mt-10">
        <p className="kicker">Founding cohort</p>
        <h2 className="heading-2 mt-2">Work the Medicine</h2>
        <p className="mt-3 leading-relaxed text-zinc-300">
          Eight weeks, starting January 2027. A small group. One live call each week, recorded for anyone who misses
          it. Three operations, each worked for yourself in your own life.
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-2">
          {WEEKS.map(([name, detail]) => (
            <li key={name} className="rounded-md border border-charcoal-800 bg-charcoal-950/60 px-4 py-3">
              <span className="text-zinc-100">{name}</span>
              <span className="text-zinc-400">, {detail}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-lg font-semibold text-zinc-50">$1,200 + tax</p>
        <p className="text-sm text-zinc-400">
          Founding price, for this round only. Paid in full at signup. The round runs in January whatever the group
          size, or sooner once it fills. No refunds.
        </p>
        <a href={WAITLIST_URL} className="btn-primary mt-5 self-start">
          Reserve a place
        </a>
      </section>

      <section className="offer-card mt-8">
        <p className="kicker">One on one</p>
        <h2 className="heading-2 mt-2">Private session</h2>
        <p className="mt-3 leading-relaxed text-zinc-300">
          Sixty minutes. Divination you already have, free, in the videos. The session is the work the videos
          don&apos;t teach, in this order.
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-2">
          {ONE_ON_ONE.map(([name, detail]) => (
            <li key={name} className="rounded-md border border-charcoal-800 bg-charcoal-950/60 px-4 py-3">
              <span className="text-zinc-100">{name}</span>
              {detail ? <span className="text-zinc-400">, {detail}</span> : null}
            </li>
          ))}
        </ul>
        <p className="mt-5 leading-relaxed text-zinc-300">
          If you join the cohort within seven days, the session comes off the price.
        </p>
        <p className="mt-5 text-lg font-semibold text-zinc-50">$175 + tax</p>
        <a href={BOOKING_URL} className="btn-secondary mt-5" target="_blank" rel="noopener">
          Book a session
        </a>
      </section>

      <section className="mt-14">
        <h2 className="heading-2">Who this is for</h2>
        <p className="mt-3 leading-relaxed text-zinc-300">
          Practitioners, students and serious learners who know the system and want to work it for themselves.
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

      <p className="mt-10 text-sm text-zinc-400">
        This is coaching in magick and personal practice. It is not medical treatment, diagnosis or health care.
      </p>
    </article>
  );
}
