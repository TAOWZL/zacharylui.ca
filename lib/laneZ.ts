// The clinic pages are the exception. Every other path, including anything new and
// the 404 page, follows the Lane Z rules: no clinic navigation or footer, so a new page
// or a mistyped URL cannot cross the firewall by default. /terms and /course-terms name
// the seller in their body text because buyers need that.
const CLINIC_PREFIXES = [
  "/about",
  "/acupuncture",
  "/acupuncture-for-anxiety",
  "/education",
  "/in-person",
  "/marriage",
  "/officiant",
  "/press",
  "/projects",
  "/qigong",
  "/reiki",
  "/services",
  "/wedding-officiant"
];

export function isLaneZPath(pathname: string): boolean {
  // /about-this-book is the book's page, so /about matches on the exact path or a subpath only.
  return !CLINIC_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(prefix + "/"));
}
