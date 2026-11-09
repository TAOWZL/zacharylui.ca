import type { WritingEntry } from "@/lib/content";

// Image card for one piece of writing, shared by /writing and the home page.
export default function ArticleCard({ entry, kicker }: { entry: WritingEntry; kicker: string }) {
  return (
    <a
      href={`/${entry.slug}/`}
      className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-charcoal-800 bg-charcoal-950/70 no-underline hover:border-cinnabar-500/60"
    >
      {entry.cover ? (
        <div className="aspect-[5/2] overflow-hidden bg-charcoal-900 sm:aspect-video">
          <img
            src={entry.cover}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <p className="kicker">{kicker}</p>
        <h3 className="display mt-2 text-2xl leading-snug group-hover:text-cream-200">{entry.title}</h3>
        <p className="mt-3 line-clamp-3 text-lg leading-relaxed text-zinc-300">{entry.description}</p>
        <p className="mt-auto pt-4 text-sm text-zinc-400">
          {entry.dateDisplay ? (
            <time dateTime={entry.date} className="whitespace-nowrap">{entry.dateDisplay}</time>
          ) : null}
          {entry.dateDisplay ? <span className="mx-2">·</span> : null}
          <span className="whitespace-nowrap">{entry.minutes} min read</span>
        </p>
      </div>
    </a>
  );
}
