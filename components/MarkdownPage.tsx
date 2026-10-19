import NewsletterSignup from './NewsletterSignup';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import type { Doc } from "@/lib/content";
import { renderableMarkdown } from "@/lib/content";
type Props = {
  doc: Doc;
};
export function MarkdownPage({ doc }: Props) {
  const rawMarkdown = renderableMarkdown(doc);
  const title = doc.data.title ?? "Zachary Lui";
  // The page header shows the plain name; the SEO suffix after " | " stays in <title>.
  const shortTitle = title.split(" | ")[0];
  const description = doc.data.description;
  const cover = doc.data.cover ?? doc.data.image;
  const hasHero = Boolean(cover);
  const showNewsletter = doc.data.showNewsletter === true;

  // react-markdown strips raw HTML, so a <details> block in the source never
  // reaches the page and its contents render as loose paragraphs. Lift the
  // block out and render it as a real element, re-parsing its body as markdown.
  const detailsMatch = rawMarkdown.match(
    /<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/i
  );
  const beforeDetails = detailsMatch
    ? rawMarkdown.slice(0, detailsMatch.index).trimEnd()
    : rawMarkdown;
  // Drop an opening "# Heading" that repeats the page title shown in the header.
  const norm = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  // When one contains the other, the longer one becomes the page title.
  const lead = beforeDetails.match(/^\s*#{1,2}\s+(.+)\n/);
  const overlaps =
    lead && (norm(lead[1]).includes(norm(shortTitle)) || norm(shortTitle).includes(norm(lead[1])));
  const displayTitle =
    lead && overlaps && lead[1].trim().length > shortTitle.length ? lead[1].trim() : shortTitle;
  const markdown = lead && overlaps ? beforeDetails.slice(lead[0].length) : beforeDetails;
  const detailsSummary = detailsMatch
    ? detailsMatch[1].replace(/<[^>]+>/g, "").trim()
    : null;
  const detailsBody = detailsMatch ? detailsMatch[2].trim() : null;

  // Any other raw HTML in the source is printed literally by react-markdown,
  // so convert the handful of inline tags the book uses into markdown.
  const inlineHtmlToMarkdown = (content: string) =>
    content
      .replace(/<\/?small>/gi, "")
      .replace(/<strong>([\s\S]*?)<\/strong>/gi, "**$1**")
      .replace(/<em>([\s\S]*?)<\/em>/gi, "*$1*")
      .replace(/<br\s*\/?>/gi, "\n");

  const renderMarkdown = (content: string) => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[
        rehypeSlug,
        rehypeKatex,
        [rehypeAutolinkHeadings, { behavior: "append", properties: { className: ["anchor-link"] } }]
      ]}
      components={{
            // The page header carries the one h1; headings written with "#" in the
            // markdown read as section headings.
            h1: ({ children, id }) => <h2 id={id} className="heading-2">{children}</h2>,
            h2: ({ children, id }) => (
              <h2 id={id} className="heading-2">{children}</h2>
            ),
            h3: ({ children, id }) => (
              <h3 id={id} className="heading-3">{children}</h3>
            ),
            h4: ({ children, id }) => (
              <h4 id={id} className="heading-4">{children}</h4>
            ),
            h5: ({ children, id }) => (
              <h5 id={id} className="heading-5">{children}</h5>
            ),
            h6: ({ children, id }) => (
              <h6 id={id} className="heading-6">{children}</h6>
            ),
            p: ({ children, node }) => {
              // A paragraph that is only a link is a call to action: render it as a button.
              const kids = (node?.children ?? []).filter(
                (c) => !(c.type === "text" && !String((c as { value?: string }).value ?? "").trim())
              );
              const only = kids.length === 1 ? (kids[0] as { type: string; tagName?: string; children?: { tagName?: string }[] }) : null;
              const isCta =
                only?.type === "element" &&
                (only.tagName === "a" ||
                  (only.tagName === "strong" && only.children?.length === 1 && only.children[0]?.tagName === "a"));
              return <p className={isCta ? "cta-row" : "para"}>{children}</p>;
            },
            hr: () => <hr className="section-divider" />,
            ul: ({ children }) => (
              <ul className="list-disc-custom">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal-custom">{children}</ol>
            ),
            a: ({ href, children }) => {
              return (
                <a
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noreferrer" : undefined}
                >
                  {children}
                </a>
              );
            },
            img: ({ src, alt }) => <img src={src ?? ""} alt={alt ?? ""} className="content-image" />
          }}
    >
      {inlineHtmlToMarkdown(content)}
    </ReactMarkdown>
  );

  return (
    <section className="page-column">
      <header className="page-header">
        <h1 className="display text-[2rem] leading-tight sm:text-5xl">{displayTitle}</h1>
        {description ? <p className="mt-4 text-lg leading-relaxed text-zinc-300">{description}</p> : null}
      </header>
      {hasHero ? <img src={cover} alt="" className="page-banner" /> : null}
      <article className="page-body prose">
        {renderMarkdown(markdown)}
      </article>
      {detailsBody ? (
        <article className="page-body prose mt-10 border-t border-charcoal-800 pt-6">
          <details className="reading-list">
            <summary>
              <strong>{detailsSummary}</strong>
            </summary>
            {renderMarkdown(detailsBody)}
          </details>
        </article>
      ) : null}
      {showNewsletter ? <NewsletterSignup /> : null}
    </section>
  );
}
