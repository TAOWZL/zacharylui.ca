// Teacher lines, drawn in the same seal style as the nine-operations map.
// Each line is a named person passing a named thing. Only add a line Zac has named.
type Node = { name: string; note: string; glyph?: string };

const LINES: { title: string; glyph: string; nodes: Node[] }[] = [
  {
    title: "Spiritual master",
    glyph: "師父",
    nodes: [
      {
        name: "Andrieh Vitimus",
        note: "Spiritual master for all of the training, since 2008. Results Over Image Institute, where Zachary now teaches as a trainer."
      }
    ]
  },
  {
    title: "Daoist transmission",
    glyph: "茅山上清",
    nodes: [
      { name: "Jerry Alan Johnson", note: "Founder, International Institute of Medical Qigong." },
      {
        name: "Robert Youngs",
        note: "Medical Qigong teacher. Passed the 茅山上清 (Mao Shan Shangqing) lineage on at his passing in 2020."
      }
    ]
  }
];

function Arrow() {
  return (
    <span aria-hidden="true" className="block py-1 text-center text-xl leading-none text-gold-400">
      ↓
    </span>
  );
}

export default function LineageChart() {
  return (
    <figure className="m-0">
      <div className="grid grid-cols-1 gap-4 min-[560px]:grid-cols-2">
        {LINES.map((line) => (
          <section key={line.title} className="flex min-w-0 flex-col" aria-label={line.title}>
            <p className="m-0 mb-2 text-sm uppercase tracking-[0.15em] text-gold-400">
              <span lang="zh-Hant" className="mr-2 font-display text-lg normal-case tracking-normal text-cream-100">
                {line.glyph}
              </span>
              {line.title}
            </p>
            <ol className="m-0 flex list-none flex-col p-0">
              {line.nodes.map((node, i) => (
                <li key={node.name} className="min-w-0">
                  {i > 0 ? <Arrow /> : null}
                  <div className="rounded-lg border border-charcoal-800 bg-charcoal-950/60 p-4">
                    <span className="block font-display text-xl font-semibold text-cream-100">{node.name}</span>
                    <span className="mt-1 block text-base text-zinc-300">{node.note}</span>
                  </div>
                </li>
              ))}
            </ol>
            <span className="mt-auto">
              <Arrow />
            </span>
          </section>
        ))}
      </div>
      <div className="rounded-lg border border-cinnabar-600 bg-cinnabar-600/10 p-4 text-center">
        <span className="block font-display text-2xl font-semibold text-cream-50">Zachary Lui</span>
        <span className="mt-1 block text-base text-zinc-200">
          <span lang="zh-Hant">巫</span> (Wu shaman) and Daoist priest by transmission
        </span>
      </div>
      <figcaption className="mt-3 text-base text-zinc-400">Teacher lines. Each arrow is a direct transmission.</figcaption>
    </figure>
  );
}
