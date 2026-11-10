import type { Metadata } from "next";
import RedirectTo from "@/components/RedirectTo";

const MEMBERS_AREA = "https://6a86-zac.systeme.io/school/course/secret-menu";

export const metadata: Metadata = {
  title: "Secret Menu members' area",
  robots: { index: false, follow: false },
  alternates: { canonical: "/members" }
};

export default function MembersPage() {
  return <RedirectTo href={MEMBERS_AREA} label="Open the members' area" />;
}
