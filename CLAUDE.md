Project: zacharylui.ca, Jekyll static site on GitHub Pages. Maintainer is Zachary Lui, practicing across Acupuncture, Qigong/Neigong, Reiki, Ritual, and Divination Coaching. CLAUDE.md in repo root is authoritative. Read it first. Every rule there overrides anything in this brief.

Goal of this pass: structured upgrade across SEO infrastructure, trust signals, CTAs, IA, and brand consistency. Site sits ~8.2/10 average. Strongest at voice and CTCMPAO scope discipline (don't touch). Weakest at SEO infrastructure and CTAs.

Read CLAUDE.md first. Then read index.md, _includes/footer.html, and the head include (or _config.yml if head metadata lives there). List current site structure and any deviations from CLAUDE.md you notice. Pause for review before any edits.

Hard constraints from CLAUDE.md to respect throughout:
- Acupuncture is one of three doors, not the primary draw. Don't weight SEO toward it.
- R.Ac is the only authorized title. No "Professor," no "Specialist," no "Senior." Use "faculty" or "instructor" for teaching roles.
- No testimonials, including anonymized. Journalism quotes (Toronto Star, CBC, 640 Toronto re: Bill 88) are journalism and acceptable; patient quotes are not.
- No em dashes anywhere in site copy. Commas, colons, periods.
- CTCMPAO name only in footer disclaimer and on privacy page. Do not reintroduce in other body copy. JSON-LD sameAs to the public register is structured data not body copy, but pause and ask Zachary before adding.
- "TCM pattern assessment" not "diagnosis." Never "cure," "heal," or "treat" a specific condition.

1. SEO infrastructure (highest impact)
- JSON-LD on homepage: LocalBusiness plus HealthAndBeautyBusiness as appropriate. NAP is Wuji Xuan Life Wellness, 255 Broadview Avenue, Toronto ON, 416-595-5525. Geo coordinates, opening hours (ask if not in repo). Services array reflects all three doors, not acupuncture only. sameAs: queencitycurio.ca. Pause before adding CTCMPAO register link given the body-copy rule.
- Per-page unique meta titles and descriptions. Homepage current description is generic. Each modality page needs a description naming the modality, location, and intended audience.
- OG and Twitter card images at 1200×630. If no branded asset in /assets, propose a typographic version using existing site colors and pause for review.
- sitemap.xml, robots.txt, canonical tags on every page.
- Internal linking audit. Each modality page should link laterally to the other modalities and back to /services and /about.
- Local keyword integration balanced across all three doors, not acupuncture-stuffed. Candidates to weave where voice tolerates: "Riverdale acupuncture," "Toronto Qigong instructor," "Toronto Daoist priest," "Toronto Reiki sifu" (use "sifu" per CLAUDE.md convention, not "master"). One or two per page max.
- Image alt text audit.

2. Trust signals
- Move "practicing publicly since 2008" higher on homepage if not already prominent.
- On /about, surface Bill 88 advocacy higher. CLAUDE.md identifies it as the strongest political/regulatory credential.
- Consider a Bill 88 journalism attribution line on the homepage (Toronto Star / CBC / 640 Toronto Alan Carter Program). Test voice fit. If it reads marketing-y, skip.
- Insurance specifics under Clinical care: current copy says "Many Ontario extended health plans include coverage for Registered Acupuncturist services." Add direct-billing carriers ONLY if Jane is configured for direct billing. Verify with Zachary before adding.
- Add a "what to expect on a first visit" line under Clinical care, matching the warmth pattern Reiki and Qigong pages already use. Stay in "TCM pattern assessment" language. No condition lists.

3. CTAs
- Hero gets one primary CTA ("Book"). Move "Services & fees" to a secondary line, smaller treatment.
- Sticky bottom-bar Book + Call on mobile.
- Confirm all phone number references use tel: links.

4. Information architecture
- Verify second-door heading. CLAUDE.md describes it conceptually as "Practice to learn"; rendered homepage currently shows "Practice." Ask Zachary which is canonical before changing.
- Optional triage line near top of homepage. Test voice fit before committing. If used: "Pain or sleep? Clinical care. Want to train? Practice. Need ceremony? Ritual and Divination." Third door uses full name.

5. Brand consistency sweep
- Audit "registered acupuncture" lowercase usage in Clinical care against the Title Case rule.
- Sweep all meta descriptions, OG titles, page titles, footer, and CLAUDE.md against the Title Case rule.
- Em dash sweep across all site markdown and includes. Replace with commas, colons, or periods as appropriate. (CLAUDE.md itself can keep em dashes; rule is for site copy.)

Don't touch:
- Voice calibration by page. Clinical pages stay sober. Ritual and Divination stay full Vitimus voice. Reiki and Qigong stay accessible. Don't flatten.
- Scope and regulatory disclaimers.
- Three-doors structure. Do not flatten into a service list.
- Hero copy beyond CTA tightening.
- Family heritage content beyond what's already on /about. CLAUDE.md is explicit about what stays private.

Output:
- Walk changes by file in priority order.
- For copy edits, show before and after.
- For new files (sitemap, robots, JSON-LD), show full content.
- Pause after section 1 (SEO) for review before continuing.
- Don't push or deploy. Show diffs only. Zachary commits.