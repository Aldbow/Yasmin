# DESIGN.md — Pearl Pink Editorial, Expressive Abstract Silk & Focused Glassmorphism

## Design Read
Reading this as: **Personal Branding & Executive Social Work Portfolio** for **HR, CSR, Government, and Community Development Stakeholders**, in a **Pearl Pink Couture Editorial, Abstract Silk Sculpture & Focused Mother-of-Pearl Glass** style, dial **ENERGY 3 / RHYTHM 3 / MOTION 3**.

## Three Dials
- **ENERGY: 3 (Bold Editorial Presence)** — Expressive oversized editorial typography paired with an interactive multi-layered Pearl Silk & Empathy Contour abstract canvas and an interactive 4-Domain Lens Switcher in the Hero.
- **RHYTHM: 3 (Varied)** — Every section uses a distinct structural composition:
  1. `#about` (Hero): Choreographed 7/5 editorial split over a pointer-reactive Abstract Silk & Topographic Ribbon canvas, featuring an interactive 4-Domain Focus Lens Switcher, a 3D Mother-of-Pearl Glass Executive Card, and a 3-column architectural metric ledger.
  2. `#core-pillars` (Core Competencies): Full-width Flagship Competency Showcase (Pillar 01) paired with a 3-column Hairline Editorial Grid (Pillars 02–04) and a structured competency index.
  3. `#experience` (Track Record): Interactive filterable & searchable vertical timeline with native keyboard-accessible accordion rows.
  4. `#credentials` (Credentials & Academic): 6/6 split pairing the 3D Pearlescent National License Card with a stacked academic foundation ledger.
  5. `#impact` (Social Impact): Horizontal snap-scroll showcase with explicit active-card pagination and keyboard controls.
  6. `#contact` (Inquiry Studio): 2-column executive inquiry form and verified colophon.
- **MOTION: 3 (Parallax, Pointer Choreography & Interactive State Morphing)** — The Hero features a 1.8s staggered SVG path-drawing entrance, pointer-driven 3D spring parallax on the abstract silk ribbons, `layoutId` spring morphing across the 4 interactive domain lenses, and scroll-linked depth shifts. Zero mindless infinite loops; all motion respects `prefers-reduced-motion: reduce`.

## Color System (R-29: 3 Core Tones + 1 Deliberate Accent)
All pairings are verified against WCAG 2.x AA/AAA via `contrast-check.py`:
1. **Core Canvas (Pearl Blush Ivory):** `#FDF8FA`
2. **Core Surface (Satin Rose-Pearl):** `#F7EEF2` / `#FBF5F8` with hairline borders `#DEC3D0` and interactive control borders `#8A5A6E` (5.30:1 against `#FDF8FA`, 4.90:1 against `#F7EEF2`).
3. **Core Ink (Rosewood & Plum Typography):**
   - Primary Ink: `#231118` (17.16:1 on `#FDF8FA` — AAA)
   - Secondary Body: `#52323F` (10.59:1 on `#FDF8FA` — AAA)
   - Muted Metadata: `#6E4757` (6.83:1 on `#F7EEF2`, 6.38:1 on `#F3E5EC` — AA)
4. **Deliberate Accent (Couture Berry Rose):**
   - Primary Accent: `#A61E4D` with `#FFFFFF` text (7.21:1 — AAA), hover `#8C163E`.
   - Soft Accent Chip Surface: `#FCE8EF` with `#881337` text (8.17:1 — AAA).

## One-Line Reasons for Major Decisions (R-31 & Purpose-Gate)
- **Color & Gradients (R-01):** Warm pearl-blush (`#FDF8FA`) and couture berry-rose (`#A61E4D`) express empathetic, human-centered professionalism while maintaining 7.21:1+ AAA contrast; multi-stop pearl-rose SVG gradients sculpt the abstract silk ribbons so the translucent glass card has rich chromatic contours to refract.
- **Icons (R-04):** Domain-specific semantic icons (`ShieldCheck` for Kemensos RI license, `Users`/`Scale` for HR mediation, `Sprout` for CSR sustainability, `HeartHandshake` for counseling) provide scannable category anchors without decorative sparkles or emojis.
- **Typography (R-06):** `Plus Jakarta Sans` anchors modern executive headings, `Instrument Serif` italic highlights human-centered editorial concepts, `Inter` ensures high body legibility, and `JetBrains Mono` formats official Kemensos RI credential IDs (`PS.G.1107-00-LSP.7-24`) and chronological periods.
- **Background & Abstract Artwork (R-07, R-22):** Flowing organic Bézier silk ribbons and concentric empathy contours visualize the ripple effect of social work and community empowerment while giving the frosted Mother-of-Pearl glass surface tangible depth to refract.
- **Button Arrows (R-08):** Directional arrows (`ArrowUpRight`) appear only on external LinkedIn navigation links to signal leaving the site.
- **Badges (R-09):** Status badges are restricted to verifiable factual metadata (active Kemensos RI license validity `2024–2029` and current employment status at CV. Hayakids Indonesia).
- **Glassmorphism (R-10):** `backdrop-filter: blur()` is capped at two focal elements—the floating navigation pill (`.glass-pill`) and the primary Hero Executive Bio glass card (`.glass-pearl-focal`)—so translucent mother-of-pearl glass contrasts against solid satin cards (`.pearl-card`).
- **Border Radius (R-11):** A 3-tier radius scale distinguishes element roles: `rounded-full` for the floating nav pill and primary CTAs, `rounded-2xl` for content cards, and `rounded-lg` for form inputs, filter tabs, and skill tags.
- **Shadow (R-12):** Elevation shadows are reserved for the sticky navigation pill and the focal cards to signify z-axis separation above the pearl canvas.
- **Glow (R-13):** Soft specular reflection is used only as an interactive hover spotlight on the focal credential/bio card and primary CTA.
- **Feature Cards (R-14):** Core Pillars use a full-width flagship panel for Pillar 01 followed by a 3-column architectural row for Pillars 02–04 to reflect multidisciplinary weight rather than uniform copy-paste cards.
- **Animations & Choreography (R-19):** Staggered entrance reveals, SVG path drawing, pointer-tracked 3D parallax, and interactive domain-lens transitions guide the visitor's eye from Aulia's identity to her four core domains and verified Kemensos RI license, and disable cleanly under `prefers-reduced-motion: reduce`.
- **Identity Motif (Part 3):** Numbered serif-and-mono section indices (`00 / PROFIL EKSEKUTIF` through `05 / KOLABORASI & KONTAK PROFESIONAL`) paired with a rosewood hairline rule anchor every major section.
