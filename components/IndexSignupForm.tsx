"use client";

import { useEffect, useState } from "react";

// Posts straight to Kit form 9434628 ("The Secret Menu Index"). Single opt-in:
// Kit redirects to /secret-menu on submit and sends the delivery email.
const KIT_FORM_ACTION = "https://app.kit.com/forms/9434628/subscriptions";

// Source tracking. The INDEX auto-replies in Meta Business Suite link here with
// ?utm_campaign=index-comment / index-dm / index-faq. That value is written to
// the Kit custom field "Index Source" (key index_source, id 1446866) so each
// signup records which path it came through. No utm_campaign means "site".
function readSource(): string {
  try {
    const raw = new URLSearchParams(window.location.search).get("utm_campaign");
    const clean = (raw || "").toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 60);
    return clean || "site";
  } catch {
    return "site";
  }
}

export default function IndexSignupForm({ id }: { id: string }) {
  const [source, setSource] = useState("site");
  const [referrer, setReferrer] = useState("");

  useEffect(() => {
    setSource(readSource());
    try {
      setReferrer(window.location.href);
    } catch {
      /* leave empty */
    }
  }, []);

  return (
    <form
      action={KIT_FORM_ACTION}
      method="post"
      className="flex flex-wrap gap-3 rounded-lg border border-charcoal-800 bg-charcoal-950/80 p-4 sm:p-5"
    >
      <input type="hidden" name="fields[index_source]" value={source} />
      <input type="hidden" name="referrer" value={referrer} />
      <label htmlFor={`${id}-name`} className="sr-only">First name</label>
      <input
        id={`${id}-name`}
        name="fields[first_name]"
        type="text"
        required
        autoComplete="given-name"
        placeholder="First name"
        className="w-full min-w-0 flex-[1_1_11rem] rounded-md border border-charcoal-800 bg-zinc-950 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-400 focus:border-cinnabar-400"
      />
      <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
      <input
        id={`${id}-email`}
        name="email_address"
        type="email"
        required
        autoComplete="email"
        placeholder="Email"
        className="w-full min-w-0 flex-[1_1_11rem] rounded-md border border-charcoal-800 bg-zinc-950 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-400 focus:border-cinnabar-400"
      />
      <button type="submit" className="btn-primary max-w-full flex-[1_1_auto]">
        Send me the free Index
      </button>
    </form>
  );
}
