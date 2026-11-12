"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/site.config";
import { isLaneZPath } from "@/lib/laneZ";

// On Lane Z pages the top menu stays inside Lane Z: no links to the clinic
// pages (About, Services, Press carry the clinic and acupuncture details).
const LANE_Z_NAV = [
  { label: "Free Index", short: "Index", href: "/free-index" },
  { label: "The Secret Menu", short: "Membership", href: "/membership" },
  { label: "One to One", short: "1-to-1", href: "/coaching" },
  { label: "Watch", short: "Watch", href: "/watch" },
  { label: "Writing", short: "Read", href: "/writing" }
];

const linkClass =
  "inline-flex min-h-[44px] items-center rounded-md border border-charcoal-800 bg-charcoal-950/70 px-2 py-1.5 text-[0.88rem] sm:px-3 sm:text-sm text-cream-200 visited:text-cream-200 no-underline hover:border-cinnabar-500 hover:text-cream-50";

export default function HeaderNav() {
  const pathname = usePathname() ?? "";
  const laneZ = isLaneZPath(pathname);
  const items: { label: string; short?: string; href: string }[] = laneZ
    ? LANE_Z_NAV
    : siteConfig.nav.map((item) => ({ label: item.label, href: item.slug ? `/${item.slug}` : "/" }));
  return (
    <nav aria-label="Main" className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      {items.map((item) => (
        <a key={item.href} href={item.href} className={linkClass}>
          {item.short ? (
            <>
              {/* Short labels keep the phone menu to one row. */}
              <span className="sm:hidden">{item.short}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </>
          ) : (
            item.label
          )}
        </a>
      ))}
    </nav>
  );
}

export function HeaderHomeLink({ className, children }: { className: string; children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const href = isLaneZPath(pathname) ? "/" : "/in-person";
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
