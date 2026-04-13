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

## 6) Images

### Hero images

Each page can display a hero banner at the top. Set the `cover` frontmatter key to point to an image:

```yaml
---
cover: /images/hero-anxiety.png
---
```

Hero images are stored in `public/images/`. Current hero images:

| File | Page | Format |
|------|------|--------|
| `hero-anxiety.png` | Acupuncture / Anxiety | PNG photo (AI-generated) |
| `hero-main.svg` | Home | SVG abstract |
| `hero-officiant.svg` | Marriage Officiant | SVG abstract |
| `hero-writing.svg` | Writing | SVG abstract |

### Replacing a hero image

1. Place your new image in `public/images/` (PNG, JPG, or SVG).
2. Update the `cover` value in the page's frontmatter in `docs/` if the filename changed.
3. Push to `main` — GitHub Actions will rebuild and deploy automatically.

For best results with photos:
- Use a **wide aspect ratio** (at least 16:9, ideally 21:9 panoramic).
- Keep the main subject **vertically centered** — the hero crops from the bottom on smaller screens.
- The hero displays at roughly 288px tall (mobile) to 448px tall (desktop) with `object-cover object-top`, so top-heavy compositions work best.

### Content images

Images used inside markdown body text can go in either location:

- **`public/images/`** — reference as `/images/your-image.png` in markdown.
- **`docs/`** (alongside markdown) — the post-build script copies non-markdown files from `docs/` to `out/`, so relative paths like `./photo.jpg` or Obsidian embeds `![[photo.jpg]]` will work.

### AI-generated images

AI-generated images depicting real people require written consent. See `PERMISSIONS.md` for the current consent record. Always update that file when adding new AI-generated likenesses.

## 7) Colors and theme

- Tailwind tokens are in `tailwind.config.ts`.
- Main global styles are in `app/globals.css`.
- Palette used:
  - charcoal background
  - gold accents
  - red CTA accents

## 8) Navigation and layout

- Global nav is managed in `site.config.ts`.
- Shared layout is in `app/layout.tsx`.
- Markdown renderer is in `components/MarkdownPage.tsx`.

## 9) Deployment flow

- Workflow file: `.github/workflows/deploy.yml`.
- Trigger: pushes to `main` affecting content, images, app, or config files.
- Build: `npm ci` then `npm run build`.
- Output folder: `out/`.
- Published branch: `gh-pages`.
- Legacy backup branch: `gh-pages-old`.

## 10) Preserve old gh-pages branch

One-time backup:

```bash
git fetch origin gh-pages
git checkout -b gh-pages-old origin/gh-pages
git push -u origin gh-pages-old
git checkout main
```

## 11) Rollback options

- Repoint GitHub Pages to a prior commit on `gh-pages`, or
- Restore from `gh-pages-old`.

## 12) Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production build:

```bash
npm run build
```

## 13) Useful file map

- Content: `docs/`
- Images: `public/images/`
- Routing and metadata: `app/`
- Markdown parsing: `lib/content.ts`
- Renderer: `components/MarkdownPage.tsx`
- Post-build SEO files: `scripts/postbuild.mjs`
- Permissions log: `PERMISSIONS.md`

## 14) OFM support and known limitations

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
