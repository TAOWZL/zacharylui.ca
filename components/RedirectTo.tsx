// Static export cannot send a server redirect, so these pages forward with a
// meta refresh plus a script, and show a plain link if both are blocked.
export default function RedirectTo({ href, label }: { href: string; label: string }) {
  return (
    <article className="mx-auto max-w-2xl py-10">
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <script dangerouslySetInnerHTML={{ __html: `window.location.replace(${JSON.stringify(href)});` }} />
      <p className="text-lg leading-relaxed text-zinc-300">
        <a href={href}>{label} →</a>
      </p>
    </article>
  );
}
