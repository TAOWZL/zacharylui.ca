// The nine operations from the Secret Menu Index, drawn as a 3x3 seal grid.
// Status follows the Index: six already run in clinic unlabeled, two were cut, one is held back.
// Tiles with a video on /watch link to that section.
type Op = { n: string; name: string; glyph: string; gloss: string; status: "clinic" | "cut" | "held"; watch?: string };

const OPS: Op[] = [
  { n: "01", name: "Divination", glyph: "象", gloss: "image", status: "clinic", watch: "divination" },
  { n: "02", name: "Correspondence", glyph: "五味", gloss: "five flavours", status: "clinic", watch: "correspondence" },
  { n: "03", name: "Talismans", glyph: "符", gloss: "talisman", status: "cut", watch: "talismans" },
  { n: "04", name: "Energy work", glyph: "行氣", gloss: "circulate the qi", status: "clinic", watch: "energy-work" },
  { n: "05", name: "Gnosis", glyph: "存思", gloss: "visualisation", status: "clinic" },
  { n: "06", name: "Illumination", glyph: "養生", gloss: "nourishing life", status: "clinic" },
  { n: "07", name: "Banishing", glyph: "汗吐下", gloss: "the three doors", status: "clinic" },
  { n: "08", name: "Spirit work", glyph: "祝由", gloss: "ritual healing by charm", status: "cut", watch: "spirit-work" },
  { n: "09", name: "The ninth", glyph: "", gloss: "", status: "held" }
];

const STATUS = {
  clinic: "In your clinic, unlabeled",
  cut: "Cut from the curriculum",
  held: "Held back"
};

export default function OperationsMap() {
  return (
    <figure className="m-0">
      <ol className="grid list-none auto-rows-fr grid-cols-1 gap-3 p-0 min-[480px]:grid-cols-3">
        {OPS.map((op) => {
          const inner = (
            // Phone: glyph on the left, text on the right, so nine tiles stay short. Wider: stacked seal tiles.
            <span className="grid grid-cols-[5rem_1fr] items-center gap-x-3 min-[480px]:block">
              <span
                aria-hidden="true"
                className={`row-span-2 block min-h-[1.2em] whitespace-nowrap font-display text-2xl leading-tight min-[480px]:order-none min-[480px]:text-3xl ${
                  op.status === "cut" ? "text-cinnabar-400" : op.status === "held" ? "text-zinc-500" : "text-cream-100"
                }`}
              >
                {op.glyph || "?"}
              </span>
              <span className="block min-w-0">
                <span className="block font-display text-lg font-semibold leading-snug text-cream-100">
                  <span className="mr-2 text-sm tracking-[0.15em] text-gold-400">{op.n}</span>
                  {op.name}
                </span>
                {op.gloss ? <span className="block text-base text-zinc-300">{op.gloss}</span> : null}
                <span
                  className={`mt-1 block text-sm ${op.status === "cut" ? "text-cinnabar-400" : "text-zinc-400"}`}
                >
                  {STATUS[op.status]}
                </span>
                {op.watch ? <span className="mt-1 block text-sm text-gold-400">Watch the lesson →</span> : null}
              </span>
            </span>
          );
          const box = `block h-full rounded-lg border px-4 py-3 no-underline ${
            op.status === "cut" ? "border-cinnabar-600 bg-cinnabar-600/10" : "border-charcoal-800 bg-charcoal-950/60"
          }`;
          return (
            <li key={op.n} className="min-w-0">
              {op.watch ? (
                <a href={`/watch#${op.watch}`} className={`${box} hover:border-gold-400`}>
                  {inner}
                </a>
              ) : (
                <div className={box}>{inner}</div>
              )}
            </li>
          );
        })}
      </ol>
      <figcaption className="mt-3 text-base text-zinc-400">
        The nine operations of the Secret Menu Index. Six already run in clinic without the name, two were cut, one is held
        back. The Secret Menu works one operation per class.
      </figcaption>
    </figure>
  );
}
