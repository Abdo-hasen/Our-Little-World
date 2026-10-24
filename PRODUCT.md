# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite + TypeScript. CSS modules / scene CSS (no Tailwind). Motion: `framer-motion`. Celebration: `canvas-confetti`. Phase 1 is fully static (no backend).

## Users

**Primary recipient:** Aya Ali (آية علي) — opens the site on a phone (often via QR / shared link) as a personal engagement gift.

**Owner / author:** Abdelrahman Hasan — supplies real memories, copy, photos, and audio; reviews each scene before the next is built.

## Product Purpose

A sincere, respectful cinematic engagement-gift website: a guided journey through real shared memories, then a permanent archive area for messages and keepsakes. Success means Aya feels the story is personal and warm — not generic romance — and the owner can extend scenes without rewriting the product.

## Positioning

Not a wedding website template and not a social feed. It is a private-feeling guided journey keyed to their engagement date (`13/03/2026`), built only from owner-supplied facts, with Egyptian Arabic voice where intimacy matters.

## Operating Context

- Mobile-first; first open is usually on a phone.
- Cinematic journey scenes in approved order; permanent archive is a separate area reachable after the final scene.
- Content is developed scene-by-scene with owner Q&A; invented relationship facts are forbidden.
- No background music track. The only audio is the owner’s final voice recording at the end of the journey (visitor-started; accessible controls).

## Capabilities and Constraints

**In scope (Phase 1):** Static React journey + permanent area with local content/assets; date gate as playful interaction (not security); final voice-message control; revisit earlier scenes.

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

1. **Real details only** — never invent relationship events, dates, quotes, or memories.
2. **One scene at a time** — owner review gates implementation progress.
3. **Mobile gift first** — design and motion must stay readable and calm on a phone.
4. **Respectful tone** — شرعي engagement warmth; no generic AI romance.
5. **Static Phase 1** — no backend; structure for future dynamic content without a rewrite.

## Accessibility & Inclusion

Keyboard-operable controls, meaningful labels, visible focus styles, adequate contrast, accessible voice controls when present. Respect `prefers-reduced-motion`. RTL Arabic as the default document direction.
