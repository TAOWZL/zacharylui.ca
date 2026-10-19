"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/site.config";
import { isLaneZPath } from "@/lib/laneZ";

// On Lane Z pages the top menu stays inside Lane Z: no links to the clinic
// pages (About, Services, Press carry the clinic and acupuncture details).
const LANE_Z_NAV = [
  { label: "Free Index", href: "/free-index" },
  { label: "Readings", href: "/divination" },
  { label: "Workshop", href: "/courses/moxibustion" }
];

const linkClass =
  "rounded-md border border-charcoal-800 bg-charcoal-950/70 px-3 py-1.5 text-sm text-cream-200 visited:text-cream-200 no-underline hover:border-cinnabar-500 hover:text-cream-50";

export default function HeaderNav() {
  const pathname = usePathname() ?? "";
  // The signup page keeps one job: no menu, so the form sits above the fold.
  if (pathname === "/free-index" || pathname === "/free-index/") return null;
  const laneZ = isLaneZPath(pathname);
  const items = laneZ
    ? LANE_Z_NAV
    : siteConfig.nav.map((item) => ({ label: item.label, href: item.slug ? `/${item.slug}` : "/" }));
  return (
    <nav className="flex flex-wrap items-center gap-2">
      {items.map((item) => (
        <a key={item.href} href={item.href} className={linkClass}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export function HeaderHomeLink({ className, children }: { className: string; children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  // The signup page keeps one job, so its logo goes nowhere else.
  const href = pathname.startsWith("/free-index") ? "/free-index" : isLaneZPath(pathname) ? "/" : "/in-person";
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
