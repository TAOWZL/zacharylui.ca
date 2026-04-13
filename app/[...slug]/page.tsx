import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownPage } from "@/components/MarkdownPage";
import { getAllDocs, getDocBySlug, inferDescription } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  const docs = getAllDocs().filter((doc) => doc.slug !== "");
  const params: { slug: string[] }[] = [];
  const seen = new Set<string>();

  for (const doc of docs) {
    if (!seen.has(doc.slug)) {
      params.push({ slug: doc.slug.split("/") });
      seen.add(doc.slug);
    }

    const aliases = Array.isArray(doc.data.aliases)
      ? doc.data.aliases
      : doc.data.aliases
        ? [doc.data.aliases]
        : [];
    for (const alias of aliases) {
      const aliasSlug = alias
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      if (!aliasSlug || seen.has(aliasSlug)) continue;
      params.push({ slug: aliasSlug.split("/") });
      seen.add(aliasSlug);
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: slugParts } = await params;
  const slug = slugParts.join("/");
  const doc = getDocBySlug(slug);
  if (!doc) return {};

  const title = doc.data.title ?? "Zachary Lui";
  const description = inferDescription(doc);
  const image = doc.data.image ?? doc.data.cover;

  return {
    title,
    description,
    alternates: {
      canonical: `/${doc.slug}`
    },
    openGraph: {
      title,
      description,
      url: `/${doc.slug}`,
      images: image ? [{ url: image }] : undefined
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined
    }
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug: slugParts } = await params;
  const slug = slugParts.join("/");
  const doc = getDocBySlug(slug);
  if (!doc) notFound();
  return <MarkdownPage doc={doc} />;
}
