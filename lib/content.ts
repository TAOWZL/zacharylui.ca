import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const docsRoot = path.join(process.cwd(), "docs");

export type Frontmatter = {
  title?: string;
  description?: string;
  aliases?: string[] | string;
  permalink?: string;
  publish?: boolean;
  image?: string;
  cover?: string;
};

export type Doc = {
  slug: string;
  sourcePath: string;
  rawContent: string;
  content: string;
  data: Frontmatter;
};

type ParsedWikilink = {
  target: string;
  heading?: string;
  block?: string;
  label?: string;
};

function listMarkdownFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function normalizeAliases(value: Frontmatter["aliases"]): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function filePathToSlug(filePath: string): string {
  const rel = path.relative(docsRoot, filePath).replace(/\\/g, "/");
  if (rel === "index.md") return "";
  return rel.replace(/\.md$/, "");
}

function noteNameFromSlug(slug: string): string {
  const finalPart = slug.split("/").at(-1) ?? slug;
  return decodeURIComponent(finalPart).replace(/-/g, " ").toLowerCase();
}

function stripMkdocsAttrLists(markdown: string): string {
  return markdown.replace(/\)\s*\{[^}]+\}/g, ")");
}

function stripObsidianComments(markdown: string): string {
  return markdown.replace(/%%[\s\S]*?%%/g, "");
}

function convertHighlights(markdown: string): string {
  return markdown.replace(/==([^=\n][\s\S]*?[^=\n])==/g, "<mark>$1</mark>");
}

function convertCallouts(markdown: string): string {
  return markdown.replace(/^> \[!([a-zA-Z0-9_-]+)\](.*)$/gm, (_, type: string, title: string) => {
    const label = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
    const titleText = title.trim();
    if (!titleText) return `> **${label}:**`;
    return `> **${label}:** ${titleText}`;
  });
}

function splitHash(target: string): { pathPart: string; hashPart: string } {
  const hashIndex = target.indexOf("#");
  if (hashIndex === -1) return { pathPart: target, hashPart: "" };
  return {
    pathPart: target.slice(0, hashIndex),
    hashPart: target.slice(hashIndex)
  };
}

function cleanLinkTarget(target: string): string {
  const trimmed = target.trim();
  return decodeURIComponent(trimmed).replace(/\.md$/i, "").replace(/^\//, "");
}

function isAssetLink(target: string): boolean {
  return /\.(png|jpe?g|gif|webp|svg|pdf|mp3|ogg|wav|m4a|mp4|webm)$/i.test(target);
}

function normalizeAliasToSlug(alias: string): string {
  return decodeURIComponent(alias)
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function parseWikiLink(raw: string): ParsedWikilink {
  const [targetPart, labelPart] = raw.split("|");
  const targetRaw = (targetPart ?? "").trim();
  const label = labelPart?.trim();

  const blockMatch = targetRaw.match(/#\^([^#]+)$/);
  if (blockMatch) {
    const target = targetRaw.replace(/#\^[^#]+$/, "");
    return { target, block: blockMatch[1], label };
  }

  const headingMatch = targetRaw.match(/#(.+)$/);
  if (headingMatch) {
    const target = targetRaw.replace(/#.+$/, "");
    return { target, heading: headingMatch[1], label };
  }

  return { target: targetRaw, label };
}

function headingToHash(heading: string): string {
  return heading
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function getAllDocs(): Doc[] {
  const mdFiles = listMarkdownFiles(docsRoot);
  const docs: Doc[] = mdFiles.map((filePath) => {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const slug = (data.permalink as string | undefined)?.replace(/^\//, "") ?? filePathToSlug(filePath);
    return {
      slug,
      sourcePath: filePath,
      rawContent: raw,
      content: stripMkdocsAttrLists(content),
      data: data as Frontmatter
    };
  });

  return docs.filter((doc) => doc.data.publish !== false);
}

export function getDocBySlug(slug: string): Doc | undefined {
  const normalized = slug.replace(/^\//, "");
  const docs = getAllDocs();
  const direct = docs.find((doc) => doc.slug === normalized);
  if (direct) return direct;

  const normalizedAlias = normalizeAliasToSlug(normalized);
  return docs.find((doc) =>
    normalizeAliases(doc.data.aliases).some((alias) => normalizeAliasToSlug(alias) === normalizedAlias)
  );
}

function buildLookupMap(docs: Doc[]): Map<string, string> {
  const lookup = new Map<string, string>();
  for (const doc of docs) {
    lookup.set(noteNameFromSlug(doc.slug), doc.slug);
    lookup.set(doc.slug.toLowerCase(), doc.slug);
    for (const alias of normalizeAliases(doc.data.aliases)) {
      lookup.set(alias.toLowerCase(), doc.slug);
    }
  }
  return lookup;
}

function resolveLinkTarget(target: string, lookup: Map<string, string>): string {
  if (
    !target ||
    target.startsWith("http") ||
    target.startsWith("mailto:") ||
    target.startsWith("tel:") ||
    target.startsWith("#")
  ) {
    return target;
  }

  const { pathPart, hashPart } = splitHash(target);
  const cleaned = cleanLinkTarget(pathPart);
  const byExact = lookup.get(cleaned.toLowerCase());
  if (byExact !== undefined) return `/${byExact}${hashPart}`;
  const byNote = lookup.get(cleaned.split("/").at(-1)?.replace(/-/g, " ").toLowerCase() ?? "");
  if (byNote !== undefined) return `/${byNote}${hashPart}`;
  return `/${cleaned}${hashPart}`;
}

function convertWikiLinks(markdown: string, lookup: Map<string, string>): string {
  return markdown.replace(/(!?)\[\[([^[\]]+)\]\]/g, (_, embedPrefix: string, body: string) => {
    const parsed = parseWikiLink(body);
    const targetRaw = parsed.target;
    const label = (parsed.label ?? targetRaw).trim();
    const hashPart = parsed.heading ? `#${headingToHash(parsed.heading)}` : parsed.block ? `#${parsed.block}` : "";
    const resolved = resolveLinkTarget(`${targetRaw}${hashPart}`, lookup);

    if (embedPrefix === "!") {
      if (!isAssetLink(targetRaw)) {
        return `[${label}](${resolved})`;
      }
      return `![${label}](${resolved})`;
    }
    return `[${label}](${resolved})`;
  });
}

function normalizeMarkdownLinks(markdown: string, lookup: Map<string, string>): string {
  return markdown.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label: string, target: string) => {
    const resolved = resolveLinkTarget(target, lookup);
    return `[${label}](${resolved})`;
  });
}

export function renderableMarkdown(doc: Doc): string {
  const docs = getAllDocs();
  const lookup = buildLookupMap(docs);
  const ofmReady = convertCallouts(convertHighlights(stripObsidianComments(doc.content)));
  const withWiki = convertWikiLinks(ofmReady, lookup);
  return normalizeMarkdownLinks(withWiki, lookup);
}

export function inferDescription(doc: Doc): string {
  if (doc.data.description) return doc.data.description;
  const firstParagraph = doc.content
    .split("\n\n")
    .map((segment) => segment.trim())
    .find((segment) => segment && !segment.startsWith("#"));
  if (!firstParagraph) return "Zachary Lui";
  return firstParagraph.replace(/\n/g, " ").slice(0, 160);
}
