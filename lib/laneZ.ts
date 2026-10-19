// Pages that Lane Z (@thezacharylui) traffic lands on: the Secret Menu,
// the herbal magick courses and the serialized book. These pages carry no
// clinic name, address, phone, R.Ac title or acupuncture link.
export const LANE_Z_PREFIXES = ["/free-index", "/secret-menu", "/courses", "/writing", "/about-this-book"];

export function isLaneZPath(pathname: string): boolean {
  // The homepage is the online front door, so it follows the Lane Z rules too.
  if (pathname === "/" || pathname === "") return true;
  return LANE_Z_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(prefix + "/"));
}
