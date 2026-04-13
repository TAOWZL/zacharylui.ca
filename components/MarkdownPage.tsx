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
  const markdown = renderableMarkdown(doc);
  const title = doc.data.title ?? "Zachary Lui";
  const description = doc.data.description;
  const cover = doc.data.cover ?? doc.data.image;

  return (
    <section className="space-y-8">
      <article className="hero-shell">
        {cover ? (
          <img
            src={cover}
            alt={title}
            className="h-72 w-full object-cover md:h-96"
          />
        ) : (
          <div className="h-72 w-full bg-charcoal-900 md:h-96" />
        )}
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-kicker">Zachary Lui</p>
          <h1 className="hero-title">{title}</h1>
          {description ? <p className="hero-description">{description}</p> : null}
        </div>
      </article>

      <article className="content-shell prose prose-lg">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[
            rehypeSlug,
            rehypeKatex,
            [rehypeAutolinkHeadings, { behavior: "append", properties: { className: ["anchor-link"] } }]
          ]}
          components={{
            h1: ({ children, id }) => (
              <h1 id={id} className="heading-1">{children}</h1>
            ),
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
            p: ({ children }) => (
              <p className="para">{children}</p>
            ),
            hr: () => <hr className="section-divider" />,
            ul: ({ children }) => (
              <ul className="list-disc-custom">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal-custom">{children}</ol>
            ),
            a: ({ href, children }) => {
              const rawText = Array.isArray(children)
                ? children.map((child) => (typeof child === "string" ? child : "")).join(" ")
                : typeof children === "string"
                  ? children
                  : "";
              const classNames = /(book|view|learn more)/i.test(rawText) ? "button-link" : undefined;
              return (
                <a
                  href={href}
                  className={classNames}
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
          {markdown}
        </ReactMarkdown>
      </article>
    </section>
  );
}
