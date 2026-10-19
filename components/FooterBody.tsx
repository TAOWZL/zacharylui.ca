"use client";

import { usePathname } from "next/navigation";
import { isLaneZPath } from "@/lib/laneZ";

const linkClass = "text-zinc-300 visited:text-zinc-300 no-underline hover:text-cream-50";

const DEFAULT_LINKS: [string, string][] = [
  ["/acupuncture", "Acupuncture"],
  ["/qigong", "Qigong / Neigong"],
  ["/reiki", "Reiki"],
  ["/ritual", "Ritual"],
  ["/divination", "Divination Coaching"],
  ["/services", "Services & Fees"],
  ["/writing", "Writing"],
  ["/education", "Teaching"],
  ["/about", "About"],
  ["/press", "Press"]
];

const LANE_Z_LINKS: [string, string][] = [
  ["/free-index", "The Free Index"],
  ["https://buy.stripe.com/3cI8wObD81C38vkg9b3Nm0w", "The Secret Menu"],
  ["/divination", "Divination Coaching"],
  ["https://wujixuan.janeapp.com/#/discipline/2/treatment/5", "Distant Reiki"],
  ["/courses/moxibustion", "Moxibustion Workshop"],
  ["/ritual", "Ritual"]
];

export function FooterNav() {
  const laneZ = isLaneZPath(usePathname() ?? "");
  const links = laneZ ? LANE_Z_LINKS : DEFAULT_LINKS;
  return (
    <nav aria-label="Footer" className="space-y-2">
      <p className="font-semibold text-zinc-100">{laneZ ? "Magick" : "Practice"}</p>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
        {links.map(([href, label]) => (
          <li key={href}>
            <a href={href} className={linkClass}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function FooterDisclaimer() {
  const laneZ = isLaneZPath(usePathname() ?? "");
  if (laneZ) {
    return (
      <p className="mx-auto mt-8 max-w-3xl text-xs leading-relaxed text-zinc-400">
        This is education and energy practice, not medical treatment or diagnosis. Nothing on this site is a substitute for medical, mental health, legal, or professional advice.
      </p>
    );
  }
  return (
    <p className="mx-auto mt-8 max-w-3xl text-xs leading-relaxed text-zinc-400">
      Acupuncture is a regulated health service in Ontario, provided by Zachary Lui, Registered Acupuncturist (R.Ac), under the{" "}
      <a
        href="https://www.ctcmpao.on.ca/publicregistersrc/"
        rel="noopener"
        className="text-zinc-300 visited:text-zinc-300 underline hover:text-cream-50"
      >
        College of Traditional Chinese Medicine Practitioners and Acupuncturists of Ontario
      </a>
      . Reiki, Qigong and Neigong instruction, Divination Coaching, and Ritual work are offered separately and are not regulated healthcare services in Ontario. Nothing on this site is a substitute for medical, mental health, legal, or professional advice.
    </p>
  );
}
