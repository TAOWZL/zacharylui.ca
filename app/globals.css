@import "katex/dist/katex.min.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

body {
  background:
    radial-gradient(circle at 12% 10%, rgba(196, 55, 55, 0.14), transparent 34%),
    radial-gradient(circle at 88% 6%, rgba(230, 199, 90, 0.12), transparent 30%),
    #151516;
  @apply text-zinc-100 antialiased;
}

a {
  @apply text-gold-400 transition-colors;
}

a:hover {
  @apply text-gold-500;
}

.button-link {
  @apply inline-flex min-h-[44px] items-center rounded-md border border-gold-600/60 bg-charcoal-900/80 px-5 py-3 text-sm font-medium text-gold-400 no-underline backdrop-blur;
}

.button-link-primary {
  @apply border-red-600 bg-red-700/30 text-zinc-50 hover:bg-red-700/50;
}

/* ── Prose base ───────────────────────────────────────────── */

.prose {
  @apply prose-invert max-w-none prose-strong:text-zinc-100 prose-a:text-gold-400;
  margin-left: auto;
  margin-right: auto;
}

.prose mark {
  @apply rounded bg-gold-500/25 px-1 text-gold-400;
}

/* ── Headings h1 – h6 ────────────────────────────────────── */

.heading-1 {
  @apply mt-10 mb-4 text-3xl font-bold leading-tight text-zinc-50 md:text-4xl;
}

.heading-2 {
  @apply mt-8 mb-4 border-b border-charcoal-800 pb-2 text-2xl font-semibold leading-snug text-gold-400 md:mt-12 md:text-3xl;
}

.heading-3 {
  @apply mt-8 mb-3 text-2xl font-semibold text-zinc-100 md:text-3xl;
}

.heading-4 {
  @apply mt-6 mb-2 text-xl font-semibold text-zinc-200;
}

.heading-5 {
  @apply mt-5 mb-2 text-base font-semibold uppercase tracking-wide text-gold-500;
}

.heading-6 {
  @apply mt-4 mb-1 text-sm font-medium uppercase tracking-wider text-zinc-400;
}

/* ── Paragraphs ───────────────────────────────────────────── */

.para {
  @apply mb-5 text-lg leading-relaxed text-zinc-200 md:text-xl;
}

/* ── Lists ─────────────────────────────────────────────── */

.list-disc-custom {
  @apply mb-6 mt-2 space-y-2 pl-6 text-lg text-zinc-200 md:text-xl;
}

.list-disc-custom li {
  @apply pl-1;
}

.list-disc-custom li::marker {
  @apply text-gold-500;
}

.list-decimal-custom {
  @apply mb-6 mt-2 list-decimal space-y-2 pl-6 text-lg text-zinc-200 md:text-xl;
}

.list-decimal-custom li {
  @apply pl-1;
}

.list-decimal-custom li::marker {
  @apply text-gold-500;
}

/* ── Section dividers (hr) ────────────────────────────────── */

.section-divider {
  @apply my-10 border-t border-charcoal-800;
}

/* ── Anchor links from rehype-autolink ────────────────────── */

.anchor-link {
  @apply ml-2 inline-block px-2 py-1 text-zinc-600 no-underline transition-colors hover:text-gold-400;
}

/* ── Hero ──────────────────────────────────────────────── */

.hero-shell {
  @apply relative overflow-hidden rounded-2xl border border-charcoal-800 shadow-2xl shadow-black/40;
}

.hero-overlay {
  @apply absolute inset-0 bg-gradient-to-tr from-black/70 via-charcoal-950/50 to-transparent;
}

.hero-content {
  @apply absolute bottom-0 left-0 right-0 space-y-3 p-4 sm:p-6 md:space-y-4 md:p-10;
}

.hero-kicker {
  @apply inline-flex rounded-full border border-gold-500/50 bg-charcoal-900/75 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-400;
}

.hero-title {
  @apply max-w-3xl text-3xl font-semibold leading-tight text-zinc-50 md:text-5xl lg:text-6xl;
}

.hero-description {
  @apply max-w-2xl text-lg leading-relaxed text-zinc-200 md:text-xl;
}

/* ── Content card ──────────────────────────────────────── */

.content-shell {
  @apply rounded-2xl border border-zinc-700 bg-charcoal-900 p-4 shadow-2xl shadow-black/80 backdrop-blur sm:p-6 md:p-10;
}

.content-shell > .heading-1:first-of-type {
  @apply sr-only;
}

.content-image {
  @apply my-6 rounded-xl border border-charcoal-800;
}

/* ── Safe readability tweaks ───────────────────────────── */

.prose p {
  margin-bottom: 1.25rem;
}

.prose {
  max-width: none;
}
