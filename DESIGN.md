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

The product should feel like opening a soft lavender letter under gentle light: frosted glass, quiet gold seals, and restrained cinematic motion. It is intimate and mobile-first — never a dark luxury landing page, never a purple-glow dashboard, never generic stock romance.

Depth comes from atmosphere (blurred abstract wash + aurora + sparse particles), glass cards, and soft plum shadows. Motion is purposeful: staggered word reveal, breathing logo, shimmer on the gift CTA, sparkle burst on unlock. Always honor `prefers-reduced-motion`.

**Key Characteristics:**
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

## Do's and Don'ts

### Do:
- **Do** keep Soft Lavender Mist tokens in `src/index.css` as the code source of truth.
- **Do** use Aref Ruqaa for display moments and Alexandria for body/UI.
- **Do** respect `prefers-reduced-motion` (skip particles loops, shimmer, confetti, heavy exits).
- **Do** build mobile-first; verify Scene 1 on a phone-width viewport.
- **Do** keep Soft Lavender Mist tokens, glass cards, and pill CTAs consistent across every scene.

### Don't:
- **Don't** invent personal photos, chats, or copy — placeholders must read as placeholders.
- **Don't** put the engagement date in the logo.
- **Don't** add a background music track or autoplay any audio.
- **Don't** use near-black full-page backgrounds or the old burgundy/gold world.
- **Don't** overload the first viewport with stats, schedules, or multi-card marketing grids.
