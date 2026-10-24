# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite + TypeScript. CSS modules / scene CSS (no Tailwind). Motion: `framer-motion`. Celebration: `canvas-confetti`. Phase 1 is fully static (no backend).

## Users

**Primary recipient:** Aya Ali (آية علي) — opens the site on a phone (often via QR / shared link) as a personal engagement gift.

**Owner / author:** Abdelrahman Hasan — supplies real memories, copy, photos, and audio; reviews each scene before the next is built.

## Niche

**Primary niche:** Personal cinematic **engagement-gift** websites for a شرعي خطوبة — a one-recipient guided memory journey, then a permanent keepsake archive.

This product exists only inside that niche. Design, copy, features, and Impeccable work must reinforce it; do not broaden into adjacent categories.

## Product Purpose

A sincere, respectful cinematic engagement-gift website: a guided journey through real shared memories, then a permanent archive area for messages and keepsakes. **Animation is a first-class product feature** — the gift should feel alive through purposeful motion (scene transitions, reveals, micro-interactions, celebration moments), not like a static page with optional polish. Success means Aya feels the story is personal, warm, and *cinematically animated* — not generic romance — and the owner can extend scenes without rewriting the product.

## Positioning

**In niche:** Private-feeling guided journey keyed to their engagement date (`13/03/2026`), built only from owner-supplied facts, with Egyptian Arabic voice where intimacy matters.

**Out of niche (do not design or ship as):** wedding website template, RSVP / event planner, couple social feed, dating-app UI, generic “love story” landing page, marketplace gift builder, or multi-couple SaaS. If a request pulls the product toward those shapes, refuse or reframe it back to the engagement-gift journey niche.

## Operating Context

- Mobile-first; first open is usually on a phone.
- Cinematic journey scenes in approved order; permanent archive is a separate area reachable after the final scene.
- **Motion-forward:** Every scene ships with intentional animation (entrances, transitions, interactive feedback). Prefer `framer-motion` + scene CSS; polish motion before treating a scene as “done.”
- Content is developed scene-by-scene with owner Q&A; invented relationship facts are forbidden.
- No background music track. The only audio is the owner’s final voice recording at the end of the journey (visitor-started; accessible controls).

## Capabilities and Constraints

**In scope (Phase 1):** Static React journey + permanent area with local content/assets; date gate as playful interaction (not security); final voice-message control; revisit earlier scenes; **cinematic animation per scene** (reveals, transitions, micro-interactions, celebration where appropriate).

**Out of scope until owner asks:** Firebase, auth, admin dashboard (Phases 2–3).

**Undecided / owner-supplied later:** Scene 2+ milestone stories, photos, final voice recording, permanent-area copy.

**Terminology:** Soft Lavender Mist (visual world name); scenes named in Arabic in `PROJECT_SPEC.md`; content status: `placeholder` | `needs-owner-input` | `draft` | `approved`.

## Brand Commitments

- **Name:** Our World — Aya Ali.
- **Logo:** Lavender `AA` / `OUR WORLD` monogram (`public/our-world-monogram.png`). No engagement date in the logo.
- **Voice:** Warm, respectful, sincere; Egyptian Arabic + English when stylish. Avoid the word “love” in user-facing romantic copy; avoid wording that assumes the couple is already married.
- **Binding docs:** `PROJECT_SPEC.md` (journey scope + scene order), `DESIGN.md` (visual system), this file (product truth).

## Evidence on Hand

- Approved Scene 1 copy and date gate in `src/data/scene1.ts` / `PROJECT_SPEC.md`.
- Logo asset and Scene 1 atmosphere image in `public/`.
- Candidate milestone *labels* for Scene 2 in `PROJECT_SPEC.md` (not finished stories).
- No voice recording file yet; final-scene voice UI must stay graceful when missing.
- Do not fabricate chats, photos, quotes, or feelings.

## Product Principles

1. **Stay in the niche** — every scene, archive section, and visual choice serves the personal engagement-gift journey; reject features that would make it feel like a wedding site, feed, or generic romance product.
2. **Animation is the craft** — motion is not optional decoration; it carries emotion between moments. Ship purposeful cinematic animation for every scene and key interaction; Impeccable `/animate` and motion polish are in-scope by default.
3. **Real details only** — never invent relationship events, dates, quotes, or memories.
4. **One scene at a time** — owner review gates implementation progress.
5. **Mobile gift first** — design and motion must stay readable, smooth, and calm on a phone (no jank, no motion that blocks reading).
6. **Respectful tone** — شرعي engagement warmth; no generic AI romance.
7. **Static Phase 1** — no backend; structure for future dynamic content without a rewrite.

## Accessibility & Inclusion

Keyboard-operable controls, meaningful labels, visible focus styles, adequate contrast, accessible voice controls when present. Respect `prefers-reduced-motion` (offer calm reduced alternatives — still clear hierarchy, not a broken static dump). RTL Arabic as the default document direction.
