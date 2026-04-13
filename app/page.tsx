import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocBySlug } from "@/lib/content";
import { MarkdownPage } from "@/components/MarkdownPage";
import { inferDescription } from "@/lib/content";

export function generateMetadata(): Metadata {
  const doc = getDocBySlug("");
  if (!doc) return {};
  const title = doc.data.title ?? "Zachary Lui";
  const description = inferDescription(doc);
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/"
    }
  };
}

export default function HomePage() {
  const doc = getDocBySlug("");
  if (!doc) notFound();
  return <MarkdownPage doc={doc} />;
}
