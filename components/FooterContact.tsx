"use client";

import { usePathname } from "next/navigation";

const SPIRITUAL_PREFIXES = [
  "/wealth-deities",
  "/ritual",
  "/divination",
  "/reiki",
  "/qigong",
  "/money-block",
  "/officiant"
];

export default function FooterContact() {
  const pathname = usePathname() ?? "";
  const isSpiritual = SPIRITUAL_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + "/")
  );

  if (isSpiritual) {
    return (
      <div className="space-y-1">
        <p className="font-semibold text-zinc-100">Zachary Lui</p>
        <p>Daoist folk priest, Wu, and Tangmi practitioner</p>
        <p className="pt-3 text-xs text-zinc-500">
          Related:{" "}
          <a
            href="https://queencitycurio.ca"
            rel="noopener"
            className="text-zinc-400 visited:text-zinc-400 no-underline hover:text-gold-400"
          >
            Queen City Curio
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <p className="font-semibold text-zinc-100">Zachary Lui, R.Ac</p>
      <p>Wuji Xuan Life Wellness</p>
      <p>
        <a
          href="https://maps.google.com/?q=255+Broadview+Avenue+Toronto+ON"
          className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400"
        >
          255 Broadview Avenue, Toronto ON
        </a>
      </p>
      <p>
        <a href="tel:+14165955525" className="text-zinc-300 visited:text-zinc-300 no-underline hover:text-gold-400">
          416-595-5525
        </a>
      </p>
      <p className="pt-3 text-xs text-zinc-500">
        Related:{" "}
        <a
          href="https://queencitycurio.ca"
          rel="noopener"
          className="text-zinc-400 visited:text-zinc-400 no-underline hover:text-gold-400"
        >
          Queen City Curio
        </a>
      </p>
    </div>
  );
}
