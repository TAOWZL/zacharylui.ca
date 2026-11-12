"use client";

import { useEffect } from "react";

// Carries the YouTube tag (?video=ID&src=yt) into the Stripe link as client_reference_id,
// so each payment in Stripe shows which video sent it. Stripe allows letters, numbers, - and _.
export default function StripeRef() {
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const clean = (s: string | null, n: number) => (s || "").replace(/[^A-Za-z0-9_-]/g, "").slice(0, n);
    const video = clean(p.get("video"), 60);
    if (!video) return;
    const src = clean(p.get("src"), 20);
    const ref = src ? `${src}_${video}` : video;
    document.querySelectorAll<HTMLAnchorElement>('a[href^="https://buy.stripe.com/"]').forEach((a) => {
      const u = new URL(a.href);
      u.searchParams.set("client_reference_id", ref);
      a.href = u.toString();
    });
  }, []);
  return null;
}
