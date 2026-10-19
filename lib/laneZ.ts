// Pages that Lane Z (@thezacharylui) traffic lands on: the Secret Menu,
// the herbal magick courses, the serialized book and readings (/divination,
// where the BOOK keyword DM lands). These pages carry no
// clinic name, address, phone, R.Ac title or acupuncture link.
export const LANE_Z_PREFIXES = ["/free-index", "/secret-menu", "/courses", "/writing", "/about-this-book", "/divination", "/ritual", "/chinese-medicine-is-75-years-old", "/cm-75-years", "/eight-of-nine", "/your-clinic-runs-eight-of-nine", "/terms", "/course-terms"];

export function isLaneZPath(pathname: string): boolean {
  // The homepage is the online front door, so it follows the Lane Z rules too.
  if (pathname === "/" || pathname === "") return true;
  return LANE_Z_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(prefix + "/"));
}
