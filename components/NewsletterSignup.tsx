'use client';

import Script from 'next/script';

export default function NewsletterSignup() {
  return (
    <section className="my-12 rounded-md border border-gold/20 bg-charcoal/40 p-6">
      <h3 className="mb-2 text-xl font-bold">Emails from Zachary Lui</h3>
      <p className="mb-4 text-sm opacity-80">
        On Chinese medicine as magick. Unsubscribe any time.
      </p>
      <Script
        src="https://eomail5.com/form/bc7c4ff0-4db4-11f1-9e8f-c1b8e3b23abc.js"
        data-form="bc7c4ff0-4db4-11f1-9e8f-c1b8e3b23abc"
        strategy="afterInteractive"
        async
      />
    </section>
  );
}
