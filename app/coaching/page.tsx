import type { Metadata } from "next";
import StripeRef from "@/components/StripeRef";

// Lane Z coaching page: the YouTube descriptions ("apply" link) point here.
// Scope: magick and personal practice coaching, never health care.

const DESCRIPTION =
  "Work the medicine you already practise, for yourself. One-on-one sessions online in Chinese magick and practice, 60 minutes.";

// Stripe payment link (Wuji Xuan Life Wellness Ltd account). Charges tax at checkout.
// Private sessions: pay first by Stripe; Stripe then redirects to cal.com/zacharylui/coaching to book.
const SESSION_URL = "https://buy.stripe.com/3cI6oGdLggwXcLA2il3Nm0B";

export const metadata: Metadata = {
  title: "Coaching",
  description: DESCRIPTION,
  alternates: { canonical: "/coaching" },
  openGraph: {
    title: "Coaching | Zachary Lui",
    description: DESCRIPTION,
    url: "/coaching",
    images: ["/images/15_nine_operations.jpg"]
  }
};

const TOPICS = [
  ["Mapping metaphors", ""],
  ["Energy work", "through qigong and neigong"],
  ["Correspondences", "and the method I call stacking"],
  ["Herbal magick and sorcery", "making contact with the herb, then working it in spells"]
];

export default function CoachingPage() {
  return (
    <article className="mx-auto max-w-3xl py-2 sm:py-10">
      <StripeRef />
      <p className="kicker">Coaching</p>
      <h1 className="display mt-2 text-[1.6rem] leading-tight text-zinc-50 sm:text-4xl">
        Work the medicine you already practise.
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
        You learned the five phases, the channels, the organ spirits. You passed the exam. Then you put the chart away.
        Chinese medicine is magick. The system you studied is a working system, and you can run it in your own life.
      </p>

      <section className="offer-card mt-10">
        <p className="kicker">One on one</p>
        <h2 className="heading-2 mt-2">Private session</h2>
        <p className="mt-3 leading-relaxed text-zinc-300">
          Sixty minutes, one on one, online. You bring the system you already hold, and we work it for yourself. Bring any of these:
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-2">
          {TOPICS.map(([name, detail]) => (
            <li key={name} className="rounded-md border border-charcoal-800 bg-charcoal-950/60 px-4 py-3">
              <span className="text-zinc-100">{name}</span>
              {detail ? <span className="text-zinc-400">, {detail}</span> : null}
            </li>
          ))}
        </ul>
        <p className="mt-5 leading-relaxed text-zinc-300">
          The hour can be divination coaching, straight coaching, or both: say which when you book. Pay, then pick your
          time on the next screen. Scheduled in Eastern time.
        </p>
        <p className="mt-5 text-lg font-semibold text-zinc-50">$175 + tax</p>
        <a href={SESSION_URL} className="btn-buy mt-5">
          Book a session →
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
        This is coaching in magick and personal practice. It is not medical treatment, diagnosis or health care. It is not clinical training, and it does not carry continuing-education credit.
      </p>
    </article>
  );
}
