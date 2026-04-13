# Editing Guide

This site is built with Next.js + React + Tailwind and published to `gh-pages` from GitHub Actions.

## 1) Edit copy

- Edit markdown files in `docs/`.
- Push changes to `main`.
- GitHub Actions rebuilds and deploys the site automatically.

## 2) Add a new page

1. Create `docs/your-page.md`.
2. Add frontmatter:

```yaml
---
title: Your Page Title
description: One sentence summary for SEO.
aliases:
  - Optional alternate title
permalink: your-page
publish: true
---
```

3. Add a nav item in `site.config.ts` if needed.

## 3) SEO and metadata

Supported frontmatter keys:

- `title`: page title.
- `description`: meta description and social description.
- `image` or `cover`: Open Graph/Twitter image.
- `permalink`: URL path override.
- `publish: false`: hides page from generated site.

Fallbacks:

- Title falls back to `Zachary Lui`.
- Description falls back to first non-heading paragraph.

## 4) Internal links

Supported formats:

- Markdown links: `[Label](page.md)` or `[Label](/page)`.
- Obsidian-style wikilinks: `[[Page]]`, `[[Page|Label]]`.
- Heading links: `[[Page#Heading]]` and block-style links `[[Page#^block-id]]`.
- Embed-style syntax `![[...]]` is converted as follows:
  - image/file targets become image links when possible
  - note embeds are rendered as links (v1 behavior)

## 5) Obsidian properties and notes

- The parser reads YAML frontmatter (Obsidian Properties).
- `aliases` are used as alternate link targets.
- `permalink` overrides path slug.
- Keep note names URL-safe for best results.
- `publish: false` excludes a note from the static build.

Official references:

- [Obsidian Internal links](https://github.com/obsidianmd/obsidian-help/blob/master/en/Linking%20notes%20and%20files/Internal%20links.md)
- [Obsidian Embed files](https://github.com/obsidianmd/obsidian-help/blob/master/en/Linking%20notes%20and%20files/Embed%20files.md)
- [Obsidian Properties](https://github.com/obsidianmd/obsidian-help/blob/master/en/Editing%20and%20formatting/Properties.md)
- [Obsidian Flavored Markdown](https://github.com/obsidianmd/obsidian-help/blob/master/en/Editing%20and%20formatting/Obsidian%20Flavored%20Markdown.md)

## 6) Colors and theme

- Tailwind tokens are in `tailwind.config.ts`.
- Main global styles are in `app/globals.css`.
- Palette used:
  - charcoal background
  - gold accents
  - red CTA accents

## 7) Navigation and layout

- Global nav is managed in `site.config.ts`.
- Shared layout is in `app/layout.tsx`.
- Markdown renderer is in `components/MarkdownPage.tsx`.

## 8) Deployment flow

- Workflow file: `.github/workflows/deploy.yml`.
- Trigger: pushes to `main` affecting content/app/config files.
- Build: `npm ci` then `npm run build`.
- Output folder: `out/`.
- Published branch: `gh-pages`.
- Legacy backup branch: `gh-pages-old`.

## 9) Preserve old gh-pages branch

One-time backup:

```bash
git fetch origin gh-pages
git checkout -b gh-pages-old origin/gh-pages
git push -u origin gh-pages-old
git checkout main
```

## 10) Rollback options

- Repoint GitHub Pages to a prior commit on `gh-pages`, or
- Restore from `gh-pages-old`.

## 11) Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production build:

```bash
npm run build
```

## 12) Useful file map

- Content: `docs/`
- Routing and metadata: `app/`
- Markdown parsing: `lib/content.ts`
- Renderer: `components/MarkdownPage.tsx`
- Post-build SEO files: `scripts/postbuild.mjs`

## 13) OFM support and known limitations

Implemented:

- GFM tables/task lists/strikethrough.
- Obsidian comments `%%...%%` stripped in output.
- Obsidian highlights `==text==` mapped to `<mark>`.
- Obsidian callout headers (`> [!note]`) converted to emphasized blockquote labels.
- Math rendering via `remark-math` and `rehype-katex`.

Current limits (v1):

- Callouts are simplified stylistically (not full Obsidian callout UI).
- Note transclusion (`![[Note]]`) is link-only, not inline rendered note content.
- Dataview/community-plugin syntax is not processed.
- Hover previews and editor-only block search UX are not replicated on web.
