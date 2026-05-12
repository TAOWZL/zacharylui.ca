'use client';

import Script from 'next/script';

export default function NewsletterSignup() {
  return (
    <section className="my-12 rounded-md border border-gold/20 bg-charcoal/40 p-6">
      <h3 className="mb-2 text-xl font-bold">Get the next chapter when it drops</h3>
      <p className="mb-4 text-sm opacity-80">
        New chapters of <em>Magick Is Chinese Medicine</em> serialized monthly. No spam, just the next chapter.
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
