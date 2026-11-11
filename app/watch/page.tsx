import type { Metadata } from "next";
import VideoCard, { type Video } from "@/components/VideoCard";

// Lane Z video library, grouped by the operations in the Secret Menu Index.
// Curated: clinic-branded uploads and "Toronto Qigong" beginner videos stay on YouTube.
const TITLE = "Watch: Chinese Medicine as Magick";
const DESCRIPTION =
  "Videos from Zachary Lui on the operations of Chinese magick: divination in the pulse, correspondence, talismans, energy work and spirit work.";
const JOIN = "/join";
const thumb = (id: string, file = "maxresdefault") => `https://i.ytimg.com/vi/${id}/${file}.jpg`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/watch" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/watch", images: ["/images/og-magick.jpg"] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/images/og-magick.jpg"] }
};

type Row = Video & { date: string; iso: string };

const GROUPS: { name: string; videos: Row[] }[] = [
  {
    name: "Divination",
    videos: [
      { id: "ox3LPFMiIPQ", title: "This Is the Diviner's Craft Hiding in Your Pulse Diagnosis", thumb: thumb("ox3LPFMiIPQ"), length: "8 min", date: "2026-09-04", iso: "PT8M1S" },
      { id: "jLMZruNmGvw", title: "Chinese Medicine Seats a Court at Your Wrist. Who's Reporting?", thumb: thumb("jLMZruNmGvw"), length: "9 min", date: "2026-10-26", iso: "PT9M13S" }
    ]
  },
  {
    name: "Correspondence",
    videos: [
      { id: "RBWlRjAEFwQ", title: "This Will Change How You Read the Five Elements Forever", thumb: thumb("RBWlRjAEFwQ"), length: "6 min", date: "2026-10-22", iso: "PT6M11S" },
      { id: "NwuFlg3NUiU", title: "How to Read Yin and Yang SO Clearly, You Can Explain It to Anyone", thumb: thumb("NwuFlg3NUiU"), length: "8 min", date: "2026-10-06", iso: "PT8M21S" }
    ]
  },
  {
    name: "Talismans",
    videos: [
      { id: "eBggh4c0Mks", title: "The Exact Taoist Magic Palm Seal Sun Simiao Prescribed for Talismans", thumb: thumb("eBggh4c0Mks"), length: "8 min", date: "2026-10-24", iso: "PT8M12S" }
    ]
  },
  {
    name: "Energy work",
    videos: [
      { id: "gfIMY0CNUHE", title: "Qigong's Roots: The Hidden Shamanic Connection", thumb: thumb("gfIMY0CNUHE"), length: "7 min", date: "2025-01-25", iso: "PT6M43S" },
      { id: "SbeGrxxzR_4", title: "Qigong vs Nei Gong: Discover the Core Differences", thumb: thumb("SbeGrxxzR_4"), length: "8 min", date: "2017-02-02", iso: "PT8M14S" },
      { id: "5mMM4tWUtug", title: "Qigong vs Reiki: Key Differences You Must Know!", thumb: thumb("5mMM4tWUtug"), length: "23 min", date: "2018-12-20", iso: "PT22M34S" }
    ]
  },
  {
    name: "Spirit work",
    videos: [
      { id: "02noF-J9xSI", title: "Taoist Magic Says a Grudge Is a Ghost That Moved In", thumb: thumb("02noF-J9xSI"), length: "10 min", date: "2026-11-10", iso: "PT10M7S" },
      { id: "r1dIlfChBfs", title: "Da Shi Zhi Bodhisattva, with Andrieh Vitimus", thumb: thumb("r1dIlfChBfs", "hqdefault"), length: "71 min", date: "2017-01-21", iso: "PT1H10M54S" }
    ]
  }
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: TITLE,
  itemListElement: GROUPS.flatMap((g) => g.videos).map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "VideoObject",
      name: v.title,
      description: v.title,
      thumbnailUrl: v.thumb,
      uploadDate: v.date,
      duration: v.iso,
      embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
      url: `https://www.youtube.com/watch?v=${v.id}`
    }
  }))
};

export default function WatchPage() {
  return (
    <article className="mx-auto max-w-5xl py-2 sm:py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <h1 className="display text-[2rem] leading-tight sm:text-5xl">Watch the operations</h1>
      <p className="mt-4 max-w-2xl text-xl leading-relaxed text-zinc-300">
        Sorted by the operations in the Index. The videos name each operation. The Secret Menu is where you work it,
        one recorded class a month.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={JOIN} className="btn-buy">Join The Secret Menu →</a>
        <a href="/free-index" className="btn-secondary">Get the free Index</a>
      </div>

      {GROUPS.map((group) => (
        <section key={group.name} id={group.name.toLowerCase().replace(/\s+/g, "-")} className="mt-12 scroll-mt-6">
          <h2 className="heading-2">{group.name}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {group.videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      ))}

      <section className="offer-card-paper mt-16">
        <h2 className="font-display text-3xl font-semibold text-charcoal-950">Work it with me</h2>
        <p className="mt-3 text-lg leading-relaxed text-charcoal-950">
          One recorded class a month, questions answered in the next class, every monograph after garlic. $75 CAD a month + tax.
          Cancel any time.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={JOIN} className="btn-buy">Join The Secret Menu →</a>
          <a href="https://www.youtube.com/@thezacharylui" className="btn-secondary">
            All videos on YouTube
          </a>
        </div>
      </section>
    </article>
  );
}
