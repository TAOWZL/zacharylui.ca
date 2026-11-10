import type { Metadata } from "next";
import RedirectTo from "@/components/RedirectTo";

const ORDER_FORM = "https://6a86-zac.systeme.io/join-secret-menu";

export const metadata: Metadata = {
  title: "Join The Secret Menu",
  robots: { index: false, follow: true },
  alternates: { canonical: "/join" }
};

export default function JoinPage() {
  return <RedirectTo href={ORDER_FORM} label="Join The Secret Menu" />;
}
