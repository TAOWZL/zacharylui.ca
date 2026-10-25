export default function NotFound() {
  return (
    <section className="rounded-lg border border-charcoal-800 bg-charcoal-900 p-8">
      <h1 className="mb-2 text-2xl font-semibold text-zinc-100">Page not found</h1>
      <p className="text-zinc-400">
        This page has moved or never existed. If you came for one of the PDFs, they come free with the Secret Menu Index.
      </p>
      <a className="button-link mt-4 inline-flex" href="/free-index">
        Get the free Index
      </a>
      <p className="mt-4 text-sm">
        <a href="/">Home</a>
      </p>
    </section>
  );
}
