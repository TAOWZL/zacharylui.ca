import type { Metadata } from "next";

// Landing page for the free yin and yang clip linked from the Nov 19 2026 Kit email.
// Gmail and Outlook cannot play video inside an email, so their readers land here
// instead of on the bare mp4, with the offer directly under the clip.
const TITLE = "Three free minutes from the yin and yang class";
const DESCRIPTION =
  "Watch the theory of yin and yang turn into a state you can call up on demand. A free clip from the Secret Menu class by Zachary Lui.";
const STRIPE = "https://buy.stripe.com/3cI8wObD81C38vkg9b3Nm0w";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/watch/yin-yang" },
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/watch/yin-yang",
    images: ["/images/yin-yang-trigger-thumb.jpg"]
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/images/yin-yang-trigger-thumb.jpg"] }
};

export default function YinYangClipPage() {
  return (
    <article className="mx-auto max-w-3xl py-2 sm:py-8">
      <h1 className="display text-[2rem] leading-tight sm:text-5xl">Three free minutes from the yin and yang class</h1>
      <p className="mt-4 text-xl leading-relaxed text-zinc-300">
        Watch the theory turn into a state you can call up on demand.
      </p>

      <video
        className="mt-8 w-full rounded"
        controls
        playsInline
        preload="metadata"
        poster="/images/yin-yang-trigger-thumb.jpg"
      >
        <source src="/videos/yin-yang-trigger-on-demand.mp4" type="video/mp4" />
      </video>

      <section className="offer-card-paper mt-10">
        <h2 className="font-display text-3xl font-semibold text-charcoal-950">The full class is in the members&apos; folder</h2>
        <p className="mt-3 text-lg leading-relaxed text-charcoal-950">
          Each unit is one class in three layers: the exam layer, cited to Maciocia, Kim&apos;s Handbook of Oriental
          Medicine and the other books you&apos;d study for the Pan-Canadian boards; the qigong layer; and the magick layer.
          The first week of December brings the thirteen ghost points.
        </p>
        <p className="mt-3 text-lg leading-relaxed text-charcoal-950">
          $75 a month + tax. Cancel anytime and you keep access to the end of your month.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={STRIPE} className="btn-buy">Join the Secret Menu →</a>
        </div>
      </section>

      <p className="mt-10 text-sm text-zinc-400">
        This is education and energy practice, not medical treatment or diagnosis.
      </p>
    </article>
  );
}
