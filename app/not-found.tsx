export default function NotFound() {
  return (
    <section className="rounded-lg border border-charcoal-800 bg-charcoal-900 p-8">
      <h1 className="mb-2 text-2xl font-semibold text-zinc-100">Page not found</h1>
      <p className="text-zinc-400">The page you requested does not exist in the current markdown vault.</p>
      <a className="button-link mt-4 inline-flex" href="/">
        Return Home
      </a>
    </section>
  );
}
