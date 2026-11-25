import type { Metadata } from "next";
import RedirectTo from "@/components/RedirectTo";

// Retired URL. Forwards to the one acupuncture page and stays out of search.
export const metadata: Metadata = {
  title: "Acupuncture",
  robots: { index: false, follow: true },
  alternates: { canonical: "/acupuncture" }
};

export default function Page() {
  return <RedirectTo href="/acupuncture/" label="Acupuncture" />;
}
