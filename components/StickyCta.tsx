"use client";

import { usePathname } from "next/navigation";

// Phone-only bar that keeps the one action in reach while people read a long sales page.
const ACTIONS: Record<string, { label: string; href: string }> = {
  "/membership": { label: "Join The Secret Menu", href: "/join" },
  "/divination": { label: "Book a reading", href: "https://buy.stripe.com/3cI6oGdLggwXcLA2il3Nm0B" }
};

export default function StickyCta() {
  const pathname = (usePathname() ?? "").replace(/\/$/, "");
  const action = ACTIONS[pathname];
  if (!action) return null;
  return (
    <>
      {/* Spacer so the bar never covers the end of the footer. */}
      <div aria-hidden="true" className="h-24 sm:hidden" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal-800 bg-charcoal-950/95 px-4 py-3 backdrop-blur sm:hidden">
        <a href={action.href} className="btn-buy flex w-full justify-center self-auto">
          {action.label} →
        </a>
      </div>
    </>
  );
}
