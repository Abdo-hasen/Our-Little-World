---
name: Our World — Aya Ali
description: Soft Lavender Mist — light cinematic lavender gift journey with champagne gold accents
colors:
  bg-deep: "#efe6f2"
  bg-plum: "#e4d5e8"
  bg-card: "rgba(255, 252, 255, 0.68)"
  bg-card-border: "rgba(110, 70, 115, 0.16)"
  text-primary: "#3a2440"
  text-secondary: "#5a3d5f"
  text-muted: "#6f5073"
  accent-lavender: "#8b5a8c"
  accent-mauve: "#a76b9e"
  accent-glow: "rgba(167, 107, 158, 0.28)"
  accent-gold: "#c9a46c"
  accent-gold-soft: "rgba(201, 164, 108, 0.45)"
  btn-start: "#96598f"
  btn-end: "#8b5a8c"
  input-bg: "rgba(255, 255, 255, 0.85)"
  input-border: "rgba(110, 70, 115, 0.22)"
  shadow-soft: "rgba(90, 50, 95, 0.12)"
  logo-plate-start: "#a874a8"
  logo-plate-mid: "#7d527d"
  logo-plate-end: "#5c3a5c"
typography:
  display:
    fontFamily: "Aref Ruqaa, Alexandria, serif"
    fontSize: "clamp(2rem, 6.5vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  headline:
    fontFamily: "Aref Ruqaa, Alexandria, serif"
    fontSize: "clamp(1.45rem, 4.5vw, 1.85rem)"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "Alexandria, Segoe UI, Tahoma, Noto Sans Arabic, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Alexandria, Segoe UI, Tahoma, Noto Sans Arabic, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 400
    lineHeight: 2
  label:
    fontFamily: "Alexandria, Segoe UI, Tahoma, Noto Sans Arabic, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "14px"
  md: "22px"
  lg: "26px"
  pill: "9999px"
spacing:
  xs: "0.35rem"
  sm: "0.65rem"
  md: "1.1rem"
  lg: "1.35rem"
  xl: "2rem"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, {colors.btn-start} 0%, {colors.btn-end} 100%)"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.75rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "linear-gradient(135deg, {colors.btn-start} 0%, {colors.btn-end} 100%)"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.5rem"
    height: "2.75rem"
  card-glass:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "1.35rem 1.25rem"
  timeline-card:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "1.05rem 1.1rem"
    notes: "Category chip + watermark icon + optional ceremonial gold; accordion detail"
  timeline-rail:
    notes: "Continuous rail with scroll-driven progress fill; marker nodes pulse in view"
  input-date:
    backgroundColor: "{colors.input-bg}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    height: "3.5rem"
    width: "4rem"
---

# Design System: Our World — Aya Ali

## Overview

**Creative North Star: "Soft Lavender Mist Letter"**

The product should feel like opening a soft lavender letter under gentle light: frosted glass, quiet gold seals, and **cinematic animation as a primary craft pillar**. It is intimate and mobile-first — never a dark luxury landing page, never a purple-glow dashboard, never generic stock romance, never a static brochure with a fade slapped on.

**Niche (binding with `PRODUCT.md`):** This visual world exists for a personal cinematic **engagement-gift** journey (شرعي خطوبة), not for wedding websites, RSVP planners, couple social feeds, or generic romance landings. Impeccable craft must deepen that niche — quiet gift letter, guided scenes, keepsake archive — and must not broaden the UI into adjacent product categories. **`/animate`, `/delight`, and motion polish are default expectations**, not optional extras.

Depth comes from atmosphere (blurred abstract wash + aurora + sparse particles), glass cards, soft plum shadows, and **layered motion**. Motion must feel intentional and emotional: staggered word reveal, breathing logo, shimmer on the gift CTA, morphing date gate, sparkle/confetti unlock, scene-to-scene transitions, and interactive feedback on every key control. Always honor `prefers-reduced-motion`.

**Key Characteristics:**
- Niche-locked: personal engagement gift, not wedding / feed / RSVP product UI
- **Animation-forward:** every scene ships with purposeful entrances, transitions, and micro-interactions
- Light Soft Lavender Mist canvas (not near-black)
- Alexandria body + Aref Ruqaa display
- Champagne gold as rare accent (dividers, seal, success)
- Frosted glass cards with gradient edge
- Mobile-first single-column gift composition

## Colors

A soft lavender world with mauve CTAs and champagne gold used sparingly for ceremony.

### Primary
- **Mist Mauve** (`#a76b9e` / `#8b5a8c`): Primary buttons, focus rings, lead-in emphasis.
- **Deep Plum Ink** (`#3a2440`): Titles and Scene 1 body paragraphs (high-contrast reading).

### Secondary
- **Champagne Gold** (`#c9a46c`): Ornamental divider, wax-seal dot, success input glow. Rare on purpose.

### Neutral
- **Lavender Mist** (`#efe6f2`): Page canvas.
- **Plum Wash** (`#e4d5e8`): Soft secondary panels.
- **Frosted Card** (`rgba(255, 252, 255, 0.68)`): Glass surfaces over atmosphere.
- **Muted Plum** (`#6f5073`): Captions, secondary CTA text, labels.
- **Body Secondary** (`#5a3d5f`): Supporting copy outside the opening letter body when hierarchy needs a softer step.

### Named Rules
**The Mist-Not-Midnight Rule.** Do not use near-black full-bleed page backgrounds or the retired burgundy/gold palette.

**The Rare Gold Rule.** Champagne gold appears on ≤ a few ceremonial moments per screen (divider, seal, success). It is not a second brand purple.

## Typography

**Display Font:** Aref Ruqaa (fallback Alexandria, serif)  
**Body Font:** Alexandria (fallback Segoe UI, Tahoma, Noto Sans Arabic)

**Character:** Calligraphic warmth for names and emotional prompts; clear geometric-friendly Alexandria for long Arabic reading and UI chrome. Document is `lang="ar" dir="rtl"`.

### Hierarchy
- **Display** (700, `clamp(2rem, 6.5vw, 2.75rem)`, 1.25): Recipient name (`آية علي`).
- **Headline** (700, `clamp(1.45rem, 4.5vw, 1.85rem)`): Gate prompts and scene titles.
- **Title / CTA lead** (display face for `يلا نبدأ الرحلة؟`; body face weight 600 for buttons).
- **Body** (400, ~1.02rem, line-height 2, color `text-primary` on Scene 1 letter): Opening paragraphs.
- **Label** (500, 0.75rem, muted): Date field labels.

### Named Rules
**The Letter Body Rule.** Scene 1 letter paragraphs use `--text-primary` (`#3a2440`) with Alexandria so optical weight stays readable; do not lighten body to muted mauve for “softness.”

## Layout

Mobile-first single column. Scene shell centers content in `min(34rem, 100%)` with vertical rhythm `clamp` gaps. First viewport: brand mark, name, ornamental divider, one glass letter card, one primary CTA — no stats strips or card grids in the hero.

Padding: page `clamp(1.25rem, 3.5vh, 2rem)` vertical; card `clamp(1.35rem, 3.5vh, 1.85rem)`. RTL throughout.

## Elevation & Depth

Hybrid: soft offset plum shadows + frosted glass + atmospheric layers (photo blur, aurora, vignette, CSS particles). Shadows are ambient, not hard neobrutal offsets.

### Shadow Vocabulary
- **Card lift** (`0 16px 40px rgba(90, 50, 95, 0.12)` + inset highlight): Glass letter card.
- **Button lift** (`0 8px 22px rgba(139, 90, 140, 0.32)`): Primary CTA; intensifies on hover.
- **Logo plate** (multi-layer white ring + mauve glow): Monogram plate.

### Named Rules
**The Atmosphere-Behind-UI Rule.** Blur and particles stay behind interactive content; never obscure text contrast.

## Shapes

Soft rounded language: cards `22px`, logo plate `26px`, date inputs `14px`, CTAs full pill `9999px`. Gradient border on glass cards via masked pseudo-element (white → gold → mauve). Logo sits on a mid-mauve gradient plate so the screened AA reads clearly.

## Components

### Buttons
- **Shape:** Pill (`9999px`)
- **Primary:** Mauve gradient, white text, optional shimmer sweep, hover lift `-2px`
- **Secondary / Ghost:** Transparent, muted text, soft border; no shimmer
- **Focus:** Global `:focus-visible` mauve outline `2px` / offset `3px`

### Cards / Containers
- **Corner Style:** `22px`
- **Background:** Frosted white (`backdrop-filter: blur(22px) saturate(1.35)`)
- **Border:** 1px gradient edge (not a flat gray stroke alone)
- **Internal Padding:** ~1.25–1.85rem

### Inputs / Fields
- **Style:** Soft white fill, plum border, `14px` radius, tabular numerals, centered
- **Focus:** Mauve border + glow ring
- **Error:** Soft rose border/glow + gentle shake
- **Success:** Gold border/glow before unlock zoom

### Signature: Scene 1 Key
Monogram plate + Ruqaa name + gold divider/seal + glass letter with word-by-word reveal + shimmer gift CTA + date gate morph + confetti unlock + zoom-blur exit. No background music track — the only audio is the owner’s final voice recording (visitor-started) at the end of the journey.

## Motion (first-class)

Animation is part of the product identity, not garnish. Prefer `framer-motion` for scene orchestration and CSS for ambient loops (atmosphere, particles, shimmer) when that is lighter.

### Motion vocabulary
- **Ease cinematic:** `cubic-bezier(0.22, 1, 0.36, 1)` — scene fades, card swaps, unlock exit.
- **Word stagger:** ~`0.045s` per word — letter reveals (Scene 1 pattern; reuse where copy should feel spoken).
- **Breathing / float:** slow logo and soft ambient loops (pause under reduced motion).
- **CTA shimmer:** ~`4.2s` light sweep on primary gift actions.
- **Feedback:** gentle shake on date error; gold success glow; confetti/sparkle on unlock or celebration beats.
- **Scene exits / entrances:** short zoom-blur or fade-slide between journey scenes — never a hard cut unless reduced motion.

### Named Rules
**The Alive-Gift Rule.** A scene is incomplete if content is correct but motion is missing, generic, or only a single opacity fade. Each scene needs at least one memorable motion moment plus calm supporting motion.

**The Calm-Not-Chaotic Rule.** Motion supports reading and emotion; it must not fight the letter body, block taps, or feel like a marketing landing-page gimmick reel.

**The Reduced-Motion Rule.** Honor `prefers-reduced-motion`: skip infinite loops, shimmer, confetti, and heavy exits; keep clear layout and instant (or near-instant) content visibility.

## Motion Contract

**Binding.** A scene is not Done until every item below is satisfied (or explicitly N/A with rationale). Applies to every journey scene and permanent-area screen. Palette, typography, and niche stay unchanged — this contract only raises the motion bar.

### A. Required Layers (checklist)

1. **Entrance** — Scene shell enters with fade + y-slide (≤16px) or zoom-blur, using ease cinematic `cubic-bezier(0.22, 1, 0.36, 1)`.
2. **Content Reveal** — Stagger header → body → CTA. Long copy uses word/line stagger (`~0.045s` per word where the letter-spoken feel fits).
3. **Scroll Reveal** — Any list/timeline uses `whileInView` (`once: true`) with total stagger ≤ `0.18s`.
4. **Signature Moment** — Exactly one memorable motion beat per scene (documented in the per-scene table below). Required, not optional.
5. **Interaction Feedback** — Every tappable Button/Card has `whileTap` (scale ≈ `0.97–0.985`) plus hover / `:focus-visible` states.
6. **Ambient (Calm)** — Soft background or icon presence (breathing / glow). Loops only when slow; pause under reduced motion.
7. **Exit / Transition** — Scene changes use `AnimatePresence` (or equivalent). No hard cut unless reduced motion.

### B. Card Enrichment Rule

Any content Card must include **at least 3** of: Category Chip, Watermark Icon (opacity ~6–10%), type Accent, Icon/Illustration, Gradient edge. Champagne gold only for ceremonial moments (Rare Gold Rule).

### C. Motion Budget (Performance)

- Animate **`transform` + `opacity` only**. Do not animate `width` / `height` / `top` / `left` (exception: `grid-template-rows` for accordion expand/collapse).
- Do not animate `backdrop-filter`.
- Cap visible simultaneous motion: **1 Signature + 2–3 Supporting** per viewport.
- Durations: micro `0.15–0.28s` · reveal `0.45–0.6s` · scene transition `0.5–0.8s` · ambient `≥3s`.
- Target ~60fps on mid-range Android (primary gift open via QR / phone).

### D. Reduced Motion Contract

- Call `useReducedMotion()` in every scene.
- When true: `initial={false}`; disable loops, shimmer, confetti, parallax; content visible immediately.
- Progress / state indicators remain visible in a static form (e.g. full timeline rail).

### E. Accessibility

- Motion must not hide content or block taps.
- Touch targets ≥ `44px`.
- Expand/collapse controls use `aria-expanded` + `aria-controls`.

### F. Per-Scene Motion Table

Update this table whenever a scene’s signature moment is approved or changes.

| Scene | Signature Moment | Supporting | Reduced-motion fallback |
|---|---|---|---|
| 1 Key | Word reveal + confetti unlock | Logo breathing, CTA shimmer, date morph, zoom-blur exit | Static letter; instant content; no confetti/shimmer |
| 2 Timeline | Progress line fills on scroll | Scroll-reveal cards, icon pulse/glow, accordion expand, chip + watermark | Full rail visible; no pulse; accordion without motion |
| 3 Flip cards | 3D flip | Stagger deal-in, tap feedback | Crossfade instead of flip |
| 4 Messages | Tap-to-reveal story | Stagger list entrance, soft card lift | Instant reveal; no lift |
| 5 Secret memory | Discovery unlock beat | Hint shake, gentle success glow | Instant answer path; no shake |
| 6 Final garden | Flower growth on plant | Garden ambient, voice UI feedback, replay CTA | Instant flower add; no growth loop |
| Archive screens | Define before implementation | Entrances + tap feedback minimum | Instant content |

## Do's and Don'ts

### Do:
- **Do** keep Soft Lavender Mist tokens in `src/index.css` as the code source of truth.
- **Do** use Aref Ruqaa for display moments and Alexandria for body/UI.
- **Do** design and ship animation as a core deliverable for every scene (entrances, transitions, interaction feedback).
- **Do** pass the full **Motion Contract** checklist before requesting owner approval.
- **Do** respect `prefers-reduced-motion` (skip particles loops, shimmer, confetti, heavy exits).
- **Do** build mobile-first; verify every scene on a phone-width viewport — motion must stay smooth on phone.
- **Do** keep Soft Lavender Mist tokens, glass cards, and pill CTAs consistent across every scene.

### Don't:
- **Don't** invent personal photos, chats, or copy — placeholders must read as placeholders.
- **Don't** put the engagement date in the logo.
- **Don't** add a background music track or autoplay any audio.
- **Don't** use near-black full-page backgrounds or the old burgundy/gold world.
- **Don't** overload the first viewport with stats, schedules, or multi-card marketing grids.
- **Don't** treat motion as optional polish after “done” — unfinished animation means unfinished scene.
- **Don't** ship a scene with only a single opacity fade and no signature moment.
- **Don't** restyle or expand the product into wedding-site, RSVP, social-feed, or generic romance-landing patterns — stay in the engagement-gift niche.
