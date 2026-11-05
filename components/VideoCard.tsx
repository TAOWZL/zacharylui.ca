"use client";

import { useState } from "react";

export type Video = { id: string; title: string; thumb: string; length: string };

// Shows a thumbnail until clicked, so the page stays light and YouTube loads only on request.
// Without JavaScript it is an ordinary link to the video on YouTube.
export default function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="m-0 min-w-0">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-charcoal-800 bg-charcoal-950">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          />
        ) : (
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            onClick={(event) => {
              event.preventDefault();
              setPlaying(true);
            }}
            aria-label={`Play: ${video.title}`}
            className="group absolute inset-0 block"
          >
            <img src={video.thumb} alt="" loading="lazy" className="h-full w-full object-cover" />
            <span className="absolute bottom-3 left-3 inline-flex min-h-[44px] items-center rounded-md bg-cinnabar-600 px-4 text-sm font-semibold text-cream-200 group-hover:bg-cinnabar-700">
              Play, {video.length}
            </span>
          </a>
        )}
      </div>
      <figcaption className="mt-3 text-lg leading-snug text-zinc-100">{video.title}</figcaption>
    </figure>
  );
}
