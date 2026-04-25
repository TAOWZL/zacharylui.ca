# CLAUDE.md

Context for maintaining zacharylui.ca. Read this before editing any page.

---

## What this site is

A static Jekyll site on GitHub Pages for Zachary Lui, a Toronto-based practitioner working across classical Chinese medicine, Qigong / Neigong, Reiki, Ritual, and Divination Coaching. The site represents all of these services. It is not an acupuncture-first site and should not be edited into one.

## Architecture: three doors

The homepage organizes services into three gateways, not a flat service list. This is deliberate. Do not flatten it.

1. **Clinical care** → acupuncture, Tui Na. Regulated health service.
2. **Practice to learn** → Qigong / Neigong Coaching, Reiki. Contemplative practices.
3. **Ritual and Divination** → commissioned ritual, divination coaching, public events at QCC. Spiritual work.

Each gateway on the homepage carries its own scope disclosure in voice. Sub-pages within a gateway carry one short italicized scope line of their own rather than a legal-box disclaimer. This keeps compliance visible without puncturing voice at every page.

## Positioning

Acupuncture is one door among three, not the primary draw. The R.Ac designation appears on the acupuncture page, on the services page next to the acupuncture listing, in the about page, and in the footer. It does not appear in the homepage H1 or in non-acupuncture service contexts.

## File structure

- `index.md` — homepage, three doors, trimmed About summary linking to /about
- `about.md` — full practitioner bio organized by three doors plus service to profession plus press hub
- `acupuncture.md` — regulated scope, includes Jin Zhang/UNESCO study, TCMO advocacy
- `services.md` — fee schedule, all current Jane rates filled in
- `qigong.md` — Qigong / Neigong Coaching, IIMQ training under Robert Youngs, meta-pov framing
- `reiki.md` — Usui Reiki, spiritual rather than clinical Usui lineage
- `divination.md` — Divination Coaching, tarot and mahjong as frame
- `ritual.md` — commissioned ritual, $1500 starting, Mao Shan Shangqing lineage from Robert Youngs, Vitimus/ROII trainer credit, Reiki witch lineage
- `education.md` — teaching credits, courses taught, conferences (Penn State 2022, World Tai Chi & Qigong Summit 2024, Saam Diagnostic Conference 2025)
- `writing.md` — essay landing page (currently empty), DDTRH credit
- `press.md` — press, podcast interviews (10+ verified), conference presentations, podcast hosting (DDTRH + TCMO Podcast), Bill 88 advocacy
- `privacy.md` — privacy policy
- `404.md` — not found
- `_includes/footer.html` — sitewide footer with two-row nav and compliance disclaimer

## CTCMPAO compliance pressure points

Zachary is regulated by CTCMPAO. All site content must comply with:
- CTCMPAO Standard of Practice (7): Advertising
- O. Reg. 318/12: Professional Misconduct under the Traditional Chinese Medicine Act, 2006

Hard rules:

1. **Titles.** Only R.Ac is authorized. No "Doctor," "Professor," "Specialist," "Senior," "Head," "Chief," or any title implying specialization. "Faculty" and "instructor" are fine for teaching roles.
2. **Claims.** Every claim about a treatment must be factual, verifiable, and supportable as reasonable professional opinion. No outcome guarantees. No superiority claims.
3. **Condition language.** "Patients commonly seek acupuncture for..." not "acupuncture for [condition]." The first is verifiable.
4. **Testimonials.** Prohibited, including anonymized ones. Never add to this site.
5. **Scope separation.** Non-regulated services must be clearly labeled. R.Ac title and credentials do not appear on non-clinical service pages.
6. **Fees.** Current, accurate, consistent with Jane. Update both together.
7. **Prompt payment discounts.** Prohibited under Section 23.
8. **Solicitation.** No cold-contacting non-patients.
9. **Anxiety page.** Site deliberately does not carry one. Section 28 risk. Don't add.
10. **CTCMPAO name.** Appears only in footer compliance disclaimer and on privacy page. Stripped from all other body copy.

## Scope line for non-regulated pages

Each non-regulated service page (Qigong, Reiki, Divination, Ritual) opens with a one-line italicized scope statement written in voice, not legalese. Format:

> *[Thing] is [what it is], not healthcare. Sits outside R.Ac scope and isn't a replacement for [relevant professional care].*

## Biographical context for the site

Zachary's biographical anchors that appear on the site:

- Riverdale-based for 6 years (as of April 2026)
- Grew up between Toronto and Hamilton
- Two distinct family heritage lines:
  - **Paternal (Lei 雷, Thunder):** Lei family were among the first acupuncturists in San Francisco. Historical credential only on the site; current TCM relatives are NOT named or implied on the site to respect their privacy and avoid surfacing them as part of Zachary's public profile without explicit consent.
  - **Maternal (Ho King family):** Toronto Chinatown restaurant heritage. Grandfather's recipes are at New Ho King. Civic-cultural heritage.
- Cantonese: fluent comprehension, working on conversational fluency. Mandarin: in progress. Does not read or write Chinese.

Both heritage lines surface on the site, but only on /about. The paternal Lei TCM lineage and maternal Ho King connection both belong on /about where biographical context lives. Do not add family lineage content to /acupuncture; the clinical page should focus on training credentials and patient-facing information, not family heritage. Adding family layers to clinical pages tips the page from "credentialed" to "credential-stacked."

Biographical content NOT on the site (intentionally private):

- Spiritual ancestral relationships and family priest/scholar lineage
- Family transmission of Huangdi Neijing
- Specific clan history beyond what's named above

These remain private practice context, not public credentials. Do not surface them on the site even if asked to expand the bio.

## Voice calibration by page

Voice varies by page type. Deliberate. Do not flatten.

- **Acupuncture, services, privacy, 404:** Sober, clinical, professional. Where a regulator looks. Plain facts.
- **Homepage and About:** Practitioner voice with compliance discipline. Carries the three-doors structure and voice-mode scope disclosures.
- **Ritual and Divination pages:** Full Andrieh Vitimus voice. Sensory, direct, no softeners, screens plainly. Voice is itself a screening mechanism here.
- **Reiki and Qigong pages:** Direct but accessible. Beginners are a real audience. Each includes a "first visit / first class" passage for warmth.
- **Education and press pages:** Tight, factual. Not LinkedIn or PR.

Flattening voice on the Ritual and Divination pages costs the clients who would actually benefit. Don't.

## Content conventions

- **No em dashes.** Commas, colons, periods.
- **Capitalization:** Use Title Case for practice and modality names: Qigong, Neigong, Reiki, Tui Na, Ritual, Rituals, Divination Coaching, Acupuncture (when used as a modality reference). Lowercase only when grammatically required mid-sentence as a general noun (rare). Apply across all pages including footer, meta descriptions, and CLAUDE.md.
- No marketing softeners.
- Plain language. TCM jargon only where load-bearing, with brief translation.
- Chinese characters used in line where audience expects them: 唐密, 巫, 茅山上清, 內科, 推拿, 氣功, 內功, 霊気. Generally in spiritual TCM, Ritual, Qigong, and Acupuncture pages. Not on services or privacy pages.
- "TCM pattern assessment," not "diagnosis," on acupuncture pages.
- Never "cure," "heal," or "treat" a specific medical condition.

## Lineage and credential record (verified)

Use these as written. Do not embellish or guess.

**Clinical:**
- R.Ac (Ontario) since 2015
- OCTCM formal TCM training
- Family-transmitted lineage and imperial-court medical lineage continuing study (frame as "studied," not "claimed")
- Advanced needling studied with the late Professor Jin Zhang, UNESCO-recognized representative of the Traditional Chinese Acupuncture Intangible Cultural Heritage of Humanity (one class taken, framed as "studied with")

**Qigong / Neigong:**
- Master of Medical Qigong, IIMQ (founded by Jerry Alan Johnson)
- Direct instruction under Robert Youngs, Director of IIMQ Canada
- Practicing Qigong since childhood, focused since 2008
- Teaching Qigong since 2013

**Reiki:**
- Usui Reiki Master Teacher (highest level)
- Spiritual rather than clinical Usui lineage
- Reiki shifu is Andrieh Vitimus (same teacher relationship as ritual/chaos magic). Line runs back through a witch who practiced magic, who was Vitimus's teacher.
- Use "shifu" framing on /reiki to match the rest of the site (consistency).

**Ritual:**
- Foundation is chaos magic. Methodology trained through the Results Over Image Institute under Andrieh Vitimus, where Zachary now teaches as a trainer.
- **Vitimus is Zachary's shifu (师父)** in the Chinese sense of the lineage teacher relationship. Master / Shifu carries the same weight as guru in Sanskrit traditions: lineage holder, lifelong commitment, transmission of tradition. Used consistently across /homepage, /about, /ritual, and /reiki where Vitimus is named.
- Applied the chaos magic approach across multiple traditions including Chinese Esoteric Buddhist (唐密), Wu (巫), Daoist, and Reiki frameworks. The Tang Mi and Wu study came through the ROII / Vitimus framework, not separate Chinese transmission.
- Mao Shan Shangqing (茅山上清) and folk Daoist lineage holder, formal Daoist transmission received from Robert Youngs at his passing in 2020. Youngs received from Jerry Alan Johnson. The Daoist transmission came on the basis of the chaos-magic-applied-across-traditions work, not separately. This narrative arc matters: chaos magic foundation, Vitimus as shifu, Daoist lineage as recognition.
- Doing public Ritual work since 2016.
- "Chaos magic" is named on the site as of April 2026; Zachary is comfortable naming it explicitly.

**Teaching:**
- AIM Academy, Eight Branches (2023), OCTCM
- 100% Pan-Canadian exam pass rates at AIM 2024 and 2025
- Courses: TCM Foundations, Diagnosis, Meridians and Acupoints, Internal Medicine (內科), Tui Na, Qigong therapy, Student Clinic, Practice Management, Jurisprudence and Ethics, Grad Prep
- Penn State University, Invited Qigong Master and Lecturer, August 2022
- World Tai Chi & Qigong Summit, April 2024
- Saam Diagnostic Conference, May 2025

**Service to the profession and community:**
- Former Director of Marketing, TCMO board (within last two years)
- Bill 88 advocacy 2022: 14 letters of support coordinated, personal interviews on Toronto Star, CBC News Morning, 640 Toronto Alan Carter Program, Schedule 5 amended out March 2022
- Toronto Chinatown BIA volunteer, ongoing community event support tied to maternal family's Chinatown roots
- Note: Queen City Curio is co-owned by Zachary and Andrieh Vitimus. On the site, frame neutrally as "the shop and spiritual centre" without ownership claims, rather than "my shop" (inaccurate, sole-ownership implied) or "the shop I co-own with Andrieh Vitimus" (accurate but adds another Vitimus mention to the homepage). QCC runs paid events and is a business; not framed as community service or volunteering on the site.

**Podcast:**
- Co-host, Deeper Down the Rabbit Hole (DDTRH), with Andrieh Vitimus
- Host, TCMO Podcast
- Guest interviews on Qiological, Learn Feng Shui (2x), Black Beryl, Drunken Acupuncture (6 episodes)

## DDTRH on the public site

Currently included on /about, /writing, and /press. Earlier rule was to keep DDTRH off the public site for political safety. That rule was reversed: Zachary is "ok with DDTRH" on the site as of April 2026. Keep it. Reasoning: DDTRH is publicly searchable via Andrieh Vitimus, episode directories, and standard podcast platforms. Concealment from the personal site doesn't conceal anything; ownership is the stronger posture.

## Political context

Zachary is considering municipal political ambition (Toronto), possibly higher. The site has been adjusted with this in mind:

- Bill 88 advocacy is the strongest political credential; surfaced on homepage, /about, /education, /press
- "Shamanic" word removed from homepage; lineage-direct framing kept
- Imperial physician lineage framing politics-hardened ("medical lineages that served the imperial courts," not "imperial physician lineages")
- Jin Zhang UNESCO framing protects the imperial-court reference
- Private/governance credentials: TCMO Director, 14 support letters, named media interviews
- Penn State invited lectureship surfaced
- Owned posture on DDTRH and Ritual practice rather than concealment

For a future campaign, the press page is the campaign-research-ready record. /about is the journalist landing page.

## Before publishing any change

1. Check titles. R.Ac only. No Professor, no specialty.
2. Check claims. Factual, verifiable.
3. If non-regulated service, confirm the one-line scope statement is present.
4. If fees changed, confirm Jane is updated to match.
5. No testimonials, ever.
6. No em dashes.
7. If adding a credential, verify against the lineage and credential record above. If something doesn't match, ask Zachary; don't guess.
8. If adding a press item or podcast appearance, only include items where Zachary was personally a guest or quoted. Coverage of organizations he worked for goes in /press under "Advocacy coverage" framing, not personal press.

## Deployment

Edit markdown locally, commit, push to main. GitHub Pages rebuilds automatically. Use Claude Code locally for editing if possible; gives commit history, which the site has been lacking.
