import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");
const docsDir = path.join(process.cwd(), "docs");
const baseUrl = "https://zacharylui.ca";

const pages = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.isFile() && entry.name === "index.html") {
      const rel = path.relative(outDir, full).replace(/\\/g, "/");
      const route = rel === "index.html" ? "/" : `/${rel.replace(/\/index\.html$/, "")}`;
      pages.push(route);
    }
  }
}

walk(outDir);

function copyDocAssets(sourceDir, targetDir) {
  if (!fs.existsSync(sourceDir)) return;
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const relPath = path.relative(docsDir, sourcePath);
    const targetPath = path.join(targetDir, relPath);

    if (entry.isDirectory()) {
      if (entry.name === "stylesheets") continue;
      copyDocAssets(sourcePath, targetDir);
      continue;
    }

    if (!entry.isFile()) continue;
    if (entry.name.endsWith(".md") || entry.name === "CNAME") continue;

    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.copyFileSync(sourcePath, targetPath);
  }
}

const urlset = pages
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>
`;

fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(
  path.join(outDir, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`,
  "utf8"
);

const cnamePath = path.join(docsDir, "CNAME");
if (fs.existsSync(cnamePath)) {
  fs.copyFileSync(cnamePath, path.join(outDir, "CNAME"));
}

copyDocAssets(docsDir, outDir);
